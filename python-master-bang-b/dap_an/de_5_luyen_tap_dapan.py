# -*- coding: utf-8 -*-
"""
DAP AN DE MO PHONG 5 - LUYEN TAP BANG B (COS Pro Level 2).
Tong diem: 1000 diem | 10 cau:
  - Phan 1: Dien cho trong (Q1-Q6, 440 diem)
  - Phan 2: Sua loi Debugging (Q7-Q8, 180 diem)
  - Phan 3: Thiet ke tu dau (Q9-Q10, 380 diem)
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
    Q01 [Dien khuyet] - (74 diem)
    Ten bai: Tinh diem xuc xac (Dice Scoring Combination)

    1. DE BAI TOM TAT & YEU CAU:
       - Trong tro choi xuc xac, moi nguoi choi tung 2 vien xuc xac bieu dien boi [a, b].
       - Diem cua luot choi: neu 2 mat bang nhau thi diem bang tong 2 mat nhan doi (a + b) * 2;
         neu 2 mat khac nhau thi diem bang tong 2 mat (a + b).
       - Tim so luong nguoi choi dat diem so cao nhat bang cach phoi hop 3 ham con fun_a, fun_b, fun_c.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: dice_rolls (list[list[int]]) - danh sach cac luot tung xuc xac, moi phan tu gom 2 so nguyen [1..6].
       - Tra ve: int - so luong nguoi choi dat diem so cao nhat.

    3. Y TUONG THUAT TOAN:
       - Buoc 1: Dung list comprehension ket hop ham fun_a(r) de tinh diem cho tung luot:
                 scores = [fun_a(r) for r in dice_rolls]
       - Buoc 2: Dung ham fun_b(scores) de tim diem so cao nhat trong tat ca cac luot:
                 max_score = fun_b(scores)
       - Buoc 3: Dung ham fun_c(scores, max_score) de dem so nguoi choi dat dung max_score:
                 return fun_c(scores, max_score)

    4. BAY COS PRO THUONG GAP:
       - Bay thu tu goi ham: Goi fun_c truoc khi co max_score tu fun_b hoac truyen nham danh sach dice_rolls vao fun_b.
       - Bay truyen tham so: fun_c nhan (scores, target), can truyen dung danh sach diem scores va gia tri max_score.
       - Vi tri dien khuyet thuong nham lan giua viec goi ham truc tiep voi viet lai vong lap thu cong.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N) voi N la so luong luot tung xuc xac.
       - Do phuc tap bo nho: O(N) de luu danh sach scores.
       - Luu y: Luon doc ky chu ky ham cua fun_a, fun_b, fun_c de truyen dung doi so.

    6. VI DU:
       - Input: dice_rolls = [[2, 2], [3, 4], [1, 1]]
         -> fun_a([2, 2]) = (2 + 2) * 2 = 8
         -> fun_a([3, 4]) = 3 + 4 = 7
         -> fun_a([1, 1]) = (1 + 1) * 2 = 4
         -> scores = [8, 7, 4]
         -> max_score = fun_b(scores) = 8
         -> winner_count = fun_c(scores, 8) = 1
         -> Output: 1
    """
    scores = [fun_a(r) for r in dice_rolls]
    max_score = fun_b(scores)
    winner_count = fun_c(scores, max_score)
    return winner_count


