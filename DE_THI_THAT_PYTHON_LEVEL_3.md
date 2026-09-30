# ĐỀ THI THẬT SOTALUNI / YBM COS PRO - PYTHON LEVEL 3 (EXAM 2)
*Tổng hợp & Giải thích chi tiết các câu hỏi thi thực tế*

---

## [Câu hỏi 02] Triển khai hàm - Sắp xếp thông tin nhận dạng sách lớp (Custom Multi-key Sort)

### 1. Đề bài
Thông tin nhận dạng của sách lớp được cấu thành từ một ký tự chữ cái viết hoa và một số tự nhiên gồm năm chữ số (Ví dụ: `"D12345"`, `"B37712"`).

Chúng ta cần sắp xếp thứ tự của sách lớp theo các quy tắc sau:
1. **Quy tắc 1 (Ký tự đầu)**: Ký tự đầu tiên (chữ cái viết hoa) của thông tin sách lớp được sắp xếp theo **thứ tự từ điển (A $\rightarrow$ Z)**.
2. **Quy tắc 2 (Phần số khi cùng chữ cái)**: Nếu ký tự chữ cái viết hoa giống nhau, thông tin có **giá trị số tự nhiên lớn hơn sẽ đứng trước (giảm dần)**.

Danh sách chứa thông tin nhận dạng của sách lớp là tham số `bookIndex` của hàm `solution`. Hãy hoàn thành hàm `solution` để trả về kết quả được sắp xếp theo quy tắc.

### 2. Mô tả tham số & Ràng buộc
- Danh sách chứa thông tin nhận dạng sách lớp `bookIndex` đưa ra dưới dạng `list[str]`.
- Độ dài của `bookIndex` từ $1$ đến $100$ ($1 \le \text{len}(bookIndex) \le 100$).
- Các phần tử của `bookIndex` là chuỗi kết hợp giữa một ký tự chữ cái viết hoa và một số tự nhiên gồm năm chữ số (Độ dài chuỗi luôn là 6 ký tự: 1 chữ + 5 số).

### 3. Ví dụ kiểm thử

| bookIndex | Return | Giải thích |
| :--- | :--- | :--- |
| `["D12345", "B37712", "D45321"]` | `["B37712", "D45321", "D12345"]` | - Chữ cái: `'B'` đứng trước `'D'` $\rightarrow$ `"B37712"` đứng đầu.<br>- Cùng chữ cái `'D'`: $45321 > 12345 \rightarrow$ `"D45321"` đứng trước `"D12345"`. |
| `["B12345", "D37712", "B45321"]` | `["B45321", "B12345", "D37712"]` | - Cùng chữ `'B'`: $45321 > 12345 \rightarrow$ `"B45321"` đứng trước `"B12345"`.<br>- Chữ `'D'` xếp cuối: `"D37712"`. |

---

### 4. Code nộp bài hoàn chỉnh (Copy & Paste trực tiếp)

#### Cách 1: Dùng `sorted` với `key=lambda` (Khuyên dùng - Chuẩn Pythonic, 1 dòng)
```python
def solution(bookIndex):
    answer = sorted(bookIndex, key=lambda x: (x[0], -int(x[1:])))
    return answer
```

#### Cách 2: Dùng `sort` trực tiếp trên danh sách (In-place sort)
```python
def solution(bookIndex):
    bookIndex.sort(key=lambda x: (x[0], -int(x[1:])))
    return bookIndex
```

#### Cách 3: Tách hàm lấy khóa riêng (Nếu không muốn dùng `lambda`)
```python
def get_sort_key(item):
    char_part = item[0]        # Ký tự chữ cái viết hoa ('A' -> 'Z')
    num_part = int(item[1:])   # 5 chữ số chuyển sang số nguyên
    return (char_part, -num_part)

def solution(bookIndex):
    answer = sorted(bookIndex, key=get_sort_key)
    return answer
```

#### Cách 4: Sắp xếp 2 lần (Dựa vào tính chất Stable Sort của Python Timsort)
```python
def solution(bookIndex):
    # Bước 1: Sắp xếp giảm dần theo phần số trước
    bookIndex.sort(key=lambda x: int(x[1:]), reverse=True)
    # Bước 2: Sắp xếp tăng dần theo chữ cái (giữ nguyên thứ tự giảm dần của số khi cùng chữ)
    bookIndex.sort(key=lambda x: x[0])
    return bookIndex
```

