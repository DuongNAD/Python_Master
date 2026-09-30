# -*- coding: utf-8 -*-
"""
CHUYÊN ĐỀ: BỘ ĐỀ THI THẬT SOTALUNI / YBM COS PRO - PYTHON LEVEL 3 (EXAM 2)
================================================================================
Bao gồm:
- Câu 2: Sắp xếp thông tin nhận dạng sách lớp (Custom Multi-key Sorting)
- Câu 4: Kiểm tra số tiền thối ít nhất (Greedy Coin Change)
- Câu 6: Sắp xếp hợp nhất (Merge Sort) & Trả về phần tử trung vị

Chạy kiểm thử:
    python luyen_tap/de_thi_that_level3_exam2.py
================================================================================
"""

import sys

# Ensure UTF-8 output on Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass


# ==============================================================================
# CÂU HỎI 02: TRIỂN KHAI HÀM - SẮP XẾP SÁCH LỚP (CUSTOM SORT)
# ==============================================================================
def solution_q02(bookIndex):
    """
    Sắp xếp danh sách thông tin nhận dạng sách lớp theo quy tắc:
    - Ký tự đầu tiên: thứ tự từ điển (A-Z tăng dần)
    - Phần số: giá trị lớn hơn đứng trước (giảm dần)
    """
    answer = sorted(bookIndex, key=lambda x: (x[0], -int(x[1:])))
    return answer


# ==============================================================================
# CÂU HỎI 04: TRIỂN KHAI HÀM - KIỂM TRA SỐ TIỀN THỐI (GREEDY COIN CHANGE)
# ==============================================================================
def solution_q04(pro_price, pay_price):
    """
    Tính số tiền thối và số lượng tờ tiền ít nhất có thể.
    Các mệnh giá: 50000, 10000, 5000, 1000, 500, 100, 50, 10 won.
    Trả về [tiền_thối, tổng_số_tờ].
    """
    answer = list(0 for i in range(2))
    change = pay_price - pro_price
    answer[0] = change

    denominations = [50000, 10000, 5000, 1000, 500, 100, 50, 10]
    count = 0
    remaining = change

    for coin in denominations:
        count += remaining // coin
        remaining %= coin

    answer[1] = count
    return answer


def solution_q04_divmod(pro_price, pay_price):
    """Cách 2: Dùng divmod() ngắn gọn."""
    change = pay_price - pro_price
    count = 0
    rem = change
    for coin in [50000, 10000, 5000, 1000, 500, 100, 50, 10]:
        bills, rem = divmod(rem, coin)
        count += bills
    return [change, count]


# ==============================================================================
# CÂU HỎI 06: ĐIỀN VÀO CHỖ TRỐNG - SẮP XẾP HỢP NHẤT (MERGE SORT) & TRUNG VỊ
# ==============================================================================
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
        insert_idx += 1
        tmp_right_idx += 1

    if tmp_left_idx > tmp_mid_idx:
        for idx in range(tmp_right_idx, right_idx + 1):
            tmp_num_list[insert_idx] = num_list[idx]
            insert_idx += 1
    else:
        for idx in range(tmp_left_idx, tmp_mid_idx + 1):
            tmp_num_list[insert_idx] = num_list[idx]
            insert_idx += 1

    for idx in range(left_idx, right_idx + 1):
        num_list[idx] = tmp_num_list[idx]


def merge_sort(left_idx, right_idx, num_count, num_list):
    # [Ô TRỐNG 1]: Điều kiện dừng đệ quy (chỉ còn 1 phần tử)
    if left_idx == right_idx:
        return

    mid_idx = (left_idx + right_idx) >> 1

    merge_sort(left_idx, mid_idx, num_count, num_list)
    # [Ô TRỐNG 2]: Nửa phải bắt đầu từ mid_idx + 1
    merge_sort(mid_idx + 1, right_idx, num_count, num_list)

    merge(left_idx, right_idx, num_count, num_list)


def solution_q06(numCount, numList):
    merge_sort(0, numCount - 1, numCount, numList)
    # [Ô TRỐNG 3]: Giá trị tại vị trí chia 2
    return numList[numCount // 2]


# ==============================================================================
# BỘ KIỂM THỬ TỰ ĐỘNG (UNIT TESTS)
# ==============================================================================
if __name__ == "__main__":
    print("=" * 70)
    print("KIỂM THỬ: PYTHON LEVEL 3 - EXAM 2 (SOTALUNI / YBM COS PRO)")
    print("=" * 70)

    # 1. Tests Câu 2
    tc1_in = ["D12345", "B37712", "D45321"]
    tc1_expected = ["B37712", "D45321", "D12345"]
    assert solution_q02(tc1_in) == tc1_expected
    print("✅ Câu 02 (Test 1 - Ví dụ đề bài): PASSED")

    tc2_in = ["B12345", "D37712", "B45321"]
    tc2_expected = ["B45321", "B12345", "D37712"]
    assert solution_q02(tc2_in) == tc2_expected
    print("✅ Câu 02 (Test 2 - Test case công khai 1): PASSED")

    # 2. Tests Câu 4 (Kiểm tra tiền thối)
    assert solution_q04(450, 66110) == [65660, 7]
    assert solution_q04_divmod(450, 66110) == [65660, 7]
    print("✅ Câu 04 (Test 1 - 450 won / trả 66110 won -> [65660, 7]): PASSED")

    assert solution_q04(50000, 56000) == [6000, 2]
    assert solution_q04_divmod(50000, 56000) == [6000, 2]
    print("✅ Câu 04 (Test 2 - 50000 won / trả 56000 won -> [6000, 2]): PASSED")

    assert solution_q04(10000, 10000) == [0, 0]
    print("✅ Câu 04 (Test 3 - Tiền trả vừa đủ, không thối -> [0, 0]): PASSED")

    assert solution_q04(10, 100000) == [99990, 20]
    print("✅ Câu 04 (Test 4 - Tiền thối tối đa 99990 won -> [99990, 20]): PASSED")

    # 3. Tests Câu 6 (Merge Sort & Median)
    arr_q06_1 = [1, 6, 3, 4, 2, 0, 10]
    res_q06_1 = solution_q06(7, arr_q06_1)
    assert res_q06_1 == 3, f"Lỗi Q06-1: {res_q06_1}"
    print("✅ Câu 06 (Test 1 - Ví dụ 7 phần tử -> median = 3): PASSED")

    arr_q06_2 = [164, 41, 173, 149, 59, 48, 168, 42, 6, 130, 102, 76, 10, 54, 49, 56, 77, 183, 53, 55]
    res_q06_2 = solution_q06(20, arr_q06_2)
    assert res_q06_2 == 59, f"Lỗi Q06-2: {res_q06_2}"
    print("✅ Câu 06 (Test 2 - Ví dụ 20 phần tử -> median = 59): PASSED")

    assert solution_q06(1, [42]) == 42
    assert solution_q06(2, [100, 10]) == 100
    print("✅ Câu 06 (Test 3 - Edge cases mảng 1 & 2 phần tử): PASSED")

    print("=" * 70)
    print("🎉 TẤT CẢ TEST CASES CỦA EXAM 2 (CÂU 2, 4, 6) ĐÃ VƯỢT QUA 100%!")
    print("=" * 70)
