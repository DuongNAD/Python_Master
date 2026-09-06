# -*- coding: utf-8 -*-
"""DAP AN DE MO PHONG 4 - CHUNG KET BANG B (COS Pro Level 1)."""
from collections import Counter, OrderedDict, deque


# ===== DOC HIEU (Q1-Q3, 340 diem) ==========================================

def solution_01(arr):
    """Q1 (110d)"""
    n = len(arr)
    result = [-1] * n
    stack = []
    for i in range(n):
        while stack and arr[stack[-1]] < arr[i]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)
    return result


def solution_02(weights, values, capacity):
    """Q2 (110d)"""
    n = len(weights)
    dp = [0] * (capacity + 1)
    for i in range(n):
        w, v = weights[i], values[i]
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]


def solution_03(s):
    """Q3 (120d)"""
    if not s:
        return ""

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    longest = ""
    for i in range(len(s)):
        p1 = expand(i, i)
        p2 = expand(i, i + 1)
        best = p1 if len(p1) >= len(p2) else p2
        if len(best) > len(longest):
            longest = best
    return longest


# ===== DESIGN (Q4-Q7, 420 diem) ===========================================

def solution_04(maze, start, end):
    """Q4 (105d)"""
    if not maze or not maze[0]:
        return -1
    r1, c1 = start
    r2, c2 = end
    rows, cols = len(maze), len(maze[0])
    if not (0 <= r1 < rows and 0 <= c1 < cols) or not (0 <= r2 < rows and 0 <= c2 < cols):
        return -1
    if maze[r1][c1] == 1 or maze[r2][c2] == 1:
        return -1
    if start == end:
        return 0

    queue = deque([(r1, c1, 0)])
    visited = {(r1, c1)}
    while queue:
        r, c, d = queue.popleft()
        if (r, c) == (r2, c2):
            return d
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and maze[nr][nc] == 0 and (nr, nc) not in visited:
                visited.add((nr, nc))
                queue.append((nr, nc, d + 1))
    return -1


def solution_05(coins, amount):
    """Q5 (105d)"""
    if amount == 0:
        return 0
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for a in range(coin, amount + 1):
            if dp[a - coin] != float("inf"):
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float("inf") else -1


def solution_06(s):
    """Q6 (105d)"""
    def compute(tokens):
        values = []
        ops = []
        i = 0
        while i < len(tokens):
            tok = tokens[i]
            if isinstance(tok, int):
                values.append(tok)
            elif tok in ("*", "/"):
                op = tok
                i += 1
                next_val = tokens[i]
                prev_val = values.pop()
                if op == "*":
                    res = prev_val * next_val
                else:
                    res = int(prev_val / next_val)
                values.append(res)
            elif tok in ("+", "-"):
                ops.append(tok)
            i += 1

        res = values[0]
        for j, op in enumerate(ops):
            if op == "+":
                res += values[j + 1]
            else:
                res -= values[j + 1]
        return res

    stack = [[]]
    i = 0
    s_len = len(s)
    while i < s_len:
        c = s[i]
        if c.isdigit():
            num = 0
            while i < s_len and s[i].isdigit():
                num = num * 10 + int(s[i])
                i += 1
            stack[-1].append(num)
            continue
        elif c in "+-*/":
            stack[-1].append(c)
        elif c == "(":
            stack.append([])
        elif c == ")":
            sub_res = compute(stack.pop())
            stack[-1].append(sub_res)
        i += 1
    return compute(stack[0])


def solution_07(capacity, operations):
    """Q7 (105d)"""
    cache = OrderedDict()
    res = []
    for op in operations:
        cmd = op[0]
        if cmd == "get":
            k = op[1]
            if k in cache:
                cache.move_to_end(k)
                res.append(cache[k])
            else:
                res.append(-1)
        elif cmd == "put":
            k, v = op[1], op[2]
            if k in cache:
                cache.move_to_end(k)
            cache[k] = v
            if len(cache) > capacity:
                cache.popitem(last=False)
    return res


# ===== DEBUGGING (Q8-Q10, 240 diem) =========================================

def solution_08(nums):
    """Q8 (80d) - LOI GOC: dp khoi tao bang 0 va khong lay max khi cap nhat."""
    if not nums:
        return 0
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)


def solution_09(tasks, n):
    """Q9 (80d) - LOI GOC: Thieu dem so luong task max_freq va khong lay max(len, ans)."""
    if not tasks:
        return 0
    counts = Counter(tasks)
    max_freq = max(counts.values())
    max_count = sum(1 for v in counts.values() if v == max_freq)
    ans = (max_freq - 1) * (n + 1) + max_count
    return max(len(tasks), ans)


def solution_10(n, logs):
    """Q10 (80d) - LOI GOC: timestamp cua end tinh thieu 1 va prev_time cap nhat sai."""
    res = [0] * n
    stack = []
    prev_time = 0
    for log in logs:
        fid, typ, time = log.split(":")
        fid, time = int(fid), int(time)
        if typ == "start":
            if stack:
                res[stack[-1]] += time - prev_time
            stack.append(fid)
            prev_time = time
        else:
            res[stack.pop()] += time - prev_time + 1
            prev_time = time + 1
    return res


if __name__ == "__main__":
    import os
    import sys
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                    "..", "de_mo_phong"))
    from _runner import chay
    chay("_cham_de4", "DAP AN DE 4 - CHUNG KET BANG B (COS Pro Level 1)")
