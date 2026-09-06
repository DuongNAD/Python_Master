# -*- coding: utf-8 -*-
"""
NHOM 5 - DEBUGGING THEO FORMAT DE THAT (COS PRO LEVEL 2 / LEVEL 1)
================================================================
Moi ham duoi day CO LOI LOGIC. Docstring mo ta dung hanh vi MONG MUON.
Nhiem vu: sua CANG IT dong CANG TOT de ham chay dung.

Cham diem:   python cham_diem.py 5
Xem dap an:  dap_an/p5_debug_that_dapan.py  +  GIAI_THICH_P5.md
Muc tieu thoi gian: 2-3 phut/bai.
================================================================
"""


# ---------------------------------------------------------------- Bai 5.01
def solution_501(prices):
    """
    DE BAI:
    Mot sieu thi co chuong trinh tich diem thuong cho khach hang thanh vien.
    Moi mat hang co gia tien la prices[i]. Quy tac tich diem cho tung mat hang nhu sau:
    - Neu gia mat hang tu 50000 dong tro len (prices[i] >= 50000), diem thuong la
      (prices[i] // 1000) * 2 diem.
    - Neu gia mat hang duoi 50000 dong (prices[i] < 50000), diem thuong la
      prices[i] // 1000 diem.
    Hay tinh va tra ve tong so diem thuong ma khach hang nhan duoc cho ca hoa don.

    GIAI THICH THAM SO:
    - prices: list cac so nguyen khong am dai dien cho gia cua tung mat hang trong hoa don.
      Do dai danh sach tu 1 den 1000. Moi phan tu tu 0 den 10000000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong so diem thuong tich luy duoc.

    VI DU:
    - prices = [50000, 30000, 120000] -> return 370

    GIAI THICH VI DU:
    - Mat hang 1: 50000 >= 50000 -> (50000 // 1000) * 2 = 100 diem.
    - Mat hang 2: 30000 < 50000 -> 30000 // 1000 = 30 diem.
    - Mat hang 3: 120000 >= 50000 -> (120000 // 1000) * 2 = 240 diem.
    - Tong diem thuong: 100 + 30 + 240 = 370 diem.
    """
    total_points = 0
    for p in prices:
        if p > 50000:
            total_points += (p // 1000) * 2
        else:
            total_points += p // 1000
    return total_points


# ---------------------------------------------------------------- Bai 5.02
def solution_502(prices, k):
    """
    DE BAI:
    Mot nha dau tu theo doi gia mot ma co phieu trong N ngay lien tiep.
    Nha dau tu muon tim giai doan k ngay lien tiep co tong gia tri co phieu lon nhat
    de danh gia xu huong tang truong manh nhat.
    Cho danh sach prices va so nguyen k, hay tim tong gia tri lon nhat cua mot doan
    k ngay lien tiep.

    GIAI THICH THAM SO:
    - prices: list cac so nguyen duong la gia co phieu trong tung ngay, do dai N tu 1 den 1000.
    - k: so nguyen duong la so ngay lien tiep can xet (1 <= k <= N).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong gia tri lon nhat cua k ngay lien tiep.

    VI DU:
    - prices = [10, 20, 100, 40, 50], k = 2 -> return 140

    GIAI THICH VI DU:
    - Cac doan 2 ngay lien tiep: [10, 20]->30, [20, 100]->120, [100, 40]->140, [40, 50]->90.
    - Tong lon nhat la 140 (doan [100, 40]).
    """
    max_sum = sum(prices[:k])
    for i in range(len(prices) - k):
        curr_sum = sum(prices[i:i+k])
        if curr_sum > max_sum:
            max_sum = curr_sum
    return max_sum


# ---------------------------------------------------------------- Bai 5.03
def solution_503(initial_energy, steps):
    """
    DE BAI:
    Trong mot mo phong vat ly hat, muc nang luong cua hat thay doi qua tung buoc steps
    theo quy tac day truy hoi:
    - O buoc 1: prev = initial_energy, curr = initial_energy.
    - Tu buoc 2 tro di, muc nang luong moi bang: curr_new = curr + 2 * prev.
      Sau do cap nhat: prev tro thanh curr cu, va curr tro thanh curr_new.
    Hay tinh va tra ve muc nang luong cua hat sau dung steps buoc.

    GIAI THICH THAM SO:
    - initial_energy: so nguyen duong la muc nang luong ban dau (1 <= initial_energy <= 100).
    - steps: so nguyen duong la so buoc can tinh (1 <= steps <= 30).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la muc nang luong sau steps buoc.

    VI DU:
    - initial_energy = 2, steps = 3 -> return 10

    GIAI THICH VI DU:
    - Buoc 1: prev = 2, curr = 2.
    - Buoc 2: curr_new = 2 + 2 * 2 = 6; prev = 2, curr = 6.
    - Buoc 3: curr_new = 6 + 2 * 2 = 10; prev = 6, curr = 10.
    - Ket qua sau 3 buoc la 10.
    """
    prev = initial_energy
    curr = initial_energy
    for _ in range(steps - 1):
        prev = curr
        curr = curr + 2 * prev
    return curr


# ---------------------------------------------------------------- Bai 5.04
def solution_504(package_weights, num_trucks):
    """
    DE BAI:
    Mot cong ty logistic can chia deu tong khoi luong cac kien hang cho num_trucks xe tai.
    Biet tong khoi luong la tong cua tat ca cac phan tu trong package_weights.
    Hay tinh tai trong trung binh moi xe phai cho.
    Neu ket qua chia la so thap phan, chi lay phan nguyen (cat bo phan thap phan).

    GIAI THICH THAM SO:
    - package_weights: list cac so nguyen khong am la khoi luong tung kien hang, do dai tu 1 den 1000.
    - num_trucks: so nguyen duong la so luong xe tai (1 <= num_trucks <= 100).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tai trong trung binh moi xe tai.

    VI DU:
    - package_weights = [100, 200, 350], num_trucks = 2 -> return 325

    GIAI THICH VI DU:
    - Tong khoi luong: 100 + 200 + 350 = 650.
    - Tai trong moi xe: 650 // 2 = 325 (kieu int).
    """
    total_weight = sum(package_weights)
    return total_weight / num_trucks


# ---------------------------------------------------------------- Bai 5.05
def solution_505(salary, kpi_score, weight):
    """
    DE BAI:
    Mot doanh nghiep tinh tien thuong hieu suat cuoi nam cho nhan vien theo cong thuc:
    Tien thuong = salary * (kpi_score * weight / 1000).
    Luu y quan trong: Neu tien thuong tinh ra la so thap phan, chi lay phan so nguyen
    (cat bo phan le, khong lam tron theo quy tac lam tron so).

    GIAI THICH THAM SO:
    - salary: so nguyen duong la muc luong co ban cua nhan vien (1000 <= salary <= 100000000).
    - kpi_score: so nguyen khong am la diem KPI dat duoc (0 <= kpi_score <= 100).
    - weight: so nguyen duong la he so trong so phong ban (1 <= weight <= 10).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so tien thuong thuc nhan sau khi da cat bo phan thap phan.

    VI DU:
    - salary = 1017, kpi_score = 55, weight = 1 -> return 55

    GIAI THICH VI DU:
    - Tien thuong chua cat le: 1017 * (55 * 1 / 1000) = 1017 * 0.055 = 55.935.
    - Cat bo phan thap phan (khong lam tron len 56) -> return 55.
    """
    raw_bonus = salary * (kpi_score * weight / 1000)
    return round(raw_bonus)


# ---------------------------------------------------------------- Bai 5.06
def solution_506(scores):
    """
    DE BAI:
    Ban to chuc can chuan hoa danh sach diem so scores cua cac thi sinh bang cach lay
    moi diem so tru di diem so cua thi sinh dau tien scores[0].
    Yeu cau quan trong: Ham phai tra ve mot danh sach diem moi da duoc chuan hoa va
    TUYET DOI KHONG duoc lam thay doi du lieu cua danh sach scores ban dau truyen vao.

    GIAI THICH THAM SO:
    - scores: list cac so nguyen la diem cua cac thi sinh, do dai tu 1 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list moi chua cac diem so da duoc tru di gia tri scores[0] goc.

    VI DU:
    - scores = [10, 25, 30] -> return [0, 15, 20]

    GIAI THICH VI DU:
    - Diem moc scores[0] = 10.
    - Phan tu 0: 10 - 10 = 0.
    - Phan tu 1: 25 - 10 = 15.
    - Phan tu 2: 30 - 10 = 20.
    - Ket qua tra ve: [0, 15, 20].
    """
    res = scores
    for i in range(len(res)):
        res[i] = res[i] - scores[0]
    return res


# ---------------------------------------------------------------- Bai 5.07
def solution_507(students):
    """
    DE BAI:
    Hoi dong tuyen sinh can xep hang cac thi sinh theo quy tac uu tien sau:
    1. Thi sinh co diem thi (score) CAO HON duoc xep truoc (giam dan theo diem).
    2. Neu co cung diem thi, thi sinh co ma dinh danh (id) NHO HON theo thu tu tu dien
       se duoc xep truoc (tang dan theo ma id).
    Hay tra ve danh sach ma id cua cac thi sinh sau khi da sap xep dung thu tu.

    GIAI THICH THAM SO:
    - students: list cac tuple hoac list co 2 phan tu [id, score], trong do:
      + id: chuoi ky tu (str) dai dien cho ma thi sinh.
      + score: so nguyen (int) dai dien cho diem thi (0 <= score <= 100).
      So luong thi sinh tu 1 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac chuoi (list str) la danh sach id cua cac thi sinh da sap xep.

    VI DU:
    - students = [("B", 85), ("A", 90), ("C", 85)] -> return ["A", "B", "C"]

    GIAI THICH VI DU:
    - Thi sinh "A" co 90 diem (cao nhat) -> xep thu 1.
    - Thi sinh "B" va "C" deu co 85 diem, nhung ma "B" < "C" theo thu tu tu dien -> "B" xep truoc "C".
    - Ket qua tra ve: ["A", "B", "C"].
    """
    sorted_students = sorted(students, key=lambda s: (s[1], s[0]))
    return [s[0] for s in sorted_students]


# ---------------------------------------------------------------- Bai 5.08
def solution_508(readings):
    """
    DE BAI:
    Mot tram khi tuong ghi nhan danh sach nhiet do readings (don vi do C) tai cac thoi diem
    trong ngay. Danh sach co the bao gom ca nhiet do duong, am hoac bang 0.
    Hay tim va tra ve muc nhiet do thap nhat trong ngay.

    GIAI THICH THAM SO:
    - readings: list cac so nguyen dai dien cho nhiet do do duoc, do dai tu 1 den 1000.
      Gia tri tung phan tu trong khoang tu -100 den 100.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la nhiet do thap nhat trong readings.

    VI DU:
    - readings = [12, 18, 5, 22, 9] -> return 5
    - readings = [-3, -7, -1] -> return -7

    GIAI THICH VI DU:
    - O vi du 1, tat ca nhiet do deu duong, gia tri nho nhat la 5.
    - O vi du 2, tat ca nhiet do deu am, gia tri nho nhat la -7.
    """
    min_temp = 0
    for r in readings:
        if r < min_temp:
            min_temp = r
    return min_temp


# ---------------------------------------------------------------- Bai 5.09
def solution_509(items, target):
    """
    DE BAI:
    Mot he thong kiem tra kho hang can xac dinh xem trong danh sach ma hang items
    co ton tai it nhat mot ma hang chia het cho target hay khong.
    Neu co it nhat mot ma thoa man, tra ve True; neu da duyet het danh sach ma khong co
    ma nao chia het cho target, tra ve False.

    GIAI THICH THAM SO:
    - items: list cac so nguyen duong la ma cac mat hang, do dai tu 1 den 1000.
    - target: so nguyen duong la so can kiem tra phep chia het (1 <= target <= 1000).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu co phan tu chia het cho target, nguoc lai False).

    VI DU:
    - items = [7, 11, 15, 22], target = 5 -> return True
    - items = [3, 7, 11], target = 2 -> return False

    GIAI THICH VI DU:
    - Vi du 1: Phan tu 15 chia het cho 5 -> return True.
    - Vi du 2: Khong co phan tu nao trong [3, 7, 11] chia het cho 2 -> return False.
    """
    found = False
    for x in items:
        if x % target == 0:
            found = True
        break
    return found


# ---------------------------------------------------------------- Bai 5.10
def solution_510(matrix, target):
    """
    DE BAI:
    Trong mot kho chua hang hoa 2D duoc bieu dien boi ma tran matrix kich thuoc R x C,
    moi o chua mot ma hang la so nguyen.
    Hay tim toa do hang va cot (row, col) dau tien cua o chua ma hang target theo thu tu
    quet tu tren xuong duoi, tu trai sang phai.
    Neu khong tim thay target trong ma tran, tra ve (-1, -1).

    GIAI THICH THAM SO:
    - matrix: mang 2 chieu (list cac list int) kich thuoc R x C (1 <= R, C <= 100).
    - target: so nguyen la ma hang can tim.

    GIAI THICH GIA TRI RETURN:
    - Tra ve tuple 2 so nguyen (row, col) la chi so 0-indexed cua vi tri tim thay dau tien,
      hoac (-1, -1) neu khong ton tai.

    VI DU:
    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 2 -> return (0, 1)

    GIAI THICH VI DU:
    - So 2 nam o hang 0, cot 1 -> tra ve (0, 1).
    """
    target_r, target_c = -1, -1
    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            if matrix[r][c] == target:
                target_c = c
                break
    if target_c != -1:
        return (r, target_c)
    return (-1, -1)


# ---------------------------------------------------------------- Bai 5.11
def solution_511(scores):
    """
    DE BAI:
    Ban to chuc cuoc thi can tim diem so cao thu nhi (phan tu lon thu 2 phan biet)
    trong danh sach diem thi scores.
    Neu danh sach co it hon 2 gia tri phan biet (vi du: danh sach rong, danh sach chi co
    1 phan tu, hoac tat ca cac phan tu deu bang nhau), ham phai tra ve None.

    GIAI THICH THAM SO:
    - scores: list cac so nguyen dai dien cho diem so, do dai tu 0 den 1000.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la diem so lon thu 2 phan biet, hoac None neu khong co.

    VI DU:
    - scores = [10, 20, 30, 20, 30] -> return 20
    - scores = [5, 5, 5] -> return None
    - scores = [] -> return None

    GIAI THICH VI DU:
    - Vi du 1: Tap cac diem phan biet la {10, 20, 30}. Diem cao thu nhi la 20.
    - Vi du 2: Chi co 1 gia tri phan biet la 5 -> tra ve None.
    - Vi du 3: Danh sach rong -> tra ve None.
    """
    unique_scores = sorted(list(set(scores)))
    return unique_scores[-2]


# ---------------------------------------------------------------- Bai 5.12
def solution_512(batches):
    """
    DE BAI:
    Mot he thong tiep nhan du lieu theo tung lo (batches). Moi lo la mot danh sach chua
    cac ma dinh danh kien hang.
    Hay gop tat ca cac kien hang tu cac lo thanh mot danh sach phang duy nhat theo dung
    thu tu tiep nhan ban dau.

    GIAI THICH THAM SO:
    - batches: list cac list (danh sach 2 chieu), moi phan tu la mot list chua cac ma (int hoac str).
      Do dai batches tu 0 den 100.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list 1 chieu chua tat ca cac phan tu da duoc lam phang (flatten).

    VI DU:
    - batches = [[101, 102], [201], [301, 302, 303]]
      -> return [101, 102, 201, 301, 302, 303]

    GIAI THICH VI DU:
    - Gop cac lo [101, 102], [201], [301, 302, 303] lan luot vao danh sach chung.
    """
    merged = []
    for batch in batches:
        merged.append(batch)
    return merged


# ---------------------------------------------------------------- Bai 5.13
def solution_513(code, target_length):
    """
    DE BAI:
    He thong xac thuc ma khuyen mai kiem tra tinh hop le cua chuoi ma code theo quy tac:
    1. Ma phai bat dau bang tien to "VIP" HOAC tien to "MEMBER".
    2. VA tong do dai cua chuoi ma code phai dung bang target_length.
    Neu thoa man ca 2 dieu kien tren, tra ve True; nguoc lai tra ve False.

    GIAI THICH THAM SO:
    - code: chuoi ky tu (str) can kiem tra, do dai tu 0 den 100.
    - target_length: so nguyen duong la do dai tieu chuan yeu cau (1 <= target_length <= 100).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu ma hop le, False neu khong hop le).

    VI DU:
    - code = "VIP2026", target_length = 7 -> return True
    - code = "MEMBER88", target_length = 8 -> return True
    - code = "GUEST123", target_length = 8 -> return False

    GIAI THICH VI DU:
    - "VIP2026" bat dau bang "VIP" va co 7 ky tu == 7 -> True.
    - "MEMBER88" bat dau bang "MEMBER" va co 8 ky tu == 8 -> True.
    - "GUEST123" khong bat dau bang "VIP" hay "MEMBER" -> False.
    """
    is_valid_prefix = code.startswith("VIP") and code.startswith("MEMBER")
    is_valid_len = len(code) == target_length
    return is_valid_prefix and is_valid_len


# ---------------------------------------------------------------- Bai 5.14
def solution_514(catalog, target_price):
    """
    DE BAI:
    Mot ung dung ban hang can kiem tra xem trong bang gia catalog (luu duoi dang dictionary
    anh xa giua ten san pham va gia tien) co ton tai san pham nao co muc gia dung bang
    target_price hay khong.
    Neu co it nhat mot san pham co muc gia do, tra ve True; nguoc lai tra ve False.

    GIAI THICH THAM SO:
    - catalog: dict anh xa ten_san_pham (str) -> gia_tien (int >= 0). So luong tu 0 den 1000.
    - target_price: so nguyen la muc gia can tim kiem (target_price >= 0).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu co san pham mang gia target_price, False neu khong).

    VI DU:
    - catalog = {"ao_thun": 150000, "quan_jean": 350000, "non": 150000}, target_price = 350000
      -> return True
    - catalog = {"ao_thun": 150000, "quan_jean": 350000, "non": 150000}, target_price = 200000
      -> return False

    GIAI THICH VI DU:
    - O vi du 1, "quan_jean" co gia 350000 -> ton tai san pham thoa man -> True.
    - O vi du 2, khong co san pham nao mang gia 200000 -> False.
    """
    return target_price in catalog


# ---------------------------------------------------------------- Bai 5.15
def solution_515(transactions, limit):
    """
    DE BAI:
    He thong kiem toan ngan hang kiem tra tinh hop le cua mot chuoi cac giao dich trong ngay
    transactions. Danh sach giao dich duoc coi la hop le (True) neu TAT CA cac giao dich
    deu la so duong va khong vuot qua han muc cho phep limit (tuc la: 0 < tx <= limit).
    Neu co bat ky giao dich nao <= 0 hoac > limit, tra ve False.
    Neu danh sach transactions rong, tra ve True.

    GIAI THICH THAM SO:
    - transactions: list cac so nguyen dai dien cho gia tri tung giao dich, do dai tu 0 den 1000.
    - limit: so nguyen duong la han muc giao dich toi da cho phep (1 <= limit <= 1000000000).

    GIAI THICH GIA TRI RETURN:
    - Tra ve bool (True neu tat ca giao dich hop le, False neu co it nhat mot giao dich vi pham).

    VI DU:
    - transactions = [100, 250, 400], limit = 500 -> return True
    - transactions = [100, -50, 200], limit = 500 -> return False

    GIAI THICH VI DU:
    - Vi du 1: Tat ca giao dich 100, 250, 400 deu > 0 va <= 500 -> True.
    - Vi du 2: Giao dich -50 <= 0 (vi pham) -> False.
    """
    if not transactions:
        return True
    for tx in transactions:
        if 0 < tx <= limit:
            return True
        else:
            return False
