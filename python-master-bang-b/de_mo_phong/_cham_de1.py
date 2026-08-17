# -*- coding: utf-8 -*-
"""Bo cham diem de mo phong 1. Diem toi da 1000, dat chung chi COS Pro tu 600."""

CAU = [
    ("Q1", "ky_tu_khac_nhau", 110, [
        (("Hello, World!",), ["d", "e", "h", "l", "o", "r", "w"]),
        (("",), []),
        (("123 !!",), []),
        (("aAbB",), ["a", "b"]),
    ]),
    ("Q2", "tinh_phi_ship", 110, [
        ((0.5, False), 20000),
        ((1, False), 20000),
        ((1.2, False), 25000),
        ((3, False), 30000),
        ((3, True), 45000),
        ((0, True), 0),
        ((-2, False), 0),
    ]),
    ("Q3", "gop_email", 110, [
        ((["An <An@Gmail.com>", "Binh <b@x.vn>"],),
         {"an@gmail.com": "An", "b@x.vn": "Binh"}),
        ((["hong dinh dang", "C <c@y.vn>"],), {"c@y.vn": "C"}),
        ((["<a@b.vn>"],), {}),
        ((["A <khongcoat>"],), {}),
        (([],), {}),
    ]),
    ("Q4", "chuoi_khong_lap_dai_nhat", 110, [
        (("abcabcbb",), 3),
        (("bbbbb",), 1),
        (("pwwkew",), 3),
        (("",), 0),
        (("abcdef",), 6),
    ]),
    ("Q5", "xep_loai", 93, [
        ((9.0,), "A"),
        ((7.5,), "B"),
        ((6.0,), "C"),
        ((4.5,), "D"),
        ((2.0,), "F"),
        ((-1,), "Khong hop le"),
        ((11,), "Khong hop le"),
        ((8.5,), "A"),
    ]),
    ("Q6", "dem_nguoc", 93, [
        ((5,), [5, 4, 3, 2, 1]),
        ((1,), [1]),
        ((0,), []),
        ((-3,), []),
    ]),
    ("Q8", "sap_xep_phien_ban", 93, [
        ((["1.10.2", "1.9.10", "1.9.2"],), ["1.9.2", "1.9.10", "1.10.2"]),
        ((["2.0.0", "10.0.0", "1.0.0"],), ["1.0.0", "2.0.0", "10.0.0"]),
        (([],), []),
    ]),
    ("Q9", "ma_hoa_caesar", 93, [
        (("abc", 2), "cde"),
        (("xyz", 3), "abc"),
        (("Hello, World!", 3), "Khoor, Zruog!"),
        (("abc", 0), "abc"),
        (("abc", 26), "abc"),
    ]),
    ("Q10", "thong_ke_ban_hang", 94, [
        (([{"sp": "ao", "sl": 2, "gia": 100},
           {"sp": "quan", "sl": 1, "gia": 300},
           {"sp": "ao", "sl": 1, "gia": 100}],), [("ao", 300), ("quan", 300)]),
        (([{"sp": "x", "sl": 0, "gia": 5}],), []),
        (([],), []),
        (([{"sp": "b", "sl": 1, "gia": 10}, {"sp": "a", "sl": 1, "gia": 10}],),
         [("a", 10), ("b", 10)]),
    ]),
]


def kt_q7(m):
    """Q7 (94d): copy sau - khong duoc lam hong dict goc."""
    goc = {"db": {"host": "localhost", "port": 5432}, "debug": False}
    ban_sao_goc = {"db": {"host": "localhost", "port": 5432}, "debug": False}
    kq = m.nhan_ban_cau_hinh(goc, {"db": {"port": 6000}, "debug": True})
    assert kq == {"db": {"host": "localhost", "port": 6000}, "debug": True}, \
        f"ket qua sai: {kq}"
    assert goc == ban_sao_goc, "dict goc bi thay doi -> van con copy nong"


DAC_BIET = [("Q7", 94, kt_q7)]
