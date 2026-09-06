# 30 MẪU CODE PYTHON KINH ĐIỂN PHẢI THUỘC LÒNG — BẢNG B (COS PRO)

> **Mục tiêu:** 30 đoạn code mẫu dưới đây bao phủ hơn 90% các dạng bài thuật toán và xử lý dữ liệu trong đề thi COS Pro Level 2 (Vòng loại) và Level 1 (Chung kết). Mỗi mẫu code được thiết kế tối giản (<= 15 dòng), chuẩn xác tuyệt đối và có thể gõ lại từ trí nhớ trong vòng 60 giây.

---

### Mẫu 01: Hai con trỏ tìm cặp tổng bằng Target (Two Pointers)
- **Khi nào dùng:** Mảng đã sắp xếp tăng dần, cần tìm 2 vị trí có tổng giá trị đúng bằng `target`.
```python
def two_sum_sorted(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target:
            return l, r
        elif s < target:
            l += 1
        else:
            r -= 1
    return -1, -1
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(1).

---

### Mẫu 02: Cửa sổ trượt độ dài cố định K (Fixed Sliding Window)
- **Khi nào dùng:** Tìm tổng lớn nhất của dãy con liên tiếp gồm đúng K phần tử.
```python
def max_sum_subarray(arr, k):
    if len(arr) < k: return 0
    cur = max_s = sum(arr[:k])
    for i in range(k, len(arr)):
        cur += arr[i] - arr[i - k]
        max_s = max(max_s, cur)
    return max_s
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(1).

---

### Mẫu 03: Cửa sổ trượt độ dài biến thiên (Variable Sliding Window)
- **Khi nào dùng:** Tìm độ dài chuỗi con dài nhất không chứa ký tự lặp lại.
```python
def length_of_longest_substring(s):
    seen, l, ans = {}, 0, 0
    for r, c in enumerate(s):
        if c in seen and seen[c] >= l:
            l = seen[c] + 1
        seen[c] = r
        ans = max(ans, r - l + 1)
    return ans
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(min(N, số ký tự phân biệt)).

---

### Mẫu 04: Mảng tiền tố 1 chiều (1D Prefix Sum)
- **Khi nào dùng:** Tính tổng các phần tử liên tiếp từ chỉ số L đến R trong thời gian O(1) sau khi tiền xử lý.
```python
class PrefixSum1D:
    def __init__(self, arr):
        self.p = [0] * (len(arr) + 1)
        for i, x in enumerate(arr):
            self.p[i + 1] = self.p[i] + x

    def query(self, l, r):
        return self.p[r + 1] - self.p[l]
```
- **Độ phức tạp:** Khởi tạo: O(N), Mỗi truy vấn: O(1), Bộ nhớ phụ: O(N).

---

### Mẫu 05: Mảng tiền tố 2 chiều (2D Prefix Sum)
- **Khi nào dùng:** Tính tổng hình chữ nhật con từ (r_1, c_1) đến (r_2, c_2) trên ma trận trong O(1).
```python
class PrefixSum2D:
    def __init__(self, mat):
        R, C = len(mat), len(mat[0])
        self.p = [[0] * (C + 1) for _ in range(R + 1)]
        for r in range(R):
            for c in range(C):
                self.p[r+1][c+1] = mat[r][c] + self.p[r][c+1] + self.p[r+1][c] - self.p[r][c]

    def query(self, r1, c1, r2, c2):
        return self.p[r2+1][c2+1] - self.p[r1][c2+1] - self.p[r2+1][c1] + self.p[r1][c1]
```
- **Độ phức tạp:** Khởi tạo: O(R x C), Mỗi truy vấn: O(1), Bộ nhớ phụ: O(R x C).

---

### Mẫu 06: Tìm kiếm nhị phân cơ bản (Binary Search Value)
- **Khi nào dùng:** Tìm vị trí của phần tử `target` trong mảng đã sắp xếp tăng dần.
```python
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        m = (l + r) // 2
        if arr[m] == target: return m
        elif arr[m] < target: l = m + 1
        else: r = m - 1
    return -1
