# Giải thích 15 lỗi ở Nhóm 5 (Debugging theo Format Đề Thật COS Pro)

Tài liệu này giải thích chi tiết 15 lỗi logic kinh điển được cài trong bộ luyện tập **Nhóm 5**.
Mỗi lỗi đại diện cho một bẫy đề thi COS Pro Level 2 / Level 1 thường gặp.

---

### **5.01 — `solution_501` (Tích điểm thưởng siêu thị)**
- **Triệu chứng:** `solution_501([50000, 30000, 120000])` trả về `320` thay vì `370`. Test biên `[50000]` trả về `50` thay vì `100`.
- **Dòng sai:** `if p > 50000:`
- **Sửa thành:** `if p >= 50000:`
- **Vì sao sai:** Đề bài quy định "từ 50.000 đồng trở lên" (tức là >= 50000), nhưng code lại dùng toán tử so sánh nghiêm ngặt `>` (lớn hơn hẳn). Do đó, mặt hàng có giá đúng bằng 50.000 bị rơi vào nhánh `else` và chỉ được tính 1 điểm/1000đ thay vì nhân đôi điểm thưởng.
- **Cách phát hiện trong 30 giây khi thi:** Khi đề có các từ khoá "từ... trở lên", "tối thiểu", "không dưới", "đạt mức", luôn kiểm tra xem điều kiện `if` đang dùng `>` hay `>=`. Soi ngay test case có giá trị đúng bằng mốc biên (50000).

---

### **5.02 — `solution_502` (Tổng giá trị cổ phiếu k ngày)**
- **Triệu chứng:** `solution_502([10, 20, 30, 100], 2)` trả về `50` thay vì `130`.
- **Dòng sai:** `for i in range(len(prices) - k):`
- **Sửa thành:** `for i in range(len(prices) - k + 1):` (hoặc kỹ thuật sliding window như trong đáp án).
- **Vì sao sai:** Lỗi lệch 1 đơn vị (off-by-one) ở cận trên của `range`. Trong mảng độ dài N, có tất cả N - k + 1 cửa sổ con độ dài k. Khi viết `range(len(prices) - k)`, vòng lặp dừng ở chỉ số N - k - 1, bỏ sót hoàn toàn cửa sổ con cuối cùng `prices[N-k : N]`. Khi giá trị lớn nhất rơi vào cuối mảng, hàm trả về kết quả sai.
- **Cách phát hiện trong 30 giây khi thi:** Khi thấy cửa sổ con độ dài k trượt trên mảng N phần tử, tính nhẩm ngay số lượng cửa sổ với ví dụ cực tiểu (N=3, k=2 -> phải có 2 cửa sổ i=0, 1 -> `range(3 - 2 + 1)`).

---

### **5.03 — `solution_503` (Mô phỏng năng lượng hạt)**
- **Triệu chứng:** `solution_503(2, 3)` trả về `18` thay vì `10`.
- **Dòng sai:**
  ```python
  prev = curr
  curr = curr + 2 * prev
  ```
- **Sửa thành:**
  ```python
  next_val = curr + 2 * prev
  prev = curr
  curr = next_val
  # hoặc gán tuple song song: prev, curr = curr, curr + 2 * prev
  ```
- **Vì sao sai:** Cập nhật biến sai thứ tự. Lệnh `prev = curr` đã ghi đè giá trị cũ của `prev` trước khi tính toán `curr_new`. Kết quả là dòng tiếp theo `curr + 2 * prev` thực chất tính `curr + 2 * curr = 3 * curr` thay vì sử dụng `prev` ban đầu.
- **Cách phát hiện trong 30 giây khi thi:** Bất cứ khi nào cập nhật dãy số kiểu Fibonacci hay phương trình trạng thái (x_{n+1} = f(x_n, x_{n-1})), kiểm tra xem biến cũ có bị ghi đè trước khi dùng hay không. Ưu tiên gán tuple song song `a, b = b, a + ...` để tránh bẫy thứ tự.

