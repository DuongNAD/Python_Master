# -*- coding: utf-8 -*-
"""
DE MAU CHINH THUC - BANG B (27/08)
==========================================================================
  6 cau | 1000 diem | Thang diem: Q1 (170d), Q2-Q6 (166d/cau)
  Q1: Bai goc chinh thuc trong DE_MAU_2708.md
  Q2-Q6: 5 bien the ren luyen phan xa bien doi bai toan

CACH LAM: Doc ky de bai va dien vao cho trong ___1___, ___2___...
Chay cham diem:
    python3 de_mo_phong/de_mau_2708.py
Dap an: dap_an/de_mau_2708_dapan.py
==========================================================================
"""
import math


# ---------------------------------------------------------------- Cau 1 (Bai goc)
def solution_01(scores):
    """
    DE BAI:
    Trong mot chuong trinh thu giong, can dung diem trung binh ma hoi dong giam khao cham
    cho cac thi sinh de lam diem danh gia, trong do khong tinh diem so cao nhat va diem so
    thap nhat. Neu co nhieu diem cao nhat hoac thap nhat giong nhau, chi loai bo dung 1 diem moi loai.
    Khi cho mang scores 2 chieu chua diem so cua ban giam khao duoi dang tham so cua ham
    solution_01, hay viet ham de return diem so trung binh cao nhat trong buoi thu giong.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao cho tung thi sinh.
      Chieu dai cua scores tu 2 den 100.
      Phan tu cua scores la mang diem so (tu 3 den 20 giam khao), moi diem la so tu nhien tu 0 den 100.

    GIAI THICH GIA TRI RETURN:
    - Return diem danh gia cao nhat trong cac thi sinh (so nguyen int).
      Neu diem trung binh la so thap phan, chi return phan so nguyen (cat bo phan le).

    VI DU:
    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91

    GIAI THICH VI DU:
    - Thi sinh 1: 85, 92, 95, 90 -> bo 85 va 95 -> con [92, 90] -> trung binh 91.
    - Thi sinh 2: 91, 76, 85, 50 -> bo 50 va 91 -> con [76, 85] -> trung binh 80.5 -> lay 80.
    - Diem trung binh cao nhat la 91.
    """
    max_avg = 0
    for s in scores:
        total = ___1___
        count = ___2___
        avg = ___3___
        if avg > max_avg:
            max_avg = avg
    return max_avg


# ---------------------------------------------------------------- Cau 2 (Bien the 1)
def solution_02(scores):
    """
    DE BAI:
    Bien the 1: Trong mot hoi thi lon voi hoi dong giam khao dong dao, de dam bao tinh khach quan,
    ban to chuc quy dinh loai bo 2 diem cao nhat va 2 diem thap nhat cua moi thi sinh truoc khi
    tinh diem trung binh.
    Hay return diem trung binh cao nhat (chi lay phan so nguyen) trong tat ca cac thi sinh.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao.
      Moi thi sinh co tu 5 den 30 diem so (so tu nhien tu 0 den 100).

    GIAI THICH GIA TRI RETURN:
    - Return diem trung binh cao nhat (so nguyen int), chi lay phan nguyen.

    VI DU:
    - scores = [[10, 20, 30, 40, 50, 60, 70], [80, 80, 80, 80, 80]] -> return 80

    GIAI THICH VI DU:
    - Thi sinh 1: sap xep [10, 20, 30, 40, 50, 60, 70], bo 2 diem thap [10, 20] va 2 diem cao [60, 70],
      con lai [30, 40, 50] -> trung binh (30+40+50)//3 = 40.
    - Thi sinh 2: 5 diem 80 -> bo 2 diem thap va 2 diem cao -> con [80] -> trung binh 80.
    - Diem cao nhat la 80.
    """
    max_avg = 0
    for s in scores:
        sorted_s = ___1___
        remaining = ___2___
        avg = ___3___
        if avg > max_avg:
            max_avg = avg
    return max_avg


# ---------------------------------------------------------------- Cau 3 (Bien the 2)
def solution_03(scores):
    """
    DE BAI:
    Bien the 2: Trong mot cuoc thi, quy tac tinh diem la bo 1 diem cao nhat va 1 diem thap nhat.
    Tuy nhien, ban to chuc muon uu tien quyen loi cho thi sinh nen quy dinh: neu diem trung binh
    la so thap phan, se LAM TRON LEN so nguyen gan nhat (vi du 80.1 -> 81, 80.0 -> 80).
    Hay return diem trung binh sau khi lam tron len cao nhat trong cac thi sinh.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) chua diem so cua tung thi sinh (moi thi sinh co tu 3 den 20 diem).

    GIAI THICH GIA TRI RETURN:
    - Return so nguyen (int) la diem danh gia cao nhat sau khi lam tron len.

    VI DU:
    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91

    GIAI THICH VI DU:
    - Thi sinh 1: bo 85 va 95, con [92, 90] -> trung binh 91.0 -> lam tron len la 91.
    - Thi sinh 2: bo 50 va 91, con [76, 85] -> trung binh 80.5 -> lam tron len la 81.
    - Diem cao nhat la 91.
    """
    max_avg = 0
    for s in scores:
        total = ___1___
        count = ___2___
        avg = ___3___
        if avg > max_avg:
            max_avg = avg
    return max_avg


