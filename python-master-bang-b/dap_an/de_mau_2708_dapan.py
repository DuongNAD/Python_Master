# -*- coding: utf-8 -*-
"""DAP AN DE MAU CHINH THUC 2708 - BANG B (6 cau)."""
import math


def solution_01(scores):
    """Q1 (170d) - Bai goc: bo 1 max, 1 min, lay phan nguyen trung binh."""
    max_avg = 0
    for s in scores:
        total = sum(s) - max(s) - min(s)
        count = len(s) - 2
        avg = total // count
        if avg > max_avg:
            max_avg = avg
    return max_avg


def solution_02(scores):
    """Q2 (166d) - Bien the 1: bo 2 max va 2 min."""
    max_avg = 0
    for s in scores:
        sorted_s = sorted(s)
        remaining = sorted_s[2:-2]
        avg = sum(remaining) // len(remaining)
        if avg > max_avg:
            max_avg = avg
    return max_avg


def solution_03(scores):
    """Q3 (166d) - Bien the 2: lam tron len (ceil)."""
    max_avg = 0
    for s in scores:
        total = sum(s) - max(s) - min(s)
        count = len(s) - 2
        avg = math.ceil(total / count)
        if avg > max_avg:
            max_avg = avg
    return max_avg


def solution_04(names, scores):
    """Q4 (166d) - Bien the 3: return ten thi sinh co diem cao nhat."""
    best_name = ""
    best_score = -1.0
    for name, s in zip(names, scores):
        avg = (sum(s) - max(s) - min(s)) / (len(s) - 2)
        if avg > best_score:
            best_score = avg
            best_name = name
    return best_name


def solution_05(scores):
    """Q5 (166d) - Bien the 4: so giam khao khac nhau giua cac thi sinh."""
    max_avg = 0
    for s in scores:
        if len(s) < 3:
            continue
        avg = (sum(s) - max(s) - min(s)) // (len(s) - 2)
        if avg > max_avg:
            max_avg = avg
    return max_avg


def solution_06(scores):
    """Q6 (166d) - Bien the 5: return danh sach xep hang (index)."""
    ranked = []
    for i, s in enumerate(scores):
        avg = (sum(s) - max(s) - min(s)) / (len(s) - 2)
        ranked.append((i, avg))
    ranked.sort(key=lambda x: (-x[1], x[0]))
    return [item[0] for item in ranked]


if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de_mau", "DAP AN DE MAU CHINH THUC 2708 - BANG B")
