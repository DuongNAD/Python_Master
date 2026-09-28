# -*- coding: utf-8 -*-
"""
DAP AN DE MO PHONG 6 - LUYEN TAP BANG B (COS Pro Level 2).
Tong diem: 1000 diem | 10 cau:
  - Phan 1: Dien cho trong (Q1-Q6, 440 diem)
  - Phan 2: Sua loi Debug (Q7-Q8, 180 diem)
  - Phan 3: Thiet ke tu dau (Q9-Q10, 380 diem)
"""


# ==============================================================================
# PHAN 1: DIEN CHO TRONG (Q1 - Q6, 440 DIEM)
# ==============================================================================

def solution_01(arr, target):
    """
    Q01 [Dien cho trong] - (74 diem)
    Ten bai: Hai con tro tim cap chi so co tong bang Target tren mang da sap xep.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho mot mang so nguyen arr da duoc sap xep tang dan va mot so nguyen target.
       - Tim hai chi so khac nhau [left, right] (voi left < right) sao cho tong
         arr[left] + arr[right] dung bang target.
       - Neu khong ton tai cap nao thoa man hoac mang co it hon 2 phan tu, tra ve list rong [].

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + arr: list[int], mang so nguyen da sap xep tang dan (0 <= len(arr) <= 10^5).
         + target: int, gia tri tong can tim.
       - Gia tri tra ve:
         + list[int]: [left, right] chua 2 chi so (0-indexed) hoac [] neu khong tim thay.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Su dung ky thuat Hai con tro (Two Pointers):
         + Buoc 1: Dat con tro `left = 0` (dau mang) va `right = len(arr) - 1` (cuoi mang).
         + Buoc 2: Vong lap trong khi `left < right`:
           * Tinh tong hien tai `s = arr[left] + arr[right]`.
           * Neu `s == target`: Da tim thay cap chi so, tra ve ngay `[left, right]`.
           * Neu `s < target`: Tong dang nho hon muc tieu, vi mang da sap xep nen can
             tang tong bang cach dich con tro trai sang phai (`left += 1`).
           * Neu `s > target`: Tong dang lon hon muc tieu, can giam tong bang cach
             dich con tro phai sang trai (`right -= 1`).
         + Buoc 3: Neu hai con tro gap nhau ma chua tim thay, tra ve `[]`.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay mang chua du 2 phan tu: Truong hop mang rong `[]` hoac chi co 1 phan tu `[5]`.
         Dieu kien `left < right` tu dong xu ly dung ma khong bi loi IndexError.
       - Bay chi so trung nhau: Khong duoc lay cung mot phan tu hai lan (tuc khong de `left == right`).
       - Vi tri dien khuyet: Thuong khuyet dieu kien vong lap `left < right` va 2 buoc
         dich chuyen `left += 1`, `right -= 1`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(N) vi moi buoc it nhat mot con tro di chuyen 1 don vi.
       - Do phuc tap khong gian: O(1), khong dung them bo nho phu.
       - Luu y phong thi: Kiem tra can than mang da sap xep chua. Neu de chua sap xep,
         phai dung Hash Map hoac sap xep lai truoc.

    6. VÍ DỤ:
       - arr = [2, 7, 11, 15], target = 9 -> return [0, 1] (vi arr[0] + arr[1] = 2 + 7 = 9).
       - arr = [1, 2, 3, 4], target = 20 -> return [] (khong co cap nao co tong = 20).
    """
    left = 0
    right = len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []


