# -*- coding: utf-8 -*-
"""
DE MO PHONG 3 - VONG LOAI BANG B (COS Pro Level 2)
==========================================================================
  10 cau | 1000 diem | 50 PHUT | >= 600 diem = dat chung chi
  Doc hieu code  Q1-Q4   440 diem (110d/cau)
  Debugging      Q5-Q7   280 diem (93, 93, 94d)
  Design         Q8-Q10  280 diem (93, 93, 94d)

CACH LAM: bam gio 50 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python3 de_mo_phong/de_3_vong_loai.py
Dap an: dap_an/de_3_vong_loai_dapan.py
==========================================================================
"""


# ================= PHAN 1: DOC HIEU CODE (Q1-Q4, 440 diem) ================

def solution_01(arr, target):
    """
    DE BAI:
    Cho mot mang cac so nguyen arr da duoc sap xep theo thu tu tang dan va mot so nguyen target.
    Hay tim 2 phan tu o 2 vi tri khac nhau trong mang sao cho tong cua chung dung bang target.
    Tra ve list chua 2 chi so (0-indexed) [left, right] voi left < right.
    Neu khong ton tai cap phan tu nao thoa man, tra ve list rong [].
    (Ky thuat su dung: Hai con tro - Two pointers tren mang da sap xep).

    GIAI THICH THAM SO:
    - arr: list cac so nguyen da sap xep tang dan.
    - target: so nguyen can tim tong.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list 2 phan tu [left, right] hoac [].

    VI DU:
    - arr = [2, 7, 11, 15], target = 9 -> return [0, 1]
    - arr = [1, 3, 5], target = 10 -> return []

    GIAI THICH VI DU:
    - arr[0] + arr[1] = 2 + 7 = 9 dung bang target -> return [0, 1].
    """
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = ___1___
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left = ___2___
        else:
            right = ___3___
    return []


def solution_02(s):
    """
    DE BAI:
    Kiem tra tinh hop le cua chuoi dau ngoac s chua cac ky tu '(', ')', '{', '}', '[', ']'.
    Mot chuoi ngoac duoc goi la hop le neu:
    1. Cac dau ngoac mo phai duoc dong boi cung loai dau ngoac dong tuong ung.
    2. Cac dau ngoac mo phai duoc dong theo dung thu tu.
    3. Moi dau ngoac dong phai co dau ngoac mo tuong ung dung truoc do.
    Chuoi rong duoc coi la hop le (True).
    Tra ve True neu hop le, nguoc lai False.

    GIAI THICH THAM SO:
    - s: chuoi ky tu cac dau ngoac (str).

    GIAI THICH GIA TRI RETURN:
    - Tra ve True neu chuoi ngoac hop le, False neu khong.

    VI DU:
    - s = "()[]{}" -> return True
    - s = "([)]" -> return False

    GIAI THICH VI DU:
    - "([)]" mo ngoac tron truoc vuong nhung dong tron truoc vuong -> vi pham -> False.
    """
    pairs = {")": "(", "}": "{", "]": "["}
    stack = []
    for c in s:
        if c in pairs.values():
            stack.append(c)
        elif c in pairs:
            if not stack or ___1___:
                return False
            stack.pop()
        else:
            return False
    return ___2___


def solution_03(items, coupon):
    """
    DE BAI:
    Tinh so tien thuc te phai thanh toan sau khi ap dung ma giam gia (coupon).
    Danh sach items chua gia tien tung mat hang trong don hang.
    Dict coupon gom: {"type": "PERCENT" | "FIXED", "val": gia_tri, "min_spend": muc_toi_thieu, "max_discount": muc_giam_toi_da}.
    Quy tac:
    - Tong gia tri don hang = sum(items).
    - Neu sum(items) < min_spend: khong du dieu kien giam (giam = 0).
    - Neu type == "PERCENT": giam = sum(items) * val // 100. Neu max_discount > 0, giam khong vuot qua max_discount.
    - Neu type == "FIXED": giam = val.
    - So tien giam khong duoc vuot qua tong gia tri don hang.
    - So tien thanh toan = tong don hang - so tien giam.
    Tra ve so tien thanh toan (so nguyen int).

    GIAI THICH THAM SO:
    - items: list cac so nguyen >= 0.
    - coupon: dict chua thong tin ma giam gia.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) so tien can tra.

    VI DU:
    - items = [100000, 200000], coupon = {"type": "PERCENT", "val": 10, "min_spend": 200000, "max_discount": 50000}
      -> return 270000

    GIAI THICH VI DU:
    - Tong 300,000 >= 200,000. Giam 10% = 30,000 <= 50,000 -> thanh toan: 300,000 - 30,000 = 270,000 VND.
    """
    total = sum(items)
    if total < coupon.get("min_spend", 0):
        return total
    discount = 0
    if coupon.get("type") == "PERCENT":
        discount = total * coupon.get("val", 0) // 100
        max_d = coupon.get("max_discount", 0)
        if max_d > 0 and discount > max_d:
            discount = ___1___
    elif coupon.get("type") == "FIXED":
        discount = ___2___
    discount = min(discount, total)
    return ___3___


