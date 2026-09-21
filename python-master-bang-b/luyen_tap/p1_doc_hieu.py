# -*- coding: utf-8 -*-
"""
NHOM 1 - DOC HIEU CODE / DIEN CHO TRONG (15 bai)
================================================================
Day la dang chiem DIEM CAO NHAT trong de Bang B: 440/1000.
Thay moi ___1___, ___2___ ... bang doan code dung. KHONG sua cac dong khac.
(___1___ la mot ten bien hop le nen file van chay duoc, chi bao NameError
 cho den khi ban dien xong.)

Cham diem:   python cham_diem.py 1
Xem dap an:  dap_an/p1_doc_hieu_dapan.py
Muc tieu thoi gian: 90 giay/bai. Day la dang phai lam THAT NHANH.
================================================================
"""


# ---------------------------------------------------------------- Bai 1.01
def dem_nguyen_am(s: str):
    """Dem so nguyen am (a e i o u, khong phan biet hoa thuong) trong chuoi s."""
    nguyen_am = "aeiou"
    dem = 0
    for ky_tu in s.lower():
        if ky_tu in nguyen_am:
            dem += 1
    return dem


# ---------------------------------------------------------------- Bai 1.02
def chuan_hoa_ten(s):
    """
    Chuan hoa ho ten: bo khoang trang thua o dau/cuoi va giua cac tu,
    viet hoa chu cai dau moi tu, con lai viet thuong.
    "  nGUYEN   anh   duong " -> "Nguyen Anh Duong"
    """
    cac_tu = s.split()
    ket_qua = [tu.capitalize() for tu in cac_tu]
    return " ".join(ket_qua)


# ---------------------------------------------------------------- Bai 1.03
def tong_chu_so(n):
    """Tra ve tong cac chu so cua so nguyen n (n co the am). tong_chu_so(-4567) -> 22"""
    n = abs(n)
    tong = 0
    while n>0:
        tong += n %10
        n = n//10
    return tong


# ---------------------------------------------------------------- Bai 1.04
def max_thu_hai(arr):
    """
    Tra ve gia tri lon thu hai trong cac gia tri PHAN BIET cua arr.
    Neu khong ton tai (mang co it hon 2 gia tri phan biet) tra ve None.
    [3,1,4,1,5] -> 4 ; [7,7,7] -> None
    """
    phan_biet = set(arr)
    if len(phan_biet) < 2:
        return None
    phan_biet.remove(max(phan_biet))
    return max(phan_biet)


# ---------------------------------------------------------------- Bai 1.05
def dem_tan_suat(arr):
    """Tra ve dict {phan_tu: so_lan_xuat_hien}. Chi duoc dung 1 dong trong vong lap."""
    bang = {}
    for x in arr:
        bang[x] = bang.get(x,0)+1
    return bang


# ---------------------------------------------------------------- Bai 1.06
def dao_thu_tu_tu(s):
    """
    Dao nguoc thu tu cac tu trong cau, chuan hoa khoang trang ve 1 dau cach.
    "hom nay troi dep" -> "dep troi nay hom"
    """
    cac_tu = s.split()
    cac_tu.reverse()
    return " ".join(cac_tu)


# ---------------------------------------------------------------- Bai 1.07
def la_doi_xung(s):
    """
    Kiem tra chuoi doi xung, BO QUA ky tu khong phai chu/so va khong phan biet hoa thuong.
    "A man, a plan, a canal: Panama" -> True ; "race a car" -> False
    """
    sach = [c.lower() for c in s if c.isalnum()]
    return sach == sach[::-1]


# ---------------------------------------------------------------- Bai 1.08
def gop_dict_cong_don(a, b):
    """
    Gop 2 dict. Khoa trung nhau thi CONG gia tri. Khong duoc sua a hay b.
    {"x": 1, "y": 2} + {"y": 5, "z": 3} -> {"x": 1, "y": 7, "z": 3}
    """
    ket_qua = a.copy()
    for khoa, gia_tri in b.items():
        ket_qua[khoa] = ket_qua.get(khoa,0)+gia_tri
    return ket_qua


