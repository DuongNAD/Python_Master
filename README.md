# Python Master 2026 · Zero → Hero Pro — Bảng B (19–24 tuổi)

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg?logo=python&logoColor=white)](https://www.python.org/)
[![COS Pro](https://img.shields.io/badge/COS%20Pro-Level%202%20%26%20Level%201-orange.svg)]()
[![Exercises](https://img.shields.io/badge/Katas-90%2F90%20Chấm%20Tự%20Động-brightgreen.svg)]()
[![Decks](https://img.shields.io/badge/Slides-5%20Decks%20%2B%20Web%20Lab-purple.svg)]()
[![Traps](https://img.shields.io/badge/Bẫy%20Python-50%20Bẫy%20Tử%20Thần-red.svg)]()
[![Offline](https://img.shields.io/badge/Offline-100%25%20No%20Internet-success.svg)]()

Bộ tài liệu luyện thi và bài giảng tương tác toàn diện bám sát chứng chỉ **COS Pro Level 2 (Vòng loại: 50 phút / 10 câu)** và **Level 1 (Chung kết: 90 phút / 10 câu)**. Ngưỡng đạt chứng chỉ: **≥600 / 1000 điểm**.

---

## ⚡ Khởi Chạy Nhanh: Visual Learning Hub (`launch_hub.py`)

Cách học nhanh nhất và tốt nhất (tương tự như trong `Machine_Learning` và `Quantum_Computing`):
Mở terminal (PowerShell / Command Prompt) tại thư mục `Python_Master` và chạy:

```bash
py launch_hub.py
```

Lệnh trên sẽ:
1. Tự động khởi chạy máy chủ cục bộ tại `http://127.0.0.1:8088/`.
2. Mở trình duyệt hiển thị **Slide Portal** và **Đấu trường Kata**.
3. Kích hoạt backend **CPython 3 API** để biên dịch thời gian thực và chấm thi chuẩn xác 100%.

> **Ghi chú**: Nếu bạn không muốn bật server, toàn bộ hệ thống vẫn chạy **offline 100%** khi mở trực tiếp file `slides/index.html` hoặc `slides/practice.html` nhờ engine **Skulpt** nhúng sẵn trong thư mục `slides/assets/vendor/`.

---

## 🚀 Hệ Thống Slide Bài Giảng Tương Tác (`slides/`)

Hệ thống bài giảng slide thế hệ mới thiết kế theo chuẩn **Quantum Computing & Machine Learning**, xen kẽ lý thuyết chuẩn xác và khối thực hành code trực tiếp:

### 🌐 [Mở Trang Chủ Slide Hub: `slides/index.html`](slides/index.html)

```
slides/
├── index.html               Trang chủ Portal, Lộ trình 5 tuần, Cấu trúc đề thi & Checklist
├── deck1_foundation.html    Phase 1 · Nền tảng cốt lõi, Chân trị & Xử lý Chuỗi (~50p)
├── deck2_structures.html    Phase 2 · Ma trận 2D, Dict, Set, Mutable Defaults & OOP (~60p)
├── deck3_traps_stdlib.html  Phase 3 · Thư viện chuẩn (collections/heapq) & 50 Bẫy Tử Thần (~65p)
├── deck4_algorithms.html    Phase 4 · 11 Thuật toán kinh điển (Two Pointers, Window, BFS, DP) (~75p)
├── deck5_exam_strategy.html Phase 5 · Chiến thuật phòng thi 50p/90p, Checklist 30s & Đề mẫu (~45p)
├── practice.html            Đấu trường luyện code: 90 Kata + 50 Bẫy + Visualizers + Thi thử 50:00
└── assets/
    ├── theme.css            Giao diện Cyber Dark Theme, Glassmorphism, Responsive
    ├── deck.js              Engine điều hướng slide, phím tắt, tìm kiếm, quiz, checklist
    ├── python_lab.js        Trình chạy code Python kép (CPython Backend + Skulpt Offline) & Visualizers
    ├── practice_lab.js      Engine chấm 90 bài tập thực tế & đồng hồ thi thử
    ├── kata_tests_data.js   Bộ dữ liệu test cases thực tế trích xuất từ giáo trình
    └── vendor/
        ├── skulpt.min.js    Trình thông dịch Python 3 chạy trực tiếp trong JavaScript
        └── skulpt-stdlib.js Thư viện chuẩn hỗ trợ chạy offline không cần mạng
```

### ⌨️ Phím tắt điều hướng trong Slide
- `→` hoặc `Space`: Chuyển ý tiếp theo hoặc sang slide kế tiếp.
- `←`: Lùi lại slide trước.
- `O`: Mở mục lục toàn bộ slide (bấm vào là nhảy ngay tới slide).
- `/`: Tìm kiếm xuyên suốt slide (hỗ trợ tiếng Việt không dấu).
- `D`: Đánh dấu slide này "Đã hiểu" (tự động lưu vào trình duyệt).
- `?`: Bảng tra cứu phím tắt.
- `N`: Mở ghi chú giảng viên.

---

## 🥊 Đấu Trường Luyện Tập & Thực Chiến (`slides/practice.html`)

Phòng thực hành bao gồm 4 khu vực:
1. **Đấu trường 90 Kata**: Chia làm 6 nhóm bám sát đề thi (Điền chỗ trống, Debugging sửa 1 dòng, Design Level 2, Format solution, và Design Level 1 OOP). Chấm điểm thật từng test case (Tham số đầu vào, Kỳ vọng vs Nhận được).
2. **50 Bẫy Tử Thần (Spot The Bug)**: Thử thách đố vui phản xạ 30 giây phân biệt code SAI vs code ĐÚNG kèm giải thích sâu nguyên nhân gốc rễ.
3. **Algo Visualizer Lab**: Trực quan hóa từng bước chuyển động của thuật toán (Two Pointers, Sliding Window K=3, Ma trận xoắn ốc Spiral 4×4, Stack kiểm tra dấu ngoặc hợp lệ).
4. **Đồng hồ thi thử mô phỏng**: Đồng hồ đếm ngược 50:00 / 90:00 và chấm điểm trực tiếp 5 đề thi mẫu thang điểm 1000.

---

## 💻 Luyện Tập Qua Terminal & Chấm Tự Động

Toàn bộ mã nguồn bài tập gốc nằm trong [`python-master-bang-b/`](python-master-bang-b/):
```bash
cd python-master-bang-b

# Làm đề mẫu chính thức 27/08 trước để biết cấu trúc đề thật:
py de_mo_phong/de_mau_2708.py

# Chấm tự động từng nhóm bài tập (15 bài/nhóm):
py cham_diem.py 1     # Nhóm 1 · Đọc hiểu, điền chỗ trống (440đ)
py cham_diem.py 2     # Nhóm 2 · Debugging sửa 1 dòng (280đ)
py cham_diem.py 3     # Nhóm 3 · Design Level 2 (280đ)
py cham_diem.py 4     # Nhóm 4 · Điền chỗ trống format solution() (440đ)
py cham_diem.py 5     # Nhóm 5 · Debugging format solution() (280đ)
py cham_diem.py 6     # Nhóm 6 · Design Level 1 Chung kết (420đ)
py cham_diem.py all   # Chấm toàn bộ 90 bài

# Chạy sổ theo dõi tiến độ & Lịch ôn lặp lại ngắt quãng:
py so_theo_doi.py all
py so_theo_doi.py hom_nay   # Bài cần ôn hôm nay
py so_theo_doi.py yeu       # Các bài hay làm sai nhất
```

---

## 🎯 Cấu Trúc Đề Thi COS Pro Bảng B

| Hạng mục | Vòng loại · Level 2 (50 phút) | Chung kết · Level 1 (90 phút) |
|---|---|---|
| **Đọc hiểu code** | **440 điểm** (Mỏ điểm lớn nhất, làm đầu tiên) | 340 điểm |
| **Debugging** | 280 điểm (Chỉ sai đúng 1 dòng) | 240 điểm |
| **Design** | 280 điểm | **420 điểm** (Thuật toán & OOP) |
| **Ngưỡng đạt chứng chỉ** | **≥ 600 / 1000 điểm** | **≥ 600 / 1000 điểm** |

---

## 📚 Thư Viện Tài Liệu Kiến Thức Chi Tiết

- [`KIEN_THUC.md`](python-master-bang-b/KIEN_THUC.md): Giáo trình 13 chương chuẩn mực cho cả hai vòng thi.
- [`BAY_PYTHON.md`](python-master-bang-b/BAY_PYTHON.md): 50 cái bẫy kinh điển (mỗi bẫy có code SAI vs code ĐÚNG).
- [`MAU_CODE.md`](python-master-bang-b/MAU_CODE.md): 30 mẫu code kinh điển phải thuộc lòng (mỗi mẫu ≤15 dòng).
- [`CHIEN_THUAT_PHONG_THI.md`](python-master-bang-b/CHIEN_THUAT_PHONG_THI.md): Quy tắc bỏ câu Hard Stop & checklist 30s đọc đề.
- [`CHEATSHEET.md`](python-master-bang-b/CHEATSHEET.md): Bảng tóm tắt tra cứu nhanh trước giờ thi.
