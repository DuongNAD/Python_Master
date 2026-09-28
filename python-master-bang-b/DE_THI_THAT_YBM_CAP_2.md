# ĐỀ THI THẬT YBM COS PRO - CẤP 2 (PYTHON)
*Tổng hợp & Giải thích chi tiết các câu hỏi thi thực tế*

---

## [Câu hỏi 02] Điền vào chỗ trống - Tìm học sinh xếp hạng 1 (Tổng điểm cao nhất)

### 1. Đề bài
Trường cấp ba thực hiện đánh giá thực hành $N$ lần cho từng môn học.
Mỗi môn học thực hiện đánh giá thực hành $N$ lần như 2 lần, 3 lần,... và tổng điểm các lần đánh giá sẽ là điểm đánh giá.

- Học sinh có **tổng điểm cao nhất** xếp hạng 1.
- **Quy tắc bằng điểm (Tie-breaker)**: Nếu điểm cao nhất giống nhau thì học sinh tham gia thi trước sẽ đứng hạng 1.
- Yêu cầu: Xác định học sinh hạng 1 là **học sinh thi thứ bao nhiêu (bắt đầu từ 1)** và **được bao nhiêu điểm**.
- Return type: Mảng `[thứ_tự_học_sinh, tổng_điểm]` (dạng `[int, int]`).

### 2. Ví dụ
- **Ví dụ 1**: 
  - Input: `[[3, 2], [2, 3], [1, 1]]`
  - Học sinh 1: $3 + 2 = 5$ điểm
  - Học sinh 2: $2 + 3 = 5$ điểm
  - Học sinh 3: $1 + 1 = 2$ điểm
  - Vì học sinh 1 và học sinh 2 cùng được 5 điểm (bằng nhau), học sinh 1 thi trước nên xếp hạng 1.
  - Output: `[1, 5]`

- **Ví dụ 2**:
  - Input: `[[30, 20, 10], [20, 30, 20], [10, 10, 30]]`
  - Học sinh 1: $30 + 20 + 10 = 60$
  - Học sinh 2: $20 + 30 + 20 = 70$
  - Học sinh 3: $10 + 10 + 30 = 50$
  - Output: `[2, 70]`

---

### 3. Code hoàn chỉnh & Các vị trí điền

```python
def solution(in_data):
    answer = list(0 for i in range(2))  # Tạo danh sách [0, 0]
    i = 0
    for d1 in in_data:
        i = i + 1
        sum = 0                          # [Ô TRỐNG 1]: Khởi tạo lại tổng điểm cho từng học sinh
        for d2 in d1:
            sum = sum + d2               # [Ô TRỐNG 2]: Cộng dồn điểm các bài thi của học sinh hiện tại

        if answer[1] < sum:              # [Ô TRỐNG 3]: Dấu '<' (bẫy quan trọng: điểm bằng thì KHÔNG cập nhật)
            answer[0] = i                # [Ô TRỐNG 4]: Lưu thứ tự học sinh (1-based index)
            answer[1] = sum              # [Ô TRỐNG 5]: Lưu tổng điểm cao nhất

    return answer

# Kiểm thử:
print(solution([[3, 2], [2, 3], [1, 1]]))                   # Output: [1, 5]
print(solution([[30, 20, 10], [20, 30, 20], [10, 10, 30]])) # Output: [2, 70]
```

---

### 4. Giải thích chi tiết từng dòng & Các "Bẫy" thi cần nhớ

#### 🎯 Bẫy 1: Dấu `<` thay vì `<=` (Bẫy kinh điển của đề thi)
- **Đề yêu cầu**: *"Nếu điểm cao nhất giống nhau thì học sinh tham gia thi trước sẽ đứng hạng 1."*
- Giả sử `answer[1]` hiện tại là 5 (của học sinh 1).
- Khi duyệt đến học sinh 2 có `sum = 5`:
  - Nếu viết `answer[1] <= sum` (5 <= 5 là True) $\rightarrow$ sẽ gán `answer[0] = 2` (GHI ĐÈ thành học sinh 2) $\rightarrow$ **SAI**.
  - Viết `answer[1] < sum` (5 < 5 là False) $\rightarrow$ bỏ qua, giữ nguyên học sinh 1 $\rightarrow$ **ĐÚNG**.

#### 🎯 Bẫy 2: Vị trí của `sum = 0`
- `sum = 0` bắt buộc phải nằm **bên trong** vòng lặp `for d1 in in_data:`, ngay trước vòng lặp con `for d2 in d1:`.
- Nếu đặt `sum = 0` ở ngoài cùng, điểm của học sinh sau sẽ cộng dồn cả điểm của học sinh trước.

