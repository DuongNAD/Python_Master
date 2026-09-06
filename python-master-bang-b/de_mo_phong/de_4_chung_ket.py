# -*- coding: utf-8 -*-
"""
DE MO PHONG 4 - CHUNG KET BANG B (COS Pro Level 1)
==========================================================================
  10 cau | 1000 diem | 90 PHUT | >= 600 diem = dat chung chi
  Doc hieu code  Q1-Q3   340 diem (110, 110, 120d)
  Design         Q4-Q7   420 diem (105d/cau)
  Debugging      Q8-Q10  240 diem (80d/cau)

CACH LAM: bam gio 90 phut, KHONG tra Google, khong dung AI. Lam xong chay:
    python3 de_mo_phong/de_4_chung_ket.py
Dap an: dap_an/de_4_chung_ket_dapan.py
==========================================================================
"""
from collections import Counter, OrderedDict, deque


# ================= PHAN 1: DOC HIEU CODE (Q1-Q3, 340 diem) ================

def solution_01(arr):
    """
    DE BAI:
    Cho mang so nguyen arr. Voi moi phan tu trong arr, hay tim phan tu dau tien ben phai
    co gia tri LON HON HAN no (Next Greater Element). Neu khong co phan tu nao ben phai
    lon hon, gia tri tuong ung la -1.
    Su dung Monotonic Stack (ngan xep don dieu giam) de dat do phuc tap thoi gian O(n).
    Tra ve list chua cac phan tu tim duoc theo dung thu tu cac vi tri ban dau.

    GIAI THICH THAM SO:
    - arr: list cac so nguyen (0 <= len(arr) <= 10^5).

    GIAI THICH GIA TRI RETURN:
    - List cac so nguyen co cung do dai voi mang arr ban dau.

    VI DU:
    - arr = [4, 5, 2, 25] -> return [5, 25, 25, -1]

    GIAI THICH VI DU:
    - Phan tu dau tien ben phai lon hon 4 la 5.
    - Phan tu dau tien ben phai lon hon 5 la 25.
    - Phan tu dau tien ben phai lon hon 2 la 25.
    - 25 khong co phan tu nao lon hon o ben phai -> -1.
    """
    n = len(arr)
    result = [-1] * n
    stack = []  # luu tru chi so index
    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            idx = ___1___
            result[idx] = ___2___
        stack.append(___3___)
    return result


def solution_02(weights, values, capacity):
    """
    DE BAI:
    Bai toan cai tui 0/1 (0/1 Knapsack Problem).
    Co N mon do, mon do thu i co trong luong weights[i] va gia tri values[i].
    Chiec tui co suc chua toi da la capacity.
    Moi mon do chi duoc chon toi da 1 lan (0 hoac 1).
    Hay tinh tong gia tri lon nhat co the mang theo ma tong trong luong khong vuot qua capacity.
    Su dung thuat toan quy hoach dong (Dynamic Programming).

    GIAI THICH THAM SO:
    - weights: list cac so nguyen duong (trong luong).
    - values: list cac so nguyen duong (gia tri).
    - capacity: so nguyen khong am (suc chua).

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) tong gia tri lon nhat.

    VI DU:
    - weights = [2, 3, 4, 5], values = [3, 4, 5, 6], capacity = 5 -> return 7

    GIAI THICH VI DU:
    - Chon mon do 0 (w=2, v=3) va mon do 1 (w=3, v=4) -> tong w = 5 <= 5, tong v = 3 + 4 = 7.
    """
    n = len(weights)
    dp = [0] * (capacity + 1)
    for i in range(n):
        w, v = weights[i], values[i]
        for c in range(capacity, w - 1, -1):
            dp[c] = ___1___
    return ___2___


def solution_03(s):
    """
    DE BAI:
    Tim chuoi con doi xung (Palindromic Substring) dai nhat trong chuoi s.
    Mot chuoi duoc goi la doi xung neu doc xuoi hay nguoc deu giong nhau.
    Neu co nhieu chuoi con doi xung cung dat do dai lon nhat, tra ve chuoi con
    xuat hien som nhat trong s.
    Chuoi rong tra ve chuoi rong "".

    GIAI THICH THAM SO:
    - s: chuoi ky tu (str).

    GIAI THICH GIA TRI RETURN:
    - Chuoi con doi xung dai nhat (str).

    VI DU:
    - s = "babad" -> return "bab"

    GIAI THICH VI DU:
    - "bab" va "aba" deu co do dai 3, "bab" xuat hien truoc -> return "bab".
    """
    if not s:
        return ""

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    longest = ""
    for i in range(len(s)):
        p1 = expand(i, i)       # doi xung tam le
        p2 = expand(i, i + 1)   # doi xung tam chan
        best = p1 if len(p1) >= len(p2) else p2
        if len(best) > len(longest):
            longest = ___1___
    return longest


