# -*- coding: utf-8 -*-
"""
NHOM 6 - DESIGN MUC DO CHUNG KET (COS PRO LEVEL 1) - 420/1000 DIEM
Day la file DAP AN. Bao gom 15 loi giai hoan chinh dat rang buoc do phuc tap.
"""
import heapq
from collections import Counter, OrderedDict, deque


# ---------------------------------------------------------------- Bai 6.01
def solution_601(arr, target):
    """
    DE BAI:
    Cho mot mang cac so nguyen duong arr va mot so nguyen duong target.
    Hay tim do dai nho nhat cua mot mang con lien tiep sao cho tong cac phan tu
    trong mang con do lon hon hoac bang target.
    Neu khong ton tai mang con nao thoa man, tra ve 0.

    GIAI THICH THAM SO:
    - arr: list cac so nguyen duong (1 <= arr[i] <= 10^4).
    - target: so nguyen duong (1 <= target <= 10^9).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la do dai nho nhat cua mang con lien tiep thoa man,
      hoac 0 neu khong co.

    RANG BUOC:
    - So luong phan tu n tu 0 den 100000.
    - Yeu cau do phuc tap thoi gian O(n) su dung ky thuat cua so truot (sliding window),
      bo nho phu O(1).

    VI DU:
    - arr = [2, 3, 1, 2, 4, 3], target = 7 -> return 2

    GIAI THICH VI DU:
    - Mang con [4, 3] co tong bang 7 va do dai bang 2 la ngan nhat.
    """
    if not arr or target <= 0:
        return 0
    left = 0
    curr_sum = 0
    min_len = float("inf")
    for right in range(len(arr)):
        curr_sum += arr[right]
        while curr_sum >= target:
            min_len = min(min_len, right - left + 1)
            curr_sum -= arr[left]
            left += 1
    return min_len if min_len != float("inf") else 0


# ---------------------------------------------------------------- Bai 6.02
def solution_602(intervals):
    """
    DE BAI:
    Cho danh sach cac khoang thoi gian intervals, trong do moi khoang duoc bieu dien
    bang mot cap [start, end] (start <= end). Cac khoang co the chua duoc sap xep
    va co the chong lan nhau hoac tiep xuc nhau (tuc end1 >= start2).
    Hay gop tat ca cac khoang chong lan hoac tiep xuc nhau lai de duoc danh sach
    cac khoang toi gian khong giao nhau, sap xep tang dan theo start.

    GIAI THICH THAM SO:
    - intervals: list cac khoang [start, end] (so nguyen).

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac khoang [start, end] da duoc gop va sap xep tang dan.

    RANG BUOC:
    - So luong khoang n tu 0 den 100000.
    - Yeu cau do phuc tap thoi gian O(n log n) nho vao viec sap xep cac khoang.

    VI DU:
    - intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] -> return [[1, 6], [8, 10], [15, 18]]

    GIAI THICH VI DU:
    - Khoang [1, 3] va [2, 6] chong lan nhau nen duoc gop thanh [1, 6].
    """
    if not intervals:
        return []
    sorted_intervals = sorted(intervals, key=lambda x: x[0])
    merged = [[sorted_intervals[0][0], sorted_intervals[0][1]]]
    for curr in sorted_intervals[1:]:
        prev = merged[-1]
        if curr[0] <= prev[1]:
            prev[1] = max(prev[1], curr[1])
        else:
            merged.append([curr[0], curr[1]])
    return merged