def solution_02(n):
    """
    Q02 [Dien cho trong] - (74 diem)
    Ten bai: Dao nguoc so nguyen N, cong voi N ban dau va kiem tra so doi xung (Palindrome).

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho mot so nguyen duong n.
       - Dao nguoc cac chu so cua n de thu duoc n_rev (chu y xu ly chu so 0 o tan cung neu co).
       - Tinh tong S = n + n_rev.
       - Kiem tra xem S co phai la so doi xung (Palindrome - doc tu trai qua phai hay tu
         phai qua trai deu giong nhau) hay khong. Tra ve True neu doi xung, nguoc lai False.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + n: int, so nguyen duong (1 <= n <= 10^9).
       - Gia tri tra ve:
         + bool: True neu tong S la so doi xung, False neu khong doi xung.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Chuyen so n thanh chuoi, dung cu phap cat chuoi `[::-1]` de dao nguoc,
         sau do ep ve kieu int de duoc `n_rev = int(str(n)[::-1])`.
         Viec ep ve int giup loai bo cac so 0 o dau (vi du: 1200 dao thanh "0021" -> int la 21).
       - Buoc 2: Tinh tong `total = n + n_rev`.
       - Buoc 3: Chuyen `total` thanh chuoi `s = str(total)` va so sanh `s == s[::-1]`.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay so 0 tan cung: Vi du n = 1200, so dao nguoc theo toan hoc la 21 (khong phai 0021).
         Tong la 1200 + 21 = 1221, chuoi "1221" doi xung -> ket qua True. Neu khong ep int
         ma de chuoi cong chuoi se ra ket qua hoan toan sai.
       - Bay so co 1 chu so: Vi du n = 4 -> 4 + 4 = 8, 8 doc xuoi nguoc deu la 8 -> True.
       - Vi tri dien khuyet: Thuong o dong dao nguoc so `int(str(n)[::-1])` va phep kiem tra `s == s[::-1]`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(log10(N)) tuong duong so chu so cua N, rat nho (< 20 thao tac).
       - Do phuc tap khong gian: O(log10(N)) de luu chuoi tam.

    6. VÍ DỤ:
       - n = 73 -> n_rev = 37 -> total = 110 ("110" != "011") -> return False.
       - n = 121 -> n_rev = 121 -> total = 242 ("242" == "242") -> return True.
       - n = 1200 -> n_rev = 21 -> total = 1221 -> return True.
    """
    n_rev = int(str(n)[::-1])
    total = n + n_rev
    s = str(total)
    return s == s[::-1]


def solution_03(s, k):
    """
    Q03 [Dien cho trong] - (73 diem)
    Ten bai: Ma hoa mat ma Caesar dich chuyen vong tron k buoc.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho chuoi van ban s va so nguyen k dai dien cho so buoc dich chuyen.
       - Thuc hien ma hoa Caesar tren chuoi s:
         + Moi chu cai in thuong ('a' - 'z') duoc dich chuyen k vi tri theo vong tron trong bang ma thuong.
         + Moi chu cai in hoa ('A' - 'Z') duoc dich chuyen k vi tri theo vong tron trong bang ma hoa.
         + Cac ky tu khong phai chu cai (so, dau cach, dau cau,...) duoc giu nguyen.
       - Tra ve chuoi van ban sau khi da ma hoa.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + s: str, chuoi van ban goc (0 <= len(s) <= 10^5).
         + k: int, so buoc dich chuyen (k >= 0).
       - Gia tri tra ve:
         + str: chuoi van ban sau khi ma hoa.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Khoi tao list chua cac ky tu ket qua `res = []`.
       - Buoc 2: Duyet tung ky tu c trong chuoi s:
         + Neu 'a' <= c <= 'z':
           Dich theo cong thuc: `chr((ord(c) - ord('a') + k) % 26 + ord('a'))` (hoac dung ma ASCII 97).
         + Neu 'A' <= c <= 'Z':
           Dich theo cong thuc: `chr((ord(c) - ord('A') + k) % 26 + ord('A'))` (hoac dung ma ASCII 65).
         + Nguoc lai: Giu nguyen ky tu c.
       - Buoc 3: Noi cac ky tu lai bang `"".join(res)`.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay buoc dich k lon hon 26: Neu k = 28, can phep chia du `% 26` de tro ve buoc dich tuong duong (28 % 26 = 2).
       - Bay tran bang chu cai: Khi dich ky tu gan cuoi nhu 'z' + 3 -> phai vong lai 'c', khong duoc de vuot ma ASCII.
       - Bay kieu chu: Tuyet doi khong dung chung bang ma cho chu hoa va chu thuong vi ma ASCII giua 'Z' (90) va 'a' (97) co chua cac dau ngoac va gach duoi.
       - Vi tri dien khuyet: Cong thuc bien doi ASCII modulo 26 cho chu thuong/chu hoa va `"".join(res)`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(len(s)) vi duyet qua chuoi 1 lan.
       - Do phuc tap khong gian: O(len(s)) de luu mang ky tu ket qua.

    6. VÍ DỤ:
       - s = "Hello, World!", k = 3 -> return "Khoor, Zruog!"
       - s = "xyz", k = 3 -> return "abc"
       - s = "Python 3.10", k = 0 -> return "Python 3.10"
    """
    res = []
    for c in s:
        if 'a' <= c <= 'z':
            res.append(chr((ord(c) - 97 + k) % 26 + 97))
        elif 'A' <= c <= 'Z':
            res.append(chr((ord(c) - 65 + k) % 26 + 65))
        else:
            res.append(c)
    return "".join(res)


