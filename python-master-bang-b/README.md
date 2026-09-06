# Bộ luyện thi Python Master 2026 — Bảng B (19–24 tuổi)

**90 bài tập + 5 đề mô phỏng chấm tự động + 4 tài liệu kiến thức**, bám khung
COS Pro Level 2 (vòng loại) → Level 1 (chung kết).

## Bắt đầu ở đâu

```bash
cd python-master-bang-b
python3 de_mo_phong/de_mau_2708.py
```

Đề mẫu chính thức 27/08. Làm nó trước để biết đề thật trông ra sao, rồi mới ôn.

## Cấu trúc đề thật

| | Vòng loại · Level 2 | Chung kết · Level 1 |
|---|---|---|
| Thời lượng | 50 phút / 10 câu | 90 phút / 10 câu |
| Đọc hiểu code | **440đ** | 340đ |
| Design | 280đ | **420đ** |
| Debugging | 280đ | 240đ |

Đạt **≥600/1000** ở bất kỳ vòng nào là có chứng chỉ COS Pro, kể cả không đoạt giải.

### Ba điều đề mẫu 27/08 tiết lộ

1. **Tên hàm luôn là `solution`.** Không bao giờ là tên tiếng Việt.
2. **Đề luôn có 5 phần cố định**: mô tả → Giải thích tham số → Giải thích giá trị
   return → Ví dụ (bảng) → Giải thích ví dụ. Ràng buộc kích thước và miền giá trị
   luôn được ghi rõ ở phần "Giải thích tham số" — đọc kỹ để biết có phải xử lý
   mảng rỗng hay số âm không.
3. **Bẫy nằm ở câu cuối phần return.** "Chỉ return phần số nguyên" nghĩa là `int()`
   chứ không phải `round()` — `round(80.5)` ra 80 nhưng `round(81.5)` ra 82.

Nguyên văn đề mẫu và phân tích đầy đủ: [`de_mo_phong/DE_MAU_2708.md`](de_mo_phong/DE_MAU_2708.md).

## Các lệnh

```bash
# --- luyện tập theo nhóm (sửa file trong luyen_tap/, chấm, lặp) ---
python3 cham_diem.py 1     # Nhóm 1 · Đọc hiểu, điền chỗ trống          15 bài
python3 cham_diem.py 2     # Nhóm 2 · Debugging                          15 bài
python3 cham_diem.py 3     # Nhóm 3 · Design (Level 2)                   15 bài
python3 cham_diem.py 4     # Nhóm 4 · Điền chỗ trống, format solution()  15 bài
python3 cham_diem.py 5     # Nhóm 5 · Debugging, format solution()       15 bài
python3 cham_diem.py 6     # Nhóm 6 · Design mức chung kết (Level 1)     15 bài
python3 cham_diem.py all   # cả 6 nhóm
python3 cham_diem.py all -d   # chấm file ĐÁP ÁN (để kiểm tra bộ test)

# --- đề mô phỏng, chấm thang 1000 ---
python3 de_mo_phong/de_mau_2708.py       # đề mẫu chính thức + 5 biến thể
python3 de_mo_phong/de_1_vong_loai.py    # 10 câu / 50 phút
python3 de_mo_phong/de_2_vong_loai.py    # 10 câu / 50 phút
python3 de_mo_phong/de_3_vong_loai.py    # 10 câu / 50 phút, khó hơn
python3 de_mo_phong/de_4_chung_ket.py    # 10 câu / 90 phút, Level 1

# --- sổ theo dõi + lịch ôn lặp lại ngắt quãng ---
python3 so_theo_doi.py all       # chấm và ghi lại kết quả
python3 so_theo_doi.py hom_nay   # hôm nay cần ôn lại bài nào
python3 so_theo_doi.py yeu       # bài hay sai nhất
python3 so_theo_doi.py tom_tat   # bảng tiến độ

# --- kiểm tra chất lượng bộ đề (chạy khi nghi ngờ đề hoặc đáp án sai) ---
python3 de_mo_phong/_kiem_dap_an.py   # mọi đề phải có đáp án đạt 1000/1000
python3 kiem_tra_tai_lieu.py          # mọi đoạn code trong tài liệu phải chạy
```

Không cần cài gì thêm — chỉ Python 3.8+, thư viện chuẩn.

## Tài liệu

