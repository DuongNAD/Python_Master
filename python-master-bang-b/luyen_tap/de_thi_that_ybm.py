# -*- coding: utf-8 -*-
"""
CHUYÊN ĐỀ: BỘ CÂU HỎI THI THẬT YBM COS PRO - CẤP 2 (PYTHON)
================================================================================
Tập hợp các câu hỏi thi thực tế trên hệ thống Satalini / YBM COS Pro Cấp 2.
Mỗi bài có đầy đủ code mẫu, bộ test case và giải thích chi tiết.

Chạy kiểm thử tất cả các bài:
    python luyen_tap/de_thi_that_ybm.py
================================================================================
"""

import sys

# Ensure UTF-8 output on Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
def solution_q02(in_data):
    """
    Tìm học sinh có tổng điểm cao nhất.
    Tie-breaker: Nếu bằng điểm, học sinh thi trước (index nhỏ hơn) xếp trước.
    Trả về [thứ_tự_học_sinh (1-based), tổng_điểm].
    """
    answer = list(0 for i in range(2))  # [thứ tự, điểm]
    i = 0
    for d1 in in_data:
        i = i + 1
        sum_score = 0
        for d2 in d1:
            sum_score = sum_score + d2

        # BẪY THI: Dùng dấu '<' thay vì '<=' để nếu bằng điểm thì giữ nguyên học sinh trước
        if answer[1] < sum_score:
            answer[0] = i
            answer[1] = sum_score

    return answer


# ==============================================================================
# CÂU HỎI 04: ĐIỀN CHỖ TRỐNG - MÓN TRÁNG MIỆNG BÁN CHẠY NHẤT
# ==============================================================================
def solution_q04(in_data):
    """
    Tìm món tráng miệng có tổng số lượng bán nhiều nhất (mã từ 1 đến 10).
    Tie-breaker: Nếu bằng số lượng, ưu tiên món có mã số nhỏ hơn.
    Trả về [mã_món, tổng_doanh_số].
    """
    answer = [0, 0]
    dessert = [0] * 11

    for d1 in in_data:
        flag = d1[0]
        dessert[flag] += d1[1]

    max_desert = 0
    max_number = 0
    i = -1

    for a1 in dessert:
        i += 1
        # BẪY THI: Dấu '>' thay vì '>=' để giữ mã món nhỏ hơn khi bằng số lượng
        if a1 > max_desert:
            max_desert = a1
            max_number = i

    price = 0
    for d1 in in_data:
        if max_number == d1[0]:
            price += d1[1]

    answer[0] = max_number
    answer[1] = price
    return answer


# ==============================================================================
# CÂU HỎI 05: ĐIỀN CHỖ TRỐNG - ĐẾM Ô DÍNH MÀU NƯỚC (VẾT CHÂN LAN TRUYỀN)
# ==============================================================================
def solution_q05(in_data):
    """
    Mỗi vết chân [r, c] làm dính màu sang [r, c-1] (nếu c > 0), [r, c], [r, c+1].
    Đếm số lượng ô có dính màu nước (>= 1).
    """
    answer = 0

    row = in_data[0][0]
    col = in_data[0][1]
    for i in range(1, len(in_data)):
        if row < in_data[i][0]:
            row = in_data[i][0]
        if col < in_data[i][1]:
            col = in_data[i][1]

    # BẪY THI: Vì bắn sang c + 1 nên kích thước cột cần col + 2
    tmp = [[0 for j in range(col + 2)] for i in range(row + 1)]

    for i in range(0, len(in_data)):
        r = in_data[i][0]
        c = in_data[i][1]

        if c > 0:
            tmp[r][c - 1] += 1
        tmp[r][c] += 1
        tmp[r][c + 1] += 1

    for d1 in tmp:
        for d2 in d1:
            if d2 >= 1:
                answer += 1

    return answer


# ==============================================================================
# CÂU HỎI 06: SỬA LỖI CODE (DEBUGGING) - SẮP XẾP CHỌN (SELECTION SORT)
# ==============================================================================
def solution_q06(N, arr):
    """
    Thuật toán sắp xếp chọn (Selection Sort) đưa mảng arr về thứ tự tăng dần.
    DÒNG BỊ LỖI TRONG ĐỀ THI:
        Dòng 6 trong đề viết nhầm thành: minIdx - j (hoặc minIdx = arr[j])
    SỬA THÀNH:
        minIdx = j  (cập nhật chỉ số của phần tử nhỏ nhất)
    """
    for i in range(0, N):
        minIdx = i
        for j in range(i, N):
            if arr[j] < arr[minIdx]:
                minIdx = j  # [DÒNG ĐÃ SỬA CHUẨN]
        tmp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = tmp
    return arr


