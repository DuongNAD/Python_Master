# -*- coding: utf-8 -*-
"""
Unified Empirical Adversarial, Property-Based, and Scale Stress Test Harness
for de_5_luyen_tap_dapan.py and de_6_luyen_tap_dapan.py (COS Pro Level 2 - Bang B).

Authors: Empirical Challenger (teamwork_preview_challenger)
"""
import math
import random
import sys
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# Import solutions from dap_an
from dap_an.de_5_luyen_tap_dapan import (
    fun_a as de5_fun_a,
    fun_b as de5_fun_b,
    fun_c as de5_fun_c,
    solution_01 as de5_s01,
    solution_02 as de5_s02,
    solution_03 as de5_s03,
    solution_04 as de5_s04,
    solution_05 as de5_s05,
    solution_06 as de5_s06,
    solution_07 as de5_s07,
    solution_08 as de5_s08,
    solution_09 as de5_s09,
    solution_10 as de5_s10,
)

from dap_an.de_6_luyen_tap_dapan import (
    solution_01 as de6_s01,
    solution_02 as de6_s02,
    solution_03 as de6_s03,
    solution_04 as de6_s04,
    solution_05 as de6_s05,
    solution_06 as de6_s06,
    solution_07 as de6_s07,
    solution_08 as de6_s08,
    solution_09 as de6_s09,
    solution_10 as de6_s10,
)

PASSED = 0
FAILED = 0
FAILURES = []

def test_assert(condition, desc, details=""):
    global PASSED, FAILED, FAILURES
    if condition:
        PASSED += 1
    else:
        FAILED += 1
        msg = f"[FAIL] {desc} - {details}"
        FAILURES.append(msg)
        print(msg)


