# -*- coding: utf-8 -*-
"""
Bo cham diem De mo phong 6 - Luyen tap COS Pro Level 2 (Bang B).
Tong diem: 1000 diem | Nguong dat: >= 600 diem.

Phan bo diem chuan:
- Q1 - Q6 (Dien khuyet): 440 diem (Q1: 74d, Q2: 74d, Q3: 73d, Q4: 73d, Q5: 73d, Q6: 73d)
- Q7 - Q8 (Debug 1 dong): 180 diem (90d / cau)
- Q9 - Q10 (Thiet ke tu dau): 380 diem (190d / cau)
"""

CAU = [
    # Q1: Hai con tro tim cap chi so co tong bang K tren mang da sap xep - 74 diem
    ("Q1", "solution_01", 74, [
        (([2, 7, 11, 15], 9), [0, 1]),
        (([1, 3, 5, 8, 12], 13), [0, 4]),
        (([1, 2, 4, 6, 10], 10), [2, 3]),
        (([1, 2, 3, 4], 20), []),
        (([], 5), []),
        (([5], 5), []),
        (([-5, -2, 0, 3, 8], -2), [0, 3]),
    ]),

    # Q2: Dao nguoc so N, cong voi N ban dau, kiem tra so doi xung Palindrome - 74 diem
    ("Q2", "solution_02", 74, [
        ((73,), False),
        ((121,), True),
        ((4,), True),
        ((56,), True),
        ((1200,), True),
        ((89,), False),
    ]),

    # Q3: Ma hoa Caesar dich chuyen k buoc giu nguyen chu hoa/thuong va ky tu dac biet - 73 diem
    ("Q3", "solution_03", 73, [
        (("Hello, World!", 3), "Khoor, Zruog!"),
        (("abc", 28), "cde"),
        (("Python 3.10", 0), "Python 3.10"),
        (("xyz", 3), "abc"),
        (("XYZ", 5), "CDE"),
        (("", 7), ""),
    ]),

    # Q4: Ma tran 2D - Tinh tong cac phan tu vien ngoai ma tran M x N khong trung goc - 73 diem
    ("Q4", "solution_04", 73, [
        (([[1, 2, 3], [4, 5, 6], [7, 8, 9]],), 40),
        (([[5]],), 5),
        (([[1, 2, 3, 4]],), 10),
        (([[2], [3], [4], [5]],), 14),
        (([[1, 2], [3, 4]],), 10),
        (([[1, 1, 1, 1], [2, 0, 0, 2], [3, 3, 3, 3]],), 20),
        (([],), 0),
    ]),

    # Q5: Thong ke doanh thu theo danh muc, loc don hang loi (sl <= 0 hoac gia < 0) - 73 diem
    ("Q5", "solution_05", 73, [
        (([{"dm": "dien_tu", "sl": 2, "gia": 1000},
           {"dm": "thoi_trang", "sl": 5, "gia": 200},
           {"dm": "dien_tu", "sl": 1, "gia": 500},
           {"dm": "sach", "sl": 3, "gia": 100}],),
         [("dien_tu", 2500), ("thoi_trang", 1000), ("sach", 300)]),
        (([{"dm": "A", "sl": -1, "gia": 500},
           {"dm": "B", "sl": 2, "gia": -100},
           {"dm": "C", "sl": 0, "gia": 1000},
           {"dm": "D", "sl": 3, "gia": 200}],),
         [("D", 600)]),
        (([{"dm": "B", "sl": 1, "gia": 500},
           {"dm": "A", "sl": 1, "gia": 500}],),
         [("A", 500), ("B", 500)]),
        (([],), []),
        (([{"dm": "mien_phi", "sl": 10, "gia": 0}],),
         [("mien_phi", 0)]),
    ]),

    # Q6: Tim ung vien chiem qua ban (> len(votes) // 2 phieu bau), neu khong co tra ve -1 - 73 diem
    ("Q6", "solution_06", 73, [
        (([1, 2, 1, 1, 3, 1, 1],), 1),
        (([1, 1, 2, 2],), -1),
        (([1, 2, 3, 4],), -1),
        (([7],), 7),
        (([5, 5, 5, 5],), 5),
        (([],), -1),
    ]),

    # Q7: Debug sua 1 dong (Loi can quet cot ma tran chu nhat len(matrix[r]) thay vi len(matrix)) - 90 diem
    ("Q7", "solution_07", 90, [
        (([[10, 20, 30, 5], [40, 50, 60, 70]],), (0, 3)),
        (([[10, 20], [30, 40], [5, 50]],), (2, 0)),
        (([[9, 8, 7], [6, 1, 4], [3, 2, 5]],), (1, 1)),
        (([[42]],), (0, 0)),
        (([[0, -5, 2], [3, 1, -10]],), (1, 2)),
    ]),

    # Q8: Debug sua 1 dong (Loi thut le return som ben trong vong lap dem cap so hieu K) - 90 diem
    ("Q8", "solution_08", 90, [
        (([1, 5, 3, 4, 2], 2), 3),
        (([1, 3, 5], 1), 0),
        (([10], 2), 0),
        (([], 3), 0),
        (([-3, -1, 1, 3], 2), 3),
        (([1, 2, 3], 10), 0),
    ]),

    # Q9: Tu thiet ke tu dau (Robot di chuyen theo lenh F/B/L/R tranh vat can, tinh Manhattan) - 190 diem
    ("Q9", "solution_09", 190, [
        (("FFRFF", []), 4),
        (("FFRFF", [[2, 2]]), 3),
        (("FFBFF", []), 0),
        (("", [[0, 1]]), 0),
        (("F", [[0, 1]]), 0),
        (("FRFRFRF", []), 0),
        (("LF", []), 1),
    ]),

    # Q10: Tu thiet ke tu dau (Bang xep hang bong da: diem, hieu so, ban thang, ten doi A-Z) - 190 diem
    ("Q10", "solution_10", 190, [
        (([{"doi_1": "A", "doi_2": "B", "ban_1": 2, "ban_2": 1},
           {"doi_1": "B", "doi_2": "C", "ban_1": 2, "ban_2": 2},
           {"doi_1": "C", "doi_2": "A", "ban_1": 0, "ban_2": 1}],),
         ["A", "B", "C"]),
        (([{"doi_1": "Chelsea", "doi_2": "Arsenal", "ban_1": 0, "ban_2": 0}],),
         ["Arsenal", "Chelsea"]),
        (([],), []),
        (([{"doi_1": "Real", "doi_2": "Barca", "ban_1": 3, "ban_2": 1}],),
         ["Real", "Barca"]),
        (([{"doi_1": "M", "doi_2": "N", "ban_1": 3, "ban_2": 0},
           {"doi_1": "P", "doi_2": "Q", "ban_1": 1, "ban_2": 0}],),
         ["M", "P", "Q", "N"]),
    ]),
]

DAC_BIET = []


if __name__ == "__main__":
    import importlib.util
    import os
    import sys

    thu_muc_hien_tai = os.path.dirname(os.path.abspath(__file__))
    thu_muc_goc = os.path.dirname(thu_muc_hien_tai)
    if thu_muc_hien_tai not in sys.path:
        sys.path.insert(0, thu_muc_hien_tai)

    import _runner

    target = (
        sys.argv[1]
        if len(sys.argv) > 1
        else os.path.join(thu_muc_goc, "dap_an", "de_6_luyen_tap_dapan.py")
    )
    if not os.path.exists(target):
        print(f"Khong tim thay file can cham: {target}")
        sys.exit(1)

    spec = importlib.util.spec_from_file_location("de_6_target", target)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)

    diem = _runner.cham(mod, sys.modules[__name__], f"CHAM DIEM: {os.path.basename(target)}")
    sys.exit(0 if diem == 1000 else 1)
