# -*- coding: utf-8 -*-
"""
DE MO PHONG 6 - LUYEN TAP BANG B (COS Pro Level 2)
==========================================================================
  10 cau | 1000 diem | 50 PHUT | >= 600 diem = dat chung chi
  Dien cho trong  Q1-Q6   440 diem (74, 74, 73, 73, 73, 73d)
  Debugging       Q7-Q8   180 diem (90d/cau)
  Design          Q9-Q10  380 diem (190d/cau)

CACH LAM: bam gio 50 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python de_mo_phong/de_6_luyen_tap.py
Dap an: dap_an/de_6_luyen_tap_dapan.py
==========================================================================
"""


# ================= PHAN 1: DIEN CHO TRONG (Q1-Q6, 440 diem) ================

def solution_01(arr, target):
    """
    DE BAI:
    Cho mang so nguyen arr da duoc sap xep tang dan va mot so nguyen target.
    Hay tim hai chi so khac nhau [left, right] (left < right) sao cho tong hai phan tu
    tai vi tri do dung bang target (arr[left] + arr[right] == target).
    Su dung ky thuat Hai con tro (Two Pointers) de tim kiem voi do phuc tap O(N).
    Neu khong tim thay cap chi so nao hoac mang co it hon 2 phan tu, tra ve list rong [].

    GIAI THICH THAM SO:
    - arr: list cac so nguyen da sap xep tang dan (0 <= len(arr) <= 10^5).
    - target: so nguyen dai dien cho tong can tim.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list[int]: [left, right] chua hai chi so (0-indexed) hoac [] neu khong tim thay.

    VI DU:
    - arr = [2, 7, 11, 15], target = 9 -> return [0, 1]
    - arr = [1, 2, 3, 4], target = 20 -> return []

    GIAI THICH VI DU:
    - arr[0] + arr[1] = 2 + 7 = 9 dung bang target -> return [0, 1].
    - Khong co 2 so nao trong mang [1, 2, 3, 4] co tong bang 20 -> return [].
    """
    left = 0
    right = len(arr) - 1
    while ___1___:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            ___2___
        else:
            ___3___
    return []


def solution_02(n):
    """
    DE BAI:
    Cho so nguyen duong n. Hay dao nguoc cac chu so cua n de duoc so n_rev (chu y loai bo
    cac chu so 0 o dau sau khi dao nguoc bang cach ep kieu ve so nguyen).
    Tinh tong S = n + n_rev.
    Kiem tra xem S co phai la so doi xung (Palindrome - doc tu trai sang phai hay tu phai
    sang trai deu giong nhau) hay khong.
    Tra ve True neu S doi xung, nguoc lai tra ve False.

    GIAI THICH THAM SO:
    - n: so nguyen duong (1 <= n <= 10^9).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool: True neu tong n + n_rev la so doi xung, False neu khong.

    VI DU:
    - n = 73 -> return False
    - n = 121 -> return True
    - n = 1200 -> return True

    GIAI THICH VI DU:
    - n = 73 -> n_rev = 37 -> S = 73 + 37 = 110 (110 != 011) -> False.
    - n = 121 -> n_rev = 121 -> S = 121 + 121 = 242 (242 la so doi xung) -> True.
    - n = 1200 -> n_rev = 21 -> S = 1200 + 21 = 1221 (1221 la so doi xung) -> True.
    """
    n_rev = ___1___
    total = n + n_rev
    s = ___2___
    return ___3___


