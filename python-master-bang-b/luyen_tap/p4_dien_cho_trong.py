# -*- coding: utf-8 -*-
"""
NHOM 4 - DIEN CHO TRONG THEO FORMAT DE THAT (15 bai)
================================================================
Day la dang chiem DIEM CAO NHAT trong de Bang B: 440/1000.
Cac bai tap duoc bien soan theo dung cau truc 5 phan cua de thi chinh thuc COS Pro Level 2.
Thay moi ___1___, ___2___ ... bang doan code dung. KHONG sua cac dong khac.
(___1___ la mot ten bien hop le nen file van chay duoc, chi bao NameError
 cho den khi ban dien xong.)

Cham diem:   python cham_diem.py 4
Xem dap an:  dap_an/p4_dien_cho_trong_dapan.py
Muc tieu thoi gian: 2 phut/bai. Day la dang phai lam THAT NHANH va CHINH XAC.
================================================================
"""


# ---------------------------------------------------------------- Bai 4.01
def solution_401(scores):
    """
    DE BAI:
    Trong mot cuoc thi am nhac, diem danh gia cua moi thi sinh duoc tinh bang diem trung binh
    cua cac giam khao sau khi da loai bo 1 diem cao nhat va 1 diem thap nhat.
    Neu co nhieu diem cao nhat hoac thap nhat giong nhau, chi loai bo dung 1 diem moi loai.
    Hay tinh va tra ve diem danh gia cao nhat trong tat ca cac thi sinh.

    GIAI THICH THAM SO:
    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao cho tung thi sinh.
      So luong thi sinh tu 2 den 100. Moi thi sinh co tu 3 den 20 diem danh gia (so tu nhien tu 0 den 100).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la diem danh gia cao nhat. Neu diem trung binh la so thap phan,
      chi lay phan nguyen (cat bo phan le).

    VI DU:
    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91

    GIAI THICH VI DU:
    - Thi sinh 1: loai 85 va 95, con [92, 90] -> trung binh (92 + 90) // 2 = 91.
    - Thi sinh 2: loai 50 va 91, con [76, 85] -> trung binh (76 + 85) // 2 = 80.
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


# ---------------------------------------------------------------- Bai 4.02
def solution_402(s):
    """
    DE BAI:
    Mot trung tam du lieu can nen chuoi ma van don de tiet kiem bo nho.
    He thong gom cac ky tu in hoa lien tiep giong nhau theo quy tac:
    - Neu ky tu chi xuat hien 1 lan thi giu nguyen ky tu do.
    - Neu ky tu xuat hien tu 2 lan lien tiep tro len thi ghi ky tu kem theo so lan lap lai.
    Cho chuoi s, hay tra ve chuoi da duoc nen.

    GIAI THICH THAM SO:
    - s: chuoi ky tu (str) chi chua cac chu cai in hoa 'A'-'Z', do dai tu 1 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi ky tu (str) da duoc nen theo quy tac tren.

    VI DU:
    - s = "AAABBCDDDD" -> return "A3B2CD4"

    GIAI THICH VI DU:
    - 'A' xuat hien 3 lan lien tiep -> "A3"
    - 'B' xuat hien 2 lan lien tiep -> "B2"
    - 'C' xuat hien 1 lan -> "C"
    - 'D' xuat hien 4 lan lien tiep -> "D4"
    - Ket qua gop lai: "A3B2CD4".
    """
    res = []
    curr_char = s[0]
    count = 1
    for i in ___1___:
        if s[i] == curr_char:
            count += 1
        else:
            res.append(___2___)
            curr_char = s[i]
            count = 1
    res.append(___3___)
    return "".join(res)


# ---------------------------------------------------------------- Bai 4.03
def solution_403(start_month, start_day, end_month, end_day):
    """
    DE BAI:
    Mot he thong dat phong khach san can tinh so ngay luu tru cua khach hang trong nam 2026
    (nam khong nhuan gom 365 ngay). So ngay cua 12 thang lan luot la:
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].
    Cho biet ngay nhan phong (start_month, start_day) va ngay tra phong (end_month, end_day),
    hay tinh so ngay khach hang da luu tru (ngay tra phong - ngay nhan phong).

    GIAI THICH THAM SO:
    - start_month, start_day: thang va ngay nhan phong (1 <= start_month <= 12, ngay hop le).
    - end_month, end_day: thang va ngay tra phong (1 <= end_month <= 12, ngay hop le).
    - Dam bao moc thoi gian ket thuc luon sau hoac cung ngay voi moc bat dau trong nam 2026.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so ngay chenh lech giua hai moc thoi gian.

    VI DU:
    - start_month = 1, start_day = 15, end_month = 3, end_day = 5 -> return 49

    GIAI THICH VI DU:
    - Ngay 15/1 la ngay thu 15 trong nam.
    - Ngay 5/3 la ngay thu 31 (thang 1) + 28 (thang 2) + 5 = 64 trong nam.
    - So ngay luu tru: 64 - 15 = 49 ngay.
    """
    days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    start_total = ___1___
    end_total = ___2___
    return ___3___


# ---------------------------------------------------------------- Bai 4.04
def solution_404(votes):
    """
    DE BAI:
    Trong mot cuoc bau cu dai bieu, moi phieu bau ghi ma so cua mot ung vien.
    Ung vien chien thang ngay tai vong 1 neu so phieu nhan duoc chiem hon 50% tong so phieu bau
    (so phieu > len(votes) // 2). Neu khong co ung vien nao dat tren 50% so phieu, tra ve -1.

    GIAI THICH THAM SO:
    - votes: list cac so nguyen duong dai dien cho ma so ung vien tren moi phieu bau.
      Do dai mang tu 1 den 1000. Ma ung vien tu 1 den 100.

    GIAI THICH GIA TRI RETURN:
    - Tra ve ma so ung vien (int) chien thang neu co, nguoc lai tra ve -1.

    VI DU:
    - votes = [2, 2, 1, 2, 3, 2, 2] -> return 2
    - votes = [1, 2, 3, 1, 2] -> return -1

    GIAI THICH VI DU:
    - Vi du 1: Tong so 7 phieu, ung vien 2 nhan duoc 5 phieu (> 7 // 2 = 3) -> tra ve 2.
    - Vi du 2: Tong so 5 phieu, nguong chien thang la > 2 phieu. Khong ai co > 2 phieu -> tra ve -1.
    """
    counts = {}
    threshold = ___1___
    for v in votes:
        counts[v] = ___2___
    for candidate, count in counts.items():
        if ___3___:
            return candidate
    return -1


# ---------------------------------------------------------------- Bai 4.05
def solution_405(teams):
    """
    DE BAI:
    Ban to chuc giai bong da can xep hang cac doi bong theo tieu chi uu tien:
    1. Diem so (points) CAO hon xep truoc.
    2. Neu cung diem, hieu so ban thang (diff) CAO hon xep truoc.
    3. Neu cung hieu so, so the phat (cards) IT hon xep truoc.
    4. Neu van bang nhau, xep theo ten doi (name) theo thu tu tu dien A-Z.
    Hay tra ve danh sach ten cac doi bong da duoc sap xep.

    GIAI THICH THAM SO:
    - teams: list cac dict, moi dict co cac khoa:
      "name" (str), "points" (int >= 0), "diff" (int), "cards" (int >= 0).
      So luong doi tu 1 den 50.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac chuoi (list str) la ten cac doi da duoc sap xep theo thu tu tren.

    VI DU:
    - teams = [{"name": "A", "points": 10, "diff": 5, "cards": 2},
               {"name": "B", "points": 10, "diff": 5, "cards": 1},
               {"name": "C", "points": 12, "diff": 2, "cards": 4}]
      -> return ["C", "B", "A"]

    GIAI THICH VI DU:
    - Doi C co 12 diem -> xep thu nhat.
    - Doi A va B deu co 10 diem va hieu so 5, nhung B co 1 the (< 2 the cua A) -> B dung truoc A.
    - Thu tu xep hang: ["C", "B", "A"].
    """
    sorted_teams = sorted(teams, key=lambda t: ___1___)
    return ___2___


# ---------------------------------------------------------------- Bai 4.06
def solution_406(daily_revenue, k):
    """
    DE BAI:
    Mot chu chuoi cua hang can tim tong doanh thu lon nhat cua k ngay lien tiep
    de danh gia hieu qua kinh doanh trong chien dich quang cao.
    Cho mang daily_revenue chua doanh thu tung ngay va so nguyen k,
    hay tim tong doanh thu lon nhat cua mot doan k ngay lien tiep.

    GIAI THICH THAM SO:
    - daily_revenue: list cac so nguyen khong am, do dai N tu 1 den 1000.
    - k: so nguyen duong la so ngay lien tiep can tinh (1 <= k <= N).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong doanh thu lon nhat cua k ngay lien tiep.

    VI DU:
    - daily_revenue = [10, 20, 30, 40, 50, 60, 70], k = 3 -> return 180

    GIAI THICH VI DU:
    - Cua so 3 ngay cuoi [50, 60, 70] co tong la 50 + 60 + 70 = 180 (lon nhat).
    """
    current_sum = ___1___
    max_sum = current_sum
    for i in range(k, len(daily_revenue)):
        current_sum += ___2___
        if ___3___:
            max_sum = current_sum
    return max_sum


# ---------------------------------------------------------------- Bai 4.07
def solution_407(weights, limit):
    """
    DE BAI:
    Mot doi xe cuu ho can van chuyen cac thung hang cuu tro.
    Moi chuyen xe chi cho duoc toi da 2 thung hang va tong khoi luong cua 2 thung
    khong duoc vuot qua tai trong toi da limit cua xe.
    Moi thung hang deu co khoi luong <= limit.
    Hay tinh so chuyen xe it nhat de cho het tat ca cac thung hang.

    GIAI THICH THAM SO:
    - weights: list cac so nguyen duong la khoi luong tung thung hang, do dai tu 1 den 1000.
    - limit: so nguyen duong la tai trong toi da cua xe (1 <= weights[i] <= limit <= 10000).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so chuyen xe toi thieu can dung.

    VI DU:
    - weights = [3, 2, 2, 1], limit = 3 -> return 3

    GIAI THICH VI DU:
    - Sap xep cac thung: [1, 2, 2, 3].
    - Chuyen 1: thung 1 + thung 2 (tong 3 <= 3).
    - Chuyen 2: thung 2 (khoi luong 2 <= 3).
    - Chuyen 3: thung 3 (khoi luong 3 <= 3).
    - Tong cong can 3 chuyen xe.
    """
    weights.sort()
    left = 0
    right = len(weights) - 1
    trips = 0
    while ___1___:
        if ___2___:
            left += 1
        right -= 1
        trips += 1
    return trips


# ---------------------------------------------------------------- Bai 4.08
def solution_408(commands):
    """
    DE BAI:
    Mot robot lau nha tu dong xuat phat tu toa do (0, 0) tren mat phang toa do 2D,
    ban dau dang quay ve huong Bac (huong duong cua truc Y).
    Robot nhan vao chuoi cac lenh di chuyen commands gom cac ky tu:
    - 'F': Di thang ve phia truoc 1 don vi theo huong dang dung.
    - 'L': Quay trai 90 do tai cho.
    - 'R': Quay phai 90 do tai cho.
    - 'B': Quay nguoc lai 180 do tai cho.
    Hay tinh khoang cach Manhattan |x| + |y| tu vi tri cuoi cung cua robot ve vi tri goc (0, 0).

    GIAI THICH THAM SO:
    - commands: chuoi ky tu (str) chi gom cac ky tu 'F', 'L', 'R', 'B', do dai tu 1 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la khoang cach Manhattan |x| + |y| tu diem ket thuc ve goc toa do.

    VI DU:
    - commands = "FFRFF" -> return 4

    GIAI THICH VI DU:
    - Xuat phat tai (0,0) huong Bac. Lenh 'F', 'F' -> den (0, 2).
    - Lenh 'R' -> quay sang huong Dong.
    - Lenh 'F', 'F' -> di tiep den (2, 2).
    - Khoang cach Manhattan = |2| + |2| = 4.
    """
    dx = [0, 1, 0, -1]  # Bac(0), Dong(1), Nam(2), Tay(3)
    dy = [1, 0, -1, 0]
    x, y = 0, 0
    direction = 0
    for cmd in commands:
        if cmd == 'F':
            x += ___1___
            y += dy[direction]
        elif cmd == 'L':
            direction = ___2___
        elif cmd == 'R':
            direction = ___3___
        elif cmd == 'B':
            direction = (direction + 2) % 4
    return ___4___


# ---------------------------------------------------------------- Bai 4.09
def solution_409(price_paid, item_cost):
    """
    DE BAI:
    Mot quay ban hang tu dong thoi tien thua cho khach bang cac menh gia dong xu:
    500 dong, 100 dong, 50 dong va 10 dong.
    May luon uu tien tra cac dong xu co menh gia lon nhat co the de tong so luong dong xu
    tra lai la it nhat.
    Cho biet so tien khach da tra price_paid va gia mon hang item_cost,
    hay tinh tong so luong dong xu ma may se tra lai cho khach.

    GIAI THICH THAM SO:
    - price_paid: so nguyen duong la so tien khach dua (10 <= price_paid <= 100000).
    - item_cost: so nguyen duong la gia tri mon hang (10 <= item_cost <= price_paid).
    - So tien thua (price_paid - item_cost) luon la boi so cua 10.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so luong dong xu tra lai.

    VI DU:
    - price_paid = 1000, item_cost = 320 -> return 6

    GIAI THICH VI DU:
    - So tien thua: 1000 - 320 = 680 dong.
    - May tra: 1 xu 500 (con 180), 1 xu 100 (con 80), 1 xu 50 (con 30), 3 xu 10 (con 0).
    - Tong so xu: 1 + 1 + 1 + 3 = 6 xu.
    """
    change = ___1___
    coins = [500, 100, 50, 10]
    total_coins = 0
    for c in coins:
        total_coins += ___2___
        change %= ___3___
    return total_coins


# ---------------------------------------------------------------- Bai 4.10
def solution_410(card_number):
    """
    DE BAI:
    De kiem tra tinh hop le cua mot ma the hoi vien, he thong su dung thuat toan sau:
    1. Tinh tu chu so cuoi cung ben phai sang trai (vi tri 1 la chu so cuoi cung).
    2. Cac chu so o vi tri chan (vi tri 2, 4, 6...) duoc nhan doi. Neu ket qua sau khi nhan doi >= 10,
       tru ket qua do di 9.
    3. Cac chu so o vi tri le (vi tri 1, 3, 5...) giu nguyen.
    4. Tinh tong tat ca cac chu so sau khi bien doi. Neu tong chia het cho 10 thi ma the hop le (True),
       nguoc lai la khong hop le (False).
    Hay viet ham kiem tra ma the card_number.

    GIAI THICH THAM SO:
    - card_number: chuoi ky tu (str) gom cac chu so '0'-'9', do dai tu 1 den 20.

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu ma the hop le, False neu khong hop le).

    VI DU:
    - card_number = "79927398713" -> return True
    - card_number = "79927398710" -> return False

    GIAI THICH VI DU:
    - Dao nguoc: 3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7.
    - Vi tri chan bien doi: 1*2=2, 8*2-9=7, 3*2=6, 2*2=4, 9*2-9=9.
    - Tong: 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70.
    - 70 chia het cho 10 -> True.
    """
    digits = [int(c) for c in ___1___]
    total = 0
    for i, d in enumerate(digits):
        if ___2___:
            d *= 2
            if d >= 10:
                d -= ___3___
        total += d
    return ___4___


# ---------------------------------------------------------------- Bai 4.11
def solution_411(text, width):
    """
    DE BAI:
    Trong mot trinh xem van ban tren dien thoai, can chia mot doan van text thanh cac dong
    sao cho moi dong co do dai toi da khong qua width ky tu.
    Moi dong chua cang nhieu tu cang tot, cac tu cach nhau dung 1 khoang trang.
    Cac tu khong bi ngat doi giua chung. Biet rang moi tu don le deu co do dai <= width.
    Hay tra ve danh sach cac dong sau khi chia.

    GIAI THICH THAM SO:
    - text: chuoi ky tu (str) gom cac tu ngan cach boi khoang trang, do dai tu 1 den 1000.
    - width: so nguyen duong la do dai toi da cua mot dong (1 <= width <= 100).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac chuoi (list str) la cac dong van ban sau khi chia.

    VI DU:
    - text = "python master bang b vo dich", width = 13
      -> return ["python master", "bang b vo", "dich"]

    GIAI THICH VI DU:
    - Dong 1: "python master" (do dai 13 <= 13).
    - Dong 2: "bang b vo" (do dai 9 <= 13, neu them "dich" dai 14 > 13).
    - Dong 3: "dich" (do dai 4 <= 13).
    """
    words = ___1___
    if not words:
        return []
    lines = []
    curr_line = words[0]
    for w in words[1:]:
        if ___2___:
            curr_line += ___3___
        else:
            lines.append(curr_line)
            curr_line = w
    lines.append(curr_line)
    return lines


# ---------------------------------------------------------------- Bai 4.12
def solution_412(matrix):
    """
    DE BAI:
    Trong mot ung dung chinh sua anh, nguoi dung thuc hien thao tac xoay anh 90 do
    theo chieu kim dong ho. Buc anh duoc bieu dien duoi dang ma tran vuong N x N.
    Cho ma tran matrix, hay tra ve ma tran moi sau khi da xoay 90 do theo chieu kim dong ho.

    GIAI THICH THAM SO:
    - matrix: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 50.
      Gia tri cac phan tu la so nguyen tu 0 den 255.

    GIAI THICH GIA TRI RETURN:
    - Tra ve mang 2 chieu moi (list cac list int) kich thuoc N x N da xoay 90 do.

    VI DU:
    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      -> return [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

    GIAI THICH VI DU:
    - Hang 1 [1, 2, 3] bien thanh cot 3 [1, 2, 3] tu tren xuong.
    - Hang 2 [4, 5, 6] bien thanh cot 2 [4, 5, 6].
    - Hang 3 [7, 8, 9] bien thanh cot 1 [7, 8, 9].
    """
    n = len(matrix)
    res = ___1___
    for r in range(n):
        for c in range(n):
            res[c][n - 1 - r] = ___2___
    return res


# ---------------------------------------------------------------- Bai 4.13
def solution_413(s):
    """
    DE BAI:
    He thong phan tich du lieu can tim ky tu khong bi trung lap dau tien trong mot chuoi van ban s.
    Hay tra ve chi so (0-indexed) cua ky tu dau tien chi xuat hien dung 1 lan trong chuoi.
    Neu khong co ky tu nao nhu vay hoac chuoi rong, tra ve -1.

    GIAI THICH THAM SO:
    - s: chuoi ky tu (str) chi gom cac chu cai in thuong 'a'-'z', do dai tu 0 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la vi tri (chi so 0-indexed) cua ky tu khong lap dau tien,
      hoac -1 neu khong ton tai.

    VI DU:
    - s = "lovepython" -> return 0
    - s = "aabbcc" -> return -1

    GIAI THICH VI DU:
    - O chuoi "lovepython", ky tu 'l' o chi so 0 chi xuat hien 1 lan -> tra ve 0.
    - O chuoi "aabbcc", tat ca cac ky tu deu xuat hien 2 lan -> tra ve -1.
    """
    counts = {}
    for c in s:
        counts[c] = ___1___
    for i, c in ___2___:
        if ___3___:
            return i
    return -1


# ---------------------------------------------------------------- Bai 4.14
def solution_414(voucher, input_str):
    """
    DE BAI:
    He thong kiem tra ma khuyen mai can xac dinh xem ma voucher co phai la mot day con
    (subsequence) cua chuoi input_str ma nguoi dung nhap vao hay khong.
    Day con la chuoi duoc tao thanh bang cach giu nguyen thu tu cac ky tu cua chuoi goc,
    co the bo qua mot so ky tu xen ke.
    Hay tra ve True neu voucher la day con cua input_str, nguoc lai tra ve False.

    GIAI THICH THAM SO:
    - voucher: chuoi ky tu (str) chua ma khuyen mai can tim, do dai tu 0 den 500.
    - input_str: chuoi ky tu (str) nguoi dung nhap, do dai tu 0 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu voucher la day con cua input_str, nguoc lai False).

    VI DU:
    - voucher = "abc", input_str = "ahbgdc" -> return True
    - voucher = "axc", input_str = "ahbgdc" -> return False

    GIAI THICH VI DU:
    - "abc" xuat hien theo thu tu trong "ahbgdc" ('a' o vi tri 0, 'b' o vi tri 2, 'c' o vi tri 5) -> True.
    - "axc" khong phai day con vi 'x' khong co trong "ahbgdc" -> False.
    """
    i, j = 0, 0
    while ___1___:
        if ___2___:
            i += 1
        j += 1
    return ___3___


# ---------------------------------------------------------------- Bai 4.15
def solution_415(grid):
    """
    DE BAI:
    Tren mot bang so vuong kich thuoc N x N, nguoi ta can tinh tong gia tri cua tat ca cac o
    nam tren 2 duong cheo (duong cheo chinh va duong cheo phu).
    Luu y: Neu o nao nam tai giao diem cua ca 2 duong cheo (khi N la so le) thi gia tri cua o do
    chi duoc tinh dung 1 lan.
    Cho ma tran grid, hay tinh va tra ve tong gia tri cac phan tu tren 2 duong cheo.

    GIAI THICH THAM SO:
    - grid: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 100.
      Gia tri cac phan tu la so nguyen tu -1000 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong gia tri cac phan tu tren 2 duong cheo.

    VI DU:
    - grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return 25

    GIAI THICH VI DU:
    - Cac phan tu tren duong cheo chinh: grid[0][0]=1, grid[1][1]=5, grid[2][2]=9.
    - Cac phan tu tren duong cheo phu: grid[0][2]=3, grid[1][1]=5, grid[2][0]=7.
    - O trung tam (1, 1) mang gia tri 5 chi tinh 1 lan.
    - Tong: 1 + 5 + 9 + 3 + 7 = 25.
    """
    n = len(grid)
    total = 0
    for i in range(n):
        total += ___1___
        if ___2___:
            total += ___3___
    return total