---

### **5.04 — `solution_504` (Tải trọng trung bình xe tải)**
- **Triệu chứng:** `solution_504([15, 25, 35], 2)` trả về `37.5` (kiểu `float`) thay vì `37` (kiểu `int`).
- **Dòng sai:** `return total_weight / num_trucks`
- **Sửa thành:** `return total_weight // num_trucks`
- **Vì sao sai:** Trong Python 3, toán tử `/` luôn trả về số thực `float`. Đề bài yêu cầu trả về số nguyên `int` ("lấy phần nguyên, cắt bỏ phần thập phân"). Trả về `float` sẽ làm fail bài kiểm tra kiểu dữ liệu hoặc so sánh chính xác.
- **Cách phát hiện trong 30 giây khi thi:** Đọc kỹ câu cuối mục *GIẢI THÍCH GIÁ TRỊ RETURN*. Nếu đề ghi "chỉ lấy phần nguyên" hoặc "trả về số nguyên", kiểm tra ngay tất cả phép chia xem đang dùng `/` hay `//`.

---

### **5.05 — `solution_505` (Tiền thưởng hiệu suất KPI)**
- **Triệu chứng:** `solution_505(1017, 55, 1)` trả về `56` thay vì `55`. (55.935 bị làm tròn lên 56).
- **Dòng sai:** `return round(raw_bonus)`
- **Sửa thành:** `return int(raw_bonus)`
- **Vì sao sai:** Hàm `round()` thực hiện làm tròn số học (lên hoặc xuống tuỳ phần thập phân >= 0.5). Tuy nhiên, yêu cầu bài toán là "chỉ lấy phần nguyên, cắt bỏ phần thập phân" (truncation / floor). Với `55.935`, `round()` cho `56`, trong khi `int()` cho `55`.
- **Cách phát hiện trong 30 giây khi thi:** Bẫy kinh điển số 1 của COS Pro: phân biệt giữa "làm tròn" (`round`) và "cắt phần thập phân / chỉ lấy phần nguyên" (`int`). Cứ thấy chữ "chỉ lấy phần nguyên" là phải dùng `int()` hoặc `//`.

---

### **5.06 — `solution_506` (Chuẩn hóa điểm số)**
- **Triệu chứng:** `solution_506([10, 25, 30])` trả về `[0, 25, 30]` thay vì `[0, 15, 20]`.
- **Dòng sai:**
  ```python
  res = scores
  for i in range(len(res)):
      res[i] = res[i] - scores[0]
  ```
- **Sửa thành:**
  ```python
  base = scores[0]
  res = []
  for s in scores:
      res.append(s - base)
  return res
  ```
- **Vì sao sai:** Phép gán `res = scores` chỉ tạo một bí danh (alias) cùng trỏ tới một vùng nhớ danh sách. Khi i = 0, `res[0] = res[0] - scores[0]` biến `res[0]` (và đồng thời `scores[0]`) thành `0`. Ở các bước sau i = 1, 2, `scores[0]` đã là `0`, khiến các phần tử sau bị trừ đi 0 thay vì giá trị ban đầu (10). Đồng thời, danh sách đầu vào `scores` bị thay đổi ngoài ý muốn.
- **Cách phát hiện trong 30 giây khi thi:** Thấy `b = a` với `list` hoặc `dict` rồi sau đó chỉnh sửa `b[i]`, chắc chắn là lỗi tham chiếu dữ liệu. Phải dùng `a[:]`, `list(a)`, hoặc tạo list mới.

---

