# -*- coding: utf-8 -*-
"""
So theo doi tien do + lich on lai ngat quang (spaced repetition).

    python3 so_theo_doi.py 4          # cham nhom 4 VA ghi lai ket qua
    python3 so_theo_doi.py all        # cham tat ca cac nhom va ghi lai
    python3 so_theo_doi.py hom_nay    # bai nao den han on lai hom nay
    python3 so_theo_doi.py yeu        # bai hay sai nhat, xep tu te nhat
    python3 so_theo_doi.py tom_tat    # bang tong quan tien do

Nguyen tac: sai thi mai lam lai; dung thi gian gian cach nhan doi
(1 -> 2 -> 4 -> 7 -> 14 -> 30 ngay). Dung mo dap an truoc khi het gio tu dat.
Du lieu nam trong tien_do.json, xoa file do la lam lai tu dau.
"""
import json
import os
import re
import subprocess
import sys
from datetime import date, timedelta

GOC = os.path.dirname(os.path.abspath(__file__))
SO = os.path.join(GOC, "tien_do.json")
BUOC = [1, 2, 4, 7, 14, 30]
DONG = re.compile(r"^\s*(PASS|FAIL)\s+(\d+\.\d+)\s+(.*)$")

XANH, DO, VANG, XAM, TAT = "\033[92m", "\033[91m", "\033[93m", "\033[90m", "\033[0m"
if os.environ.get("NO_COLOR") or not sys.stdout.isatty():
    XANH = DO = VANG = XAM = TAT = ""


def doc_so():
    if os.path.exists(SO):
        with open(SO, encoding="utf-8") as f:
            return json.load(f)
    return {}


def ghi_so(so):
    with open(SO, "w", encoding="utf-8") as f:
        json.dump(so, f, ensure_ascii=False, indent=1, sort_keys=True)


def cham_va_ghi(muc_tieu):
    """Goi cham_diem.py, in nguyen output, roi ghi ket qua vao so."""
    env = dict(os.environ, NO_COLOR="1")
    tien_trinh = subprocess.run(
        [sys.executable, os.path.join(GOC, "cham_diem.py"), muc_tieu],
        capture_output=True, text=True, env=env,
    )
    ket_qua = tien_trinh.stdout
    print(ket_qua, end="")
    if tien_trinh.stderr:
        print(tien_trinh.stderr, end="", file=sys.stderr)

    so = doc_so()
    hom_nay = date.today().isoformat()
    moi = 0
    for dong in ket_qua.splitlines():
        khop = DONG.match(dong)
        if not khop:
            continue
        trang_thai, ma, _ = khop.groups()
        muc = so.setdefault(ma, {"dung": 0, "sai": 0, "buoc": 0, "lan_cuoi": None, "den_han": hom_nay})
        muc["lan_cuoi"] = hom_nay
        if trang_thai == "PASS":
            muc["dung"] += 1
            muc["buoc"] = min(muc["buoc"] + 1, len(BUOC))
            cach = BUOC[muc["buoc"] - 1]
        else:
            muc["sai"] += 1
            muc["buoc"] = 0
            cach = 1
        muc["den_han"] = (date.today() + timedelta(days=cach)).isoformat()
        moi += 1
    ghi_so(so)
    print(f"\n{XAM}Da ghi {moi} muc vao {os.path.basename(SO)}.{TAT}")
    return 0 if tien_trinh.returncode == 0 else 1


def den_han():
    so = doc_so()
    if not so:
        print("So con trong. Cham it nhat mot nhom truoc: python3 so_theo_doi.py all")
        return 1
    hom_nay = date.today().isoformat()
    can_on = sorted(ma for ma, m in so.items() if m["den_han"] <= hom_nay)
    if not can_on:
        sap_toi = sorted(so.items(), key=lambda kv: kv[1]["den_han"])[:5]
        print(f"{XANH}Hom nay khong co bai nao den han.{TAT}\nSap toi:")
        for ma, m in sap_toi:
            print(f"  {XAM}{m['den_han']}{TAT}  {ma}")
        return 0
    print(f"{VANG}Can on lai hom nay: {len(can_on)} bai{TAT}\n")
    theo_nhom = {}
    for ma in can_on:
        theo_nhom.setdefault(ma.split(".")[0], []).append(ma)
    for nhom in sorted(theo_nhom):
        print(f"  Nhom {nhom}:  " + "  ".join(theo_nhom[nhom]))
    print(f"\n  Lam lai bang: python3 so_theo_doi.py {min(theo_nhom)}")
    return 0


def yeu():
    so = doc_so()
    if not so:
        print("So con trong.")
        return 1
    xep = sorted(so.items(), key=lambda kv: (-kv[1]["sai"], kv[1]["dung"]))
    co_sai = [x for x in xep if x[1]["sai"] > 0]
    if not co_sai:
        print(f"{XANH}Chua sai bai nao. Tang toc do len.{TAT}")
        return 0
    print(f"{DO}Bai hay sai nhat{TAT}\n")
    print(f"  {'ma':<8}{'sai':>5}{'dung':>6}   lan cuoi     den han")
    for ma, m in co_sai[:20]:
        print(f"  {ma:<8}{m['sai']:>5}{m['dung']:>6}   {m['lan_cuoi']}   {m['den_han']}")
    return 0


def tom_tat():
    so = doc_so()
    if not so:
        print("So con trong.")
        return 1
    theo_nhom = {}
    for ma, m in so.items():
        n = theo_nhom.setdefault(ma.split(".")[0], {"tong": 0, "thuoc": 0, "con_sai": 0})
        n["tong"] += 1
        if m["buoc"] >= 3:
            n["thuoc"] += 1
        if m["sai"] > 0 and m["buoc"] == 0:
            n["con_sai"] += 1
    print(f"\n  {'nhom':<6}{'bai':>5}{'da thuoc':>10}{'dang sai':>10}")
    print("  " + "-" * 31)
    for nhom in sorted(theo_nhom):
        n = theo_nhom[nhom]
        mau = XANH if n["con_sai"] == 0 else VANG
        print(f"  {nhom:<6}{n['tong']:>5}{n['thuoc']:>10}{mau}{n['con_sai']:>10}{TAT}")
    print(f"\n  {XAM}'da thuoc' = dung dung >= 3 lan lien tiep{TAT}")
    return 0


def main():
    lenh = sys.argv[1] if len(sys.argv) > 1 else "tom_tat"
    if lenh in ("hom_nay", "today"):
        return den_han()
    if lenh == "yeu":
        return yeu()
    if lenh in ("tom_tat", "tomtat"):
        return tom_tat()
    if lenh == "all" or lenh.isdigit():
        return cham_va_ghi(lenh)
    print(__doc__)
    return 1


if __name__ == "__main__":
    sys.exit(main())
