# -*- coding: utf-8 -*-
"""DAP AN DE MO PHONG 2 - VONG LOAI BANG B (COS Pro Level 2)."""
import math


# ===== DOC HIEU (Q1-Q4, 440 diem) ==========================================

def solution_01(arr):
    """Q1 (110d)"""
    if not arr:
        return []
    threshold = len(arr) // 3
    counts = {}
    for x in arr:
        counts[x] = counts.get(x, 0) + 1
    result = [x for x, c in counts.items() if c > threshold]
    return sorted(result)


def solution_02(sessions):
    """Q2 (110d)"""
    total = 0
    for start, end in sessions:
        duration = end - start
        if duration <= 30:
            continue
        elif duration <= 60:
            total += 10000
        else:
            extra_blocks = math.ceil((duration - 60) / 30)
            fee = 10000 + 5000 * extra_blocks
            total += fee
    return total


def solution_03(s):
    """Q3 (110d)"""
    if not s:
        return ""
    result = []
    current_char = s[0]
    count = 1
    for c in s[1:]:
        if c == current_char:
            count += 1
        else:
            result.append(current_char if count == 1 else f"{current_char}{count}")
            current_char = c
            count = 1
    result.append(current_char if count == 1 else f"{current_char}{count}")
    return "".join(result)


def solution_04(matrix):
    """Q4 (110d)"""
    if not matrix:
        return []
    n = len(matrix)
    rotated = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            rotated[j][n - 1 - i] = matrix[i][j]
    return rotated


# ===== DEBUGGING (Q5-Q7, 280 diem) =========================================

def solution_05(n):
    """Q5 (93d) - LOI GOC: Luy thua co dinh 3 thay vi so chu so len(s)."""
    s = str(n)
    d = len(s)
    total = sum(int(c) ** d for c in s)
    return total == n


def solution_06(cards):
    """Q6 (93d) - LOI GOC: Thieu kiem tra trung lap va thieu bo sanh chua Ace cao."""
    s = sorted(set(cards))
    if len(s) != 5:
        return False
    if s[-1] - s[0] == 4:
        return True
    if s == [1, 10, 11, 12, 13]:
        return True
    return False


def solution_07(transactions):
    """Q7 (94d) - LOI GOC: Rut tien khong kiem tra so du du de tru."""
    balances = {}
    for tx in transactions:
        user = tx.get("user")
        ttype = tx.get("type")
        amount = tx.get("amount", 0)
        if not user or amount <= 0:
            continue
        if user not in balances:
            balances[user] = 0
        if ttype == "DEPOSIT":
            balances[user] += amount
        elif ttype == "WITHDRAW":
            if balances[user] >= amount:
                balances[user] -= amount
    return balances


# ===== DESIGN (Q8-Q10, 280 diem) ===========================================

def solution_08(text):
    """Q8 (93d)"""
    if not text:
        return []
    words = text.split()
    counts = {}
    for w in words:
        clean_w = w.strip(".,!?;:").lower()
        if clean_w:
            counts[clean_w] = counts.get(clean_w, 0) + 1
    return sorted(counts.items(), key=lambda p: (-p[1], p[0]))


def solution_09(intervals):
    """Q9 (93d)"""
    if not intervals:
        return 0
    sorted_intervals = sorted(intervals, key=lambda x: x[1])
    count = 0
    last_end = -float("inf")
    for start, end in sorted_intervals:
        if start >= last_end:
            count += 1
            last_end = end
    return count


def solution_10(grid):
    """Q10 (94d)"""
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    visited = set()
    islands = 0

    def dfs(r, c):
        visited.add((r, c))
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1 and (nr, nc) not in visited:
                dfs(nr, nc)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1 and (r, c) not in visited:
                islands += 1
                dfs(r, c)
    return islands


if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de2", "DAP AN DE 2 - VONG LOAI BANG B (COS Pro Level 2)")