### **5.07 — `solution_507` (Xếp hạng thí sinh tuyển sinh)**
- **Triệu chứng:** `solution_507([('B', 85), ('A', 90), ('C', 85)])` trả về `['B', 'C', 'A']` thay vì `['A', 'B', 'C']`.
- **Dòng sai:** `sorted_students = sorted(students, key=lambda s: (s[1], s[0]))`
- **Sửa thành:** `sorted_students = sorted(students, key=lambda s: (-s[1], s[0]))`
- **Vì sao sai:** Đề yêu cầu điểm thi xếp *giảm dần* (cao hơn đứng trước), mã ID xếp *tăng dần* (thứ tự từ điển). Code đang xếp cả 2 tiêu chí theo thứ tự *tăng dần* do thiếu dấu trừ `-s[1]`. Thí sinh 90 điểm bị đẩy xuống cuối cùng.
- **Cách phát hiện trong 30 giây khi thi:** Khi sắp xếp nhiều tiêu chí ngược chiều nhau (một trường giảm, một trường tăng), trong `key=lambda x: (...)` trường giảm dần dạng số phải có dấu `-`.

---

### **5.08 — `solution_508` (Nhiệt độ thấp nhất trong ngày)**
- **Triệu chứng:** `solution_508([12, 18, 5, 22, 9])` trả về `0` thay vì `5`.
- **Dòng sai:** `min_temp = 0`
- **Sửa thành:** `min_temp = readings[0]` (hoặc `min_temp = float('inf')`)
- **Vì sao sai:** Khởi tạo biến tích luỹ giá trị nhỏ nhất bằng `0` mang giả định ngầm là mảng có số âm hoặc bằng 0. Khi toàn bộ mảng gồm các số dương > 0 (như 12, 18, 5...), không có phần tử nào nhỏ hơn `0`, nên hàm trả về `0` vốn không có trong mảng.
- **Cách phát hiện trong 30 giây khi thi:** Soi giá trị khởi tạo của biến accumulator: tìm max không được gán `0` (phải dùng `-inf` hoặc `arr[0]`), tìm min không được gán `0` (phải dùng `+inf` hoặc `arr[0]`), tích dồn không được gán `0` (phải gán `1`).

---

### **5.09 — `solution_509` (Tìm kiếm mã hàng chia hết)**
- **Triệu chứng:** `solution_509([7, 11, 15, 22], 5)` trả về `False` thay vì `True`.
- **Dòng sai:**
  ```python
  for x in items:
      if x % target == 0:
          found = True
      break  # thụt lề ngang hàng với if
  ```
- **Sửa thành:**
  ```python
  for x in items:
      if x % target == 0:
          return True
  return False
  ```
- **Vì sao sai:** Lệnh `break` bị đặt ngoài khối `if`, nằm trực tiếp trong vòng lặp `for`. Vòng lặp chỉ chạy đúng 1 lần (xét phần tử đầu tiên x = 7) rồi thoát ngay lập tức, bỏ qua tất cả các phần tử phía sau.
- **Cách phát hiện trong 30 giây khi thi:** Soi thụt lề (indentation) của các lệnh điều khiển luồng `break`, `continue`, `return`. `break` nằm thẳng hàng với `if` là dấu hiệu vòng lặp bị ngắt cưỡng bức ở lần chạy đầu.

---

### **5.10 — `solution_510` (Tìm tọa độ mã hàng trong ma trận 2D)**
- **Triệu chứng:** `solution_510([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)` trả về `(2, 1)` thay vì `(0, 1)`.
- **Dòng sai:**
  ```python
  for r in range(len(matrix)):
      for c in range(len(matrix[r])):
          if matrix[r][c] == target:
              target_c = c
              break
  if target_c != -1:
      return (r, target_c)
  ```
- **Sửa thành:**
  ```python
  for r in range(len(matrix)):
      for c in range(len(matrix[r])):
          if matrix[r][c] == target:
              return (r, c)
  return (-1, -1)
  ```
