# -*- coding: utf-8 -*-
"""
DE MO PHONG 2 - VONG LOAI BANG B (COS Pro Level 2)
==========================================================================
  10 cau | 1000 diem | 50 PHUT | >= 600 diem = dat chung chi
  Doc hieu code  Q1-Q4   440 diem (110d/cau)
  Debugging      Q5-Q7   280 diem (93, 93, 94d)
  Design         Q8-Q10  280 diem (93, 93, 94d)

CACH LAM: bam gio 50 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python3 de_mo_phong/de_2_vong_loai.py
Dap an: dap_an/de_2_vong_loai_dapan.py
==========================================================================
"""
import math


# ================= PHAN 1: DOC HIEU CODE (Q1-Q4, 440 diem) ================

def solution_01(arr):
    """
    DE BAI:
    Tim tat ca cac phan tu xuat hien NHIEU HON len(arr) // 3 lan trong mang arr.
    Tra ve list cac phan tu do duoc sap xep tang dan. Neu khong co phan tu nao thoa man,
    tra ve list rong [].

    GIAI THICH THAM SO:
    - arr: list cac so nguyen (do dai tu 0 den 1000).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac so nguyen sap xep tang dan, khong chua phan tu trung lap.

    VI DU:
    - arr = [3, 2, 3] -> return [3]
    - arr = [1, 1, 1, 3, 3, 2, 2, 2] -> return [1, 2]

    GIAI THICH VI DU:
    - Trong [1, 1, 1, 3, 3, 2, 2, 2], do dai mang la 8 -> nguong la 8 // 3 = 2.
    - So 1 xuat hien 3 lan (>2), so 2 xuat hien 3 lan (>2), so 3 xuat hien 2 lan (khong >2).
    - Ket qua: [1, 2].
    """
    if not arr:
        return []
    threshold = len(arr) // 3
    counts = {}
    for x in arr:
        counts[x] = ___1___
    result = [x for x, c in counts.items() if ___2___]
    return ___3___


def solution_02(sessions):
    """
    DE BAI:
    Tinh tong tien phi gui xe cho mot danh sach cac luot gui xe trong ngay.
    Moi luot gui duoc bieu dien bang [gio_vao, gio_ra] tinh theo phut tu 0h (0 <= gio_vao <= gio_ra <= 1440).
    Thoi luong = gio_ra - gio_vao (phut).
    Quy tac tinh phi cho tung luot:
    - Thoi luong <= 30 phut: Mien phi (0 VND).
    - 30 < thoi luong <= 60 phut: 10,000 VND.
    - Thoi luong > 60 phut: 10,000 VND cho 60 phut dau, cong them 5,000 VND cho moi block 30 phut
      tiep theo (phan le duoc lam tron len).
    Tra ve tong so tien phi gui xe thu duoc (VND).

    GIAI THICH THAM SO:
    - sessions: list cac list [gio_vao, gio_ra] (so nguyen khong am).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so tien phi gui xe.

    VI DU:
    - sessions = [[480, 500], [480, 540], [480, 575]] -> return 30000

    GIAI THICH VI DU:
    - Luot 1: 500 - 480 = 20 phut <= 30 -> 0 VND.
    - Luot 2: 540 - 480 = 60 phut -> 10,000 VND.
    - Luot 3: 575 - 480 = 95 phut -> 10,000 + ceil((95-60)/30) * 5,000 = 10,000 + 2 * 5,000 = 20,000 VND.
    - Tong cong: 0 + 10,000 + 20,000 = 30,000 VND.
    """
    total = 0
    for start, end in sessions:
        duration = end - start
        if duration <= 30:
            continue
        elif duration <= 60:
            total += 10000
        else:
            extra_blocks = ___1___
            fee = 10000 + 5000 * ___2___
            total += ___3___
    return total


def solution_03(s):
    """
    DE BAI:
    Nen chuoi chua cac chu cai in hoa theo phuong phap Run-Length Encoding:
    - Cac ky tu giong nhau lien tiep duoc gop lai thanh: ky tu + so lan xuat hien (neu xuat hien tu 2 lan tro len).
    - Neu ky tu chi xuat hien dung 1 lan lien tiep, giu nguyen ky tu (khong kem theo so 1).
    Chuoi rong tra ve chuoi rong.

    GIAI THICH THAM SO:
    - s: chuoi ky tu in hoa A-Z (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi da nen (str).

    VI DU:
    - s = "AABBBCCCC" -> return "A2B3C4"
    - s = "ABCC" -> return "ABC2"

    GIAI THICH VI DU:
    - Trong "ABCC", 'A' 1 lan -> "A", 'B' 1 lan -> "B", 'C' 2 lan -> "C2" -> "ABC2".
    """
    if not s:
        return ""
    result = []
    current_char = s[0]
    count = 1
    for c in s[1:]:
        if c == current_char:
            count += 1
        else:
            result.append(current_char if count == 1 else ___1___)
            current_char = ___2___
            count = 1
    result.append(current_char if count == 1 else ___3___)
    return "".join(result)