# ---------------------------------------------------------------- Bai 6.03
def solution_603(grid):
    """
    DE BAI:
    Cho mot luoi 2 chieu grid kich thuoc m x n bieu dien trang thai cac khoang dat:
    - 0: O trong (khong co gi).
    - 1: O chua thuc vat sach (chua bi nhiem doc).
    - 2: O chua nguon doc hai (da bi nhiem doc).
    Moi phut, bat ky o so 1 nao nam ke (4 huong: tren, duoi, trai, phai) voi mot o
    so 2 se bi nhiem doc (chuyen thanh 2).
    Hay tinh so phut toi thieu de toan bo thuc vat sach bi nhiem doc.
    Neu con bat ky o so 1 nao khong bao gio bi nhiem doc toi, tra ve -1.
    Neu ban dau tren luoi khong co o so 1 nao, tra ve 0.

    GIAI THICH THAM SO:
    - grid: list cac list so nguyen 0, 1, 2 co kich thuoc m x n.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la so phut toi thieu, hoac -1 neu khong the nhiem het,
      hoac 0 neu khong co cay sach nao.

    RANG BUOC:
    - m, n tu 1 den 100.
    - Yeu cau do phuc tap O(m * n) su dung thuat toan BFS da nguon (multi-source BFS).

    VI DU:
    - grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]] -> return 4

    GIAI THICH VI DU:
    - Phut 1: cac o (0,1) va (1,0) bi nhiem.
    - Phut 2: cac o (0,2) va (1,1) bi nhiem.
    - Phut 3: o (2,1) bi nhiem.
    - Phut 4: o (2,2) bi nhiem. Tong cong 4 phut.
    """
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh_count = 0
    grid_copy = [row[:] for row in grid]
    for r in range(rows):
        for c in range(cols):
            if grid_copy[r][c] == 2:
                queue.append((r, c, 0))
            elif grid_copy[r][c] == 1:
                fresh_count += 1
    if fresh_count == 0:
        return 0
    minutes = 0
    while queue:
        r, c, d = queue.popleft()
        minutes = max(minutes, d)
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid_copy[nr][nc] == 1:
                grid_copy[nr][nc] = 2
                fresh_count -= 1
                queue.append((nr, nc, d + 1))
    return minutes if fresh_count == 0 else -1


# ---------------------------------------------------------------- Bai 6.04
def solution_604(weights, values, capacity):
    """
    DE BAI:
    Bai toan cai ba lo (0/1 Knapsack): Co n do vat, do vat thu i co khoi luong
    weights[i] va gia tri values[i]. Can chon mot tap hop cac do vat sao cho tong
    khoi luong khong vuot qua capacity va tong gia tri dat duoc la LON NHAT.
    Moi do vat chi duoc chon toi da 1 lan.

    GIAI THICH THAM SO:
    - weights: list cac so nguyen duong bieu thi khoi luong cac do vat.
    - values: list cac so nguyen duong bieu thi gia tri cac do vat.
    - capacity: so nguyen duong la suc chua toi da cua ba lo.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong gia tri lon nhat co the dat vao ba lo.

    RANG BUOC:
    - So do vat n <= 1000, capacity <= 2000.
    - Yeu cau do phuc tap O(n * capacity) bang quy hoach dong toi uu bo nho O(capacity).

    VI DU:
    - weights = [2, 3, 4, 5], values = [3, 4, 5, 6], capacity = 5 -> return 7

    GIAI THICH VI DU:
    - Chon do vat co w=2 (v=3) va w=3 (v=4), tong khoi luong 2+3=5, tong gia tri 3+4=7.
    """
    if not weights or not values or capacity <= 0:
        return 0
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for cap in range(capacity, w - 1, -1):
            if dp[cap - w] + v > dp[cap]:
                dp[cap] = dp[cap - w] + v
    return dp[capacity]


# ---------------------------------------------------------------- Bai 6.05
def solution_605(grid):
    """
    DE BAI:
    Cho mot ma tran 2 chieu grid kich thuoc m x n chua cac so nguyen khong am.
    Mot robot xuat phat tu goc tren-trai (0, 0) muon di chuyen den goc duoi-phai
    (m-1, n-1). Tai moi buoc, robot chi co the di chuyen sang phai (sang o (r, c+1))
    hoac di xuong duoi (sang o (r+1, c)).
    Hay tim mot duong di sao cho tong cac gia tri tren cac o da di qua la NHO NHAT
    va tra ve tong nho nhat do.

    GIAI THICH THAM SO:
    - grid: list cac list so nguyen khong am co kich thuoc m x n.

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tong gia tri nho nhat cua duong di.

    RANG BUOC:
    - m, n tu 1 den 500. Cac phan tu grid[i][j] tu 0 den 1000.
    - Yeu cau do phuc tap O(m * n) su dung quy hoach dong, bo nho O(n).

    VI DU:
    - grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]] -> return 7

    GIAI THICH VI DU:
    - Duong di 1 -> 3 -> 1 -> 1 -> 1 co tong la 1 + 3 + 1 + 1 + 1 = 7 (nho nhat).
    """
    if not grid or not grid[0]:
        return 0
    m, n = len(grid), len(grid[0])
    dp = [0] * n
    dp[0] = grid[0][0]
    for j in range(1, n):
        dp[j] = dp[j - 1] + grid[0][j]
    for i in range(1, m):
        dp[0] += grid[i][0]
        for j in range(1, n):
            dp[j] = min(dp[j], dp[j - 1]) + grid[i][j]
    return dp[-1]


