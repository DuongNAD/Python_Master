# 50 CÁI BẪY PYTHON KINH ĐIỂN TRONG ĐỀ THI COS PRO — BẢNG B

> **Tổng hợp 50 bẫy logic, cú pháp và cơ chế ngầm của Python 3** thường xuyên xuất hiện trong các bài thi COS Pro Level 2 (Vòng loại) và Level 1 (Chung kết). Thuộc lòng 50 bẫy này giúp bạn đạt trọn vẹn điểm phần Đọc hiểu code (440đ / 340đ) và phần Debugging (280đ / 240đ).

---

### Bẫy 01: "Chỉ lấy phần nguyên" — `int()` vs `round()`
- **Đoạn code SAI:**
```python
def tinh_diem(tong_diem, so_mon):
    # Đề bài: "Nếu điểm trung bình là số thập phân, chỉ return phần số nguyên"
    return round(tong_diem / so_mon)
```
- **Kết quả sai thực tế:** `tinh_diem(161, 2)` trả về `81` (vì 161/2 = 80.5 bị làm tròn lên 81) thay vì `80`.
- **Đoạn code ĐÚNG:**
```python
def tinh_diem(tong_diem, so_mon):
    return tong_diem // so_mon  # hoặc int(tong_diem / so_mon)
```
- **Cách nhớ:** Cứ thấy chữ "chỉ lấy phần nguyên / cắt bỏ thập phân" -> dùng `int()` hoặc `//`. Chỉ dùng `round()` khi đề ghi rõ "làm tròn số học".

---

### Bẫy 02: Loại bỏ Max/Min khi có nhiều phần tử trùng nhau
- **Đoạn code SAI:**
```python
def diem_trung_tuyen(scores):
    # Đề bài: "Bỏ 1 điểm cao nhất và 1 điểm thấp nhất của giám khảo"
    max_val = max(scores)
    min_val = min(scores)
    con_lai = [x for x in scores if x != max_val and x != min_val]
    return sum(con_lai) // len(con_lai)
```
- **Kết quả sai thực tế:** Với `scores = [90, 90, 80, 70]`, list comprehension xóa TẤT CẢ các số 90 -> `con_lai = [80]` (sai hoàn toàn). Với `scores = [85, 85, 85, 85]`, `con_lai = []` -> `ZeroDivisionError`.
- **Đoạn code ĐÚNG:**
```python
def diem_trung_tuyen(scores):
    con_lai = sorted(scores)[1:-1] # Sắp xếp và bỏ đúng phần tử đầu và cuối
    return sum(con_lai) // len(con_lai)
```
- **Cách nhớ:** Muốn bỏ đúng 1 phần tử cực trị, sắp xếp rồi cắt lát `sorted(a)[1:-1]` hoặc dùng `scores.remove(min(scores))` và `scores.remove(max(scores))`.

---

### Bẫy 03: Phép chia lấy dư (%) với số âm trong Python
- **Đoạn code SAI:**
```python
def toa_do_truoc(vi_tri, buoc, n):
    # Lùi bước trên vòng tròn n phần tử, tưởng rằng % số âm ra số âm
    return (vi_tri - buoc) % n
```
- **Kết quả sai thực tế:** Trong C/C++/Java `-7 % 3 = -1`, nhưng trong Python `-7 % 3 = 2`. Nếu người viết code giả định kết quả âm để so sánh `< 0` thì nhánh điều kiện sẽ không bao giờ chạy.
- **Đoạn code ĐÚNG:**
```python
vi_tri = 1
buoc = 3
n = 5
# Trong Python (vi_tri - buoc) % n LUÔN RA SỐ DƯ DƯƠNG [0..n-1], đây là thiết kế chuẩn
vi_tri_moi = (vi_tri - buoc) % n
print(vi_tri_moi)  # (1 - 3) % 5 = 3
```
- **Cách nhớ:** Trong Python, `a % b` luôn cùng dấu với số chia `b`. Khi b > 0, kết quả của `%` luôn >= 0.

---

### Bẫy 04: Phép chia lấy phần nguyên (//) với số âm
- **Đoạn code SAI:**
```python
def chia_lay_nguyen(a, b):
    # Cần cắt bỏ phần thập phân của phép chia -7 / 3
    return a // b
```
- **Kết quả sai thực tế:** `-7 // 3` trả về `-3` (làm tròn xuống số nguyên nhỏ hơn) thay vì `-2`.
- **Đoạn code ĐÚNG:**
```python
def chia_lay_nguyen(a, b):
    return int(a / b)  # int() cắt cụt về phía 0: int(-2.333) -> -2
```
- **Cách nhớ:** `//` là làm tròn xuống (floor), `int()` là cắt cụt về 0 (truncation). Với số âm, `//` làm giảm giá trị đi 1 đơn vị.

---