def run_all_stress_tests():
    global PASSED, FAILED, FAILURES
    print("=" * 75)
    print("EMPIRICAL ADVERSARIAL & PROPERTY-BASED STRESS TEST SUITE (DE 5 & DE 6)")
    print("=" * 75)

    # ==============================================================================
    # DE 5 STRESS TESTS
    # ==============================================================================
    print("\n--- DE 5 STRESS TESTS ---")

    # Q1: Dice Scoring
    print("Testing De 5 Q1 (Dice Scoring)...")
    test_assert(de5_s01([[3, 4]]) == 1, "De 5 Q1: Single player non-pair")
    test_assert(de5_s01([[4, 4]]) == 1, "De 5 Q1: Single player pair")
    test_assert(de5_s01([[2, 2]] * 50) == 50, "De 5 Q1: 50 players identical pair tie")
    test_assert(de5_s01([[1, 3]] * 100) == 100, "De 5 Q1: 100 players identical non-pair tie")

    rng = random.Random(42)
    q1_property_ok = True
    for _ in range(500):
        n = rng.randint(1, 30)
        rolls = [[rng.randint(1, 6), rng.randint(1, 6)] for _ in range(n)]
        oracle_scores = [(a + b) * 2 if a == b else a + b for a, b in rolls]
        expected = oracle_scores.count(max(oracle_scores))
        if de5_s01(rolls) != expected:
            q1_property_ok = False
            break
    test_assert(q1_property_ok, "De 5 Q1: Property test 500 random rolls matches oracle")

    large_rolls = [[rng.randint(1, 6), rng.randint(1, 6)] for _ in range(10000)]
    t0 = time.perf_counter()
    res_q1 = de5_s01(large_rolls)
    t1 = time.perf_counter()
    test_assert(res_q1 >= 1 and (t1 - t0) < 0.5, f"De 5 Q1: 10,000 players took {t1-t0:.4f}s")

    # Q2: Longest Increasing Contiguous Poles
    print("Testing De 5 Q2 (Longest Increasing Poles)...")
    test_assert(de5_s02([]) == 0, "De 5 Q2: Empty list returns 0")
    test_assert(de5_s02([100]) == 1, "De 5 Q2: Single element returns 1")
    test_assert(de5_s02([10, 9, 8, 7, 6, 5]) == 1, "De 5 Q2: Strictly decreasing returns 1")
    test_assert(de5_s02([5, 5, 5, 5, 5]) == 1, "De 5 Q2: All equal elements returns 1")
    test_assert(de5_s02(list(range(1, 1001))) == 1000, "De 5 Q2: 1000 strictly increasing elements returns 1000")
    test_assert(de5_s02([1, 2, 1, 2, 1, 2]) == 2, "De 5 Q2: Sawtooth pattern returns 2")
    test_assert(de5_s02([-50, -40, -30, -20, -10]) == 5, "De 5 Q2: Negative strictly increasing returns 5")
    test_assert(de5_s02([2, 2, 3, 4, 4, 5]) == 3, "De 5 Q2: Equal plateaus in between returns 3")

    q2_property_ok = True
    def oracle_q2(arr):
        if not arr:
            return 0
        ans = 1
        curr = 1
        for i in range(1, len(arr)):
            if arr[i] > arr[i - 1]:
                curr += 1
                ans = max(ans, curr)
            else:
                curr = 1
        return ans

    for _ in range(200):
        length = rng.randint(0, 100)
        arr = [rng.randint(-50, 50) for _ in range(length)]
        if de5_s02(arr) != oracle_q2(arr):
            q2_property_ok = False
            break
    test_assert(q2_property_ok, "De 5 Q2: Property test 200 random arrays matches oracle")

    # Scale Q2: 100k
    poles_100k = [i % 50 for i in range(100_000)]
    t0 = time.perf_counter()
    res_q2_scale = de5_s02(poles_100k)
    t1 = time.perf_counter()
    test_assert(res_q2_scale == 50 and (t1 - t0) < 0.2, f"De 5 Q2: 100k scale test {t1-t0:.4f}s")

    # Q3: Student Records Parsing & Title Case
    print("Testing De 5 Q3 (Records Parse & Normalize)...")
    test_assert(de5_s03([]) == [], "De 5 Q3: Empty records returns []")
    test_assert(de5_s03(["no separator", "invalid", ""]) == [], "De 5 Q3: Malformed lines ignored")
    test_assert(de5_s03(["   nguyen van an   - ID: 101 "]) == [("Nguyen Van An", 101)], "De 5 Q3: Whitespace & title case normalization")
    test_assert(de5_s03(["Agent 007 - ID: 007"]) == [("Agent 007", 7)], "De 5 Q3: Leading zero in ID parsed to int")
    test_assert(de5_s03(["Sub-Zero - ID: -5", "Scorpion - ID: 10"]) == [("Sub-Zero", -5), ("Scorpion", 10)], "De 5 Q3: Negative ID sorting")
    test_assert(de5_s03(["c - ID: 30", "a - ID: 10", "b - ID: 20"]) == [("A", 10), ("B", 20), ("C", 30)], "De 5 Q3: Scrambled IDs sorted ascending")

    # Q4: Scholarship Filtering
    print("Testing De 5 Q4 (Scholarship Filtering)...")
    test_assert(de5_s04([]) == [], "De 5 Q4: Empty students returns []")
    b_students = [
        {"ten": "BorderPass", "gpa": 3.2, "drl": 80, "diem_liet": False},
        {"ten": "GpaFail", "gpa": 3.199, "drl": 100, "diem_liet": False},
        {"ten": "DrlFail", "gpa": 4.0, "drl": 79, "diem_liet": False},
        {"ten": "LietFail", "gpa": 4.0, "drl": 100, "diem_liet": True},
    ]
    test_assert(de5_s04(b_students) == ["BorderPass"], "De 5 Q4: Exact boundary threshold test")
    sort_students = [
        {"ten": "Mid", "gpa": 3.5, "drl": 85, "diem_liet": False},
        {"ten": "High", "gpa": 3.9, "drl": 85, "diem_liet": False},
        {"ten": "Low", "gpa": 3.2, "drl": 85, "diem_liet": False},
    ]
    test_assert(de5_s04(sort_students) == ["High", "Mid", "Low"], "De 5 Q4: Descending GPA sort")

    # Q5: Word Frequency with Tie-Breaker
    print("Testing De 5 Q5 (Word Frequency Tie-Breaker)...")
    test_assert(de5_s05("") == "", "De 5 Q5: Empty string returns ''")
    test_assert(de5_s05("    \t\n  ") == "", "De 5 Q5: Whitespace only returns ''")
    test_assert(de5_s05("... ??? !!! ,,, ...") == "", "De 5 Q5: Punctuation only returns ''")
    test_assert(de5_s05("...hello... ,,,world!!! ?hello?") == "hello", "De 5 Q5: Stripping punctuation")
    test_assert(de5_s05("zebra apple") == "apple", "De 5 Q5: Tie-breaker A-Z: apple beats zebra")
    test_assert(de5_s05("d c b a") == "a", "De 5 Q5: 4-way tie: a beats b, c, d")
    test_assert(de5_s05("Python python PYTHON PyThOn coding") == "python", "De 5 Q5: Case insensitivity")

    # Q6: Taxi Fare Calculation
    print("Testing De 5 Q6 (Tiered Taxi Fare)...")
    test_assert(de5_s06(-10.0, False) == 0, "De 5 Q6: Negative km returns 0")
    test_assert(de5_s06(0.0, False) == 0, "De 5 Q6: Zero km returns 0")
    test_assert(de5_s06(0.5, False) == 15000, "De 5 Q6: 0.5 km normal = 15000")
    test_assert(de5_s06(1.0, False) == 15000, "De 5 Q6: 1.0 km normal = 15000")
    test_assert(de5_s06(1.0, True) == 18750, "De 5 Q6: 1.0 km peak = 18750")
    test_assert(de5_s06(1.0001, False) == 27000, "De 5 Q6: 1.0001 km ceil(0.0001)=1 -> 27000")
    test_assert(de5_s06(10.0, False) == 123000, "De 5 Q6: 10.0 km normal = 123000")
    test_assert(de5_s06(10.0001, False) == 133000, "De 5 Q6: 10.0001 km tier 3 = 133000")
    test_assert(de5_s06(11.0, False) == 133000, "De 5 Q6: 11.0 km normal = 133000")
    test_assert(isinstance(de5_s06(12.5, True), int), "De 5 Q6: Peak surcharge returns int")

    # Q7: Palindrome Check
    print("Testing De 5 Q7 (Palindrome Debug)...")
    test_assert(de5_s07("") is True, "De 5 Q7: Empty string is palindrome")
    test_assert(de5_s07("x") is True, "De 5 Q7: Single char is palindrome")
    test_assert(de5_s07("aa") is True, "De 5 Q7: 'aa' is palindrome")
    test_assert(de5_s07("ab") is False, "De 5 Q7: 'ab' is not palindrome")
    test_assert(de5_s07("racecar") is True, "De 5 Q7: 'racecar' is palindrome")
    test_assert(de5_s07("racebar") is False, "De 5 Q7: 'racebar' is not palindrome")
    test_assert(de5_s07("a" * 100000) is True, "De 5 Q7: 100,000 chars palindrome performance")

    # Q8: Second Highest Score
    print("Testing De 5 Q8 (Second Highest Score)...")
    test_assert(de5_s08([]) is None, "De 5 Q8: Empty list returns None")
    test_assert(de5_s08([50]) is None, "De 5 Q8: Single element returns None")
    test_assert(de5_s08([50, 50, 50]) is None, "De 5 Q8: All duplicates returns None")
    test_assert(de5_s08([10, 20]) == 10, "De 5 Q8: Two elements returns smaller")
    test_assert(de5_s08([20, 10, 20, 10]) == 10, "De 5 Q8: Two elements with duplicates returns smaller")
    test_assert(de5_s08([-10, -50, -2, -50]) == -10, "De 5 Q8: Negative numbers second highest")

    # Q9: Multi-Criteria Order Sorting
    print("Testing De 5 Q9 (Multi-Criteria Order Sort)...")
    test_assert(de5_s09([]) == [], "De 5 Q9: Empty orders returns []")
    o_test1 = [
        {"id": "NORMAL_RICH", "vip": False, "total": 9999999},
        {"id": "VIP_POOR", "vip": True, "total": 1},
    ]
    test_assert(de5_s09(o_test1)[0]["id"] == "VIP_POOR", "De 5 Q9: VIP takes priority over total")
    o_test2 = [
        {"id": "VIP_Z", "vip": True, "total": 500},
        {"id": "VIP_A", "vip": True, "total": 500},
        {"id": "VIP_M", "vip": True, "total": 500},
    ]
    res_o2 = [x["id"] for x in de5_s09(o_test2)]
    test_assert(res_o2 == ["VIP_A", "VIP_M", "VIP_Z"], "De 5 Q9: Same VIP & total sorted by ID A-Z")

    orders_10k = [
        {"id": f"ORD_{i:06d}", "vip": bool(i % 3 == 0), "total": rng.randint(100, 1000000)}
        for i in range(10_000)
    ]
    t0 = time.perf_counter()
    sorted_orders = de5_s09(orders_10k)
    t1 = time.perf_counter()
    test_assert(len(sorted_orders) == 10_000 and (t1 - t0) < 0.2, f"De 5 Q9: 10,000 orders sort took {t1-t0:.4f}s")

    # Q10: Frog Board Hopping Simulation
    print("Testing De 5 Q10 (Frog Board Hop Simulation)...")
    test_assert(de5_s10([]) == 0, "De 5 Q10: Empty board returns 0")
    test_assert(de5_s10([0, 5, 5]) == 0, "De 5 Q10: Start cell 0 returns 0")
    test_assert(de5_s10([-3, 5, 5]) == 0, "De 5 Q10: Start cell negative returns 0")
    test_assert(de5_s10([5]) == 5, "De 5 Q10: Single cell leaps out returns 5")
    test_assert(de5_s10([2, 1, -5, 10]) == 2, "De 5 Q10: Stepping on negative trap stops")
    test_assert(de5_s10([1, 0, 5]) == 1, "De 5 Q10: Stepping on 0 trap stops")
    test_assert(de5_s10([2, 3, 1, 1, 4]) == 8, "De 5 Q10: Standard traversal returns 8")
    test_assert(de5_s10([1] * 1000) == 1000, "De 5 Q10: 1000 single steps")

    # ==============================================================================
    # DE 6 STRESS TESTS
    # ==============================================================================
    print("\n--- DE 6 STRESS TESTS ---")

    # Q1: Two Sum Sorted
    print("Testing De 6 Q1 (Two Sum Sorted)...")
    test_assert(de6_s01([], 5) == [], "De 6 Q1: Empty list returns []")
    test_assert(de6_s01([5], 5) == [], "De 6 Q1: Single element returns []")
    test_assert(de6_s01([1, 2, 3], 10) == [], "De 6 Q1: No pair returns []")
    test_assert(de6_s01([2, 2, 2, 2], 4) == [0, 3], "De 6 Q1: Duplicate values returns outermost pair")
    test_assert(de6_s01([-10, -5, 0, 5, 10], 0) == [0, 4], "De 6 Q1: Target 0 with negatives")

    res_neg = de6_s01([-8, -5, -2, 1], -7)
    test_assert(len(res_neg) == 2 and res_neg[0] < res_neg[1] and [-8, -5, -2, 1][res_neg[0]] + [-8, -5, -2, 1][res_neg[1]] == -7, "De 6 Q1: Negative target valid pair found")

    q1_de6_property_ok = True
    for _ in range(200):
        sz = rng.randint(2, 50)
        arr = sorted([rng.randint(-50, 50) for _ in range(sz)])
        i1, i2 = rng.sample(range(sz), 2)
        target = arr[i1] + arr[i2]
        res = de6_s01(arr, target)
        if not (len(res) == 2 and res[0] < res[1] and arr[res[0]] + arr[res[1]] == target):
            q1_de6_property_ok = False
            break
    test_assert(q1_de6_property_ok, "De 6 Q1: Property test 200 random sorted arrays with known targets")

    arr_50k = list(range(0, 100_000, 2))
    t0 = time.perf_counter()
    res_50k = de6_s01(arr_50k, 99998)
    t1 = time.perf_counter()
    test_assert(len(res_50k) == 2 and arr_50k[res_50k[0]] + arr_50k[res_50k[1]] == 99998 and (t1 - t0) < 0.1, f"De 6 Q1: 50,000 elements took {t1-t0:.4f}s")

    # Q2: Reverse Number Palindrome
    print("Testing De 6 Q2 (Reverse Number Palindrome)...")
    single_digits_ok = all(de6_s02(d) is True for d in range(1, 5))
    test_assert(single_digits_ok, "De 6 Q2: Single digits 1..4 return True")
    test_assert(de6_s02(5) is False, "De 6 Q2: 5 + 5 = 10 is False (10 != 01)")
    test_assert(de6_s02(6) is False, "De 6 Q2: 6 + 6 = 12 is False")
    test_assert(de6_s02(7) is False, "De 6 Q2: 7 + 7 = 14 is False")
    test_assert(de6_s02(8) is False, "De 6 Q2: 8 + 8 = 16 is False")
    test_assert(de6_s02(9) is False, "De 6 Q2: 9 + 9 = 18 is False")
    test_assert(de6_s02(10) is True, "De 6 Q2: 10 + 1 = 11 is True")
    test_assert(de6_s02(100) is True, "De 6 Q2: 100 + 1 = 101 is True")
    test_assert(de6_s02(1200) is True, "De 6 Q2: 1200 + 21 = 1221 is True")
    test_assert(de6_s02(89) is False, "De 6 Q2: 89 + 98 = 187 is False")
    test_assert(de6_s02(121) is True, "De 6 Q2: 121 + 121 = 242 is True")

    # Q3: Caesar Cipher
    print("Testing De 6 Q3 (Caesar Cipher)...")
    test_assert(de6_s03("", 5) == "", "De 6 Q3: Empty string returns ''")
    test_assert(de6_s03("Hello, World!", 0) == "Hello, World!", "De 6 Q3: Shift 0 unchanged")
    test_assert(de6_s03("Hello, World!", 26) == "Hello, World!", "De 6 Q3: Shift 26 unchanged")
    test_assert(de6_s03("Hello, World!", 52) == "Hello, World!", "De 6 Q3: Shift 52 unchanged")
    test_assert(de6_s03("xyzXYZ", 3) == "abcABC", "De 6 Q3: Wrap-around xyz -> abc and XYZ -> ABC")
    test_assert(de6_s03("Tiếng Việt 2024!", 3) == "Wlếqj Ylệw 2024!", "De 6 Q3: Accents & numbers preserved, ASCII shifted")
    test_assert(de6_s03("!@#$%^&*()", 10) == "!@#$%^&*()", "De 6 Q3: Punctuation unchanged")

    # Q4: 2D Matrix Border Sum
    print("Testing De 6 Q4 (Matrix Border Sum)...")
    test_assert(de6_s04([]) == 0, "De 6 Q4: Empty matrix returns 0")
    test_assert(de6_s04([[]]) == 0, "De 6 Q4: Matrix with empty row returns 0")
    test_assert(de6_s04([[7]]) == 7, "De 6 Q4: 1x1 matrix returns value")
    test_assert(de6_s04([[1, 2, 3, 4]]) == 10, "De 6 Q4: 1xN matrix returns sum")
    test_assert(de6_s04([[1], [2], [3], [4]]) == 10, "De 6 Q4: Nx1 matrix returns sum")
    test_assert(de6_s04([[1, 2], [3, 4]]) == 10, "De 6 Q4: 2x2 matrix returns sum")
    test_assert(de6_s04([[1, 2, 3], [4, 5, 6]]) == 21, "De 6 Q4: 2x3 matrix returns sum")
    test_assert(de6_s04([[1, 2], [3, 4], [5, 6]]) == 21, "De 6 Q4: 3x2 matrix returns sum")
    test_assert(de6_s04([[-5, -2], [-3, -4]]) == -14, "De 6 Q4: Negative elements matrix")

    q4_property_ok = True
    for _ in range(50):
        r = rng.randint(3, 10)
        c = rng.randint(3, 10)
        mat = [[rng.randint(-20, 20) for _ in range(c)] for _ in range(r)]
        full_sum = sum(sum(row) for row in mat)
        inner_sum = sum(sum(mat[i][1:c-1]) for i in range(1, r-1))
        expected = full_sum - inner_sum
        if de6_s04(mat) != expected:
            q4_property_ok = False
            break
    test_assert(q4_property_ok, "De 6 Q4: Property test 50 random matrices matches full minus inner")

    mat_500 = [[1] * 500 for _ in range(500)]
    t0 = time.perf_counter()
    res_mat500 = de6_s04(mat_500)
    t1 = time.perf_counter()
    test_assert(res_mat500 == 1996 and (t1 - t0) < 0.1, f"De 6 Q4: 500x500 border took {t1-t0:.4f}s")

    # Q5: Revenue by Category
    print("Testing De 6 Q5 (Category Revenue)...")
    test_assert(de6_s05([]) == [], "De 6 Q5: Empty orders returns []")
    invalids = [
        {"dm": "A", "sl": 0, "gia": 100},
        {"dm": "B", "sl": -5, "gia": 100},
        {"dm": "C", "sl": 5, "gia": -10},
    ]
    test_assert(de6_s05(invalids) == [], "De 6 Q5: All invalid orders returns []")
    free_order = [{"dm": "Gift", "sl": 10, "gia": 0}]
    test_assert(de6_s05(free_order) == [("Gift", 0)], "De 6 Q5: Free order with gia == 0 is valid")
    ties_orders = [
        {"dm": "Zebra", "sl": 1, "gia": 100},
        {"dm": "Apple", "sl": 1, "gia": 100},
        {"dm": "Mango", "sl": 2, "gia": 50},
    ]
    test_assert(de6_s05(ties_orders) == [("Apple", 100), ("Mango", 100), ("Zebra", 100)], "De 6 Q5: Equal revenue tie-break A-Z")

    # Q6: Majority Element
    print("Testing De 6 Q6 (Majority Element)...")
    test_assert(de6_s06([]) == -1, "De 6 Q6: Empty votes returns -1")
    test_assert(de6_s06([42]) == 42, "De 6 Q6: Single vote returns candidate")
    test_assert(de6_s06([1, 1, 2, 2]) == -1, "De 6 Q6: Exact 50% tie returns -1")
    test_assert(de6_s06([1, 1, 1, 2, 2]) == 1, "De 6 Q6: 3 out of 5 is majority")
    test_assert(de6_s06([-5, -5, -5, 2]) == -5, "De 6 Q6: Negative candidate ID majority")
    test_assert(de6_s06([1, 2, 3, 4, 5]) == -1, "De 6 Q6: All distinct returns -1")

    # Q7: Rectangular Matrix Min Pos
    print("Testing De 6 Q7 (Rectangular Matrix Min Coordinates)...")
    test_assert(de6_s07([[5]]) == (0, 0), "De 6 Q7: 1x1 matrix returns (0, 0)")
    test_assert(de6_s07([[10, 5, 2, 8]]) == (0, 2), "De 6 Q7: 1xN matrix returns (0, 2)")
    test_assert(de6_s07([[10], [5], [2], [8]]) == (2, 0), "De 6 Q7: Nx1 matrix returns (2, 0)")
    test_assert(de6_s07([[10, 20, 30, 5], [40, 50, 60, 70]]) == (0, 3), "De 6 Q7: 2x4 matrix returns (0, 3)")
    test_assert(de6_s07([[10, 20], [30, 40], [5, 50]]) == (2, 0), "De 6 Q7: 3x2 matrix returns (2, 0)")
    test_assert(de6_s07([[3, 1, 1], [1, 2, 3]]) == (0, 1), "De 6 Q7: Duplicate min returns first occurrence")
    test_assert(de6_s07([[0, -100], [-50, -100]]) == (0, 1), "De 6 Q7: Negative values with duplicate min")

    # Q8: Count Diff K Pairs
    print("Testing De 6 Q8 (Count Diff K Pairs)...")
    test_assert(de6_s08([], 2) == 0, "De 6 Q8: Empty nums returns 0")
    test_assert(de6_s08([5], 2) == 0, "De 6 Q8: Single element returns 0")
    test_assert(de6_s08([1, 5, 10], 2) == 0, "De 6 Q8: No pairs returns 0")
    test_assert(de6_s08([1, 3, 5, 7], 2) == 3, "De 6 Q8: All consecutive pairs returns 3")
    test_assert(de6_s08([-5, -3, -1, 1], 2) == 3, "De 6 Q8: Negative numbers returns 3")
    test_assert(de6_s08([1, 2, 3], 100) == 0, "De 6 Q8: K larger than span returns 0")

    nums_20k = list(range(0, 40_000, 2))
    t0 = time.perf_counter()
    res_diffk = de6_s08(nums_20k, 2)
    t1 = time.perf_counter()
    test_assert(res_diffk == 19_999 and (t1 - t0) < 0.1, f"De 6 Q8: 20,000 numbers took {t1-t0:.4f}s")

    # Q9: Robot Obstacle Navigation
    print("Testing De 6 Q9 (Robot Obstacle Navigation)...")
    test_assert(de6_s09("", []) == 0, "De 6 Q9: Empty commands returns 0")
    test_assert(de6_s09("F", [[0, 1]]) == 0, "De 6 Q9: Forward blocked by obstacle returns 0")
    test_assert(de6_s09("FF", [[0, 1]]) == 0, "De 6 Q9: Forward blocked twice returns 0")
    test_assert(de6_s09("FFBFF", []) == 0, "De 6 Q9: Back turn 180 and return to origin returns 0")
    test_assert(de6_s09("LF", []) == 1, "De 6 Q9: Turn left (West) and step -> (-1, 0) Manhattan 1")
    test_assert(de6_s09("LLLLRRRRBB", []) == 0, "De 6 Q9: Only turns without movement returns 0")
    obs_4dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    test_assert(de6_s09("FRFRFRF", obs_4dir) == 0, "De 6 Q9: Blocked in all directions stays at 0")
    test_assert(de6_s09("FFRFF", [[2, 2]]) == 3, "De 6 Q9: Obstacle at target square blocks final step")

    cmds_10k = "FFRFFL" * 1666
    obs_100 = [[i, i] for i in range(10, 110)]
    t0 = time.perf_counter()
    res_robot = de6_s09(cmds_10k, obs_100)
    t1 = time.perf_counter()
    test_assert(res_robot > 0 and (t1 - t0) < 0.1, f"De 6 Q9: 10,000 commands took {t1-t0:.4f}s")

    # Q10: Football Standings
    print("Testing De 6 Q10 (Football Standings)...")
    test_assert(de6_s10([]) == [], "De 6 Q10: Empty matches returns []")
    test_assert(de6_s10([{"doi_1": "B", "doi_2": "A", "ban_1": 0, "ban_2": 0}]) == ["A", "B"], "De 6 Q10: 0-0 draw tie-breaker A-Z")
    cycle_matches = [
        {"doi_1": "A", "doi_2": "B", "ban_1": 1, "ban_2": 0},
        {"doi_1": "B", "doi_2": "C", "ban_1": 1, "ban_2": 0},
        {"doi_1": "C", "doi_2": "A", "ban_1": 1, "ban_2": 0},
    ]
    test_assert(de6_s10(cycle_matches) == ["A", "B", "C"], "De 6 Q10: 3-way cycle all tied sorted A-Z")
    cascade1 = [
        {"doi_1": "X", "doi_2": "Z", "ban_1": 4, "ban_2": 0},
        {"doi_1": "Y", "doi_2": "W", "ban_1": 2, "ban_2": 0},
    ]
    test_assert(de6_s10(cascade1)[:2] == ["X", "Y"], "De 6 Q10: Tied points broken by GD")
    cascade2 = [
        {"doi_1": "P", "doi_2": "LossP", "ban_1": 3, "ban_2": 2},
        {"doi_1": "Q", "doi_2": "LossQ", "ban_1": 2, "ban_2": 1},
    ]
    test_assert(de6_s10(cascade2)[:2] == ["P", "Q"], "De 6 Q10: Tied points & GD broken by Goals For")

    teams_50 = [f"Team_{i:02d}" for i in range(50)]
    matches_2k = []
    for _ in range(2000):
        tA, tB = rng.sample(teams_50, 2)
        matches_2k.append({
            "doi_1": tA, "doi_2": tB,
            "ban_1": rng.randint(0, 4), "ban_2": rng.randint(0, 4)
        })
    t0 = time.perf_counter()
    res_tourn = de6_s10(matches_2k)
    t1 = time.perf_counter()
    test_assert(len(res_tourn) == 50 and (t1 - t0) < 0.1, f"De 6 Q10: 2,000 matches took {t1-t0:.4f}s")

    print("\n" + "=" * 75)
    print(f"STRESS TEST SUMMARY: {PASSED} PASSED | {FAILED} FAILED")
    print("=" * 75)

    if FAILED > 0:
        print(f"CRITICAL: {FAILED} stress tests failed!")
        return 1
    else:
        print("ALL EMPIRICAL ADVERSARIAL & PROPERTY-BASED STRESS TESTS PASSED (100%)!")
        return 0

if __name__ == "__main__":
    sys.exit(run_all_stress_tests())
