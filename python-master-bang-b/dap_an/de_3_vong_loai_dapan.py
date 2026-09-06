# -*- coding: utf-8 -*-
"""DAP AN DE MO PHONG 3 - VONG LOAI BANG B (COS Pro Level 2)."""
import copy


# ===== DOC HIEU (Q1-Q4, 440 diem) ==========================================

def solution_01(arr, target):
    """Q1 (110d)"""
    left = 0
    right = len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []


def solution_02(s):
    """Q2 (110d)"""
    pairs = {")": "(", "}": "{", "]": "["}
    stack = []
    for c in s:
        if c in pairs.values():
            stack.append(c)
        elif c in pairs:
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()
        else:
            return False
    return len(stack) == 0


def solution_03(items, coupon):
    """Q3 (110d)"""
    total = sum(items)
    if total < coupon.get("min_spend", 0):
        return total
    discount = 0
    if coupon.get("type") == "PERCENT":
        discount = total * coupon.get("val", 0) // 100
        max_d = coupon.get("max_discount", 0)
        if max_d > 0 and discount > max_d:
            discount = max_d
    elif coupon.get("type") == "FIXED":
        discount = coupon.get("val", 0)
    discount = min(discount, total)
    return total - discount


def solution_04(row_index):
    """Q4 (110d)"""
    row = [1]
    for _ in range(row_index):
        new_row = [1]
        for j in range(len(row) - 1):
            new_row.append(row[j] + row[j + 1])
        new_row.append(1)
        row = new_row
    return row


# ===== DEBUGGING (Q5-Q7, 280 diem) =========================================

def solution_05(time_str, add_minutes):
    """Q5 (93d) - LOI GOC: Cong phut truc tiep khong tinh nho sang gio khi >= 60."""
    h, m = map(int, time_str.split(":"))
    total_minutes = h * 60 + m + add_minutes
    new_h = (total_minutes // 60) % 24
    new_m = total_minutes % 60
    return f"{new_h:02d}:{new_m:02d}"


def solution_06(nums):
    """Q6 (93d) - LOI GOC: Bo qua phan tu dau/cuoi va loi voi mang 1 phan tu."""
    if not nums:
        return []
    n = len(nums)
    if n == 1:
        return [0]
    peaks = []
    for i in range(n):
        if i == 0:
            if nums[0] > nums[1]:
                peaks.append(0)
        elif i == n - 1:
            if nums[n - 1] > nums[n - 2]:
                peaks.append(n - 1)
        else:
            if nums[i] > nums[i - 1] and nums[i] > nums[i + 1]:
                peaks.append(i)
    return peaks


def solution_07(inventory, requests):
    """Q7 (94d) - LOI GOC: Tru do dang khi chua kiem tra het dan den sai khi huy."""
    res = copy.deepcopy(inventory)
    for req in requests:
        item = req.get("item")
        qty = req.get("qty", 0)
        if item not in res or res[item] < qty:
            return copy.deepcopy(inventory)
        res[item] -= qty
    return res


# ===== DESIGN (Q8-Q10, 280 diem) ===========================================

def solution_08(words):
    """Q8 (93d)"""
    if not words:
        return []
    groups = {}
    for w in words:
        key = "".join(sorted(w))
        if key not in groups:
            groups[key] = []
        groups[key].append(w)
    result = []
    for grp in groups.values():
        result.append(sorted(grp))
    return sorted(result, key=lambda g: g[0])


def solution_09(matrix):
    """Q9 (93d)"""
    if not matrix or not matrix[0]:
        return []
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for c in range(left, right + 1):
            res.append(matrix[top][c])
        top += 1
        for r in range(top, bottom + 1):
            res.append(matrix[r][right])
        right -= 1
        if top <= bottom:
            for c in range(right, left - 1, -1):
                res.append(matrix[bottom][c])
            bottom -= 1
        if left <= right:
            for r in range(bottom, top - 1, -1):
                res.append(matrix[r][left])
            left += 1
    return res


def solution_10(nums, k):
    """Q10 (94d)"""
    if not nums:
        return []
    counts = {}
    for x in nums:
        counts[x] = counts.get(x, 0) + 1
    sorted_items = sorted(counts.items(), key=lambda p: (-p[1], p[0]))
    return [p[0] for p in sorted_items[:k]]


if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de3", "DAP AN DE 3 - VONG LOAI BANG B (COS Pro Level 2)")