# ---------------------------------------------------------------- Cau 4 (Bien the 3)
def solution_04(names, scores):
    """
    DE BAI:
    Bien the 3: Thay vi tra ve diem so, ban to chuc muon biet ten cua thi sinh chien thang
    (nguoi co diem trung binh cao nhat sau khi bo 1 diem cao nhat va 1 diem thap nhat).
    Diem trung binh duoc tinh chinh xac dang so thuc (float).
    Neu co nhieu thi sinh cung dat diem cao nhat, tra ve ten cua thi sinh xuat hien dau tien trong danh sach.

    GIAI THICH THAM SO:
    - names: list cac chuoi (str) chua ten cua cac thi sinh.
    - scores: mang 2 chieu (list cac list int) tuong ung voi diem cua tung thi sinh.
      Do dai names bang do dai scores (tu 2 den 100).

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi (str) la ten cua thi sinh co diem danh gia cao nhat.

    VI DU:
    - names = ["Alice", "Bob", "Charlie"]
      scores = [[85, 92, 95, 90], [91, 76, 85, 50], [90, 92, 94, 96]] -> return "Charlie"

    GIAI THICH VI DU:
    - Alice: (92 + 90) / 2 = 91.0
    - Bob: (76 + 85) / 2 = 80.5
    - Charlie: (92 + 94) / 2 = 93.0
    - Charlie co diem cao nhat (93.0).
    """
    best_name = ""
    best_score = -1.0
    for name, s in zip(names, scores):
        avg = ___1___
        if avg > best_score:
            best_score = ___2___
            best_name = ___3___
    return best_name


# ---------------------------------------------------------------- Cau 5 (Bien the 4)
def solution_05(scores):
    """
    DE BAI:
    Bien the 4: Do su co lich trinh, moi thi sinh co the duoc danh gia boi so luong giam khao khac nhau
    (thi sinh nay co 3 giam khao, thi sinh khac co 5 giam khao, moi thi sinh co it nhat 3 diem).
    Moi thi sinh van duoc bo 1 diem cao nhat va 1 diem thap nhat, sau do tinh trung binh cac diem con lai
    (lay phan nguyen).
    Hay return diem danh gia cao nhat trong tat ca cac thi sinh.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) voi do dai moi dong co the khac nhau (tu 3 den 20 phan tu).

    GIAI THICH GIA TRI RETURN:
    - Return so nguyen (int) la diem trung binh cao nhat sau khi cat phan le.

    VI DU:
    - scores = [[100, 50, 75], [90, 80, 70, 60, 100], [88, 88, 88, 88]] -> return 88

    GIAI THICH VI DU:
    - Thi sinh 1 (3 diem): bo 50 va 100 -> con [75] -> trung binh 75.
    - Thi sinh 2 (5 diem): bo 60 va 100 -> con [90, 80, 70] -> trung binh 240 // 3 = 80.
    - Thi sinh 3 (4 diem): bo 88 va 88 -> con [88, 88] -> trung binh 88.
    - Diem cao nhat la 88.
    """
    max_avg = 0
    for s in scores:
        if len(s) < 3:
            continue
        avg = ___1___
        if avg > max_avg:
            max_avg = avg
    return max_avg


# ---------------------------------------------------------------- Cau 6 (Bien the 5)
def solution_06(scores):
    """
    DE BAI:
    Bien the 5: Ban giam khao can lap danh sach xep hang tat ca thi sinh tu cao xuong thap.
    Diem cua moi thi sinh van la trung binh cong cac diem sau khi bo 1 diem cao nhat va 1 diem thap nhat
    (tinh chinh xac dang so thuc).
    Hay tra ve danh sach cac chi so (index 0, 1, 2, ...) cua thi sinh da duoc sap xep theo thu tu
    diem GIAM DAN. Neu hai thi sinh co diem bang nhau, thi sinh co chi so nho hon se xep truoc.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) chua diem cua tung thi sinh (tu 2 den 100 thi sinh).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac so nguyen (int) la chi so thi sinh theo thu tu bang xep hang.

    VI DU:
    - scores = [[85, 92, 95, 90], [91, 76, 85, 50], [90, 92, 94, 96]] -> return [2, 0, 1]

    GIAI THICH VI DU:
    - Thi sinh 0: (92 + 90) / 2 = 91.0
    - Thi sinh 1: (76 + 85) / 2 = 80.5
    - Thi sinh 2: (92 + 94) / 2 = 93.0
    - Thu tu diem giam dan la: Thi sinh 2 (93.0) -> Thi sinh 0 (91.0) -> Thi sinh 1 (80.5) -> [2, 0, 1].
    """
    ranked = []
    for i, s in enumerate(scores):
        avg = ___1___
        ranked.append((___2___, ___3___))
    ranked.sort(key=___4___)
    return [item[0] for item in ranked]


# ==========================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de_mau", "DE MAU CHINH THUC 2708 - BANG B (COS Pro Level 2) - 6 cau")
