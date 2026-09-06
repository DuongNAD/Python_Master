# CHIẾN THUẬT PHÒNG THI PYTHON MASTER 2026 — BẢNG B (COS PRO)

> Tài liệu hướng dẫn chiến thuật tối ưu điểm số, kiểm soát thời gian và xử lý tình huống trong phòng thi thực chiến dành cho thí sinh thi chứng chỉ COS Pro Level 2 (Vòng loại) và Level 1 (Chung kết). Ngưỡng đạt chứng chỉ: >= 600/1000 điểm.

---

## 1. THỨ TỰ LÀM BÀI & PHÂN BỔ THỜI GIAN

### 1.1. Vòng Loại (COS Pro Level 2 — 50 phút / 10 câu / 1000 điểm)

Cơ cấu điểm Vòng loại: **Đọc hiểu (440đ) + Debugging (280đ) + Design (280đ)**.
Chiến lược cốt lõi: **Đọc hiểu là mỏ điểm lớn nhất và dễ nhất -> Ăn trọn 440đ đầu tiên.**

```
[00:00 - 02:00]  Lướt quét & Phân loại đề (10 câu)
[02:00 - 15:00]  GIAI ĐOẠN 1: Đọc hiểu code (4-5 câu, ~440đ)
[15:00 - 30:00]  GIAI ĐOẠN 2: Debugging (2-3 câu, ~280đ)
[30:00 - 45:00]  GIAI ĐOẠN 3: Design (2-3 câu, ~280đ)
[45:00 - 50:00]  GIAI ĐOẠN 4: Rà soát tổng lực & Nộp bài
```

| Mốc thời gian | Tác vụ trọng tâm | Mục tiêu điểm số | Nguyên tắc hành động |
|---|---|---|---|
| **Phút 00 – 02** | Lướt qua 10 câu, nhận diện loại câu | 0đ | Không đọc chi tiết logic. Phân loại ngay: Câu nào đọc hiểu điền khuyết, câu nào sửa 1 dòng (debug), câu nào viết mới (design). |
| **Phút 02 – 15** | Giải quyết toàn bộ nhóm **Đọc hiểu** | **440đ** | Dành tối đa **2.5 - 3 phút/câu**. Đọc docstring và biến `return` trước để hiểu hàm làm gì rồi điền vào chỗ trống `___`. |
| **Phút 15 – 30** | Giải quyết nhóm **Debugging** | **+280đ (Lũy kế 720đ)** | Dành tối đa **4 - 5 phút/câu**. Đề thi thường chỉ sai **đúng 1-2 dòng**. Đối chiếu 50 bẫy kinh điển để sửa nhanh. Đạt mốc này là CHẮC CHẮN ĐẬU CHỨNG CHỈ. |
| **Phút 30 – 45** | Giải quyết nhóm **Design** | **+280đ (Lũy kế 1000đ)** | Dành **7 - 8 phút/câu**. Ưu tiên câu xử lý chuỗi/mảng cơ bản trước, câu cấu trúc dữ liệu sau. Viết bản chạy đúng trước, không tối ưu sớm. |
| **Phút 45 – 50** | Kiểm tra test biên & Rà soát nộp | Bảo toàn điểm | Chạy lại toàn bộ test mẫu. Kiểm tra kiểu dữ liệu trả về (`int` vs `float`). Xóa toàn bộ lệnh `print` debug thừa. |

---

### 1.2. Chung Kết (COS Pro Level 1 — 90 phút / 10 câu / 1000 điểm)

Cơ cấu điểm Chung kết: **Design (420đ) + Đọc hiểu (340đ) + Debugging (240đ)**.
Chiến lược cốt lõi: **Xử lý nhanh Đọc hiểu + Debugging trong 40 phút đầu để bỏ túi 580 điểm an toàn, sau đó dồn 45 phút cho Design thuật toán/OOP.**