def solution_03(s, k):
    """
    DE BAI:
    Ma hoa chuoi van ban s theo mat ma Caesar voi buoc dich k (k >= 0).
    Quy tac:
    - Moi chu cai in thuong ('a'-'z') duoc dich chuyen k vi tri theo vong tron trong bang chu cai thuong.
    - Moi chu cai in hoa ('A'-'Z') duoc dich chuyen k vi tri theo vong tron trong bang chu cai hoa.
    - Cac ky tu khong phai chu cai (so, khoang trang, dau cau,...) duoc giu nguyen khong thay doi.
    Tra ve chuoi sau khi ma hoa.

    GIAI THICH THAM SO:
    - s: chuoi van ban can ma hoa (str).
    - k: so buoc dich chuyen nguyen khong am (k >= 0).

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi van ban sau khi da ma hoa (str).

    VI DU:
    - s = "Hello, World!", k = 3 -> return "Khoor, Zruog!"
    - s = "abc", k = 28 -> return "cde"
    - s = "Python 3.10", k = 0 -> return "Python 3.10"

    GIAI THICH VI DU:
    - "Hello, World!" dich 3 vi tri: H->K, e->h, l->o, o->r,... dau phay va khoang trang giu nguyen.
    - k = 28 tuong duong k = 28 % 26 = 2 buoc: a->c, b->d, c->e.
    """
    res = []
    for c in s:
        if 'a' <= c <= 'z':
            res.append(___1___)
        elif 'A' <= c <= 'Z':
            res.append(___2___)
        else:
            res.append(c)
    return ___3___


def solution_04(matrix):
    """
    DE BAI:
    Cho ma tran 2D matrix kich thuoc M x N chua cac so nguyen.
    Hay tinh va tra ve tong cua tat ca cac phan tu nam tren duong vien ngoai cung
    (hang dau tien, hang cuoi cung, cot dau tien, cot cuoi cung).
    Luu y khong duoc tinh trung lap cac o 4 goc, va xu ly dung cac truong hop bien
    (ma tran 1 hang, 1 cot hoac rong).

    GIAI THICH THAM SO:
    - matrix: ma tran 2 chieu (list cac list int).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong cac phan tu nam tren vien ngoai.

    VI DU:
    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return 40
    - matrix = [[5]] -> return 5
    - matrix = [[1, 2, 3, 4]] -> return 10

    GIAI THICH VI DU:
    - Ma tran 3x3: cac phan tu vien gom 1, 2, 3, 7, 8, 9 (hang dau va cuoi) va 4, 6 (cot hai ben).
      Tong = 1 + 2 + 3 + 7 + 8 + 9 + 4 + 6 = 40 (o trung tam 5 khong nam tren vien).
    """
    if not matrix or not matrix[0]:
        return 0
    rows = len(matrix)
    cols = len(matrix[0])
    if rows == 1:
        return sum(matrix[0])
    if cols == 1:
        return sum(row[0] for row in matrix)

    total = ___1___ + ___2___
    for r in range(1, rows - 1):
        total += ___3___
    return total


def solution_05(orders):
    """
    DE BAI:
    Cho danh sach cac don hang orders, moi don la mot dict:
    `{"dm": str, "sl": int, "gia": int}`.
    Yeu cau:
    - Bo qua cac don hang khong hop le: co so luong sl <= 0 hoac don gia gia < 0.
      (Don co gia == 0 va sl > 0 van hop le voi doanh thu = 0).
    - Tinh tong doanh thu (sl * gia) cua tung danh muc hang hoa.
    - Tra ve list cac tuple (danh_muc, tong_doanh_thu) sap xep theo:
      1. Tong doanh thu GIAM DAN.
      2. Neu doanh thu bang nhau, sap theo ten danh muc TANG DAN theo bang chu cai (A-Z).
    - Neu khong co don nao hop le, tra ve list rong [].

    GIAI THICH THAM SO:
    - orders: list cac dict dai dien cho cac don hang.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac tuple (str, int) da sap xep theo tieu chi.

    VI DU:
    - orders = [
        {"dm": "dien_tu", "sl": 2, "gia": 1000},
        {"dm": "thoi_trang", "sl": 5, "gia": 200},
        {"dm": "dien_tu", "sl": 1, "gia": 500},
        {"dm": "sach", "sl": 3, "gia": 100}
      ]
      -> return [("dien_tu", 2500), ("thoi_trang", 1000), ("sach", 300)]

    GIAI THICH VI DU:
    - "dien_tu": 2*1000 + 1*500 = 2500.
    - "thoi_trang": 5*200 = 1000.
    - "sach": 3*100 = 300.
    - Sap xep theo doanh thu giam dan: dien_tu (2500), thoi_trang (1000), sach (300).
    """
    rev = {}
    for d in orders:
        if ___1___:
            continue
        dm = d["dm"]
        rev[dm] = ___2___
    return ___3___


