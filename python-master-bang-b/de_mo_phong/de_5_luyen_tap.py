# -*- coding: utf-8 -*-
"""
DE MO PHONG 5 - LUYEN TAP BANG B (COS Pro Level 2)
==========================================================================
  10 cau | 1000 diem | 50 PHUT | >= 600 diem = dat chung chi
  Phan 1: Dien cho trong  Q1-Q6   440 diem (Q1: 74, Q2: 74, Q3-Q6: 73d/cau)
  Phan 2: Debugging       Q7-Q8   180 diem (90d/cau)
  Phan 3: Design          Q9-Q10  380 diem (190d/cau)

CACH LAM: bam gio 50 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python de_mo_phong/de_5_luyen_tap.py
Dap an: dap_an/de_5_luyen_tap_dapan.py
==========================================================================
"""
import math


# ==============================================================================
# PHAN 1: DIEN CHO TRONG (Q1 - Q6, 440 DIEM)
# ==============================================================================

def fun_a(roll):
    """
    Ham bo tro tinh diem cho mot luot tung 2 xuc xac.
    Neu 2 mat giong nhau: diem = (a + b) * 2.
    Neu 2 mat khac nhau: diem = a + b.
    """
    if roll[0] == roll[1]:
        return (roll[0] + roll[1]) * 2
    return roll[0] + roll[1]


def fun_b(scores):
    """
    Ham bo tro tim diem so cao nhat trong danh sach diem.
    """
    return max(scores)


def fun_c(scores, target):
    """
    Ham bo tro dem so luong luot choi dat dung diem so target.
    """
    count = 0
    for score in scores:
        if score == target:
            count += 1
    return count


def solution_01(dice_rolls):
    """
    DE BAI:
    Trong mot tro choi xuc xac, co N luot choi. Moi luot duoc bieu dien boi mot danh sach
    gom 2 so nguyen [a, b] la so cham cua 2 vien xuc xac (1 <= a, b <= 6).
    Quy tac tinh diem:
    - Neu 2 vien xuc xac co so cham bang nhau (a == b), diem so cua luot do la: (a + b) * 2.
    - Neu 2 vien xuc xac co so cham khac nhau (a != b), diem so cua luot do la: a + b.
    Hay xac dinh so luong luot choi dat duoc diem so cao nhat trong tat ca cac luot.
    
    Yeu cau: Su dung ket hop 3 ham con fun_a, fun_b, fun_c duoc dinh nghia o tren de hoan thanh
    ham solution_01 tai cac vi tri ___1___, ___2___, ___3___.

    GIAI THICH THAM SO:
    - dice_rolls: list cac list [a, b] (1 <= a, b <= 6), do dai tu 1 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so luong nguoi choi dat diem so cao nhat.

    VI DU:
    - dice_rolls = [[2, 2], [3, 4], [1, 1]] -> return 1
    - dice_rolls = [[6, 6], [2, 3], [6, 6]] -> return 2

    GIAI THICH VI DU:
    - Voi [[2, 2], [3, 4], [1, 1]]:
      Diem cac luot lan luot la: (2+2)*2 = 8, 3+4 = 7, (1+1)*2 = 4.
      Diem cao nhat la 8. So luong luot dat diem 8 la 1.
    """
    scores = ___1___
    max_score = ___2___
    winner_count = ___3___
    return winner_count


def solution_02(poles):
    """
    DE BAI:
    Mot xuong go co mot hang cot go bieu dien boi danh sach chieu cao poles = [h0, h1, ..., hn-1].
    Bac tho moc can tim doan cot go lien tiep dai nhat sao cho chieu cao cac cot go tang dan nghiem ngat
    (tuc la poles[i] > poles[i - 1] voi moi cot trong doan).
    Neu hang cot go rong, tra ve 0.

    GIAI THICH THAM SO:
    - poles: list cac so nguyen duong bieu dien chieu cao cot go (do dai tu 0 den 10^5).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la chieu dai doan cot go tang dan lien tiep dai nhat.

    VI DU:
    - poles = [10, 20, 30, 15, 25, 35, 45, 5] -> return 4
    - poles = [5, 4, 3, 2, 1] -> return 1
    - poles = [] -> return 0

    GIAI THICH VI DU:
    - Voi [10, 20, 30, 15, 25, 35, 45, 5]:
      Doan tang [10, 20, 30] co do dai 3.
      Doan tang [15, 25, 35, 45] co do dai 4.
      Doan dai nhat co do dai la 4.
    """
    if not poles:
        return 0
    max_len = 1
    curr_len = 1
    for i in range(1, len(poles)):
        if ___1___:
            curr_len += 1
            if curr_len > max_len:
                max_len = curr_len
        else:
            curr_len = ___2___
    return ___3___


