# -*- coding: utf-8 -*-
"""
Kiem tra dap an cua cac de mo phong: moi de phai dat DUNG 1000/1000.
Neu khong du 1000 nghia la dap an sai hoac bo cham sai -> phai sua.

    python3 de_mo_phong/_kiem_dap_an.py          # kiem tra tat ca de
    python3 de_mo_phong/_kiem_dap_an.py de_2     # chi mot de
"""
import importlib.util
import io
import contextlib
import os
import re
import sys

DAY = os.path.dirname(os.path.abspath(__file__))
GOC = os.path.dirname(DAY)
sys.path.insert(0, DAY)
sys.path.insert(0, GOC)

import _runner  # noqa: E402

# (ten de, module cham, file dap an)
DE = [
    ("de_mau_2708", "_cham_de_mau", "de_mau_2708_dapan.py"),
    ("de_1_vong_loai", "_cham_de1", "de_1_vong_loai_dapan.py"),
    ("de_2_vong_loai", "_cham_de2", "de_2_vong_loai_dapan.py"),
    ("de_3_vong_loai", "_cham_de3", "de_3_vong_loai_dapan.py"),
    ("de_4_chung_ket", "_cham_de4", "de_4_chung_ket_dapan.py"),
]


def nap(duong_dan, ten):
    spec = importlib.util.spec_from_file_location(ten, duong_dan)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def kiem_tra(ten_de, ten_cham, ten_dapan):
    duong_dan = os.path.join(GOC, "dap_an", ten_dapan)
    if not os.path.exists(duong_dan):
        return ten_de, None, f"thieu file {ten_dapan}"
    try:
        bo_cham = __import__(ten_cham)
        mod = nap(duong_dan, ten_de + "_dapan")
    except Exception as e:
        return ten_de, None, f"{type(e).__name__}: {e}"

    thu = io.StringIO()
    try:
        with contextlib.redirect_stdout(thu):
            _runner.cham(mod, bo_cham, ten_de)
    except Exception as e:
        return ten_de, None, f"{type(e).__name__}: {e}"

    ra = thu.getvalue()
    khop = re.search(r"TONG DIEM:\s*(\d+)/1000", ra)
    diem = int(khop.group(1)) if khop else None
    hong = [d.strip() for d in ra.splitlines() if re.search(r"\[\+\s*0\]", d)]
    return ten_de, diem, hong


def main():
    loc = sys.argv[1] if len(sys.argv) > 1 else None
    danh_sach = [d for d in DE if not loc or loc in d[0]]
    if not danh_sach:
        print(f"Khong co de nao khop '{loc}'. Co: " + ", ".join(d[0] for d in DE))
        return 1

    print(f"\n{'=' * 64}\nKIEM TRA DAP AN CAC DE MO PHONG (moi de phai 1000/1000)\n{'=' * 64}")
    tat_ca_dat = True
    for ten_de, ten_cham, ten_dapan in danh_sach:
        ten, diem, chi_tiet = kiem_tra(ten_de, ten_cham, ten_dapan)
        if diem == 1000:
            print(f"  OK    {ten:<16} 1000/1000")
        else:
            tat_ca_dat = False
            print(f"  HONG  {ten:<16} {diem if diem is not None else '?'}/1000")
            if isinstance(chi_tiet, str):
                print(f"        {chi_tiet}")
            else:
                for d in chi_tiet[:6]:
                    print(f"        {d}")
    print()
    return 0 if tat_ca_dat else 1


if __name__ == "__main__":
    sys.exit(main())