### Bẫy 05: Khởi tạo ma trận 2D bằng phép nhân `[[0] * n] * m`
- **Đoạn code SAI:**
```python
board = [[0] * 3] * 3
board[0][0] = 1
```
- **Kết quả sai thực tế:** `board` trở thành `[[1, 0, 0], [1, 0, 0], [1, 0, 0]]` vì cả 3 hàng cùng trỏ vào một danh sách.
- **Đoạn code ĐÚNG:**
```python
board = [[0] * 3 for _ in range(3)]
board[0][0] = 1  # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
```
- **Cách nhớ:** Khởi tạo danh sách lồng nhau LUÔN LUÔN dùng List Comprehension với `for _ in range(...)`.

---

### Bẫy 06: Tham số mặc định dạng biến đổi (Mutable Default Argument)
- **Đoạn code SAI:**
```python
def append_item(val, container=[]):
    container.append(val)
    return container
```
- **Kết quả sai thực tế:** Gọi `append_item(1)` ra `[1]`. Gọi tiếp `append_item(2)` ra `[1, 2]` thay vì `[2]`.
- **Đoạn code ĐÚNG:**
```python
def append_item(val, container=None):
    if container is None:
        container = []
    container.append(val)
    return container
```
- **Cách nhớ:** Không bao giờ để `[]`, `{}`, `set()` làm giá trị mặc định ở khai báo hàm. Luôn dùng `=None`.

---

### Bẫy 07: Gọi `remove()` trong khi đang duyệt `for x in list`
- **Đoạn code SAI:**
```python
nums = [2, 2, 2, 3]
for x in nums:
    if x == 2:
        nums.remove(x)
```
- **Kết quả sai thực tế:** `nums` trở thành `[2, 3]`. Con trỏ duyệt bị nhảy qua một số 2 do danh sách bị co lại.
- **Đoạn code ĐÚNG:**
```python
nums = [2, 2, 2, 3]
nums = [x for x in nums if x != 2] # Tạo list mới
# Hoặc sửa tại chỗ: nums[:] = [x for x in nums if x != 2]
print(nums)  # [3]
```
- **Cách nhớ:** Không bao giờ thêm/xóa phần tử của danh sách trong vòng lặp duyệt chính nó. Dùng List Comprehension.

---

### Bẫy 08: So sánh trực tiếp số thực dấu phẩy động (`float`)
- **Đoạn code SAI:**
```python
if 0.1 + 0.2 == 0.3:
    print("Bằng nhau")
```
- **Kết quả sai thực tế:** Không in gì cả vì `0.1 + 0.2` bằng `0.30000000000000004` trong chuẩn nhị phân IEEE 754.
- **Đoạn code ĐÚNG:**
```python
import math
if math.isclose(0.1 + 0.2, 0.3, abs_tol=1e-9):
    print("Bằng nhau")
```
- **Cách nhớ:** So sánh `float` luôn dùng `abs(a - b) < 1e-9` hoặc `math.isclose(a, b)`.

---

### Bẫy 09: Dùng dấu trừ `-` để đảo thứ tự sắp xếp chuỗi
- **Đoạn code SAI:**
```python
# Yêu cầu: Điểm giảm dần, Tên giảm dần
data = [("Bình", 90), ("An", 90)]
data.sort(key=lambda x: (-x[1], -x[0]))
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: bad operand type for unary -: 'str'`.
- **Đoạn code ĐÚNG:**
```python
data = [("Bình", 90), ("An", 90)]
# Timsort là sắp xếp ổn định: Sắp tiêu chí phụ trước, tiêu chí chính sau
data.sort(key=lambda x: x[0], reverse=True) # Tên giảm dần
data.sort(key=lambda x: x[1], reverse=True) # Điểm giảm dần
print(data)  # [('Bình', 90), ('An', 90)]
```
- **Cách nhớ:** Dấu `-` chỉ dùng được cho số. Với chuỗi ngược chiều, sắp xếp 2 lần theo thứ tự ưu tiên từ thấp đến cao.

---

### Bẫy 10: Dùng toán tử `is` thay vì `==` để so sánh giá trị
- **Đoạn code SAI:**
```python
a = 1000
b = 1000
if a is b:
    print("Khớp")
```
- **Kết quả sai thực tế:** Không in gì cả. CPython chỉ cache số nguyên từ -5 đến 256. Với số > 256, `is` trả về `False`.
- **Đoạn code ĐÚNG:**
```python
a = 1000
b = 1000
if a == b:
    print("Khớp")
```
- **Cách nhớ:** `==` so sánh **giá trị**; `is` so sánh **địa chỉ vùng nhớ**. `is` chỉ dùng cho `None`, `True`, `False`.

---