---

### 5. Phân tích chi tiết thuật toán & Các bẫy cần tránh

#### 🎯 Điểm mấu chốt 1: So sánh tuple đa tiêu chí `(x[0], -int(x[1:]))`
Trong Python, khi so sánh hai tuple `(a1, b1)` và `(a2, b2)`:
1. Python so sánh phần tử thứ nhất trước: `a1` vs `a2`.
   - `x[0]` là ký tự đầu tiên (`'A'` đến `'Z'`). Vì đề yêu cầu sắp xếp chữ cái theo thứ tự từ điển tăng dần ($A \rightarrow Z$), ta để nguyên `x[0]`.
2. Nếu phần tử thứ nhất bằng nhau (`a1 == a2`), Python so sánh phần tử thứ hai: `b1` vs `b2`.
   - Phần số cần sắp xếp **giảm dần** (số lớn hơn đứng trước).
   - Thủ thuật kinh điển trong Python: Thêm dấu âm `-` vào trước số nguyên `int(x[1:])`.
   - Ví dụ: Ta có hai số $45321$ và $12345$.
     - Khi đổi dấu: $-45321 < -12345$.
     - Hàm `sorted()` mặc định sắp xếp tăng dần $\rightarrow$ giá trị nhỏ hơn sẽ đứng trước $\rightarrow$ $-45321$ đứng trước $-12345 \rightarrow$ số $45321$ đứng trước $12345$!

#### 🎯 Bẫy 1: Hàm `sort()` vs `sorted()`
- Trong Python **KHÔNG CÓ** hàm độc lập `sort(list)`. Viết `sorted_bookIndex = sort(bookIndex)` sẽ gây lỗi `NameError: name 'sort' is not defined`.
- Phải dùng:
  - Hàm tích hợp: `sorted(bookIndex, ...)` (trả về list mới).
  - Hoặc phương thức của list: `bookIndex.sort(...)` (sắp xếp tại chỗ).

#### 🎯 Bẫy 2: Cắt chuỗi `x[1:]` thay vì `x[1]`
- `x[1]` chỉ lấy ra ký tự thứ 2 (chữ số đầu tiên của dãy 5 số).
- Ví dụ với `"B45321"`, `x[1]` là `'4'`. Nếu có số `"B40000"` và `"B49999"`, nếu chỉ so sánh `x[1]` thì cả hai đều là `'4'`, dẫn tới không phân biệt được số nào lớn hơn.
- Phải dùng slice `x[1:]` để lấy trọn vẹn cả 5 chữ số phía sau.

#### 🎯 Bẫy 3: Ép kiểu sang số nguyên `int(x[1:])`
- Nếu không ép kiểu `int()`, Python sẽ so sánh chuỗi theo từ điển. Dù với 5 chữ số có độ dài bằng nhau thứ tự từ điển chuỗi trùng thứ tự số, nhưng khi thêm dấu âm `"-"` bắt buộc phải là kiểu số (`int`), không thể áp dụng toán tử đổi dấu `-` cho kiểu chuỗi (`str`).

---

### 6. Độ phức tạp thuật toán (Complexity)
- **Thời gian (Time Complexity)**: $O(N \log N)$ với $N$ là số lượng phần tử của `bookIndex` ($N \le 100$). Thời gian chạy $< 0.001$ giây, vượt qua mọi giới hạn thời gian (Time Limit).
- **Không gian (Space Complexity)**: $O(N)$ để lưu danh sách kết quả trả về.

---

## [Câu hỏi 04] Triển khai hàm - Kiểm Tra Số Tiền Thối (Thuật toán Tham Lam - Greedy Coin Change)

### 1. Đề bài
Khi mua một món hàng với giá `pro_price` và thanh toán bằng số tiền `pay_price`:
- Số tiền thối khách hàng nhận lại là: `change = pay_price - pro_price`.
- Cần thối lại số tiền này với **số lượng tờ tiền/đồng xu ít nhất có thể**.
- Các mệnh giá tiền tệ có sẵn (theo thứ tự giảm dần): 
  **50,000 won, 10,000 won, 5,000 won, 1,000 won, 500 won, 100 won, 50 won, 10 won**.