def solution_04(matrix):
    """
    Q04 [Dien cho trong] - (73 diem)
    Ten bai: Tinh tong cac phan tu nam tren vien ngoai ma tran 2D (Border Sum).

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho ma tran 2D matrix kich thuoc M x N chua cac so nguyen.
       - Tinh va tra ve tong cua tat ca cac phan tu nam tren duong vien ngoai cung
         (hang dau tien, hang cuoi cung, cot dau tien va cot cuoi cung).
       - Luu y: Khong duoc cong trung lap cac phan tu o 4 goc, va phai xu ly dung cac
         truong hop bien nhu ma tran 1 hang, 1 cot hoac rong.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + matrix: list[list[int]], ma tran 2 chieu chua cac so nguyen.
       - Gia tri tra ve:
         + int: tong cac phan tu tren duong vien ngoai. Neu ma tran rong, tra ve 0.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Kiem tra neu ma tran rong hoac hang rong, tra ve 0.
       - Buoc 2: Lay so hang `rows = len(matrix)` va so cot `cols = len(matrix[0])`.
       - Buoc 3: Xu ly truong hop dac biet:
         + Neu `rows == 1`: Toan bo phan tu nam tren vien -> tra ve `sum(matrix[0])`.
         + Neu `cols == 1`: Toan bo phan tu nam tren vien -> tra ve `sum(row[0] for row in matrix)`.
       - Buoc 4: Khi ca rows > 1 va cols > 1:
         + Cong tron ven hang dau: `sum(matrix[0])`.
         + Cong tron ven hang cuoi: `sum(matrix[-1])`.
         + Voi cac hang o giua (tu hang 1 den rows - 2): Cong them phan tu dau cot `matrix[r][0]`
           va phan tu cuoi cot `matrix[r][-1]`.
       - Buoc 5: Tra ve tong tich luy duoc.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay cong trung 4 goc: Neu duyet 4 canh doc lap se tinh 4 goc 2 lan moi goc.
       - Bay ma tran suy bien (1 hang hoac 1 cot): Hang dau va hang cuoi chinh la mot!
         Neu khong co dieu kien re nhanh se bi tinh gap doi toan bo ma tran.
       - Bay ma tran rong `[]`: Can kiem tra dau ham de tranh loi IndexError.
       - Vi tri dien khuyet: `sum(matrix[0])`, `sum(matrix[-1])`, va `matrix[r][0] + matrix[r][-1]`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(M + N), chi duyet qua cac phan tu vien ngoai.
       - Do phuc tap khong gian: O(1), chi su dung bien tong tich luy.

    6. VÍ DỤ:
       - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> vien gom 1,2,3, 7,8,9, 4, 6 -> tong = 40.
       - matrix = [[5]] -> return 5.
       - matrix = [[1, 2, 3, 4]] -> return 10.
    """
    if not matrix or not matrix[0]:
        return 0
    rows = len(matrix)
    cols = len(matrix[0])
    if rows == 1:
        return sum(matrix[0])
    if cols == 1:
        return sum(row[0] for row in matrix)

    total = sum(matrix[0]) + sum(matrix[-1])
    for r in range(1, rows - 1):
        total += matrix[r][0] + matrix[r][-1]
    return total


