# Giải thích 15 lỗi ở Nhóm 2 (Debugging)

Đọc file này **sau khi** đã tự sửa xong. Mỗi lỗi ở đây là một mẫu lỗi kinh điển
mà đề COS Pro dùng đi dùng lại.

---

**2.01 — `trung_binh`** · `range(1, len(arr))` bỏ mất `arr[0]` nhưng vẫn chia cho
`len(arr)`. Lỗi off-by-one kinh điển. Sửa: `range(0, len(arr))`, hoặc gọn hơn là
`sum(arr) / len(arr)`.
*Dấu hiệu nhận biết:* kết quả nhỏ hơn kỳ vọng đúng bằng `arr[0]/n`.

**2.02 — `them_muc`** · `danh_sach=[]` được tạo **một lần duy nhất** lúc định nghĩa
hàm, rồi dùng chung cho mọi lần gọi. Sửa: `danh_sach=None` + `if danh_sach is None`.
*Đây là câu hỏi phỏng vấn Python phổ biến nhất — thuộc lòng nó.*

**2.03 — `xoa_so_chan`** · `remove` trong lúc `for x in arr` làm con trỏ duyệt nhảy
qua một phần tử: `[2,2,2,1]` sẽ sót. Sửa: duyệt ngược bằng chỉ số, hoặc `arr[:] = [...]`.

**2.04 — `co_gia_tri`** · `is` so sánh **danh tính đối tượng**, không phải giá trị.
CPython cache số nguyên nhỏ (-5..256) và intern chuỗi hằng, nên `is` "có vẻ chạy đúng"
khi test bằng số nhỏ rồi hỏng khi gặp `2000` hoặc chuỗi ghép lúc chạy. Luôn dùng `==`
cho giá trị; `is` chỉ dành cho `None`, `True`, `False`.

**2.05 — `phan_tu_giua`** · `/` luôn trả `float` từ Python 3 → `arr[1.0]` là `TypeError`.
Dùng `//`.

**2.06 — `tao_bang`** · `[[0]*n]*n` nhân **tham chiếu**: tất cả n hàng trỏ tới cùng một
list, nên `bang[i][i] = 1` ghi lên mọi hàng. Sửa: `[[0]*n for _ in range(n)]`.
*Cùng một bẫy áp dụng cho `[{}]*n`, `[[]]*n`.*

**2.07 — `xoa_gia_tri_rong`** · Thay đổi kích thước dict khi đang duyệt →
`RuntimeError: dictionary changed size during iteration`. Sửa: gom danh sách khoá cần
xoá trước (`list(...)` để "đóng băng"), rồi xoá.

**2.08 — `hoa_ky_tu_dau`** · Chuỗi immutable, `s[0] = ...` là `TypeError`.
Sửa: `s[0].upper() + s[1:]`. (Chú ý `s.capitalize()` **không** tương đương — nó viết
thường toàn bộ phần còn lại.)

**2.09 — `tim_max`** · Khởi tạo `ket_qua = 0` giả định ngầm mảng có số dương;
với `[-5,-2,-9]` hàm trả về 0. Sửa: khởi tạo bằng `arr[0]` (hoặc `float("-inf")`).
*Nguyên tắc: giá trị khởi tạo của accumulator phải lấy từ dữ liệu, không phải hằng số tuỳ tiện.*

**2.10 — `ba_so_nho_nhat`** · `list.sort()` sắp tại chỗ và trả `None`, nên
`arr.sort()[:3]` là `TypeError`. Ngoài ra đề yêu cầu không sửa `arr` gốc → phải dùng
`sorted(arr)`. Ghi nhớ: `sort/reverse/append/extend/insert` đều trả `None`.

**2.11 — `tao_cac_ham_nhan`** · Closure trong Python bắt **biến**, không bắt giá trị.
Khi vòng lặp kết thúc `i == n-1`, nên mọi lambda đều nhân với `n-1`. Sửa: `lambda x, he_so=i:`
(đóng băng giá trị vào tham số mặc định) hoặc dùng `functools.partial`.

**2.12 — `fib`** · Hai lỗi: (a) thiếu điều kiện dừng `n <= 1` → đệ quy vô hạn xuống số âm;
(b) `ghi_nho={}` là mutable default → bộ nhớ đệm rò rỉ giữa các lần gọi độc lập.
Sửa cả hai. *Đề thi rất thích ghép hai lỗi vào một hàm ngắn.*

**2.13 — `gan_bang`** · Số thực nhị phân không biểu diễn chính xác 0.1 → `0.1+0.2` là
0.30000000000000004. Luôn so sánh bằng epsilon: `abs(a-b) < 1e-9` (hoặc `math.isclose`).

**2.14 — `xoa_theo_chi_so`** · `remove(i)` xoá phần tử **có giá trị** `i`, không phải
ở **vị trí** `i`. Với `[10,20,30]` và `i=1` sẽ ném `ValueError`. Sửa: `pop(i)` + kiểm tra biên.

**2.15 — `dem_tu`** · Chỉ cần **gán** vào một tên ở đâu đó trong hàm, Python coi tên đó
là biến cục bộ toàn hàm → đọc trước khi gán gây `UnboundLocalError`. Sửa: khai báo
`global DEM_TOAN_CUC`. (Trong hàm lồng nhau thì dùng `nonlocal`.)

---

## Quy trình debug 60 giây dùng trong phòng thi

1. Đọc **docstring** trước, đọc code sau. Lỗi luôn là "code ≠ mô tả".
2. Chạy nhẩm **một test nhỏ nhất** (mảng rỗng, 1 phần tử, số âm) — 80% lỗi lộ ra ngay.
3. Soi bốn chỗ theo thứ tự: **biên vòng lặp → kiểu dữ liệu → tham chiếu/bản sao → giá trị khởi tạo**.
4. Sửa **ít dòng nhất có thể**. Viết lại cả hàm rất dễ làm hỏng test khác.