### Bẫy 11: Sao chép nông `a.copy()` trên mảng 2 chiều
- **Đoạn code SAI:**
```python
matrix = [[1, 2], [3, 4]]
backup = matrix.copy() # hoặc matrix[:]
backup[0][0] = 99
```
- **Kết quả sai thực tế:** `matrix[0][0]` cũng bị đổi thành `99`.
- **Đoạn code ĐÚNG:**
```python
import copy
matrix = [[1, 2], [3, 4]]
backup = copy.deepcopy(matrix)
# Hoặc: backup = [row[:] for row in matrix]
backup[0][0] = 99
print(matrix[0][0])  # 1 (không bị thay đổi)
```
- **Cách nhớ:** Cấu trúc có cấp lồng nhau từ 2 tầng trở lên bắt buộc dùng `copy.deepcopy()` hoặc comprehension sao chép từng hàng.

---

### Bẫy 12: Rò rỉ biến vòng lặp `for` sau khi lặp xong
- **Đoạn code SAI:**
```python
i = 100
for i in range(5):
    pass
print(i)
```
- **Kết quả sai thực tế:** In ra `4` chứ không phải `100`. Biến `i` ban đầu đã bị vòng lặp ghi đè.
- **Đoạn code ĐÚNG:**
```python
i = 100
for idx in range(5):
    pass
print(i) # Vẫn là 100
```
- **Cách nhớ:** Biến chạy trong vòng `for` không có phạm vi riêng biệt (không block-scoped), nó ghi đè lên biến cùng tên ở scope hàm.

---

### Bẫy 13: Gán ký tự trực tiếp vào chuỗi (String Immutability)
- **Đoạn code SAI:**
```python
s = "hello"
s[0] = "H"
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: 'str' object does not support item assignment`.
- **Đoạn code ĐÚNG:**
```python
s = "hello"
s = "H" + s[1:]
print(s)  # "Hello"
```
- **Cách nhớ:** Chuỗi trong Python là bất biến. Muốn sửa ký tự, cắt ghép chuỗi hoặc chuyển sang `list(s)` rồi `join`.

---

### Bẫy 14: Thứ tự ưu tiên toán tử với `not` và `==`
- **Đoạn code SAI:**
```python
x = 5
if not x == 5:
    print("Khác 5")
```
- **Kết quả sai thực tế:** Toán tử `==` có độ ưu tiên cao hơn `not`, nên biểu thức được hiểu là `not (x == 5)`. Mặc dù biểu thức này đúng logic, nhưng viết `if not x in [1, 2]:` sẽ dễ bị hiểu nhầm. Nguy hiểm nhất là `if not a is None` bị phân tích thành `if (not a) is None` (sai).
- **Đoạn code ĐÚNG:**
```python
x = 5
a = 10
if x != 5:
    print("Khác 5")
if a is not None:
    pass
```
- **Cách nhớ:** Luôn dùng `!=`, `is not`, `not in` thay vì đảo ngữ bằng `not`.

---

### Bẫy 15: Toán tử `and` / `or` trả về giá trị toán hạng thay vì kiểu `bool`
- **Đoạn code SAI:**
```python
val = 0 or "Default"
if val is True:
    print("Là True")
```
- **Kết quả sai thực tế:** `val` nhận giá trị `"Default"` (kiểu `str`), do đó `val is True` trả về `False`.
- **Đoạn code ĐÚNG:**
```python
val = 0 or "Default"
if bool(val):
    print("Truthy")
```
- **Cách nhớ:** Trong Python, `a or b` trả về `a` nếu `a` truthy, ngược lại trả về `b`. `a and b` trả về `a` nếu `a` falsy, ngược lại trả về `b`.

---

### Bẫy 16: Phép chia `/` luôn trả về kiểu `float` trong Python 3
- **Đoạn code SAI:**
```python
def lay_phan_tu_giua(arr):
    mid = len(arr) / 2
    return arr[mid]
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: list indices must be integers or slices, not float` (ví dụ `arr[2.0]`).
- **Đoạn code ĐÚNG:**
```python
def lay_phan_tu_giua(arr):
    mid = len(arr) // 2
    return arr[mid]
```
- **Cách nhớ:** Chỉ số mảng bắt buộc là số nguyên `int`. Tính chỉ số luôn dùng `//`.

---

### Bẫy 17: Gán hoặc trả về kết quả của `list.sort()`, `list.reverse()`
- **Đoạn code SAI:**
```python
def lay_ba_so_nho_nhat(arr):
    return arr.sort()[:3]
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: 'NoneType' object is not subscriptable` vì `arr.sort()` trả về `None`.
- **Đoạn code ĐÚNG:**
```python
def lay_ba_so_nho_nhat(arr):
    return sorted(arr)[:3]
```
- **Cách nhớ:** Các phương thức sửa tại chỗ (`sort`, `reverse`, `append`, `extend`, `insert`) đều trả về `None`. Hàm trả về danh sách mới là `sorted()`, `reversed()`.

---