def solution_05(orders):
    """
    Q05 [Dien cho trong] - (73 diem)
    Ten bai: Thong ke doanh thu theo danh muc, loc don hang loi.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho danh sach cac don hang, moi don la mot dict: `{"dm": str, "sl": int, "gia": int}`.
       - Loai bo cac don hang khong hop le: co so luong `sl <= 0` hoac don gia `gia < 0`.
         (Don gia `gia == 0` va `sl > 0` van la don hop le voi doanh thu = 0).
       - Tinh tong doanh thu cho tung danh muc (`doanh_thu = sl * gia`).
       - Tra ve list cac tuple `(danh_muc, tong_doanh_thu)` sap xep theo quy tac:
         1. Doanh thu GIAM DAN.
         2. Neu doanh thu bang nhau, sap xep theo ten danh muc TANG DAN theo thu tu tu dien (A-Z).
       - Neu khong co don hop le nao, tra ve list rong `[]`.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + orders: list[dict], danh sach cac don hang.
       - Gia tri tra ve:
         + list[tuple[str, int]]: danh sach tuple (danh_muc, tong_doanh_thu) da sap xep.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Khoi tao dict gom nhom doanh thu `rev = {}`.
       - Buoc 2: Duyet qua tung don hang d trong orders:
         + Kiem tra dieu kien loc: `if d["sl"] <= 0 or d["gia"] < 0: continue`.
         + Lay ten danh muc `dm = d["dm"]`.
         + Tich luy doanh thu: `rev[dm] = rev.get(dm, 0) + d["sl"] * d["gia"]`.
       - Buoc 3: Sap xep cac cap danh muc bang tieu chi kep:
         `sorted(rev.items(), key=lambda p: (-p[1], p[0]))`.
         Trong do `-p[1]` giup doanh thu sap giam dan, `p[0]` giup ten danh muc sap tang dan.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay dieu kien loc: Don hang co `gia == 0` (hang mien phi) van hop le vi khong phai `gia < 0`.
         Phai dung `or` giua hai dieu kien loi (`sl <= 0 or gia < 0`).
       - Bay sap xep tieu chi kep: Nguoi thi thuong quen dau tru `-` truoc doanh thu hoac
         quen sap xep thu tu tu dien ten danh muc.
       - Vi tri dien khuyet: Dieu kien loc don loi, dong cong don vao dict, va ham sorted voi key lambda.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(N + K log K) voi N la so don hang va K la so danh muc phan biet.
       - Do phuc tap khong gian: O(K) de luu bang bam doanh thu.

    6. VÍ DỤ:
       - orders = [{"dm": "dien_tu", "sl": 2, "gia": 1000}, {"dm": "thoi_trang", "sl": 5, "gia": 200},
                   {"dm": "dien_tu", "sl": 1, "gia": 500}, {"dm": "sach", "sl": 3, "gia": 100}]
         -> return [("dien_tu", 2500), ("thoi_trang", 1000), ("sach", 300)]
    """
    rev = {}
    for d in orders:
        if d["sl"] <= 0 or d["gia"] < 0:
            continue
        dm = d["dm"]
        rev[dm] = rev.get(dm, 0) + d["sl"] * d["gia"]
    return sorted(rev.items(), key=lambda p: (-p[1], p[0]))


