# -*- coding: utf-8 -*-
"""
So No Python - Cong don so bai tap can lam moi ngay (Daily Micro-Habit Tracker).

Quy tac:
- Bat dau tu Thu Hai, 12/10/2026.
- Moi ngay lam it nhat 1 bai tu kho luyen_tap.
- Neu ngay nao khong lam, so bai se tu dong CONG DON vao cac ngay tiep theo (No bai).
- Khi lam bu thanh cong, so bai no se giam tuong ung.

Cach dung:
    python so_no_python.py          # Kiem tra so bai can lam hom nay / no con lai
    python so_no_python.py ghi      # Cap nhat trang thai sau khi lam xong bai
"""

import json
import os
import sys
from datetime import date, datetime

GOC = os.path.dirname(os.path.abspath(__file__))
FILE_NO = os.path.join(GOC, "so_no_daily.json")
FILE_TIENDO = os.path.join(GOC, "tien_do.json")
NGAY_BAT_DAU = date(2026, 10, 12)  # Thu Hai tuan sau

def doc_du_lieu_no():
    if os.path.exists(FILE_NO):
        try:
            with open(FILE_NO, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {
        "ngay_bat_dau": NGAY_BAT_DAU.isoformat(),
        "lich_su_hoan_thanh": {},  # "YYYY-MM-DD": [ma_bai, ...]
        "tong_bai_da_giai": 0
    }

def ghi_du_lieu_no(data):
    with open(FILE_NO, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def dem_bai_tien_do():
    if os.path.exists(FILE_TIENDO):
        try:
            with open(FILE_TIENDO, "r", encoding="utf-8") as f:
                so = json.load(f)
                return sum(1 for m in so.values() if m.get("dung", 0) > 0)
        except Exception:
            pass
    return 0

def kiem_tra():
    data = doc_du_lieu_no()
    hom_nay = date.today()
    
    print("=" * 60)
    print("  PYTHON MASTER - SO NO BAI TAP HANG NGAY (DAILY DRILL)")
    print("=" * 60)
    print(f"  Ngay he thong : {hom_nay.strftime('%d/%m/%Y')}")
    print(f"  Ngay khoi dong: {NGAY_BAT_DAU.strftime('%d/%m/%Y')} (Thu Hai)")
    print("-" * 60)

    if hom_nay < NGAY_BAT_DAU:
        con_lai = (NGAY_BAT_DAU - hom_nay).days
        print(f"  Trang thai    : CHUA DEN NGAY KHOI DONG (con {con_lai} ngay nua).")
        print("  So bai no     : 0 bai.")
        print("  Chi thi       : Nghi ngoi hoac tap trung hoc Machine Learning / QC.")
        print("=" * 60)
        return

    so_ngay_troi_qua = (hom_nay - NGAY_BAT_DAU).days + 1
    tong_quota = so_ngay_troi_qua * 1  # 1 bai / ngay
    
    # Dem so bai da lam theo lich su hoan thanh hoac dem tien do
    da_lam = sum(len(danh_sach) for danh_sach in data.get("lich_su_hoan_thanh", {}).values())
    no_bai = max(0, tong_quota - da_lam)
    
    bai_hom_nay = len(data.get("lich_su_hoan_thanh", {}).get(hom_nay.isoformat(), []))

    print(f"  So ngay trong chu ky : {so_ngay_troi_qua} ngay")
    print(f"  Tong chi tieu tich luy: {tong_quota} bai")
    print(f"  Tong bai da hoan thanh: {da_lam} bai")
    print(f"  Hom nay da giai       : {bai_hom_nay} bai")
    print("-" * 60)

    if no_bai == 0:
        print("  Ket luan: BAN DANG DUNG TIEN DO! Khong co bai no.")
    else:
        print(f"  CAN GIAI HOM NAY: {no_bai} BAI (Bao gom 1 bai hom nay + {no_bai - 1} bai no cu).")
        print("  Hay mo thu muc luyen_tap de giai quyet no ngay.")
    print("=" * 60)

if __name__ == "__main__":
    kiem_tra()