### Bẫy 18: Late Binding trong Closure / Lambda
- **Đoạn code SAI:**
```python
funcs = [lambda x: x * i for i in range(3)]
print([f(2) for f in funcs])
```
- **Kết quả sai thực tế:** In ra `[4, 4, 4]` thay vì `[0, 2, 4]` vì biến `i` được tra cứu lúc hàm chạy (khi `i = 2`).
- **Đoạn code ĐÚNG:**
```python
funcs = [lambda x, i=i: x * i for i in range(3)] # Đóng băng giá trị i vào default arg
print([f(2) for f in funcs]) # [0, 2, 4]
```
- **Cách nhớ:** Khi tạo lambda/hàm trong vòng lặp, luôn đóng băng biến bằng tham số mặc định: `lambda x, i=i: ...`.

---

### Bẫy 19: Xóa khóa của Dictionary khi đang duyệt `for k in d:`
- **Đoạn code SAI:**
```python
d = {"a": 1, "b": 0, "c": 3}
for k, v in d.items():
    if v == 0:
        del d[k]
```
- **Kết quả sai thực tế:** Ném lỗi `RuntimeError: dictionary changed size during iteration`.
- **Đoạn code ĐÚNG:**
```python
d = {"a": 1, "b": 0, "c": 3}
for k in [k for k, v in d.items() if v == 0]:
    del d[k]
```
- **Cách nhớ:** Đóng băng danh sách khóa cần xóa bằng `list(...)` trước khi thực hiện xóa.

---

### Bẫy 20: Khởi tạo biến tìm Max bằng `0` khi mảng toàn số âm
- **Đoạn code SAI:**
```python
def tim_max(arr):
    max_val = 0
    for x in arr:
        if x > max_val: max_val = x
    return max_val
```
- **Kết quả sai thực tế:** `tim_max([-5, -2, -9])` trả về `0` (số 0 không hề tồn tại trong mảng).
- **Đoạn code ĐÚNG:**
```python
def tim_max(arr):
    max_val = arr[0]  # hoặc float('-inf')
    for x in arr:
        if x > max_val: max_val = x
    return max_val
```
- **Cách nhớ:** Giá trị khởi tạo của Max phải lấy từ phần tử đầu tiên `arr[0]` hoặc `-inf`.

---

### Bẫy 21: Khởi tạo biến tìm Min bằng `0` khi mảng toàn số dương
- **Đoạn code SAI:**
```python
def tim_min(arr):
    min_val = 0
    for x in arr:
        if x < min_val: min_val = x
    return min_val
```
- **Kết quả sai thực tế:** `tim_min([10, 5, 20])` trả về `0`.
- **Đoạn code ĐÚNG:**
```python
def tim_min(arr):
    min_val = arr[0]  # hoặc float('inf')
    for x in arr:
        if x < min_val: min_val = x
    return min_val
```
- **Cách nhớ:** Giá trị khởi tạo của Min phải lấy từ `arr[0]` hoặc `+inf`.

---

### Bẫy 22: Khởi tạo biến tích dồn bằng `0` thay vì `1`
- **Đoạn code SAI:**
```python
def tich_mang(arr):
    tich = 0
    for x in arr: tich *= x
    return tich
```
- **Kết quả sai thực tế:** Luôn trả về `0` với mọi mảng.
- **Đoạn code ĐÚNG:**
```python
def tich_mang(arr):
    tich = 1
    for x in arr: tich *= x
    return tich
```
- **Cách nhớ:** Phần tử trung hòa của phép cộng là 0, của phép nhân là 1.

---

### Bẫy 23: `str.split()` không tham số vs `str.split(" ")`
- **Đoạn code SAI:**
```python
s = "  Python   Master  "
words = s.split(" ") # Tách theo dấu cách đơn
print(len(words))
```
- **Kết quả sai thực tế:** In ra `6` (chứa các chuỗi rỗng `""`) thay vì `2`.
- **Đoạn code ĐÚNG:**
```python
s = "  Python   Master  "
words = s.split()    # Tự động gộp khoảng trắng liên tiếp và strip 2 đầu
print(len(words))   # 2
```
- **Cách nhớ:** Đếm từ trong văn bản luôn dùng `s.split()` không tham số.

---

### Bẫy 24: `str.capitalize()` viết thường toàn bộ phần sau của chuỗi
- **Đoạn code SAI:**
```python
s = "iPhone 15 Pro"
print(s.capitalize())
```
- **Kết quả sai thực tế:** In ra `'Iphone 15 pro'` (chữ 'P' bị biến thành chữ thường).
- **Đoạn code ĐÚNG:**
```python
s = "iPhone 15 Pro"
print(s[0].upper() + s[1:]) # 'IPhone 15 Pro'
```
- **Cách nhớ:** `capitalize()` chỉ viết hoa ký tự đầu và ÉP TẤT CẢ ký tự sau về chữ thường.