# ---------------------------------------------------------------- Bai 6.06
def solution_606(s):
    """
    DE BAI:
    Cho mot chuoi ky tu s da duoc ma hoa theo quy tac: k[chuoi_con], trong do
    chuoi_con ben trong cap ngoac vuong duoc lap lai dung k lan (k la so nguyen duong).
    Cac cap ngoac vuong co the long nhau nhieu cap.
    Hay su dung ngan xep (stack) de giai ma va tra ve chuoi ket qua hoan chinh.

    GIAI THICH THAM SO:
    - s: chuoi ky tu (str) chi chua chu so '0'-'9', chu cai thuong 'a'-'z' va cac dau '[', ']'.

    GIAI THICH GIA TRI RETURN:
    - Tra ve chuoi ky tu (str) da duoc giai ma hoan chinh.

    RANG BUOC:
    - Do dai chuoi s tu 0 den 1000.
    - Do phuc tap thoi gian O(N) voi N la do dai chuoi ket qua, su dung stack.

    VI DU:
    - s = "3[a2[c]]" -> return "accaccacc"

    GIAI THICH VI DU:
    - 2[c] thanh "cc", sau do 3[acc] thanh "accaccacc".
    """
    if not s:
        return ""
    stack = []
    curr_str = ""
    curr_num = 0
    for char in s:
        if char.isdigit():
            curr_num = curr_num * 10 + int(char)
        elif char == "[":
            stack.append((curr_str, curr_num))
            curr_str = ""
            curr_num = 0
        elif char == "]":
            prev_str, num = stack.pop()
            curr_str = prev_str + curr_str * num
        else:
            curr_str += char
    return curr_str


# ---------------------------------------------------------------- Bai 6.07
def solution_607(s):
    """
    DE BAI:
    Cho mot chuoi s bieu dien danh sach cac mat hang va so luong theo dinh dang:
    "ten_hang:so_luong,ten_hang:so_luong,..."
    Hay parse chuoi thanh dict {ten_hang: tong_so_luong} voi cac quy tac sau:
    1. Cac cap phan tach nhau boi dau phay ','.
    2. Moi cap phai co dung mot dau ':' phan tach ten va so luong. Khoang trang thua
       o dau/cuoi moi cap hoac xung quanh dau ':' phai duoc loai bo (strip).
    3. ten_hang phai la chuoi khac rong chi chua cac ky tu chu cai, chu so hoac dau gach duoi '_'.
    4. so_luong phai la so nguyen duong (> 0).
    5. Neu mot cap bi loi dinh dang (thieu/thua ':', ten khong hop le, so luong khong hop le hoac <= 0,
       hoac cap rong) thi BO QUA cap do va tiep tuc xu ly cac cap con lai.
    6. Neu cung mot ten_hang xuat hien nhieu lan hop le, CONG DON so luong cua mat hang do.

    GIAI THICH THAM SO:
    - s: chuoi ky tu can parse.

    GIAI THICH GIA TRI RETURN:
    - Tra ve dict {str: int} chua cac mat hang hop le va tong so luong.
      Chuoi rong hoac khong co cap hop le nao -> tra ve {}.

    RANG BUOC:
    - Do dai chuoi s tu 0 den 10000.
    - Yeu cau do phuc tap O(len(s)).

    VI DU:
    - s = "apple:5, banana:10, apple:3" -> return {"apple": 8, "banana": 10}

    GIAI THICH VI DU:
    - 'apple' xuat hien 2 lan voi so luong 5 va 3 nen tong la 8. 'banana' co so luong 10.
    """
    if not s or not isinstance(s, str):
        return {}
    result = {}
    parts = s.split(",")
    for part in parts:
        part = part.strip()
        if not part:
            continue
        if part.count(":") != 1:
            continue
        key_str, val_str = part.split(":")
        key = key_str.strip()
        val = val_str.strip()
        if not key:
            continue
        if not all(c.isalnum() or c == "_" for c in key):
            continue
        if not val.isdigit() or int(val) <= 0:
            continue
        qty = int(val)
        result[key] = result.get(key, 0) + qty
    return result