Hàm `solution(pro_price, pay_price)` cần trả về một danh sách gồm 2 phần tử:
`[số_tiền_thối, số_lượng_tiền_thối_ít_nhất]`.

### 2. Mô tả tham số & Ràng buộc
- `pro_price` (hoặc `input1`): Giá của món hàng ($10 \le pro\_price \le 100,000$).
- `pay_price` (hoặc `input2`): Số tiền khách đã trả ($10 \le pay\_price \le 100,000$).
- Điều kiện đảm bảo: $pay\_price \ge pro\_price$.
- Giá trị trả về: `[tiền_thối, tổng_số_tờ]` (dạng `[int, int]`).

### 3. Ví dụ kiểm thử

| pro_price | pay_price | Return | Giải thích |
| :--- | :--- | :--- | :--- |
| `450` | `66110` | `[65660, 7]` | Tiền thối: $66110 - 450 = 65660$.<br>Đổi tiền: $1 \times 50000 + 1 \times 10000 + 1 \times 5000 + 1 \times 500 + 1 \times 100 + 1 \times 50 + 1 \times 10 = 7$ tờ. |
| `50000` | `56000` | `[6000, 2]` | Tiền thối: $56000 - 50000 = 6000$.<br>Đổi tiền: $1 \times 5000 + 1 \times 1000 = 2$ tờ. |
| `10000` | `10000` | `[0, 0]` | Tiền thối: $0$ won $\rightarrow$ $0$ tờ. |

---

### 4. Code nộp bài hoàn chỉnh & Dễ nhớ

#### Cách 1: Dùng vòng lặp duyệt mệnh giá với `//` và `%` (Chuẩn bài thi)
```python
def solution(pro_price, pay_price):
    answer = [0, 0]
    change = pay_price - pro_price
    answer[0] = change

    # Danh sách mệnh giá tiền từ lớn đến bé
    denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10]

    count = 0
    remaining = change

    for coin in denominations:
        count += remaining // coin    # Số tờ mệnh giá coin lấy được
        remaining %= coin             # Số tiền dư còn lại cần thối tiếp

    answer[1] = count
    return answer
```

#### Cách 2: Dùng hàm `divmod()` (Ngắn gọn, Pythonic)
```python
def solution(pro_price, pay_price):
    change = pay_price - pro_price
    count = 0
    rem = change
    
    for coin in [50000, 10000, 5000, 1000, 500, 100, 50, 10]:
        bills, rem = divmod(rem, coin)
        count += bills
        
    return [change, count]
```

---

### 5. Phân tích chi tiết thuật toán & Các bẫy thi cần nhớ

#### 🎯 Bản chất thuật toán: Tham lam (Greedy Approach)
- Để số lượng tờ tiền là **ít nhất**, ta luôn phải ưu tiên lấy tối đa các tờ tiền có **mệnh giá lớn nhất** trước:
  1. Đổi hết mức có thể với tờ 50,000 won.
  2. Phần dư còn lại tiếp tục đổi với tờ 10,000 won.
  3. Lần lượt tiếp tục cho tới đồng 10 won.
- Vì hệ thống tiền tệ này là hệ thống chuẩn (mệnh giá lớn luôn chia hết hoặc tạo thành từ mệnh giá nhỏ hơn), thuật toán Tham lam luôn đảm bảo ra kết quả tối ưu toàn cục.

#### 🎯 Bẫy 1: Thứ tự danh sách mệnh giá `denominations`
- Bắt buộc danh sách phải sắp xếp **từ lớn đến bé**: `[50000, 10000, 5000, 1000, 500, 100, 50, 10]`.
- Nếu viết nhầm thứ tự từ bé đến lớn `[10, 50, ...]`, thuật toán sẽ đổi toàn bộ tiền ra các đồng 10 won, dẫn đến số lượng đồng tiền cực lớn (sai hoàn toàn yêu cầu "ít nhất").

#### 🎯 Bẫy 2: Phép chia nguyên `//` vs Phép chia thực `/`
- Phải dùng `remaining // coin` để lấy số nguyên (ví dụ: `65660 // 50000 = 1`).
- Nếu dùng dấu `/` sẽ ra số thực `1.3132`, gây lỗi kiểu dữ liệu và sai đáp án.