#### 🎯 Bẫy 3: Đánh số thứ tự từ 1 (1-based indexing)
- Biến `i` khởi tạo bằng `0`.
- Mỗi lần bắt đầu xét 1 học sinh mới: `i = i + 1`.
  - Học sinh đầu tiên: $i = 1$.
  - Học sinh thứ hai: $i = 2$.
- Khi thỏa mãn điều kiện kỷ lục mới, lưu `answer[0] = i`.

---

## [Câu hỏi 10] Triển khai hàm - Kích thước gạch lát nền tối ưu (Ước chung lớn nhất - GCD)

### 1. Đề bài
- Cần lát gạch hình vuông kích thước $s \times s$ cho một khu vực hình chữ nhật có kích thước chiều ngang `in_data1` và chiều dọc `in_data2`.
- Để không thừa vật liệu (không phải cắt vụn gạch): $s$ phải là **ước số chung** của cả chiều ngang và chiều dọc.
- Để giảm chi phí nhân công (số lượng viên gạch ít nhất có thể): kích thước viên gạch $s$ phải **lớn nhất có thể**.
- **Bản chất toán học**: Tìm **Ước chung lớn nhất (GCD - Greatest Common Divisor)** của 2 số.

### 2. Code giải (3 cách)

#### Cách 1: Dùng thuật toán Euclid (Khuyên dùng - Ngắn gọn, không phụ thuộc thư viện)
```python
def solution(in_data1, in_data2):
    while in_data2:
        in_data1, in_data2 = in_data2, in_data1 % in_data2
    return in_data1
```

#### Cách 2: Dùng thư viện `math.gcd`
```python
import math

def solution(in_data1, in_data2):
    answer = math.gcd(in_data1, in_data2)
    return answer
```

#### Cách 3: Vét cạn (Duyệt từ số nhỏ hơn lùi về 1)
```python
def solution(in_data1, in_data2):
    for i in range(min(in_data1, in_data2), 0, -1):
        if in_data1 % i == 0 and in_data2 % i == 0:
            return i
```

---

## [Câu hỏi 04] Điền vào chỗ trống - Món tráng miệng bán chạy nhất

### 1. Đề bài
- Cửa hàng hoa quả bán các loại trái cây từ mã 1 đến 10.
- Dữ liệu bán hàng cho dưới dạng mảng 2 chiều `[[mã_món, số_lượng_bán], ...]`.
- Tìm món có tổng số lượng bán nhiều nhất. Nếu có nhiều món bằng số lượng, ưu tiên món có mã nhỏ hơn (ở trên trong danh sách).
- Trả về: `[mã_món, tổng_doanh_số]`.

### 2. Code hoàn chỉnh & Các vị trí điền

```python
def solution(in_data):
    answer = [0, 0]
    dessert = [0] * 11

    for d1 in in_data:
        flag = d1[0]                   # [Ô TRỐNG 1]: Lấy mã số món ăn
        dessert[flag] += d1[1]         # [Ô TRỐNG 2]: Cộng dồn số lượng bán vào món đó

    max_desert = 0
    max_number = 0
    i = -1

    for a1 in dessert:
        i += 1                         # [Ô TRỐNG 3]: Tăng chỉ số món i (bắt đầu từ 0 cho dessert[0])
        if a1 > max_desert:            # [Ô TRỐNG 4]: So sánh lớn hơn (dấu '>' giữ món trước nếu bằng điểm)
            max_desert = a1
            max_number = i

    price = 0
    for d1 in in_data:
        if max_number == d1[0]:
            price += d1[1]             # [Ô TRỐNG 5]: Cộng dồn tổng doanh số của món bán chạy nhất

    answer[0] = max_number
    answer[1] = price
    return answer
```

### 3. Phân tích bẫy thi
- **Dấu `>` thay vì `>=`**: Khi gặp món có số lượng bán bằng với kỷ lục hiện tại, điều kiện `>` sẽ trả về `False`, giúp giữ nguyên món có mã nhỏ hơn đã duyệt trước đó.

---

## [Câu hỏi 05] Điền vào chỗ trống - Đếm ô dính màu nước (Ma trận 2D & Vết chân lan truyền)

### 1. Đề bài
- Vết chân dẫm tại ô `[r, c]` làm màu nước bắn sang 3 ô cùng hàng:
  - Ô bên trái: `[r, c - 1]` (chỉ bắn được nếu $c > 0$)
  - Ô chính giữa: `[r, c]`
  - Ô bên phải: `[r, c + 1]`
- Nếu một ô bị dính màu nhiều lần, vẫn chỉ tính là 1 ô dính màu.
- Đếm tổng số ô có dính màu nước (giá trị $\ge 1$).