# ---------------------------------------------------------------- Bai 6.08
def solution_608(matrix):
    """
    DE BAI:
    Cho mot ma tran 2 chieu matrix kich thuoc m x n.
    Hay thuc hien 2 buoc:
    1. Xoay ma tran 90 do theo chieu kim dong ho (90 degrees clockwise rotation).
    2. Sau khi xoay, duyet ma tran moi theo thu tu XOAN OC (spiral order) tu ngoai vao trong,
       bat dau tu goc tren-trai (sang phai -> xuong duoi -> sang trai -> len tren...).
    Tra ve mot danh sach (list) chua cac phan tu theo thu tu duyet xoan oc do.

    GIAI THICH THAM SO:
    - matrix: list cac list bieu dien ma tran 2 chieu kich thuoc m x n.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list chua cac phan tu theo thu tu duyet xoan oc cua ma tran sau khi da xoay 90 do.
      Ma tran rong -> tra ve [].

    RANG BUOC:
    - m, n tu 0 den 200.
    - Yeu cau do phuc tap O(m * n).

    VI DU:
    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return [7, 4, 1, 2, 3, 6, 9, 8, 5]

    GIAI THICH VI DU:
    - Sau khi xoay 90 do, ma tran thanh: [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
    - Duyet xoan oc ma tran moi: 7 -> 4 -> 1 -> 2 -> 3 -> 6 -> 9 -> 8 -> 5.
    """
    if not matrix or not matrix[0]:
        return []
    m, n = len(matrix), len(matrix[0])
    rotated = [[matrix[m - 1 - r][c] for r in range(m)] for c in range(n)]
    res = []
    top, bottom = 0, n - 1
    left, right = 0, m - 1
    while top <= bottom and left <= right:
        for j in range(left, right + 1):
            res.append(rotated[top][j])
        top += 1
        for i in range(top, bottom + 1):
            res.append(rotated[i][right])
        right -= 1
        if top <= bottom:
            for j in range(right, left - 1, -1):
                res.append(rotated[bottom][j])
            bottom -= 1
        if left <= right:
            for i in range(bottom, top - 1, -1):
                res.append(rotated[i][left])
            left += 1
    return res


# ---------------------------------------------------------------- Bai 6.09
def solution_609(records, k):
    """
    DE BAI:
    Trong mot he thong san thuong mai dien tu, moi san pham co thong tin:
    {"id": str, "doanh_thu": int, "danh_gia": float, "luot_xem": int}.
    Can tim ra Top k san pham xuat sac nhat theo cac tieu chi uu tien sau:
    1. doanh_thu CAO HON duoc uu tien truoc (giam dan).
    2. Neu doanh_thu bang nhau, danh_gia CAO HON duoc uu tien (giam dan).
    3. Neu danh_gia bang nhau, luot_xem CAO HON duoc uu tien (giam dan).
    4. Neu ca 3 tieu chi deu bang nhau, id NHO HON theo thu tu tu dien (A-Z) duoc uu tien.
    Tra ve danh sach cac id cua k san pham xuat sac nhat theo dung thu tu uu tien tren.

    GIAI THICH THAM SO:
    - records: list cac dict chua thong tin san pham.
    - k: so nguyen (int) la so luong san pham can lay.

    GIAI THICH GIA TRI RETURN:
    - Tra ve list cac str la id cua k san pham dung dau.
      Neu k <= 0 hoac records rong -> tra ve [].
      Neu k >= len(records) -> tra ve toan bo danh sach id da sap xep theo dung thu tu.

    RANG BUOC:
    - So luong san pham n tu 0 den 100000.
    - Yeu cau do phuc tap O(n log k) hoac O(n log n) su dung Heap / Sorting.

    VI DU:
    - records = [{"id": "A", "doanh_thu": 100, "danh_gia": 4.5, "luot_xem": 10},
                 {"id": "B", "doanh_thu": 100, "danh_gia": 4.8, "luot_xem": 5}], k = 1
      -> return ["B"]

    GIAI THICH VI DU:
    - A va B co cung doanh thu 100, nhung B co danh gia 4.8 > 4.5 cua A nen B dung truoc.
    """
    if not records or k <= 0:
        return []
    sorted_rec = sorted(
        records,
        key=lambda x: (-x["doanh_thu"], -x["danh_gia"], -x["luot_xem"], x["id"]),
    )
    return [r["id"] for r in sorted_rec[:k]]