def solution_02(poles):
    """
    Q02 [Dien khuyet] - (74 diem)
    Ten bai: Cot go tang dan dai nhat (Longest Increasing Contiguous Poles)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho danh sach chieu cao cua hang cot go poles = [h0, h1, ..., hn-1].
       - Tim do dai lon nhat cua mot doan cot go lien tiep co chieu cao tang dan nghiem ngat
         (poles[i] > poles[i - 1]).
       - Neu danh sach rong, tra ve 0.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: poles (list[int]) - danh sach chieu cao cac cot go.
       - Tra ve: int - do dai doan lien tiep tang dan dai nhat.

    3. Y TUONG THUAT TOAN:
       - Neu poles rong, tra ve 0 ngay lap tuc.
       - Khoi tao max_len = 1 va curr_len = 1 (vi moi cot go don le deu la doan do dai 1).
       - Duyet i tu 1 den len(poles) - 1:
         + Neu poles[i] > poles[i - 1]: tang curr_len len 1, cap nhat max_len = max(max_len, curr_len).
         + Nguoc lai (poles[i] <= poles[i - 1]): reset curr_len = 1.
       - Tra ve max_len.

    4. BAY COS PRO THUONG GAP:
       - Bay khoi tao: Khoi tao curr_len = 0 hoac max_len = 0 se sai khi mang co 1 phan tu hoac giam dan hoan toan.
       - Bay reset: Khi bi ngat quang (poles[i] <= poles[i - 1]), phai reset curr_len ve 1 (chu khong phai 0),
         vi ban than poles[i] la diem bat dau cua mot doan moi.
       - Bay so sanh: De bai yeu cau tang nghiem ngat (>) chu khong phai khong giam (>=).

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N) qua 1 vong lap duy nhat.
       - Do phuc tap bo nho: O(1) khong dung bo nho phu.

    6. VI DU:
       - Input: poles = [10, 20, 30, 15, 25, 35, 45, 5]
         -> Doan [10, 20, 30]: do dai 3
         -> Doan [15, 25, 35, 45]: do dai 4
         -> Doan [5]: do dai 1
         -> Output: 4
    """
    if not poles:
        return 0
    max_len = 1
    curr_len = 1
    for i in range(1, len(poles)):
        if poles[i] > poles[i - 1]:
            curr_len += 1
            if curr_len > max_len:
                max_len = curr_len
        else:
            curr_len = 1
    return max_len


def solution_03(records):
    """
    Q03 [Dien khuyet] - (73 diem)
    Ten bai: Tach ma va chuan hoa ho ten (Normalize Names & Parse Student IDs)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho danh sach cac chuoi ho so thi sinh dang "Ten Thi Sinh - ID: 12345".
       - Chuan hoa ho ten ve dang Title Case (in hoa chu cai dau moi tu, cat bo khoang trang thua).
       - Tach ma ID thanh so nguyen (int).
       - Bo qua cac dong khong dung dinh dang (khong chua chuoi " - ID: ").
       - Tra ve danh sach cac tuple (ten_chuan_hoa, ma_id_int) sap xep tang dan theo ma ID.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: records (list[str]) - danh sach cac chuoi thong tin thi sinh.
       - Tra ve: list[tuple[str, int]] - danh sach tuple (ho_ten, id) sap xep theo id tang dan.

    3. Y TUONG THUAT TOAN:
       - Khoi tao results = [].
       - Duyet qua tung chuoi item trong records:
         + Kiem tra if " - ID: " in item:
         + Tach bang item.split(" - ID: ").
         + Chuan hoa ho ten: raw_name.strip().title().
         + Chuyen ID: int(raw_id.strip()).
         + Them vao results tuple (name, id_int).
       - Sap xep results bang sorted(results, key=lambda x: x[1]).
       - Tra ve danh sach da sap xep.

    4. BAY COS PRO THUONG GAP:
       - Bay split: Dung item.split("-") se bi loi neu trong ten thi sinh co dau gach ngang.
         Phai dung dung delimiter " - ID: ".
       - Bay ep kieu ID: Quen ep int(raw_id) dan den sap xep theo chuoi ("100" < "20" sai thu tu so hoc).
       - Bay khoang trang thua: Quen goi .strip() truoc khi .title() hoac truoc khi ep kieu int.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N log N) voi N la so luong ban ghi hop le.
       - Do phuc tap bo nho: O(N) de luu ket qua.

    6. VI DU:
       - Input: records = ["nguyen van an - ID: 105", "tran thi mai - ID: 101", "le van cuong - ID: 103"]
         -> Tach & chuan hoa: [("Nguyen Van An", 105), ("Tran Thi Mai", 101), ("Le Van Cuong", 103)]
         -> Sap xep theo ID: [("Tran Thi Mai", 101), ("Le Van Cuong", 103), ("Nguyen Van An", 105)]
         -> Output: [("Tran Thi Mai", 101), ("Le Van Cuong", 103), ("Nguyen Van An", 105)]
    """
    results = []
    for item in records:
        if " - ID: " in item:
            parts = item.split(" - ID: ")
            name = parts[0].strip().title()
            id_num = int(parts[1].strip())
            results.append((name, id_num))
    results = sorted(results, key=lambda x: x[1])
    return results