# ================= PHAN 2: DESIGN (Q4-Q7, 420 diem) ======================

def solution_04(maze, start, end):
    """
    DE BAI:
    Tim duong di ngan nhat trong me cung (Shortest Path in Maze) su dung thuat toan BFS (Breadth-First Search).
    Ma tran maze kich thuoc M x N gom cac so:
    - 0: O trong, co the di qua.
    - 1: O chuong ngai vat / tuong, khong the di qua.
    Tu mot o (r, c), chi co the di chuyen sang 4 o lien ke (len, xuong, trai, phai) neu o do co gia tri 0.
    Cho start = (r1, c1) va end = (r2, c2).
    Hay tinh so buoc di chuyen it nhat de di tu start den end.
    Neu khong the den duoc end hoac start / end la o chuong ngai vat (1), tra ve -1.
    Neu start == end va maze[r1][c1] == 0, tra ve 0.

    GIAI THICH THAM SO:
    - maze: mang 2 chieu (list cac list int 0 va 1).
    - start: tuple (r1, c1) toa do diem bat dau.
    - end: tuple (r2, c2) toa do diem ket thuc.

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) so buoc di chuyen it nhat, hoac -1 neu khong co duong.

    VI DU:
    - maze = [[0, 0, 0], [1, 1, 0], [0, 0, 0]], start = (0, 0), end = (2, 2) -> return 4

    GIAI THICH VI DU:
    - Duong di ngan nhat: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) gom 4 buoc.
    """
    pass  # <-- viet code cua ban o day


def solution_05(coins, amount):
    """
    DE BAI:
    Bai toan doi tien xu (Coin Change Problem).
    Cho mot mang cac menh gia dong xu khac nhau coins (moi dong xu co so luong khong gioi han)
    va mot so nguyen amount dai dien cho tong so tien can doi.
    Hay tim so luong dong xu IT NHAT can dung de doi duoc dung so tien amount do.
    Neu khong the tao ra dung so tien amount tu bat ky su ket hop dong xu nao, tra ve -1.
    Neu amount == 0, tra ve 0.

    GIAI THICH THAM SO:
    - coins: list cac so nguyen duong (menh gia xu).
    - amount: so nguyen khong am.

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) so dong xu it nhat, hoac -1.

    VI DU:
    - coins = [1, 2, 5], amount = 11 -> return 3

    GIAI THICH VI DU:
    - 11 = 5 + 5 + 1 (dung 3 dong xu).
    """
    pass  # <-- viet code cua ban o day


def solution_06(s):
    """
    DE BAI:
    Thiet ke bo phan tich va tinh toan bieu thuc toan hoc (Basic Calculator).
    Cho chuoi bieu thuc s chua cac so nguyen khong am, cac phep toan '+', '-', '*', '/',
    cac dau ngoac don '(', ')' va co the co khoang trang o bat ky dau.
    Quy tac:
    - Uu tien phep toan trong ngoac truoc.
    - Nhan '*' va chia '/' co do uu tien cao hon cong '+' va tru '-'.
    - Phep chia '/' la phep chia lay phan nguyen cat ve 0 (integer division truncating towards zero,
      vi du 14 / 3 = 4, -3 / 2 = -1).
    - KHONG duoc dung ham eval() co san cua Python.
    Tra ve gia tri so nguyen (int) ket qua cua bieu thuc.

    GIAI THICH THAM SO:
    - s: chuoi bieu thuc toan hoc (str).

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) ket qua tinh toan.

    VI DU:
    - s = "2 * (3 + 4)" -> return 14
    - s = "10 + 2 * 6" -> return 22

    GIAI THICH VI DU:
    - "2 * (3 + 4)" = 2 * 7 = 14.
    - "10 + 2 * 6" = 10 + 12 = 22.
    """
    pass  # <-- viet code cua ban o day


def solution_07(capacity, operations):
    """
    DE BAI:
    Mo phong bo nho dem LRU (Least Recently Used Cache).
    Bo nho dem co dung luong toi da capacity. Danh sach operations gom cac thao tac:
    - ["put", key, value]: Dat cap (key, value) vao cache. Neu key da ton tai, cap nhat gia tri moi.
      Neu cache da day, loai bo phan tu IT DUOC SU DUNG NHAT (LRU) truoc khi chen phan tu moi.
    - ["get", key]: Lay gia tri cua key trong cache. Neu key ton tai, tra ve gia tri do va danh dau
      key la vua duoc su dung; neu khong ton tai, tra ve -1.
    Ham solution_07 tra ve mot LIST chua tat ca cac ket qua cua cac lenh "get" theo dung thu tu thuc hien.

    GIAI THICH THAM SO:
    - capacity: so nguyen duong (dung luong toi da).
    - operations: list cac lenh ["put", key, val] hoac ["get", key].

    GIAI THICH GIA TRI RETURN:
    - List cac so nguyen (int) ket qua cua tat ca cac lenh "get".

    VI DU:
    - capacity = 2, operations = [["put", 1, 1], ["put", 2, 2], ["get", 1], ["put", 3, 3], ["get", 2], ["put", 4, 4], ["get", 1], ["get", 3], ["get", 4]]
      -> return [1, -1, -1, 3, 4]

    GIAI THICH VI DU:
    - get(1) -> 1
    - put(3,3) -> loai bo 2 -> get(2) -> -1
    - put(4,4) -> loai bo 1 -> get(1) -> -1, get(3) -> 3, get(4) -> 4.
    """
    pass  # <-- viet code cua ban o day