# ---------------------------------------------------------------- Bai 6.10
def solution_610(customers, k):
    """
    DE BAI:
    Mo phong he thong phuc vu khach hang tai ngan hang voi k quay phuc vu (danh so tu 0 den k-1).
    Cac khach hang den theo danh sach customers, moi khach hang la tuple:
    (id_khach, thoi_diem_den, thoi_gian_phuc_vu).
    Quy tac phuc vu:
    1. Khi mot khach den, neu co it nhat mot quay dang ranh tai thoi diem den do,
       khach se vao quay ranh co CHI SO NHO NHAT.
    2. Neu tat ca cac quay deu dang ban, khach hang phai xep hang doi. Khach hang se duoc
       phuc vu ngay khi co quay dau tien tro nen ranh. Neu co nhieu quay cung ranh tai mot thoi diem,
       uu tien quay co CHI SO NHO NHAT.
    3. Thoi diem bat dau phuc vu = max(thoi_diem_den, thoi_diem_quay_ranh).
       Thoi gian cho cua khach = thoi_diem_bat_dau - thoi_diem_den.
       Thoi diem ket thuc phuc vu = thoi_diem_bat_dau + thoi_gian_phuc_vu.
    Hay tinh toan va tra ve mot dict thong ke gom:
    - "tong_thoi_gian": thoi diem khach hang cuoi cung duoc phuc vu xong (int).
    - "cho_trung_binh": thoi gian cho trung binh cua tat ca khach hang, lam tron 2 chu so thap phan (float).
    - "phuc_vu_boi_quay": list so luong khach hang ma moi quay da phuc vu, theo thu tu quay 0 den k-1.

    GIAI THICH THAM SO:
    - customers: list cac tuple (id, thoi_diem_den, thoi_gian_phuc_vu) sap xep tang dan theo thoi diem den.
    - k: so nguyen duong la so luong quay phuc vu.

    GIAI THICH GIA TRI RETURN:
    - Tra ve dict {"tong_thoi_gian": int, "cho_trung_binh": float, "phuc_vu_boi_quay": list[int]}.
      Neu customers rong hoac k <= 0, tra ve {"tong_thoi_gian": 0, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [0]*max(0, k)}.

    RANG BUOC:
    - So luong khach hang n tu 0 den 50000, so quay k tu 1 den 1000.
    - Yeu cau do phuc tap O(n log k) su dung Min-Heap.

    VI DU:
    - customers = [(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], k = 2
      -> return {"tong_thoi_gian": 8, "cho_trung_binh": 0.5, "phuc_vu_boi_quay": [2, 2]}

    GIAI THICH VI DU:
    - Khach 1 den luc 0 -> quay 0 (0..5).
    - Khach 2 den luc 1 -> quay 1 (1..4).
    - Khach 3 den luc 2 -> doi den luc 4, quay 1 ranh -> quay 1 (4..8), cho: 4 - 2 = 2.
    - Khach 4 den luc 6 -> quay 0 ranh tu luc 5 -> quay 0 (6..8), cho: 0.
    - Tong thoi gian = 8, cho trung binh = (0 + 0 + 2 + 0) / 4 = 0.5, so khach moi quay = [2, 2].
    """
    if not customers or k <= 0:
        return {
            "tong_thoi_gian": 0,
            "cho_trung_binh": 0.0,
            "phuc_vu_boi_quay": [0] * max(0, k),
        }
    free_counters = list(range(k))
    heapq.heapify(free_counters)
    busy_heap = []
    counts = [0] * k
    total_wait = 0
    max_finish = 0

    for cid, arrival, duration in customers:
        while busy_heap and busy_heap[0][0] <= arrival:
            f_time, c_id = heapq.heappop(busy_heap)
            heapq.heappush(free_counters, c_id)

        if free_counters:
            c_id = heapq.heappop(free_counters)
            start_time = arrival
            wait_time = 0
            finish_time = start_time + duration
            heapq.heappush(busy_heap, (finish_time, c_id))
        else:
            earliest_finish, c_id = heapq.heappop(busy_heap)
            heapq.heappush(free_counters, c_id)
            while busy_heap and busy_heap[0][0] == earliest_finish:
                _, other_cid = heapq.heappop(busy_heap)
                heapq.heappush(free_counters, other_cid)
            chosen_cid = heapq.heappop(free_counters)
            start_time = earliest_finish
            wait_time = start_time - arrival
            finish_time = start_time + duration
            heapq.heappush(busy_heap, (finish_time, chosen_cid))
            c_id = chosen_cid

        counts[c_id] += 1
        total_wait += wait_time
        max_finish = max(max_finish, finish_time)

    avg_wait = round(total_wait / len(customers), 2)
    return {
        "tong_thoi_gian": max_finish,
        "cho_trung_binh": avg_wait,
        "phuc_vu_boi_quay": counts,
    }