def solution_06(votes):
    """
    Q06 [Dien cho trong] - (73 diem)
    Ten bai: Tim ung vien chiem so phieu qua ban (Majority Element).

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho danh sach votes chua ma dinh danh ung vien (so nguyen) ma moi cu tri da bau.
       - Tim ung vien chiem da so tuyet doi, tuc la co so phieu bau LON HON mot nua tong
         so phieu bau (`so_phieu > len(votes) // 2`).
       - Neu khong co ung vien nao dat duoc da so tuyet doi hoac danh sach rong, tra ve -1.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + votes: list[int], danh sach cac phieu bau cua cu tri (0 <= len(votes) <= 10^5).
       - Gia tri tra ve:
         + int: ma dinh danh cua ung vien thang cu hoac -1 neu khong ai chiem qua ban.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Kiem tra neu `votes` rong, tra ve -1 ngay lap tuc.
       - Buoc 2: Tinh nguong qua ban: `threshold = len(votes) // 2`.
       - Buoc 3: Dung dictionary `counts` de dem so phieu cua tung ung vien:
         Duyet qua tung phieu v trong votes: `counts[v] = counts.get(v, 0) + 1`.
       - Buoc 4: Duyet qua cac cap (candidate, count) trong counts.items():
         Neu `count > threshold`: tra ve ngay candidate.
       - Buoc 5: Neu duyet het ma khong co ai dat nguong, tra ve -1.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay so sanh nguong: Nguong phai la LON HON (`>`), khong phai lon hon hoac bang (`>=`).
         Vi du voi 4 phieu: nguong la 4 // 2 = 2. Ung vien co dung 2 phieu thi chua qua ban (chi dat 50%).
       - Bay danh sach rong `[]`: Can tra ve -1.
       - Bay danh sach 1 phan tu `[7]`: len(votes) // 2 = 0, ung vien 7 co 1 phieu > 0 -> tra ve 7 dung.
       - Vi tri dien khuyet: Tinh threshold `len(votes) // 2`, dem phieu vao dict, va so sanh `count > threshold`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(N) vi duyet mang votes va dictionary counts.
       - Do phuc tap khong gian: O(U) voi U la so ung vien khac nhau.

    6. VÍ DỤ:
       - votes = [1, 2, 1, 1, 3, 1, 1] -> tong 7 phieu, 1 duoc 5 phieu > 3 -> return 1.
       - votes = [1, 1, 2, 2] -> tong 4 phieu, ca hai deu 2 phieu khong ai > 2 -> return -1.
    """
    if not votes:
        return -1
    threshold = len(votes) // 2
    counts = {}
    for v in votes:
        counts[v] = counts.get(v, 0) + 1
    for candidate, count in counts.items():
        if count > threshold:
            return candidate
    return -1


# ==============================================================================
# PHAN 2: SUA LOI DEBUGGING (Q7 - Q8, 180 DIEM)
# ==============================================================================

def solution_07(matrix):
    """
    Q07 [Sua loi Debug] - (90 diem)
    Ten bai: Tim toa do phan tu nho nhat tren ma tran chu nhat.
    LOI GOC: Vong lap quet cot dung len(matrix) (so hang) thay vi len(matrix[r]) (so cot).

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho ma tran so nguyen matrix co kich thuoc bat ky M x N (M, N >= 1).
       - Tim va tra ve toa do hang va cot `(r, c)` cua phan tu co gia tri nho nhat.
       - Neu co nhieu phan tu cung dat gia tri nho nhat, chon vi tri xuat hien dau tien
         theo thu tu duyet tu tren xuong duoi, tu trai sang phai.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + matrix: list[list[int]], ma tran 2 chieu khong rong.
       - Gia tri tra ve:
         + tuple[int, int]: (hang_min, cot_min).

    3. Ý TƯỞNG THUẬT TOÁN:
       - Khoi tao `min_val = matrix[0][0]` va `min_pos = (0, 0)`.
       - Duyet hang r tu 0 den len(matrix) - 1:
         + Duyet cot c tu 0 den len(matrix[r]) - 1:
           * Neu matrix[r][c] < min_val:
             Cap nhat min_val = matrix[r][c] va min_pos = (r, c).
       - Tra ve min_pos.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay ma tran chu nhat khong vuong (M != N):
         Trong doan code ban dau, vong lap cot duoc viet la `for c in range(len(matrix)):`.
         Khi so cot lon hon so hang (vi du ma tran 2 x 4), `len(matrix) = 2`, vong lap c chi
         chay 0 va 1, bo qua hoan toan cac cot 2 va 3!
         Nguoc lai khi so hang lon hon so cot, se gap loi IndexError vuot chi so cot.
       - Sua dung 1 dong:
         Sua `for c in range(len(matrix)):` thanh `for c in range(len(matrix[r])):`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(M * N), duyet toan bo cac o trong ma tran 1 lan.
       - Do phuc tap khong gian: O(1).

    6. VÍ DỤ:
       - matrix = [[10, 20, 30, 5], [40, 50, 60, 70]] -> return (0, 3) vi 5 la nho nhat o hang 0, cot 3.
       - matrix = [[10, 20], [30, 40], [5, 50]] -> return (2, 0).
    """
    min_val = matrix[0][0]
    min_pos = (0, 0)
    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            if matrix[r][c] < min_val:
                min_val = matrix[r][c]
                min_pos = (r, c)
    return min_pos


