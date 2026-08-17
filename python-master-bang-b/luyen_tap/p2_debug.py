# -*- coding: utf-8 -*-
"""
NHOM 2 - DEBUGGING (15 bai)
================================================================
Moi ham duoi day CO LOI. Docstring mo ta dung hanh vi MONG MUON.
Nhiem vu: sua CANG IT dong CANG TOT de ham chay dung.

Cham diem:   python cham_diem.py 2
Xem dap an:  dap_an/p2_debug_dapan.py  +  GIAI_THICH.md
Muc tieu thoi gian: 2-3 phut/bai.
================================================================
"""


# ---------------------------------------------------------------- Bai 2.01
def trung_binh(arr):
    """Trung binh cong cac phan tu. Mang rong -> tra ve 0."""
    if not arr:
        return 0
    tong = 0
    for i in range(1, len(arr)):
        tong += arr[i]
    return tong / len(arr)


# ---------------------------------------------------------------- Bai 2.02
def them_muc(muc, danh_sach=[]):
    """
    Them muc vao danh sach roi tra ve danh sach do.
    Neu KHONG truyen danh_sach, moi lan goi phai tao mot list MOI.
      them_muc(1) -> [1]
      them_muc(2) -> [2]     (khong phai [1, 2])
    """
    danh_sach.append(muc)
    return danh_sach


# ---------------------------------------------------------------- Bai 2.03
def xoa_so_chan(arr):
    """Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr."""
    for x in arr:
        if x % 2 == 0:
            arr.remove(x)
    return arr


# ---------------------------------------------------------------- Bai 2.04
def co_gia_tri(arr, x):
    """Tra ve True neu x co trong arr. Phai dung voi so lon va chuoi dai."""
    for phan_tu in arr:
        if phan_tu is x:
            return True
    return False


# ---------------------------------------------------------------- Bai 2.05
def phan_tu_giua(arr):
    """
    Tra ve phan tu chinh giua (mang le) hoac phan tu ben TRAI cua giua (mang chan).
    [1,2,3] -> 2 ; [1,2,3,4] -> 2 ; [] -> None
    """
    if not arr:
        return None
    return arr[(len(arr) - 1) / 2]


# ---------------------------------------------------------------- Bai 2.06
def tao_bang(n):
    """Tao ma tran n x n toan 0, sau do dat duong cheo chinh = 1 (ma tran don vi)."""
    bang = [[0] * n] * n
    for i in range(n):
        bang[i][i] = 1
    return bang


# ---------------------------------------------------------------- Bai 2.07
def xoa_gia_tri_rong(d):
    """Xoa moi khoa co gia tri rong (0, "", None, [], {}) khoi dict, sua TAI CHO."""
    for k in d:
        if not d[k]:
            del d[k]
    return d


# ---------------------------------------------------------------- Bai 2.08
def hoa_ky_tu_dau(s):
    """Viet hoa ky tu dau tien, giu nguyen phan con lai. "" -> ""."""
    if not s:
        return s
    s[0] = s[0].upper()
    return s


# ---------------------------------------------------------------- Bai 2.09
def tim_max(arr):
    """Gia tri lon nhat trong arr. Mang rong -> None. Phai dung ca khi moi so deu am."""
    if not arr:
        return None
    ket_qua = 0
    for x in arr:
        if x > ket_qua:
            ket_qua = x
    return ket_qua


# ---------------------------------------------------------------- Bai 2.10
def ba_so_nho_nhat(arr):
    """
    Tra ve list 3 so nho nhat theo thu tu tang. It hon 3 phan tu -> tra ve toan bo da sap.
    KHONG duoc sua doi arr goc.
    """
    return arr.sort()[:3]


# ---------------------------------------------------------------- Bai 2.11
def tao_cac_ham_nhan(n):
    """
    Tra ve list n ham; ham thu i khi goi voi x phai tra ve x * i.
      f = tao_cac_ham_nhan(3);  f[0](10) -> 0, f[1](10) -> 10, f[2](10) -> 20
    """
    cac_ham = []
    for i in range(n):
        cac_ham.append(lambda x: x * i)
    return cac_ham


# ---------------------------------------------------------------- Bai 2.12
def fib(n, ghi_nho={}):
    """
    Fibonacci co memo hoa: fib(0)=0, fib(1)=1, fib(10)=55.
    Bo nho dem KHONG duoc chia se sai giua cac lan goi doc lap.
    """
    if n in ghi_nho:
        return ghi_nho[n]
    ghi_nho[n] = fib(n - 1, ghi_nho) + fib(n - 2, ghi_nho)
    return ghi_nho[n]


# ---------------------------------------------------------------- Bai 2.13
def gan_bang(a, b):
    """Tra ve True neu a va b bang nhau trong sai so 1e-9. gan_bang(0.1+0.2, 0.3) -> True"""
    return a == b


# ---------------------------------------------------------------- Bai 2.14
def xoa_theo_chi_so(arr, i):
    """
    Tra ve list MOI da xoa phan tu tai CHI SO i. Chi so khong hop le -> ban sao arr.
    KHONG duoc sua arr goc.
    """
    ban_sao = list(arr)
    ban_sao.remove(i)
    return ban_sao


# ---------------------------------------------------------------- Bai 2.15
DEM_TOAN_CUC = 0


def dem_tu(s):
    """
    Dem so tu trong s, cong don vao DEM_TOAN_CUC, tra ve so tu cua LAN GOI NAY.
      dem_tu("a b") -> 2, sau do DEM_TOAN_CUC == 2
      dem_tu("c")   -> 1, sau do DEM_TOAN_CUC == 3
    """
    so_tu = len(s.split())
    DEM_TOAN_CUC = DEM_TOAN_CUC + so_tu
    return so_tu