# ---------------------------------------------------------------- Bai 6.11
def solution_611(weights, days):
    """
    DE BAI:
    Mot chiec tau cho hang can van chuyen mot danh sach cac kien hang co khoi luong
    weights theo dung thu tu da cho trong vong days ngay.
    Moi ngay, tau se cho mot so kien hang lien tiep sao cho tong khoi luong khong vuot qua
    tai trong toi da cua tau.
    Hay tim tai trong toi thieu cua tau de co the van chuyen het tat ca cac kien hang trong dung
    hoac it hon days ngay.

    GIAI THICH THAM SO:
    - weights: list cac so nguyen duong bieu thi khoi luong cac kien hang (1 <= weights[i] <= 10^4).
    - days: so nguyen duong la so ngay toi da (1 <= days <= len(weights)).

    GIAI THICH GIA TRI RETURN:
    - Tra ve so nguyen (int) la tai trong toi thieu cua tau.

    RANG BUOC:
    - So luong kien hang n tu 1 den 50000.
    - Yeu cau do phuc tap O(n * log(sum(weights))) bang thuat toan Tim kiem nhi phan tren dap an
      (Binary Search the Answer).

    VI DU:
    - weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5 -> return 15

    GIAI THICH VI DU:
    - Voi tai trong 15: Ngay 1 cho [1,2,3,4,5] (tong 15), Ngay 2 cho [6,7] (tong 13),
      Ngay 3 cho [8], Ngay 4 cho [9], Ngay 5 cho [10]. Tong cong 5 ngay.
    """
    if not weights or days <= 0:
        return 0
    low = max(weights)
    high = sum(weights)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        needed_days = 1
        curr_weight = 0
        for w in weights:
            if curr_weight + w > mid:
                needed_days += 1
                curr_weight = w
            else:
                curr_weight += w
        if needed_days <= days:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans


# ---------------------------------------------------------------- Bai 6.12
def solution_612(n, edges):
    """
    DE BAI:
    Cho mot do thi vo huong gom n dinh (danh so tu 0 den n-1) va danh sach cac canh edges,
    trong do moi canh la mot cap [u, v] noi giua dinh u va dinh v.
    Hay:
    1. Dem so luong thanh phan lien thong cua do thi.
    2. Tim kich thuoc (so dinh) cua thanh phan lien thong LON NHAT.
    3. Tim kich thuoc (so dinh) cua thanh phan lien thong NHO NHAT (trong cac thanh phan co it nhat 1 dinh).
    Tra ve mot tuple 3 phan tu: (so_thanh_phan, max_size, min_size).
    Neu n <= 0, tra ve (0, 0, 0).
    Luu y: Dinh khong noi voi canh nao duoc coi la mot thanh phan lien thong rieng le co kich thuoc la 1.

    GIAI THICH THAM SO:
    - n: so luong dinh (int >= 0).
    - edges: list cac cap [u, v] bieu thi cac canh.

    GIAI THICH GIA TRI RETURN:
    - Tra ve tuple (so_thanh_phan, max_size, min_size).

    RANG BUOC:
    - n tu 0 den 100000, so canh tu 0 den 200000.
    - Yeu cau do phuc tap O(V + E) su dung BFS, DFS hoac Disjoint Set Union (DSU).

    VI DU:
    - n = 5, edges = [[0, 1], [1, 2], [3, 4]] -> return (2, 3, 2)

    GIAI THICH VI DU:
    - Co 2 thanh phan: {0, 1, 2} co 3 dinh va {3, 4} co 2 dinh. Max size = 3, min size = 2.
    """
    if n <= 0:
        return (0, 0, 0)
    adj = [[] for _ in range(n)]
    for u, v in edges:
        if 0 <= u < n and 0 <= v < n:
            adj[u].append(v)
            adj[v].append(u)
    visited = [False] * n
    sizes = []
    for i in range(n):
        if not visited[i]:
            visited[i] = True
            comp_size = 1
            stack = [i]
            while stack:
                u = stack.pop()
                for v in adj[u]:
                    if not visited[v]:
                        visited[v] = True
                        comp_size += 1
                        stack.append(v)
            sizes.append(comp_size)
    return (len(sizes), max(sizes), min(sizes))