```
[00:00 - 03:00]  Quét toàn bộ đề & Đánh giá độ khó
[03:00 - 20:00]  GIAI ĐOẠN 1: Đọc hiểu code (3-4 câu, ~340đ)
[20:00 - 38:00]  GIAI ĐOẠN 2: Debugging nâng cao (2-3 câu, ~240đ)
[38:00 - 80:00]  GIAI ĐOẠN 3: Design thuật toán & OOP (3-4 câu, ~420đ)
[80:00 - 90:00]  GIAI ĐOẠN 4: Tối ưu độ phức tạp & Rà soát test biên
```

| Mốc thời gian | Tác vụ trọng tâm | Phân bổ | Nguyên tắc hành động |
|---|---|---|---|
| **Phút 00 – 03** | Khảo sát 10 câu | 3 phút | Đánh dấu độ khó từ 1 đến 5 sao cho từng câu. |
| **Phút 03 – 20** | Nhóm Đọc hiểu Level 1 | 17 phút (~4-5 phút/câu) | Đọc hiểu Level 1 có thể chứa đệ quy hoặc cấu trúc lồng. Lần lượt thế giá trị để tìm đáp án. |
| **Phút 20 – 38** | Nhóm Debugging Level 1 | 18 phút (~6 phút/câu) | Thường dính bẫy cấu trúc dữ liệu (`heapq`, `deque`, đệ quy tràn stack, shallow copy ma trận). |
| **Phút 38 – 80** | Nhóm Design Level 1 | 42 phút (~10-12 phút/câu) | Áp dụng 30 mẫu code kinh điển (Two Pointers, Sliding Window, DP, BFS ma trận, OOP). Viết code sạch, đúng ràng buộc N. |
| **Phút 80 – 90** | Kiểm thử biên & Tối ưu | 10 phút | Test các trường hợp N=0, 1, số âm, dữ liệu trùng lặp. Đảm bảo không dính TLE. |

---

## 2. QUY TẮC BỎ CÂU & BẢO TOÀN TÂM LÝ

Trong phòng thi, thời gian là tài nguyên quý giá nhất. Rất nhiều thí sinh trượt chứng chỉ không phải vì thiếu kiến thức mà vì "ôm" một câu khó quá lâu.

### 2.1. Đồng hồ đếm ngược cho từng câu (Hard Stop Rules)
- **Ở Vòng loại (50 phút):** Quá **5 phút** ở một câu Đọc hiểu / Debugging hoặc quá **7 phút** ở một câu Design mà chưa ra hướng giải -> **DỪNG LẠI NGAY LẬP TỨC, BỎ QUA VÀ CHUYỂN SANG CÂU TIẾP THEO.**
- **Ở Chung kết (90 phút):** Quá **8 phút** ở một câu Debugging hoặc quá **12 phút** ở một câu Design mà vẫn bế tắc -> **GHI CHÚ LẠI VÀ CHUYỂN CÂU.**

### 2.2. Quy trình bỏ câu chuẩn xác
1. **Lưu lại trạng thái hiện tại:** Nếu đã viết được một phần code, giữ nguyên bản có thể chạy được (không để code bị lỗi cú pháp `SyntaxError`).
2. **Ghi nhanh 1 dòng nháp:** Viết ra giấy nháp mã câu và ý tưởng dở dang (ví dụ: *Câu 7: nghi ngờ lỗi ở dòng 12 cập nhật max_sum*).
3. **Chuyển hẳn tâm trí sang câu mới:** Không suy nghĩ về câu vừa bỏ. Mỗi câu là một cơ hội lấy trọn điểm độc lập.
4. **Thời điểm quay lại:** Chỉ quay lại các câu đã bỏ khi đã hoàn thành một lượt tất cả các câu dễ và vừa trong đề. Lúc này tâm lý đã thoải mái vì đã cầm chắc điểm qua môn (>= 600đ).

---

## 3. CHECKLIST ĐỌC ĐỀ 30 GIÂY — CHỐNG DÍNH BẪY

Trước khi bắt tay vào gõ bất kỳ dòng code nào, hãy quét đề bài trong đúng 30 giây theo 5 tiêu chí sau:

- [ ] **1. Kiểu dữ liệu đầu ra (Return Type):**
  - Đề yêu cầu trả về `int`, `float`, `str`, `list`, hay `bool`?
  - Có câu "chỉ lấy phần nguyên" không? (-> Bắt buộc dùng `int(x)` hoặc `//`, cấm dùng `round()`).
  - Trả về danh sách rỗng `[]` hay `None` khi không tìm thấy kết quả?

- [ ] **2. Kích thước dữ liệu N (Constraints):**
  - N <= 100 -> Thuật toán O(N^2) hoặc O(N^3) chạy thoải mái.
  - N <= 10^5 -> Bắt buộc O(N) hoặc O(N log N) (Two Pointers, Sliding Window, Heap, Hash Map).
  - N >= 10^9 -> Bắt buộc O(log N) hoặc O(1) (Binary Search, Công thức toán).

- [ ] **3. Tính chất dữ liệu đầu vào:**
  - Có thể có **số âm** không? (Nếu có: khởi tạo max bằng `arr[0]` hoặc `-inf`, cấm gán bằng 0).
  - Có thể có **giá trị trùng lặp** không? (Nếu có: bỏ max/min chỉ bỏ 1 phần tử hay tất cả?).
  - Mảng đã được **sắp xếp sẵn** chưa? (Nếu chưa mà dùng `bisect` hay Two Pointers là sai).

- [ ] **4. Yêu cầu sửa đổi mảng (In-place vs New List):**
  - Đề yêu cầu sửa trực tiếp trên mảng gốc (`scores[:] = ...`) hay trả về mảng mới?
  - Nếu trả về mảng mới, tuyệt đối không dùng `scores.sort()` làm thay đổi mảng ban đầu.

- [ ] **5. Các từ khóa bẫy nhạy cảm:**
  - "Từ X trở lên" / "Tối thiểu" -> Dùng toán tử `>=` (không dùng `>`).
  - "Nhiều hơn" / "Vượt quá" -> Dùng toán tử `>` (không dùng `>=`).
  - "Phần tử phân biệt" -> Phải dùng `set()` để lọc trước khi xử lý.

---

## 4. CHECKLIST 60 GIÂY TRƯỚC KHI BẤM NỘP

Trước khi nộp bài cho từng câu, thực hiện rà soát nhanh:

- [ ] **1. Đã xóa hoặc comment toàn bộ lệnh `print()` debug:**
  - Một số hệ thống chấm tự động so sánh stdout; lệnh `print` thừa có thể làm sai lệch kết quả chấm.
- [ ] **2. Tên hàm đúng chuẩn `solution`:**
  - Đảm bảo không đổi tên hàm hoặc thay đổi thứ tự các tham số đề bài cung cấp.
- [ ] **3. Giá trị `return` có thực sự trả về:**
  - Đảm bảo mọi nhánh `if/else` đều có `return`. Tránh trường hợp hàm kết thúc ngầm và trả về `None`.
- [ ] **4. Kiểm tra phương thức trả về `None`:**
  - Tuyệt đối không viết: `return arr.sort()`, `return arr.reverse()`, `return arr.append(x)`.
- [ ] **5. Không có biến toàn cục bị rò rỉ:**
  - Đảm bảo hàm không dựa dẫm vào biến toàn cục được định nghĩa bên ngoài hàm `solution`.

---

## 5. KỸ THUẬT TỰ TEST NHANH VỚI 3 TRƯỜNG HỢP BIÊN

80% các bài thi bị mất điểm không phải vì test case ví dụ sai, mà vì trượt các hidden test cases tại điểm biên. Luôn nhẩm tay code của bạn với 3 test case sau:

### Test Biên 1: Trường hợp cực tiểu (Minimal Edge Case)
- Mảng rỗng: `arr = []` -> Hàm có bị ném lỗi `IndexError` hay `ZeroDivisionError` không?
- Mảng có đúng 1 phần tử: `arr = [5]` -> Vòng lặp hai con trỏ hay sliding window có chạy đúng không?
- Chuỗi rỗng hoặc chuỗi 1 ký tự: `s = ""` hoặc `s = "a"`.

