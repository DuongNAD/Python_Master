# -*- coding: utf-8 -*-
"""
Python Master 2026 — Interactive Learning & Exam Hub Server.
Khởi chạy máy chủ cục bộ và mở trình duyệt bài giảng slide tương tác + phòng luyện tập.

Cách sử dụng:
    py launch_hub.py
    # hoặc:
    python launch_hub.py
"""

import os
import sys
import time
import threading
import json
import socket
import webbrowser
import subprocess
import traceback
import importlib.util
import http.server
import socketserver
import contextlib
import io

# Đảm bảo in tiếng Việt chuẩn trên Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
BANG_B_DIR = os.path.join(ROOT_DIR, "python-master-bang-b")
SLIDES_DIR = os.path.join(ROOT_DIR, "slides")
DEFAULT_PORT = 8088

if BANG_B_DIR not in sys.path:
    sys.path.insert(0, BANG_B_DIR)

try:
    import bo_test
except ImportError:
    bo_test = None


def find_free_port(start_port=8088, max_attempts=20):
    for p in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("127.0.0.1", p))
                return p
            except OSError:
                continue
    return start_port


class PythonMasterHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def do_GET(self):
        # Chuyển hướng mặc định vào slides/index.html
        if self.path in ("", "/", "/index.html"):
            self.send_response(302)
            self.send_header("Location", "/slides/index.html")
            self.end_headers()
            return

        if self.path == "/api/status":
            self._send_json({
                "status": "online",
                "python_version": sys.version,
                "server_dir": ROOT_DIR,
                "bang_b_available": os.path.isdir(BANG_B_DIR)
            })
            return

        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/run_code":
            self._handle_run_code()
        elif self.path == "/api/test_kata":
            self._handle_test_kata()
        elif self.path == "/api/run_exam":
            self._handle_run_exam()
        elif self.path == "/api/run_cham_diem":
            self._handle_run_cham_diem()
        else:
            self.send_error(404, "Endpoint not found")

    def _send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw)

    def _handle_run_code(self):
        try:
            req = self._read_json_body()
            code = req.get("code", "")
            t0 = time.time()
            proc = subprocess.run(
                [sys.executable, "-c", code],
                capture_output=True,
                text=True,
                timeout=8,
                cwd=BANG_B_DIR if os.path.isdir(BANG_B_DIR) else ROOT_DIR
            )
            elapsed_ms = round((time.time() - t0) * 1000, 1)
            self._send_json({
                "success": proc.returncode == 0,
                "stdout": proc.stdout,
                "stderr": proc.stderr,
                "returncode": proc.returncode,
                "time_ms": elapsed_ms
            })
        except subprocess.TimeoutExpired:
            self._send_json({
                "success": False,
                "stdout": "",
                "stderr": "Lỗi: Chương trình chạy quá thời gian cho phép (8s). Có thể gặp vòng lặp vô hạn!",
                "returncode": -1,
                "time_ms": 8000
            })
        except Exception as e:
            self._send_json({
                "success": False,
                "stdout": "",
                "stderr": f"Lỗi thực thi: {str(e)}",
                "returncode": -1,
                "time_ms": 0
            })

    def _handle_test_kata(self):
        try:
            req = self._read_json_body()
            group_id = int(req.get("group", 1))
            kata_id = str(req.get("kata_id", "1.01"))
            user_code = req.get("code", "")

            if not bo_test:
                self._send_json({
                    "success": False,
                    "message": "Không tìm thấy bộ test bo_test.py!"
                })
                return

            if group_id not in bo_test.NHOM:
                self._send_json({
                    "success": False,
                    "message": f"Không tồn tại nhóm bài tập {group_id}!"
                })
                return

            tests, dac_biet, ten_file = bo_test.NHOM[group_id]

            # Kiểm tra xem có phải bài tập đặc biệt không
            dac_biet_item = next((x for x in dac_biet if x[0] == kata_id), None)
            std_item = next((x for x in tests if x[0] == kata_id), None)

            if not dac_biet_item and not std_item:
                self._send_json({
                    "success": False,
                    "message": f"Không tìm thấy cấu hình test cho bài {kata_id} trong nhóm {group_id}!"
                })
                return

            # Thực thi mã nguồn người dùng trong namespace cô lập
            t0 = time.time()
            temp_mod = {}
            temp_mod["__file__"] = os.path.join(BANG_B_DIR, "luyen_tap", ten_file + ".py")

            # Redirect stdout trong lúc biên dịch hàm
            f_out = io.StringIO()
            with contextlib.redirect_stdout(f_out):
                exec(user_code, temp_mod)

            if std_item:
                ma, ten_ham, cac_test = std_item
                if ten_ham not in temp_mod or not callable(temp_mod[ten_ham]):
                    self._send_json({
                        "success": False,
                        "message": f"Không tìm thấy hàm `{ten_ham}` trong mã nguồn đã nộp!",
                        "results": []
                    })
                    return

                target_fn = temp_mod[ten_ham]
                results = []
                passed_count = 0

                for idx, (args, expected) in enumerate(cac_test, start=1):
                    try:
                        # Copy args nếu mutable để tránh hàm người dùng sửa biến của test
                        safe_args = []
                        for a in args:
                            if isinstance(a, list):
                                safe_args.append(list(a))
                            elif isinstance(a, dict):
                                safe_args.append(dict(a))
                            elif isinstance(a, set):
                                safe_args.append(set(a))
                            else:
                                safe_args.append(a)

                        got = target_fn(*safe_args)
                        ok = (got == expected)
                        if ok:
                            passed_count += 1
                        results.append({
                            "test_num": idx,
                            "args": repr(args),
                            "expected": repr(expected),
                            "got": repr(got),
                            "passed": ok,
                            "error": None
                        })
                    except Exception as err:
                        results.append({
                            "test_num": idx,
                            "args": repr(args),
                            "expected": repr(expected),
                            "got": None,
                            "passed": False,
                            "error": str(err)
                        })

                elapsed_ms = round((time.time() - t0) * 1000, 1)
                all_passed = (passed_count == len(cac_test))

                self._send_json({
                    "success": True,
                    "all_passed": all_passed,
                    "passed_count": passed_count,
                    "total_count": len(cac_test),
                    "results": results,
                    "time_ms": elapsed_ms,
                    "message": "✓ ĐẠT TOÀN BỘ TEST CASES!" if all_passed else f"✗ Chưa đạt: {passed_count}/{len(cac_test)} test cases thành công."
                })
            else:
                # Bài đặc biệt (dac_biet)
                ma, check_fn = dac_biet_item
                class ModuleProxy:
                    pass
                proxy = ModuleProxy()
                for k, v in temp_mod.items():
                    setattr(proxy, k, v)
                proxy.__file__ = temp_mod["__file__"]

                try:
                    check_fn(proxy)
                    elapsed_ms = round((time.time() - t0) * 1000, 1)
                    self._send_json({
                        "success": True,
                        "all_passed": True,
                        "passed_count": 1,
                        "total_count": 1,
                        "results": [{
                            "test_num": 1,
                            "args": "Kịch bản kiểm thử hướng đối tượng / tham chiếu",
                            "expected": "Vượt qua toàn bộ assertion",
                            "got": "Hoàn toàn chính xác",
                            "passed": True,
                            "error": None
                        }],
                        "time_ms": elapsed_ms,
                        "message": f"✓ ĐÃ VƯỢT QUA TOÀN BỘ KIỂM THỬ ĐẶC BIỆT ({check_fn.__doc__ or ''})!"
                    })
                except AssertionError as ae:
                    elapsed_ms = round((time.time() - t0) * 1000, 1)
                    self._send_json({
                        "success": True,
                        "all_passed": False,
                        "passed_count": 0,
                        "total_count": 1,
                        "results": [{
                            "test_num": 1,
                            "args": "Kịch bản kiểm thử",
                            "expected": "Pass",
                            "got": "AssertionError",
                            "passed": False,
                            "error": str(ae) or "AssertionError: Kết quả thực thi không thỏa mãn điều kiện đề bài."
                        }],
                        "time_ms": elapsed_ms,
                        "message": f"✗ Lỗi kiểm thử: {str(ae) or 'AssertionError'}"
                    })

        except Exception as e:
            tb = traceback.format_exc()
            self._send_json({
                "success": False,
                "all_passed": False,
                "message": f"Lỗi biên dịch / thực thi: {str(e)}",
                "traceback": tb
            })

    def _handle_run_exam(self):
        try:
            req = self._read_json_body()
            exam_name = req.get("exam", "de_mau_2708")
            valid_exams = {
                "de_mau_2708": "de_mau_2708.py",
                "de_1_vong_loai": "de_1_vong_loai.py",
                "de_2_vong_loai": "de_2_vong_loai.py",
                "de_3_vong_loai": "de_3_vong_loai.py",
                "de_4_chung_ket": "de_4_chung_ket.py"
            }
            if exam_name not in valid_exams:
                self._send_json({"success": False, "message": "Tên đề thi không hợp lệ!"})
                return

            exam_path = os.path.join(BANG_B_DIR, "de_mo_phong", valid_exams[exam_name])
            proc = subprocess.run(
                [sys.executable, exam_path],
                capture_output=True,
                text=True,
                timeout=15,
                cwd=BANG_B_DIR
            )
            self._send_json({
                "success": proc.returncode == 0,
                "output": proc.stdout or proc.stderr,
                "exam": exam_name
            })
        except Exception as e:
            self._send_json({"success": False, "message": str(e)})

    def _handle_run_cham_diem(self):
        try:
            req = self._read_json_body()
            group = str(req.get("group", "1"))
            use_dapan = bool(req.get("use_dapan", False))

            cmd = [sys.executable, "cham_diem.py", group]
            if use_dapan:
                cmd.append("-d")

            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=20,
                cwd=BANG_B_DIR
            )
            self._send_json({
                "success": proc.returncode == 0,
                "output": proc.stdout or proc.stderr
            })
        except Exception as e:
            self._send_json({"success": False, "message": str(e)})


def start_server():
    port = find_free_port(DEFAULT_PORT)
    server_address = ("127.0.0.1", port)
    httpd = socketserver.TCPServer(server_address, PythonMasterHandler)

    url = f"http://127.0.0.1:{port}/slides/index.html"
    print("=" * 66)
    print("🐍 PYTHON MASTER 2026 — VISUAL LEARNING HUB & EXAM ENGINE")
    print("=" * 66)
    print(f"📡 Đang phục vụ tại : http://127.0.0.1:{port}/")
    print(f"📖 Slide bài giảng   : {url}")
    print(f"🥊 Đấu trường Kata   : http://127.0.0.1:{port}/slides/practice.html")
    print(f"⚙️  Backend CPython   : {sys.version.split()[0]} ({sys.executable})")
    print("=" * 66)
    print("💡 Nhấn Ctrl + C trong terminal để dừng server.")
    print("-" * 66)

    # Mở trình duyệt sau 500ms
    def open_browser():
        time.sleep(0.5)
        webbrowser.open(url)

    threading.Thread(target=open_browser, daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Đã dừng máy chủ Python Master. Hẹn gặp lại!")
        httpd.server_close()


if __name__ == "__main__":
    start_server()
