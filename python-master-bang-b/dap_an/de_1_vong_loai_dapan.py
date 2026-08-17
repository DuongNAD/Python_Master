# -*- coding: utf-8 -*-
"""DAP AN DE MO PHONG 1 - VONG LOAI BANG B (COS Pro Level 2)."""


# ===== DOC HIEU (Q1-Q4, 440 diem) ==========================================
def ky_tu_khac_nhau(s):
    """Q1 (110d)"""
    return sorted({c.lower() for c in s if c.isalpha()})


def tinh_phi_ship(kg, tinh_xa):
    """Q2 (110d)"""
    if kg <= 0:
        return 0
    phi = 20000
    if kg > 1:
        import math
        phi += 5000 * math.ceil(kg - 1)
    if tinh_xa:
        phi = int(phi * 1.5)
    return phi


def gop_email(ds):
    """Q3 (110d)"""
    ket_qua = {}
    for muc in ds:
        if "<" not in muc or ">" not in muc:
            continue
        ten, phan_con_lai = muc.split("<", 1)
        email = phan_con_lai.split(">", 1)[0].strip().lower()
        ten = ten.strip()
        if not ten or "@" not in email:
            continue
        ket_qua[email] = ten
    return ket_qua


def chuoi_khong_lap_dai_nhat(s):
    """Q4 (110d)"""
    vi_tri = {}
    trai = 0
    tot_nhat = 0
    for phai, c in enumerate(s):
        if c in vi_tri and vi_tri[c] >= trai:
            trai = vi_tri[c] + 1
        vi_tri[c] = phai
        tot_nhat = max(tot_nhat, phai - trai + 1)
    return tot_nhat


# ===== DEBUGGING (Q5-Q7, 280 diem) =========================================
def xep_loai(diem):
    """Q5 (93d) - LOI GOC: thu tu elif nguoc, moi diem >= 5 deu ra 'D'."""
    if diem < 0 or diem > 10:
        return "Khong hop le"
    if diem >= 8.5:
        return "A"
    if diem >= 7.0:
        return "B"
    if diem >= 5.5:
        return "C"
    if diem >= 4.0:
        return "D"
    return "F"


def dem_nguoc(n):
    """Q6 (93d) - LOI GOC: range(n, 0) thieu buoc -1 nen tra ve list rong."""
    if n <= 0:
        return []
    return list(range(n, 0, -1))


def nhan_ban_cau_hinh(mac_dinh, ghi_de):
    """Q7 (94d) - LOI GOC: dict(mac_dinh) la copy NONG, sua lam hong dict goc."""
    import copy
    ket_qua = copy.deepcopy(mac_dinh)
    for khoa, gia_tri in ghi_de.items():
        if isinstance(gia_tri, dict) and isinstance(ket_qua.get(khoa), dict):
            ket_qua[khoa].update(gia_tri)
        else:
            ket_qua[khoa] = gia_tri
    return ket_qua


# ===== DESIGN (Q8-Q10, 280 diem) ===========================================
def sap_xep_phien_ban(ds):
    """Q8 (93d)"""
    return sorted(ds, key=lambda v: [int(p) for p in v.split(".")])


def ma_hoa_caesar(s, k):
    """Q9 (93d)"""
    ket_qua = []
    for c in s:
        if "a" <= c <= "z":
            ket_qua.append(chr((ord(c) - 97 + k) % 26 + 97))
        elif "A" <= c <= "Z":
            ket_qua.append(chr((ord(c) - 65 + k) % 26 + 65))
        else:
            ket_qua.append(c)
    return "".join(ket_qua)


def thong_ke_ban_hang(don):
    """Q10 (94d)"""
    doanh_thu = {}
    for d in don:
        sl, gia = d.get("sl", 0), d.get("gia", 0)
        if sl <= 0 or gia < 0:
            continue
        ten = d["sp"]
        doanh_thu[ten] = doanh_thu.get(ten, 0) + sl * gia
    return sorted(doanh_thu.items(), key=lambda p: (-p[1], p[0]))


if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de1", "DAP AN DE 1 - VONG LOAI BANG B (COS Pro Level 2)")