| File | Nội dung |
|---|---|
| [`KIEN_THUC.md`](KIEN_THUC.md) | Giáo trình đầy đủ, 13 chương. Đọc hết là đủ kiến thức cho cả hai vòng |
| [`MAU_CODE.md`](MAU_CODE.md) | 30 mẫu code phải thuộc lòng, mỗi mẫu ≤15 dòng |
| [`BAY_PYTHON.md`](BAY_PYTHON.md) | 50 cái bẫy, mỗi bẫy có code SAI / code ĐÚNG |
| [`CHIEN_THUAT_PHONG_THI.md`](CHIEN_THUAT_PHONG_THI.md) | Thứ tự làm bài, phân bổ thời gian, checklist trước khi nộp |
| [`CHEATSHEET.md`](CHEATSHEET.md) | Bản tóm tắt ngắn — đọc lại trước hôm thi |
| [`GIAI_THICH.md`](GIAI_THICH.md) | Giải thích 15 lỗi nhóm 2 |
| [`GIAI_THICH_P5.md`](GIAI_THICH_P5.md) | Giải thích 15 lỗi nhóm 5, kèm mẹo phát hiện trong 30 giây |

## Bố cục thư mục

```
luyen_tap/        đề bài — bạn sửa ở đây
dap_an/           lời giải tham chiếu — đừng mở sớm
de_mo_phong/      5 đề thi thử + bộ chấm thang 1000
bo_test*.py       bộ test (không cần sửa)
cham_diem.py      chấm tự động
so_theo_doi.py    sổ tiến độ, lịch ôn lặp lại ngắt quãng
tien_do.json      dữ liệu tiến độ (không commit; xóa là làm lại từ đầu)
```

## Lộ trình 5 tuần (từ 27/08)

**Tuần 1 — phản xạ cú pháp.**
Đọc `KIEN_THUC.md` chương 1–8. Làm trọn Nhóm 1 và Nhóm 4, bấm giờ **90 giây/bài**
cho Nhóm 1, **2 phút/bài** cho Nhóm 4. Mục tiêu 30/30.

**Tuần 2 — nhận diện bẫy.**
Nhóm 2 rồi Nhóm 5, **3 phút/bài**, không mở file giải thích trước. Chấm xong mới
đọc. Đọc `BAY_PYTHON.md` mỗi ngày 10 bẫy. Cuối tuần làm lại cả hai nhóm trong 60 phút.

**Tuần 3 — tốc độ viết hàm.**
`KIEN_THUC.md` chương 9–10 và `MAU_CODE.md`. Nhóm 3, **8 phút/bài**. Đây là phần
chậm nhất vì phải tự nghĩ cấu trúc — viết bản chạy đúng trước, tối ưu sau.
Làm **đề 1** trong đúng 50 phút.

**Tuần 4 — mức chung kết.**
`KIEN_THUC.md` chương 11–13. Nhóm 6, **10 phút/bài**. Làm **đề 2** và **đề 3**,
mỗi đề đúng 50 phút, không tra cứu.

**Tuần 5 — mô phỏng phòng thi.**
`python3 so_theo_doi.py yeu` rồi làm lại mọi bài từng sai. Làm **đề 4 chung kết**
trong 90 phút. Mỗi 2 ngày làm lại một đề vòng loại, mục tiêu ≥900/1000 trong 40 phút.
Ngày cuối chỉ đọc `CHIEN_THUAT_PHONG_THI.md` và `CHEATSHEET.md`.

## Nguyên tắc

- **Không mở `dap_an/` khi chưa hết giờ tự đặt.** Nhìn lời giải sớm cho cảm giác
  "đã hiểu" mà không tạo được phản xạ — đúng thứ bị đo trong 50 phút.
- **Bài nào sai thì làm lại từ đầu vào ngày `so_theo_doi.py hom_nay` chỉ ra**,
  không phải đọc lại lời giải.
- **Đọc hiểu code là 440đ và là phần dễ nhất.** Sai một câu ở đây tốn công gấp ba
  để bù bằng câu Design.
- **Tập viết hàm tên `solution`** cho quen tay, vì đề thật luôn đặt tên như vậy.

> Mốc thời gian trên trang chủ đang hiển thị không nhất quán (mục hành trình ghi
> vòng loại 20.09–31.09, banner và widget lại ghi 03.10; chung kết 10.10).
> Xác nhận lại với ban tổ chức trước khi chốt lịch ôn.