#### 🎯 Bẫy 3: Cập nhật lại số tiền còn lại `remaining %= coin`
- Sau khi lấy số tờ của mệnh giá hiện tại, phải lấy phần dư `remaining %= coin` (hoặc `remaining = remaining - (remaining // coin) * coin`) để chuyển sang mệnh giá tiếp theo.

---

### 6. Độ phức tạp thuật toán (Complexity)
- **Thời gian (Time Complexity)**: $O(1)$ - Mảng mệnh giá chỉ có đúng 8 phần tử, vòng lặp chạy đúng 8 lần $\rightarrow$ Tốc độ chạy tức thì ($< 0.0001\text{s}$).
- **Không gian (Space Complexity)**: $O(1)$ - Chỉ tốn vài biến đơn giản.

---

## [Câu hỏi 06] Điền vào chỗ trống - Sắp xếp hợp nhất (Merge Sort) & Trả về Giá trị Trung bình

### 1. Đề bài
Sắp xếp là quá trình sắp xếp một tập dữ liệu theo thứ tự tăng dần. Thuật toán **Sắp xếp hợp nhất (Merge Sort)** là một thuật toán kinh điển dựa trên kỹ thuật **"Chia để trị" (Divide and Conquer)**:
1. **Chia (Divide)**: Chia tập dữ liệu làm 2 nửa trái và phải. Tiếp tục chia đệ quy cho đến khi các tập con chỉ còn đúng **1 phần tử** (không thể chia được nữa).
2. **Trị & Hợp nhất (Conquer & Merge)**: Trộn (merge) hai tập con đã sắp xếp lại với nhau theo thứ tự tăng dần để tạo thành tập dữ liệu đã sắp xếp hoàn chỉnh.

Sau khi mảng đã được sắp xếp tăng dần, hàm cần trả về **giá trị tại vị trí chỉ số thu được bằng cách chia `numCount` cho 2** (tức là phần tử ở vị trí `numCount // 2`).

### 2. Mô tả tham số & Ràng buộc
- `numCount` ($1 \le numCount \le 100$): Số lượng phần tử của tập dữ liệu.
- `numList`: Danh sách chứa các số tự nhiên cần sắp xếp ($1 \le \text{phạm vi dữ liệu} \le 2,147,483,647$).
- **Giá trị trả về**: Giá trị tại vị trí chỉ số `numCount // 2` của mảng đã sắp xếp.

### 3. Ví dụ kiểm thử

| numCount | numList | Kết quả trả về | Giải thích |
| :--- | :--- | :--- | :--- |
| `7` | `[1, 6, 3, 4, 2, 0, 10]` | `3` | Mảng sau khi sort: `[0, 1, 2, 3, 4, 6, 10]`.<br>Chỉ số `7 // 2 = 3` có giá trị là **`3`**. |
| `20` | `[164, 41, 173, ..., 55]` | `59` | Mảng sau khi sort: `[6, 10, ..., 59, ..., 183]`.<br>Chỉ số `20 // 2 = 10` có giá trị là **`59`**. |

---

### 4. Code hoàn chỉnh & Vị trí các ô trống (HỌC THUỘC)

