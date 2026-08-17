# CHEATSHEET — Python Master Bảng B (COS Pro Level 2 → Level 1)

> Mục tiêu: mọi thứ trong file này phải **nhớ được mà không cần tra**. Trong phòng
> thi bạn có ~5 phút/câu — thời gian tra cứu là thời gian mất điểm.

---

## 0. Bản đồ đề thi

| | Vòng loại (Level 2) | Chung kết (Level 1) |
|---|---|---|
| Thời gian | 50 phút / 10 câu | 90 phút / 10 câu |
| Đọc hiểu code | **440đ** | 340đ |
| Design (viết hàm) | 280đ | **420đ** |
| Debugging | 280đ | 240đ |
| Nội dung | chuỗi, list, dict/set, thuật toán cơ bản | thiết kế thuật toán, CTDL, OOP, thuật toán nâng cao, tối ưu |

Ngưỡng chứng chỉ COS Pro: **≥ 600/1000**. Nghĩa là ở vòng loại, chỉ cần
**làm đúng toàn bộ phần Đọc hiểu (440) + 2 câu bất kỳ** là đã qua ngưỡng.
→ **Ưu tiên tuyệt đối: không được sai câu đọc hiểu nào.**

---

## 1. Chuỗi (string)

```python
s.strip() / .lstrip() / .rstrip()      # bỏ khoảng trắng (hoặc ký tự chỉ định)
s.split()          # tách theo mọi khoảng trắng, tự gộp nhiều dấu cách
s.split(",")       # tách theo dấu cụ thể — KHÔNG gộp, "a,,b" -> ["a","","b"]
s.split("<", 1)    # chỉ tách 1 lần → luôn ra đúng 2 phần
"".join(ds)        # ghép — nhanh hơn s += trong vòng lặp rất nhiều
s.replace(a, b)    s.find(x)  # -1 nếu không có     s.index(x)  # ValueError
s.startswith(p)    s.endswith(p)   s.count(x)
s.lower() .upper() .title() .capitalize()   # capitalize: hoa chữ đầu, THƯỜNG phần sau
s.isalpha() .isdigit() .isalnum() .isspace()
s[::-1]            # đảo chuỗi        s[a:b:c]  # lát cắt
ord("a") == 97     chr(97) == "a"     ord("A") == 65
f"{x:.2f}"  f"{x:>5}"  f"{x:05d}"  f"{x:,}"
```

**Chuỗi là immutable.** `s[0] = "X"` → `TypeError`. Muốn sửa: `s[0].upper() + s[1:]`
hoặc `list(s)` → sửa → `"".join(...)`.

Dịch ký tự vòng tròn (Caesar): `chr((ord(c) - 97 + k) % 26 + 97)`.

---

## 2. List

```python
a.append(x)   a.extend(b)   a.insert(i, x)
a.pop()       # cuối, O(1)          a.pop(i)   # theo CHỈ SỐ
a.remove(x)   # theo GIÁ TRỊ, xoá cái đầu tiên, ValueError nếu không có
a.sort()      # sửa tại chỗ, TRẢ VỀ None      sorted(a)  # trả list mới
a.reverse()   # tại chỗ, trả None             a[::-1]    # trả list mới
a.index(x)    a.count(x)    len(a)    sum(a)    min(a)    max(a)
b = a[:]  /  list(a)  /  a.copy()      # copy NÔNG (1 tầng)
import copy;  copy.deepcopy(a)         # copy SÂU (lồng nhau)
```

**Ma trận n×n:** `[[0] * m for _ in range(n)]`
**KHÔNG BAO GIỜ** `[[0] * m] * n` — n hàng đó là **cùng một list**.

**Không vừa duyệt vừa xoá.** Ba cách đúng:
```python
a = [x for x in a if x % 2]                  # tạo list mới (dễ nhất)
for i in range(len(a) - 1, -1, -1): ...      # duyệt ngược khi phải sửa tại chỗ
a[:] = [x for x in a if x % 2]               # sửa tại chỗ nhưng an toàn
```

Comprehension: `[f(x) for x in a if dk]`, `{k: v for ...}`, `{x for ...}`,
`(x for ...)` là generator (lười, không tạo list).

---

## 3. Dict & Set

```python
d.get(k, mac_dinh)          # KHÔNG lỗi khi thiếu khoá — dùng để đếm
d.setdefault(k, []).append(x)   # gom nhóm
d.items() .keys() .values()
d.update(other)             # trộn — chỉ trộn 1 tầng!
del d[k]     d.pop(k, None)
k in d                      # O(1)

s = set(a);  s1 | s2  (hợp)  s1 & s2  (giao)  s1 - s2  (hiệu)  s1 ^ s2
```

**Không xoá khoá khi đang duyệt dict** → `RuntimeError`. Làm:
```python
for k in [k for k, v in d.items() if not v]:
    del d[k]
```

Dict giữ **thứ tự chèn** (Python 3.7+). Khoá phải **hashable**: tuple được, list không.

---

## 4. Sắp xếp — chỗ mất điểm nhiều nhất

```python
sorted(a, key=lambda x: x[1])                 # theo trường
sorted(a, key=lambda x: (-x["diem"], x["ten"]))  # điểm GIẢM, tên TĂNG
sorted(d.items(), key=lambda p: (-p[1], p[0]))   # đếm giảm, khoá tăng
sorted(ds, key=lambda v: [int(p) for p in v.split(".")])  # sort "1.10.2"
sorted(a, reverse=True)
```
Mẹo: **số thì đảo dấu `-x`**, chuỗi thì không đảo được → tách 2 bước hoặc dùng
`sorted()` hai lần (sort ổn định: sort tiêu chí phụ trước, tiêu chí chính sau).

---

## 5. Thư viện chuẩn hay dùng

