# -*- coding: utf-8 -*-
"""
NHOM 1 - DOC HIEU CODE (Code Comprehension) - 440/1000 diem trong de Bang B.
Day la file DAP AN. Cac dong danh dau "cho trong (n)" chinh la cho trong tuong ung trong de bai.
"""


# ---------------------------------------------------------------- Bai 1.01
def dem_nguyen_am(s):
    """Dem so nguyen am (a e i o u, khong phan biet hoa thuong) trong chuoi s."""
    nguyen_am = "aeiou"
    dem = 0
    for ky_tu in s.lower():  # <-- cho trong (1)
        if ky_tu in nguyen_am:  # <-- cho trong (2)
            dem += 1
    return dem


# ---------------------------------------------------------------- Bai 1.02
def chuan_hoa_ten(s):
    """
    Chuan hoa ho ten: bo khoang trang thua o dau/cuoi va giua cac tu,
    viet hoa chu cai dau moi tu, con lai viet thuong.
    "  nGUYEN   anh   duong " -> "Nguyen Anh Duong"
    """
    cac_tu = s.split()  # <-- cho trong (1)
    ket_qua = [tu.capitalize() for tu in cac_tu]  # <-- cho trong (2)
    return " ".join(ket_qua)  # <-- cho trong (3)


# ---------------------------------------------------------------- Bai 1.03
def tong_chu_so(n):
    """Tra ve tong cac chu so cua so nguyen n (n co the am)."""
    n = abs(n)
    tong = 0
    while n > 0:  # <-- cho trong (1)
        tong += n % 10  # <-- cho trong (2)
        n = n // 10  # <-- cho trong (3)
    return tong


# ---------------------------------------------------------------- Bai 1.04
def max_thu_hai(arr):
    """
    Tra ve gia tri lon thu hai trong cac gia tri PHAN BIET cua arr.
    Neu khong ton tai (mang co it hon 2 gia tri phan biet) tra ve None.
    """
    phan_biet = set(arr)  # <-- cho trong (1)
    if len(phan_biet) < 2:
        return None
    phan_biet.remove(max(phan_biet))  # <-- cho trong (2)
    return max(phan_biet)


# ---------------------------------------------------------------- Bai 1.05
def dem_tan_suat(arr):
    """Tra ve dict {phan_tu: so_lan_xuat_hien}."""
    bang = {}
    for x in arr:
        bang[x] = bang.get(x, 0) + 1  # <-- cho trong (1)
    return bang


# ---------------------------------------------------------------- Bai 1.06
def dao_thu_tu_tu(s):
    """
    Dao nguoc thu tu cac tu trong cau, chuan hoa khoang trang ve 1 dau cach.
    "hom nay troi dep" -> "dep troi nay hom"
    """
    cac_tu = s.split()
    cac_tu.reverse()  # <-- cho trong (1)
    return " ".join(cac_tu)


# ---------------------------------------------------------------- Bai 1.07
def la_doi_xung(s):
    """
    Kiem tra chuoi doi xung, BO QUA ky tu khong phai chu/so va khong phan biet hoa thuong.
    "A man, a plan, a canal: Panama" -> True
    """
    sach = [c.lower() for c in s if c.isalnum()]  # <-- cho trong (1)
    return sach == sach[::-1]  # <-- cho trong (2)


# ---------------------------------------------------------------- Bai 1.08
def gop_dict_cong_don(a, b):
    """
    Gop 2 dict. Khoa trung nhau thi CONG gia tri.
    {"x": 1, "y": 2} + {"y": 5, "z": 3} -> {"x": 1, "y": 7, "z": 3}
    """
    ket_qua = dict(a)  # <-- cho trong (1)
    for khoa, gia_tri in b.items():  # <-- cho trong (2)
        ket_qua[khoa] = ket_qua.get(khoa, 0) + gia_tri  # <-- cho trong (3)
    return ket_qua