def solution_04(matrix):
    """
    DE BAI:
    Xoay mot ma tran vuong N x N mot goc 90 do theo chieu kim dong ho va tra ve ma tran moi.
    Ma tran rong tra ve ma tran rong.

    GIAI THICH THAM SO:
    - matrix: mang 2 chieu kich thuoc N x N (list cac list int).

    GIAI THICH GIA TRI RETURN:
    - Mang 2 chieu moi da xoay 90 do theo chieu kim dong ho.

    VI DU:
    - matrix = [[1, 2], [3, 4]] -> return [[3, 1], [4, 2]]

    GIAI THICH VI DU:
    - Hang 0 [1, 2] xoay thanh cot 1 [1, 2].
    - Hang 1 [3, 4] xoay thanh cot 0 [3, 4].
    - Ma tran ket qua: [[3, 1], [4, 2]].
    """
    if not matrix:
        return []
    n = len(matrix)
    rotated = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            rotated[___1___][___2___] = matrix[i][j]
    return rotated


# ================= PHAN 2: DEBUGGING (Q5-Q7, 280 diem) ====================
# Cac ham duoi day CO LOI LOGIC. Sua lai cho dung theo mo ta trong docstring.

def solution_05(n):
    """
    DE BAI:
    Kiem tra mot so nguyen khong am n co phai la so Armstrong (Narcissistic number) hay khong.
    Mot so co d chu so la so Armstrong neu tong cac chu so, moi chu so luy thua d, bang chinh n.

    GIAI THICH THAM SO:
    - n: so nguyen khong am (0 <= n <= 10^9).

    GIAI THICH GIA TRI RETURN:
    - Tra ve True neu n la so Armstrong, nguoc lai False.

    VI DU:
    - n = 153 -> return True (1^3 + 5^3 + 3^3 = 153)
    - n = 10 -> return False (1^2 + 0^2 = 1 != 10)

    GIAI THICH VI DU:
    - 153 co 3 chu so: 1^3 + 125 + 27 = 153 -> True.
    """
    s = str(n)
    total = sum(int(c) ** 3 for c in s)
    return total == n


def solution_06(cards):
    """
    DE BAI:
    Cho danh sach cards gom 5 so nguyen dai dien cho gia tri 5 la bai (1 den 13).
    Kiem tra xem 5 la bai co tao thanh mot bo Sanh (Straight - 5 la bai co gia tri lien tiep) hay khong.
    Luu y:
    - Sanh khong duoc chua la bai trung lap (5 la bai phai co gia tri khac nhau).
    - La A (gia tri 1) co the tao thanh sanh nho nhat (1-2-3-4-5) hoac sanh lon nhat (10-11-12-13-1 aka 10-J-Q-K-A).
    Tra ve True neu tao thanh Sanh, nguoc lai False.

    GIAI THICH THAM SO:
    - cards: list gom 5 so nguyen tu 1 den 13.

    GIAI THICH GIA TRI RETURN:
    - Tra ve True neu la bo Sanh, False neu khong phai.

    VI DU:
    - cards = [2, 3, 4, 5, 6] -> return True
    - cards = [10, 11, 12, 13, 1] -> return True

    GIAI THICH VI DU:
    - [2, 3, 4, 5, 6] la 5 so lien tiep -> True.
    - [10, 11, 12, 13, 1] la bo 10-J-Q-K-A -> True.
    """
    s = sorted(cards)
    return s[-1] - s[0] == 4