def solution_03(records):
    """
    DE BAI:
    He thong quan ly ho so thi sinh luu tru thong tin duoi dang danh sach chuoi:
    "Ten Thi Sinh - ID: 12345"
    Nhiem vu cua ban la:
    - Loai bo cac dong ho so khong hop le (khong chua cum tu " - ID: ").
    - Chuan hoa ho ten ve dang Title Case (in hoa chu cai dau tien cua moi tu, cat bo khoang trang thua).
    - Tach ma ID va chuyen ve kieu so nguyen int.
    - Tra ve danh sach cac tuple (ten_chuan_hoa, id_int) sap xep TANG DAN theo ma ID.

    GIAI THICH THAM SO:
    - records: list cac chuoi thong tin thi sinh (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac tuple (str, int) sap xep tang dan theo int ID.

    VI DU:
    - records = ["nguyen van an - ID: 105", "tran thi mai - ID: 101", "le van cuong - ID: 103"]
      -> return [("Tran Thi Mai", 101), ("Le Van Cuong", 103), ("Nguyen Van An", 105)]

    GIAI THICH VI DU:
    - Ho ten duoc chuan hoa: "nguyen van an" -> "Nguyen Van An".
    - Ma ID duoc tach thanh so nguyen: 105, 101, 103.
    - Sap xep theo ma ID tang dan: 101 < 103 < 105.
    """
    results = []
    for item in records:
        if " - ID: " in item:
            parts = ___1___
            name = parts[0].strip().title()
            id_num = ___2___
            results.append((name, id_num))
    results = ___3___
    return results


def solution_04(students):
    """
    DE BAI:
    Phong Dao tao can xet danh sach sinh vien du dieu kien nhan hoc bong hoc ky.
    Moi sinh vien duoc bieu dien boi mot dict co cau truc:
    {"ten": str, "gpa": float, "drl": int, "diem_liet": bool}
    Tieu chuan dat hoc bong gom 3 dieu kien dong thoi:
    1. Diem trung binh tich luy gpa >= 3.2.
    2. Diem ren luyen drl >= 80.
    3. Khong bi diem liet bat ky mon nao (diem_liet == False).
    Danh sach sinh vien dat hoc bong phai duoc sap xep theo GPA GIAM DAN.
    Tra ve danh sach TEN cua cac sinh vien dat hoc bong theo thu tu da sap xep.

    GIAI THICH THAM SO:
    - students: list cac dict thong tin sinh vien.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list[str] la danh sach ten cac sinh vien dat tieu chuan.

    VI DU:
    - students = [
        {"ten": "An", "gpa": 3.6, "drl": 85, "diem_liet": False},
        {"ten": "Binh", "gpa": 3.8, "drl": 75, "diem_liet": False},
        {"ten": "Cuong", "gpa": 3.5, "drl": 90, "diem_liet": False},
        {"ten": "Dung", "gpa": 3.9, "drl": 95, "diem_liet": True}
      ]
      -> return ["An", "Cuong"]

    GIAI THICH VI DU:
    - Binh co drl 75 < 80 -> khong dat.
    - Dung co diem_liet = True -> khong dat.
    - An (gpa 3.6) va Cuong (gpa 3.5) dat. Sap xep GPA giam dan: An truoc, Cuong sau.
    """
    qualified = []
    for s in students:
        if ___1___:
            qualified.append(s)
    qualified = ___2___
    return ___3___


def solution_05(text):
    """
    DE BAI:
    Cho mot doan van ban text gom cac tu cach nhau boi khoang trang.
    Hay dem tan suat xuat hien cua tung tu sau khi:
    - Loai bo cac dau cau .,!? o dau va o cuoi moi tu.
    - Chuyen toan bo cac chu cai ve dang in thuong (lowercase).
    Tim va tra ve tu xuat hien nhieu nhat trong van ban. Neu co nhieu tu co cung tan suat xuat hien
    cao nhat, chon tu co thu tu tu dien nho nhat (A-Z tang dan).
    Neu van ban khong chua tu hop le nao (hoac chuoi rong), tra ve chuoi rong "".

    GIAI THICH THAM SO:
    - text: chuoi van ban (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi (str) la tu xuat hien nhieu nhat thoa man tie-breaker A-Z.

    VI DU:
    - text = "apple banana apple orange banana apple" -> return "apple"
    - text = "dog cat bird dog cat bird" -> return "bird"
    - text = "Python, python! PYTHON? coding." -> return "python"

    GIAI THICH VI DU:
    - Trong "dog cat bird dog cat bird", dog: 2, cat: 2, bird: 2 (deu cao nhat la 2 lan).
      Xet thu tu tu dien: "bird" < "cat" < "dog" -> ket qua tra ve "bird".
    """
    words = text.split()
    if not words:
        return ""
    counts = {}
    for w in words:
        clean_w = ___1___
        if clean_w:
            counts[clean_w] = ___2___
    if not counts:
        return ""
    sorted_items = ___3___
    return sorted_items[0][0]