- **Vì sao sai:** Lệnh `break` chỉ thoát khỏi vòng lặp cột bên trong (`for c`), vòng lặp hàng bên ngoài (`for r`) vẫn tiếp tục chạy cho đến khi hết ma trận (r = 2). Khi ra khỏi vòng lặp, biến `r` mang giá trị của hàng cuối cùng, dẫn đến toạ độ trả về sai hàng.
- **Cách phát hiện trong 30 giây khi thi:** Khi tìm kiếm trong 2 vòng lặp lồng nhau, trả về trực tiếp `return (r, c)` ngay khi tìm thấy thay vì `break` lửng lơ rồi dùng biến vòng lặp ở ngoài.

---

### **5.11 — `solution_511` (Điểm số cao thứ nhì)**
- **Triệu chứng:** `solution_511([5, 5, 5])` và `solution_511([])` ném ngoại lệ `IndexError: list index out of range`.
- **Dòng sai:**
  ```python
  unique_scores = sorted(list(set(scores)))
  return unique_scores[-2]
  ```
- **Sửa thành:**
  ```python
  unique_scores = sorted(list(set(scores)))
  if len(unique_scores) < 2:
      return None
  return unique_scores[-2]
  ```
- **Vì sao sai:** Chưa xử lý trường hợp biên: mảng rỗng `[]` hoặc mảng gồm các phần tử giống hệt nhau `[5, 5, 5]`. Khi chuyển sang `set`, tập hợp chỉ còn 0 hoặc 1 phần tử, nên truy xuất chỉ số âm `[-2]` gây lỗi `IndexError`.
- **Cách phát hiện trong 30 giây khi thi:** Khi lấy phần tử thứ k (đặc biệt là truy xuất `[-2]`, `[1]`), luôn tự hỏi: "Nếu mảng chỉ có 0 hoặc 1 phần tử thì sao?". Bắt buộc phải có điều kiện kiểm tra độ dài trước.

---

### **5.12 — `solution_512` (Làm phẳng danh sách lô hàng)**
- **Triệu chứng:** `solution_512([[101, 102], [201], [301, 302, 303]])` trả về `[[101, 102], [201], [301, 302, 303]]` (danh sách lồng nhau) thay vì `[101, 102, 201, 301, 302, 303]`.
- **Dòng sai:** `merged.append(batch)`
- **Sửa thành:** `merged.extend(batch)` (hoặc `merged += batch`)
- **Vì sao sai:** Nhầm lẫn phương thức `append()` và `extend()`. `append(batch)` thêm cả đối tượng danh sách con `batch` làm 1 phần tử duy nhất, trong khi `extend(batch)` giải nén từng phần tử của `batch` rồi thêm vào cuối `merged`.
- **Cách phát hiện trong 30 giây khi thi:** Muốn gộp nhiều list con thành 1 list phẳng: nhớ quy tắc `append` = thêm 1 phần tử nguyên khối, `extend` = mở rộng bằng các phần tử bên trong.

---

### **5.13 — `solution_513` (Xác thực mã voucher khuyến mãi)**
- **Triệu chứng:** `solution_513('VIP2026', 7)` trả về `False` thay vì `True`.
- **Dòng sai:** `is_valid_prefix = code.startswith("VIP") and code.startswith("MEMBER")`
- **Sửa thành:** `is_valid_prefix = code.startswith("VIP") or code.startswith("MEMBER")`
- **Vì sao sai:** Nhầm lẫn giữa toán tử logic `and` và `or`. Một chuỗi không thể cùng lúc vừa bắt đầu bằng `"VIP"` lại vừa bắt đầu bằng `"MEMBER"`. Phép so sánh với `and` luôn luôn trả về `False` cho mọi chuỗi.
- **Cách phát hiện trong 30 giây khi thi:** Khi đề bài nêu hai điều kiện tiền tố lựa chọn (tiền tố A HOẶC tiền tố B), kiểm tra ngay biểu thức logic xem có bị gõ nhầm thành `and` hay không.

---