```python
from collections import Counter, defaultdict, deque
Counter(a).most_common(k)          # [(gt, số lần), ...]
defaultdict(list) / defaultdict(int)
deque()  → appendleft/popleft O(1) — dùng cho BFS & hàng đợi

import heapq
heapq.heappush(h, x);  heapq.heappop(h)    # min-heap
heapq.nlargest(k, a);  heapq.nsmallest(k, a)
# max-heap: đẩy -x vào

import bisect
bisect.bisect_left(a, x)   # vị trí chèn giữ thứ tự — nền của LIS O(n log n)

import math
math.ceil / floor / sqrt / gcd / inf / factorial / comb

from itertools import permutations, combinations, product, accumulate, groupby
```

---

## 6. Thuật toán phải thuộc mẫu

**Two pointer** — mảng đã sắp, tìm cặp / gộp khoảng:
```python
i = j = 0
while i < len(a) and j < len(b):
    ...;  i += 1 if a[i] < b[j] else 0
```

**Sliding window** — chuỗi con dài nhất thoả điều kiện:
```python
trai = 0
for phai, c in enumerate(s):
    while dk_bi_pham:
        trai += 1
    tot_nhat = max(tot_nhat, phai - trai + 1)
```

**Prefix sum** — tổng đoạn O(1): `pre[i+1] = pre[i] + a[i]` → `tổng(l..r) = pre[r+1] - pre[l]`

**Binary search:**
```python
lo, hi = 0, len(a) - 1
while lo <= hi:
    giua = (lo + hi) // 2
    if a[giua] == x: return giua
    if a[giua] < x: lo = giua + 1
    else: hi = giua - 1
return -1
```

**BFS lưới** (đường đi ngắn nhất, số bước):
```python
q = deque([(0, 0, 0)]);  tham = {(0, 0)}
while q:
    r, c, buoc = q.popleft()
    for dr, dc in ((1,0), (-1,0), (0,1), (0,-1)):
        ...
```

**DP 1 chiều** (coin change / LIS / nhà cướp):
```python
dp = [0] + [float("inf")] * tong
for t in range(1, tong + 1):
    for mg in menh_gia:
        if mg <= t: dp[t] = min(dp[t], dp[t - mg] + 1)
```

**Greedy xếp lịch:** sắp theo **thời điểm kết thúc**, lấy tham lam.
**Gộp khoảng:** sắp theo điểm bắt đầu, so `dau <= ket_qua[-1][1]`.

---

## 7. OOP cơ bản (chỉ cần đến mức này cho Level 1)

```python
class Kho:
    def __init__(self):        # KHÔNG để mutable làm thuộc tính lớp
        self._hang = {}
    def nhap(self, ten, sl): ...
    def __str__(self): return f"Kho({len(self._hang)} mặt hàng)"
    def __len__(self): return len(self._hang)
    def __eq__(self, other): return self._hang == other._hang
```
Kế thừa: `class KhoLanh(Kho): def __init__(self): super().__init__()`

---

## 8. 15 cái bẫy Python — đọc lại ngay trước khi thi

| # | Bẫy | Đúng |
|---|---|---|
| 1 | `range(1, len(a))` bỏ mất phần tử đầu | `range(len(a))` |
| 2 | `def f(a, ds=[])` — mặc định mutable bị **chia sẻ giữa các lần gọi** | `ds=None` rồi `if ds is None: ds = []` |
| 3 | Vừa `for x in a` vừa `a.remove(x)` | duyệt ngược, hoặc tạo list mới |
| 4 | `is` để so sánh giá trị (đúng với int nhỏ, **sai** với >256) | `==` |
| 5 | `a[len(a) / 2]` → chỉ số float → `TypeError` | `//` |
| 6 | `[[0]*n]*n` → n tham chiếu chung | `[[0]*n for _ in range(n)]` |
| 7 | `del d[k]` khi đang duyệt dict | gom khoá trước rồi xoá |
| 8 | `s[0] = "X"` — chuỗi immutable | `s[0].upper() + s[1:]` |
| 9 | `ket_qua = 0` rồi tìm max (sai khi toàn số âm) | khởi tạo `a[0]` hoặc `-inf` |
| 10 | `return a.sort()` → **None** | `sorted(a)` |
| 11 | `lambda x: x * i` trong vòng lặp — late binding | `lambda x, i=i: x * i` |
| 12 | memo `={}` dùng chung ngoài ý muốn / thiếu điều kiện dừng | `memo=None` + base case |
| 13 | `0.1 + 0.2 == 0.3` → False | `abs(a - b) < 1e-9` |
| 14 | `a.remove(i)` khi định xoá theo **chỉ số** | `a.pop(i)` |
| 15 | Gán biến toàn cục trong hàm → `UnboundLocalError` | `global X` |

---

## 9. Chiến thuật phòng thi (50 phút / 10 câu)

1. **Phút 0–2:** lướt hết 10 câu, đánh dấu câu dễ. Không đọc kỹ, chỉ phân loại.
2. **Làm Đọc hiểu trước** — 440đ, mỗi câu ~90 giây, gần như là điểm cho không.
3. **Debug thứ hai** — chạy thử bằng đầu với 1 test nhỏ trước khi sửa. 90% lỗi
   nằm trong bảng ở mục 8.
4. **Design cuối cùng** — viết bản chạy đúng đã (kể cả O(n²)), tối ưu sau nếu còn giờ.
5. **Luôn xử lý biên**: rỗng, 1 phần tử, số âm, số 0, trùng lặp, k > len(a).
   Test biên là chỗ mất điểm nhiều nhất khi code "trông có vẻ đúng".
6. **Quá 6 phút một câu → bỏ, quay lại sau.** Một câu 93đ không đáng đổi lấy hai câu khác.
