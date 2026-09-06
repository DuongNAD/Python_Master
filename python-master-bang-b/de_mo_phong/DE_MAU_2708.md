# ĐỀ MẪU CHÍNH THỨC — BẢNG B (27/08)

> Nguồn: Google Doc "ĐỀ BÀI BẢNG B (2708)" — Python Master 2026.
> Chép nguyên văn. Đây là **khuôn mẫu chuẩn** của một câu đề thật:
> mô tả → Giải thích tham số → Giải thích giá trị return → Ví dụ → Giải thích ví dụ.

## ĐỀ BÀI – BẢNG B (19 – 24 tuổi)

Trong một chương trình thử giọng, cần dùng điểm trung bình mà hội đồng giám khảo chấm
cho các thí sinh để làm điểm đánh giá, trong đó không tính điểm số cao nhất và điểm số
thấp nhất.

Ví dụ, nếu thí sinh A nhận được điểm đánh giá từ 4 giám khảo lần lượt là
[89, 95, 92, 90] thì điểm trung bình của thí sinh này sẽ là trung bình của 92 và 90, là 91.

Khi cho mảng scores 2 chiều chứa điểm số của ban giám khảo dưới dạng tham số của hàm
solution, hãy viết hàm solution để return điểm số trung bình cao nhất trong buổi thử giọng.

Hãy điền vào chỗ trống để code có thể chạy bình thường.

### Giải thích tham số

Cho mảng scores 2 chiều chứa điểm số của ban giám khảo cho từng thí sinh dưới dạng
tham số của hàm solution.

- Chiều dài của scores là số thí sinh, đây là mảng 2 chiều trong khoảng từ 2 đến 100.
- Phần tử của scores là mảng điểm số mà ban giám khảo đánh giá thí sinh, phần tử của
  mảng này là các số tự nhiên từ 0 đến 100.

### Giải thích giá trị return

Return điểm đánh giá cao nhất trong các thí sinh.
Tuy nhiên, nếu điểm trung bình là số thập phân, chỉ return phần số nguyên.

### Ví dụ

| scores | return |
|---|---|
| `[[85, 92, 95, 90], [91, 76, 85, 50]]` | `91` |

### Giải thích ví dụ

4 giám khảo đánh giá 2 thí sinh, điểm đánh giá như sau.

- Thí sinh số 1: 85, 92, 95, 90 → 91 (điểm trung bình của 92, 90)
- Thí sinh số 2: 91, 76, 85, 50 → 80.5 (điểm trung bình của 76, 85)

Điểm trung bình cao nhất là 91 - điểm trung bình của thí sinh số 1.

---

## Những gì đề mẫu này TIẾT LỘ về đề thật

1. **Tên hàm luôn là `solution`.** Không phải tên tiếng Việt.
2. **Có dạng "điền vào chỗ trống"** — đề cho sẵn khung code, chỉ thiếu vài dòng.
   Khung code nằm trong IDE lúc thi, không có trong file đề.
3. **Ràng buộc luôn được ghi rõ** (2..100 thí sinh, điểm 0..100) → đọc kỹ để biết
   có cần xử lý mảng rỗng / số âm không. Ở đây là KHÔNG.
4. **Cái bẫy nằm ở câu cuối phần return**: "chỉ return phần số nguyên"
   → `int(x)` / `//`, không phải `round()`. 80.5 → 80, không phải 81.
5. **Bẫy thứ hai, không nói ra**: loại max và min chỉ loại **một** phần tử mỗi loại.
   Với `[7, 7, 7, 7]` kết quả là trung bình của 2 số 7 còn lại, không phải rỗng.