```
- **Độ phức tạp:** Thời gian: O(log N), Bộ nhớ phụ: O(1).

---

### Mẫu 07: Chặt nhị phân kết quả (Binary Search the Answer)
- **Khi nào dùng:** Tìm giá trị nhỏ nhất/lớn nhất thỏa mãn điều kiện kiểm tra đơn điệu (bài toán đóng gói hàng, vận chuyển).
```python
def min_ship_capacity(weights, days):
    l, r, ans = max(weights), sum(weights), sum(weights)
    while l <= r:
        m, d, cur = (l + r) // 2, 1, 0
        for w in weights:
            if cur + w > m: d += 1; cur = 0
            cur += w
        if d <= days: ans = m; r = m - 1
        else: l = m + 1
    return ans
```
- **Độ phức tạp:** Thời gian: O(N log(tong W)), Bộ nhớ phụ: O(1).

---

### Mẫu 08: Hợp nhất các khoảng thời gian (Merge Intervals)
- **Khi nào dùng:** Gộp các khoảng thời gian [start, end] bị trùng lặp hoặc chạm nhau thành danh sách khoảng tối giản.
```python
def merge_intervals(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    res = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= res[-1][1]:
            res[-1][1] = max(res[-1][1], e)
        else:
            res.append([s, e])
    return res
```
- **Độ phức tạp:** Thời gian: O(N log N), Bộ nhớ phụ: O(N).

---

### Mẫu 09: Kiểm tra dấu ngoặc hợp lệ bằng Stack (Valid Parentheses)
- **Khi nào dùng:** Kiểm tra chuỗi chứa các cặp ngoặc `()`, `{}`, `[]` có đóng mở đúng quy cách hay không.
```python
def is_valid_parentheses(s):
    st, mp = [], {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in mp:
            if not st or st.pop() != mp[c]: return False
        else:
            st.append(c)
    return len(st) == 0
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(N).

---

### Mẫu 10: Đánh giá biểu thức hậu tố RPN bằng Stack (Postfix Evaluation)
- **Khi nào dùng:** Tính toán kết quả của biểu thức số học viết theo ký pháp Ba Lan ngược (Reverse Polish Notation).
```python
def eval_rpn(tokens):
    st = []
    for t in tokens:
        if t in '+-*/':
            b, a = st.pop(), st.pop()
            if t == '+': st.append(a + b)
            elif t == '-': st.append(a - b)
            elif t == '*': st.append(a * b)
            elif t == '/': st.append(int(a / b))
        else:
            st.append(int(t))
    return st[0]
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(N).

---

### Mẫu 11: Monotonic Stack tìm phần tử lớn hơn tiếp theo (Next Greater Element)
- **Khi nào dùng:** Tìm phần tử đầu tiên bên phải có giá trị lớn hơn phần tử hiện tại cho mọi vị trí trong mảng.
```python
def next_greater_elements(arr):
    res, st = [-1] * len(arr), []
    for i, x in enumerate(arr):
        while st and arr[st[-1]] < x:
            res[st.pop()] = x
        st.append(i)
    return res
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(N).

---

### Mẫu 12: BFS tìm khoảng cách ngắn nhất trên lưới (Grid BFS)
- **Khi nào dùng:** Tìm số bước ít nhất từ góc trên-trái (0,0) đến góc dưới-phải (R-1, C-1) trong ma trận mê cung.
```python
from collections import deque

def shortest_path_grid(grid):
    R, C = len(grid), len(grid[0])
    q, vis = deque([(0, 0, 1)]), {(0, 0)}
    while q:
        r, c, d = q.popleft()
        if (r, c) == (R - 1, C - 1): return d
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 0 and (nr, nc) not in vis:
                vis.add((nr, nc)); q.append((nr, nc, d + 1))
    return -1
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ phụ: O(R x C).

---

### Mẫu 13: DFS đếm số vùng liên thông / số đảo (Grid DFS Island Count)
- **Khi nào dùng:** Đếm số lượng thành phần liên thông gồm các ô số 1 liền kề trên ma trận nhị phân.
```python
def count_islands(grid):
    R, C, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if not (0 <= r < R and 0 <= c < C and grid[r][c] == 1): return
        grid[r][c] = 0
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]: dfs(r + dr, c + dc)
    for r in range(R):
        for c in range(C):
            if grid[r][c] == 1: count += 1; dfs(r, c)
    return count
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ Call Stack: O(R x C).

---

### Mẫu 14: BFS duyệt đồ thị theo danh sách kề (Graph BFS)
- **Khi nào dùng:** Duyệt qua tất cả các đỉnh của đồ thị vô hướng/có hướng từ một đỉnh nguồn `start`.
```python
from collections import deque

def bfs_graph(adj, start):
    q, vis, order = deque([start]), {start}, []
    while q:
        u = q.popleft()
        order.append(u)
        for v in adj.get(u, []):
            if v not in vis:
                vis.add(v); q.append(v)
    return order
```
- **Độ phức tạp:** Thời gian: O(V + E), Bộ nhớ phụ: O(V).

---

### Mẫu 15: DP 1D: Đổi số lượng tiền xu ít nhất (Coin Change)
- **Khi nào dùng:** Tìm số lượng đồng xu ít nhất để tạo thành số tiền `amount`.
```python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if a >= c:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
```
- **Độ phức tạp:** Thời gian: O(amount x len(coins)), Bộ nhớ phụ: O(amount).

---

### Mẫu 16: DP 1D: Dãy con tăng dài nhất O(N log N) (LIS)
- **Khi nào dùng:** Tìm độ dài của dãy con tăng nghiêm ngặt dài nhất trong mảng N phần tử lớn.
```python
import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails): tails.append(x)
        else: tails[idx] = x
    return len(tails)
```
- **Độ phức tạp:** Thời gian: O(N log N), Bộ nhớ phụ: O(N).

---

### Mẫu 17: DP 1D: Nhà cướp / Không chọn 2 phần tử kề nhau (House Robber)
- **Khi nào dùng:** Chọn tập hợp các phần tử sao cho tổng giá trị lớn nhất nhưng không có 2 phần tử nào đứng cạnh nhau.
```python
def rob(nums):
    rob1, rob2 = 0, 0
    for n in nums:
        rob1, rob2 = rob2, max(rob1 + n, rob2)
    return rob2
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(1).

---

### Mẫu 18: DP 2D: Đường đi có tổng nhỏ nhất trên lưới (Min Path Sum)
- **Khi nào dùng:** Tìm đường đi từ góc trên-trái (0,0) đến góc dưới-phải (R-1, C-1) chỉ đi sang phải hoặc xuống dưới sao cho tổng nhỏ nhất.
```python
def min_path_sum(grid):
    R, C = len(grid), len(grid[0])
    dp = [float('inf')] * (C + 1)
    dp[1] = 0
    for r in range(R):
        for c in range(C):
            dp[c + 1] = min(dp[c + 1], dp[c]) + grid[r][c]
    return dp[C]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ phụ: O(C).

---

### Mẫu 19: Top-K phần tử lớn nhất / xuất hiện nhiều nhất bằng Heap
- **Khi nào dùng:** Tìm K phần tử có tần suất xuất hiện cao nhất trong mảng.
```python
from collections import Counter
import heapq

def top_k_frequent(nums, k):
    counts = Counter(nums)
    return [item for item, _ in heapq.nlargest(k, counts.items(), key=lambda x: x[1])]
```
- **Độ phức tạp:** Thời gian: O(N log K), Bộ nhớ phụ: O(N).

---

### Mẫu 20: Hàng đợi ưu tiên Max-Heap bằng giá trị âm (Max-Heap)
- **Khi nào dùng:** Cần liên tục thêm phần tử và lấy ra phần tử LỚN NHẤT trong thời gian O(log N).
```python
import heapq

class MaxHeap:
    def __init__(self): self.h = []
    def push(self, val): heapq.heappush(self.h, -val)
    def pop(self): return -heapq.heappop(self.h)
    def peek(self): return -self.h[0]
```
- **Độ phức tạp:** `push`/`pop`: O(log N), `peek`: O(1), Bộ nhớ phụ: O(N).

---

### Mẫu 21: Sàng số nguyên tố Eratosthenes (Sieve of Eratosthenes)
- **Khi nào dùng:** Tìm tất cả các số nguyên tố nhỏ hơn hoặc bằng N (N <= 10^7).
```python
def sieve(n):
    p = [True] * (n + 1)
    p[0] = p[1] = False
    for i in range(2, int(n**0.5) + 1):
        if p[i]:
            for j in range(i * i, n + 1, i): p[j] = False
    return [i for i, prime in enumerate(p) if prime]
```
- **Độ phức tạp:** Thời gian: O(N log log N), Bộ nhớ phụ: O(N).

---

### Mẫu 22: Phân tích thừa số nguyên tố (Prime Factorization)
- **Khi nào dùng:** Tách một số nguyên dương N thành tích các thừa số nguyên tố.
```python
def prime_factors(n):
    factors, d = [], 2
    while d * d <= n:
        while n % d == 0:
            factors.append(d); n //= d
        d += 1
    if n > 1: factors.append(n)
    return factors
```
- **Độ phức tạp:** Thời gian: O(can(N)), Bộ nhớ phụ: O(log N).

---

### Mẫu 23: Thuật toán Euclid tìm GCD và LCM
- **Khi nào dùng:** Tìm ước chung lớn nhất (GCD) và bội chung nhỏ nhất (LCM) của 2 số nguyên.
```python
def gcd_lcm(a, b):
    def gcd(x, y):
        while y: x, y = y, x % y
        return x
    g = gcd(a, b)
    return g, (a * b) // g
```
- **Độ phức tạp:** Thời gian: O(log(min(a, b))), Bộ nhớ phụ: O(1).

---

### Mẫu 24: Xoay ma trận 90 độ cùng chiều kim đồng hồ
- **Khi nào dùng:** Biến đổi hình ảnh, xoay ma trận bảng game 90 độ xuôi.
```python
def rotate_matrix_90(mat):
    return [list(r) for r in zip(*mat[::-1])]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ phụ: O(R x C).

---

### Mẫu 25: Duyệt ma trận theo hình xoắn ốc (Spiral Order)
- **Khi nào dùng:** Đọc các phần tử của ma trận theo thứ tự vòng xoắn ốc từ ngoài vào trong.
```python
def spiral_order(mat):
    res = []
    matrix = [row[:] for row in mat]
    while matrix:
        res += matrix.pop(0)
        if matrix and matrix[0]:
            matrix = [list(r) for r in zip(*matrix)][::-1]
    return res
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ phụ: O(R x C).

---

### Mẫu 26: Sắp xếp danh sách đa tiêu chí (Custom Multi-key Sort)
- **Khi nào dùng:** Sắp xếp danh sách bản ghi theo: điểm GIẢM DẦN, số lỗi TĂNG DẦN, tên TĂNG DẦN theo từ điển.
```python
def sort_candidates(records):
    # records: [(ten, diem, so_loi), ...]
    return sorted(records, key=lambda x: (-x[1], x[2], x[0]))
```
- **Độ phức tạp:** Thời gian: O(N log N), Bộ nhớ phụ: O(N).

---

### Mẫu 27: Gom nhóm dữ liệu bằng collections.defaultdict
- **Khi nào dùng:** Gom các giá trị theo khóa danh mục hoặc độ dài mà không cần kiểm tra khóa tồn tại.
```python
from collections import defaultdict

def group_by_key(pairs):
    groups = defaultdict(list)
    for k, v in pairs: groups[k].append(v)
    return dict(groups)
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(N).

---

### Mẫu 28: Đếm tần suất và lấy Top phần tử bằng Counter
- **Khi nào dùng:** Thống kê ký tự hoặc từ xuất hiện nhiều nhất trong chuỗi/mảng.
```python
from collections import Counter

def most_frequent(arr, k=1):
    c = Counter(arr)
    return c.most_common(k)
```
- **Độ phức tạp:** Thời gian: O(N + U log K) với U là số phần tử phân biệt, Bộ nhớ phụ: O(U).

---

### Mẫu 29: Dịch chuyển ký tự vòng tròn Caesar Cipher
- **Khi nào dùng:** Mã hóa / giải mã văn bản dịch chuyển chữ cái theo khóa K (bỏ qua ký tự không phải chữ).
```python
def caesar_cipher(s, k):
    res = []
    for c in s:
        if 'a' <= c <= 'z': res.append(chr((ord(c) - 97 + k) % 26 + 97))
        elif 'A' <= c <= 'Z': res.append(chr((ord(c) - 65 + k) % 26 + 65))
        else: res.append(c)
    return ''.join(res)
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ phụ: O(N).

---

### Mẫu 30: Lớp đối tượng tùy biến có so sánh `__lt__` cho Heap và Sort
- **Khi nào dùng:** Đưa đối tượng tùy biến vào `heapq` hoặc sắp xếp danh sách đối tượng theo độ ưu tiên phức tạp.
```python
class Task:
    def __init__(self, name, priority):
        self.name, self.priority = name, priority

    def __lt__(self, other):
        if self.priority != other.priority:
            return self.priority > other.priority  # Ưu tiên cao hơn đứng trước
        return self.name < other.name
```
- **Độ phức tạp:** Mỗi phép so sánh: O(1), Bộ nhớ phụ: O(1).