# ---------------------------------------------------------------- Bai 6.13
class KhoHang:
    """
    DE BAI:
    Xay dung lop KhoHang de quan ly hang hoa trong kho voi cac chuc nang:
    nhap hang, xuat hang, kiem tra ton kho, xem thong tin, canh bao ton it va tinh tong gia tri kho.

    CAC PHUONG THUC CAN CO:
    - __init__(self, canh_bao_ton_it=5):
        Khoi tao kho hang voi nguong canh bao ton it mac dinh la 5.
    - nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):
        Them so_luong san pham ma_sp vao kho. Neu ma_sp chua co, luu them ten_sp.
        Neu da co, cong don so_luong va cap nhat gia_nhap moi nhat.
        Neu so_luong <= 0 hoac gia_nhap < 0, bo qua khong lam gi.
    - xuat_hang(self, ma_sp, so_luong):
        Xuat so_luong san pham ma_sp khoi kho.
        Neu ma_sp khong ton tai, so_luong <= 0 hoac ton kho khong du (< so_luong),
        khong xuat va tra ve False.
        Neu du hang, giam so luong ton kho va tra ve True.
    - ton_kho(self, ma_sp):
        Tra ve so luong ton kho hien tai cua ma_sp (int). Neu khong ton tai tra ve 0.
    - thong_tin(self, ma_sp):
        Tra ve dict {"ma_sp": ma_sp, "ten_sp": ten_sp, "so_luong": so_luong, "gia_nhap": gia_nhap}.
        Neu khong ton tai tra ve None.
    - danh_sach_canh_bao(self):
        Tra ve list cac ma_sp co 0 < ton_kho <= canh_bao_ton_it, sap xep theo so_luong TANG DAN,
        neu cung so luong thi ma_sp theo thu tu tu dien A-Z.
    - tong_gia_tri_kho(self):
        Tra ve tong gia tri hang ton kho = sum(so_luong * gia_nhap) cua tat ca san pham.

    RANG BUOC:
    - Cac thao tac nhap, xuat, ton_kho, thong_tin dat do phuc tap O(1).
    """

    def __init__(self, canh_bao_ton_it=5):
        self.canh_bao_ton_it = canh_bao_ton_it
        self.items = {}

    def nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):
        if so_luong <= 0 or gia_nhap < 0:
            return
        if ma_sp in self.items:
            self.items[ma_sp]["so_luong"] += so_luong
            self.items[ma_sp]["gia_nhap"] = gia_nhap
        else:
            self.items[ma_sp] = {
                "ten_sp": ten_sp,
                "so_luong": so_luong,
                "gia_nhap": gia_nhap,
            }

    def xuat_hang(self, ma_sp, so_luong):
        if so_luong <= 0 or ma_sp not in self.items:
            return False
        if self.items[ma_sp]["so_luong"] < so_luong:
            return False
        self.items[ma_sp]["so_luong"] -= so_luong
        return True

    def ton_kho(self, ma_sp):
        if ma_sp not in self.items:
            return 0
        return self.items[ma_sp]["so_luong"]

    def thong_tin(self, ma_sp):
        if ma_sp not in self.items:
            return None
        it = self.items[ma_sp]
        return {
            "ma_sp": ma_sp,
            "ten_sp": it["ten_sp"],
            "so_luong": it["so_luong"],
            "gia_nhap": it["gia_nhap"],
        }

    def danh_sach_canh_bao(self):
        cb = []
        for ma_sp, it in self.items.items():
            if 0 < it["so_luong"] <= self.canh_bao_ton_it:
                cb.append((it["so_luong"], ma_sp))
        cb.sort(key=lambda x: (x[0], x[1]))
        return [item[1] for item in cb]

    def tong_gia_tri_kho(self):
        return sum(it["so_luong"] * it["gia_nhap"] for it in self.items.values())