# ================= PHAN 3: DEBUGGING (Q8-Q10, 240 diem) ===================
# Cac ham duoi day CO LOI LOGIC. Sua lai cho dung theo mo ta trong docstring.

def solution_08(nums):
    """
    DE BAI:
    Tim do dai cua day con tang nghiem ngat dai nhat (Longest Increasing Subsequence - LIS) trong mang nums.
    Day con la day co the nhan duoc bang cach xoa mot so (hoac khong xoa) phan tu khoi mang ma khong
    thay doi thu tu cac phan tu con lai.
    Mang rong tra ve 0.

    GIAI THICH THAM SO:
    - nums: list cac so nguyen.

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) do dai day con tang dai nhat.

    VI DU:
    - nums = [10, 9, 2, 5, 3, 7, 101, 18] -> return 4

    GIAI THICH VI DU:
    - Day con tang dai nhat la [2, 3, 7, 101] (do dai 4).
    """
    if not nums:
        return 0
    dp = [0] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = dp[j] + 1
    return max(dp)


def solution_09(tasks, n):
    """
    DE BAI:
    Lap lich thuc thi cac tac vu CPU (Task Scheduler).
    Cho danh sach tasks chua cac ky tu in hoa A-Z dai dien cho cac tac vu CPU can thuc hien,
    va so nguyen khong am n dai dien cho thoi gian lam nguoi (cooling period).
    Moi khoang thoi gian CPU (interval), CPU co the thuc hien 1 tac vu hoac nghi (idle).
    Hai tac vu GIONG NHAU phai cach nhau it nhat n khoang thoi gian.
    Hay tim so khoang thoi gian IT NHAT can thiet de hoan thanh tat ca cac tac vu.

    GIAI THICH THAM SO:
    - tasks: list cac ky tu in hoa (str).
    - n: so nguyen >= 0 (cooling period).

    GIAI THICH GIA TRI RETURN:
    - So nguyen (int) tong so khoang thoi gian toi thieu.

    VI DU:
    - tasks = ["A", "A", "A", "B", "B", "B"], n = 2 -> return 8

    GIAI THICH VI DU:
    - A -> B -> idle -> A -> B -> idle -> A -> B (tong 8 khoang).
    """
    counts = Counter(tasks)
    max_freq = max(counts.values()) if counts else 0
    return (max_freq - 1) * (n + 1) + 1


def solution_10(n, logs):
    """
    DE BAI:
    Tinh tong thoi gian thuc thi doc quyen (Exclusive Time of Functions) cua tung ham
    trong he thong da luong don core.
    Co n ham duoc danh so tu 0 den n-1.
    Moi dong log co dinh dang "function_id:start|end:timestamp".
    - "start": ham bat dau thuc thi tai dau timestamp do.
    - "end": ham ket thuc thuc thi tai cuoi timestamp do (timestamp do duoc tinh tron vao thoi gian cua ham).
    Neu ham A goi ham B, thoi gian chay cua B khong duoc tinh vao thoi gian doc quyen cua A.
    Tra ve list co do dai n chua tong thoi gian doc quyen cua tung ham tu 0 den n-1.

    GIAI THICH THAM SO:
    - n: so luong ham (int).
    - logs: list cac chuoi log (str).

    GIAI THICH GIA TRI RETURN:
    - List int co do dai n.

    VI DU:
    - n = 2, logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"] -> return [3, 4]

    GIAI THICH VI DU:
    - Ham 0 chay o [0, 1] (2 dv) va [6] (1 dv) -> tong 3.
    - Ham 1 chay o [2, 3, 4, 5] (4 dv) -> tong 4.
    """
    res = [0] * n
    stack = []
    prev_time = 0
    for log in logs:
        fid, typ, time = log.split(":")
        fid, time = int(fid), int(time)
        if typ == "start":
            if stack:
                res[stack[-1]] += time - prev_time
            stack.append(fid)
            prev_time = time
        else:
            res[stack.pop()] += time - prev_time
            prev_time = time
    return res


# ==========================================================================
if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from _runner import chay
    chay("_cham_de4", "DE 4 - CHUNG KET BANG B (COS Pro Level 1) - 90 phut")
