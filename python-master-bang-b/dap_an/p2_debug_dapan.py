# -*- coding: utf-8 -*-
"""
NHOM 2 - DEBUGGING - 280/1000 (vong loai) va 240/1000 (chung ket).
Day la file DAP AN (ban da sua). Xem GIAI_THICH.md de biet loi goc la gi.
"""


# ---------------------------------------------------------------- Bai 2.01
def trung_binh(arr):
    """Trung binh cong. LOI GOC: range(1, ...) bo mat phan tu dau tien."""
    if not arr:
        return 0
    tong = 0
    for i in range(0, len(arr)):
        tong += arr[i]
    return tong / len(arr)


# ---------------------------------------------------------------- Bai 2.02
def them_muc(muc, danh_sach=None):
    """
    Them muc vao danh sach roi tra ve. Khong truyen danh_sach thi tao list moi.
    LOI GOC: mutable default argument (danh_sach=[]) bi chia se giua cac lan goi.
    """
    if danh_sach is None:
        danh_sach = []
    danh_sach.append(muc)
    return danh_sach


# ---------------------------------------------------------------- Bai 2.03
def xoa_so_chan(arr):
    """
    Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr.
    LOI GOC: vua duyet vua remove -> nhay phan tu.
    """
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] % 2 == 0:
            arr.pop(i)
    return arr


# ---------------------------------------------------------------- Bai 2.04
def co_gia_tri(arr, x):
    """
    Kiem tra x co trong arr khong. LOI GOC: dung 'is' -> sai voi int > 256
    va voi chuoi tao luc chay.
    """
    for phan_tu in arr:
        if phan_tu == x:
            return True
    return False


# ---------------------------------------------------------------- Bai 2.05
def phan_tu_giua(arr):
    """
    Tra ve phan tu o chinh giua (mang le) hoac phan tu ben TRAI cua giua (mang chan).
    LOI GOC: dung '/' -> chi so la float -> TypeError.
    """
    if not arr:
        return None
    return arr[(len(arr) - 1) // 2]


# ---------------------------------------------------------------- Bai 2.06
def tao_bang(n):
    """
    Tao ma tran n x n gom toan 0, roi dat duong cheo chinh = 1.
    LOI GOC: [[0]*n]*n tao n THAM CHIEU den cung mot list.
    """
    bang = [[0] * n for _ in range(n)]
    for i in range(n):
        bang[i][i] = 1
    return bang


# ---------------------------------------------------------------- Bai 2.07
def xoa_gia_tri_rong(d):
    """
    Xoa moi khoa co gia tri "rong" (0, "", None, [], {}) khoi dict, sua TAI CHO.
    LOI GOC: xoa khoa trong khi dang duyet -> RuntimeError.
    """
    can_xoa = [k for k, v in d.items() if not v]
    for k in can_xoa:
        del d[k]
    return d


# ---------------------------------------------------------------- Bai 2.08
def hoa_ky_tu_dau(s):
    """
    Viet hoa ky tu dau tien cua chuoi, giu nguyen phan con lai.
    LOI GOC: gan s[0] = ... -> chuoi la immutable -> TypeError.
    """
    if not s:
        return s
    return s[0].upper() + s[1:]


# ---------------------------------------------------------------- Bai 2.09
def tim_max(arr):
    """
    Gia tri lon nhat. Mang rong -> None.
    LOI GOC: khoi tao ket_qua = 0 -> sai khi moi phan tu deu am.
    """
    if not arr:
        return None
    ket_qua = arr[0]
    for x in arr[1:]:
        if x > ket_qua:
            ket_qua = x
    return ket_qua


# ---------------------------------------------------------------- Bai 2.10
def ba_so_nho_nhat(arr):
    """
    Tra ve list 3 so nho nhat (tang dan). It hon 3 phan tu thi tra ve toan bo da sap.
    LOI GOC: return arr.sort()[:3] -> sort() tra ve None.
    """
    da_sap = sorted(arr)
    return da_sap[:3]


# ---------------------------------------------------------------- Bai 2.11
def tao_cac_ham_nhan(n):
    """
    Tra ve list n ham, ham thu i nhan doi so voi i.
    LOI GOC: closure bat bien 'i' theo THAM CHIEU -> moi ham deu nhan voi n-1.
    """
    cac_ham = []
    for i in range(n):
        cac_ham.append(lambda x, he_so=i: x * he_so)
    return cac_ham


# ---------------------------------------------------------------- Bai 2.12
def fib(n, ghi_nho=None):
    """
    Fibonacci: fib(0)=0, fib(1)=1. Co memo hoa.
    LOI GOC: memo dung mutable default + thieu dieu kien dung cho n<=1.
    """
    if ghi_nho is None:
        ghi_nho = {}
    if n <= 1:
        return n
    if n in ghi_nho:
        return ghi_nho[n]
    ghi_nho[n] = fib(n - 1, ghi_nho) + fib(n - 2, ghi_nho)
    return ghi_nho[n]


# ---------------------------------------------------------------- Bai 2.13
def gan_bang(a, b):
    """
    Kiem tra 2 so thuc bang nhau trong sai so 1e-9.
    LOI GOC: so sanh == truc tiep -> 0.1+0.2 != 0.3.
    """
    return abs(a - b) < 1e-9


# ---------------------------------------------------------------- Bai 2.14
def xoa_theo_chi_so(arr, i):
    """
    Xoa phan tu tai CHI SO i, tra ve arr moi. Chi so khong hop le -> tra ve ban sao arr.
    LOI GOC: dung arr.remove(i) -> remove xoa theo GIA TRI, khong phai chi so.
    """
    ban_sao = list(arr)
    if 0 <= i < len(ban_sao):
        ban_sao.pop(i)
    return ban_sao


# ---------------------------------------------------------------- Bai 2.15
DEM_TOAN_CUC = 0


def dem_tu(s):
    """
    Dem so tu trong chuoi va cong don vao bien toan cuc DEM_TOAN_CUC.
    Tra ve so tu cua LAN GOI NAY.
    LOI GOC: gan vao bien toan cuc ma khong khai bao global -> UnboundLocalError.
    """
    global DEM_TOAN_CUC
    so_tu = len(s.split())
    DEM_TOAN_CUC = DEM_TOAN_CUC + so_tu
    return so_tu