def solution_04(row_index):
    """
    DE BAI:
    Cho so nguyen khong am row_index, hay tao va tra ve dong thu row_index (0-indexed)
    cua Tam giac Pascal.
    Trong tam giac Pascal:
    - Dong 0: [1]
    - Dong 1: [1, 1]
    - Dong 2: [1, 2, 1]
    - Dong 3: [1, 3, 3, 1]
    - Dong 4: [1, 4, 6, 4, 1]

    GIAI THICH THAM SO:
    - row_index: so nguyen khong am (0 <= row_index <= 30).

    GIAI THICH GIA TRI RETURN:
    - List cac so nguyen la dong thu row_index cua tam giac Pascal.

    VI DU:
    - row_index = 3 -> return [1, 3, 3, 1]

    GIAI THICH VI DU:
    - Dong thu 3 cua tam giac Pascal co cac phan tu [1, 3, 3, 1].
    """
    row = [1]
    for _ in range(row_index):
        new_row = [1]
        for j in range(len(row) - 1):
            new_row.append(___1___)
        new_row.append(___2___)
        row = ___3___
    return row


# ================= PHAN 2: DEBUGGING (Q5-Q7, 280 diem) ====================
# Cac ham duoi day CO LOI LOGIC. Sua lai cho dung theo mo ta trong docstring.