---

### Bẫy 25: `str.title()` phân tách từ sai ở dấu nháy đơn
- **Đoạn code SAI:**
```python
name = "they're"
print(name.title())
```
- **Kết quả sai thực tế:** In ra `"They'Re"` (chữ 'R' sau dấu nháy bị viết hoa).
- **Đoạn code ĐÚNG:**
```python
name = "they're"
print(" ".join(w.capitalize() for w in name.split())) # "They're"
```
- **Cách nhớ:** Không dùng `.title()` cho văn bản tiếng Anh có dấu nháy sở hữu/viết tắt. Dùng `w.capitalize()` trên từng từ.

---

### Bẫy 26: `str.strip()` xóa tập hợp các ký tự ở 2 đầu
- **Đoạn code SAI:**
```python
filename = "spambaconspam.txt"
print(filename.strip("spam"))
```
- **Kết quả sai thực tế:** In ra `'baconspam.txt'` nếu ở đầu có ký tự thuộc tập `{'s', 'p', 'a', 'm'}`. Nhưng với `"apple_pie".strip("apple")` sẽ xóa cả chữ `e` ở cuối nếu có.
- **Đoạn code ĐÚNG:**
```python
# Xóa chính xác tiền tố:
s = "spambacon.txt"
if s.startswith("spam"):
    s = s[len("spam"):]
```
- **Cách nhớ:** Đối số của `strip()` là tập hợp các ký tự đơn lẻ, không phải chuỗi con nguyên vẹn.

---

### Bẫy 27: Kiểm tra sự tồn tại chuỗi con bằng `if s.find(sub):`
- **Đoạn code SAI:**
```python
s = "Python"
if s.find("P"):  # s.find("P") trả về 0 (chỉ số đầu tiên)
    print("Tìm thấy")
```
- **Kết quả sai thực tế:** Không in gì cả vì `0` được coi là `False`!
- **Đoạn code ĐÚNG:**
```python
s = "Python"
if "P" in s:     # hoặc if s.find("P") != -1:
    print("Tìm thấy")
```
- **Cách nhớ:** Kiểm tra tồn tại trong chuỗi dùng toán tử `in`. `find()` trả về `-1` khi không thấy và `0` khi ở đầu chuỗi.

---

### Bẫy 28: Xóa đầu danh sách bằng `list.pop(0)` gây O(N)
- **Đoạn code SAI:**
```python
# Thuật toán BFS dùng list thông thường
q = [start_node]
while q:
    curr = q.pop(0) # Tốn O(N) cho mỗi lần lấy phần tử
```
- **Kết quả sai thực tế:** Thuật toán chạy đúng với test nhỏ nhưng bị quá thời gian (Time Limit Exceeded) với N >= 10^4.
- **Đoạn code ĐÚNG:**
```python
from collections import deque
start_node = 0
q = deque([start_node])
while q:
    curr = q.popleft() # Tốn O(1)
```
- **Cách nhớ:** Hàng đợi BFS bắt buộc dùng `collections.deque`. Tuyệt đối không dùng `list.pop(0)`.

---

### Bẫy 29: `list.remove(x)` xóa theo giá trị, không phải theo chỉ số
- **Đoạn code SAI:**
```python
arr = [10, 20, 30]
i = 1
arr.remove(i) # Định xóa phần tử ở vị trí thứ 1 (số 20)
```
- **Kết quả sai thực tế:** Ném lỗi `ValueError: list.remove(x): x not in list` vì không tìm thấy giá trị `1`.
- **Đoạn code ĐÚNG:**
```python
arr = [10, 20, 30]
i = 1
arr.pop(i)    # Xóa theo CHỈ SỐ: arr trở thành [10, 30]
```
- **Cách nhớ:** `remove(x)` là xóa theo GIÁ TRỊ; `pop(i)` hoặc `del arr[i]` là xóa theo CHỈ SỐ.

---

### Bẫy 30: Truy cập phần tử tập hợp `set` bằng chỉ số `s[0]`
- **Đoạn code SAI:**
```python
unique_elements = set([3, 1, 2])
first_item = unique_elements[0]
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: 'set' object is not subscriptable`.
- **Đoạn code ĐÚNG:**
```python
unique_elements = sorted(list(set([3, 1, 2])))
first_item = unique_elements[0]
```
- **Cách nhớ:** Tập hợp `set` không có thứ tự và không hỗ trợ đánh chỉ số. Muốn lấy phần tử phải ép sang `list`.

---

### Bẫy 31: Dùng `list` làm khóa cho `dict` hoặc phần tử của `set`
- **Đoạn code SAI:**
```python
visited = set()
visited.add([0, 1]) # Lưu tọa độ dạng list
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: unhashable type: 'list'`.
- **Đoạn code ĐÚNG:**
```python
visited = set()
visited.add((0, 1)) # Lưu tọa độ dạng Tuple (immutable)
```
- **Cách nhớ:** Khóa của `dict` và phần tử của `set` phải là kiểu bất biến (hashable) như `int`, `str`, `tuple`.

