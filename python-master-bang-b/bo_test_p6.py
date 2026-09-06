# -*- coding: utf-8 -*-
"""
Bo test cho Nhom 6 (15 bai Design muc do Chung ket - COS Pro Level 1).
"""

TEN_FILE = "p6_design_l1"

TESTS = [
    ("6.01", "solution_601", [
        (([2, 3, 1, 2, 4, 3], 7), 2),
        (([1, 4, 4], 4), 1),
        (([1, 1, 1, 1, 1, 1, 1, 1], 11), 0),
        (([1, 2, 3, 4, 5], 15), 5),
        (([5], 5), 1),
        (([5], 6), 0),
        (([], 10), 0),
        (([1, 2, 3, 4, 5], 11), 3),
    ]),
    ("6.02", "solution_602", [
        (([[1, 3], [2, 6], [8, 10], [15, 18]],), [[1, 6], [8, 10], [15, 18]]),
        (([[1, 4], [4, 5]],), [[1, 5]]),
        (([[1, 10], [2, 3], [4, 8], [9, 12]],), [[1, 12]]),
        (([],), []),
        (([[5, 8]],), [[5, 8]]),
        (([[7, 9], [1, 3], [2, 4], [10, 12], [3, 5]],), [[1, 5], [7, 9], [10, 12]]),
        (([[1, 4], [0, 2], [3, 5]],), [[0, 5]]),
        (([[2, 2], [2, 2]],), [[2, 2]]),
    ]),
    ("6.03", "solution_603", [
        (([[2, 1, 1], [1, 1, 0], [0, 1, 1]],), 4),
        (([[2, 1, 1], [0, 1, 1], [1, 0, 1]],), -1),
        (([[0, 2]],), 0),
        (([[1]],), -1),
        (([[2]],), 0),
        (([[2, 2], [1, 1], [0, 0]],), 1),
        (([[0, 0], [0, 0]],), 0),
        (([[1, 2, 1], [1, 1, 1], [1, 2, 1]],), 2),
    ]),
    ("6.04", "solution_604", [
        (([2, 3, 4, 5], [3, 4, 5, 6], 5), 7),
        (([1, 2, 3], [10, 15, 40], 6), 65),
        (([10, 20, 30], [60, 100, 120], 50), 220),
        (([5], [10], 3), 0),
        (([], [], 10), 0),
        (([3, 2, 1], [10, 20, 30], 0), 0),
        (([4, 5, 1], [1, 2, 3], 4), 3),
        (([1, 1, 1], [10, 20, 30], 2), 50),
    ]),
    ("6.05", "solution_605", [
        (([[1, 3, 1], [1, 5, 1], [4, 2, 1]],), 7),
        (([[1, 2, 3], [4, 5, 6]],), 12),
        (([[5]],), 5),
        (([[1, 2], [1, 1]],), 3),
        (([[1, 10, 1], [1, 10, 1], [1, 1, 1]],), 5),
        (([[0, 0], [0, 0]],), 0),
        (([[1, 2, 5], [3, 2, 1]],), 6),
    ]),
    ("6.06", "solution_606", [
        (("3[a]2[bc]",), "aaabcbc"),
        (("3[a2[c]]",), "accaccacc"),
        (("2[abc]3[cd]ef",), "abcabccdcdcdef"),
        (("abc",), "abc"),
        (("10[a]",), "aaaaaaaaaa"),
        (("2[2[b]]",), "bbbb"),
        (("",), ""),
        (("2[a]3[b2[c]]",), "aabccbccbcc"),
    ]),
    ("6.07", "solution_607", [
        (("apple:5, banana:10, apple:3",), {"apple": 8, "banana": 10}),
        ((" milk : 2 , tea:5 , milk : 3 ",), {"milk": 5, "tea": 5}),
        (("item1:10, item2:invalid, :5, item3:-2, item4:0, item1:5",), {"item1": 15}),
        (("a:1,,b:2, c:d , , : ",), {"a": 1, "b": 2}),
        (("",), {}),
        (("bad_format_without_colon, : , 123:abc",), {}),
        (("item@bad:5, good_item:10",), {"good_item": 10}),
        (("book_1:50, book_2:30, book_1:20",), {"book_1": 70, "book_2": 30}),
    ]),
    ("6.08", "solution_608", [
        (([[1, 2, 3], [4, 5, 6], [7, 8, 9]],), [7, 4, 1, 2, 3, 6, 9, 8, 5]),
        (([[1, 2], [3, 4], [5, 6]],), [5, 3, 1, 2, 4, 6]),
        (([[1, 2, 3, 4]],), [1, 2, 3, 4]),
        (([[1], [2], [3]],), [3, 2, 1]),
        (([[42]],), [42]),
        (([],), []),
        (([[1, 2], [3, 4]],), [3, 1, 2, 4]),
    ]),
    ("6.09", "solution_609", [
        (([{"id": "A", "doanh_thu": 100, "danh_gia": 4.5, "luot_xem": 10},
           {"id": "B", "doanh_thu": 100, "danh_gia": 4.8, "luot_xem": 5}], 1),
         ["B"]),
        (([{"id": "A", "doanh_thu": 100, "danh_gia": 4.5, "luot_xem": 10},
           {"id": "B", "doanh_thu": 100, "danh_gia": 4.5, "luot_xem": 20}], 2),
         ["B", "A"]),
        (([{"id": "Z", "doanh_thu": 50, "danh_gia": 4.0, "luot_xem": 100},
           {"id": "A", "doanh_thu": 50, "danh_gia": 4.0, "luot_xem": 100}], 2),
         ["A", "Z"]),
        (([{"id": "X", "doanh_thu": 200, "danh_gia": 5.0, "luot_xem": 1}], 0),
         []),
        (([], 5),
         []),
        (([{"id": "P1", "doanh_thu": 10, "danh_gia": 3.0, "luot_xem": 5},
           {"id": "P2", "doanh_thu": 20, "danh_gia": 4.0, "luot_xem": 10},
           {"id": "P3", "doanh_thu": 15, "danh_gia": 4.5, "luot_xem": 8}], 5),
         ["P2", "P3", "P1"]),
        (([{"id": "M1", "doanh_thu": 50, "danh_gia": 4.0, "luot_xem": 30}], 1),
         ["M1"]),
    ]),
    ("6.10", "solution_610", [
        (([(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], 2),
         {"tong_thoi_gian": 8, "cho_trung_binh": 0.5, "phuc_vu_boi_quay": [2, 2]}),
        (([(1, 0, 10)], 1),
         {"tong_thoi_gian": 10, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [1]}),
        (([(1, 0, 2), (2, 0, 3), (3, 0, 1)], 3),
         {"tong_thoi_gian": 3, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [1, 1, 1]}),
        (([], 2),
         {"tong_thoi_gian": 0, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [0, 0]}),
        (([(1, 0, 4), (2, 1, 4), (3, 2, 4)], 1),
         {"tong_thoi_gian": 12, "cho_trung_binh": 3.0, "phuc_vu_boi_quay": [3]}),
        (([(1, 5, 2), (2, 10, 3)], 2),
         {"tong_thoi_gian": 13, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [2, 0]}),
        (([(1, 0, 5), (2, 0, 5)], 2),
         {"tong_thoi_gian": 5, "cho_trung_binh": 0.0, "phuc_vu_boi_quay": [1, 1]}),
    ]),
    ("6.11", "solution_611", [
        (([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 15),
        (([3, 2, 2, 4, 1, 4], 3), 6),
        (([1, 2, 3, 1, 1], 4), 3),
        (([10], 1), 10),
        (([5, 5, 5, 5], 2), 10),
        (([5, 5, 5, 5], 4), 5),
        (([1, 2, 3, 4], 1), 10),
    ]),
    ("6.12", "solution_612", [
        ((5, [[0, 1], [1, 2], [3, 4]]), (2, 3, 2)),
        ((5, [[0, 1], [1, 2], [2, 3], [3, 4]]), (1, 5, 5)),
        ((4, []), (4, 1, 1)),
        ((6, [[0, 1], [0, 2], [1, 2], [3, 4]]), (3, 3, 1)),
        ((1, []), (1, 1, 1)),
        ((0, []), (0, 0, 0)),
        ((4, [[0, 1], [0, 1], [2, 3]]), (2, 2, 2)),
    ]),
]


def kt_6_13(m):
    """Kiem tra lop KhoHang."""
    kho = m.KhoHang(canh_bao_ton_it=5)
    assert kho.ton_kho("SP01") == 0
    assert kho.thong_tin("SP01") is None
    kho.nhap_hang("SP01", "Ao thun", 10, 150000)
    kho.nhap_hang("SP02", "Quan jean", 3, 300000)
    kho.nhap_hang("SP03", "Giay sneaker", 2, 500000)
    assert kho.ton_kho("SP01") == 10
    assert kho.ton_kho("SP02") == 3
    assert kho.thong_tin("SP01") == {
        "ma_sp": "SP01",
        "ten_sp": "Ao thun",
        "so_luong": 10,
        "gia_nhap": 150000,
    }
    # Nhap so luong am hoac gia am -> bo qua
    kho.nhap_hang("SP01", "Ao thun", -5, 100000)
    assert kho.ton_kho("SP01") == 10
    kho.nhap_hang("SP01", "Ao thun", 5, -100)
    assert kho.ton_kho("SP01") == 10
    # Nhap them cap nhat so luong va gia
    kho.nhap_hang("SP01", "Ao thun", 5, 160000)
    assert kho.ton_kho("SP01") == 15
    assert kho.thong_tin("SP01")["gia_nhap"] == 160000
    # Xuat hang
    assert kho.xuat_hang("SP01", 20) is False, "Khong du hang nhung van cho xuat"
    assert kho.xuat_hang("SP01", -1) is False, "So luong xuat <= 0 phai tra ve False"
    assert kho.xuat_hang("SP99", 1) is False, "Ma sp khong ton tai phai tra ve False"
    assert kho.xuat_hang("SP01", 12) is True
    assert kho.ton_kho("SP01") == 3
    # Kiem tra danh sach canh bao (SP01: 3, SP02: 3, SP03: 2) -> sap tang so luong, trung thi ma A-Z
    assert kho.danh_sach_canh_bao() == ["SP03", "SP01", "SP02"]
    # Xuat het SP03 -> ton kho = 0 -> khong con trong danh sach canh bao
    assert kho.xuat_hang("SP03", 2) is True
    assert kho.ton_kho("SP03") == 0
    assert kho.danh_sach_canh_bao() == ["SP01", "SP02"]
    # Tong gia tri kho: SP01: 3 * 160000 = 480000, SP02: 3 * 300000 = 900000, SP03: 0 * 500000 = 0 -> 1380000
    assert kho.tong_gia_tri_kho() == 1380000


def kt_6_14(m):
    """Kiem tra lop TaiKhoan."""
    tk = m.TaiKhoan("Nguyen Van A", 1000)
    assert tk.xem_so_du() == 1000
    assert tk.nap_tien(500, "Thuong tet") is True
    assert tk.xem_so_du() == 1500
    assert tk.nap_tien(-100) is False
    assert tk.rut_tien(200, "Mua sach") is True
    assert tk.xem_so_du() == 1300
    assert tk.rut_tien(2000) is False, "Rut qua so du phai tra ve False"
    assert tk.rut_tien(0) is False
    assert tk.xem_so_du() == 1300
    # Kiem tra lich su
    ls = tk.lich_su_giao_dich()
    assert len(ls) == 2
    assert ls[0]["loai"] == "NAP" and ls[0]["so_tien"] == 500 and ls[0]["so_du_sau"] == 1500
    assert ls[1]["loai"] == "RUT" and ls[1]["so_tien"] == 200 and ls[1]["so_du_sau"] == 1300
    assert len(tk.lich_su_giao_dich(gioi_han=1)) == 1
    assert tk.lich_su_giao_dich(gioi_han=1)[0]["loai"] == "RUT"
    # Hoan tac 1 buoc (undo RUT 200 -> so du ve 1500)
    assert tk.hoan_tac(1) == 1
    assert tk.xem_so_du() == 1500
    assert len(tk.lich_su_giao_dich()) == 1
    # Hoan tac tiep 1 buoc (undo NAP 500 -> so du ve 1000)
    assert tk.hoan_tac(1) == 1
    assert tk.xem_so_du() == 1000
    assert len(tk.lich_su_giao_dich()) == 0
    # Hoan tac khi lich su rong
    assert tk.hoan_tac(1) == 0
    # Test truong hop khong du so du de hoan tac NAP
    tk2 = m.TaiKhoan("Le Thi B", 0)
    tk2.nap_tien(1000)
    tk2.rut_tien(800)
    assert tk2.hoan_tac(2) == 2
    assert tk2.xem_so_du() == 0
    # Test so du ban dau am
    tk3 = m.TaiKhoan("Tran C", -500)
    assert tk3.xem_so_du() == 0


def kt_6_15(m):
    """Kiem tra lop LRUCache."""
    import ast
    import inspect
    nguon = inspect.getsource(m)
    tree = ast.parse(nguon)
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                assert alias.name != "functools", "Khong duoc import functools"
        elif isinstance(node, ast.ImportFrom):
            assert node.module != "functools", "Khong duoc import tu functools"

    cache = m.LRUCache(2)
    assert cache.do_dai() == 0
    assert cache.get(1) == -1
    cache.put(1, 10)
    cache.put(2, 20)
    assert cache.do_dai() == 2
    assert cache.danh_sach_keys() == [1, 2]
    # Truy cap key 1 -> 1 tro thanh MRU
    assert cache.get(1) == 10
    assert cache.danh_sach_keys() == [2, 1]
    # Put key 3 -> day dung luong -> loai bo LRU la key 2
    cache.put(3, 30)
    assert cache.get(2) == -1, "Key 2 phai bi loai bo vi la LRU"
    assert cache.danh_sach_keys() == [1, 3]
    # Cap nhat gia tri key 1
    cache.put(1, 100)
    assert cache.get(1) == 100
    assert cache.danh_sach_keys() == [3, 1]
    # Put key 4 -> loai bo key 3
    cache.put(4, 40)
    assert cache.get(3) == -1
    assert cache.get(4) == 40
    assert cache.danh_sach_keys() == [1, 4]
    # Xoa phan tu
    assert cache.xoa(99) is False
    assert cache.xoa(1) is True
    assert cache.get(1) == -1
    assert cache.do_dai() == 1
    assert cache.danh_sach_keys() == [4]


TESTS_DAC_BIET = [("6.13", kt_6_13), ("6.14", kt_6_14), ("6.15", kt_6_15)]
