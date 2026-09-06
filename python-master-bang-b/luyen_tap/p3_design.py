# -*- coding: utf-8 -*-
"""
NHOM 3 - DESIGN / TU VIET HAM (15 bai)
================================================================
Doc docstring, tu viet toan bo phan than ham. Do kho tang dan:
  3.01 - 3.05  muc COS Pro Level 2  (vong loai)
  3.06 - 3.15  muc COS Pro Level 1  (chung ket)

Cham diem:   python cham_diem.py 3
Xem dap an:  dap_an/p3_design_dapan.py
Muc tieu thoi gian: 5-8 phut/bai. Qua 12 phut -> xem dap an roi lam lai sau 2 ngay.
================================================================
"""
import heapq
from collections import Counter, deque



# ---------------------------------------------------------------- Bai 3.01
def thong_ke_diem(diem):
    """
    diem: list so thuc. Tra ve dict:
      {"min": .., "max": .., "trung_binh": lam tron 2 chu so, "trung_vi": ..}
    List rong -> tra ve {} (dict rong).
    """
    if not diem:
        return {}
        
    n = len(diem)
    s = sorted(diem)

    if n%2 == 0:
        trung_vi = (s[n // 2 - 1] + s[n // 2]) / 2
    else:
        trung_vi = s[n // 2]

    return{
        "min": min(diem),
        "max": max(diem),
        "trung_binh": round(sum(diem)/n, 2),
        "trung_vi": trung_vi
    }

    


# ---------------------------------------------------------------- Bai 3.02
def gom_nhom_anagram(tu):
    """
    Gom cac tu la anagram cua nhau. Tra ve list cac nhom (list str),
    moi nhom sap xep A-Z, cac nhom sap xep theo phan tu dau tien.
    ["eat","tea","tan","ate","nat"] -> [["ate","eat","tea"],["nat","tan"]]
    """
    if not tu:
        return []

    result = {}
    for i in tu:
        key = "".join(sorted(i))
        if i not in result:
            result[key] = []

        result[key].append(i)
        



# ---------------------------------------------------------------- Bai 3.03
def giao_khoang(a, b):
    """
    a, b: list cac khoang dong [dau, cuoi] da sap xep tang, khong chong nhau.
    Tra ve list cac khoang giao nhau giua a va b. O(n+m).
    [[0,2],[5,10]] & [[1,5],[8,12]] -> [[1,2],[5,5],[8,10]]
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.04
def kiem_tra_so_du(so_du_dau, giao_dich):
    """
    giao_dich: list so nguyen (duong = nap, am = rut).
    Thuc hien lan luot; giao dich nao lam so du AM thi BO QUA giao dich do.
    Tra ve (so_du_cuoi, so_giao_dich_bi_bo_qua).
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.05
def top_k_pho_bien(arr, k):
    """
    Tra ve k phan tu xuat hien nhieu nhat, sap xep tan suat GIAM dan;
    cung tan suat thi gia tri TANG dan.
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.06
def duong_di_ngan_nhat(luoi):
    """
    luoi: list[list[int]], 0 = di duoc, 1 = tuong.
    Tim so BUOC it nhat tu (0,0) den (n-1,m-1), di 4 huong. Khong den duoc -> -1.
    O (0,0) tinh la 0 buoc. Neu o dau hoac o cuoi la tuong -> -1.
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.07
def so_dong_xu_it_nhat(menh_gia, tong):
    """
    So dong xu it nhat de tao ra 'tong' (moi menh gia dung khong gioi han lan).
    Khong tao duoc -> -1. tong = 0 -> 0.
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.08
def day_con_tang_dai_nhat(arr):
    """
    Do dai day con TANG NGHIEM NGAT dai nhat (khong can lien tiep). O(n log n).
    [10,9,2,5,3,7,101,18] -> 4
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.09
def gop_khoang(khoang):
    """
    Gop cac khoang chong lan hoac cham nhau. Tra ve list khoang da gop, sap tang.
    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.10
def phan_tich_log(dong):
    """
    dong: list chuoi dang "LEVEL|dich_vu|thong_diep" (LEVEL in INFO/WARN/ERROR).
    Tra ve dict {dich_vu: so_luong_ERROR} CHI voi cac dich vu co it nhat 1 ERROR.
    Dong sai dinh dang (khong du 3 phan) thi bo qua.
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.11
def xep_lich_toi_da(cong_viec):
    """
    cong_viec: list [bat_dau, ket_thuc]. Chon nhieu viec nhat sao cho khong chong nhau
    (viec ket thuc luc t va viec bat dau luc t duoc coi la KHONG chong).
    Tra ve so viec toi da. (Greedy: sap theo thoi diem ket thuc.)
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.12
def tinh_bieu_thuc(s):
    """
    Tinh bieu thuc chi gom so nguyen khong am va + - * / (khong ngoac),
    dung thu tu uu tien. Phep / la chia LAY NGUYEN huong ve 0 (nhu C/Java).
    "3+2*2" -> 7 ; " 3/2 " -> 1 ; " 3+5 / 2 " -> 5
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.13
def k_phan_tu_lon_nhat(arr, k):
    """
    Tra ve k phan tu LON NHAT theo thu tu GIAM dan, dung heap O(n log k).
    Neu k >= len(arr) thi tra ve toan bo mang da sap giam.
    """
    pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.14
class Kho:
    """
    Quan ly kho hang.
      nhap(ten, so_luong)  -> them hang (so_luong > 0)
      xuat(ten, so_luong)  -> tra True neu du hang va da tru, False neu khong du
      ton(ten)             -> so luong hien co (khong co -> 0)
      danh_sach()          -> list (ten, so_luong) sap theo so_luong GIAM,
                              cung so luong thi ten A-Z; bo qua mat hang = 0
    """

    def __init__(self):
        pass  # <-- viet code cua ban o day

    def nhap(self, ten, so_luong):
        pass  # <-- viet code cua ban o day

    def xuat(self, ten, so_luong):
        pass  # <-- viet code cua ban o day

    def ton(self, ten):
        pass  # <-- viet code cua ban o day

    def danh_sach(self):
        pass  # <-- viet code cua ban o day


# ---------------------------------------------------------------- Bai 3.15
class HangDoi:
    """
    Hang doi (FIFO) cai dat bang HAI NGAN XEP (list + append/pop cuoi).
    KHONG duoc dung pop(0), deque, hay insert(0, ...).
      them(x)   -> them vao cuoi
      lay()     -> lay ra phan tu dau, rong thi tra None
      xem()     -> xem phan tu dau khong lay, rong thi None
      rong()    -> True/False
    """

    def __init__(self):
        pass  # <-- viet code cua ban o day

    def them(self, x):
        pass  # <-- viet code cua ban o day

    def lay(self):
        pass  # <-- viet code cua ban o day

    def xem(self):
        pass  # <-- viet code cua ban o day

    def rong(self):
        pass  # <-- viet code cua ban o day
