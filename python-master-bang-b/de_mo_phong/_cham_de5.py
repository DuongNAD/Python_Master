# -*- coding: utf-8 -*-
"""
Bo cham diem De mo phong 5 - Luyen tap COS Pro Level 2 (Bang B).
Tong diem: 1000 diem | Nguong dat: >= 600 diem.

Phan bo diem chuan:
- Q1 - Q6 (Dien khuyet): 440 diem (Q1: 74d, Q2: 74d, Q3: 73d, Q4: 73d, Q5: 73d, Q6: 73d)
- Q7 - Q8 (Debug 1 dong): 180 diem (90d / cau)
- Q9 - Q10 (Thiet ke tu dau): 380 diem (190d / cau)
"""

CAU = [
    # Q1: Tinh diem xuc xac (fun_a, fun_b, fun_c ket hop trong solution_01) - 74 diem
    ("Q1", "solution_01", 74, [
        (([ [2, 2], [3, 4], [1, 1] ],), 1),
        (([ [6, 6], [2, 3], [6, 6] ],), 2),
        (([ [1, 2], [3, 5], [2, 4] ],), 1),
        (([ [3, 3], [3, 3], [3, 3] ],), 3),
        (([ [4, 5] ],), 1),
        (([ [1, 1], [1, 3] ],), 2),
    ]),

    # Q2: Tim chieu dai cot go tang dan dai nhat (duyet mang tim doan thoa man trang thai) - 74 diem
    ("Q2", "solution_02", 74, [
        (([10, 20, 30, 15, 25, 35, 45, 5],), 4),
        (([5, 4, 3, 2, 1],), 1),
        (([3, 3, 3, 3],), 1),
        (([],), 0),
        (([42],), 1),
        (([1, 2, 3, 4, 5, 6],), 6),
    ]),

    # Q3: Xu ly chuoi ky tu (chuan hoa ho ten va tach ma ID tu danh sach ho so) - 73 diem
    ("Q3", "solution_03", 73, [
        ((["nguyen van an - ID: 105", "tran thi mai - ID: 101", "le van cuong - ID: 103"],),
         [("Tran Thi Mai", 101), ("Le Van Cuong", 103), ("Nguyen Van An", 105)]),
        ((["thi sinh vang thi", "pham van dong - ID: 200"],),
         [("Pham Van Dong", 200)]),
        (([],), []),
        ((["b - ID: 20", "a - ID: 10"],),
         [("A", 10), ("B", 20)]),
        ((["  hoang nam  - ID: 305  "],),
         [("Hoang Nam", 305)]),
        ((["khong hop le 1", "khong hop le 2"],), []),
    ]),

    # Q4: Loc danh sach hoc bong (gpa >= 3.2, drl >= 80, khong co diem liet) - 73 diem
    ("Q4", "solution_04", 73, [
        (([{"ten": "An", "gpa": 3.6, "drl": 85, "diem_liet": False},
           {"ten": "Binh", "gpa": 3.8, "drl": 75, "diem_liet": False},
           {"ten": "Cuong", "gpa": 3.5, "drl": 90, "diem_liet": False},
           {"ten": "Dung", "gpa": 3.9, "drl": 95, "diem_liet": True}],),
         ["An", "Cuong"]),
        (([{"ten": "Hoa", "gpa": 3.2, "drl": 80, "diem_liet": False},
           {"ten": "Lan", "gpa": 3.19, "drl": 100, "diem_liet": False},
           {"ten": "Minh", "gpa": 4.0, "drl": 79, "diem_liet": False}],),
         ["Hoa"]),
        (([],), []),
        (([{"ten": "Nam", "gpa": 2.8, "drl": 70, "diem_liet": False}],), []),
        (([{"ten": "Tuan", "gpa": 3.4, "drl": 82, "diem_liet": False},
           {"ten": "Vinh", "gpa": 3.7, "drl": 88, "diem_liet": False},
           {"ten": "Yen", "gpa": 3.9, "drl": 92, "diem_liet": False}],),
         ["Yen", "Vinh", "Tuan"]),
    ]),

    # Q5: Dem tu va tim tu co tan suat xuat hien cao nhat (tie-breaker: A-Z) - 73 diem
    ("Q5", "solution_05", 73, [
        (("apple banana apple orange banana apple",), "apple"),
        (("dog cat bird dog cat bird",), "bird"),
        (("Python, python! PYTHON? coding.",), "python"),
        (("",), ""),
        (("   ",), ""),
        (("...hello!!!",), "hello"),
    ]),

    # Q6: Tinh cuoc taxi bac thang (phu thu gio cao diem lam tron nguyen) - 73 diem
    ("Q6", "solution_06", 73, [
        ((0.5, False), 15000),
        ((1.0, True), 18750),
        ((5.0, False), 63000),
        ((10.0, False), 123000),
        ((12.5, True), 191250),
        ((-3.0, False), 0),
    ]),

    # Q7: Debug sua 1 dong (Loi chi so bien kiem tra chuoi doi xung len(s) - 1 - i) - 90 diem
    ("Q7", "solution_07", 90, [
        (("racecar",), True),
        (("hello",), False),
        (("",), True),
        (("a",), True),
        (("noon",), True),
        (("ab",), False),
    ]),

    # Q8: Debug sua 1 dong (Loi khong co diem cao thu nhi khi tap hop < 2 phan tu) - 90 diem
    ("Q8", "solution_08", 90, [
        (([10, 20, 30, 40, 50],), 40),
        (([50, 50, 50],), None),
        (([100],), None),
        (([],), None),
        (([25, 10, 25, 5, 20],), 20),
        (([-5, -1, -10, -1],), -5),
    ]),

    # Q9: Tu thiet ke tu dau (Sap xep don hang: VIP truoc, tong tien giam dan, ma A-Z) - 190 diem
    ("Q9", "solution_09", 190, [
        (([{"id": "B01", "vip": False, "total": 100000},
           {"id": "A01", "vip": True, "total": 200000},
           {"id": "A02", "vip": True, "total": 500000},
           {"id": "B02", "vip": False, "total": 300000}],),
         [{"id": "A02", "vip": True, "total": 500000},
          {"id": "A01", "vip": True, "total": 200000},
          {"id": "B02", "vip": False, "total": 300000},
          {"id": "B01", "vip": False, "total": 100000}]),
        (([{"id": "ORD_B", "vip": True, "total": 100000},
           {"id": "ORD_A", "vip": True, "total": 100000}],),
         [{"id": "ORD_A", "vip": True, "total": 100000},
          {"id": "ORD_B", "vip": True, "total": 100000}]),
        (([],), []),
        (([{"id": "Z01", "vip": False, "total": 50000}],),
         [{"id": "Z01", "vip": False, "total": 50000}]),
        (([{"id": "NORM", "vip": False, "total": 9999999},
           {"id": "VIP1", "vip": True, "total": 1000}],),
         [{"id": "VIP1", "vip": True, "total": 1000},
          {"id": "NORM", "vip": False, "total": 9999999}]),
    ]),

    # Q10: Tu thiet ke tu dau (Mo phong ech nhay o tich luy diem, chong chu trinh lap) - 190 diem
    ("Q10", "solution_10", 190, [
        (([2, 3, 1, 1, 4],), 8),
        (([1, 2, 1, -2, 1],), 3),
        (([2, 4, 1, 1, 2],), 6),
        (([],), 0),
        (([0, 5, 2],), 0),
        (([5],), 5),
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
        else os.path.join(thu_muc_goc, "dap_an", "de_5_luyen_tap_dapan.py")
    )
    if not os.path.exists(target):
        print(f"Khong tim thay file can cham: {target}")
        sys.exit(1)

    spec = importlib.util.spec_from_file_location("de_5_target", target)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)

    diem = _runner.cham(mod, sys.modules[__name__], f"CHAM DIEM: {os.path.basename(target)}")
    sys.exit(0 if diem == 1000 else 1)