### 2. Code hoàn chỉnh & Các vị trí điền

```python
def solution(in_data):
    answer = 0

    row = in_data[0][0]                # [Ô TRỐNG 1]: Khởi tạo tìm max row
    col = in_data[0][1]                # [Ô TRỐNG 2]: Khởi tạo tìm max col
    for i in range(1, len(in_data)):
        if row < in_data[i][0]:
            row = in_data[i][0]
        if col < in_data[i][1]:
            col = in_data[i][1]

    # Vì có ô c + 1 nên kích thước cột cần col + 2
    tmp = [[0 for j in range(col + 2)] for i in range(row + 1)]  # [Ô TRỐNG 3 & 4]

    for i in range(0, len(in_data)):
        r = in_data[i][0]
        c = in_data[i][1]

        if c > 0:
            tmp[r][c - 1] += 1         # [Ô TRỐNG 5]: Bắn sang trái

        tmp[r][c] += 1                 # Ô chính giữa
        tmp[r][c + 1] += 1             # Ô bên phải

    for d1 in tmp:
        for d2 in d1:                  # [Ô TRỐNG 6]: Duyệt qua từng phần tử trong hàng d1
            if d2 >= 1:
                answer += 1

    return answer
```

### 3. Phân tích bẫy thi
- **Kích thước ma trận `col + 2`**: Ô bên phải có chỉ số là `c + 1`. Vì giá trị lớn nhất của `c` là `col`, nên chỉ số cột lớn nhất được truy cập là `col + 1`. Trong Python, để mảng có thể chứa đến chỉ số `col + 1` thì kích thước phải là `col + 2` (do chỉ số bắt đầu từ 0 đến $N - 1$).
- **`for d2 in d1`**: `d1` là từng hàng trong bảng 2 chiều `tmp`, `d2` là từng ô trong hàng `d1`.

---

## [Câu hỏi 06] Sửa lỗi code (Debugging) - Thuật toán Sắp xếp chọn (Selection Sort)

### 1. Đề bài & Mô tả thuật toán
- **Sắp xếp chọn (Selection Sort)** là thuật toán sắp xếp hoạt động theo nguyên lý:
  1. Duyệt mảng từ vị trí đầu tiên $i = 0$ đến $N - 1$.
  2. Tại mỗi bước $i$, tìm phần tử có giá trị nhỏ nhất trong đoạn chưa sắp xếp từ $i$ đến $N - 1$.
  3. Hoán đổi (swap) phần tử nhỏ nhất tìm được với phần tử ở vị trí $i$.
  4. Lặp lại quá trình trên cho đến khi toàn bộ mảng được sắp xếp tăng dần.

- **Mô phỏng ví dụ với mảng `[13, 10, 14, 8, 9, 2]` ($N = 6$):**
  - **Vòng $i = 0$**: Tìm số nhỏ nhất trong `[13, 10, 14, 8, 9, 2]` là `2` (tại index 5). Hoán đổi `13` và `2` $\rightarrow$ `[2, 10, 14, 8, 9, 13]`.
  - **Vòng $i = 1$**: Tìm số nhỏ nhất trong đoạn chưa sắp xếp `[10, 14, 8, 9, 13]` là `8` (tại index 3). Hoán đổi `10` và `8` $\rightarrow$ `[2, 8, 14, 10, 9, 13]`.
  - **Vòng $i = 2$**: Tìm số nhỏ nhất trong đoạn `[14, 10, 9, 13]` là `9` (tại index 4). Hoán đổi `14` và `9` $\rightarrow$ `[2, 8, 9, 10, 14, 13]`.
  - **Vòng $i = 3$**: Tìm số nhỏ nhất trong đoạn `[10, 14, 13]` là `10` (tại index 3). Đã ở đúng vị trí, không cần đổi $\rightarrow$ `[2, 8, 9, 10, 14, 13]`.
  - **Vòng $i = 4$**: Tìm số nhỏ nhất trong đoạn `[14, 13]` là `13` (tại index 5). Hoán đổi `14` và `13` $\rightarrow$ `[2, 8, 9, 10, 13, 14]`.
  - **Vòng $i = 5$**: Phần tử cuối cùng `14` đã ở đúng vị trí $\rightarrow$ Hoàn tất sắp xếp: `[2, 8, 9, 10, 13, 14]`.

- **Tham số**:
  - $N$ ($1 \le N \le 1,000$): số lượng phần tử.
  - `arr`: danh sách gồm $N$ số nguyên ($-10,000 \le arr[i] \le 10,000$).
- **Kiểu trả về**: Trả về mảng `arr` đã được sắp xếp tăng dần.

