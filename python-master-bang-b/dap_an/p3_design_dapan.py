# -*- coding: utf-8 -*-
"""
NHOM 3 - DESIGN (tu viet ham tu dau) - 280/1000 (vong loai) va 420/1000 (chung ket).
Day la file DAP AN. De bai chi giu lai chu ky ham + docstring.
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
    da_sap = sorted(diem)
    n = len(da_sap)
    giua = n // 2
    trung_vi = da_sap[giua] if n % 2 else (da_sap[giua - 1] + da_sap[giua]) / 2
    return {
        "min": da_sap[0],
        "max": da_sap[-1],
        "trung_binh": round(sum(da_sap) / n, 2),
        "trung_vi": trung_vi,
    }


# ---------------------------------------------------------------- Bai 3.02
def gom_nhom_anagram(tu):
    """
    Gom cac tu la anagram cua nhau. Tra ve list cac nhom (list str),
    moi nhom sap xep A-Z, cac nhom sap xep theo phan tu dau tien.
    ["eat","tea","tan","ate","nat"] -> [["ate","eat","tea"],["nat","tan"]]
    """
    bang = {}
    for t in tu:
        khoa = "".join(sorted(t))
        bang.setdefault(khoa, []).append(t)
    nhom = [sorted(v) for v in bang.values()]
    nhom.sort(key=lambda g: g[0])
    return nhom


# ---------------------------------------------------------------- Bai 3.03
def giao_khoang(a, b):
    """
    a, b: list cac khoang dong [dau, cuoi] da sap xep tang, khong chong nhau.
    Tra ve list cac khoang giao nhau giua a va b. O(n+m).
    [[0,2],[5,10]] & [[1,5],[8,12]] -> [[1,2],[5,5],[8,10]]
    """
    i = j = 0
    ket_qua = []
    while i < len(a) and j < len(b):
        dau = max(a[i][0], b[j][0])
        cuoi = min(a[i][1], b[j][1])
        if dau <= cuoi:
            ket_qua.append([dau, cuoi])
        if a[i][1] < b[j][1]:
            i += 1
        else:
            j += 1
    return ket_qua


# ---------------------------------------------------------------- Bai 3.04
def kiem_tra_so_du(so_du_dau, giao_dich):
    """
    giao_dich: list so nguyen (duong = nap, am = rut).
    Thuc hien lan luot; giao dich nao lam so du AM thi BO QUA giao dich do.
    Tra ve (so_du_cuoi, so_giao_dich_bi_bo_qua).
    """
    so_du = so_du_dau
    bo_qua = 0
    for gd in giao_dich:
        if so_du + gd < 0:
            bo_qua += 1
        else:
            so_du += gd
    return (so_du, bo_qua)


# ---------------------------------------------------------------- Bai 3.05
def top_k_pho_bien(arr, k):
    """
    Tra ve k phan tu xuat hien nhieu nhat, sap xep tan suat GIAM dan;
    cung tan suat thi gia tri TANG dan.
    """
    dem = Counter(arr)
    return [x for x, _ in sorted(dem.items(), key=lambda p: (-p[1], p[0]))[:k]]


# ---------------------------------------------------------------- Bai 3.06
def duong_di_ngan_nhat(luoi):
    """
    luoi: list[list[int]], 0 = di duoc, 1 = tuong.
    Tim so BUOC it nhat tu (0,0) den (n-1,m-1), di 4 huong. Khong den duoc -> -1.
    O (0,0) tinh la 0 buoc. Neu o dau hoac o cuoi la tuong -> -1.
    """
    if not luoi or not luoi[0]:
        return -1
    n, m = len(luoi), len(luoi[0])
    if luoi[0][0] == 1 or luoi[n - 1][m - 1] == 1:
        return -1
    hang_doi = deque([(0, 0, 0)])
    da_tham = {(0, 0)}
    while hang_doi:
        r, c, buoc = hang_doi.popleft()
        if r == n - 1 and c == m - 1:
            return buoc
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < m and luoi[nr][nc] == 0 and (nr, nc) not in da_tham:
                da_tham.add((nr, nc))
                hang_doi.append((nr, nc, buoc + 1))
    return -1


# ---------------------------------------------------------------- Bai 3.07
def so_dong_xu_it_nhat(menh_gia, tong):
    """
    So dong xu it nhat de tao ra 'tong' (moi menh gia dung khong gioi han lan).
    Khong tao duoc -> -1. tong = 0 -> 0.
    """
    VO_CUC = float("inf")
    dp = [0] + [VO_CUC] * tong
    for t in range(1, tong + 1):
        for mg in menh_gia:
            if mg <= t and dp[t - mg] + 1 < dp[t]:
                dp[t] = dp[t - mg] + 1
    return -1 if dp[tong] == VO_CUC else dp[tong]


# ---------------------------------------------------------------- Bai 3.08
def day_con_tang_dai_nhat(arr):
    """
    Do dai day con TANG NGHIEM NGAT dai nhat (khong can lien tiep). O(n log n).
    [10,9,2,5,3,7,101,18] -> 4
    """
    import bisect
    duoi = []
    for x in arr:
        vi_tri = bisect.bisect_left(duoi, x)
        if vi_tri == len(duoi):
            duoi.append(x)
        else:
            duoi[vi_tri] = x
    return len(duoi)


# ---------------------------------------------------------------- Bai 3.09
def gop_khoang(khoang):
    """
    Gop cac khoang chong lan hoac cham nhau. Tra ve list khoang da gop, sap tang.
    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
    """
    if not khoang:
        return []
    da_sap = sorted(khoang, key=lambda k: k[0])
    ket_qua = [list(da_sap[0])]
    for dau, cuoi in da_sap[1:]:
        if dau <= ket_qua[-1][1]:
            ket_qua[-1][1] = max(ket_qua[-1][1], cuoi)
        else:
            ket_qua.append([dau, cuoi])
    return ket_qua


# ---------------------------------------------------------------- Bai 3.10
def phan_tich_log(dong):
    """
    dong: list chuoi dang "LEVEL|dich_vu|thong_diep" (LEVEL in INFO/WARN/ERROR).
    Tra ve dict {dich_vu: so_luong_ERROR} CHI voi cac dich vu co it nhat 1 ERROR.
    Dong sai dinh dang (khong du 3 phan) thi bo qua.
    """
    ket_qua = {}
    for d in dong:
        phan = d.split("|")
        if len(phan) != 3:
            continue
        muc, dich_vu, _ = phan
        if muc.strip() == "ERROR":
            ten = dich_vu.strip()
            ket_qua[ten] = ket_qua.get(ten, 0) + 1
    return ket_qua


# ---------------------------------------------------------------- Bai 3.11
def xep_lich_toi_da(cong_viec):
    """
    cong_viec: list [bat_dau, ket_thuc]. Chon nhieu viec nhat sao cho khong chong nhau
    (viec ket thuc luc t va viec bat dau luc t duoc coi la KHONG chong).
    Tra ve so viec toi da. (Greedy: sap theo thoi diem ket thuc.)
    """
    if not cong_viec:
        return 0
    da_sap = sorted(cong_viec, key=lambda c: c[1])
    dem = 0
    het_luc = float("-inf")
    for bat_dau, ket_thuc in da_sap:
        if bat_dau >= het_luc:
            dem += 1
            het_luc = ket_thuc
    return dem


# ---------------------------------------------------------------- Bai 3.12
def tinh_bieu_thuc(s):
    """
    Tinh bieu thuc chi gom so nguyen khong am va + - * / (khong ngoac),
    dung thu tu uu tien. Phep / la chia LAY NGUYEN huong ve 0 (nhu C/Java).
    "3+2*2" -> 7 ; " 3/2 " -> 1 ; " 3+5 / 2 " -> 5
    """
    ngan_xep = []
    so = 0
    dau = "+"
    s = s + "+"  # sentinel de xu ly so cuoi
    for c in s:
        if c.isdigit():
            so = so * 10 + int(c)
        elif c == " ":
            continue
        else:
            if dau == "+":
                ngan_xep.append(so)
            elif dau == "-":
                ngan_xep.append(-so)
            elif dau == "*":
                ngan_xep.append(ngan_xep.pop() * so)
            else:
                truoc = ngan_xep.pop()
                ngan_xep.append(int(truoc / so))
            dau = c
            so = 0
    return sum(ngan_xep)


# ---------------------------------------------------------------- Bai 3.13
def k_phan_tu_lon_nhat(arr, k):
    """
    Tra ve k phan tu LON NHAT theo thu tu GIAM dan, dung heap O(n log k).
    Neu k >= len(arr) thi tra ve toan bo mang da sap giam.
    """
    if k <= 0:
        return []
    dong = []
    for x in arr:
        heapq.heappush(dong, x)
        if len(dong) > k:
            heapq.heappop(dong)
    return sorted(dong, reverse=True)


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
        self._hang = {}

    def nhap(self, ten, so_luong):
        if so_luong <= 0:
            return
        self._hang[ten] = self._hang.get(ten, 0) + so_luong

    def xuat(self, ten, so_luong):
        if so_luong <= 0 or self._hang.get(ten, 0) < so_luong:
            return False
        self._hang[ten] -= so_luong
        return True

    def ton(self, ten):
        return self._hang.get(ten, 0)

    def danh_sach(self):
        con = [(t, s) for t, s in self._hang.items() if s > 0]
        con.sort(key=lambda p: (-p[1], p[0]))
        return con


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
        self._vao = []
        self._ra = []

    def _chuyen(self):
        if not self._ra:
            while self._vao:
                self._ra.append(self._vao.pop())

    def them(self, x):
        self._vao.append(x)

    def lay(self):
        self._chuyen()
        return self._ra.pop() if self._ra else None

    def xem(self):
        self._chuyen()
        return self._ra[-1] if self._ra else None

    def rong(self):
        return not self._vao and not self._ra