def solution_08(nums, k):
    """
    Q08 [Sua loi Debug] - (90 diem)
    Ten bai: Dem so cap phan tu co hieu dung bang K.
    LOI GOC: Lenh return count bi thut le ben trong vong lap for, lam ham dung som o phan tu dau tien.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho danh sach cac so nguyen phan biet nums va mot so nguyen duong k.
       - Hay dem so luong cap so (a, b) trong nums sao cho a - b = k (tuong duong x + k co trong nums).
       - Tra ve so nguyen la so cap tim duoc.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + nums: list[int], danh sach cac so nguyen.
         + k: int, hieu so can xet (k > 0).
       - Gia tri tra ve:
         + int: so luong cap so thoa man hieu bang k.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Chuyen doi nums thanh tap hop `num_set = set(nums)` de tra cuu phan tu trong thoi gian O(1).
       - Khoi tao bien dem `count = 0`.
       - Duyet tung phan tu x trong nums:
         + Neu `x + k in num_set`: Tang bien dem `count += 1`.
       - Sau khi ket thuc vong lap, tra ve `count`.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay thut le return som (Early Return Bug):
         Trong code loi, lenh `return count` bi dat cung cap thut le voi `if` hoac ben trong `for`,
         khien chuong trinh vua xet xong phan tu x dau tien da lap tuc return gia tri 0 hoac 1 ma
         khong he xet tiep cac phan tu con lai cua danh sach.
       - Sua dung 1 dong:
         Xoa bo lenh return som ben trong vong lap, chi giu lai lenh `return count` o cuoi ham
         (dung cap thut le voi vong lap for).

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(N) nho tra cuu tap hop O(1).
       - Do phuc tap khong gian: O(N) de luu tru set(nums).

    6. VÍ DỤ:
       - nums = [1, 5, 3, 4, 2], k = 2 -> Cac cap la (1,3), (2,4), (3,5) -> return 3.
       - nums = [1, 3, 5], k = 1 -> Khong co cap nao co hieu bang 1 -> return 0.
    """
    num_set = set(nums)
    count = 0
    for x in nums:
        if x + k in num_set:
            count += 1
    return count


# ==============================================================================
# PHAN 3: THIET KE TU DAU (Q9 - Q10, 380 DIEM)
# ==============================================================================

