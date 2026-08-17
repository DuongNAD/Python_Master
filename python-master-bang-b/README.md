# Bộ luyện thi Python Master 2026 — Bảng B (sinh viên)

**55 bài tập + 1 đề mô phỏng chấm tự động**, bám đúng khung COS Pro Level 2 → Level 1.

## Cách dùng

```bash
cd python-master-bang-b

python cham_diem.py 1        # Nhóm 1 — Đọc hiểu code (15 bài)
python cham_diem.py 2        # Nhóm 2 — Debugging (15 bài)
python cham_diem.py 3        # Nhóm 3 — Design (15 bài)
python cham_diem.py all      # cả 3 nhóm

python de_mo_phong/de_1_vong_loai.py    # đề mô phỏng, chấm thang 1000
```

Không cần cài gì thêm — chỉ Python 3.8+, thư viện chuẩn.
Sửa file trong `luyen_tap/`, chấm, lặp lại đến khi xanh hết.

```
CHEATSHEET.md     kiến thức tổng hợp — học thuộc phần này
GIAI_THICH.md     giải thích 15 lỗi ở nhóm Debugging
luyen_tap/        đề bài (bạn sửa ở đây)
dap_an/           lời giải tham chiếu (đừng mở sớm)
de_mo_phong/      đề thi thử + bộ chấm
cham_diem.py      chấm tự động
```

## Cấu trúc đề thật (Bảng B)

| | Vòng loại · Level 2 | Chung kết · Level 1 |
|---|---|---|
| Thời lượng | 50 phút / 10 câu | 90 phút / 10 câu |
| Đọc hiểu code | **440đ** | 340đ |
| Design | 280đ | **420đ** |
| Debugging | 280đ | 240đ |

Đạt **≥600/1000** ở bất kỳ vòng nào là có chứng chỉ COS Pro, kể cả không đoạt giải.

> Mốc thời gian trên trang chủ đang hiển thị không nhất quán (mục hành trình ghi
> vòng loại 20.09–31.09, banner và widget lại ghi 03.10; chung kết 10.10).
> Xác nhận lại với ban tổ chức trước khi lên lịch ôn.

## Lộ trình 5 tuần (từ 17/08)

**Tuần 1 — dựng phản xạ cú pháp.**
Đọc hết `CHEATSHEET.md`. Làm trọn Nhóm 1 (15 bài), bấm giờ **90 giây/bài**.
Bài nào quá 3 phút thì đánh dấu, làm lại vào cuối tuần. Mục tiêu: 15/15.

**Tuần 2 — nhận diện bẫy.**
Nhóm 2 (Debugging), **3 phút/bài**, không mở `GIAI_THICH.md` trước.
Chấm xong mới đọc giải thích. Cuối tuần làm lại từ đầu, mục tiêu 15/15 trong 30 phút.

**Tuần 3 — tốc độ viết hàm.**
Nhóm 3 bài 3.01–3.10, **8 phút/bài**. Đây là phần bạn sẽ chậm nhất vì phải tự nghĩ
cấu trúc. Viết bản chạy đúng trước, tối ưu sau.

**Tuần 4 — mức chung kết.**
Nhóm 3 bài 3.11–3.15 (OOP, hai ngăn xếp, evaluator). Làm lại toàn bộ Nhóm 1 để giữ
tốc độ. Làm **đề mô phỏng 1** trong đúng 50 phút, không tra cứu.

**Tuần 5 — mô phỏng phòng thi.**
Làm lại mọi bài từng sai. Mỗi 2 ngày làm lại đề mô phỏng, mục tiêu ≥900/1000
trong 40 phút. Ngày cuối chỉ đọc lại mục 8 và 9 của `CHEATSHEET.md`.

## Nguyên tắc

- **Không mở `dap_an/` khi chưa hết giờ tự đặt.** Nhìn lời giải sớm cho cảm giác
  "đã hiểu" mà không tạo được phản xạ — đúng thứ bị đo trong 50 phút.
- **Bài nào sai thì 2 ngày sau làm lại từ đầu**, không phải đọc lại lời giải.
- Đọc hiểu code là 440đ và là phần dễ nhất. Sai một câu ở đây tốn công gấp ba
  để bù bằng câu Design.