def solution_04(students):
    """
    Q04 [Dien khuyet] - (73 diem)
    Ten bai: Loc danh sach xet hoc bong (Filter Scholarship Students)

    1. DE BAI TOM TAT & YEU CAU:
       - Danh sach sinh vien duoc bieu dien duoi dang cac dict:
         {"ten": str, "gpa": float, "drl": int, "diem_liet": bool}.
       - Dieu kien dat hoc bong:
         + Diem GPA >= 3.2
         + Diem ren luyen (DRL) >= 80
         + Khong bi diem liet (diem_liet == False)
       - Tra ve danh sach TEN cac sinh vien dat hoc bong, sap xep theo GPA GIAM DAN.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: students (list[dict]) - danh sach dict thong tin sinh vien.
       - Tra ve: list[str] - danh sach ten sinh vien du tieu chuan, sap xep GPA giam dan.

    3. Y TUONG THUAT TOAN:
       - Loc cac sinh vien thoa man 3 dieu kien dong thoi:
         s["gpa"] >= 3.2 and s["drl"] >= 80 and not s["diem_liet"]
       - Sap xep danh sach dat tieu chuan theo GPA giam dan:
         qualified.sort(key=lambda s: -s["gpa"])
       - Trich xuat danh sach ten:
         return [s["ten"] for s in qualified]

    4. BAY COS PRO THUONG GAP:
       - Bay dau so sanh: Dung > 3.2 thay vi >= 3.2 se lam rot sinh vien dung nguong 3.2.
       - Bay kieu du lieu tra ve: Tra ve ca dict sinh vien thay vi chi tra ve danh sach ten (list[str]).
       - Bay thu tu sap xep: Quen dau tru '-' hoac quen reverse=True khi sap xep GPA giam dan.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N log N) do buoc sap xep.
       - Do phuc tap bo nho: O(N) luu danh sach ket qua.

    6. VI DU:
       - Input: students = [
           {"ten": "An", "gpa": 3.6, "drl": 85, "diem_liet": False},
           {"ten": "Binh", "gpa": 3.8, "drl": 75, "diem_liet": False},
           {"ten": "Cuong", "gpa": 3.5, "drl": 90, "diem_liet": False},
           {"ten": "Dung", "gpa": 3.9, "drl": 95, "diem_liet": True}
         ]
         -> Binh bi loai vi drl = 75 < 80.
         -> Dung bi loai vi diem_liet = True.
         -> An (3.6) va Cuong (3.5) dat.
         -> Sap xep GPA giam dan: ["An", "Cuong"]
         -> Output: ["An", "Cuong"]
    """
    qualified = []
    for s in students:
        if s["gpa"] >= 3.2 and s["drl"] >= 80 and not s["diem_liet"]:
            qualified.append(s)
    qualified.sort(key=lambda s: -s["gpa"])
    return [s["ten"] for s in qualified]