def solution_09(commands, obstacles):
    """
    Q09 [Thiet ke tu dau] - (190 diem)
    Ten bai: Mo phong chuyen dong Robot tranh chuong ngai vat va tinh khoang cach Manhattan.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Mot Robot khoi hanh tai goc toa do (0, 0) tren mat phang 2D, ban dau huong ve phia Bac.
       - Robot nhan mot chuoi lenh dieu khien commands gom cac ky tu:
         + 'F' (Forward): Tien 1 buoc ve phia truoc theo huong dang nhin.
         + 'B' (Back): Quay 180 do (quay lui ve huong doi dien).
         + 'L' (Left): Quay trai 90 do tai cho.
         + 'R' (Right): Quay phai 90 do tai cho.
       - obstacles la danh sach cac toa do vat can `[x, y]`.
         Truoc khi buoc toi o moi (khi thuc hien 'F'), neu o do co vat can thi Robot KHONG di chuyen
         ma dung yen tai cho va tiep tuc xu ly lenh ke tiep.
       - Ket qua tra ve: Khoang cach Manhattan tu vi tri cuoi cung (x, y) ve goc toa do (0, 0):
         `|x| + |y|`.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + commands: str, chuoi ky tu cac lenh dieu khien ('F', 'B', 'L', 'R').
         + obstacles: list[list[int]], danh sach toa do cac chuong ngai vat.
       - Gia tri tra ve:
         + int: khoang cach Manhattan |x| + |y| tu vi tri ket thuc ve (0, 0).

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Chuyen obstacles thanh tap hop tuple de tra cuu nhanh O(1):
         `obs_set = set(tuple(o) for o in obstacles)`.
       - Buoc 2: Dinh nghia 4 huong di theo thu tu chieu kim dong ho:
         0: Bac (0, 1), 1: Dong (1, 0), 2: Nam (0, -1), 3: Tay (-1, 0).
         Khoi tao vi tri `x = 0, y = 0` va huong `dir_idx = 0`.
       - Buoc 3: Duyet tung lenh cmd trong commands:
         + Neu cmd == 'L': `dir_idx = (dir_idx - 1) % 4`.
         + Neu cmd == 'R': `dir_idx = (dir_idx + 1) % 4`.
         + Neu cmd == 'B': `dir_idx = (dir_idx + 2) % 4`.
         + Neu cmd == 'F':
           Tinh toa do du kien: `nx = x + dx, ny = y + dy`.
           Neu `(nx, ny) not in obs_set`: Cap nhat `x, y = nx, ny`.
       - Buoc 4: Tra ve `abs(x) + abs(y)`.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay tra cuu vat can O(N) tren list: Neu dung `[nx, ny] in obstacles` se bi cham khi
         co nhieu vat can. Bat buoc ep ve `set(tuple(...))` de dat O(1).
       - Bay xu ly vat can: Khi gap vat can, chi huy buoc di hien tai, KHONG dung toan bo chuong trinh.
       - Bay huong quay: Quay trai la tru 1 mod 4, quay phai la cong 1 mod 4, quay nguoc 180 do la cong 2 mod 4.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(len(commands) + len(obstacles)).
       - Do phuc tap khong gian: O(len(obstacles)) de luu set chuong ngai vat.

    6. VÍ DỤ:
       - commands = "FFRFF", obstacles = [] -> (2, 2) -> return 4.
       - commands = "FFRFF", obstacles = [[2, 2]] -> buoc cuoi bi can, o lai (1, 2) -> return 3.
       - commands = "FFBFF", obstacles = [] -> tien 2 buoc, quay nguoc 180 do, tien 2 buoc ve lai (0, 0) -> return 0.
    """
    obs_set = set(tuple(o) for o in obstacles)
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Bac, Dong, Nam, Tay
    dir_idx = 0
    x, y = 0, 0

    for cmd in commands:
        if cmd == 'L':
            dir_idx = (dir_idx - 1) % 4
        elif cmd == 'R':
            dir_idx = (dir_idx + 1) % 4
        elif cmd == 'B':
            dir_idx = (dir_idx + 2) % 4
        elif cmd == 'F':
            dx, dy = directions[dir_idx]
            nx, ny = x + dx, y + dy
            if (nx, ny) not in obs_set:
                x, y = nx, ny

    return abs(x) + abs(y)