---

### Bẫy 32: Cận trên của `range(start, stop)` không bao gồm `stop`
- **Đoạn code SAI:**
```python
# Cần tính tổng từ 1 đến N
def tong_1_den_n(n):
    tong = 0
    for i in range(1, n):
        tong += i
    return tong
```
- **Kết quả sai thực tế:** `tong_1_den_n(5)` trả về `10` (1+2+3+4) thay vì `15`.
- **Đoạn code ĐÚNG:**
```python
def tong_1_den_n(n):
    return sum(range(1, n + 1))
```
- **Cách nhớ:** `range(a, b)` luôn dừng ở b - 1. Muốn lặp đến N phải viết `range(a, n + 1)`.

---

### Bẫy 33: Duyệt ngược bằng `range(n-1, 0, -1)` bỏ sót phần tử ở chỉ số 0
- **Đoạn code SAI:**
```python
arr = [10, 20, 30]
for i in range(len(arr) - 1, 0, -1):
    print(arr[i])
```
- **Kết quả sai thực tế:** Chỉ in ra `30` và `20`, bỏ sót `10` ở vị trí `0`.
- **Đoạn code ĐÚNG:**
```python
arr = [10, 20, 30]
for i in range(len(arr) - 1, -1, -1):
    print(arr[i])
```
- **Cách nhớ:** Khi duyệt ngược về chỉ số 0, cận dừng bắt buộc là `-1`.

---

### Bẫy 34: Chân trị của danh sách rỗng trong `all([])` và `any([])`
- **Đoạn code SAI:**
```python
conditions = []
if all(conditions):
    print("Thỏa mãn mọi điều kiện")
```
- **Kết quả sai thực tế:** In ra màn hình vì `all([])` trả về `True` (chân lý rỗng - vacuous truth), trong khi `any([])` trả về `False`.
- **Đoạn code ĐÚNG:**
```python
conditions = []
if conditions and all(conditions):
    print("Thỏa mãn")
```
- **Cách nhớ:** `all([]) == True` và `any([]) == False`. Kiểm tra danh sách rỗng trước khi gọi `all`.

---

### Bẫy 35: Gán biến toàn cục trong hàm thiếu `global`
- **Đoạn code SAI:**
```python
count = 0
def increment():
    count += 1 # Python coi count là biến cục bộ chưa được khởi tạo
increment()
```
- **Kết quả sai thực tế:** Ném lỗi `UnboundLocalError: local variable 'count' referenced before assignment`.
- **Đoạn code ĐÚNG:**
```python
count = 0
def increment():
    global count
    count += 1
increment()
```
- **Cách nhớ:** Khi đọc biến toàn cục thì không cần khai báo, nhưng khi GÁN lại biến toàn cục bắt buộc phải có `global`.

---

### Bẫy 36: Sửa biến của hàm bao ngoài thiếu `nonlocal`
- **Đoạn code SAI:**
```python
def outer():
    x = 10
    def inner():
        x += 1
    inner()
    return x
```
- **Kết quả sai thực tế:** Ném lỗi `UnboundLocalError: local variable 'x' referenced before assignment`.
- **Đoạn code ĐÚNG:**
```python
def outer():
    x = 10
    def inner():
        nonlocal x
        x += 1
    inner()
    return x
```
- **Cách nhớ:** Trong hàm lồng nhau (DFS/Backtracking), muốn sửa biến số nguyên của hàm cha phải khai báo `nonlocal`.

---

### Bẫy 37: Ép kiểu chuỗi số thực hoặc chuỗi rỗng trực tiếp sang `int()`
- **Đoạn code SAI:**
```python
so1 = int("9.5")
so2 = int("")
```
- **Kết quả sai thực tế:** Cả 2 dòng đều ném lỗi `ValueError: invalid literal for int() with base 10`.
- **Đoạn code ĐÚNG:**
```python
so1 = int(float("9.5"))       # 9
so2 = int("" or 0)            # 0
```
- **Cách nhớ:** Chuỗi có dấu chấm thập phân phải qua `float()` trước khi sang `int()`.

---

### Bẫy 38: Chuyển chuỗi `"False"` sang kiểu boolean: `bool("False")`
- **Đoạn code SAI:**
```python
raw_input = "False"
is_active = bool(raw_input)
```
- **Kết quả sai thực tế:** `is_active` nhận giá trị `True` vì chuỗi có độ dài 5 ký tự.
- **Đoạn code ĐÚNG:**
```python
raw_input = "False"
is_active = (raw_input.strip().lower() == "true")
print(is_active)  # False
```
- **Cách nhớ:** `bool(s)` chỉ trả về `False` khi `s` là chuỗi rỗng `""`. Mọi chuỗi khác đều là `True`.

