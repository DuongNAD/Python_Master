---
document_type: project_task_board
project: Python Master (Table B COS Pro)
version: 2.0.0
last_updated: 2026-09-23
master_index: file:///D:/02_Learning_Knowledge/INDEX.md
focus_board: file:///D:/02_Learning_Knowledge/ACTIVE_LEARNING.md
central_tasks: file:///D:/02_Learning_Knowledge/TASKS.md
rfc2119_compliance: strict
emoji_policy: none
---

# Python Master - Task Board

Master Knowledge Map: [INDEX.md](file:///D:/02_Learning_Knowledge/INDEX.md)
Active Focus Board: [ACTIVE_LEARNING.md](file:///D:/02_Learning_Knowledge/ACTIVE_LEARNING.md)
System Task Board: [TASKS.md](file:///D:/02_Learning_Knowledge/TASKS.md)
Project Overview: [README.md](file:///D:/02_Learning_Knowledge/Python_Master/README.md)
Quick Cheatsheet: [CHEATSHEET.md](file:///D:/02_Learning_Knowledge/Python_Master/CHEATSHEET.md)
Launch Hub CLI: [launch_hub.py](file:///D:/02_Learning_Knowledge/Python_Master/launch_hub.py)

## Task Maintenance Rules (RFC 2119)
- Standardized Schema: All tasks MUST follow the tag format `- [ ] [Deadline: YYYY-MM-DD HH:mm] [Priority: P0/P1/P2] Description`.
- Task Preservation: AI agents MUST NEVER delete existing tasks.
- Status Transitions: Task status MUST ONLY be transitioned between `[ ]` and `[x]`, and status change to completed MUST occur ONLY IF verification criteria are met.
- Task Placement: Newly identified micro-tasks MUST be appended to the end of the appropriate section.
- Local Authority: Local operations within this project directory MUST update this file directly.

## 1. Setup & Hub Initialization
- [x] [Deadline: 2026-09-21 23:59] [Priority: P2] Thiết lập kho luyện thi [python-master-bang-b](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b).
- [x] [Deadline: 2026-09-21 23:59] [Priority: P2] Xác thực toàn vẹn tài liệu với [kiem_tra_tai_lieu.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/kiem_tra_tai_lieu.py).
- [x] [Deadline: 2026-09-22 23:59] [Priority: P2] Khởi tạo CLI Runner trung tâm điều hướng học tập: [launch_hub.py](file:///D:/02_Learning_Knowledge/Python_Master/launch_hub.py).
- [x] [Deadline: 2026-09-22 23:59] [Priority: P2] Hoàn thiện hệ thống ghi nhớ cú pháp và chiến thuật thi: [CHIEN_THUAT_PHONG_THI.md](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/CHIEN_THUAT_PHONG_THI.md).

## 2. Table B Problem Sets & Practice (`launch_hub.py`)
- [ ] [Deadline: 2026-09-27 23:59] [Priority: P1] Khởi chạy [launch_hub.py](file:///D:/02_Learning_Knowledge/Python_Master/launch_hub.py) và chọn giải bài tập theo từng chuyên đề Bảng B.
- [ ] [Deadline: 2026-09-27 23:59] [Priority: P1] Hoàn thành chuyên đề Xử lý Chuỗi & Mảng 1 chiều trong [luyen_tap](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/luyen_tap).
- [ ] [Deadline: 2026-09-28 23:59] [Priority: P1] Hoàn thành chuyên đề Ma trận và Mảng 2 chiều (thao tác hàng, cột, đường chéo chính/phụ).
- [ ] [Deadline: 2026-09-29 23:59] [Priority: P2] Hoàn thành chuyên đề Cấu trúc dữ liệu: Dictionary, Set, Stack, Queue và Counting.
- [ ] [Deadline: 2026-09-30 23:59] [Priority: P2] Chạy công cụ chấm điểm tự động [cham_diem.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/cham_diem.py) sau mỗi buổi luyện.
- [ ] [Deadline: 2026-10-01 23:59] [Priority: P2] Đồng bộ tiến độ hoàn thành vào [tien_do.json](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/tien_do.json).

## 3. Mock Tests & Exam Simulation (`de_mo_phong`)
- [ ] [Deadline: 2026-10-02 23:59] [Priority: P1] Hoàn thành Đề thi mô phỏng 01 trong [de_mo_phong](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/de_mo_phong) dưới áp lực bấm giờ 50 phút.
- [ ] [Deadline: 2026-10-03 23:59] [Priority: P1] Hoàn thành Đề thi mô phỏng 02 và phân tích các trường hợp bẫy cú pháp.
- [ ] [Deadline: 2026-10-04 23:59] [Priority: P2] Chạy bộ kiểm thử toàn diện: [bo_test.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/bo_test.py), [bo_test_p4.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/bo_test_p4.py), [bo_test_p5.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/bo_test_p5.py), [bo_test_p6.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/bo_test_p6.py).
- [ ] [Deadline: 2026-10-05 23:59] [Priority: P2] Đối chiếu với lời giải mẫu trong [dap_an](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/dap_an) và cập nhật ghi chú vào [so_theo_doi.py](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/so_theo_doi.py).
- [ ] [Deadline: 2026-10-06 23:59] [Priority: P1] Đạt chuẩn 1000/1000 điểm tối đa trên các bộ đề thi thử trước kỳ thi chính thức.

## 4. Pitfalls, Patterns & Theory Review
- [ ] [Deadline: 2026-10-07 23:59] [Priority: P2] Ôn tập toàn bộ 30+ bẫy thường gặp trong [BAY_PYTHON.md](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/BAY_PYTHON.md) (mutability, scope, integer division, sort key).
- [ ] [Deadline: 2026-10-08 23:59] [Priority: P2] Thuộc lòng các mẫu code chuẩn hóa trong [MAU_CODE.md](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/MAU_CODE.md).
- [ ] [Deadline: 2026-10-09 23:59] [Priority: P2] Rà soát kiến thức nền tảng trong [KIEN_THUC.md](file:///D:/02_Learning_Knowledge/Python_Master/python-master-bang-b/KIEN_THUC.md) và các file giải thích chi tiết.

## 5. Roadmap v2 Milestones ([ROADMAP.md](file:///D:/02_Learning_Knowledge/Python_Master/Roadmaps/ROADMAP.md))
- [ ] [Deadline: 2026-10-13 22:00] [Priority: P1] M0: chạy so_theo_doi.py all, làm tiếp đề 1 Q3-Q10 bấm giờ 40 phút, ghi Sổ lỗi 3 mục.
- [ ] [Deadline: 2026-10-25 21:00] [Priority: P1] M1-M2: 4.01, 4.02, 4.03, 4.09, 4.10, 4.13 PASS; Tự kiểm tra M1 đúng từ 4/5.
- [ ] [Deadline: 2026-11-01 21:00] [Priority: P1] M2-M3: 4.04, 4.11, 4.12, 4.14, 4.15 PASS; vẽ được sơ đồ aliasing.
- [ ] [Deadline: 2026-11-08 21:00] [Priority: P1] M3-M4: 3.02, 3.04 PASS; sửa 2.12 để Nhóm 2 đạt 15/15.
- [ ] [Deadline: 2026-11-15 21:00] [Priority: P1] Ôn xen kẽ X1 từ 80%; M5: 4.05, 4.07, 3.05 PASS.
- [ ] [Deadline: 2026-11-22 21:00] [Priority: P1] M5-M6: 3.13 PASS; đề mẫu 27/08 đạt từ 5/6 trong 20 phút; Nhóm 5 lượt 1.
- [ ] [Deadline: 2026-11-29 21:00] [Priority: P1] M6: Nhóm 5 đạt 15/15 sau lượt làm mù và làm lại D+2.
- [ ] [Deadline: 2026-12-08 22:00] [Priority: P1] M7: Nhóm 4 đạt 15/15, Nhóm 3 từ 12/15.
- [ ] [Deadline: 2026-12-19 21:00] [Priority: P1] M8: thi thử bấm giờ đề 2 từ 700, đề 5 từ 750, đề 6 từ 800.
- [ ] [Deadline: 2026-12-29 22:00] [Priority: P2] Dự án A: đề tự soạn từ Sổ lỗi, bộ chấm đạt 1000/1000, bản trống từ 900 trong 25 phút.