# ==============================================================================
# CÂU HỎI 10: TRIỂN KHAI HÀM - KÍCH THƯỚC GẠCH LÁT NỀN TỐI ƯU (GCD)
# ==============================================================================
def solution_q10(in_data1, in_data2):
    """
    Lát gạch s x s cho sàn hình chữ nhật in_data1 x in_data2 sao cho không cắt gạch
    và số lượng gạch là ít nhất. Bản chất là tìm ƯCLN (GCD).
    """
    while in_data2:
        in_data1, in_data2 = in_data2, in_data1 % in_data2
    return in_data1


# ==============================================================================
# BỘ TEST TỰ ĐỘNG (UNIT TESTS)
# ==============================================================================
if __name__ == '__main__':
    print("=" * 70)
    print("KIỂM THỬ BỘ ĐỀ THI THẬT YBM COS PRO - CẤP 2 (PYTHON)")
    print("=" * 70)

    # Test Câu 02
    res_q02_1 = solution_q02([[3, 2], [2, 3], [1, 1]])
    assert res_q02_1 == [1, 5], f"Lỗi Q02-1: {res_q02_1}"
    res_q02_2 = solution_q02([[30, 20, 10], [20, 30, 20], [10, 10, 30]])
    assert res_q02_2 == [2, 70], f"Lỗi Q02-2: {res_q02_2}"
    print("✅ Câu 02 (Tìm học sinh hạng 1): PASSED (2/2 tests)")

    # Test Câu 04
    data_q04 = [[1, 5], [2, 3], [1, 2], [3, 7], [2, 4]]
    res_q04 = solution_q04(data_q04)
    # Món 1: 5 + 2 = 7; Món 2: 3 + 4 = 7; Món 3: 7. Bằng nhau -> chọn Món 1
    assert res_q04 == [1, 7], f"Lỗi Q04: {res_q04}"
    print("✅ Câu 04 (Món tráng miệng bán chạy nhất): PASSED (1/1 test)")

    # Test Câu 05
    data_q05 = [[1, 2], [1, 3]]
    # [1, 2] bắn sang (1,1), (1,2), (1,3)
    # [1, 3] bắn sang (1,2), (1,3), (1,4)
    # Tổng các ô dính: (1,1), (1,2), (1,3), (1,4) -> 4 ô
    res_q05 = solution_q05(data_q05)
    assert res_q05 == 4, f"Lỗi Q05: {res_q05}"
    print("✅ Câu 05 (Đếm ô dính màu nước): PASSED (1/1 test)")

    # Test Câu 06 (Selection Sort)
    res_q06_1 = solution_q06(6, [13, 10, 14, 8, 9, 2])
    assert res_q06_1 == [2, 8, 9, 10, 13, 14], f"Lỗi Q06-1: {res_q06_1}"
    res_q06_2 = solution_q06(5, [1, 10, 2, 8, 9])
    assert res_q06_2 == [1, 2, 8, 9, 10], f"Lỗi Q06-2: {res_q06_2}"
    res_q06_3 = solution_q06(10, [54, 30, 86, 18, 47, 33, 41, 24, 51, 31])
    assert res_q06_3 == [18, 24, 30, 31, 33, 41, 47, 51, 54, 86], f"Lỗi Q06-3: {res_q06_3}"
    print("✅ Câu 06 (Sắp xếp chọn - Selection Sort): PASSED (3/3 tests)")

    # Test Câu 10 (GCD)
    res_q10_1 = solution_q10(60, 48)
    assert res_q10_1 == 12, f"Lỗi Q10-1: {res_q10_1}"
    res_q10_2 = solution_q10(100, 25)
    assert res_q10_2 == 25, f"Lỗi Q10-2: {res_q10_2}"
    print("✅ Câu 10 (Kích thước gạch tối ưu - GCD): PASSED (2/2 tests)")

    print("=" * 70)
    print("🎉 TẤT CẢ CÁC CÂU THI THẬT YBM ĐÃ VƯỢT QUA KIỂM THỬ THÀNH CÔNG (100%)!")
    print("=" * 70)