# ---------------------------------------------------------------- Bai 6.14
class TaiKhoan:
    """
    DE BAI:
    Xay dung lop TaiKhoan quan ly so du, lich su giao dich va hoan tac (undo) giao dich.

    CAC PHUONG THUC CAN CO:
    - __init__(self, chu_tai_khoan, so_du_ban_dau=0):
        Khoi tao tai khoan voi ten chu_tai_khoan va so_du_ban_dau (neu so_du_ban_dau < 0 thi dat ve 0).
    - nap_tien(self, so_tien, mo_ta=""):
        Neu so_tien <= 0, tra ve False.
        Nguoc lai cong vao so du, ghi nhan giao dich vao lich su va tra ve True.
    - rut_tien(self, so_tien, mo_ta=""):
        Neu so_tien <= 0 hoac so_tien > so_du_hien_tai, tra ve False.
        Nguoc lai tru so du, ghi nhan giao dich vao lich su va tra ve True.
    - xem_so_du(self):
        Tra ve so du hien tai (int hoac float).
    - lich_su_giao_dich(self, gioi_han=None):
        Tra ve list cac dict giao dich da thuc hien tu cu nhat den moi nhat:
        {"loai": "NAP" hoac "RUT", "so_tien": so_tien, "mo_ta": mo_ta, "so_du_sau": so_du_sau}.
        Neu co gioi_han (int > 0), chi lay toi da gioi_han giao dich gan nhat.
    - hoan_tac(self, so_buoc=1):
        Hoan tac toi da so_buoc giao dich gan nhat theo co che ngan xep (LIFO).
        - Neu hoan tac giao dich NAP: tru lai so tien da nap. Neu so du hien tai khong du tru,
          huy thao tac hoan tac va dung lai.
        - Neu hoan tac giao dich RUT: cong lai so tien da rut vao so du.
        - Giao dich duoc hoan tac thanh cong se bi xoa khoi lich su.
        Tra ve so giao dich thuc su da duoc hoan tac thanh cong (int).

    RANG BUOC:
    - Cac thao tac nap, rut, xem_so_du, hoan_tac moi buoc dat do phuc tap O(1).
    """

    def __init__(self, chu_tai_khoan, so_du_ban_dau=0):
        self.chu_tai_khoan = chu_tai_khoan
        self.so_du = max(0, so_du_ban_dau)
        self.history = []

    def nap_tien(self, so_tien, mo_ta=""):
        if so_tien <= 0:
            return False
        self.so_du += so_tien
        self.history.append({
            "loai": "NAP",
            "so_tien": so_tien,
            "mo_ta": mo_ta,
            "so_du_sau": self.so_du,
        })
        return True

    def rut_tien(self, so_tien, mo_ta=""):
        if so_tien <= 0 or so_tien > self.so_du:
            return False
        self.so_du -= so_tien
        self.history.append({
            "loai": "RUT",
            "so_tien": so_tien,
            "mo_ta": mo_ta,
            "so_du_sau": self.so_du,
        })
        return True

    def xem_so_du(self):
        return self.so_du

    def lich_su_giao_dich(self, gioi_han=None):
        if gioi_han is None or gioi_han <= 0:
            return [dict(h) for h in self.history]
        return [dict(h) for h in self.history[-gioi_han:]]

    def hoan_tac(self, so_buoc=1):
        if so_buoc <= 0:
            return 0
        undone = 0
        for _ in range(so_buoc):
            if not self.history:
                break
            last = self.history[-1]
            if last["loai"] == "NAP":
                if self.so_du >= last["so_tien"]:
                    self.so_du -= last["so_tien"]
                    self.history.pop()
                    undone += 1
                else:
                    break
            elif last["loai"] == "RUT":
                self.so_du += last["so_tien"]
                self.history.pop()
                undone += 1
        return undone


# ---------------------------------------------------------------- Bai 6.15
class LRUCache:
    """
    DE BAI:
    Cai dat bo dem LRUCache (Least Recently Used Cache) voi dung luong co dinh suc_chua.
    Cam dung thu vien co san nhu functools.lru_cache.

    CAC PHUONG THUC CAN CO:
    - __init__(self, suc_chua):
        Khoi tao bo dem voi dung luong suc_chua (so nguyen duong). Neu suc_chua <= 0 dat la 1.
    - get(self, key):
        Lay gia tri cua key trong cache va cap nhat key tro thanh phan tu vua duoc truy cap gan nhat (MRU).
        Neu key khong ton tai trong cache, tra ve -1.
    - put(self, key, value):
        Them hoac cap nhat cap (key, value) vao cache.
        - Neu key da co: cap nhat value va chuyen key len vi tri moi nhat (MRU).
        - Neu key chua co: neu cache da dat dung luong toi da, loai bo phan tu it duoc dung nhat (LRU)
          truoc khi them cap (key, value) moi vao vi tri moi nhat.
    - xoa(self, key):
        Xoa key khoi cache neu ton tai. Tra ve True neu xoa duoc, False neu khong co key.
    - do_dai(self):
        Tra ve so luong phan tu hien co trong cache (int).
    - danh_sach_keys(self):
        Tra ve list cac key theo thu tu tu it duoc dung nhat (LRU) den dung gan nhat (MRU).

    RANG BUOC:
    - Cac thao tac get, put, xoa, do_dai phai dat do phuc tap O(1).
    """

    def __init__(self, suc_chua):
        self.suc_chua = max(1, suc_chua)
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache[key] = value
            self.cache.move_to_end(key)
        else:
            if len(self.cache) >= self.suc_chua:
                self.cache.popitem(last=False)
            self.cache[key] = value

    def xoa(self, key):
        if key in self.cache:
            del self.cache[key]
            return True
        return False

    def do_dai(self):
        return len(self.cache)

    def danh_sach_keys(self):
        return list(self.cache.keys())