### Test Biên 2: Trường hợp toàn bộ phần tử giống nhau (Homogeneous Case)
- Mảng toàn số giống nhau: `arr = [7, 7, 7, 7]`.
- Kiểm tra xem thuật toán tìm phần tử lớn thứ nhì, loại bỏ min/max, hoặc quicksort có bị treo hoặc trả về sai không.

### Test Biên 3: Trường hợp cực trị & Số âm (Extreme & Negative Values)
- Mảng toàn số âm: `arr = [-10, -20, -5]`.
- Tìm max có bị trả về `0` không?
- Tìm kiếm target không tồn tại trong mảng: `target = 999` -> Hàm có trả về đúng `-1` hay `None` như mô tả không?

---

## 6. XỬ LÝ KHI BỊ BẾ TẮC HOẶC PANIC TRONG PHÒNG THI

Nếu bạn nhìn vào đề bài mà đầu óc trống rỗng, hoặc code chạy sai mà không biết sai ở đâu:

### Chiến thuật "60 Giây Reset":
1. **Dừng gõ phím ngay lập tức.** Thả lỏng hai tay, hít một hơi thật sâu trong 5 giây, thở ra chậm rãi.
2. Uống 1 ngụm nước nhỏ.
3. Rời mắt khỏi màn hình code, nhìn vào giấy nháp.

### Kỹ thuật lần vết bằng tay trên giấy nháp (Manual Tracing):
- Viết ra giấy nháp một test case cực nhỏ (chỉ gồm 3 phần tử, ví dụ `arr = [2, 1, 3]`).
- Đóng vai là trình thông dịch Python: Viết từng biến (`i`, `j`, `current_val`, `res`) sau mỗi vòng lặp thay đổi thế nào.
- So sánh giá trị thực tế sau mỗi bước với kỳ vọng logic. Lỗi sai (lệch chỉ số, cộng nhầm biến) sẽ lộ ra trong 90 giây.

### Kỹ thuật Brute-Force "Ăn Điểm Từng Phần":
- Nếu không nghĩ ra thuật toán tối ưu O(N) hay Quy hoạch động phức tạp: **Hãy viết ngay thuật toán vét cạn (Brute-force) O(N^2) hoặc O(N^3) với 2-3 vòng `for` lồng nhau.**
- Trong hệ thống chấm thi, thuật toán vét cạn vẫn ăn trọn điểm của các test case nhỏ (N <= 1000). Có 60-70% điểm một câu còn hơn 0 điểm!

---

## 7. CHIẾN LƯỢC ĐẠT ĐIỂM CHỨNG CHỈ TỐI ĐA (>= 600 ĐIỂM)

Mục tiêu tối thượng của bạn là **chắc chắn có chứng chỉ COS Pro**. Hãy quản lý điểm số như một bài toán đầu tư rủi ro:

```
VÒNG LOẠI (LEVEL 2):
+-----------------------------------------------------------+
| Đọc hiểu code (440đ) : Làm đúng 100%       --->  440 điểm |
| Debugging (280đ)     : Làm đúng 2/3 câu    ---> +186 điểm |
| Design (280đ)        : Làm đúng 1 câu dễ   --->  +93 điểm |
+-----------------------------------------------------------+
| TỔNG ĐIỂM DỰ KIẾN                          --->  719 điểm |
| (Vượt xa ngưỡng chứng chỉ 600đ!)                          |
+-----------------------------------------------------------+

CHUNG KẾT (LEVEL 1):
+-----------------------------------------------------------+
| Đọc hiểu code (340đ) : Làm đúng 100%       --->  340 điểm |
| Debugging (240đ)     : Làm đúng 2/3 câu    ---> +160 điểm |
| Design (420đ)        : Làm đúng 1-2 câu    ---> +140 điểm |
+-----------------------------------------------------------+
| TỔNG ĐIỂM DỰ KIẾN                          --->  640 điểm |
| (Cầm chắc chứng chỉ Master Level 1!)                      |
+-----------------------------------------------------------+
```