# ---------------------------------------------------------------- Bai 1.09
def loc_so_nguyen_to(arr):
    """Tra ve list cac so nguyen to trong arr, giu nguyen thu tu."""
    def la_nguyen_to(n):
        if n < 2:
            return False
        i = 2
        while i*i <= n:          # dieu kien nay quyet dinh do phuc tap O(sqrt(n))
            if n % i == 0:
                return False
            i += 1
        return True

    return [x for x in arr if la_nguyen_to(x)]


# ---------------------------------------------------------------- Bai 1.10
def nen_chuoi(s):
    """Nen chuoi kieu run-length: "aaabbc" -> "a3b2c1" ; "" -> "" ; "abc" -> "a1b1c1"."""
    if not s:
        return ""
    ket_qua = []
    ky_tu_truoc = s[0]
    dem = 1
    for c in s[1:]:
        if c == ky_tu_truoc:
            dem += 1
        else:
            ket_qua.append(ky_tu_truoc + str(dem))
            ky_tu_truoc = c
            dem = 1
    ket_qua.append(ky_tu_truoc + str(dem))
    return "".join(ket_qua)


# ---------------------------------------------------------------- Bai 1.11
def xoay_phai(arr, k):
    """
    Xoay mang sang PHAI k buoc. k co the lon hon len(arr). Tra ve list MOI.
    [1,2,3,4,5], k=2 -> [4,5,1,2,3] ; [1,2,3], k=7 -> [3,1,2]
    """
    if not arr:
        return []
    k = k % len(arr)
    return arr[-k:] + arr[:-k] if k else list(arr)


# ---------------------------------------------------------------- Bai 1.12
def tim_cap_tong(arr, target):
    """
    Tim CAP CHI SO (i, j) voi i<j sao cho arr[i]+arr[j]==target. Tra ve cap dau tien
    tim duoc khi duyet j tu trai sang phai; khong co thi None. Do phuc tap O(n).
    [2,7,11,15], target=9 -> (0, 1)
    """
    da_gap = {}                 # gia_tri -> chi so
    for j, x in enumerate(arr):
        can = ___1___
        if ___2___:
            return (da_gap[can], j)
        da_gap[x] = ___3___
    return None


# ---------------------------------------------------------------- Bai 1.13
def xep_hang_hoc_sinh(hoc_sinh):
    """
    hoc_sinh: list dict {"ten": str, "diem": float, "tuoi": int}
    Sap xep: diem GIAM dan; cung diem thi tuoi TANG dan; cung ca hai thi ten A-Z.
    Tra ve list ten.
    """
    da_sap = sorted(hoc_sinh, key=lambda h: ___1___)
    return ___2___


# ---------------------------------------------------------------- Bai 1.14
def doi_co_so(n, b):
    """
    Doi so nguyen khong am n sang he co so b (2 <= b <= 16), tra ve chuoi VIET HOA.
    n=0 -> "0" ; doi_co_so(255, 16) -> "FF"
    """
    if n == 0:
        return "0"
    chu_so = "0123456789ABCDEF"
    ket_qua = []
    while n > 0:
        ket_qua.append(___1___)
        n = ___2___
    return ___3___


# ---------------------------------------------------------------- Bai 1.15
def ngoac_hop_le(s):
    """
    Kiem tra chuoi ngoac () [] {} co hop le khong (ky tu khac duoc bo qua).
    "{[()]}" -> True ; "([)]" -> False ; "" -> True
    """
    cap = {")": "(", "]": "[", "}": "{"}
    ngan_xep = []
    for c in s:
        if c in "([{":
            ngan_xep.append(___1___)
        elif c in cap:
            if not ngan_xep or ___2___:
                return False
    return ___3___
