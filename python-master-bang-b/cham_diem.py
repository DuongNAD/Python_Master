# -*- coding: utf-8 -*-
"""
Cham diem bai luyen tap.

    python cham_diem.py 1          # cham nhom 1 (doc hieu)
    python cham_diem.py 2          # cham nhom 2 (debug)
    python cham_diem.py 3          # cham nhom 3 (design)
    python cham_diem.py all        # cham ca 3 nhom
    python cham_diem.py all -d     # cham file DAP AN (de kiem tra bo test)
    python cham_diem.py 1 -v       # hien chi tiet test sai
"""
import importlib.util
import io
import os
import sys
import traceback
import contextlib

GOC = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, GOC)

import bo_test  # noqa: E402

XANH, DO, VANG, XAM, TAT = "\033[92m", "\033[91m", "\033[93m", "\033[90m", "\033[0m"
if os.environ.get("NO_COLOR") or not sys.stdout.isatty():
    XANH = DO = VANG = XAM = TAT = ""


def nap_module(duong_dan, ten):
    spec = importlib.util.spec_from_file_location(ten, duong_dan)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def bang_nhau(a, b):
    if isinstance(a, float) or isinstance(b, float):
        try:
            return abs(a - b) < 1e-9
        except TypeError:
            return a == b
    return a == b


def mo_ta(x):
    s = repr(x)
    return s if len(s) <= 70 else s[:67] + "..."


def cham_nhom(so_nhom, dung_dap_an=False, chi_tiet=False):
    tests, dac_biet, ten_file = bo_test.NHOM[so_nhom]
    if dung_dap_an:
        duong_dan = os.path.join(GOC, "dap_an", ten_file + "_dapan.py")
    else:
        duong_dan = os.path.join(GOC, "luyen_tap", ten_file + ".py")

    print(f"\n{'=' * 62}\nNHOM {so_nhom}  <-  {os.path.relpath(duong_dan, GOC)}\n{'=' * 62}")
    if not os.path.exists(duong_dan):
        print(f"{DO}Khong tim thay file{TAT}")
        return 0, 0

    try:
        with contextlib.redirect_stdout(io.StringIO()):
            mod = nap_module(duong_dan, f"bai_nhom{so_nhom}")
    except Exception:
        print(f"{DO}File khong import duoc:{TAT}\n{traceback.format_exc()}")
        return 0, len(tests) + len(dac_biet)

    muc = []
    for ma, ten_ham, cac_test in tests:
        muc.append((ma, ten_ham, cac_test, None))
    for ma, ham_kt in dac_biet:
        muc.append((ma, None, None, ham_kt))
    muc.sort(key=lambda x: x[0])

    dat = 0
    for ma, ten_ham, cac_test, ham_kt in muc:
        loi = None
        if ham_kt is not None:
            try:
                ham_kt(mod)
            except Exception as e:
                loi = f"{type(e).__name__}: {e}"
        else:
            ham = getattr(mod, ten_ham, None)
            if ham is None:
                loi = f"chua co ham {ten_ham}()"
            else:
                for args, mong_doi in cac_test:
                    try:
                        thuc_te = ham(*[_ban_sao(a) for a in args])
                    except Exception as e:
                        loi = f"{ten_ham}{_hien(args)} -> {type(e).__name__}: {e}"
                        break
                    if not bang_nhau(thuc_te, mong_doi):
                        loi = (f"{ten_ham}{_hien(args)}\n         mong doi: "
                               f"{mo_ta(mong_doi)}\n         nhan duoc: {mo_ta(thuc_te)}")
                        break
        nhan = ten_ham or "(kiem tra rieng)"
        if loi is None:
            dat += 1
            print(f"  {XANH}PASS{TAT}  {ma}  {XAM}{nhan}{TAT}")
        else:
            print(f"  {DO}FAIL{TAT}  {ma}  {nhan}")
            if True:  # luon hien chi tiet loi de hoc
                print(f"        {VANG}{loi}{TAT}")
    tong = len(muc)
    mau = XANH if dat == tong else (VANG if dat > tong * 0.6 else DO)
    print(f"\n  Ket qua: {mau}{dat}/{tong}{TAT}  "
          f"({round(dat / tong * 1000) if tong else 0}/1000 diem quy doi)")
    return dat, tong


def _ban_sao(x):
    if isinstance(x, list):
        return [_ban_sao(i) for i in x]
    if isinstance(x, dict):
        return {k: _ban_sao(v) for k, v in x.items()}
    return x


def _hien(args):
    return "(" + ", ".join(mo_ta(a) for a in args) + ")"


def main():
    tham_so = sys.argv[1:]
    dung_dap_an = "-d" in tham_so or "--dapan" in tham_so
    chi_tiet = "-v" in tham_so
    muc_tieu = next((t for t in tham_so if not t.startswith("-")), "all")
    nhom = sorted(bo_test.NHOM) if muc_tieu == "all" else [int(muc_tieu)]

    tong_dat = tong_bai = 0
    for n in nhom:
        d, t = cham_nhom(n, dung_dap_an, chi_tiet)
        tong_dat += d
        tong_bai += t
    if len(nhom) > 1:
        print(f"\n{'=' * 62}\nTONG: {tong_dat}/{tong_bai}\n{'=' * 62}")
    return 0 if tong_dat == tong_bai else 1


if __name__ == "__main__":
    sys.exit(main())