def solution_06(votes):
    """
    DE BAI:
    Cho danh sach phieu bau votes chua ma dinh danh ung vien (so nguyen).
    Hay tim ung vien chiem da so tuyet doi (Majority Element), nghia la co so phieu bau
    chiem LON HON mot nua tong so phieu bau trong danh sach (> len(votes) // 2).
    Neu khong co ung vien nao chiem qua ban hoac danh sach rong, tra ve -1.

    GIAI THICH THAM SO:
    - votes: list cac so nguyen dai dien cho ma ung vien tren tung phieu bau.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la ma ung vien thang cu hoac -1 neu khong co ai dat da so tuyet doi.

    VI DU:
    - votes = [1, 2, 1, 1, 3, 1, 1] -> return 1
    - votes = [1, 1, 2, 2] -> return -1

    GIAI THICH VI DU:
    - [1, 2, 1, 1, 3, 1, 1] co 7 phieu, ung vien 1 co 5 phieu > 7 // 2 = 3 phieu -> thang cu -> return 1.
    - [1, 1, 2, 2] co 4 phieu, nguong la 4 // 2 = 2. Khong co ung vien nao > 2 phieu -> return -1.
    """
    if not votes:
        return -1
    threshold = ___1___
    counts = {}
    for v in votes:
        counts[v] = ___2___
    for candidate, count in counts.items():
        if ___3___:
            return candidate
    return -1


# ================= PHAN 2: SUA LOI DEBUGGING (Q7-Q8, 180 diem) =============

def solution_07(matrix):
    """
    DE BAI:
    Cho ma tran so nguyen matrix kich thuoc M x N (M, N >= 1).
    Tim toa do hang va cot (r, c) cua phan tu co gia tri nho nhat trong ma tran.
    Neu co nhieu phan tu cung dat gia tri nho nhat, chon vi tri xuat hien dau tien
    theo thu tu duyet tu tren xuong duoi, tu trai qua phai.

    GIAI THICH THAM SO:
    - matrix: ma tran 2 chieu (list cac list int khong rong).

    GIAI THICH GIA TRI RETURN:
    - Tra ve tuple (r, c) chua chi so hang va cot cua phan tu nho nhat.

    VI DU:
    - matrix = [[10, 20, 30, 5], [40, 50, 60, 70]] -> return (0, 3)

    GIAI THICH VI DU:
    - Phan tu nho nhat la 5 o hang 0, cot 3 -> return (0, 3).
    """
    min_val = matrix[0][0]
    min_pos = (0, 0)
    for r in range(len(matrix)):
        for c in range(len(matrix)):  # <-- SUA DONG NAY (chua dung voi ma tran chu nhat M != N)
            if matrix[r][c] < min_val:
                min_val = matrix[r][c]
                min_pos = (r, c)
    return min_pos


def solution_08(nums, k):
    """
    DE BAI:
    Cho danh sach cac so nguyen phan biet nums va so nguyen duong k.
    Hay dem so luong cap phan tu (a, b) trong nums sao cho hieu cua chung bang k
    (tuc a - b = k, hay tuong duong x + k co mat trong nums).
    Ham can chay voi do phuc tap O(N) su dung tap hop set.

    GIAI THICH THAM SO:
    - nums: list cac so nguyen.
    - k: so nguyen duong (k > 0).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so cap phan tu thoa man.

    VI DU:
    - nums = [1, 5, 3, 4, 2], k = 2 -> return 3 (cac cap: (1, 3), (2, 4), (3, 5))
    - nums = [1, 3, 5], k = 1 -> return 0

    GIAI THICH VI DU:
    - Trong [1, 5, 3, 4, 2] voi k = 2:
      1 + 2 = 3 (co mat)
      2 + 2 = 4 (co mat)
      3 + 2 = 5 (co mat)
      4 + 2 = 6 (khong co)
      5 + 2 = 7 (khong co)
      Tong cong co 3 cap -> return 3.
    """
    num_set = set(nums)
    count = 0
    for x in nums:
        if x + k in num_set:
            count += 1
        return count  # <-- SUA DONG NAY (thut le sai khien ham return som ngay o phan tu dau tien)
    return count