---

### Bẫy 39: Sắp xếp chuỗi số theo thứ tự từ điển thay vì số học
- **Đoạn code SAI:**
```python
str_nums = ["10", "2", "1", "20"]
str_nums.sort()
print(str_nums)
```
- **Kết quả sai thực tế:** In ra `['1', '10', '2', '20']` (thứ tự từ điển: '10' đứng trước '2').
- **Đoạn code ĐÚNG:**
```python
str_nums = ["10", "2", "1", "20"]
str_nums.sort(key=int)
print(str_nums) # ['1', '2', '10', '20']
```
- **Cách nhớ:** Sắp xếp danh sách chuỗi đại diện cho số bắt buộc phải truyền `key=int` hoặc `key=float`.

---

### Bẫy 40: `heapq` là Min-Heap mặc định, quên đổi dấu khi cần Max-Heap
- **Đoạn code SAI:**
```python
import heapq
h = []
for x in [3, 1, 4]: heapq.heappush(h, x)
top_max = heapq.heappop(h)
```
- **Kết quả sai thực tế:** `top_max` là `1` (giá trị nhỏ nhất) thay vì `4`.
- **Đoạn code ĐÚNG:**
```python
import heapq
h = []
for x in [3, 1, 4]: heapq.heappush(h, -x)
top_max = -heapq.heappop(h) # 4
```
- **Cách nhớ:** `heapq` trong Python LUÔN LÀ MIN-HEAP. Muốn lấy giá trị lớn nhất phải đẩy số âm `-x` và lấy ra `-pop()`.

---

### Bẫy 41: Lỗi so sánh phần tử thứ hai khi lưu Tuple vào `heapq`
- **Đoạn code SAI:**
```python
import heapq
# Tuple lưu (khoảng cách, đối tượng node)
h = []
heapq.heappush(h, (1, {"id": "A"}))
heapq.heappush(h, (1, {"id": "B"})) # Hai khoảng cách bằng 1
```
- **Kết quả sai thực tế:** Ném lỗi `TypeError: '<' not supported between instances of 'dict' and 'dict'`.
- **Đoạn code ĐÚNG:**
```python
import heapq
h = []
idx = 0
heapq.heappush(h, (1, idx, {"id": "A"})); idx += 1
heapq.heappush(h, (1, idx, {"id": "B"})); idx += 1
```
- **Cách nhớ:** Chèn thêm chỉ số tự tăng `idx` vào giữa Tuple `(priority, idx, data)` để tránh Python so sánh trường dữ liệu không so sánh được.

---

### Bẫy 42: `collections.defaultdict` tự động thêm khóa khi chỉ đọc
- **Đoạn code SAI:**
```python
from collections import defaultdict
d = defaultdict(int)
if d["missing_key"] == 0:
    pass
print(len(d))
```
- **Kết quả sai thực tế:** In ra `1` vì việc truy cập `d["missing_key"]` đã tự động chèn khóa đó vào từ điển với giá trị 0.
- **Đoạn code ĐÚNG:**
```python
from collections import defaultdict
d = defaultdict(int)
if "missing_key" in d:
    pass
print(len(d))  # 0
```
- **Cách nhớ:** Kiểm tra khóa tồn tại trong `defaultdict` luôn dùng toán tử `in`, không truy cập trực tiếp `d[k]`.

---

### Bẫy 43: Nhân bản danh sách chứa đối tượng `[{}] * n` hoặc `[[]] * n`
- **Đoạn code SAI:**
```python
ds = [{}] * 3
ds[0]["ten"] = "An"
```
- **Kết quả sai thực tế:** Cả 3 dict trong danh sách đều có `{"ten": "An"}`.
- **Đoạn code ĐÚNG:**
```python
ds = [{} for _ in range(3)]
ds[0]["ten"] = "An"
```
- **Cách nhớ:** Mọi thao tác tạo mảng chứa đối tượng mutable (list, dict, set) đều phải dùng List Comprehension.

---

### Bẫy 44: Nhân chuỗi hoặc danh sách với số âm ra kết quả rỗng
- **Đoạn code SAI:**
```python
so_lan = -2
chuoi = "ABC" * so_lan
mang = [1, 2] * so_lan
```
- **Kết quả sai thực tế:** `chuoi` thành `""` và `mang` thành `[]` mà không hề báo lỗi ngoại lệ.
- **Đoạn code ĐÚNG:**
```python
so_lan = -2
so_lan = max(0, so_lan)
chuoi = "ABC" * so_lan
print(repr(chuoi))  # ""
```
- **Cách nhớ:** Phép nhân sequence với số <= 0 luôn trả về đối tượng rỗng.

---

