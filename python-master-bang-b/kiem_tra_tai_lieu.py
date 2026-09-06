# -*- coding: utf-8 -*-
"""
Kiem tra moi doan code Python trong tai lieu .md deu chay duoc.

    python3 kiem_tra_tai_lieu.py            # kiem tra tat ca tai lieu
    python3 kiem_tra_tai_lieu.py BAY        # chi file co ten khop 'BAY'

Quy uoc: block nao co nhan "SAI" ngay phia tren (vi du "Doan code SAI:")
thi duoc phep nem loi - do la vi du minh hoa loi co y.
Moi block con lai phai TU CHAY DUOC MOT MINH (copy-paste vao Python la chay).
"""
import contextlib
import io
import pathlib
import re
import sys
import textwrap

# Tai lieu phai CHAY DUOC: moi block la mot vi du hoan chinh, copy-paste la chay.
PHAI_CHAY = ["KIEN_THUC.md", "MAU_CODE.md", "BAY_PYTHON.md",
             "CHIEN_THUAT_PHONG_THI.md"]
# Tai lieu TRICH DOAN: chi dem, KHONG kiem tra. Block trong cac file nay co tinh
# la manh code roi ("dong sai", "sua thanh", bang tra cuu co ky hieu ->), nen
# ngay ca kiem tra cu phap cung khong co y nghia.
TRICH_DOAN = ["CHEATSHEET.md", "GIAI_THICH.md", "GIAI_THICH_P5.md"]
TAI_LIEU = PHAI_CHAY + TRICH_DOAN
FENCE = re.compile(r"```python\n(.*?)```", re.S)
NHAN_SAI = re.compile(r"SAI|Sai|sai\b|loi\b|Loi|WRONG|Bad", re.I)


def cac_block(duong_dan):
    src = duong_dan.read_text(encoding="utf-8")
    for m in FENCE.finditer(src):
        truoc = src[max(0, m.start() - 300):m.start()]
        cac_dong = [d.strip() for d in truoc.splitlines() if d.strip()]
        nhan = cac_dong[-1] if cac_dong else ""
        yield m.group(1), nhan, src[:m.start()].count("\n") + 1


def kiem_tra(duong_dan):
    tong = bo_qua = hong = 0
    su_co = []
    if duong_dan.name in TRICH_DOAN:
        return sum(1 for _ in cac_block(duong_dan)), 0, 0, []
    for code, nhan, dong in cac_block(duong_dan):
        tong += 1
        code = textwrap.dedent(code)
        try:
            da_dich = compile(code, f"{duong_dan.name}:{dong}", "exec")
        except SyntaxError as e:
            hong += 1
            su_co.append(f"dong {dong}: LOI CU PHAP - {e.msg}")
            continue
        if NHAN_SAI.search(nhan):
            bo_qua += 1
            continue
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                exec(da_dich, {"__name__": "__main__"})
        except Exception as e:
            hong += 1
            su_co.append(f"dong {dong}: {type(e).__name__}: {str(e)[:70]}")
    return tong, bo_qua, hong, su_co


def main():
    loc = sys.argv[1] if len(sys.argv) > 1 else None
    goc = pathlib.Path(__file__).resolve().parent
    ds = [goc / t for t in TAI_LIEU if (goc / t).exists() and (not loc or loc.lower() in t.lower())]
    if not ds:
        print("Khong tim thay tai lieu nao khop.")
        return 1

    print(f"\n{'=' * 68}\nKIEM TRA CODE TRONG TAI LIEU\n{'=' * 68}")
    print(f"  {'file':<26}{'block':>7}{'bo qua':>8}{'hong':>6}   che do")

    print("  " + "-" * 60)
    tong_hong = 0
    chi_tiet = []
    for d in ds:
        tong, bo_qua, hong, su_co = kiem_tra(d)
        tong_hong += hong
        che_do = "trich doan - khong kiem" if d.name in TRICH_DOAN else "phai chay duoc"
        print(f"  {d.name:<26}{tong:>7}{bo_qua:>8}{hong:>6}   {che_do}")
        if su_co:
            chi_tiet.append((d.name, su_co))
    for ten, su_co in chi_tiet:
        print(f"\n  {ten}:")
        for s in su_co:
            print(f"    {s}")
    print(f"\n  {'TAT CA CHAY DUOC' if tong_hong == 0 else str(tong_hong) + ' BLOCK HONG'}\n")
    return 0 if tong_hong == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