def solution_07(transactions):
    """
    DE BAI:
    He thong quan ly so du tai khoan ngan hang.
    Moi giao dich la mot dict: {"user": ten_user, "type": "DEPOSIT" | "WITHDRAW", "amount": so_tien}.
    So du ban dau cua moi user la 0.
    - "DEPOSIT": Cong so_tien vao so du cua user (neu so_tien > 0).
    - "WITHDRAW": Neu so du hien tai >= so_tien (va so_tien > 0), tru so_tien khoi so du.
      Neu so du khong du, TU CHOI giao dich (khong thay doi so du).
    - Cac giao dich co so_tien <= 0 hoac thieu user deu bi bo qua.
    Tra ve dict {user: so_du_cuoi_cung} cho tat ca cac user tung co it nhat 1 giao dich hop le.

    GIAI THICH THAM SO:
    - transactions: list cac dict giao dich.

    GIAI THICH GIA TRI RETURN:
    - dict {user: int} chua so du cuoi cung cua tung user.

    VI DU:
    - transactions = [{"user": "A", "type": "DEPOSIT", "amount": 100}, {"user": "A", "type": "WITHDRAW", "amount": 30}]
      -> return {"A": 70}

    GIAI THICH VI DU:
    - User A gui 100 -> so du 100.
    - User A rut 30 -> du tien rut -> so du con 70.
    """
    balances = {}
    for tx in transactions:
        user = tx.get("user")
        ttype = tx.get("type")
        amount = tx.get("amount", 0)
        if not user or amount <= 0:
            continue
        if user not in balances:
            balances[user] = 0
        if ttype == "DEPOSIT":
            balances[user] += amount
        elif ttype == "WITHDRAW":
            balances[user] -= amount
    return balances


# ================= PHAN 3: DESIGN (Q8-Q10, 280 diem) ======================

def solution_08(text):
    """
    DE BAI:
    Thong ke tan suat xuat hien cua cac tu trong chuoi van ban text.
    Quy tac:
    - Tach cac tu theo khoang trang, chuyen toan bo ve chu thuong.
    - Loai bo cac dau cau .,!?;: o dau va cuoi moi tu (neu co). Bo qua cac tu tro thanh rong.
    - Dem so lan xuat hien cua tung tu.
    - Tra ve LIST cac tuple (tu, so_lan) sap xep theo so_lan GIAM DAN; neu so lan bang nhau
      thi sap theo thu tu tu dien A-Z tang dan cua tu.

    GIAI THICH THAM SO:
    - text: chuoi van ban (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac tuple (str, int).

    VI DU:
    - text = "Hello world, hello Python! World of Python."
      -> return [("hello", 2), ("python", 2), ("world", 2), ("of", 1)]

    GIAI THICH VI DU:
    - 'hello': 2 lan, 'python': 2 lan, 'world': 2 lan, 'of': 1 lan.
    - Cung 2 lan sap theo A-Z: "hello", "python", "world".
    """
    pass  # <-- viet code cua ban o day


def solution_09(intervals):
    """
    DE BAI:
    Cho danh sach cac khoang thoi gian intervals = [[start1, end1], [start2, end2], ...].
    Hay chon ra so luong khoang thoi gian nhieu nhat sao cho khong co hai khoang thoi gian nao
    chong cheo nhau. Hai khoang [a, b] va [c, d] khong chong cheo neu b <= c hoac d <= a.
    Tra ve so luong khoang thoi gian toi da co the chon.

    GIAI THICH THAM SO:
    - intervals: list cac list [start, end] (so nguyen, start <= end).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so khoang toi da khong giao nhau.

    VI DU:
    - intervals = [[1, 2], [2, 3], [3, 4], [1, 3]] -> return 3

    GIAI THICH VI DU:
    - Chon 3 khoang [1, 2], [2, 3], [3, 4] doi mot khong giao nhau.
    """
    pass  # <-- viet code cua ban o day


def solution_10(grid):
    """
    DE BAI:
    Dem so luong dao (islands) trong ma tran nhi phan grid (mang 2 chieu chua cac so 0 va 1).
    Mot hon dao duoc tao boi cac o so 1 lien thong voi nhau theo 4 huong (tren, duoi, trai, phai)
    va duoc bao quanh boi nuoc (cac o so 0).
    Cac o 1 tiep xuc cheo khong duoc tinh la lien thong.
    Tra ve so luong dao co trong grid.

    GIAI THICH THAM SO:
    - grid: mang 2 chieu (list cac list int 0 va 1).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so luong dao.

    VI DU:
    - grid = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] -> return 3

    GIAI THICH VI DU:
    - Co 3 dao: dao 1 o goc tren trai (4 o 1), dao 2 o (2, 2), dao 3 o (3, 3).
    """
    pass  # <-- viet code cua ban o day


# ==========================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de2", "DE 2 - VONG LOAI BANG B (COS Pro Level 2) - 50 phut")