### Bẫy 45: Cơ chế Round Half to Even của `round()`
- **Đoạn code SAI:**
```python
print(round(2.5))
print(round(3.5))
```
- **Kết quả sai thực tế:** `round(2.5)` cho kết quả `2`, trong khi `round(3.5)` cho kết quả `4`. Không phải lúc nào đuôi `.5` cũng được làm tròn lên.
- **Đoạn code ĐÚNG:**
```python
import math
def round_up_half(x):
    # Làm tròn lên truyền thống
    return math.floor(x + 0.5)
```
- **Cách nhớ:** `round()` trong Python làm tròn về số chẵn gần nhất.

---

### Bẫy 46: `math.floor()` vs `int()` khi xử lý số thực âm
- **Đoạn code SAI:**
```python
import math
print(int(-3.7))
print(math.floor(-3.7))
```
- **Kết quả sai thực tế:** `int(-3.7)` trả về `-3` (cắt cụt phần thập phân), còn `math.floor(-3.7)` trả về `-4` (làm tròn xuống số nguyên nhỏ hơn).
- **Đoạn code ĐÚNG:**
```python
# Chọn đúng hàm theo yêu cầu đề bài:
# Đề ghi "làm tròn xuống" -> dùng math.floor()
# Đề ghi "cắt bỏ phần thập phân" -> dùng int()
```
- **Cách nhớ:** Với số dương thì `int()` và `floor()` giống nhau, nhưng với số âm thì khác nhau hoàn toàn.

---

### Bẫy 47: `itertools.groupby` trên danh sách chưa được sắp xếp
- **Đoạn code SAI:**
```python
import itertools
data = [1, 2, 1, 1, 2]
groups = {k: len(list(g)) for k, g in itertools.groupby(data)}
```
- **Kết quả sai thực tế:** `groups` chỉ gom cụm liên tiếp cuối cùng và làm mất thông tin gom nhóm toàn cục.
- **Đoạn code ĐÚNG:**
```python
import itertools
data = sorted([1, 2, 1, 1, 2])
groups = {k: len(list(g)) for k, g in itertools.groupby(data)}
```
- **Cách nhớ:** `itertools.groupby` BẮT BUỘC danh sách đầu vào phải được sắp xếp trước.

---

### Bẫy 48: Vượt quá giới hạn độ sâu đệ quy mặc định
- **Đoạn code SAI:**
```python
def dfs_sau(node, depth):
    if depth == 1500: return
    dfs_sau(node + 1, depth + 1)
dfs_sau(0, 0)
```
- **Kết quả sai thực tế:** Ném lỗi `RecursionError: maximum recursion depth exceeded in comparison` khi độ sâu đạt ~1000.
- **Đoạn code ĐÚNG:**
```python
import sys
sys.setrecursionlimit(200000)
# Hoặc chuyển thuật toán sang dùng Stack khử đệ quy
```
- **Cách nhớ:** Khi giải bài toán cây/đồ thị lớn bằng đệ quy, luôn đặt `sys.setrecursionlimit(200000)` ở đầu file.

---

### Bẫy 49: Truyền List vào hàm làm thay đổi dữ liệu của hàm gọi
- **Đoạn code SAI:**
```python
def chuan_hoa(scores):
    scores.sort() # Sắp xếp trực tiếp trên mảng truyền vào
    return scores[-1]
```
- **Kết quả sai thực tế:** Mảng `scores` bên ngoài của hàm chấm điểm bị thay đổi thứ tự, khiến các bước kiểm tra sau bị sai lệch.
- **Đoạn code ĐÚNG:**
```python
def chuan_hoa(scores):
    sorted_scores = sorted(scores) # Tạo bản sao mới
    return sorted_scores[-1]
```
- **Cách nhớ:** Trong Python, List được truyền theo tham chiếu (pass-by-assignment). Không thay đổi mảng đầu vào trừ khi đề bài yêu cầu cụ thể.

---

### Bẫy 50: Gọi `list.count()` trong vòng lặp đẩy độ phức tạp lên O(N^2)
- **Đoạn code SAI:**
```python
def tim_phan_tu_xuat_hien_mot_lan(arr):
    for x in arr:
        if arr.count(x) == 1: # arr.count(x) tốn O(N) cho mỗi phần tử
            return x
```
- **Kết quả sai thực tế:** Chạy đúng với mảng 10 phần tử, nhưng với N = 10^5 thuật toán tốn 10^{10} phép tính -> TLE chắc chắn.
- **Đoạn code ĐÚNG:**
```python
from collections import Counter

def tim_phan_tu_xuat_hien_mot_lan(arr):
    counts = Counter(arr) # Đếm toàn bộ trong O(N)
    for x in arr:
        if counts[x] == 1:
            return x
```
- **Cách nhớ:** Tuyệt đối không gọi `arr.count(x)` hay `x in list` bên trong vòng lặp `for`. Hãy tiền xử lý bằng `Counter` hoặc `set` để đạt O(1).