# ================= PHAN 3: DESIGN (Q9-Q10, 380 diem) ======================

def solution_09(commands, obstacles):
    """
    DE BAI:
    Mot Robot xuat phat tai goc toa do (0, 0) tren mat phang 2D, ban dau huong ve phia Bac (vector (0, 1)).
    Robot nhan chuoi lenh dieu khien commands gom cac ky tu:
    - 'F' (Forward): Tien 1 buoc ve phia truoc theo huong dang nhin.
    - 'B' (Back): Quay 180 do (quay nguoc lai huong doi dien).
    - 'L' (Left): Quay trai 90 do tai cho.
    - 'R' (Right): Quay phai 90 do tai cho.
    Danh sach obstacles chua toa do cac chuong ngai vat [[x1, y1], [x2, y2], ...].
    Truoc khi di mot buoc tien ('F'), neu o du kien co chua chuong ngai vat thi Robot
    KHONG di chuyen (o lai vi tri hien tai) va tiep tuc thuc hien cac lenh tiep theo.
    Tra ve khoang cach Manhattan tu vi tri cuoi cung (x, y) ve goc toa do (0, 0): |x| + |y|.

    GIAI THICH THAM SO:
    - commands: chuoi ky tu cac lenh dieu khien (str).
    - obstacles: list cac list [x, y] toa do vat can.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la khoang cach Manhattan |x| + |y|.

    VI DU:
    - commands = "FFRFF", obstacles = [] -> return 4
    - commands = "FFRFF", obstacles = [[2, 2]] -> return 3
    - commands = "FFBFF", obstacles = [] -> return 0

    GIAI THICH VI DU:
    - "FFRFF", obstacles = []: Tien 2 buoc len Bac (0, 2), quay Phai huong Dong, tien 2 buoc den (2, 2).
      Khoang cach Manhattan: |2| + |2| = 4.
    - "FFRFF", obstacles = [[2, 2]]: Tai (1, 2) dinh tien vao (2, 2) nhung vuong vat can nen dung lai o (1, 2).
      Khoang cach Manhattan: |1| + |2| = 3.
    """
    pass  # <-- viet code cua ban o day


def solution_10(matches):
    """
    DE BAI:
    Cho danh sach ket qua cac tran dau bong da matches.
    Moi phan tu la mot dict: `{"doi_1": str, "doi_2": str, "ban_1": int, "ban_2": int}`.
    Quy tac tinh diem:
    - Thang: 3 diem (doi co so ban thang nhieu hon).
    - Hoa: 1 diem cho moi doi (khi ban_1 == ban_2).
    - Thua: 0 diem.
    Bang xep hang duoc sap xep theo cac tieu chi uu tien sau:
    1. Tong diem GIAM DAN.
    2. Hieu so ban thang - thua (ban thang tru ban thua) GIAM DAN.
    3. Tong so ban thang ghi duoc GIAM DAN.
    4. Ten doi bong TANG DAN theo thu tu tu dien (A-Z).
    Tra ve list ten cac doi theo dung thu tu tren bang xep hang.
    Neu matches rong, tra ve list rong [].

    GIAI THICH THAM SO:
    - matches: list cac dict ket qua tran dau.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list[str] chua ten cac doi bong da xep hang.

    VI DU:
    - matches = [
        {"doi_1": "Chelsea", "doi_2": "Arsenal", "ban_1": 0, "ban_2": 0}
      ]
      -> return ["Arsenal", "Chelsea"]

    GIAI THICH VI DU:
    - Ca hai doi deu duoc 1 diem, hieu so 0, ghi 0 ban.
    - Tieu chi tie-breaker la ten doi theo A-Z: Arsenal dung truoc Chelsea -> ["Arsenal", "Chelsea"].
    """
    pass  # <-- viet code cua ban o day


# ==============================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de6", "DE 6 - LUYEN TAP BANG B (COS Pro Level 2) - 50 phut")