def solution_06(km, gio_cao_diem):
    """
    DE BAI:
    Tinh tien cuoc taxi dua tren quang duong di chuyen km (kieu float) va thoi diem di chuyen
    (gio_cao_diem kieu bool).
    Quy tac tinh gia cuoc:
    - Neu km <= 0: cuoc taxi la 0 VND.
    - 1 km dau tien (gia mo cua): 15.000 VND.
    - Tu km thu 2 den km thu 10: 12.000 VND moi km tiep theo (km le duoc lam tron len bang math.ceil).
    - Tu km thu 11 tro di: 10.000 VND moi km tiep theo (km le duoc lam tron len bang math.ceil).
    - Neu di vao gio cao diem (gio_cao_diem == True): Tong tien cuoc duoc tang them 25% (nhan 1.25)
      va chi lay phan nguyen (dung ham int).

    GIAI THICH THAM SO:
    - km: so thuc float la quang duong di chuyen.
    - gio_cao_diem: bool cho biet co phai gio cao diem hay khong.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so tien cuoc taxi phai tra (VND).

    VI DU:
    - km = 0.5, gio_cao_diem = False -> return 15000
    - km = 5.0, gio_cao_diem = False -> return 63000
    - km = 12.5, gio_cao_diem = True -> return 191250

    GIAI THICH VI DU:
    - Voi km = 12.5, gio_cao_diem = True:
      + 1 km dau: 15.000 VND
      + 9 km tiep theo (km 2 den 10): 9 * 12.000 = 108.000 VND
      + 2.5 km con lai: math.ceil(2.5) = 3 km -> 3 * 10.000 = 30.000 VND
      + Tong cuoc truoc phu thu: 15.000 + 108.000 + 30.000 = 153.000 VND
      + Phu thu gio cao diem: int(153.000 * 1.25) = 191.250 VND.
    """
    if km <= 0:
        return 0
    if km <= 1:
        total = 15000
    elif km <= 10:
        total = 15000 + ___1___ * 12000
    else:
        total = 15000 + 9 * 12000 + ___2___ * 10000

    if gio_cao_diem:
        total = ___3___
    return total


# ==============================================================================
# PHAN 2: SUA LOI DEBUGGING (Q7 - Q8, 180 DIEM)
# ==============================================================================
# Cac ham duoi day CO LOI LOGIC. Hay sua lai DUNG 1 DONG duy nhat (khong them/xoa dong).