def solution_05(time_str, add_minutes):
    """
    DE BAI:
    Cho chuoi thoi gian time_str dang "HH:MM" (dinh dang 24h, tu "00:00" den "23:59")
    va so phut can cong them add_minutes (so nguyen >= 0, co the vuot qua 1 ngay, vd 1500 phut).
    Hay tinh va tra ve thoi gian moi dang chuoi "HH:MM" sau khi da cong them add_minutes
    (gio va phut luon duoc dinh dang 2 chu so).

    GIAI THICH THAM SO:
    - time_str: chuoi thoi gian "HH:MM" (str).
    - add_minutes: so phut cong them (int >= 0).

    GIAI THICH GIA TRI RETURN:
    - Chuoi thoi gian moi "HH:MM" (str).

    VI DU:
    - time_str = "14:30", add_minutes = 45 -> return "15:15"
    - time_str = "23:50", add_minutes = 20 -> return "00:10"

    GIAI THICH VI DU:
    - 14:30 + 45 phut = 15:15.
    - 23:50 + 20 phut = 00:10 (sang ngay moi).
    """
    h, m = map(int, time_str.split(":"))
    new_h = (h + add_minutes // 60) % 24
    new_m = m + add_minutes % 60
    return f"{new_h:02d}:{new_m:02d}"


def solution_06(nums):
    """
    DE BAI:
    Tim tat ca cac phan tu cuc dai (Peak Elements) trong mang nums.
    Mot phan tu nums[i] duoc goi la cuc dai neu no LON HON HAN cac phan tu lien ke cua no:
    - Voi phan tu o dau mang (i = 0): chi can nums[0] > nums[1] (neu len > 1). Mang 1 phan tu thi phan tu do la cuc dai.
    - Voi phan tu o cuoi mang (i = n-1): chi can nums[n-1] > nums[n-2].
    - Voi phan tu o giua (0 < i < n-1): nums[i] > nums[i-1] va nums[i] > nums[i+1].
    Tra ve list chua cac CHI SO (indices 0-based) cua tat ca phan tu cuc dai theo thu tu tang dan.

    GIAI THICH THAM SO:
    - nums: list cac so nguyen.

    GIAI THICH GIA TRI RETURN:
    - List cac chi so nguyen cua cac phan tu cuc dai.

    VI DU:
    - nums = [1, 3, 2, 4, 1] -> return [1, 3]
    - nums = [5, 4, 3, 2, 1] -> return [0]

    GIAI THICH VI DU:
    - [1, 3, 2, 4, 1]: phan tu tai index 1 (gia tri 3 > 1 va 3 > 2) va tai index 3 (gia tri 4 > 2 va 4 > 1) -> [1, 3].
    """
    peaks = []
    for i in range(1, len(nums) - 1):
        if nums[i] > nums[i - 1] and nums[i] > nums[i + 1]:
            peaks.append(i)
    return peaks


def solution_07(inventory, requests):
    """
    DE BAI:
    Xu ly xuat kho theo lo voi co che giao dich hoan nguyen (Rollback transaction).
    Cho inventory la dict {ten_mat_hang: so_luong_ton_kho} va requests la list cac yeu cau [{"item": ten_mat_hang, "qty": so_luong}].
    Quy tac:
    - Tat ca cac yeu cau trong lo phai hop le (mat hang phai ton tai trong kho va so luong ton >= qty voi qty >= 0).
    - Neu TAT CA yeu cau deu duoc dap ung: thuc hien tru kho va tra ve dict inventory moi.
    - Neu CO IT NHAT MOT yeu cau khong the dap ung: HUY TOAN BO lo yeu cau, KHONG tru kho bat ky mat hang nao, tra ve ban sao cua inventory ban dau.
    QUAN TRONG: Dict inventory goc truyen vao KHONG duoc phep bi thay doi.

    GIAI THICH THAM SO:
    - inventory: dict {str: int} ton kho hien tai.
    - requests: list dict {"item": str, "qty": int}.

    GIAI THICH GIA TRI RETURN:
    - dict {str: int} ton kho sau khi xu ly.

    VI DU:
    - inventory = {"ao": 10, "quan": 5}, requests = [{"item": "ao", "qty": 3}, {"item": "quan", "qty": 10}]
      -> return {"ao": 10, "quan": 5}

    GIAI THICH VI DU:
    - Yeu cau "quan" voi qty 10 vuot qua ton kho 5 -> huy toan bo, giu nguyen inventory {"ao": 10, "quan": 5}.
    """
    res = dict(inventory)
    for req in requests:
        item, qty = req.get("item"), req.get("qty", 0)
        if item not in res or res[item] < qty:
            return res
        res[item] -= qty
    return res


# ================= PHAN 3: DESIGN (Q8-Q10, 280 diem) ======================

def solution_08(words):
    """
    DE BAI:
    Gom nhom cac tu dao chu (Anagrams) lai voi nhau.
    Hai tu duoc goi la anagram cua nhau neu chung chua cung cac chu cai voi so luong nhu nhau.
    Yeu cau:
    - Moi nhom anagrams phai duoc sap xep theo thu tu tu dien tang dan.
    - Danh sach cac nhom phai duoc sap xep theo tu dau tien cua moi nhom theo thu tu tu dien tang dan.
    Tra ve list cac list chuoi.

    GIAI THICH THAM SO:
    - words: list cac chuoi (str) chi chua chu cai viet thuong.

    GIAI THICH GIA TRI RETURN:
    - List cac list chuoi (list of list of str).

    VI DU:
    - words = ["eat", "tea", "tan", "ate", "nat", "bat"]
      -> return [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]

    GIAI THICH VI DU:
    - Nhom 1: "ate", "eat", "tea" (tu dau "ate")
    - Nhom 2: "bat" (tu dau "bat")
    - Nhom 3: "nat", "tan" (tu dau "nat")
    - Ket qua sap theo "ate" < "bat" < "nat".
    """
    pass  # <-- viet code cua ban o day


def solution_09(matrix):
    """
    DE BAI:
    Duyet ma tran M x N theo duong xoan oc (Spiral order) chieu kim dong ho tu ngoai vao trong,
    bat dau tu o goc tren cung ben trai (0, 0).
    Tra ve list chua tat ca cac phan tu theo thu tu duyet. Mang rong tra ve [].

    GIAI THICH THAM SO:
    - matrix: mang 2 chieu (list cac list int).

    GIAI THICH GIA TRI RETURN:
    - List cac so nguyen theo thu tu duyet xoan oc.

    VI DU:
    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return [1, 2, 3, 6, 9, 8, 7, 4, 5]

    GIAI THICH VI DU:
    - Duyet hang dau [1, 2, 3] -> cot phai [6, 9] -> hang duoi [8, 7] -> cot trai [4] -> giua [5].
    """
    pass  # <-- viet code cua ban o day


def solution_10(nums, k):
    """
    DE BAI:
    Cho mot mang cac so nguyen nums va mot so nguyen k (1 <= k <= so phan tu khac nhau trong nums).
    Hay tim k phan tu xuat hien NHIEU NHAT trong mang.
    Quy tac sap xep ket qua:
    - Sap theo tan suat xuat hien GIAM DAN.
    - Neu hai phan tu co cung tan suat xuat hien, phan tu co gia tri NHO HON se xep truoc.
    Tra ve list chua k phan tu thoa man.

    GIAI THICH THAM SO:
    - nums: list cac so nguyen.
    - k: so nguyen int (1 <= k <= so phan tu doc nhat).

    GIAI THICH GIA TRI RETURN:
    - List int gom k phan tu.

    VI DU:
    - nums = [1, 1, 1, 2, 2, 3], k = 2 -> return [1, 2]

    GIAI THICH VI DU:
    - So 1 xuat hien 3 lan, so 2 xuat hien 2 lan, so 3 xuat hien 1 lan.
    - Top 2 phan tu xuat hien nhieu nhat la [1, 2].
    """
    pass  # <-- viet code cua ban o day


# ==========================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de3", "DE 3 - VONG LOAI BANG B (COS Pro Level 2) - 50 phut")
