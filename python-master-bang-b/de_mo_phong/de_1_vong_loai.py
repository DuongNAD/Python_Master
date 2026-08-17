# -*- coding: utf-8 -*-
"""
DE MO PHONG 1 - VONG LOAI BANG B  (chuan COS Pro Level 2)
==========================================================================
  10 cau | 1000 diem | 50 PHUT | >= 600 diem = dat chung chi
  Doc hieu code  Q1-Q4   440 diem
  Debugging      Q5-Q7   280 diem
  Design         Q8-Q10  280 diem

CACH LAM: bam gio 50 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python de_mo_phong/de_1_vong_loai.py
Dap an: dap_an/de_1_vong_loai_dapan.py
==========================================================================
"""
import math


# ================= PHAN 1: DOC HIEU CODE (Q1-Q4, 440 diem) ================

def ky_tu_khac_nhau(s):
    """
    Q1 (110d). Tra ve LIST cac chu cai khac nhau xuat hien trong s, viet thuong,
    sap xep A-Z. Bo qua chu so, dau cau, khoang trang.
      "Hello, World!" -> ["d","e","h","l","o","r","w"]
      "123 !!" -> []
    """
    tap = {___1___ for c in s if c.isalpha()}
    return ___2___


def tinh_phi_ship(kg, tinh_xa):
    """
    Q2 (110d). Tinh phi ship (so nguyen VND):
      - kg <= 0            -> 0
      - toi da 1kg         -> 20000
      - moi kg VUOT qua 1kg-> +5000, phan le LAM TRON LEN (1.2kg tinh nhu 2kg)
      - tinh xa            -> nhan 1.5 roi lay phan nguyen
      tinh_phi_ship(1.2, False) -> 25000 ; tinh_phi_ship(3, True) -> 45000
    """
    if kg <= 0:
        return 0
    phi = 20000
    if kg > 1:
        phi += 5000 * ___1___
    if tinh_xa:
        phi = ___2___
    return phi


def gop_email(ds):
    """
    Q3 (110d). ds: list chuoi dang "Ten <email>".
    Tra ve dict {email_viet_thuong: ten}. Bo qua dong khong co dau < >,
    dong thieu ten, hoac email khong chua "@". Trung email -> lay dong SAU cung.
      ["An <An@Gmail.com>", "Binh <b@x.vn>"] -> {"an@gmail.com": "An", "b@x.vn": "Binh"}
    """
    ket_qua = {}
    for muc in ds:
        if "<" not in muc or ">" not in muc:
            continue
        ten, phan_con_lai = muc.split("<", 1)
        email = ___1___
        ten = ten.strip()
        if not ten or ___2___:
            continue
        ket_qua[___3___] = ten
    return ket_qua


def chuoi_khong_lap_dai_nhat(s):
    """
    Q4 (110d). Do dai chuoi con LIEN TIEP dai nhat khong co ky tu lap lai.
      "abcabcbb" -> 3 ; "bbbbb" -> 1 ; "pwwkew" -> 3 ; "" -> 0
    (Ky thuat: cua so truot + dict luu vi tri xuat hien gan nhat.)
    """
    vi_tri = {}
    trai = 0
    tot_nhat = 0
    for phai, c in enumerate(s):
        if c in vi_tri and ___1___:
            trai = ___2___
        vi_tri[c] = phai
        tot_nhat = max(tot_nhat, ___3___)
    return tot_nhat


# ================= PHAN 2: DEBUGGING (Q5-Q7, 280 diem) ====================
# Ba ham duoi day CO LOI. Sua cho dung theo mo ta trong docstring.

def xep_loai(diem):
    """
    Q5 (93d). Xep loai theo diem 0-10:
      >= 8.5 "A" | >= 7.0 "B" | >= 5.5 "C" | >= 4.0 "D" | con lai "F"
      diem < 0 hoac > 10 -> "Khong hop le"
    """
    if diem < 0 or diem > 10:
        return "Khong hop le"
    if diem >= 4.0:
        return "D"
    elif diem >= 5.5:
        return "C"
    elif diem >= 7.0:
        return "B"
    elif diem >= 8.5:
        return "A"
    return "F"


def dem_nguoc(n):
    """
    Q6 (93d). Tra ve list [n, n-1, ..., 1]. n <= 0 -> [].
      dem_nguoc(5) -> [5, 4, 3, 2, 1]
    """
    if n <= 0:
        return []
    return list(range(n, 0))


def nhan_ban_cau_hinh(mac_dinh, ghi_de):
    """
    Q7 (94d). Tra ve cau hinh MOI = mac_dinh da duoc ghi de boi ghi_de.
    Neu ca hai cung khoa deu la dict thi TRON hai dict con.
    QUAN TRONG: dict 'mac_dinh' truyen vao KHONG duoc thay doi.
      nhan_ban_cau_hinh({"db": {"host": "localhost", "port": 5432}, "debug": False},
                        {"db": {"port": 6000}, "debug": True})
      -> {"db": {"host": "localhost", "port": 6000}, "debug": True}
    """
    ket_qua = dict(mac_dinh)
    for khoa, gia_tri in ghi_de.items():
        if isinstance(gia_tri, dict) and isinstance(ket_qua.get(khoa), dict):
            ket_qua[khoa].update(gia_tri)
        else:
            ket_qua[khoa] = gia_tri
    return ket_qua


# ================= PHAN 3: DESIGN (Q8-Q10, 280 diem) ======================

def sap_xep_phien_ban(ds):
    """
    Q8 (93d). ds: list chuoi phien ban dang "X.Y.Z" (3 so nguyen khong am).
    Tra ve list da sap xep TANG dan theo GIA TRI SO cua tung phan, khong phai
    theo thu tu chuoi.
      ["1.10.2", "1.9.10", "1.9.2"] -> ["1.9.2", "1.9.10", "1.10.2"]
    """
    pass  # <-- viet code cua ban o day


def ma_hoa_caesar(s, k):
    """
    Q9 (93d). Dich moi chu cai di k vi tri trong bang chu cai (vong lai tu dau),
    GIU NGUYEN hoa/thuong, ky tu khong phai chu cai giu nguyen.
      ma_hoa_caesar("Hello, World!", 3) -> "Khoor, Zruog!"
      ma_hoa_caesar("xyz", 3) -> "abc"
    """
    pass  # <-- viet code cua ban o day


def thong_ke_ban_hang(don):
    """
    Q10 (94d). don: list dict {"sp": ten, "sl": so_luong, "gia": don_gia}.
    Bo qua don co sl <= 0 hoac gia < 0. Cong don doanh thu (sl * gia) theo san pham.
    Tra ve LIST cac tuple (ten, doanh_thu) sap theo doanh thu GIAM dan;
    cung doanh thu thi ten A-Z.
      [{"sp":"ao","sl":2,"gia":100},{"sp":"quan","sl":1,"gia":300},
       {"sp":"ao","sl":1,"gia":100}]  ->  [("ao", 300), ("quan", 300)]
    """
    pass  # <-- viet code cua ban o day


# ==========================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de1", "DE 1 - VONG LOAI BANG B (COS Pro Level 2) - 50 phut")