# ---------------------------------------------------------------- Bai 1.09
def loc_so_nguyen_to(arr):
    """Tra ve list cac so nguyen to trong arr, giu nguyen thu tu."""
    def la_nguyen_to(n):
        if n < 2:
            return False
        i = 2
        while i * i <= n:  # <-- cho trong (1)
            if n % i == 0:
                return False
            i += 1
        return True

    return [x for x in arr if la_nguyen_to(x)]  # <-- cho trong (2)


# ---------------------------------------------------------------- Bai 1.10
def nen_chuoi(s):
    """
    Nen chuoi theo kieu run-length: "aaabbc" -> "a3b2c1". Chuoi rong -> "".
    """
    if not s:
        return ""
    ket_qua = []
    ky_tu_truoc = s[0]
    dem = 1
    for c in s[1:]:  # <-- cho trong (1)
        if c == ky_tu_truoc:
            dem += 1
        else:
            ket_qua.append(ky_tu_truoc + str(dem))  # <-- cho trong (2)
            ky_tu_truoc = c
            dem = 1
    ket_qua.append(ky_tu_truoc + str(dem))
    return "".join(ket_qua)


# ---------------------------------------------------------------- Bai 1.11
def xoay_phai(arr, k):
    """
    Xoay mang sang PHAI k buoc. k co the lon hon len(arr).
    [1,2,3,4,5], k=2 -> [4,5,1,2,3]
    """
    if not arr:
        return []
    k = k % len(arr)  # <-- cho trong (1)
    return arr[-k:] + arr[:-k] if k else list(arr)  # <-- cho trong (2)


# ---------------------------------------------------------------- Bai 1.12
def tim_cap_tong(arr, target):
    """
    Tim CAP CHI SO (i, j) i<j sao cho arr[i]+arr[j]==target. Tra ve cap dau tien
    tim duoc khi duyet j tu trai sang phai; khong co thi tra ve None. Do phuc tap O(n).
    """
    da_gap = {}  # gia_tri -> chi so
    for j, x in enumerate(arr):
        can = target - x  # <-- cho trong (1)
        if can in da_gap:  # <-- cho trong (2)
            return (da_gap[can], j)
        da_gap[x] = j  # <-- cho trong (3)
    return None


# ---------------------------------------------------------------- Bai 1.13
def xep_hang_hoc_sinh(hoc_sinh):
    """
    hoc_sinh: list dict {"ten": str, "diem": float, "tuoi": int}
    Sap xep: diem GIAM dan; cung diem thi tuoi TANG dan; cung ca hai thi ten A-Z.
    Tra ve list ten.
    """
    da_sap = sorted(hoc_sinh, key=lambda h: (-h["diem"], h["tuoi"], h["ten"]))  # <-- cho trong (1)
    return [h["ten"] for h in da_sap]  # <-- cho trong (2)


# ---------------------------------------------------------------- Bai 1.14
def doi_co_so(n, b):
    """
    Doi so nguyen khong am n sang he co so b (2 <= b <= 16), tra ve chuoi HOA.
    n=0 -> "0". 255 he 16 -> "FF".
    """
    if n == 0:
        return "0"
    chu_so = "0123456789ABCDEF"
    ket_qua = []
    while n > 0:
        ket_qua.append(chu_so[n % b])  # <-- cho trong (1)
        n = n // b  # <-- cho trong (2)
    return "".join(reversed(ket_qua))  # <-- cho trong (3)


# ---------------------------------------------------------------- Bai 1.15
def ngoac_hop_le(s):
    """
    Kiem tra chuoi ngoac () [] {} co hop le khong. "{[()]}" -> True, "([)]" -> False
    """
    cap = {")": "(", "]": "[", "}": "{"}
    ngan_xep = []
    for c in s:
        if c in "([{":
            ngan_xep.append(c)  # <-- cho trong (1)
        elif c in cap:
            if not ngan_xep or ngan_xep.pop() != cap[c]:  # <-- cho trong (2)
                return False
    return len(ngan_xep) == 0  # <-- cho trong (3)
