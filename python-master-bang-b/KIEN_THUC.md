# GIÁO TRÌNH TOÀN DIỆN PYTHON MASTER 2026 — BẢNG B (COS PRO LEVEL 2 & LEVEL 1)

Tài liệu chuẩn bị cho kỳ thi Python Master 2026 — Bảng B theo cấu trúc đề thi chứng chỉ COS Pro Level 2 (Vòng loại: 50 phút / 10 câu / 1000 điểm) và Level 1 (Chung kết: 90 phút / 10 câu / 1000 điểm). Điểm đạt chứng chỉ: >= 600/1000.

---

## MỤC LỤC

1. [Kiểu dữ liệu cơ bản và Chuyển đổi kiểu](#1-kiểu-dữ-liệu-cơ-bản-và-chuyển-đổi-kiểu)
   - 1.1. int, float, str, bool và Chân trị (Truthiness)
   - 1.2. int() vs round() vs // (Cắt thập phân vs Làm tròn)
   - 1.3. Phép chia lấy dư (%) và chia nguyên (//) với số âm
   - 1.4. Định dạng số nâng cao với f-string
2. [Xử lý Chuỗi (Strings)](#2-xử-lý-chuỗi-strings)
   - 2.1. Cắt, nối, trích xuất và thay thế chuỗi
   - 2.2. split() vs split(" ") (Bẫy khoảng trắng thừa)
   - 2.3. strip(), lstrip(), rstrip()
   - 2.4. join() và tối ưu nối chuỗi trong vòng lặp
   - 2.5. title() vs capitalize() vs upper() / lower()
   - 2.6. Kiểm tra tính chất ký tự (isalpha, isdigit, isalnum, isspace)
   - 2.7. Đảo chuỗi và Slicing với bước âm
3. [Danh sách (List) & Thao tác Mảng 1 chiều](#3-danh-sách-list--thao-tác-mảng-1-chiều)
   - 3.1. Slicing toàn diện và gán/xóa lát cắt
   - 3.2. List Comprehension lồng nhau
   - 3.3. enumerate() và zip()
   - 3.4. sorted() vs list.sort() và sắp xếp đa khóa
   - 3.5. Đảo ngược mảng: reverse() vs [::-1] vs reversed()
   - 3.6. Sao chép nông (Shallow Copy) vs Sao chép sâu (Deep Copy)
4. [Mảng 2 chiều & Ma trận (2D Lists / Matrix)](#4-mảng-2-chiều--ma-trận-2d-lists--matrix)
   - 4.1. Khởi tạo ma trận an toàn
   - 4.2. Kỹ thuật duyệt ma trận theo hàng, cột và đường chéo
   - 4.3. Chuyển vị ma trận (Transpose)
   - 4.4. Xoay ma trận 90 độ (Thuận & Ngược chiều kim đồng hồ)
   - 4.5. Duyệt ma trận theo hình xoắn ốc (Spiral Matrix)
5. [Từ điển (Dict) & Tập hợp (Set)](#5-từ-điển-dict--tập-hợp-set)
   - 5.1. get() và setdefault() an toàn
   - 5.2. Kỹ thuật đếm tần suất và gom nhóm
   - 5.3. Sắp xếp Dictionary theo Value và theo Key
   - 5.4. Dict & Set Comprehension
   - 5.5. Các phép toán tập hợp (Union, Intersection, Difference, Symmetric Difference)
6. [Tuple, Unpacking & Phép gán song song](#6-tuple-unpacking--phép-gán-song-song)
   - 6.1. Tuple bất biến và dùng Tuple làm Key Hashable
   - 6.2. Kỹ thuật Unpacking biến và dấu sao `*`
   - 6.3. Hoán đổi biến và gán trạng thái song song
7. [Vòng lặp & Điều khiển luồng (Control Flow)](#7-vòng-lặp--điều-khiển-luồng-control-flow)
   - 7.1. Cú pháp toàn diện của range(start, stop, step)
   - 7.2. break, continue và khối else của vòng lặp
   - 7.3. Thoát sớm khỏi vòng lặp lồng nhau
8. [Hàm & Cơ chế hoạt động (Functions)](#8-hàm--cơ-chế-hoạt-động-functions)
   - 8.1. Bẫy Mutable Default Argument
   - 8.2. Tham số biến thiên *args và **kwargs
   - 8.3. Trả về nhiều giá trị
   - 8.4. Đệ quy, Base Case và Giới hạn độ sâu đệ quy
9. [Thư viện chuẩn thiết yếu trong phòng thi](#9-thư-viện-chuẩn-thiết-yếu-trong-phòng-thi)
   - 9.1. collections (Counter, defaultdict, deque)
   - 9.2. heapq (Min-Heap, Max-Heap, nlargest, nsmallest)
   - 9.3. itertools (permutations, combinations, product, accumulate, groupby)
   - 9.4. math (gcd, lcm, isqrt, ceil, floor, inf, comb, perm)
   - 9.5. bisect (bisect_left, bisect_right, insort_left)
   - 9.6. datetime cơ bản (date, timedelta, tính số ngày và thứ)
10. [Các thuật toán kinh điển phải thuộc lòng](#10-các-thuật-toán-kinh-điển-phải-thuộc-lòng)
    - 10.1. Hai con trỏ (Two Pointers)
    - 10.2. Cửa sổ trượt (Sliding Window: Cố định và Biến thiên)
    - 10.3. Mảng tiền tố (Prefix Sum 1D & 2D)
    - 10.4. Sắp xếp đa tiêu chí (Custom Multi-key Sort)
    - 10.5. Tìm kiếm nhị phân (Binary Search & Binary Search the Answer)
    - 10.6. Hợp nhất các khoảng (Merge Intervals)
    - 10.7. Ngăn xếp (Stack: Dấu ngoặc, Biểu thức hậu tố, Monotonic Stack)
    - 10.8. BFS và DFS (Trên lưới ma trận và Đồ thị)
    - 10.9. Quy hoạch động (DP 1D và DP 2D Grid)
    - 10.10. Top-K phần tử bằng Heap
    - 10.11. Sàng số nguyên tố Eratosthenes
11. [Lập trình hướng đối tượng (OOP) cho COS Pro Level 1](#11-lập-trình-hướng-đối-tượng-oop-cho-cos-pro-level-1)
    - 11.1. Cấu trúc Class, __init__, thuộc tính và phương thức
    - 11.2. Các phương thức đặc biệt: __str__, __len__, __eq__, __lt__
    - 11.3. Khi nào cần dùng Class trong bài thi
12. [Xử lý ngoại lệ cơ bản (Exception Handling)](#12-xử-lý-ngoại-lệ-cơ-bản-exception-handling)
    - 12.1. Cấu trúc try...except và các ngoại lệ phổ biến
    - 12.2. Ép kiểu an toàn không gây sập chương trình
13. [Bảng tra cứu độ phức tạp & Ước lượng thời gian chạy](#13-bảng-tra-cứu-độ-phức-tạp--ước-lượng-thời-gian-chạy)
    - 13.1. Bảng quy đổi giới hạn dữ liệu N sang thuật toán khả thi
    - 13.2. Bảng tra cứu độ phức tạp các thao tác dựng sẵn (Built-in)

---

## 1. KIỂU DỮ LIỆU CƠ BẢN VÀ CHUYỂN ĐỔI KIỂU

### 1.1. int, float, str, bool và Chân trị (Truthiness)
- **Khi nào dùng:** Mọi bài toán xử lý dữ liệu đầu vào, chuyển đổi kiểu tính toán và kiểm tra điều kiện rỗng/tồn tại.
- **Code mẫu ngắn:**
```python
# Chuyển đổi qua lại giữa các kiểu
so_nguyen = int("123")        # 123
so_thuc = float("123.45")     # 123.45
chuoi = str(987)              # "987"
gia_tri_bool = bool(1)        # True

# Giá trị falsy trong Python: 0, 0.0, "", [], {}, set(), (), None, False
# Mọi giá trị khác đều là truthy
ds = []
if not ds:
    print("Danh sách rỗng")   # In ra màn hình
```
- **Độ phức tạp:** Thời gian: O(1) với số nhỏ, O(L) với độ dài chuỗi ký tự L. Bộ nhớ: O(1).
- **Bẫy thường gặp:** Chuỗi `"False"` hoặc `"0"` khi chuyển sang bool `bool("False")` vẫn trả về `True` vì chuỗi có độ dài > 0. Chỉ chuỗi rỗng `""` mới cho `False`.

### 1.2. int() vs round() vs // (Cắt thập phân vs Làm tròn)
- **Khi nào dùng:** Khi đề bài yêu cầu "chỉ lấy phần nguyên", "cắt bỏ phần thập phân" hoặc "làm tròn đến số nguyên gần nhất".
- **Code mẫu ngắn:**
```python
# 1. int(x): Cắt cụt phần thập phân về phía 0 (truncation)
print(int(80.9))     # 80
print(int(-3.9))    # -3

# 2. // : Phép chia lấy sàn (floor division - làm tròn xuống số nguyên nhỏ hơn)
print(80 // 3)      # 26
print(-7 // 3)      # -3 (vì -2.333 làm tròn xuống là -3)

# 3. round(x): Làm tròn số học theo cơ chế Round half to even (ngân hàng)
print(round(2.5))   # 2 (số chẵn gần nhất)
print(round(3.5))   # 4 (số chẵn gần nhất)
print(round(80.5))  # 80
print(round(81.5))  # 82
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Đề mẫu COS Pro thường có câu: "Nếu điểm trung bình là số thập phân, chỉ return phần số nguyên". Lúc này **phải dùng `int(x)` hoặc `//`**, nếu dùng `round(x)` sẽ bị sai ở các giá trị có đuôi >= .5.

### 1.3. Phép chia lấy dư (%) và chia nguyên (//) với số âm
- **Khi nào dùng:** Bài toán đồng hồ xoay vòng, dịch chuyển chỉ số mảng tròn, xử lý tọa độ âm.
- **Code mẫu ngắn:**
```python
# Trong Python: a = (a // b) * b + (a % b) và kết quả của % luôn cùng dấu với số chia b
print(-7 % 3)       # 2 (bởi vì -7 = (-3)*3 + 2)
print(-7 // 3)      # -3

# Nếu muốn lấy phần dư theo kiểu toán học đối xứng như C/C++/Java (cắt cụt về 0):
import math
print(math.fmod(-7, 3))   # -1.0
print(int(-7 / 3))        # -2
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Nhầm tưởng `-7 % 3` trả về `-1` như C/C++/Java. Trong Python `-7 % 3` luôn trả về số dương `2` khi số chia dương.

### 1.4. Định dạng số nâng cao với f-string
- **Khi nào dùng:** Xuất dữ liệu định dạng tiền tệ, căn lề bảng điểm, in số có chèn số 0 ở đầu (mã định danh, giờ:phút:giây).
- **Code mẫu ngắn:**
```python
diem = 8.5
tien = 1500000
so = 7
pi = 3.14159265

print(f"{diem:.2f}")     # '8.50' (2 chữ số thập phân)
print(f"{tien:,}")       # '1,500,000' (phân cách hàng nghìn)
print(f"{so:04d}")       # '0007' (độ rộng 4 ký tự, bù số 0)
print(f"{so:>6}")        # '     7' (căn lề phải độ rộng 6)
print(f"{so:<6}")        # '7     ' (căn lề trái độ rộng 6)
print(f"{255:b}")        # '11111111' (hệ nhị phân)
print(f"{255:x}")        # 'ff' (hệ thập lục phân)
```
- **Độ phức tạp:** Thời gian: O(L), Bộ nhớ: O(L) với L là độ dài chuỗi kết quả.
- **Bẫy thường gặp:** Quên dấu hai chấm `:` trước mã định dạng (ví dụ `f"{x.2f}"` gây cú pháp `SyntaxError`, phải là `f"{x:.2f}"`).

---

## 2. XỬ LÝ CHUỖI (STRINGS)

### 2.1. Cắt, nối, trích xuất và thay thế chuỗi
- **Khi nào dùng:** Xử lý văn bản, mã hóa/giải mã, thay thế từ khóa trong văn bản.
- **Code mẫu ngắn:**
```python
s = "Python Master 2026"
print(s[0:6])           # 'Python'
print(s.replace("2026", "Bảng B"))  # 'Python Master Bảng B'

# Tìm kiếm vị trí
idx = s.find("Master")  # 7 (nếu không có trả về -1)
# s.index("Java")       # ValueError nếu không tìm thấy!
```
- **Độ phức tạp:** `replace()` và `find()` có thời gian O(N), tạo chuỗi mới tốn O(N) bộ nhớ.
- **Bẫy thường gặp:** Chuỗi trong Python là **immutable** (bất biến). Gán `s[0] = 'J'` ném lỗi `TypeError`. Phải tạo chuỗi mới: `s = 'J' + s[1:]`.

### 2.2. split() vs split(" ") (Bẫy khoảng trắng thừa)
- **Khi nào dùng:** Tách từ trong câu văn bản có khoảng trắng bất thường.
- **Code mẫu ngắn:**
```python
s = "  Python   Master   2026  "

# 1. split() không tham số: tự động gộp nhiều dấu cách, tab, xuống dòng, bỏ khoảng trắng ở 2 đầu
print(s.split())        # ['Python', 'Master', '2026']

# 2. split(" ") có tham số cụ thể: giữ nguyên chuỗi rỗng giữa các dấu cách
print(s.split(" "))     # ['', '', 'Python', '', '', 'Master', '', '', '2026', '', '']

# Tách giới hạn số lần (maxsplit)
line = "ID_101:Nguyen Van A:95:Ha Noi"
print(line.split(":", 2))  # ['ID_101', 'Nguyen Van A', '95:Ha Noi']
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Dùng `s.split(" ")` khi muốn đếm số từ của câu có nhiều dấu cách liên tiếp dẫn đến đếm thừa các chuỗi rỗng `""`.

### 2.3. strip(), lstrip(), rstrip()
- **Khi nào dùng:** Làm sạch dữ liệu đầu vào, loại bỏ ký tự rác hoặc khoảng trắng ở hai đầu chuỗi.
- **Code mẫu ngắn:**
```python
raw = "  \n\t  Dữ liệu cần lấy   \r\n"
print(raw.strip())          # 'Dữ liệu cần lấy'

# Bỏ ký tự chỉ định (xóa tập ký tự ở rìa)
ma_don = "###ABC123XYZ###"
print(ma_don.strip("#"))    # 'ABC123XYZ'
print("www.example.com".strip("w.moc"))  # 'example'
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N) cho chuỗi mới.
- **Bẫy thường gặp:** `strip("abc")` coi đối số là **tập hợp các ký tự** cần xóa ở 2 đầu, không phải là tiền tố/hậu tố chuỗi. Muốn xóa tiền tố chính xác từ Python 3.9 dùng `s.removeprefix("abc")` hoặc slicing.

### 2.4. join() và tối ưu nối chuỗi trong vòng lặp
- **Khi nào dùng:** Ghép các phần tử danh sách thành chuỗi hoàn chỉnh (kết quả sau xử lý).
- **Code mẫu ngắn:**
```python
tu_khoa = ["Python", "Master", "2026"]
cau = " ".join(tu_khoa)          # 'Python Master 2026'

# Nối danh sách số: bắt buộc ép kiểu sang str
mang_so = [1, 2, 3, 4, 5]
chuoi_so = "-".join(str(x) for x in mang_so)  # '1-2-3-4-5'
```
- **Độ phức tạp:** `"".join()` tốn O(N) thời gian. Trong khi dùng `s += c` trong vòng lặp tốn O(N^2) do phải tạo lại chuỗi mỗi lần.
- **Bẫy thường gặp:** Truyền danh sách chứa số nguyên trực tiếp vào `join` như `",".join([1, 2, 3])` gây lỗi `TypeError: sequence item 0: expected str instance, int found`.

### 2.5. title() vs capitalize() vs upper() / lower()
- **Khi nào dùng:** Chuẩn hóa họ tên người dùng, định dạng tiêu đề bài báo.
- **Code mẫu ngắn:**
```python
s = "ngUYeN vAn a"

# capitalize(): Chỉ viết hoa ký tự ĐẦU TIÊN của chuỗi, tất cả ký tự sau thành viết thường
print(s.capitalize())       # 'Nguyen van a'

# title(): Viết hoa chữ cái đầu mỗi từ, nhưng cẩn thận với dấu nháy/gạch nối
print("o'connor".title())   # "O'Connor"
print("word-level".title()) # "Word-Level"

# Chuẩn hóa họ tên tối ưu và an toàn nhất:
ho_ten = "  nGUYEN   anh   duong "
chuan_hoa = " ".join(tu.capitalize() for tu in ho_ten.split())
print(chuan_hoa)            # 'Nguyen Anh Duong'
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Dùng `s.title()` cho chuỗi có dấu nháy như `"they're"` ra `"They'Re"` (sai). Dùng `tu.capitalize()` cho từng từ qua `split()` là cách chuẩn nhất.

### 2.6. Kiểm tra tính chất ký tự (isalpha, isdigit, isalnum, isspace)
- **Khi nào dùng:** Lọc ký tự hợp lệ, đếm số lượng chữ cái/chữ số/khoảng trắng trong chuỗi.
- **Code mẫu ngắn:**
```python
print("Python".isalpha())   # True (chỉ chứa chữ cái)
print("12345".isdigit())    # True (chỉ chứa chữ số)
print("Py3Master".isalnum())# True (chữ cái hoặc chữ số)
print("  \t\n ".isspace())  # True (toàn khoảng trắng)
print("ABC".isupper())      # True (toàn chữ hoa)
print("abc".islower())      # True (toàn chữ thường)
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Chuỗi rỗng `"".isalpha()` và `"".isdigit()` đều trả về `False`.

### 2.7. Đảo chuỗi và Slicing với bước âm
- **Khi nào dùng:** Kiểm tra chuỗi Palindrome (đối xứng), dịch ngược văn bản.
- **Code mẫu ngắn:**
```python
s = "radar"
la_palindrome = (s == s[::-1])    # True

s2 = "0123456789"
print(s2[::-1])       # '9876543210'
print(s2[8:2:-2])     # '864' (từ vị trí 8 lùi về trước vị trí 2, mỗi bước lùi 2)
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Khi bước nhảy âm `step < 0`, giá trị mặc định của `start` là cuối chuỗi (`len-1`) và `stop` là trước đầu chuỗi (`-1`). Viết `s[2:8:-1]` sẽ trả về chuỗi rỗng `""` vì không thể lùi từ 2 đến 8.

---

## 3. DANH SÁCH (LIST) & THAO TÁC MẢNG 1 CHIỀU

### 3.1. Slicing toàn diện và gán/xóa lát cắt
- **Khi nào dùng:** Trích xuất mảng con, chèn/xóa một khối phần tử trực tiếp trên mảng gốc.
- **Code mẫu ngắn:**
```python
a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Trích xuất
print(a[2:7:2])        # [2, 4, 6]

# Gán lát cắt (thay thế đoạn [2:5] bằng danh sách mới)
a[2:5] = [20, 30]
print(a)               # [0, 1, 20, 30, 5, 6, 7, 8, 9]

# Gán toàn bộ mảng tại chỗ (in-place replacement) giữ nguyên tham chiếu
a[:] = [x for x in a if x % 2 == 0]
print(a)               # [0, 20, 30, 6, 8]
```
- **Độ phức tạp:** Trích xuất lát cắt độ dài k tốn O(k) thời gian và bộ nhớ. Gán a[:] tốn O(N).
- **Bẫy thường gặp:** Gán `a = [x for x in a if ...]` sẽ tạo ra đối tượng mới và trỏ biến `a` sang vùng nhớ khác. Nếu hàm yêu cầu sửa in-place trên mảng truyền vào, phải viết `a[:] = [...]`.

### 3.2. List Comprehension lồng nhau
- **Khi nào dùng:** Tạo ma trận, phẳng hóa ma trận 2 chiều (flatten), tạo tổ hợp cặp phần tử có điều kiện.
- **Code mẫu ngắn:**
```python
# Phẳng hóa ma trận 2D thành 1D
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [val for row in matrix for val in row]
print(flat)            # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Tạo bảng cửu chương lọc số chẵn
cap_chan = [(i, j) for i in range(1, 4) for j in range(1, 4) if (i * j) % 2 == 0]
print(cap_chan)        # [(1, 2), (2, 1), (2, 2), (2, 3), (3, 2)]
```
- **Độ phức tạp:** Thời gian: O(N x M), Bộ nhớ: O(N x M).
- **Bẫy thường gặp:** Thứ tự vòng `for` trong comprehension viết đúng thứ tự như khi lồng nhau thông thường: `for row in matrix` đứng trước, `for val in row` đứng sau.

### 3.3. enumerate() và zip()
- **Khi nào dùng:** Khi cần đồng thời chỉ số và giá trị của phần tử, hoặc cần duyệt song song nhiều mảng có cùng độ dài.
- **Code mẫu ngắn:**
```python
# enumerate bắt đầu từ chỉ số tùy chọn (mặc định 0)
names = ["An", "Bình", "Cường"]
for idx, name in enumerate(names, start=1):
    print(f"Hạng {idx}: {name}")

# zip duyệt song song
scores = [90, 85, 95]
for name, score in zip(names, scores):
    print(f"{name} đạt {score} điểm")

# Unzip danh sách các cặp
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers, letters = zip(*pairs)
print(numbers)         # (1, 2, 3)
print(letters)         # ('a', 'b', 'c')
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(1) (tạo generator lặp).
- **Bẫy thường gặp:** `zip(a, b)` mặc định sẽ dừng lại khi danh sách **ngắn hơn** kết thúc, bỏ qua các phần tử thừa của danh sách dài hơn.

### 3.4. sorted() vs list.sort() và sắp xếp đa khóa
- **Khi nào dùng:** Sắp xếp danh sách theo một hoặc nhiều tiêu chí (ví dụ: điểm giảm dần, tên tăng dần theo từ điển).
- **Code mẫu ngắn:**
```python
students = [
    {"name": "Bình", "score": 85, "age": 20},
    {"name": "An",   "score": 90, "age": 19},
    {"name": "Cường","score": 85, "age": 18}
]

# Sắp xếp: score GIẢM DẦN (-), nếu bằng nhau thì age TĂNG DẦN (+), name TĂNG DẦN
sorted_students = sorted(
    students,
    key=lambda s: (-s["score"], s["age"], s["name"])
)
for s in sorted_students:
    print(s["name"], s["score"], s["age"])
# An 90 19 -> Cường 85 18 -> Bình 85 20
```
- **Độ phức tạp:** Timsort: Thời gian O(N log N), Bộ nhớ phụ O(N). Sắp xếp ổn định (Stable Sort).
- **Bẫy thường gặp:** `list.sort()` thực hiện sắp xếp tại chỗ và **luôn trả về `None`**. Viết `return arr.sort()` sẽ trả về `None`. Ngoài ra, chuỗi không thể đảo dấu bằng `-s["name"]`. Khi muốn chuỗi giảm dần, phải dùng kỹ thuật sắp xếp 2 lượt ổn định (sắp tiêu chí phụ trước, tiêu chí chính sau).

### 3.5. Đảo ngược mảng: reverse() vs [::-1] vs reversed()
- **Khi nào dùng:** Đảo ngược thứ tự xử lý dữ liệu.
- **Code mẫu ngắn:**
```python
a = [1, 2, 3, 4]

# 1. a.reverse(): đảo tại chỗ, trả về None, O(1) bộ nhớ phụ
a.reverse()
print(a)               # [4, 3, 2, 1]

# 2. a[::-1]: tạo list mới đảo ngược, tốn O(N) bộ nhớ
b = a[::-1]            # [1, 2, 3, 4]

# 3. reversed(a): tạo iterator duyệt ngược, O(1) bộ nhớ
for x in reversed(a):
    print(x, end=" ")  # 1 2 3 4
```
- **Độ phức tạp:** Thời gian: O(N). Bộ nhớ: `reverse()` và `reversed()` tốn O(1); `a[::-1]` tốn O(N).
- **Bẫy thường gặp:** Viết `a = a.reverse()` làm biến `a` trở thành `None`.

### 3.6. Sao chép nông (Shallow Copy) vs Sao chép sâu (Deep Copy)
- **Khi nào dùng:** Tạo bản sao dữ liệu để xử lý độc lập mà không làm thay đổi dữ liệu gốc.
- **Code mẫu ngắn:**
```python
import copy

# Mảng 1 chiều: Sao chép nông là đủ
arr1 = [1, 2, 3]
arr2 = arr1[:]         # hoặc arr1.copy(), list(arr1)
arr2[0] = 999
print(arr1[0])         # 1 (không bị đổi)

# Mảng 2 chiều / Đối tượng lồng nhau: BẮT BUỘC dùng Deep Copy
mat1 = [[1, 2], [3, 4]]
mat2 = mat1.copy()     # Sao chép nông: chỉ copy danh sách ngoài
mat2[0][0] = 999
print(mat1[0][0])      # 999 (BỊ ẢNH HƯỞNG!)

mat3 = copy.deepcopy(mat1)
mat3[0][0] = 111
print(mat1[0][0])      # 999 (Đã an toàn)
```
- **Độ phức tạp:** Sao chép nông: O(N). Sao chép sâu: O(tổng số nút trong cấu trúc).
- **Bẫy thường gặp:** Dùng `b = a[:]` cho ma trận 2 chiều rồi sửa `b[i][j]` làm thay đổi ma trận `a` gốc.

---

## 4. MẢNG 2 CHIỀU & MA TRẬN (2D LISTS / MATRIX)

### 4.1. Khởi tạo ma trận an toàn
- **Khi nào dùng:** Tạo bảng DP, bảng đánh dấu đồ thị visited, ma trận điểm ảnh kích thước R x C.
- **Code mẫu ngắn:**
```python
rows, cols = 3, 4

# CÁCH ĐÚNG DUY NHẤT:
matrix = [[0] * cols for _ in range(rows)]
matrix[0][1] = 5
print(matrix)
# [[0, 5, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ: O(R x C).
- **Bẫy thường gặp:** Viết `matrix = [[0] * cols] * rows`. Phép nhân `* rows` nhân bản tham chiếu của cùng 1 danh sách hàng. Khi gán `matrix[0][1] = 5`, toàn bộ tất cả các hàng đều bị đổi thành `[0, 5, 0, 0]`.

### 4.2. Kỹ thuật duyệt ma trận theo hàng, cột và đường chéo
- **Khi nào dùng:** Tính tổng từng cột, kiểm tra ma trận đối xứng, kiểm tra bàn cờ Caro/Sudoku.
- **Code mẫu ngắn:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
R, C = len(matrix), len(matrix[0])

# 1. Duyệt theo cột
tong_cot = []
for c in range(C):
    tong = sum(matrix[r][c] for r in range(R))
    tong_cot.append(tong)

# 2. Duyệt đường chéo chính (r == c) và đường chéo phụ (r + c == n - 1) ma trận vuông n x n
n = 3
cheo_chinh = [matrix[i][i] for i in range(n)]           # [1, 5, 9]
cheo_phu = [matrix[i][n - 1 - i] for i in range(n)]     # [3, 5, 7]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Nhầm lẫn giữa chỉ số hàng `r` (chạy từ 0 ... R-1) và chỉ số cột `c` (chạy từ 0 ... C-1) khi ma trận không phải hình vuông (R !=q C), dẫn đến `IndexError`.

### 4.3. Chuyển vị ma trận (Transpose)
- **Khi nào dùng:** Đổi hàng thành cột để áp dụng lại các hàm xử lý hàng lên cột.
- **Code mẫu ngắn:**
```python
mat = [
    [1, 2, 3],
    [4, 5, 6]
]
# Chuyển vị bằng zip(*mat)
transposed = [list(col) for col in zip(*mat)]
print(transposed)
# [[1, 4], [2, 5], [3, 6]]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ: O(R x C).
- **Bẫy thường gặp:** `zip(*mat)` trả về các tuple con. Nếu cần sửa đổi các phần tử sau chuyển vị, phải ép kiểu từng phần tử thành `list(col)`.

### 4.4. Xoay ma trận 90 độ (Thuận & Ngược chiều kim đồng hồ)
- **Khi nào dùng:** Bài toán biến đổi hình ảnh, xoay bàn cờ, xoay khối Tetris.
- **Code mẫu ngắn:**
```python
mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 1. Xoay 90 độ cùng chiều kim đồng hồ: Đảo ngược các hàng rồi chuyển vị
rotated_cw = [list(r) for r in zip(*mat[::-1])]
print(rotated_cw)
# [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

# 2. Xoay 90 độ ngược chiều kim đồng hồ: Chuyển vị rồi đảo ngược các hàng
rotated_ccw = [list(r) for r in zip(*mat)][::-1]
print(rotated_ccw)
# [[3, 6, 9], [2, 5, 8], [1, 4, 7]]
```
- **Độ phức tạp:** Thời gian: O(N^2), Bộ nhớ: O(N^2).
- **Bẫy thường gặp:** Quên dấu unpacking `*` trong `zip(*mat[::-1])`.

### 4.5. Duyệt ma trận theo hình xoắn ốc (Spiral Matrix)
- **Khi nào dùng:** Điền số hoặc đọc số theo thứ tự vòng xoắn từ ngoài viền vào tâm.
- **Code mẫu ngắn:**
```python
def spiral_order(matrix):
    if not matrix: return []
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Sang phải
        for c in range(left, right + 1): res.append(matrix[top][c])
        top += 1
        # Xuống dưới
        for r in range(top, bottom + 1): res.append(matrix[r][right])
        right -= 1
        # Sang trái (nếu còn hàng)
        if top <= bottom:
            for c in range(right, left - 1, -1): res.append(matrix[bottom][c])
            bottom -= 1
        # Lên trên (nếu còn cột)
        if left <= right:
            for r in range(bottom, top - 1, -1): res.append(matrix[r][left])
            left += 1
    return res

print(spiral_order([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
# [1, 2, 3, 6, 9, 8, 7, 4, 5]
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ: O(R x C).
- **Bẫy thường gặp:** Quên kiểm tra điều kiện `if top <= bottom:` và `if left <= right:` trước khi duyệt ngược sang trái và lên trên, dẫn đến bị lặp lại các phần tử ở ma trận hình chữ nhật.

---

## 5. TỪ ĐIỂN (DICT) & TẬP HỢP (SET)

### 5.1. get() và setdefault() an toàn
- **Khi nào dùng:** Truy xuất giá trị khi khóa có thể không tồn tại trong từ điển để tránh lỗi `KeyError`.
- **Code mẫu ngắn:**
```python
d = {"a": 10, "b": 20}

# 1. get(key, default): nếu không có khóa trả về giá trị mặc định, KHÔNG làm thay đổi d
print(d.get("c", 0))     # 0
print(d.get("a", 0))     # 10

# 2. setdefault(key, default): nếu chưa có khóa, CHÈN khóa với giá trị mặc định vào d
d.setdefault("danh_sach", []).append("muc_dau_tien")
print(d["danh_sach"])   # ['muc_dau_tien']
```
- **Độ phức tạp:** Thời gian: O(1) trung bình, Bộ nhớ: O(1).
- **Bẫy thường gặp:** Truy cập trực tiếp `d["c"]` gây sập chương trình với `KeyError`. Luôn dùng `d.get(k, 0)` khi đếm hoặc tích lũy.

### 5.2. Kỹ thuật đếm tần suất và gom nhóm
- **Khi nào dùng:** Đếm số lần xuất hiện của từng phần tử, gom các phần tử có cùng đặc điểm (ví dụ: cùng độ dài chuỗi, cùng số dư).
- **Code mẫu ngắn:**
```python
arr = ["apple", "banana", "apple", "cherry", "banana", "apple"]

# Đếm bằng dict thường
freq = {}
for x in arr:
    freq[x] = freq.get(x, 0) + 1
print(freq)            # {'apple': 3, 'banana': 2, 'cherry': 1}

# Gom nhóm từ theo độ dài
words = ["cat", "dog", "apple", "banana", "bat", "kiwi"]
groups = {}
for w in words:
    groups.setdefault(len(w), []).append(w)
print(groups)          # {3: ['cat', 'dog', 'bat'], 5: ['apple'], 6: ['banana'], 4: ['kiwi']}
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(U) với U là số lượng phần tử phân biệt.
- **Bẫy thường gặp:** Sửa đổi (thêm/xóa khóa) trong khi đang duyệt trực tiếp qua từ điển `for k in d:` sẽ ném lỗi `RuntimeError: dictionary changed size during iteration`. Muốn xóa phải duyệt qua bản sao: `for k in list(d.keys()):`.

### 5.3. Sắp xếp Dictionary theo Value và theo Key
- **Khi nào dùng:** Tìm top các phần tử xuất hiện nhiều nhất, xếp hạng bảng điểm từ điển.
- **Code mẫu ngắn:**
```python
scores = {"Bình": 85, "An": 95, "Cường": 85, "Dũng": 90}

# Sắp xếp theo ĐIỂM GIẢM DẦN, nếu bằng điểm thì TÊN TĂNG DẦN
sorted_items = sorted(scores.items(), key=lambda item: (-item[1], item[0]))
print(sorted_items)
# [('An', 95), ('Dũng', 90), ('Bình', 85), ('Cường', 85)]

# Chuyển lại thành dict nếu cần giữ thứ tự sắp xếp (Python 3.7+)
sorted_dict = dict(sorted_items)
```
- **Độ phức tạp:** Thời gian: O(K log K) với K là số lượng khóa. Bộ nhớ: O(K).
- **Bẫy thường gặp:** Viết `sorted(scores)` chỉ sắp xếp danh sách các **khóa** (`keys`), làm mất giá trị `values`. Phải sắp xếp trên `scores.items()`.

### 5.4. Dict & Set Comprehension
- **Khi nào dùng:** Đảo ngược ánh xạ `{value: key}`, lọc từ điển, tạo tập hợp các giá trị duy nhất sau khi biến đổi.
- **Code mẫu ngắn:**
```python
# Đảo ngược Dict: id -> name thành name -> id
id_to_name = {101: "An", 102: "Bình", 103: "Cường"}
name_to_id = {v: k for k, v in id_to_name.items()}
print(name_to_id)      # {'An': 101, 'Bình': 102, 'Cường': 103}

# Set comprehension: lấy các độ dài từ khác nhau
words = ["apple", "pear", "banana", "plum", "apple"]
unique_lens = {len(w) for w in words}
print(unique_lens)     # {4, 5, 6}
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Khi đảo ngược dict `{v: k for k, v in d.items()}`, nếu các giá trị `v` bị trùng lặp, khóa sau sẽ ghi đè lên khóa trước mà không báo lỗi.

### 5.5. Các phép toán tập hợp (Union, Intersection, Difference, Symmetric Difference)
- **Khi nào dùng:** Tìm phần tử chung giữa 2 danh sách, lọc các phần tử chỉ xuất hiện ở 1 bên, loại bỏ phần tử trùng nhau.
- **Code mẫu ngắn:**
```python
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}

print(s1 | s2)         # Hợp (Union): {1, 2, 3, 4, 5, 6, 7, 8}
print(s1 & s2)         # Giao (Intersection): {4, 5}
print(s1 - s2)         # Hiệu (Difference - có trong s1 nhưng không có trong s2): {1, 2, 3}
print(s1 ^ s2)         # Đối xứng (Symmetric Difference - chỉ thuộc 1 trong 2 tập): {1, 2, 3, 6, 7, 8}

# Kiểm tra tập con / tập cha
print({4, 5} <= s1)    # True (là tập con)
```
- **Độ phức tạp:** Thời gian: O(len(s1) + len(s2)), Bộ nhớ: O(kích thước tập kết quả).
- **Bẫy thường gặp:** Khởi tạo tập hợp rỗng phải dùng `s = set()`. Viết `s = {}` sẽ tạo ra một **Dictionary rỗng**. Ngoài ra, `set` không có thứ tự và không thể truy cập bằng chỉ số `s[0]` (`TypeError: 'set' object is not subscriptable`).

---

## 6. TUPLE, UNPACKING & PHÉP GÁN SONG SONG

### 6.1. Tuple bất biến và dùng Tuple làm Key Hashable
- **Khi nào dùng:** Lưu trữ tọa độ `(r, c)`, trạng thái quy hoạch động `(node, mask)`, hoặc làm khóa trong `dict`/`set`.
- **Code mẫu ngắn:**
```python
# List không thể làm key vì mutable (unhashable)
# Tuple là immutable nên hashable được
visited = set()
visited.add((0, 0))    # Thêm tọa độ (r, c)
print((0, 0) in visited)  # True - O(1)

memo = {}
memo[(0, 5)] = 100     # Dùng làm key bảng nhớ DP
```
- **Độ phức tạp:** Thời gian kiểm tra `in` là O(1).
- **Bẫy thường gặp:** Tuple có 1 phần tử bắt buộc phải có dấu phẩy: `t = (5,)`. Viết `t = (5)` thì Python coi `t` là số nguyên `int` thông thường. Nếu trong tuple chứa một đối tượng mutable (ví dụ `(1, [2, 3])`) thì tuple đó sẽ **không hashable**.

### 6.2. Kỹ thuật Unpacking biến và dấu sao `*`
- **Khi nào dùng:** Tách phần tử đầu/cuối, trích xuất dữ liệu từ danh sách có kích thước thay đổi.
- **Code mẫu ngắn:**
```python
data = ["ID_01", 95, 88, 92, 100, "Pass"]
ma_so, *diem, ket_qua = data

print(ma_so)           # 'ID_01'
print(diem)            # [95, 88, 92, 100] (luôn là 1 list)
print(ket_qua)         # 'Pass'

# Bỏ qua phần tử không quan tâm
dau, *_, cuoi = [10, 20, 30, 40, 50]
print(dau, cuoi)       # 10 50
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N) cho danh sách con `diem`.
- **Bẫy thường gặp:** Không thể dùng 2 dấu sao `*` trong cùng một biểu thức unpacking (ví dụ: `*a, *b = [1, 2, 3]` gây lỗi `SyntaxError: multiple starred expressions in assignment`).

### 6.3. Hoán đổi biến và gán trạng thái song song
- **Khi nào dùng:** Hoán đổi 2 biến không cần biến tạm, cập nhật công thức truy hồi Fibonacci hoặc DP mà không làm ghi đè biến cũ.
- **Code mẫu ngắn:**
```python
# 1. Hoán đổi biến
x, y = 10, 20
x, y = y, x
print(x, y)            # 20 10

# 2. Tính số Fibonacci thứ n: F(n) = F(n-1) + F(n-2)
a, b = 0, 1
for _ in range(10):
    a, b = b, a + b
print(a)               # 55
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Viết tuần tự từng dòng: `a = b` rồi `b = a + b` sẽ sai vì dòng thứ hai lấy giá trị `a` đã bị ghi đè. Gán song song `a, b = b, a + b` đánh giá toàn bộ vế phải trước khi gán vào vế trái.

---

## 7. VÒNG LẶP & ĐIỀU KHIỂN LUỒNG (CONTROL FLOW)

### 7.1. Cú pháp toàn diện của range(start, stop, step)
- **Khi nào dùng:** Lặp số lần xác định, duyệt chỉ số mảng xuôi hoặc ngược.
- **Code mẫu ngắn:**
```python
# range(stop): 0 đến stop - 1
print(list(range(5)))             # [0, 1, 2, 3, 4]

# range(start, stop): start đến stop - 1
print(list(range(2, 6)))          # [2, 3, 4, 5]

# range(start, stop, step): nhảy theo bước step
print(list(range(0, 10, 2)))      # [0, 2, 4, 6, 8]

# Duyệt ngược từ n - 1 về 0:
n = 5
print(list(range(n - 1, -1, -1))) # [4, 3, 2, 1, 0]
```
- **Độ phức tạp:** Thời gian tạo: O(1) (đối tượng lười), bộ nhớ O(1).
- **Bẫy thường gặp:** Cận trên `stop` **không bao giờ được chạm tới**. Khi duyệt ngược từ `n-1` về `0`, nếu viết `range(n - 1, 0, -1)` thì vòng lặp sẽ dừng ở `1` và bỏ sót chỉ số `0`. Bắt buộc phải viết `stop = -1`.

### 7.2. break, continue và khối else của vòng lặp
- **Khi nào dùng:** Khối `else` của vòng lặp chạy khi và chỉ khi vòng lặp hoàn thành tự nhiên (không bị ngắt bởi `break`). Rất mạnh khi tìm kiếm phần tử thỏa mãn điều kiện.
- **Code mẫu ngắn:**
```python
def kiem_tra_nguyen_to(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            print(f"{n} chia hết cho {i}")
            break
    else:
        # Chạy khi KHÔNG có break nào xảy ra
        print(f"{n} là số nguyên tố")
        return True
    return False

kiem_tra_nguyen_to(17) # In ra: 17 là số nguyên tố
```
- **Độ phức tạp:** Phụ thuộc vào vòng lặp, không tốn thêm bộ nhớ.
- **Bẫy thường gặp:** Khối `else` trong vòng lặp bị nhầm với `if...else`. Nếu vòng lặp gặp `break`, khối `else` sẽ bị bỏ qua hoàn toàn.

### 7.3. Thoát sớm khỏi vòng lặp lồng nhau
- **Khi nào dùng:** Tìm kiếm vị trí trong ma trận 2 chiều và muốn dừng ngay khi tìm thấy.
- **Code mẫu ngắn:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
target = 5

# CÁCH 1 (Chuẩn nhất): Bọc vào trong hàm và dùng return
def tim_vi_tri(matrix, target):
    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if matrix[r][c] == target:
                return (r, c)
    return None

vi_tri = tim_vi_tri(matrix, target)

# CÁCH 2: Dùng biến cờ (flag)
found = False
for r in range(len(matrix)):
    for c in range(len(matrix[0])):
        if matrix[r][c] == target:
            found = True
            break
    if found:
        break
```
- **Độ phức tạp:** Thời gian: O(1) tốt nhất, O(R x C) xấu nhất.
- **Bẫy thường gặp:** Chỉ dùng 1 lệnh `break` trong vòng lặp trong thì chỉ thoát được vòng lặp trong, vòng lặp ngoài vẫn tiếp tục chạy.

---

## 8. HÀM & CƠ CHẾ HOẠT ĐỘNG (FUNCTIONS)

### 8.1. Bẫy Mutable Default Argument
- **Khi nào dùng:** Định nghĩa tham số mặc định cho hàm là danh sách hoặc từ điển.
- **Code mẫu ngắn:**
```python
# SAI: list được tạo 1 lần duy nhất lúc nạp hàm và dùng chung cho mọi lần gọi
# def them_muc_sai(val, ds=[]): ds.append(val); return ds

# ĐÚNG: Gán giá trị mặc định là None rồi khởi tạo bên trong
def them_muc_dung(val, ds=None):
    if ds is None:
        ds = []
    ds.append(val)
    return ds

print(them_muc_dung(1))  # [1]
print(them_muc_dung(2))  # [2] (Không bị dính số 1 của lần gọi trước)
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Đây là bẫy phổ biến nhất trong đề thi COS Pro và phỏng vấn Python. Nếu để `ds=[]` hoặc `memo={}` ở chữ ký hàm, các lần gọi hàm độc lập sẽ ghi đè dữ liệu lên nhau.

### 8.2. Tham số biến thiên *args và **kwargs
- **Khi nào dùng:** Viết hàm nhận số lượng đối số tùy ý, chuyển tiếp tham số cho hàm khác.
- **Code mẫu ngắn:**
```python
def tinh_tong(*args):
    # args là một tuple chứa tất cả các đối số vị trí truyền vào
    return sum(args)

print(tinh_tong(1, 2, 3, 4, 5))  # 15

def cau_hinh(**kwargs):
    # kwargs là một dict chứa các đối số có đặt tên
    return kwargs.get("mode", "standard")

print(cau_hinh(timeout=10, mode="pro")) # 'pro'
```
- **Độ phức tạp:** Thời gian: O(K), Bộ nhớ: O(K) với K là số đối số.
- **Bẫy thường gặp:** Quên giải nén khi truyền danh sách vào hàm: `tinh_tong([1, 2, 3])` sẽ làm `args` thành `([1, 2, 3],)` và ném lỗi `TypeError` trong `sum`. Phải gọi `tinh_tong(*[1, 2, 3])`.

### 8.3. Trả về nhiều giá trị
- **Khi nào dùng:** Hàm cần trả về đồng thời nhiều thông tin (ví dụ: giá trị min, max và trung bình).
- **Code mẫu ngắn:**
```python
def thong_ke(arr):
    if not arr: return 0, 0, 0
    return min(arr), max(arr), sum(arr) / len(arr)

# Nhận kết quả qua unpacking
nho_nhat, lon_nhat, avg = thong_ke([10, 20, 30])
print(nho_nhat, lon_nhat, avg)  # 10 30 20.0
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Thực chất Python gom các giá trị trả về thành 1 Tuple. Nếu số biến nhận không khớp với số giá trị return sẽ ném lỗi `ValueError: too many values to unpack` hoặc `not enough values to unpack`.

### 8.4. Đệ quy, Base Case và Giới hạn độ sâu đệ quy
- **Khi nào dùng:** Duyệt cây, duyệt đồ thị DFS, chia để trị, quy hoạch động top-down có nhớ.
- **Code mẫu ngắn:**
```python
import sys
# Tăng giới hạn đệ quy nếu đề thi yêu cầu n lớn (mặc định Python là 1000)
sys.setrecursionlimit(200000)

def giai_thua(n):
    # 1. Base case: điều kiện dừng bắt buộc
    if n <= 1:
        return 1
    # 2. Recursive step
    return n * giai_thua(n - 1)

print(giai_thua(5))  # 120
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ Call Stack: O(N).
- **Bẫy thường gặp:** Thiếu điều kiện dừng hoặc điều kiện dừng không bao quát hết các trường hợp biên (n <= 0) dẫn đến đệ quy vô hạn và lỗi `RecursionError: maximum recursion depth exceeded`.

---

## 9. THƯ VIỆN CHUẨN THIẾT YẾU TRONG PHÒNG THI

### 9.1. collections (Counter, defaultdict, deque)
- **Khi nào dùng:**
  - `Counter`: Đếm tần suất ký tự/phần tử cực nhanh, tìm phần tử xuất hiện nhiều nhất.
  - `defaultdict`: Khởi tạo sẵn danh sách/số đếm khi khóa chưa tồn tại.
  - `deque`: Hàng đợi hai đầu dùng cho thuật toán BFS (thao tác popleft/appendleft trong O(1)).
- **Code mẫu ngắn:**
```python
from collections import Counter, defaultdict, deque

# 1. Counter
counts = Counter("abracadabra")
print(counts.most_common(2))    # [('a', 5), ('b', 2)] - 2 phần tử xuất hiện nhiều nhất

# 2. defaultdict
graph = defaultdict(list)
graph["A"].append("B")          # Không bao giờ bị KeyError
print(graph["C"])               # []

# 3. deque
q = deque([1, 2, 3])
q.append(4)                     # Thêm đuôi O(1)
q.appendleft(0)                 # Thêm đầu O(1)
dau = q.popleft()               # Lấy đầu O(1) - KHÔNG DÙNG list.pop(0) vì tốn O(N)!
```
- **Độ phức tạp:** Tất cả thao tác `append`, `popleft`, `Counter`, `defaultdict` đều đạt O(1) hoặc O(N) tuyến tính.
- **Bẫy thường gặp:** Tuyệt đối **không dùng `list.pop(0)`** làm hàng đợi trong BFS vì mỗi lần xóa đầu list tốn O(N), khiến tổng thời gian BFS bị dội lên O(N^2) và bị Time Limit Exceeded (TLE).

### 9.2. heapq (Min-Heap, Max-Heap, nlargest, nsmallest)
- **Khi nào dùng:** Duy trì danh sách ưu tiên, tìm Top-K phần tử lớn nhất/nhỏ nhất trong luồng dữ liệu, thuật toán Dijkstra.
- **Code mẫu ngắn:**
```python
import heapq

# 1. Min-Heap (Mặc định trong Python)
h = []
for x in [5, 1, 8, 3, 2]:
    heapq.heappush(h, x)
print(heapq.heappop(h))        # 1 (phần tử nhỏ nhất)

# 2. Biến đổi mảng thành Heap tại chỗ trong O(N)
arr = [9, 4, 7, 1, 6]
heapq.heapify(arr)
print(arr[0])                  # 1 (luôn là min)

# 3. Mô phỏng Max-Heap: Đổi dấu phần tử (-x)
max_h = []
for x in [5, 1, 8, 3, 2]:
    heapq.heappush(max_h, -x)
print(-heapq.heappop(max_h))   # 8 (phần tử lớn nhất)

# 4. nlargest / nsmallest
print(heapq.nlargest(2, [10, 50, 20, 40]))   # [50, 40]
```
- **Độ phức tạp:** `heappush`/`heappop`: O(log K), `heapify`: O(N), `nlargest`/`nsmallest`: O(N log K).
- **Bẫy thường gặp:** Khi lưu tuple vào heap `(priority, item)`, nếu hai phần tử có `priority` bằng nhau, Python sẽ so sánh phần tử thứ hai `item`. Nếu `item` là đối tượng hoặc dict không so sánh được, Python sẽ ném lỗi `TypeError`. Khắc phục bằng cách thêm chỉ số ID duy nhất: `(priority, idx, item)`.

### 9.3. itertools (permutations, combinations, product, accumulate, groupby)
- **Khi nào dùng:** Sinh hoán vị, tổ hợp, tích Descartes, tổng tích lũy dồn và gom nhóm liên tiếp.
- **Code mẫu ngắn:**
```python
import itertools

# Hoán vị (Permutations) & Tổ hợp (Combinations)
print(list(itertools.permutations([1, 2, 3], 2))) # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]
print(list(itertools.combinations([1, 2, 3], 2))) # [(1,2), (1,3), (2,3)]

# Tích Descartes (Product)
print(list(itertools.product([1, 2], ['a', 'b']))) # [(1,'a'), (1,'b'), (2,'a'), (2,'b')]

# Tổng tích lũy (Accumulate)
print(list(itertools.accumulate([1, 2, 3, 4])))    # [1, 3, 6, 10]

# Gom nhóm liên tiếp (Groupby) - MẢNG PHẢI ĐƯỢC SORT TRƯỚC
data = sorted([("A", 1), ("B", 2), ("A", 3)], key=lambda x: x[0])
for k, g in itertools.groupby(data, key=lambda x: x[0]):
    print(k, list(g))
# A [('A', 1), ('A', 3)]
# B [('B', 2)]
```
- **Độ phức tạp:** `permutations`: O(N! / (N-K)!), `combinations`: O(C(N,K)), `accumulate`: O(N).
- **Bẫy thường gặp:** `itertools.groupby` chỉ gom các phần tử **liên tiếp** có cùng khóa. Nếu mảng chưa được sắp xếp theo khóa đó, các nhóm rời rạc sẽ bị tách thành nhiều khối riêng biệt.

### 9.4. math (gcd, lcm, isqrt, ceil, floor, inf, comb, perm)
- **Khi nào dùng:** Tính toán hình học, số học, ước chung lớn nhất, bội chung nhỏ nhất, căn nguyên, tổ hợp xác suất.
- **Code mẫu ngắn:**
```python
import math

print(math.gcd(24, 36))        # 12 (Ước chung lớn nhất)
print(math.lcm(12, 18))        # 36 (Bội chung nhỏ nhất - Python 3.9+)
print(math.isqrt(26))          # 5 (Căn bậc 2 lấy phần nguyên chính xác, an toàn cho số cực lớn)
print(math.ceil(4.1))          # 5 (Làm tròn lên)
print(math.floor(4.9))         # 4 (Làm tròn xuống)
print(math.comb(5, 2))         # 10 (Tổ hợp chập 2 của 5)
print(math.perm(5, 2))         # 20 (Chỉnh hợp chập 2 của 5)
```
- **Độ phức tạp:** Thời gian: O(log(min(a, b))) cho GCD, O(1) cho các hàm còn lại.
- **Bẫy thường gặp:** Dùng `int(n**0.5)` với số nguyên cực lớn (> 10^{16}) có thể bị sai lệch độ chính xác dấu phẩy động của float. Luôn ưu tiên dùng `math.isqrt(n)`.

### 9.5. bisect (bisect_left, bisect_right, insort_left)
- **Khi nào dùng:** Tìm kiếm vị trí chèn trong mảng **đã sắp xếp** trong thời gian O(log N), nền tảng giải bài toán LIS (Dãy con tăng dài nhất).
- **Code mẫu ngắn:**
```python
import bisect

arr = [10, 20, 20, 20, 30, 40]

# bisect_left: Trả về chỉ số của phần tử ĐẦU TIÊN >= x
print(bisect.bisect_left(arr, 20))   # 1

# bisect_right: Trả về chỉ số của phần tử ĐẦU TIÊN > x
print(bisect.bisect_right(arr, 20))  # 4

# Đếm số lần xuất hiện của x trong mảng đã sort trong O(log N)
so_lan = bisect.bisect_right(arr, 20) - bisect.bisect_left(arr, 20)
print(so_lan)                        # 3
```
- **Độ phức tạp:** Thời gian: O(log N), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Hàm trong thư viện `bisect` yêu cầu mảng đầu vào **bắt buộc đã được sắp xếp tăng dần**. Nếu mảng chưa sắp xếp, kết quả trả về sẽ hoàn toàn vô nghĩa.

### 9.6. datetime cơ bản (date, timedelta, tính số ngày và thứ)
- **Khi nào dùng:** Tính số ngày giữa 2 mốc thời gian, xác định thứ trong tuần, tính ngày hết hạn bảo hành/thuê phòng.
- **Code mẫu ngắn:**
```python
from datetime import date, timedelta

# 1. Tính số ngày giữa 2 ngày
d1 = date(2026, 8, 27)
d2 = date(2026, 9, 2)
so_ngay = (d2 - d1).days
print(so_ngay)                       # 6

# 2. Cộng trừ ngày
sau_10_ngay = d1 + timedelta(days=10)
print(sau_10_ngay)                   # 2026-09-06

# 3. Xác định thứ trong tuần (0 = Thứ 2, 6 = Chủ nhật)
print(d1.weekday())                  # 3 (Thứ 5)
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Nhớ rằng `weekday()` quy ước Thứ 2 là 0 và Chủ nhật là 6 (khác với `isoweekday()` quy ước Thứ 2 là 1 và Chủ nhật là 7).

---

## 10. CÁC THUẬT TOÁN KINH ĐIỂN PHẢI THUỘC LÒNG

### 10.1. Hai con trỏ (Two Pointers)
- **Khi nào dùng:** Mảng đã được sắp xếp, tìm cặp số có tổng bằng Target, đảo mảng, gộp 2 mảng đã sắp.
- **Code mẫu ngắn:**
```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        tong = arr[left] + arr[right]
        if tong == target:
            return left, right
        elif tong < target:
            left += 1
        else:
            right -= 1
    return None

print(two_sum_sorted([1, 3, 4, 6, 8, 11], 10)) # (2, 3) vì arr[2] + arr[3] = 4 + 6 = 10
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Điều kiện dừng vòng lặp: nếu đề yêu cầu 2 phần tử ở **2 vị trí phân biệt**, dùng `while left < right`. Nếu 1 phần tử được dùng 2 lần thì dùng `while left <= right`.

### 10.2. Cửa sổ trượt (Sliding Window: Cố định và Biến thiên)
- **Khi nào dùng:** Tìm đoạn con liên tiếp có tổng lớn nhất độ dài K, hoặc tìm đoạn con ngắn/dài nhất thỏa mãn điều kiện.
- **Code mẫu ngắn:**
```python
# Cửa sổ biến thiên: Tìm độ dài chuỗi con dài nhất không chứa ký tự lặp lại
def longest_unique_substr(s):
    seen = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

print(longest_unique_substr("abcabcbb")) # 3 (chuỗi "abc")
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(min(N, số ký tự phân biệt)) với số ký tự phân biệt là kích thước bảng chữ cái.
- **Bẫy thường gặp:** Khi cập nhật `left`, nếu ký tự đã thấy nằm ở vị trí **trước** `left` hiện tại (`seen[char] < left`), không được kéo lùi `left` về quá khứ. Bắt buộc có điều kiện `seen[char] >= left`.

### 10.3. Mảng tiền tố (Prefix Sum 1D & 2D)
- **Khi nào dùng:** Tính tổng các phần tử trong đoạn [L, R] liên tục với nhiều truy vấn trong O(1).
- **Code mẫu ngắn:**
```python
arr = [2, 4, 1, 7, 5]
# Xây dựng mảng tiền tố có độ dài N + 1
pref = [0] * (len(arr) + 1)
for i in range(len(arr)):
    pref[i + 1] = pref[i] + arr[i]
# pref = [0, 2, 6, 7, 14, 19]

# Tính tổng đoạn arr[1..3] (các số 4 + 1 + 7 = 12) trong O(1)
L, R = 1, 3
tong_doan = pref[R + 1] - pref[L]
print(tong_doan)                     # 12
```
- **Độ phức tạp:** Khởi tạo: Thời gian O(N), Bộ nhớ O(N). Mỗi truy vấn: O(1).
- **Bẫy thường gặp:** Lỗi lệch chỉ số (off-by-one). Công thức chuẩn với mảng tiền tố kích thước N+1 luôn là: sum(L ... R) = pref[R + 1] - pref[L].

### 10.4. Sắp xếp đa tiêu chí (Custom Multi-key Sort)
- **Khi nào dùng:** Xếp hạng danh sách theo nhiều cột, xử lý ưu tiên trong quản lý tác vụ, đề bài Bảng B.
- **Code mẫu ngắn:**
```python
# Danh sách: (Mã, Điểm, Số lần vi phạm)
# Yêu cầu: Điểm GIẢM DẦN, Vi phạm TĂNG DẦN, Mã TĂNG DẦN
data = [("SV01", 85, 1), ("SV02", 90, 0), ("SV03", 85, 0)]
data.sort(key=lambda x: (-x[1], x[2], x[0]))
print(data)
# [('SV02', 90, 0), ('SV03', 85, 0), ('SV01', 85, 1)]
```
- **Độ phức tạp:** Thời gian: O(N log N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Dấu `-` chỉ áp dụng được cho kiểu dữ liệu số (`int`, `float`). Không thể viết `-x[0]` với chuỗi `str`.

### 10.5. Tìm kiếm nhị phân (Binary Search & Binary Search the Answer)
- **Khi nào dùng:** Tìm phần tử trong mảng đã sắp xếp, hoặc tìm giá trị kết quả tối ưu nhỏ nhất/lớn nhất thỏa mãn điều kiện đơn điệu (chặt nhị phân kết quả).
- **Code mẫu ngắn:**
```python
# Binary Search the Answer: Đóng gói hàng vào K chuyến xe tải
def can_ship(weights, capacity, max_days):
    days, current_load = 1, 0
    for w in weights:
        if current_load + w > capacity:
            days += 1
            current_load = 0
        current_load += w
    return days <= max_days

def min_ship_capacity(weights, max_days):
    low, high = max(weights), sum(weights)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        if can_ship(weights, mid, max_days):
            ans = mid
            high = mid - 1    # Thử tìm tải trọng nhỏ hơn
        else:
            low = mid + 1     # Tải trọng chưa đủ, phải tăng lên
    return ans

print(min_ship_capacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)) # 15
```
- **Độ phức tạp:** Thời gian: O(N log(tong W)), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Xác định sai không gian tìm kiếm `low` và `high`. `low` tối thiểu phải bằng max(weights) (vì nếu nhỏ hơn thì không thể chở được kiện hàng nặng nhất).

### 10.6. Hợp nhất các khoảng (Merge Intervals)
- **Khi nào dùng:** Gộp các khoảng thời gian bị trùng lặp, tính tổng diện tích phủ/thời gian bận.
- **Code mẫu ngắn:**
```python
def merge_intervals(intervals):
    if not intervals: return []
    # 1. Sắp xếp các khoảng theo thời điểm bắt đầu
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        last_start, last_end = merged[-1]
        if start <= last_end:
            # Chồng lấn hoặc tiếp xúc: mở rộng điểm kết thúc
            merged[-1][1] = max(last_end, end)
        else:
            merged.append([start, end])
    return merged

print(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]))
# [[1, 6], [8, 10], [15, 18]]
```
- **Độ phức tạp:** Thời gian: O(N log N) (do bước sort), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Khi gộp khoảng, điểm kết thúc mới phải là `max(last_end, end)` chứ không phải đơn thuần là `end` (vì khoảng trước có thể bao trùm hoàn toàn khoảng sau, ví dụ `[1, 10]` và `[2, 5]`).

### 10.7. Ngăn xếp (Stack: Dấu ngoặc, Biểu thức hậu tố, Monotonic Stack)
- **Khi nào dùng:** Kiểm tra chuỗi ngoặc hợp lệ, tính giá trị biểu thức Ba Lan ngược (RPN), tìm phần tử lớn hơn tiếp theo (Next Greater Element).
- **Code mẫu ngắn:**
```python
def is_valid_parentheses(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top_elem = stack.pop() if stack else '#'
            if mapping[char] != top_elem:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

print(is_valid_parentheses("{[()]}"))  # True
print(is_valid_parentheses("([)]"))    # False
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Gọi `stack.pop()` khi stack đang rỗng dẫn đến `IndexError`. Cuối hàm quên kiểm tra `len(stack) == 0` dẫn đến chấp nhận các chuỗi mở ngoặc thừa như `"((("`.

### 10.8. BFS và DFS (Trên lưới ma trận và Đồ thị)
- **Khi nào dùng:**
  - BFS (Breadth-First Search): Tìm đường đi ngắn nhất / số bước ít nhất trên lưới ma trận không trọng số.
  - DFS (Depth-First Search): Đếm số vùng đảo, số thành phần liên thông, duyệt vét cạn cây nhị phân.
- **Code mẫu ngắn (BFS tìm đường ngắn nhất trên lưới):**
```python
from collections import deque

def shortest_path_grid(grid):
    R, C = len(grid), len(grid[0])
    if grid[0][0] == 1 or grid[R-1][C-1] == 1: return -1
    
    q = deque([(0, 0, 1)]) # (row, col, distance)
    visited = {(0, 0)}
    
    while q:
        r, c, dist = q.popleft()
        if r == R - 1 and c == C - 1:
            return dist
            
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and (nr, nc) not in visited:
                if grid[nr][nc] == 0:
                    visited.add((nr, nc))
                    q.append((nr, nc, dist + 1))
    return -1

grid = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0]
]
print(shortest_path_grid(grid)) # 5
```
- **Độ phức tạp:** Thời gian: O(R x C), Bộ nhớ: O(R x C).
- **Bẫy thường gặp:** Thêm vào `visited` ngay lúc `append` vào hàng đợi `q`. Nếu để đến lúc `popleft` mới đánh dấu `visited`, một ô sẽ bị thêm nhiều lần vào hàng đợi dẫn đến nổ bộ nhớ (Memory Limit Exceeded).

### 10.9. Quy hoạch động (DP 1D và DP 2D Grid)
- **Khi nào dùng:** Bài toán đổi tiền xu (Coin Change), tổng đường đi nhỏ nhất trên ma trận (Min Path Sum), bài toán chọn quà không kề nhau (House Robber).
- **Code mẫu ngắn (Coin Change - Số đồng xu ít nhất):**
```python
def min_coins(coins, amount):
    # dp[i] lưu số đồng xu ít nhất để đổi số tiền i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for a in range(1, amount + 1):
        for coin in coins:
            if a >= coin:
                dp[a] = min(dp[a], dp[a - coin] + 1)
                
    return dp[amount] if dp[amount] != float('inf') else -1

print(min_coins([1, 2, 5], 11)) # 3 (5 + 5 + 1)
```
- **Độ phức tạp:** Thời gian: O(amount x len(coins)), Bộ nhớ: O(amount).
- **Bẫy thường gặp:** Khởi tạo mảng DP với giá trị ban đầu không phù hợp. Với bài toán tìm min phải khởi tạo `float('inf')` và gán `dp[0] = 0`. Nếu không gán `dp[0] = 0`, toàn bộ mảng sẽ giữ nguyên vô cùng.

### 10.10. Top-K phần tử bằng Heap
- **Khi nào dùng:** Tìm K phần tử lớn nhất trong mảng N phần tử mà không cần sắp xếp toàn bộ mảng (N rất lớn, K nhỏ).
- **Code mẫu ngắn:**
```python
import heapq

def find_kth_largest(nums, k):
    # Duy trì min-heap kích thước đúng k
    min_heap = []
    for x in nums:
        heapq.heappush(min_heap, x)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]

print(find_kth_largest([3, 2, 1, 5, 6, 4], 2)) # 5 (lớn thứ 2)
```
- **Độ phức tạp:** Thời gian: O(N log K), Bộ nhớ phụ: O(K). Nhanh hơn nhiều so với sắp xếp toàn bộ O(N log N) khi K << N.
- **Bẫy thường gặp:** Muốn tìm K phần tử **lớn nhất**, ta phải dùng **Min-Heap** (để liên tục đẩy phần tử bé nhất ra ngoài khi kích thước > K).

### 10.11. Sàng số nguyên tố Eratosthenes
- **Khi nào dùng:** Tìm hoặc đếm tất cả các số nguyên tố trong khoảng từ 1 đến N (N <= 10^7).
- **Code mẫu ngắn:**
```python
def sieve_of_eratosthenes(n):
    if n < 2: return []
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    
    for i in range(2, int(n**0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False
                
    return [i for i, prime in enumerate(is_prime) if prime]

print(sieve_of_eratosthenes(30))
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```
- **Độ phức tạp:** Thời gian: O(N log log N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Vòng lặp loại bỏ bội số bắt đầu từ i x i (`range(i * i, n + 1, i)`). Bắt đầu từ 2 x i vẫn đúng nhưng chậm hơn. Chú ý đánh dấu `is_prime[0] = is_prime[1] = False`.

---

## 11. LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) CHO COS PRO LEVEL 1

### 11.1. Cấu trúc Class, __init__, thuộc tính và phương thức
- **Khi nào dùng:** Đề bài Chung kết Level 1 yêu cầu thiết kế hệ thống quản lý (kho hàng, tài khoản ngân hàng, giỏ hàng, thực thể trò chơi).
- **Code mẫu ngắn:**
```python
class BankAccount:
    def __init__(self, account_id, initial_balance=0):
        self.account_id = account_id
        self.balance = initial_balance
        self.history = []
        
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(("DEPOSIT", amount))
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.history.append(("WITHDRAW", amount))
            return True
        return False
```
- **Độ phức tạp:** Mỗi phương thức thao tác trong O(1).
- **Bẫy thường gặp:** Khai báo thuộc tính dạng mutable ở cấp lớp (Class Variable) thay vì trong `__init__`. Mọi đối tượng tạo ra sẽ chia sẻ chung danh sách đó. Luôn khởi tạo `self.history = []` bên trong `__init__`.

### 11.2. Các phương thức đặc biệt: __str__, __len__, __eq__, __lt__
- **Khi nào dùng:**
  - `__str__`: In chuỗi đại diện thân thiện.
  - `__len__`: Cho phép gọi hàm `len(obj)`.
  - `__eq__`: Định nghĩa so sánh bằng `obj1 == obj2`.
  - `__lt__`: Định nghĩa toán tử nhỏ hơn `<`, bắt buộc có nếu muốn sắp xếp danh sách đối tượng bằng `sorted()` hoặc đưa vào `heapq`.
- **Code mẫu ngắn:**
```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
        
    def __str__(self):
        return f"Student({self.name}, {self.score})"
        
    def __eq__(self, other):
        if isinstance(other, Student):
            return self.name == other.name and self.score == other.score
        return False
        
    def __lt__(self, other):
        # Điểm cao hơn đứng trước; nếu bằng điểm thì tên theo thứ tự từ điển
        if self.score != other.score:
            return self.score > other.score  # Đảo dấu để xếp giảm dần
        return self.name < other.name

students = [Student("Bình", 85), Student("An", 95), Student("Cường", 85)]
students.sort()
print([str(s) for s in students])
# ['Student(An, 95)', 'Student(Bình, 85)', 'Student(Cường, 85)']
```
- **Độ phức tạp:** Thời gian: O(1) cho mỗi phép so sánh.
- **Bẫy thường gặp:** Đưa đối tượng tùy biến vào `heapq` mà không định nghĩa `__lt__` sẽ gây lỗi `TypeError: '<' not supported between instances of 'Student' and 'Student'`.

### 11.3. Khi nào cần dùng Class trong bài thi
- **Quy tắc nhận biết:**
  1. Khi đề bài cho sẵn khung code dạng `class Solution` hoặc yêu cầu cài đặt một lớp cụ thể với các tên phương thức cho trước.
  2. Khi bài toán cần duy trì trạng thái nội bộ phức tạp qua nhiều lần gọi hàm liên tiếp (ví dụ: mô phỏng máy bán hàng tự động, bộ đệm LRU Cache, hệ thống thẻ gửi xe).
  3. Khi cần đóng gói dữ liệu và hàm xử lý để code gọn gàng, tránh dùng biến toàn cục (`global`).

---

## 12. XỬ LÝ NGOẠI LỆ CƠ BẢN (EXCEPTION HANDLING)

### 12.1. Cấu trúc try...except và các ngoại lệ phổ biến
- **Khi nào dùng:** Bắt lỗi dữ liệu đầu vào không hợp lệ, xử lý phép chia cho 0, truy xuất vượt biên.
- **Code mẫu ngắn:**
```python
def safe_divide(a_str, b_str):
    try:
        a = float(a_str)
        b = float(b_str)
        return a / b
    except ValueError:
        return "Lỗi: Đầu vào không phải số hợp lệ"
    except ZeroDivisionError:
        return "Lỗi: Không thể chia cho 0"
    except Exception as e:
        return f"Lỗi không xác định: {e}"

print(safe_divide("10", "2"))   # 5.0
print(safe_divide("10", "0"))   # 'Lỗi: Không thể chia cho 0'
print(safe_divide("abc", "2"))  # 'Lỗi: Đầu vào không phải số hợp lệ'
```
- **Độ phức tạp:** Thời gian: O(1), Bộ nhớ: O(1).
- **Bẫy thường gặp:** Dùng `except:` trần trụi mà không bắt lỗi cụ thể có thể vô tình nuốt cả các ngoại lệ hệ thống như `KeyboardInterrupt` hoặc lỗi chính tả biến `NameError`, khiến việc gỡ lỗi trong phòng thi cực kỳ khó khăn.

### 12.2. Ép kiểu an toàn không gây sập chương trình
- **Khi nào dùng:** Lọc ra tất cả các số hợp lệ từ một danh sách chứa chuỗi hỗn tạp.
- **Code mẫu ngắn:**
```python
def extract_numbers(raw_list):
    res = []
    for item in raw_list:
        try:
            res.append(int(item))
        except (ValueError, TypeError):
            continue
    return res

print(extract_numbers(["10", "abc", None, "45", "9.5", 30]))
# [10, 45, 30]
```
- **Độ phức tạp:** Thời gian: O(N), Bộ nhớ: O(N).
- **Bẫy thường gặp:** Chuỗi `"9.5"` không thể chuyển trực tiếp sang `int("9.5")` bằng `int()` (ném lỗi `ValueError`). Muốn lấy phần nguyên của chuỗi số thực phải viết `int(float("9.5"))`.

---

## 13. BẢNG TRA CỨU ĐỘ PHỨC TẠP & ƯỚC LƯỢNG THỜI GIAN CHẠY

Trong các kỳ thi lập trình chuẩn COS Pro, thời gian thực thi cho phép thông thường là **1.0 giây** cho mỗi bài toán. Trình thông dịch Python có thể thực hiện xấp xỉ **10^7 đến 3 x 10^7 phép tính đơn giản trong 1 giây**.

### 13.1. Bảng quy đổi giới hạn dữ liệu N sang thuật toán khả thi

| Giới hạn N của đề bài | Độ phức tạp thời gian mục tiêu | Thuật toán gợi ý |
|---|---|---|
| N <= 10 | O(N!) hoặc O(N^2 . 2^N) | Quay lui vét cạn (Backtracking), Hoán vị (`itertools.permutations`) |
| N <= 20 | O(2^N) | Duyệt tập con, Bitmask DP, Đệ quy nhánh cận |
| N <= 500 | O(N^3) | Floyd-Warshall, Quy hoạch động 3 chiều, 3 vòng lặp lồng |
| N <= 2\,000 | O(N^2) | 2 vòng lặp lồng, Quy hoạch động ma trận, Sắp xếp cơ bản |
| N <= 100\,000 (10^5) | O(N log N) hoặc O(N) | Sắp xếp (Timsort), Two Pointers, Sliding Window, Heap, Binary Search, Sàng nguyên tố |
| N <= 1\,000\,000 (10^6) | O(N) hoặc O(N log N) | Duyệt 1 vòng lặp, Mảng tiền tố (Prefix Sum), Đếm tần suất (Counter/Dict) |
| N > 10^7 | O(log N) hoặc O(1) | Tìm kiếm nhị phân, Công thức toán học, GCD/LCM, Lũy thừa nhị phân |

### 13.2. Bảng tra cứu độ phức tạp các thao tác dựng sẵn (Built-in)

| Cấu trúc / Thao tác | Cú pháp Python | Độ phức tạp thời gian trung bình | Ghi chú |
|---|---|---|---|
| **List: Truy xuất chỉ số** | `a[i]` | O(1) | Truy cập trực tiếp qua con trỏ bộ nhớ |
| **List: Thêm / Xóa cuối** | `a.append(x)`, `a.pop()` | O(1) | Rất nhanh |
| **List: Chèn / Xóa đầu & giữa** | `a.insert(0, x)`, `a.pop(0)` | **O(N)** | **Tuyệt đối tránh trong vòng lặp!** Dùng `deque` thay thế |
| **List: Tìm kiếm / Xóa theo giá trị** | `x in a`, `a.remove(x)`, `a.count(x)` | O(N) | Duyệt tuần tự tuyến tính |
| **List: Cắt lát (Slicing)** | `a[start:stop]` | O(K) | K = stop - start |
| **List: Sắp xếp** | `sorted(a)`, `a.sort()` | O(N log N) | Timsort tối ưu |
| **Deque: Thêm / Xóa cả 2 đầu** | `q.appendleft()`, `q.popleft()` | O(1) | Chuẩn cho thuật toán BFS |
| **Dict / Set: Truy xuất / Thêm / Xóa** | `k in d`, `d[k] = v`, `s.add(x)` | O(1) | Dựa trên bảng băm (Hash Table) |
| **Set: Các phép toán tập hợp** | `s1 \| s2`, `s1 & s2`, `s1 - s2` | O(len(s1) + len(s2)) | Phụ thuộc kích thước 2 tập |
| **Heapq: Thêm / Lấy phần tử nhỏ nhất**| `heappush(h, x)`, `heappop(h)` | O(log K) | Duy trì cấu trúc cây nhị phân Min-Heap |
| **Heapq: Tạo heap từ danh sách** | `heapq.heapify(arr)` | O(N) | Nhanh hơn N lần push (O(N log N)) |
| **Bisect: Tìm kiếm nhị phân** | `bisect_left(arr, x)` | O(log N) | Yêu cầu mảng đã được sort |
| **String: Ghép chuỗi danh sách** | `"".join(list_str)` | O(N) | Tối ưu vượt trội so với phép cộng chuỗi `s += c` (O(N^2)) |
