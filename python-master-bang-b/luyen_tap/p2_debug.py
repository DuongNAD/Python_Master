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
import collections
def trung_binh(arr):
    """Trung binh cong cac phan tu. Mang rong -> tra ve 0."""
    if not arr:
        return 0
    tong = 0
    for i in range(0, len(arr)):
        tong += arr[i]
    return tong / len(arr)


# ---------------------------------------------------------------- Bai 2.02
def them_muc(muc, danh_sach=None):
    """
    Them muc vao danh sach roi tra ve danh sach do.
    Neu KHONG truyen danh_sach, moi lan goi phai tao mot list MOI.
      them_muc(1) -> [1]
      them_muc(2) -> [2]     (khong phai [1, 2])
    """
    if danh_sach is None:
        danh_sach=[]
    danh_sach.append(muc)
    return danh_sach


# ---------------------------------------------------------------- Bai 2.03
def xoa_so_chan(arr):
    """Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr."""
    for x in list(arr):
        if x % 2 == 0:
            arr.remove(x)
    return arr


# ---------------------------------------------------------------- Bai 2.04
def co_gia_tri(arr, x):
    """Tra ve True neu x co trong arr. Phai dung voi so lon va chuoi dai."""
    for phan_tu in arr:
        if x == phan_tu:
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
    return arr[(len(arr)-1) //2]


# ---------------------------------------------------------------- Bai 2.06
def tao_bang(n):
    """Tao ma tran n x n toan 0, sau do dat duong cheo chinh = 1 (ma tran don vi)."""
    bang = []
    for i in range(n):
        hang=[]
        for j in range(n):
            hang.append(0)
        
        bang.append(hang)


    for i in range(n):
        bang[i][i] = 1
    return bang


# ---------------------------------------------------------------- Bai 2.07
def xoa_gia_tri_rong(d):
    """Xoa moi khoa co gia tri rong (0, "", None, [], {}) khoi dict, sua TAI CHO."""
    for k in list(d):
        if not d[k]:
            del d[k]
    return d


# ---------------------------------------------------------------- Bai 2.08
def hoa_ky_tu_dau(s):
    """Viet hoa ky tu dau tien, giu nguyen phan con lai. "" -> ""."""
    if not s:
        return s
    
    return s[0].upper() + s[1:]


# ---------------------------------------------------------------- Bai 2.09
def tim_max(arr):
    """Gia tri lon nhat trong arr. Mang rong -> None. Phai dung ca khi moi so deu am."""
    if not arr:
        return None
    ket_qua = arr[0]
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
    new_arr = sorted(arr)
    return new_arr[:3]


# ---------------------------------------------------------------- Bai 2.11
def tong_duong_cheo(matrix):
    """
    Tinh tong cac phan tu tren duong cheo chinh cua ma tran vuong N x N.
    Ma tran rong -> tra ve 0.
      tong_duong_cheo([[1, 2], [3, 4]]) -> 1 + 4 = 5
      tong_duong_cheo([[1, 0, 0], [0, 5, 0], [0, 0, 9]]) -> 1 + 5 + 9 = 15
    """
    if not matrix:
        return 0
    tong = 0
    for i in range(len(matrix) ):
        tong += matrix[i][i]
    return tong


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
    if abs(a-b) <= 1e-9:
        return True
    return False


# ---------------------------------------------------------------- Bai 2.14
def xoa_theo_chi_so(arr, i):
    """
    Tra ve list MOI da xoa phan tu tai CHI SO i. Chi so khong hop le -> ban sao arr.
    KHONG duoc sua arr goc.
    """
    ban_sao = list(arr)
    if 0 <= i < len(ban_sao):
        ban_sao.pop(i)
    return ban_sao


# ---------------------------------------------------------------- Bai 2.15



def dem_tu(s):
    """
    Dem so tu trong s, cong don vao DEM_TOAN_CUC, tra ve so tu cua LAN GOI NAY.
      dem_tu("a b") -> 2, sau do DEM_TOAN_CUC == 2
      dem_tu("c")   -> 1, sau do DEM_TOAN_CUC == 3
    """
    global DEM_TOAN_CUC 
    so_tu = len(s.split())
    DEM_TOAN_CUC = DEM_TOAN_CUC + so_tu
    return so_tu


# ================================================================
# CHAY THU CAC BAI VOI INPUT CO SAN (BAM RUN HOAC CHAY FILE NAY)
# ================================================================
if __name__ == "__main__":
    import sys
    if sys.platform == "win32":
        try:
            sys.stdout.reconfigure(encoding="utf-8")
            sys.stderr.reconfigure(encoding="utf-8")
        except Exception:
            pass

    print("=" * 60)
    print("KET QUA CHAY THU CAC HAM (DA CO SAN INPUT):")
    print("=" * 60)

    # --- Bài 2.11: tong_duong_cheo
    m1 = [[1, 2], [3, 4]]
    print("\n[Bài 2.11] tong_duong_cheo:")
    print(f"  Input: {m1}")
    print(f"  Output thực tế: {tong_duong_cheo(m1)}")
    print(f"  Mong đợi:       5  (1 + 4)")

    m2 = [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
    print(f"  Input: {m2}")
    print(f"  Output thực tế: {tong_duong_cheo(m2)}")
    print(f"  Mong đợi:       15 (1 + 5 + 9)")

    # --- Bài 2.12: fib
    print("\n[Bài 2.12] fib:")
    try:
        print(f"  Input: n = 1")
        print(f"  Output thực tế: {fib(1)}")
        print(f"  Mong đợi:       1")
    except Exception as e:
        print(f"  Output thực tế: LỖI -> {type(e).__name__}: {e}")
        print(f"  Mong đợi:       fib(1) = 1")

    # --- Bài 2.13: gan_bang
    print("\n[Bài 2.13] gan_bang:")
    print(f"  Input: a = 0.1 + 0.2, b = 0.3")
    print(f"  Output thực tế: {gan_bang(0.1 + 0.2, 0.3)}")
    print(f"  Mong đợi:       True")

    # --- Bài 2.14: xoa_theo_chi_so
    arr_test = [10, 20, 30]
    print("\n[Bài 2.14] xoa_theo_chi_so:")
    print(f"  Input: arr = [10, 20, 30], chi_so = 1")
    try:
        print(f"  Output thực tế: {xoa_theo_chi_so(arr_test, 1)}")
        print(f"  Mong đợi:       [10, 30]")
    except Exception as e:
        print(f"  Output thực tế: LỖI -> {type(e).__name__}: {e}")
        print(f"  Mong đợi:       [10, 30]")

    # --- Bài 2.15: dem_tu
    print("\n[Bài 2.15] dem_tu:")
    try:
        DEM_TOAN_CUC = 0
        kq = dem_tu("a b")
        print(f"  Input: 'a b'")
        print(f"  Output thực tế: so_tu = {kq}, DEM_TOAN_CUC = {DEM_TOAN_CUC}")
        print(f"  Mong đợi:       so_tu = 2, DEM_TOAN_CUC = 2")
    except Exception as e:
        print(f"  Output thực tế: LỖI -> {type(e).__name__}: {e}")
        print(f"  Mong đợi:       so_tu = 2, DEM_TOAN_CUC = 2")

    print("\n" + "=" * 60)