def solution_05(text):
    """
    Q05 [Dien khuyet] - (73 diem)
    Ten bai: Dem tu va tim tu co tan suat cao nhat (Word Frequency with Tie-Breaker)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho mot chuoi van ban text.
       - Tach chuoi thanh cac tu theo khoang trang, loai bo cac dau cau .,!? o dau va cuoi moi tu,
         chuyen toan bo ve chu thuong.
       - Dem tan suat xuat hien cua tung tu.
       - Tim tu co so lan xuat hien nhieu nhat. Neu co nhieu tu cung dat tan suat cao nhat,
         chon tu co thu tu tu dien nho nhat (A-Z).
       - Neu van ban khong chua tu hop le nao, tra ve chuoi rong "".

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: text (str) - chuoi van ban dau vao.
       - Tra ve: str - tu xuat hien nhieu nhat thoa man tie-breaker A-Z.

    3. Y TUONG THUAT TOAN:
       - Tach tu: words = text.split(). Neu words rong, tra ve "".
       - Dung dict counts = {} de dem tan suat:
         + Moi tu duoc lam sach: clean_w = w.strip(".,!?").lower()
         + Neu clean_w khong rong: counts[clean_w] = counts.get(clean_w, 0) + 1
       - Neu counts rong, tra ve "".
       - Sap xep cac muc trong counts theo tieu chi kep:
         sorted(counts.items(), key=lambda p: (-p[1], p[0]))
         + -p[1]: so lan xuat hien giam dan.
         + p[0]: thu tu tu dien tang dan (A-Z).
       - Tra ve tu dau tien sau khi sap xep.

    4. BAY COS PRO THUONG GAP:
       - Bay tie-breaker: Dung ham max(counts, key=counts.get) se chi lay phan tu dau tien tim thay
         ma khong xu ly duoc thu tu tu dien A-Z khi hoa diem.
       - Bay dau cau: Dau cau co the o dau hoac cuoi tu (vi du: "...hello!!!"), can dung .strip(".,!?").
       - Bay chuoi rong: Can kiem tra chuoi rong hoac chuoi chi toan khoang trang/dau cau.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(W log W) voi W la so luong tu duy nhat.
       - Do phuc tap bo nho: O(W) cho bang bam tan suat.

    6. VI DU:
       - Input: text = "dog cat bird dog cat bird"
         -> counts = {"dog": 2, "cat": 2, "bird": 2}
         -> Ca 3 tu deu co so lan la 2.
         -> Tie-break A-Z: "bird" < "cat" < "dog".
         -> Output: "bird"
    """
    words = text.split()
    if not words:
        return ""
    counts = {}
    for w in words:
        clean_w = w.strip(".,!?").lower()
        if clean_w:
            counts[clean_w] = counts.get(clean_w, 0) + 1
    if not counts:
        return ""
    sorted_items = sorted(counts.items(), key=lambda p: (-p[1], p[0]))
    return sorted_items[0][0]


def solution_06(km, gio_cao_diem):
    """
    Q06 [Dien khuyet] - (73 diem)
    Ten bai: Tinh cuoc taxi bac thang (Tiered Taxi Fare with Peak Surcharge)

    1. DE BAI TOM TAT & YEU CAU:
       - Tinh cuoc taxi theo quang duong km va trang thai gio cao diem:
         + Neu km <= 0: Cuoc la 0 VND.
         + 1 km dau tien: 15.000 VND.
         + Tu km 2 den km 10: 12.000 VND/km (phan le duoc lam tron len bang math.ceil).
         + Tu km 11 tro di: 10.000 VND/km (phan le duoc lam tron len bang math.ceil).
         + Neu gio cao diem (gio_cao_diem == True): Phu thu 25% (nhan 1.25) va chi lay phan nguyen int.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so:
         + km (float): quang duong di chuyen tinh bang km.
         + gio_cao_diem (bool): co phai gio cao diem khong.
       - Tra ve: int - tong cuoc taxi can thanh toan (VND).

    3. Y TUONG THUAT TOAN:
       - Neu km <= 0: return 0.
       - Neu km <= 1: total = 15000.
       - Neu 1 < km <= 10:
         total = 15000 + math.ceil(km - 1) * 12000
       - Neu km > 10:
         total = 15000 + 9 * 12000 + math.ceil(km - 10) * 10000
       - Neu gio_cao_diem:
         total = int(total * 1.25)
       - Tra ve total.

    4. BAY COS PRO THUONG GAP:
       - Bay lam tron: Su dung round() thay vi math.ceil() lam sai so khi gap so thap phan.
       - Bay tinh luy tien: Khong tru 1 km dau hoac khong co dinh 9 km o bac 2 truoc khi tinh bac 3.
       - Bay phan nguyen: De yeu cau "lay phan nguyen" sau khi nhan 1.25, can dung int(...) thay vi de kieu float.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(1).
       - Do phuc tap bo nho: O(1).

    6. VI DU:
       - Input: km = 12.5, gio_cao_diem = True
         -> 1 km dau: 15.000 VND.
         -> 9 km tiep theo (km 2 - 10): 9 * 12.000 = 108.000 VND.
         -> 2.5 km con lai: math.ceil(2.5) * 10.000 = 3 * 10.000 = 30.000 VND.
         -> Tong truoc phu thu: 15.000 + 108.000 + 30.000 = 153.000 VND.
         -> Gio cao diem: int(153.000 * 1.25) = 191.250 VND.
         -> Output: 191250
    """
    if km <= 0:
        return 0
    if km <= 1:
        total = 15000
    elif km <= 10:
        total = 15000 + math.ceil(km - 1) * 12000
    else:
        total = 15000 + 9 * 12000 + math.ceil(km - 10) * 10000

    if gio_cao_diem:
        total = int(total * 1.25)
    return total