```python
def merge(left_idx, right_idx, num_count, num_list):
    tmp_num_list = [0] * num_count

    tmp_mid_idx = (left_idx + right_idx) >> 1

    tmp_left_idx = left_idx
    tmp_right_idx = tmp_mid_idx + 1
    insert_idx = left_idx

    while tmp_left_idx <= tmp_mid_idx and tmp_right_idx <= right_idx:
        if num_list[tmp_left_idx] <= num_list[tmp_right_idx]:
            tmp_num_list[insert_idx] = num_list[tmp_left_idx]
            insert_idx += 1
            tmp_left_idx += 1
            continue

        tmp_num_list[insert_idx] = num_list[tmp_right_idx]
        insert_idx += 1          # [Ô TRỐNG TIỀM NĂNG 1A]: Tăng chỉ số ghi mảng tạm
        tmp_right_idx += 1       # [Ô TRỐNG TIỀM NĂNG 1B]: Nhánh phải -> tăng con trỏ phải

    if tmp_left_idx > tmp_mid_idx: # [Ô TRỐNG TIỀM NĂNG 2]: Trái đã hết -> vét nốt phải
        for idx in range(tmp_right_idx, right_idx + 1):
            tmp_num_list[insert_idx] = num_list[idx]
            insert_idx += 1
    else:                          # Phải đã hết -> vét nốt trái
        for idx in range(tmp_left_idx, tmp_mid_idx + 1):
            tmp_num_list[insert_idx] = num_list[idx]
            insert_idx += 1

    for idx in range(left_idx, right_idx + 1):
        num_list[idx] = tmp_num_list[idx] # Chép đè mảng tạm về lại mảng gốc


def merge_sort(left_idx, right_idx, num_count, num_list):
    if left_idx == right_idx:    # [Ô TRỐNG 1 - CỰC HAY THI]: Điều kiện dừng đệ quy (chỉ còn 1 phần tử)
        return

    mid_idx = (left_idx + right_idx) >> 1

    merge_sort(left_idx, mid_idx, num_count, num_list)
    merge_sort(mid_idx + 1, right_idx, num_count, num_list) # [Ô TRỐNG 2 - CỰC HAY THI]: Nửa phải bắt đầu từ mid_idx + 1

    merge(left_idx, right_idx, num_count, num_list)         # Gộp 2 nửa đã sắp xếp


def solution(numCount, numList):
    merge_sort(0, numCount - 1, numCount, numList)
    return numList[numCount // 2] # [Ô TRỐNG 3]: Lấy phần tử tại vị trí numCount chia 2
```

---

### 5. Bảng Thần Chú Học Thuộc 30 Giây (Cheat Sheet phòng thi)

| Vị trí | Đoạn code cần điền | Thần chú / Bản chất ghi nhớ |
| :--- | :--- | :--- |
| **Ô 1** | `left_idx == right_idx` (hoặc điền `right_idx`) | **"Đầu bằng Cuối"**: Khi đoạn chỉ còn đúng 1 phần tử thì đã có thứ tự sẵn $\rightarrow$ `return` dừng chia. |
| **Ô 2** | `mid_idx + 1` | **"Nửa trái đến `mid`, nửa phải từ `mid + 1`"**: Nửa đầu gọi `(left, mid)` thì nửa sau bắt buộc là `(mid + 1, right)`. |
| **Ô 3** | `tmp_right_idx += 1` | **"Đối xứng gương"**: Nhìn ngay nhánh trên có `tmp_left_idx += 1` $\rightarrow$ Nhánh dưới lấy phần tử phải nên phải tăng `tmp_right_idx += 1`. |
| **Ô 4** | `tmp_left_idx > tmp_mid_idx` | **"Trái vượt biên"**: Con trỏ trái chạy quá điểm giữa nghĩa là nửa trái đã hết sạch $\rightarrow$ vét nốt các phần tử còn dư của nửa phải. |
| **Ô 5** | `numList[numCount // 2]` | **"Chỉ số giữa"**: Đề bài yêu cầu lấy phần tử tại vị trí `numCount` chia cho 2. Trong Python dùng phép chia nguyên `// 2` hoặc dịch bit `>> 1`. |

---

### 6. Quy luật "Đối Xứng Gương" (Không cần học vẹt, nhìn code tự suy ra)

1. **Nguyên tắc dịch bit chia 2**:
   - Biểu thức `(left_idx + right_idx) >> 1` trong đề thi chính là phép chia 2 lấy phần nguyên: `(left_idx + right_idx) // 2`.
2. **Quy tắc đệ quy Merge Sort**:
   - Nửa 1: `merge_sort(left_idx, mid_idx, ...)`
   - Nửa 2: `merge_sort(mid_idx + 1, right_idx, ...)`
   - Sau đó: `merge(left_idx, right_idx, ...)`
3. **Quy tắc vòng lặp vét mảng**:
   - Trong Python, `range(a, b)` chỉ chạy đến `b - 1`. Do đó muốn duyệt đến hết `right_idx` hoặc `tmp_mid_idx`, điểm dừng của range luôn phải là **`+ 1`**:
     - Vét nửa phải: `range(tmp_right_idx, right_idx + 1)`
     - Vét nửa trái: `range(tmp_left_idx, tmp_mid_idx + 1)`
     - Chép lại mảng: `range(left_idx, right_idx + 1)`