> **Ghi nhớ:** Không cần phải làm hoàn hảo 10/10 câu để lấy chứng chỉ. Đảm bảo **tuyệt đối không sai những câu dễ** là chìa khóa chiến thắng.

---

## 8. KẾ HOẠCH ÔN TẬP 2 TUẦN CUỐI & NGÀY TRƯỚC HÔM THI

### 8.1. Lộ trình 14 ngày đếm ngược

| Giai đoạn | Ngày | Nhiệm vụ trọng tâm | Thời lượng |
|---|---|---|---|
| **Tuần -2 (Phản xạ)** | **Ngày 1 – 3** | Đọc lại toàn bộ `KIEN_THUC.md`. Làm lại toàn bộ 15 bài Đọc hiểu Nhóm 1. Bấm giờ 90 giây/bài. | 60 phút/ngày |
| | **Ngày 4 – 5** | Làm lại 15 bài Debugging Nhóm 2 và 15 bài Nhóm 5. Soi chiếu với `BAY_PYTHON.md`. | 90 phút/ngày |
| | **Ngày 6 – 7** | Luyện gõ thuộc lòng 30 mẫu code trong `MAU_CODE.md`. Tự viết lại không nhìn tài liệu trong 60s/mẫu. | 90 phút/ngày |
| **Tuần -1 (Thực chiến)** | **Ngày 8 – 9** | Làm các bài tập Design Nhóm 3 và Nhóm 6 (Level 1). Tập trung Two Pointers, Sliding Window, DP. | 120 phút/ngày |
| | **Ngày 10** | **Thi thử Đề mô phỏng 1:** Bật đồng hồ đúng 50 phút, không tra cứu tài liệu, chấm điểm tự động. | 60 phút |
| | **Ngày 11** | Phân tích toàn bộ các lỗi sai trong đề mô phỏng. Ghi chép vào sổ tay lỗi sai cá nhân. | 60 phút |
| | **Ngày 12** | **Thi thử Đề mô phỏng 2 / Chung kết:** Bấm giờ nghiêm ngặt, áp dụng đúng thứ tự làm bài. | 90 phút |
| | **Ngày 13** | Rà soát lần cuối 50 bẫy trong `BAY_PYTHON.md` và 30 mẫu trong `MAU_CODE.md`. | 60 phút |

### 8.2. Kế hoạch Ngày trước hôm thi (D-1)
- **Buổi sáng:** Đọc lướt qua một lượt file `BAY_PYTHON.md` và `CHIEN_THUAT_PHONG_THI.md`. Không làm bài tập mới, không giải bài quá khó gây hoang mang.
- **Buổi chiều:** Gõ lại 5 mẫu code cơ bản nhất (Two Pointers, Sliding Window, Binary Search, Grid BFS, Valid Parentheses) để giữ cảm giác phím.
- **Buổi tối:**
  - Kiểm tra thiết bị: Máy tính, bàn phím, chuột, camera, đường truyền Internet ổn định, sạc pin dự phòng.
  - Chuẩn bị sẵn giấy nháp trắng và bút bi.
  - **Đi ngủ trước 22h30.** Giữ một bộ não tỉnh táo và sảng khoái có giá trị gấp mười lần việc thức khuya nhồi nhét code.

### 8.3. Sáng ngày thi
- Ăn sáng nhẹ nhàng, tránh đồ ăn lạ gây khó chịu dạ dày.
- Uống đủ nước, chuẩn bị 1 chai nước lọc cạnh bàn thi.
- Vào phòng thi ảo/mở máy trước **20 phút** để kiểm tra đăng nhập, camera và môi trường thi.
- Tự nhủ phương châm: **"Đọc hiểu làm trước -> Debug cẩn thận -> Design vừa sức -> Bỏ qua câu tắc -> Chắc chắn chiến thắng."**