- **Ví dụ kiểm thử**:
  - Ví dụ 1: $N = 6, arr = [13, 10, 14, 8, 9, 2] \rightarrow [2, 8, 9, 10, 13, 14]$
  - Ví dụ 2: $N = 5, arr = [1, 10, 2, 8, 9] \rightarrow [1, 2, 8, 9, 10]$
  - Ví dụ 3 (Test case hệ thống): $N = 10, arr = [54, 30, 86, 18, 47, 33, 41, 24, 51, 31] \rightarrow [18, 24, 30, 31, 33, 41, 47, 51, 54, 86]$

---

### 2. Code ban đầu bị lỗi vs Code đã sửa

#### ❌ Code ban đầu (Có lỗi tại Dòng 6)
```python
def solution(N, arr):
    for i in range(0, N):
        minIdx = i
        for j in range(i, N):
            if arr[j] < arr[minIdx]:
                minIdx - j   # ❌ DÒNG LỖI: Nhầm toán tử gán '=' thành '-' (hoặc nhầm giá trị arr[j] thay vì index j)
        tmp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = tmp
    return arr
```

#### ✅ Code chuẩn sau khi sửa (CHỈ SỬA 1 DÒNG DUY NHẤT)
```python
def solution(N, arr):
    for i in range(0, N):
        minIdx = i
        for j in range(i, N):
            if arr[j] < arr[minIdx]:
                minIdx = j   # ✅ SỬA THÀNH: Cập nhật chỉ số phần tử nhỏ nhất mới là j
        tmp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = tmp
    return arr
```

---

### 3. Phân tích chi tiết lỗi & Bẫy thi cần nhớ

#### 🎯 Bẫy 1: Biến lưu "Chỉ số" (Index) chứ không phải "Giá trị" (Value)
- Trong Selection Sort, ta cần lưu **vị trí (index)** của phần tử nhỏ nhất để sau khi quét xong vòng lặp con `j` mới hoán đổi được `arr[i]` và `arr[minIdx]`.
- Do đó:
  - Khởi tạo: `minIdx = i` (lưu vị trí ban đầu).
  - So sánh giá trị: `if arr[j] < arr[minIdx]:` (lấy giá trị qua index).
  - Cập nhật chỉ số: `minIdx = j` (gán chỉ số `j`, **tuyệt đối không gán `arr[j]`**).
  - Nếu viết nhầm `minIdx = arr[j]`, câu lệnh tiếp theo `arr[minIdx]` sẽ truy cập `arr[giá_trị]`, gây lỗi `IndexError` hoặc làm sai lệch toàn bộ cấu trúc dữ liệu!

#### 🎯 Bẫy 2: Dấu `=` (Phép gán) vs Dấu `-` (Phép trừ)
- Trên bàn phím, phím `-` nằm cạnh phím `=` (dạng lỗi typo kinh điển trong bài thi thực tế).
- Viết `minIdx - j` là một biểu thức độc lập không gán vào đâu, Python không báo lỗi cú pháp nhưng biến `minIdx` không bao giờ được cập nhật.
- Kết quả: `minIdx` luôn giữ nguyên giá trị `i`, khiến thuật toán chỉ tự đổi chỗ chính nó và mảng giữ nguyên không được sắp xếp.

#### 🎯 Bẫy 3: Cách hoán đổi 2 biến trong Python
- Trong đề thi COS Pro, tác giả thường viết 3 dòng hoán đổi truyền thống bằng biến tạm `tmp`:
  ```python
  tmp = arr[i]
  arr[i] = arr[minIdx]
  arr[minIdx] = tmp
  ```
- Trong Python hiện đại có thể viết `arr[i], arr[minIdx] = arr[minIdx], arr[i]`. Nhưng đối với dạng bài **Sửa lỗi 1 dòng (Debugging)**, quy tắc vàng là **CHỈ SỬA ĐÚNG DÒNG 6**, tuyệt đối không đụng vào các dòng code khác để tránh bị hệ thống chấm điểm đánh trượt.

#### 🎯 Độ phức tạp thuật toán (Time & Space Complexity)
- **Thời gian (Time Complexity)**: $O(N^2)$ trong mọi trường hợp (tốt nhất, xấu nhất, trung bình) do luôn duyệt đủ $\frac{N(N-1)}{2}$ phép so sánh. Với $N \le 1,000$, số phép toán $\approx 5 \times 10^5$, thời gian thực thi cực nhanh $\approx 0.039\text{s} \ll 1\text{s}$.
- **Không gian (Space Complexity)**: $O(1)$ - Sắp xếp tại chỗ (In-place), chỉ cần thêm 2 biến tạm `minIdx` và `tmp`.