### **5.14 — `solution_514` (Kiểm tra mức giá trong catalog)**
- **Triệu chứng:** `solution_514({'ao_thun': 150000, 'quan_jean': 350000, 'non': 150000}, 350000)` trả về `False` thay vì `True`.
- **Dòng sai:** `return target_price in catalog`
- **Sửa thành:** `return target_price in catalog.values()`
- **Vì sao sai:** Trong Python, toán tử `x in dict` mặc định kiểm tra `x` có phải là **khoá (key)** của dict hay không, chứ không kiểm tra giá trị (value). Trong ví dụ, các key là chuỗi (`'ao_thun'`, `'quan_jean'`), còn `350000` là value. Biểu thức `350000 in catalog` luôn trả về `False`.
- **Cách phát hiện trong 30 giây khi thi:** Kiểm tra đối tượng duyệt/tìm kiếm trên `dict`:
  - `x in d` -> kiểm tra key.
  - `x in d.values()` -> kiểm tra value.
  - `(k, v) in d.items()` -> kiểm tra cặp key-value.

---

### **5.15 — `solution_515` (Kiểm tra tính hợp lệ chuỗi giao dịch)**
- **Triệu chứng:** `solution_515([100, -50, 200], 500)` trả về `True` thay vì `False`.
- **Dòng sai:**
  ```python
  for tx in transactions:
      if 0 < tx <= limit:
          return True  # return sớm ngay khi phần tử đầu tiên hợp lệ
      else:
          return False
  ```
- **Sửa thành:**
  ```python
  for tx in transactions:
      if not (0 < tx <= limit):
          return False
  return True
  ```
- **Vì sao sai:** Lỗi return sớm (early return). Khi kiểm tra tính chất "TẤT CẢ phần tử đều thoả mãn", hàm chỉ được phép return `False` ngay khi gặp một phần tử vi phạm; còn muốn kết luận `True`, bắt buộc phải duyệt qua toàn bộ danh sách mà không có phần tử nào vi phạm. Code cũ gặp ngay phần tử đầu tiên `100` thoả mãn là return `True` luôn, bỏ qua việc kiểm tra phần tử `-50` bị lỗi phía sau.
- **Cách phát hiện trong 30 giây khi thi:** Bài toán kiểm tra "Tất cả thoả mãn" (all) vs "Có ít nhất một phần tử thoả mãn" (any):
  - Kiểm tra `all`: Trong vòng lặp chỉ `if vi_pham: return False`, kết thúc vòng lặp mới `return True`.
  - Kiểm tra `any`: Trong vòng lặp chỉ `if thoa_man: return True`, kết thúc vòng lặp mới `return False`.
  - Tuyệt đối không viết `if ...: return True else: return False` bên trong vòng lặp!

---

## Quy trình phản xạ 30 giây phát hiện lỗi khi thi

1. **Đọc kỹ Docstring trước, đọc code sau:** Lỗi trong bài thi COS Pro luôn là sự không khớp giữa mã nguồn và mô tả yêu cầu.
2. **Kiểm tra 5 vị trí nhạy cảm nhất:**
   - *Biên so sánh:* `<` vs `<=`, `>` vs `>=`.
   - *Biên vòng lặp & chỉ số:* `range(n)` vs `range(n - k + 1)`, off-by-one.
   - *Kiểu dữ liệu & phép chia:* `int()` vs `round()`, `/` vs `//`.
   - *Tham chiếu mảng:* `b = a` vs `b = a[:]` / `list(a)`.
   - *Luồng điều khiển:* Return sớm trong loop, nhầm lẫn `all` vs `any`, `and` vs `or`.
3. **Thử nhanh 2 test case đặc biệt:**
   - Test rỗng / mảng 1 phần tử / các phần tử trùng nhau.
   - Test có giá trị nằm ngay tại mốc biên (ví dụ: đúng bằng ngưỡng hạn mức, đúng bằng 0, hoặc giá trị lớn nhất nằm ở cuối cùng).