def solution_10(matches):
    """
    Q10 [Thiet ke tu dau] - (190 diem)
    Ten bai: Bang xep hang giai dau bong da theo 4 tieu chi.

    1. ĐỀ BÀI TÓM TẮT & YÊU CẦU:
       - Cho danh sach cac tran dau bong da: `[{"doi_1": str, "doi_2": str, "ban_1": int, "ban_2": int}, ...]`.
       - Quy tac tinh diem cho tung tran:
         + Thang: +3 diem (doi co so ban thang nhieu hon).
         + Hoa: +1 diem cho moi doi (khi ban_1 == ban_2).
         + Thua: 0 diem.
       - Bang xep hang duoc sap xep dua tren 4 tieu chi uu tien lan luot:
         1. Tong diem GIAM DAN.
         2. Hieu so ban thang - thua (ban thang tru ban thua) GIAM DAN.
         3. Tong so ban thang ghi duoc GIAM DAN.
         4. Ten doi bong TANG DAN theo thu tu tu dien (A-Z).
       - Tra ve danh sach (list[str]) ten cac doi theo thu tu bang xep hang.
       - Neu khong co tran dau nao (matches rong), tra ve list rong `[]`.

    2. THAM SỐ VÀ GIÁ TRỊ TRẢ VỀ:
       - Tham so:
         + matches: list[dict], danh sach cac tran dau.
       - Gia tri tra ve:
         + list[str]: danh sach ten cac doi bong da sap xep dung thu tu bang xep hang.

    3. Ý TƯỞNG THUẬT TOÁN:
       - Buoc 1: Kiem tra neu matches rong, tra ve [].
       - Buoc 2: Khoi tao dict `teams = {}` de luu thong so cho tung doi:
         Moi doi gom `{"diem": 0, "hieu_so": 0, "ban_thang": 0}`.
       - Buoc 3: Duyet tung tran m trong matches:
         + Khoi tao du lieu cho doi_1 va doi_2 neu chua co trong teams.
         + Cap nhat so ban thang va hieu so:
           * doi_1: `ban_thang += ban_1`, `hieu_so += ban_1 - ban_2`.
           * doi_2: `ban_thang += ban_2`, `hieu_so += ban_2 - ban_1`.
         + Cap nhat diem theo ty so:
           * Neu ban_1 > ban_2: doi_1 nhan +3 diem.
           * Neu ban_2 > ban_1: doi_2 nhan +3 diem.
           * Neu ban_1 == ban_2: ca hai doi deu nhan +1 diem.
       - Buoc 4: Sap xep cac doi dua tren khoa sap xep da tieu chi:
         `sorted(teams.keys(), key=lambda t: (-teams[t]["diem"], -teams[t]["hieu_so"], -teams[t]["ban_thang"], t))`
       - Buoc 5: Tra ve danh sach ten doi da sap xep.

    4. BẪY COS PRO THƯỜNG GẶP:
       - Bay tran hoa: Khi hoa, ca 2 doi deu phai duoc cong 1 diem, tranh truong hop quen cong cho 1 doi.
       - Bay doi chi thi dau tran thua: Can dam bao doi thua van duoc dua vao bang xep hang voi 0 diem.
       - Bay thu tu sap xep: 3 tieu chi dau la GIAM DAN (can dau tru `-`), rieng ten doi la TANG DAN (khong co dau tru).
       - Bay danh sach rong: Tra ve `[]`.

    5. ĐỘ PHỨC TẠP & LƯU Ý:
       - Do phuc tap thoi gian: O(M + T log T) voi M la so tran dau va T la so doi bong.
       - Do phuc tap khong gian: O(T) de luu tru thong so cac doi.

    6. VÍ DỤ:
       - matches = [{"doi_1": "Chelsea", "doi_2": "Arsenal", "ban_1": 0, "ban_2": 0}]
         -> Ca 2 deu 1 diem, hieu so 0, ban thang 0 -> sap theo A-Z -> return ["Arsenal", "Chelsea"].
       - matches = [{"doi_1": "Real", "doi_2": "Barca", "ban_1": 3, "ban_2": 1}]
         -> Real 3 diem, Barca 0 diem -> return ["Real", "Barca"].
    """
    if not matches:
        return []

    teams = {}

    for m in matches:
        t1 = m["doi_1"]
        t2 = m["doi_2"]
        b1 = m["ban_1"]
        b2 = m["ban_2"]

        if t1 not in teams:
            teams[t1] = {"diem": 0, "hieu_so": 0, "ban_thang": 0}
        if t2 not in teams:
            teams[t2] = {"diem": 0, "hieu_so": 0, "ban_thang": 0}

        teams[t1]["ban_thang"] += b1
        teams[t1]["hieu_so"] += (b1 - b2)

        teams[t2]["ban_thang"] += b2
        teams[t2]["hieu_so"] += (b2 - b1)

        if b1 > b2:
            teams[t1]["diem"] += 3
        elif b2 > b1:
            teams[t2]["diem"] += 3
        else:
            teams[t1]["diem"] += 1
            teams[t2]["diem"] += 1

    ranked_teams = sorted(
        teams.keys(),
        key=lambda t: (
            -teams[t]["diem"],
            -teams[t]["hieu_so"],
            -teams[t]["ban_thang"],
            t
        )
    )
    return ranked_teams


# ==============================================================================
# KHOI THUC THI KIEM THU DOC LAP
# ==============================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de6", "DAP AN DE 6 - LUYEN TAP BANG B (COS Pro Level 2)")
