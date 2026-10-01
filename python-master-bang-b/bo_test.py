# -*- coding: utf-8 -*-
"""
Bo test cho toan bo bai luyen tap. Khong can sua file nay.
Moi muc: (ma_bai, ten_ham, danh_sach_test) voi test = (args, ket_qua_mong_doi)
hoac mot ham kiem tra dac biet nhan module lam tham so.
"""

# ============================================================ NHOM 1
TEST_P1 = [
    ("1.01", "dem_nguyen_am", [
        (("Hello World",), 3),
        (("PYTHON",), 1),
        (("",), 0),
        (("bcdfg",), 0),
        (("AeIoU",), 5),
    ]),
    ("1.02", "chuan_hoa_ten", [
        (("  nGUYEN   anh   duong ",), "Nguyen Anh Duong"),
        (("tran VAN a",), "Tran Van A"),
        (("   ",), ""),
        (("le",), "Le"),
    ]),
    ("1.03", "tong_chu_so", [
        ((123,), 6),
        ((0,), 0),
        ((-4567,), 22),
        ((1000000,), 1),
    ]),
    ("1.04", "max_thu_hai", [
        (([3, 1, 4, 1, 5],), 4),
        (([7, 7, 7],), None),
        (([2, 2, 1],), 1),
        (([5],), None),
        (([-1, -5, -3],), -3),
    ]),
    ("1.05", "dem_tan_suat", [
        ((["a", "b", "a"],), {"a": 2, "b": 1}),
        (([],), {}),
        (([1, 1, 1, 2],), {1: 3, 2: 1}),
    ]),
    ("1.06", "dao_thu_tu_tu", [
        (("hom nay troi dep",), "dep troi nay hom"),
        (("  xin   chao  ",), "chao xin"),
        (("mot",), "mot"),
        (("",), ""),
    ]),
    ("1.07", "la_doi_xung", [
        (("A man, a plan, a canal: Panama",), True),
        (("race a car",), False),
        (("",), True),
        ((".,",), True),
        (("Ab_bA",), True),
    ]),
    ("1.08", "gop_dict_cong_don", [
        (({"x": 1, "y": 2}, {"y": 5, "z": 3}), {"x": 1, "y": 7, "z": 3}),
        (({}, {"a": 1}), {"a": 1}),
        (({"a": 1}, {}), {"a": 1}),
    ]),
    ("1.09", "loc_so_nguyen_to", [
        (([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],), [2, 3, 5, 7]),
        (([0, 1, -3],), []),
        (([97, 91, 89],), [97, 89]),
    ]),
    ("1.10", "nen_chuoi", [
        (("aaabbc",), "a3b2c1"),
        (("",), ""),
        (("a",), "a1"),
        (("abc",), "a1b1c1"),
        (("aabbaa",), "a2b2a2"),
    ]),
    ("1.11", "xoay_phai", [
        (([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]),
        (([1, 2, 3], 0), [1, 2, 3]),
        (([1, 2, 3], 3), [1, 2, 3]),
        (([1, 2, 3], 7), [3, 1, 2]),
        (([], 4), []),
    ]),
    ("1.12", "tim_cap_tong", [
        (([2, 7, 11, 15], 9), (0, 1)),
        (([3, 2, 4], 6), (1, 2)),
        (([1, 2, 3], 100), None),
        (([3, 3], 6), (0, 1)),
    ]),
    ("1.13", "xep_hang_hoc_sinh", [
        (([{"ten": "An", "diem": 8.0, "tuoi": 20},
           {"ten": "Binh", "diem": 9.0, "tuoi": 22},
           {"ten": "Cuong", "diem": 8.0, "tuoi": 19}],),
         ["Binh", "Cuong", "An"]),
        (([{"ten": "B", "diem": 5.0, "tuoi": 20},
           {"ten": "A", "diem": 5.0, "tuoi": 20}],),
         ["A", "B"]),
    ]),
    ("1.14", "doi_co_so", [
        ((255, 16), "FF"),
        ((0, 2), "0"),
        ((10, 2), "1010"),
        ((100, 8), "144"),
    ]),
    ("1.15", "ngoac_hop_le", [
        (("{[()]}",), True),
        (("([)]",), False),
        (("",), True),
        (("(",), False),
        ((")(",), False),
        (("a(b)c[d]",), True),
    ]),
]

# ============================================================ NHOM 2
TEST_P2 = [
    ("2.01", "trung_binh", [
        (([1, 2, 3],), 2.0),
        (([10],), 10.0),
        (([],), 0),
        (([4, 4, 4, 4],), 4.0),
    ]),
    ("2.03", "xoa_so_chan", [
        (([1, 2, 3, 4, 5],), [1, 3, 5]),
        (([2, 4, 6],), []),
        (([2, 2, 2, 1],), [1]),
        (([],), []),
    ]),
    ("2.04", "co_gia_tri", [
        (([1000, int("2000")], int("20" + "00")), True),
        (([1000, 2000], int("3000")), False),
        (([" ".join(["xin", "chao"]), "abc"], "".join(["xin", " ", "chao"])), True),
    ]),
    ("2.05", "phan_tu_giua", [
        (([1, 2, 3],), 2),
        (([1, 2, 3, 4],), 2),
        (([],), None),
        (([9],), 9),
    ]),
    ("2.06", "tao_bang", [
        ((2,), [[1, 0], [0, 1]]),
        ((1,), [[1]]),
        ((3,), [[1, 0, 0], [0, 1, 0], [0, 0, 1]]),
    ]),
    ("2.07", "xoa_gia_tri_rong", [
        (({"a": 1, "b": 0, "c": "", "d": "x"},), {"a": 1, "d": "x"}),
        (({"a": None, "b": []},), {}),
        (({},), {}),
    ]),
    ("2.08", "hoa_ky_tu_dau", [
        (("python",), "Python"),
        (("",), ""),
        (("a",), "A"),
        (("xIN chao",), "XIN chao"),
    ]),
    ("2.09", "tim_max", [
        (([-5, -2, -9],), -2),
        (([1, 5, 3],), 5),
        (([],), None),
        (([0],), 0),
    ]),
    ("2.10", "ba_so_nho_nhat", [
        (([5, 1, 4, 2, 3],), [1, 2, 3]),
        (([2, 1],), [1, 2]),
        (([],), []),
    ]),
    ("2.11", "tong_duong_cheo", [
        (([[1, 2], [3, 4]],), 5),
        (([[1, 0, 0], [0, 5, 0], [0, 0, 9]],), 15),
        (([[7]],), 7),
        (([],), 0),
    ]),
    ("2.13", "gan_bang", [
        ((0.1 + 0.2, 0.3), True),
        ((1.0, 1.5), False),
        ((2.0, 2.0), True),
    ]),
    ("2.14", "xoa_theo_chi_so", [
        (([10, 20, 30], 1), [10, 30]),
        (([10, 20, 30], 0), [20, 30]),
        (([10, 20, 30], 9), [10, 20, 30]),
        (([5], 0), []),
    ]),
]


def kt_2_02(m):
    """them_muc: default argument phai tao list moi moi lan goi."""
    assert m.them_muc(1) == [1]
    assert m.them_muc(2) == [2], "mutable default argument van con bi chia se"
    ds = [9]
    assert m.them_muc(1, ds) == [9, 1]
    assert ds == [9, 1], "khi truyen danh_sach thi phai sua tai cho"


def kt_2_12(m):
    """fib: dung gia tri + memo khong ro ri giua cac lan goi."""
    assert m.fib(0) == 0
    assert m.fib(1) == 1
    assert m.fib(10) == 55
    assert m.fib(20) == 6765
    assert m.fib(30) == 832040


def kt_2_15(m):
    """dem_tu: phai cong don duoc vao bien toan cuc."""
    m.DEM_TOAN_CUC = 0
    assert m.dem_tu("a b") == 2
    assert m.DEM_TOAN_CUC == 2, "chua cap nhat duoc bien toan cuc"
    assert m.dem_tu("c") == 1
    assert m.DEM_TOAN_CUC == 3


TEST_P2_DAC_BIET = [("2.02", kt_2_02),
                    ("2.12", kt_2_12), ("2.15", kt_2_15)]

# ============================================================ NHOM 3
TEST_P3 = [
    ("3.01", "thong_ke_diem", [
        (([8, 6, 9, 7],), {"min": 6, "max": 9, "trung_binh": 7.5, "trung_vi": 7.5}),
        (([5, 1, 3],), {"min": 1, "max": 5, "trung_binh": 3.0, "trung_vi": 3}),
        (([],), {}),
        (([10],), {"min": 10, "max": 10, "trung_binh": 10.0, "trung_vi": 10}),
    ]),
    ("3.02", "gom_nhom_anagram", [
        ((["eat", "tea", "tan", "ate", "nat"],), [["ate", "eat", "tea"], ["nat", "tan"]]),
        (([],), []),
        ((["a"],), [["a"]]),
    ]),
    ("3.03", "giao_khoang", [
        (([[0, 2], [5, 10]], [[1, 5], [8, 12]]), [[1, 2], [5, 5], [8, 10]]),
        (([[1, 3]], [[5, 7]]), []),
        (([], [[1, 2]]), []),
        (([[1, 10]], [[2, 3], [4, 5]]), [[2, 3], [4, 5]]),
    ]),
    ("3.04", "kiem_tra_so_du", [
        ((100, [50, -200, -30]), (120, 1)),
        ((0, [-1]), (0, 1)),
        ((10, [-10]), (0, 0)),
        ((5, []), (5, 0)),
    ]),
    ("3.05", "top_k_pho_bien", [
        (([1, 1, 2, 2, 3], 2), [1, 2]),
        (([4, 4, 4, 1, 1, 2], 2), [4, 1]),
        (([3, 1, 2], 3), [1, 2, 3]),
        (([], 2), []),
    ]),
    ("3.06", "duong_di_ngan_nhat", [
        (([[0, 0], [0, 0]],), 2),
        (([[0, 1], [1, 0]],), -1),
        (([[0]],), 0),
        (([[1, 0], [0, 0]],), -1),
        (([[0, 0, 0], [1, 1, 0], [0, 0, 0]],), 4),
    ]),
    ("3.07", "so_dong_xu_it_nhat", [
        (([1, 5, 10], 12), 3),
        (([2], 3), -1),
        (([1], 0), 0),
        (([1, 3, 4], 6), 2),
    ]),
    ("3.08", "day_con_tang_dai_nhat", [
        (([10, 9, 2, 5, 3, 7, 101, 18],), 4),
        (([7, 7, 7],), 1),
        (([],), 0),
        (([1, 2, 3, 4],), 4),
    ]),
    ("3.09", "gop_khoang", [
        (([[1, 3], [2, 6], [8, 10], [15, 18]],), [[1, 6], [8, 10], [15, 18]]),
        (([[1, 4], [4, 5]],), [[1, 5]]),
        (([],), []),
        (([[5, 6], [1, 2]],), [[1, 2], [5, 6]]),
    ]),
    ("3.10", "phan_tich_log", [
        ((["ERROR|auth|fail", "INFO|auth|ok", "ERROR|auth|fail2", "ERROR|db|x"],),
         {"auth": 2, "db": 1}),
        ((["INFO|a|b"],), {}),
        ((["hong dinh dang", "ERROR|a|b"],), {"a": 1}),
        (([],), {}),
    ]),
    ("3.11", "xep_lich_toi_da", [
        (([[1, 3], [2, 5], [3, 6], [6, 8]],), 3),
        (([[1, 2]],), 1),
        (([],), 0),
        (([[1, 10], [2, 3], [4, 5]],), 2),
    ]),
    ("3.12", "tinh_bieu_thuc", [
        (("3+2*2",), 7),
        ((" 3/2 ",), 1),
        ((" 3+5 / 2 ",), 5),
        (("10-2*3",), 4),
        (("100",), 100),
    ]),
    ("3.13", "k_phan_tu_lon_nhat", [
        (([3, 1, 5, 12, 2, 11], 3), [12, 11, 5]),
        (([1, 2], 5), [2, 1]),
        (([5], 1), [5]),
        (([1, 2, 3], 0), []),
    ]),
]


def _ma_nguon_lop(duong_dan, ten_lop):
    """Lay ma nguon cua mot lop, DA BO docstring (de khong bat nham tu trong mo ta)."""
    import ast
    cay = ast.parse(open(duong_dan, encoding="utf-8").read())
    for nut in ast.walk(cay):
        if isinstance(nut, ast.ClassDef) and nut.name == ten_lop:
            for con in ast.walk(nut):
                than = getattr(con, "body", None)
                if isinstance(than, list) and than and isinstance(than[0], ast.Expr) and \
                        isinstance(than[0].value, ast.Constant) and \
                        isinstance(than[0].value.value, str):
                    than.pop(0)
                    if not than:
                        than.append(ast.Pass())
            return ast.unparse(nut)
    return ""


def kt_3_14(m):
    """Lop Kho."""
    k = m.Kho()
    k.nhap("ban phim", 5)
    k.nhap("chuot", 5)
    k.nhap("man hinh", 2)
    assert k.ton("ban phim") == 5
    assert k.ton("khong co") == 0
    assert k.xuat("ban phim", 10) is False, "khong du hang van cho xuat"
    assert k.xuat("ban phim", 2) is True
    assert k.ton("ban phim") == 3
    k.nhap("man hinh", -1)
    assert k.ton("man hinh") == 2, "nhap so luong <= 0 phai bi bo qua"
    assert k.xuat("man hinh", 2) is True
    assert k.danh_sach() == [("chuot", 5), ("ban phim", 3)], \
        "danh_sach() sai thu tu hoac chua bo mat hang = 0"


def kt_3_15(m):
    """Lop HangDoi (2 ngan xep)."""
    nguon = _ma_nguon_lop(m.__file__, "HangDoi")
    assert "pop(0)" not in nguon and "deque" not in nguon and "insert(0" not in nguon, \
        "phai cai dat bang 2 ngan xep, khong dung pop(0)/deque/insert(0,...)"
    q = m.HangDoi()
    assert q.rong() is True
    assert q.lay() is None
    q.them(1)
    q.them(2)
    assert q.xem() == 1
    assert q.lay() == 1
    q.them(3)
    assert q.lay() == 2
    assert q.lay() == 3
    assert q.rong() is True
    assert q.xem() is None


TEST_P3_DAC_BIET = [("3.14", kt_3_14), ("3.15", kt_3_15)]

NHOM = {
    1: (TEST_P1, [], "p1_doc_hieu"),
    2: (TEST_P2, TEST_P2_DAC_BIET, "p2_debug"),
    3: (TEST_P3, TEST_P3_DAC_BIET, "p3_design"),
}


# ============================================================ NAP NHOM MO RONG
# Cac nhom 4/5/6 nam o file rieng (bo_test_p4.py ...) de de mo rong.
# Moi file phai co: TEN_FILE (str), TESTS (list), TESTS_DAC_BIET (list, tuy chon)
import importlib as _importlib

for _so, _ten_mod in ((4, "bo_test_p4"), (5, "bo_test_p5"), (6, "bo_test_p6")):
    try:
        _m = _importlib.import_module(_ten_mod)
    except ImportError:
        continue
    NHOM[_so] = (_m.TESTS, getattr(_m, "TESTS_DAC_BIET", []), _m.TEN_FILE)