def solution_07(s):
    """
    DE BAI:
    Kiem tra xem mot chuoi ky tu s co phai la chuoi doi xung (Palindrome) hay khong.
    Chuoi doi xung la chuoi doc xuoi va doc nguoc deu giong nhau.
    Chuoi rong va chuoi 1 ky tu luon duoc coi la chuoi doi xung (tra ve True).
    Tra ve True neu chuoi doi xung, nguoc lai False.

    GIAI THICH THAM SO:
    - s: chuoi ky tu (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool: True neu s doi xung, False neu khong doi xung.

    VI DU:
    - s = "racecar" -> return True
    - s = "hello" -> return False
    - s = "" -> return True
    """
    n = len(s)
    for i in range(n // 2):
        if s[i] != s[n - i]:  # <-- SUA DONG NAY
            return False
    return True


def solution_08(scores):
    """
    DE BAI:
    Cho danh sach diem so scores cua mot lop hoc.
    Hay tim va tra ve diem so cao thu nhi (phan biet) trong danh sach.
    Neu trong danh sach co it hon 2 muc diem phan biet (vi du: danh sach rong,
    danh sach 1 phan tu, hoac tat ca phan tu bang nhau), tra ve None.

    GIAI THICH THAM SO:
    - scores: list cac so nguyen bieu dien diem so.

    GIAI THICH GIA TRI RETURN:
    - Tra ve int la diem so cao thu nhi, hoac None neu khong ton tai.

    VI DU:
    - scores = [10, 20, 30, 40, 50] -> return 40
    - scores = [50, 50, 50] -> return None
    - scores = [100] -> return None
    """
    unique_scores = sorted(list(set(scores)))
    return unique_scores[-2]  # <-- SUA DONG NAY


# ==============================================================================
# PHAN 3: THIET KE DESIGN (Q9 - Q10, 380 DIEM)
# ==============================================================================
# Thi sinh tu thiet ke thuat toan va viet toan bo ham tu dau.

def solution_09(orders):
    """
    DE BAI:
    He thong thuong mai dien tu can sap xep danh sach don hang cho bo phan xu ly kho van.
    Moi don hang la mot dict co cau truc:
    {"id": str, "vip": bool, "total": int}
    
    Quy tac sap xep uu tien theo 3 tieu chi tuan tu:
    1. Don hang cua khach VIP (vip == True) luon duoc uu tien xu ly truoc khach thuong (vip == False).
    2. Trong cung nhom khach hang (cung VIP hoac cung thuong), don hang co tong tien (total) LON HON
       duoc uu tien xu ly truoc (sap xep giam dan).
    3. Neu cung nhom khach hang va cung tong tien, ma don hang (id) duoc sap xep theo thu tu tu dien
       TANG DAN (A-Z).

    GIAI THICH THAM SO:
    - orders: list cac dict don hang.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list[dict] la danh sach cac don hang da sap xep theo dung 3 tieu chi tren.

    VI DU:
    - orders = [
        {"id": "B01", "vip": False, "total": 100000},
        {"id": "A01", "vip": True, "total": 200000},
        {"id": "A02", "vip": True, "total": 500000},
        {"id": "B02", "vip": False, "total": 300000}
      ]
      -> return [
        {"id": "A02", "vip": True, "total": 500000},
        {"id": "A01", "vip": True, "total": 200000},
        {"id": "B02", "vip": False, "total": 300000},
        {"id": "B01", "vip": False, "total": 100000}
      ]
    """
    pass  # <-- viet code cua ban o day


def solution_10(board):
    """
    DE BAI:
    Trong tro choi "Ech nhay o tich diem", con ech xuat phat tai o dau tien tren ban co
    (vi tri chi so pos = 0 cua danh sach board).
    Tai moi o pos tren ban co:
    - Con ech duoc cong them so diem bang gia tri cua o do: board[pos].
    - Buoc nhay tiep theo cua ech se dua no toi vi tri moi: pos_moi = pos + board[pos].
    
    Quy tac ket thuc tro choi:
    - Con ech nhay ra ngoai pham vi ban co (pos_moi < 0 hoac pos_moi >= len(board)).
    - Con ech dat chan vao o co gia tri <= 0 (o bay, dung lai ngay va KHONG cong diem o nay).
    - Con ech dat chan vao mot o ma no da tung ghe tham truoc do (phat hien vong lap vo han,
      dung lai ngay va KHONG cong diem o nay).
    
    Hay tinh va tra ve TONG SO DIEM con ech da tich luy duoc trong suot cuoc choi.
    Neu ban co rong, tra ve 0.

    GIAI THICH THAM SO:
    - board: list cac so nguyen int bieu dien gia tri tren cac o ban co.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so diem tich luy duoc.

    VI DU:
    - board = [2, 3, 1, 1, 4] -> return 8
      Giai thich:
      + Bat dau tai pos = 0: board[0] = 2 > 0 -> tong diem = 2, nhay toi 0 + 2 = 2.
      + Tai pos = 2: board[2] = 1 > 0 -> tong diem = 2 + 1 = 3, nhay toi 2 + 1 = 3.
      + Tai pos = 3: board[3] = 1 > 0 -> tong diem = 3 + 1 = 4, nhay toi 3 + 1 = 4.
      + Tai pos = 4: board[4] = 4 > 0 -> tong diem = 4 + 4 = 8, nhay toi 4 + 4 = 8 (ra ngoai bien).
      -> Ket qua: 8.

    - board = [1, 2, 1, -2, 1] -> return 3
      Giai thich:
      + pos = 0: board[0] = 1 -> tong = 1, nhay toi pos = 1.
      + pos = 1: board[1] = 2 -> tong = 1 + 2 = 3, nhay toi pos = 3.
      + pos = 3: board[3] = -2 <= 0 -> o bay! Dung cuoc choi ngay lap tuc.
      -> Ket qua: 3.
    """
    pass  # <-- viet code cua ban o day


# ==============================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de5", "DE 5 - LUYEN TAP BANG B (COS Pro Level 2) - 50 phut")