# ==============================================================================
# PHAN 2: SUA LOI DEBUGGING (Q7 - Q8, 180 DIEM)
# ==============================================================================

def solution_07(s):
    """
    Q07 [Debug 1 dong] - (90 diem)
    Ten bai: Kiem tra chuoi doi xung (Palindrome Verification)

    1. DE BAI TOM TAT & YEU CAU:
       - Kiem tra mot chuoi s co phai la chuoi doi xung (Palindrome) hay khong.
       - Chuoi doi xung la chuoi doc xuoi hay doc nguoc deu nhu nhau.
       - Chuoi rong hoac chuoi 1 ky tu duoc xem la doi xung (True).

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: s (str) - chuoi can kiem tra.
       - Tra ve: bool - True neu doi xung, False neu khong.

    3. Y TUONG THUAT TOAN:
       - Tinh do dai n = len(s).
       - Duyet i tu 0 den n // 2 - 1:
         So sanh ky tu dau s[i] voi ky tu doi xung o duoi s[n - 1 - i].
         Neu co bat ky cap nao khac nhau thi tra ve False.
       - Neu duyet het ma khong co cap nao khac nhau thi tra ve True.

    4. BAY COS PRO THUONG GAP (PHAN TICH LOI GOC):
       - Code goc: if s[i] != s[n - i]:
       - Nguyen nhan loi: Chi so am trong Python hoac chi so duong tinh tu n:
         Khi i = 0, n - i = n, truy cap s[n] se gay ra loi IndexError: string index out of range
         vi chi so hop le trong chuoi chi chay tu 0 den n - 1.
       - Dong sua dung: if s[i] != s[n - 1 - i]:

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N) qua N // 2 phep so sanh.
       - Do phuc tap bo nho: O(1).

    6. VI DU:
       - Input: s = "racecar" -> len = 7
         + i = 0: s[0] ('r') == s[6] ('r')
         + i = 1: s[1] ('a') == s[5] ('a')
         + i = 2: s[2] ('c') == s[4] ('c')
         -> Output: True
    """
    n = len(s)
    for i in range(n // 2):
        if s[i] != s[n - 1 - i]:
            return False
    return True


def solution_08(scores):
    """
    Q08 [Debug 1 dong] - (90 diem)
    Ten bai: Tim diem so cao thu nhi (Second Highest Score)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho danh sach diem so scores (cac so nguyen).
       - Tim va tra ve diem so cao thu nhi (phan biet) trong danh sach.
       - Neu khong ton tai diem cao thu nhi (danh sach co it hon 2 gia tri phan biet), tra ve None.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: scores (list[int]) - danh sach diem so.
       - Tra ve: int | None - gia tri diem cao thu nhi hoac None neu khong co.

    3. Y TUONG THUAT TOAN:
       - Loai bo cac gia tri trung lap va sap xep tang dan:
         unique_scores = sorted(list(set(scores)))
       - Kiem tra neu do dai unique_scores >= 2 thi lay phan tu ke cuoi unique_scores[-2],
         nguoc lai tra ve None.

    4. BAY COS PRO THUONG GAP (PHAN TICH LOI GOC):
       - Code goc: return unique_scores[-2]
       - Nguyen nhan loi: Khi danh sach rong, co 1 phan tu hoac tat ca cac phan tu deu bang nhau
         (vi du: [50, 50, 50]), unique_scores chi co 0 hoac 1 phan tu.
         Lenh unique_scores[-2] se nem ra IndexError: list index out of range.
       - Dong sua dung: return unique_scores[-2] if len(unique_scores) >= 2 else None

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N log N) cho buoc set va sorted.
       - Do phuc tap bo nho: O(N) de luu cac gia tri phan biet.

    6. VI DU:
       - Input: scores = [10, 20, 30, 40, 50]
         -> unique_scores = [10, 20, 30, 40, 50] (len = 5 >= 2)
         -> unique_scores[-2] = 40
         -> Output: 40
       - Input: scores = [50, 50, 50]
         -> unique_scores = [50] (len = 1 < 2)
         -> Output: None
    """
    unique_scores = sorted(list(set(scores)))
    return unique_scores[-2] if len(unique_scores) >= 2 else None


# ==============================================================================
# PHAN 3: THIET KE DESIGN (Q9 - Q10, 380 DIEM)
# ==============================================================================

def solution_09(orders):
    """
    Q09 [Thiet ke tu dau] - (190 diem)
    Ten bai: Sap xep don hang tieu chi kep (Multi-Criteria Order Sorting)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho danh sach cac don hang, moi don hang la mot dict:
         {"id": str, "vip": bool, "total": int}.
       - Sap xep danh sach don hang theo 3 tieu chi uu tien tuan tu:
         + Tieu chi 1: Khach hang VIP (vip == True) luon duoc uu tien dung truoc khach thuong (vip == False).
         + Tieu chi 2: Trong cung nhom khach hang, tong tien (total) LON HON dung truoc (giam dan).
         + Tieu chi 3: Neu cung nhom va cung tong tien, ma don hang (id) sap xep TANG DAN theo thu tu tu dien A-Z.
       - Tra ve danh sach don hang sau khi sap xep.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: orders (list[dict]) - danh sach don hang can sap xep.
       - Tra ve: list[dict] - danh sach don hang da sap xep theo dung 3 tieu chi.

    3. Y TUONG THUAT TOAN:
       - Su dung ham sorted() cua Python voi key la mot tuple dai dien cho 3 muc uu tien:
         + not x["vip"]: neu vip=True -> not True la False (0); neu vip=False -> not False la True (1).
           Vi 0 < 1 nen VIP se duoc xep truoc.
         + -x["total"]: them dau tru de dao nguoc thu tu sap xep so hoc, so tien lon hon co khoa nho hon,
           dung truoc trong danh sach.
         + x["id"]: chuoi ky tu duoc so sanh truc tiep theo thu tu tu dien tang dan (A-Z).
       - Tra ve danh sach ket qua tu sorted(orders, key=lambda x: (not x["vip"], -x["total"], x["id"])).

    4. BAY COS PRO THUONG GAP:
       - Bay dao nguoc boolean: Nham lan giua x["vip"] va not x["vip"]. Mac dinh True > False nen neu de x["vip"],
         False se dung truoc True trong sap xep tang dan.
       - Bay sap xep nhieu lan: Dung sorted() nhieu lan lien tiep neu khong chu y den tinh on dinh (stability)
         se bi ghi de ket qua sap xep truoc do. Sap xep tuple 1 lan la giai phap toi uu nhat.
       - Bay sua doi truc tiep: Ham can tra ve danh sach moi hoac danh sach da sap xep dung yeu cau.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N log N) voi N la so luong don hang.
       - Do phuc tap bo nho: O(N) do tao danh sach moi sau khi sap xep.

    6. VI DU:
       - Input: orders = [
           {"id": "B01", "vip": False, "total": 100000},
           {"id": "A01", "vip": True, "total": 200000},
           {"id": "A02", "vip": True, "total": 500000},
           {"id": "B02", "vip": False, "total": 300000}
         ]
         -> Nhom VIP: A02 (500k), A01 (200k)
         -> Nhom thuong: B02 (300k), B01 (100k)
         -> Output: [
           {"id": "A02", "vip": True, "total": 500000},
           {"id": "A01", "vip": True, "total": 200000},
           {"id": "B02", "vip": False, "total": 300000},
           {"id": "B01", "vip": False, "total": 100000}
         ]
    """
    return sorted(orders, key=lambda x: (not x["vip"], -x["total"], x["id"]))


def solution_10(board):
    """
    Q10 [Thiet ke tu dau] - (190 diem)
    Ten bai: Mo phong ech nhay o tich diem (Frog Board Hopping Simulation)

    1. DE BAI TOM TAT & YEU CAU:
       - Cho mot danh sach cac so nguyen board bieu dien ban co tro choi.
       - Con ech bat dau tu o dau tien (vi tri pos = 0).
       - Tai o hien tai pos:
         + Ech duoc tich luy them board[pos] diem.
         + Buoc nhay tiep theo la pos + board[pos].
       - Tro choi dung lai khi mot trong cac dieu kien sau xay ra:
         + Ech nhay ra ngoai ban co (pos < 0 hoac pos >= len(board)).
         + Ech roi vao o co gia tri <= 0 (o bay, dung ngay khong tich luy diem o nay).
         + Ech roi vao o da tung dat chan den (phat hien chu trinh lap vo han, dung ngay).
       - Tra ve tong so diem ma con ech tich luy duoc trong suot hanh trinh.
       - Neu ban co rong, tra ve 0.

    2. THAM SO VA GIA TRI TRA VE:
       - Tham so: board (list[int]) - danh sach cac o tren ban co.
       - Tra ve: int - tong so diem tich luy duoc.

    3. Y TUONG THUAT TOAN:
       - Neu not board: return 0.
       - Khoi tao:
         + total_score = 0 (tong diem tich luy).
         + pos = 0 (vi tri hien tai).
         + visited = set() (tap hop luu cac vi tri da di qua de chong lap).
         + n = len(board).
       - Vong lap while 0 <= pos < n:
         + Kiem tra dieu kien dung truoc khi tich luy:
           Neu pos in visited hoac board[pos] <= 0: break.
         + Danh dau visited.add(pos).
         + Cong diem: step = board[pos]; total_score += step.
         + Di chuyen: pos += step.
       - Tra ve total_score sau khi vong lap ket thuc.

    4. BAY COS PRO THUONG GAP:
       - Bay cong diem o bay: Khi gap o co gia tri <= 0, phai dung ngay lap tuc ma KHONG cong gia tri am/0 vao tong diem.
       - Bay chu trinh lap vo han (Infinite Loop): Neu khong dung tap hop visited, khi gap chu trinh
         (vi du: [1, -1] hoac [2, 1, ...]) chuong trinh se bi chay vo han hoac vuot qua thoi gian quy dinh (TLE).
       - Bay vi tri am: Buoc nhay co the dua pos ve so am, can kiem tra 0 <= pos < n.

    5. DO PHUC TAP & LUU Y:
       - Do phuc tap thoi gian: O(N) vi moi vi tri tren ban co duoc tham toi da 1 lan nho visited set.
       - Do phuc tap bo nho: O(N) de luu visited set.

    6. VI DU:
       - Input: board = [2, 3, 1, 1, 4]
         + pos = 0: board[0] = 2 > 0 -> total = 2, pos = 0 + 2 = 2.
         + pos = 2: board[2] = 1 > 0 -> total = 2 + 1 = 3, pos = 2 + 1 = 3.
         + pos = 3: board[3] = 1 > 0 -> total = 3 + 1 = 4, pos = 3 + 1 = 4.
         + pos = 4: board[4] = 4 > 0 -> total = 4 + 4 = 8, pos = 4 + 4 = 8 >= 5 (ra ngoai).
         -> Output: 8
       - Input: board = [1, 2, 1, -2, 1]
         + pos = 0: board[0] = 1 -> total = 1, pos = 1.
         + pos = 1: board[1] = 2 -> total = 3, pos = 3.
         + pos = 3: board[3] = -2 <= 0 -> dung lai!
         -> Output: 3
    """
    if not board:
        return 0
    total_score = 0
    pos = 0
    visited = set()
    n = len(board)
    while 0 <= pos < n:
        if pos in visited or board[pos] <= 0:
            break
        visited.add(pos)
        step = board[pos]
        total_score += step
        pos += step
    return total_score


# ==============================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de5", "DAP AN DE 5 - LUYEN TAP BANG B (COS Pro Level 2)")
