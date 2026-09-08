/* Auto-generated test cases for all 90 Python Master katas */
window.KATA_TEST_SPECS = {
  "1.01": {
    "fn": "dem_nguyen_am",
    "is_special": false,
    "cases": [
      [
        "('Hello World',)",
        "3"
      ],
      [
        "('PYTHON',)",
        "1"
      ],
      [
        "('',)",
        "0"
      ],
      [
        "('bcdfg',)",
        "0"
      ],
      [
        "('AeIoU',)",
        "5"
      ]
    ]
  },
  "1.02": {
    "fn": "chuan_hoa_ten",
    "is_special": false,
    "cases": [
      [
        "('  nGUYEN   anh   duong ',)",
        "'Nguyen Anh Duong'"
      ],
      [
        "('tran VAN a',)",
        "'Tran Van A'"
      ],
      [
        "('   ',)",
        "''"
      ],
      [
        "('le',)",
        "'Le'"
      ]
    ]
  },
  "1.03": {
    "fn": "tong_chu_so",
    "is_special": false,
    "cases": [
      [
        "(123,)",
        "6"
      ],
      [
        "(0,)",
        "0"
      ],
      [
        "(-4567,)",
        "22"
      ],
      [
        "(1000000,)",
        "1"
      ]
    ]
  },
  "1.04": {
    "fn": "max_thu_hai",
    "is_special": false,
    "cases": [
      [
        "([3, 1, 4, 1, 5],)",
        "4"
      ],
      [
        "([7, 7, 7],)",
        "None"
      ],
      [
        "([2, 2, 1],)",
        "1"
      ],
      [
        "([5],)",
        "None"
      ],
      [
        "([-1, -5, -3],)",
        "-3"
      ]
    ]
  },
  "1.05": {
    "fn": "dem_tan_suat",
    "is_special": false,
    "cases": [
      [
        "(['a', 'b', 'a'],)",
        "{'a': 2, 'b': 1}"
      ],
      [
        "([],)",
        "{}"
      ],
      [
        "([1, 1, 1, 2],)",
        "{1: 3, 2: 1}"
      ]
    ]
  },
  "1.06": {
    "fn": "dao_thu_tu_tu",
    "is_special": false,
    "cases": [
      [
        "('hom nay troi dep',)",
        "'dep troi nay hom'"
      ],
      [
        "('  xin   chao  ',)",
        "'chao xin'"
      ],
      [
        "('mot',)",
        "'mot'"
      ],
      [
        "('',)",
        "''"
      ]
    ]
  },
  "1.07": {
    "fn": "la_doi_xung",
    "is_special": false,
    "cases": [
      [
        "('A man, a plan, a canal: Panama',)",
        "True"
      ],
      [
        "('race a car',)",
        "False"
      ],
      [
        "('',)",
        "True"
      ],
      [
        "('.,',)",
        "True"
      ],
      [
        "('Ab_bA',)",
        "True"
      ]
    ]
  },
  "1.08": {
    "fn": "gop_dict_cong_don",
    "is_special": false,
    "cases": [
      [
        "({'x': 1, 'y': 2}, {'y': 5, 'z': 3})",
        "{'x': 1, 'y': 7, 'z': 3}"
      ],
      [
        "({}, {'a': 1})",
        "{'a': 1}"
      ],
      [
        "({'a': 1}, {})",
        "{'a': 1}"
      ]
    ]
  },
  "1.09": {
    "fn": "loc_so_nguyen_to",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],)",
        "[2, 3, 5, 7]"
      ],
      [
        "([0, 1, -3],)",
        "[]"
      ],
      [
        "([97, 91, 89],)",
        "[97, 89]"
      ]
    ]
  },
  "1.10": {
    "fn": "nen_chuoi",
    "is_special": false,
    "cases": [
      [
        "('aaabbc',)",
        "'a3b2c1'"
      ],
      [
        "('',)",
        "''"
      ],
      [
        "('a',)",
        "'a1'"
      ],
      [
        "('abc',)",
        "'a1b1c1'"
      ],
      [
        "('aabbaa',)",
        "'a2b2a2'"
      ]
    ]
  },
  "1.11": {
    "fn": "xoay_phai",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3, 4, 5], 2)",
        "[4, 5, 1, 2, 3]"
      ],
      [
        "([1, 2, 3], 0)",
        "[1, 2, 3]"
      ],
      [
        "([1, 2, 3], 3)",
        "[1, 2, 3]"
      ],
      [
        "([1, 2, 3], 7)",
        "[3, 1, 2]"
      ],
      [
        "([], 4)",
        "[]"
      ]
    ]
  },
  "1.12": {
    "fn": "tim_cap_tong",
    "is_special": false,
    "cases": [
      [
        "([2, 7, 11, 15], 9)",
        "(0, 1)"
      ],
      [
        "([3, 2, 4], 6)",
        "(1, 2)"
      ],
      [
        "([1, 2, 3], 100)",
        "None"
      ],
      [
        "([3, 3], 6)",
        "(0, 1)"
      ]
    ]
  },
  "1.13": {
    "fn": "xep_hang_hoc_sinh",
    "is_special": false,
    "cases": [
      [
        "([{'ten': 'An', 'diem': 8.0, 'tuoi': 20}, {'ten': 'Binh', 'diem': 9.0, 'tuoi': 22}, {'ten': 'Cuong', 'diem': 8.0, 'tuoi': 19}],)",
        "['Binh', 'Cuong', 'An']"
      ],
      [
        "([{'ten': 'B', 'diem': 5.0, 'tuoi': 20}, {'ten': 'A', 'diem': 5.0, 'tuoi': 20}],)",
        "['A', 'B']"
      ]
    ]
  },
  "1.14": {
    "fn": "doi_co_so",
    "is_special": false,
    "cases": [
      [
        "(255, 16)",
        "'FF'"
      ],
      [
        "(0, 2)",
        "'0'"
      ],
      [
        "(10, 2)",
        "'1010'"
      ],
      [
        "(100, 8)",
        "'144'"
      ]
    ]
  },
  "1.15": {
    "fn": "ngoac_hop_le",
    "is_special": false,
    "cases": [
      [
        "('{[()]}',)",
        "True"
      ],
      [
        "('([)]',)",
        "False"
      ],
      [
        "('',)",
        "True"
      ],
      [
        "('(',)",
        "False"
      ],
      [
        "(')(',)",
        "False"
      ],
      [
        "('a(b)c[d]',)",
        "True"
      ]
    ]
  },
  "2.01": {
    "fn": "trung_binh",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3],)",
        "2.0"
      ],
      [
        "([10],)",
        "10.0"
      ],
      [
        "([],)",
        "0"
      ],
      [
        "([4, 4, 4, 4],)",
        "4.0"
      ]
    ]
  },
  "2.03": {
    "fn": "xoa_so_chan",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3, 4, 5],)",
        "[1, 3, 5]"
      ],
      [
        "([2, 4, 6],)",
        "[]"
      ],
      [
        "([2, 2, 2, 1],)",
        "[1]"
      ],
      [
        "([],)",
        "[]"
      ]
    ]
  },
  "2.04": {
    "fn": "co_gia_tri",
    "is_special": false,
    "cases": [
      [
        "([1000, 2000], 2000)",
        "True"
      ],
      [
        "([1000, 2000], 3000)",
        "False"
      ],
      [
        "(['xin chao', 'abc'], 'xin chao')",
        "True"
      ]
    ]
  },
  "2.05": {
    "fn": "phan_tu_giua",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3],)",
        "2"
      ],
      [
        "([1, 2, 3, 4],)",
        "2"
      ],
      [
        "([],)",
        "None"
      ],
      [
        "([9],)",
        "9"
      ]
    ]
  },
  "2.06": {
    "fn": "tao_bang",
    "is_special": false,
    "cases": [
      [
        "(2,)",
        "[[1, 0], [0, 1]]"
      ],
      [
        "(1,)",
        "[[1]]"
      ],
      [
        "(3,)",
        "[[1, 0, 0], [0, 1, 0], [0, 0, 1]]"
      ]
    ]
  },
  "2.07": {
    "fn": "xoa_gia_tri_rong",
    "is_special": false,
    "cases": [
      [
        "({'a': 1, 'b': 0, 'c': '', 'd': 'x'},)",
        "{'a': 1, 'd': 'x'}"
      ],
      [
        "({'a': None, 'b': []},)",
        "{}"
      ],
      [
        "({},)",
        "{}"
      ]
    ]
  },
  "2.08": {
    "fn": "hoa_ky_tu_dau",
    "is_special": false,
    "cases": [
      [
        "('python',)",
        "'Python'"
      ],
      [
        "('',)",
        "''"
      ],
      [
        "('a',)",
        "'A'"
      ],
      [
        "('xIN chao',)",
        "'XIN chao'"
      ]
    ]
  },
  "2.09": {
    "fn": "tim_max",
    "is_special": false,
    "cases": [
      [
        "([-5, -2, -9],)",
        "-2"
      ],
      [
        "([1, 5, 3],)",
        "5"
      ],
      [
        "([],)",
        "None"
      ],
      [
        "([0],)",
        "0"
      ]
    ]
  },
  "2.10": {
    "fn": "ba_so_nho_nhat",
    "is_special": false,
    "cases": [
      [
        "([5, 1, 4, 2, 3],)",
        "[1, 2, 3]"
      ],
      [
        "([2, 1],)",
        "[1, 2]"
      ],
      [
        "([],)",
        "[]"
      ]
    ]
  },
  "2.13": {
    "fn": "gan_bang",
    "is_special": false,
    "cases": [
      [
        "(0.30000000000000004, 0.3)",
        "True"
      ],
      [
        "(1.0, 1.5)",
        "False"
      ],
      [
        "(2.0, 2.0)",
        "True"
      ]
    ]
  },
  "2.14": {
    "fn": "xoa_theo_chi_so",
    "is_special": false,
    "cases": [
      [
        "([10, 20, 30], 1)",
        "[10, 30]"
      ],
      [
        "([10, 20, 30], 0)",
        "[20, 30]"
      ],
      [
        "([10, 20, 30], 9)",
        "[10, 20, 30]"
      ],
      [
        "([5], 0)",
        "[]"
      ]
    ]
  },
  "2.02": {
    "fn": "kt_2_02",
    "is_special": true,
    "doc": "them_muc: default argument phai tao list moi moi lan goi.",
    "src": "def kt_2_02(m):\n    \"\"\"them_muc: default argument phai tao list moi moi lan goi.\"\"\"\n    assert m.them_muc(1) == [1]\n    assert m.them_muc(2) == [2], \"mutable default argument van con bi chia se\"\n    ds = [9]\n    assert m.them_muc(1, ds) == [9, 1]\n    assert ds == [9, 1], \"khi truyen danh_sach thi phai sua tai cho\"",
    "cases": []
  },
  "2.11": {
    "fn": "kt_2_11",
    "is_special": true,
    "doc": "tao_cac_ham_nhan: closure phai bat dung gia tri i.",
    "src": "def kt_2_11(m):\n    \"\"\"tao_cac_ham_nhan: closure phai bat dung gia tri i.\"\"\"\n    f = m.tao_cac_ham_nhan(3)\n    assert len(f) == 3\n    assert f[0](10) == 0, \"ham thu 0 phai tra ve 0\"\n    assert f[1](10) == 10, \"late binding: tat ca ham dang dung cung mot i\"\n    assert f[2](10) == 20",
    "cases": []
  },
  "2.12": {
    "fn": "kt_2_12",
    "is_special": true,
    "doc": "fib: dung gia tri + memo khong ro ri giua cac lan goi.",
    "src": "def kt_2_12(m):\n    \"\"\"fib: dung gia tri + memo khong ro ri giua cac lan goi.\"\"\"\n    assert m.fib(0) == 0\n    assert m.fib(1) == 1\n    assert m.fib(10) == 55\n    assert m.fib(20) == 6765\n    assert m.fib(30) == 832040",
    "cases": []
  },
  "2.15": {
    "fn": "kt_2_15",
    "is_special": true,
    "doc": "dem_tu: phai cong don duoc vao bien toan cuc.",
    "src": "def kt_2_15(m):\n    \"\"\"dem_tu: phai cong don duoc vao bien toan cuc.\"\"\"\n    m.DEM_TOAN_CUC = 0\n    assert m.dem_tu(\"a b\") == 2\n    assert m.DEM_TOAN_CUC == 2, \"chua cap nhat duoc bien toan cuc\"\n    assert m.dem_tu(\"c\") == 1\n    assert m.DEM_TOAN_CUC == 3",
    "cases": []
  },
  "3.01": {
    "fn": "thong_ke_diem",
    "is_special": false,
    "cases": [
      [
        "([8, 6, 9, 7],)",
        "{'min': 6, 'max': 9, 'trung_binh': 7.5, 'trung_vi': 7.5}"
      ],
      [
        "([5, 1, 3],)",
        "{'min': 1, 'max': 5, 'trung_binh': 3.0, 'trung_vi': 3}"
      ],
      [
        "([],)",
        "{}"
      ],
      [
        "([10],)",
        "{'min': 10, 'max': 10, 'trung_binh': 10.0, 'trung_vi': 10}"
      ]
    ]
  },
  "3.02": {
    "fn": "gom_nhom_anagram",
    "is_special": false,
    "cases": [
      [
        "(['eat', 'tea', 'tan', 'ate', 'nat'],)",
        "[['ate', 'eat', 'tea'], ['nat', 'tan']]"
      ],
      [
        "([],)",
        "[]"
      ],
      [
        "(['a'],)",
        "[['a']]"
      ]
    ]
  },
  "3.03": {
    "fn": "giao_khoang",
    "is_special": false,
    "cases": [
      [
        "([[0, 2], [5, 10]], [[1, 5], [8, 12]])",
        "[[1, 2], [5, 5], [8, 10]]"
      ],
      [
        "([[1, 3]], [[5, 7]])",
        "[]"
      ],
      [
        "([], [[1, 2]])",
        "[]"
      ],
      [
        "([[1, 10]], [[2, 3], [4, 5]])",
        "[[2, 3], [4, 5]]"
      ]
    ]
  },
  "3.04": {
    "fn": "kiem_tra_so_du",
    "is_special": false,
    "cases": [
      [
        "(100, [50, -200, -30])",
        "(120, 1)"
      ],
      [
        "(0, [-1])",
        "(0, 1)"
      ],
      [
        "(10, [-10])",
        "(0, 0)"
      ],
      [
        "(5, [])",
        "(5, 0)"
      ]
    ]
  },
  "3.05": {
    "fn": "top_k_pho_bien",
    "is_special": false,
    "cases": [
      [
        "([1, 1, 2, 2, 3], 2)",
        "[1, 2]"
      ],
      [
        "([4, 4, 4, 1, 1, 2], 2)",
        "[4, 1]"
      ],
      [
        "([3, 1, 2], 3)",
        "[1, 2, 3]"
      ],
      [
        "([], 2)",
        "[]"
      ]
    ]
  },
  "3.06": {
    "fn": "duong_di_ngan_nhat",
    "is_special": false,
    "cases": [
      [
        "([[0, 0], [0, 0]],)",
        "2"
      ],
      [
        "([[0, 1], [1, 0]],)",
        "-1"
      ],
      [
        "([[0]],)",
        "0"
      ],
      [
        "([[1, 0], [0, 0]],)",
        "-1"
      ],
      [
        "([[0, 0, 0], [1, 1, 0], [0, 0, 0]],)",
        "4"
      ]
    ]
  },
  "3.07": {
    "fn": "so_dong_xu_it_nhat",
    "is_special": false,
    "cases": [
      [
        "([1, 5, 10], 12)",
        "3"
      ],
      [
        "([2], 3)",
        "-1"
      ],
      [
        "([1], 0)",
        "0"
      ],
      [
        "([1, 3, 4], 6)",
        "2"
      ]
    ]
  },
  "3.08": {
    "fn": "day_con_tang_dai_nhat",
    "is_special": false,
    "cases": [
      [
        "([10, 9, 2, 5, 3, 7, 101, 18],)",
        "4"
      ],
      [
        "([7, 7, 7],)",
        "1"
      ],
      [
        "([],)",
        "0"
      ],
      [
        "([1, 2, 3, 4],)",
        "4"
      ]
    ]
  },
  "3.09": {
    "fn": "gop_khoang",
    "is_special": false,
    "cases": [
      [
        "([[1, 3], [2, 6], [8, 10], [15, 18]],)",
        "[[1, 6], [8, 10], [15, 18]]"
      ],
      [
        "([[1, 4], [4, 5]],)",
        "[[1, 5]]"
      ],
      [
        "([],)",
        "[]"
      ],
      [
        "([[5, 6], [1, 2]],)",
        "[[1, 2], [5, 6]]"
      ]
    ]
  },
  "3.10": {
    "fn": "phan_tich_log",
    "is_special": false,
    "cases": [
      [
        "(['ERROR|auth|fail', 'INFO|auth|ok', 'ERROR|auth|fail2', 'ERROR|db|x'],)",
        "{'auth': 2, 'db': 1}"
      ],
      [
        "(['INFO|a|b'],)",
        "{}"
      ],
      [
        "(['hong dinh dang', 'ERROR|a|b'],)",
        "{'a': 1}"
      ],
      [
        "([],)",
        "{}"
      ]
    ]
  },
  "3.11": {
    "fn": "xep_lich_toi_da",
    "is_special": false,
    "cases": [
      [
        "([[1, 3], [2, 5], [3, 6], [6, 8]],)",
        "3"
      ],
      [
        "([[1, 2]],)",
        "1"
      ],
      [
        "([],)",
        "0"
      ],
      [
        "([[1, 10], [2, 3], [4, 5]],)",
        "2"
      ]
    ]
  },
  "3.12": {
    "fn": "tinh_bieu_thuc",
    "is_special": false,
    "cases": [
      [
        "('3+2*2',)",
        "7"
      ],
      [
        "(' 3/2 ',)",
        "1"
      ],
      [
        "(' 3+5 / 2 ',)",
        "5"
      ],
      [
        "('10-2*3',)",
        "4"
      ],
      [
        "('100',)",
        "100"
      ]
    ]
  },
  "3.13": {
    "fn": "k_phan_tu_lon_nhat",
    "is_special": false,
    "cases": [
      [
        "([3, 1, 5, 12, 2, 11], 3)",
        "[12, 11, 5]"
      ],
      [
        "([1, 2], 5)",
        "[2, 1]"
      ],
      [
        "([5], 1)",
        "[5]"
      ],
      [
        "([1, 2, 3], 0)",
        "[]"
      ]
    ]
  },
  "3.14": {
    "fn": "kt_3_14",
    "is_special": true,
    "doc": "Lop Kho.",
    "src": "def kt_3_14(m):\n    \"\"\"Lop Kho.\"\"\"\n    k = m.Kho()\n    k.nhap(\"ban phim\", 5)\n    k.nhap(\"chuot\", 5)\n    k.nhap(\"man hinh\", 2)\n    assert k.ton(\"ban phim\") == 5\n    assert k.ton(\"khong co\") == 0\n    assert k.xuat(\"ban phim\", 10) is False, \"khong du hang van cho xuat\"\n    assert k.xuat(\"ban phim\", 2) is True\n    assert k.ton(\"ban phim\") == 3\n    k.nhap(\"man hinh\", -1)\n    assert k.ton(\"man hinh\") == 2, \"nhap so luong <= 0 phai bi bo qua\"\n    assert k.xuat(\"man hinh\", 2) is True\n    assert k.danh_sach() == [(\"chuot\", 5), (\"ban phim\", 3)], \\\n        \"danh_sach() sai thu tu hoac chua bo mat hang = 0\"",
    "cases": []
  },
  "3.15": {
    "fn": "kt_3_15",
    "is_special": true,
    "doc": "Lop HangDoi (2 ngan xep).",
    "src": "def kt_3_15(m):\n    \"\"\"Lop HangDoi (2 ngan xep).\"\"\"\n    nguon = _ma_nguon_lop(m.__file__, \"HangDoi\")\n    assert \"pop(0)\" not in nguon and \"deque\" not in nguon and \"insert(0\" not in nguon, \\\n        \"phai cai dat bang 2 ngan xep, khong dung pop(0)/deque/insert(0,...)\"\n    q = m.HangDoi()\n    assert q.rong() is True\n    assert q.lay() is None\n    q.them(1)\n    q.them(2)\n    assert q.xem() == 1\n    assert q.lay() == 1\n    q.them(3)\n    assert q.lay() == 2\n    assert q.lay() == 3\n    assert q.rong() is True\n    assert q.xem() is None",
    "cases": []
  },
  "4.01": {
    "fn": "solution_401",
    "is_special": false,
    "cases": [
      [
        "([[85, 92, 95, 90], [91, 76, 85, 50]],)",
        "91"
      ],
      [
        "([[10, 10, 10], [20, 20, 20]],)",
        "20"
      ],
      [
        "([[100, 0, 50, 50]],)",
        "50"
      ],
      [
        "([[80, 81, 82, 83]],)",
        "81"
      ],
      [
        "([[0, 0, 0, 0], [1, 2, 3, 4]],)",
        "2"
      ],
      [
        "([[90, 90, 90, 90]],)",
        "90"
      ]
    ]
  },
  "4.02": {
    "fn": "solution_402",
    "is_special": false,
    "cases": [
      [
        "('AAABBCDDDD',)",
        "'A3B2CD4'"
      ],
      [
        "('A',)",
        "'A'"
      ],
      [
        "('ABCDE',)",
        "'ABCDE'"
      ],
      [
        "('AAAAA',)",
        "'A5'"
      ],
      [
        "('AABBBCCCCCD',)",
        "'A2B3C5D'"
      ]
    ]
  },
  "4.03": {
    "fn": "solution_403",
    "is_special": false,
    "cases": [
      [
        "(1, 15, 3, 5)",
        "49"
      ],
      [
        "(5, 10, 5, 10)",
        "0"
      ],
      [
        "(1, 1, 1, 2)",
        "1"
      ],
      [
        "(1, 1, 12, 31)",
        "364"
      ],
      [
        "(2, 28, 3, 1)",
        "1"
      ],
      [
        "(6, 1, 7, 1)",
        "30"
      ]
    ]
  },
  "4.04": {
    "fn": "solution_404",
    "is_special": false,
    "cases": [
      [
        "([2, 2, 1, 2, 3, 2, 2],)",
        "2"
      ],
      [
        "([1, 2, 3, 1, 2],)",
        "-1"
      ],
      [
        "([5],)",
        "5"
      ],
      [
        "([1, 1, 2, 2],)",
        "-1"
      ],
      [
        "([10, 10, 10, 20, 30],)",
        "10"
      ],
      [
        "([1, 2, 1, 2, 1],)",
        "1"
      ]
    ]
  },
  "4.05": {
    "fn": "solution_405",
    "is_special": false,
    "cases": [
      [
        "([{'name': 'A', 'points': 10, 'diff': 5, 'cards': 2}, {'name': 'B', 'points': 10, 'diff': 5, 'cards': 1}, {'name': 'C', 'points': 12, 'diff': 2, 'cards': 4}],)",
        "['C', 'B', 'A']"
      ],
      [
        "([{'name': 'Alpha', 'points': 5, 'diff': 0, 'cards': 0}],)",
        "['Alpha']"
      ],
      [
        "([{'name': 'B', 'points': 5, 'diff': 2, 'cards': 1}, {'name': 'A', 'points': 5, 'diff': 2, 'cards': 1}],)",
        "['A', 'B']"
      ],
      [
        "([{'name': 'X', 'points': 10, 'diff': 3, 'cards': 0}, {'name': 'Y', 'points': 10, 'diff': 5, 'cards': 2}],)",
        "['Y', 'X']"
      ],
      [
        "([{'name': 'D', 'points': 0, 'diff': -5, 'cards': 3}, {'name': 'E', 'points': 0, 'diff': -2, 'cards': 1}],)",
        "['E', 'D']"
      ]
    ]
  },
  "4.06": {
    "fn": "solution_406",
    "is_special": false,
    "cases": [
      [
        "([10, 20, 30, 40, 50, 60, 70], 3)",
        "180"
      ],
      [
        "([50, 40, 30, 20, 10], 2)",
        "90"
      ],
      [
        "([100], 1)",
        "100"
      ],
      [
        "([5, 5, 5, 5], 4)",
        "20"
      ],
      [
        "([0, 0, 0, 0], 2)",
        "0"
      ],
      [
        "([10, 50, 10, 50, 10], 2)",
        "60"
      ]
    ]
  },
  "4.07": {
    "fn": "solution_407",
    "is_special": false,
    "cases": [
      [
        "([3, 2, 2, 1], 3)",
        "3"
      ],
      [
        "([3, 5, 3, 4], 5)",
        "4"
      ],
      [
        "([1, 2], 3)",
        "1"
      ],
      [
        "([5], 10)",
        "1"
      ],
      [
        "([2, 2, 2, 2], 4)",
        "2"
      ],
      [
        "([1, 1, 1, 1, 1], 2)",
        "3"
      ]
    ]
  },
  "4.08": {
    "fn": "solution_408",
    "is_special": false,
    "cases": [
      [
        "('FFRFF',)",
        "4"
      ],
      [
        "('L',)",
        "0"
      ],
      [
        "('FFBFF',)",
        "0"
      ],
      [
        "('FFFF',)",
        "4"
      ],
      [
        "('FRFRFRF',)",
        "0"
      ],
      [
        "('RFFFF',)",
        "4"
      ]
    ]
  },
  "4.09": {
    "fn": "solution_409",
    "is_special": false,
    "cases": [
      [
        "(1000, 320)",
        "6"
      ],
      [
        "(500, 500)",
        "0"
      ],
      [
        "(100, 90)",
        "1"
      ],
      [
        "(1000, 500)",
        "1"
      ],
      [
        "(1000, 10)",
        "10"
      ],
      [
        "(60, 10)",
        "1"
      ]
    ]
  },
  "4.10": {
    "fn": "solution_410",
    "is_special": false,
    "cases": [
      [
        "('79927398713',)",
        "True"
      ],
      [
        "('79927398710',)",
        "False"
      ],
      [
        "('0',)",
        "True"
      ],
      [
        "('5',)",
        "False"
      ],
      [
        "('49927398716',)",
        "True"
      ],
      [
        "('123456',)",
        "False"
      ]
    ]
  },
  "4.11": {
    "fn": "solution_411",
    "is_special": false,
    "cases": [
      [
        "('python master bang b vo dich', 13)",
        "['python master', 'bang b vo', 'dich']"
      ],
      [
        "('hello', 10)",
        "['hello']"
      ],
      [
        "('a b c d e', 1)",
        "['a', 'b', 'c', 'd', 'e']"
      ],
      [
        "('one two three', 20)",
        "['one two three']"
      ],
      [
        "('alpha beta gamma', 10)",
        "['alpha beta', 'gamma']"
      ]
    ]
  },
  "4.12": {
    "fn": "solution_412",
    "is_special": false,
    "cases": [
      [
        "([[1, 2, 3], [4, 5, 6], [7, 8, 9]],)",
        "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
      ],
      [
        "([[1]],)",
        "[[1]]"
      ],
      [
        "([[1, 2], [3, 4]],)",
        "[[3, 1], [4, 2]]"
      ],
      [
        "([[0, 0], [0, 1]],)",
        "[[0, 0], [1, 0]]"
      ],
      [
        "([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],)",
        "[[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]"
      ]
    ]
  },
  "4.13": {
    "fn": "solution_413",
    "is_special": false,
    "cases": [
      [
        "('lovepython',)",
        "0"
      ],
      [
        "('aabbcc',)",
        "-1"
      ],
      [
        "('a',)",
        "0"
      ],
      [
        "('aabbc',)",
        "4"
      ],
      [
        "('',)",
        "-1"
      ],
      [
        "('google',)",
        "4"
      ]
    ]
  },
  "4.14": {
    "fn": "solution_414",
    "is_special": false,
    "cases": [
      [
        "('abc', 'ahbgdc')",
        "True"
      ],
      [
        "('axc', 'ahbgdc')",
        "False"
      ],
      [
        "('', 'abc')",
        "True"
      ],
      [
        "('a', '')",
        "False"
      ],
      [
        "('abc', 'abc')",
        "True"
      ],
      [
        "('bca', 'abc')",
        "False"
      ]
    ]
  },
  "4.15": {
    "fn": "solution_415",
    "is_special": false,
    "cases": [
      [
        "([[1, 2, 3], [4, 5, 6], [7, 8, 9]],)",
        "25"
      ],
      [
        "([[1, 2], [3, 4]],)",
        "10"
      ],
      [
        "([[5]],)",
        "5"
      ],
      [
        "([[0, 0, 0], [0, 0, 0], [0, 0, 0]],)",
        "0"
      ],
      [
        "([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],)",
        "8"
      ]
    ]
  },
  "5.01": {
    "fn": "solution_501",
    "is_special": false,
    "cases": [
      [
        "([50000, 30000, 120000],)",
        "370"
      ],
      [
        "([50000],)",
        "100"
      ],
      [
        "([49999, 50001],)",
        "149"
      ],
      [
        "([1000, 2000, 3000],)",
        "6"
      ],
      [
        "([0, 50000, 100000],)",
        "300"
      ],
      [
        "([999],)",
        "0"
      ]
    ]
  },
  "5.02": {
    "fn": "solution_502",
    "is_special": false,
    "cases": [
      [
        "([10, 20, 100, 40, 50], 2)",
        "140"
      ],
      [
        "([10, 20, 30, 100], 2)",
        "130"
      ],
      [
        "([100, 20, 10], 1)",
        "100"
      ],
      [
        "([1, 2, 3, 4, 5], 5)",
        "15"
      ],
      [
        "([50, 40, 30, 20, 10], 3)",
        "120"
      ],
      [
        "([5, 5, 5, 5], 2)",
        "10"
      ]
    ]
  },
  "5.03": {
    "fn": "solution_503",
    "is_special": false,
    "cases": [
      [
        "(2, 3)",
        "10"
      ],
      [
        "(1, 1)",
        "1"
      ],
      [
        "(1, 2)",
        "3"
      ],
      [
        "(1, 4)",
        "11"
      ],
      [
        "(3, 3)",
        "15"
      ],
      [
        "(5, 2)",
        "15"
      ]
    ]
  },
  "5.04": {
    "fn": "solution_504",
    "is_special": false,
    "cases": [
      [
        "([100, 200, 350], 2)",
        "325"
      ],
      [
        "([10, 20, 30], 3)",
        "20"
      ],
      [
        "([100], 1)",
        "100"
      ],
      [
        "([15, 25, 35], 2)",
        "37"
      ],
      [
        "([7, 8, 9], 4)",
        "6"
      ],
      [
        "([0, 0, 10], 3)",
        "3"
      ]
    ]
  },
  "5.05": {
    "fn": "solution_505",
    "is_special": false,
    "cases": [
      [
        "(1017, 55, 1)",
        "55"
      ],
      [
        "(1000, 100, 2)",
        "200"
      ],
      [
        "(2500, 75, 1)",
        "187"
      ],
      [
        "(5000, 99, 3)",
        "1485"
      ],
      [
        "(1234, 45, 2)",
        "111"
      ],
      [
        "(1000, 0, 5)",
        "0"
      ]
    ]
  },
  "5.06": {
    "fn": "solution_506",
    "is_special": false,
    "cases": [
      [
        "([10, 25, 30],)",
        "[0, 15, 20]"
      ],
      [
        "([5, 10, 15, 20],)",
        "[0, 5, 10, 15]"
      ],
      [
        "([100],)",
        "[0]"
      ],
      [
        "([20, 20, 20],)",
        "[0, 0, 0]"
      ],
      [
        "([7, 12, 19],)",
        "[0, 5, 12]"
      ],
      [
        "([50, 60, 40],)",
        "[0, 10, -10]"
      ]
    ]
  },
  "5.07": {
    "fn": "solution_507",
    "is_special": false,
    "cases": [
      [
        "([('B', 85), ('A', 90), ('C', 85)],)",
        "['A', 'B', 'C']"
      ],
      [
        "([('X', 50), ('Y', 50), ('Z', 100)],)",
        "['Z', 'X', 'Y']"
      ],
      [
        "([('Single', 10)],)",
        "['Single']"
      ],
      [
        "([('Bob', 70), ('Alice', 70), ('David', 80), ('Charlie', 80)],)",
        "['Charlie', 'David', 'Alice', 'Bob']"
      ],
      [
        "([('M', 10), ('N', 20), ('P', 30)],)",
        "['P', 'N', 'M']"
      ]
    ]
  },
  "5.08": {
    "fn": "solution_508",
    "is_special": false,
    "cases": [
      [
        "([12, 18, 5, 22, 9],)",
        "5"
      ],
      [
        "([-3, -7, -1],)",
        "-7"
      ],
      [
        "([10, 20, 30],)",
        "10"
      ],
      [
        "([0, 5, 10],)",
        "0"
      ],
      [
        "([-10, 0, 10],)",
        "-10"
      ],
      [
        "([42],)",
        "42"
      ]
    ]
  },
  "5.09": {
    "fn": "solution_509",
    "is_special": false,
    "cases": [
      [
        "([7, 11, 15, 22], 5)",
        "True"
      ],
      [
        "([10, 11, 12], 5)",
        "True"
      ],
      [
        "([3, 7, 11], 2)",
        "False"
      ],
      [
        "([1, 3, 5, 8], 4)",
        "True"
      ],
      [
        "([9], 3)",
        "True"
      ],
      [
        "([9], 4)",
        "False"
      ]
    ]
  },
  "5.10": {
    "fn": "solution_510",
    "is_special": false,
    "cases": [
      [
        "([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)",
        "(0, 1)"
      ],
      [
        "([[1, 2], [3, 4]], 4)",
        "(1, 1)"
      ],
      [
        "([[10, 20], [30, 40]], 99)",
        "(-1, -1)"
      ],
      [
        "([[5]], 5)",
        "(0, 0)"
      ],
      [
        "([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 7)",
        "(2, 0)"
      ],
      [
        "([[1, 2], [3, 4], [5, 6]], 3)",
        "(1, 0)"
      ]
    ]
  },
  "5.11": {
    "fn": "solution_511",
    "is_special": false,
    "cases": [
      [
        "([10, 20, 30, 20, 30],)",
        "20"
      ],
      [
        "([5, 5, 5],)",
        "None"
      ],
      [
        "([],)",
        "None"
      ],
      [
        "([100],)",
        "None"
      ],
      [
        "([1, 5, 2, 4, 3],)",
        "4"
      ],
      [
        "([-5, -1, -10],)",
        "-5"
      ]
    ]
  },
  "5.12": {
    "fn": "solution_512",
    "is_special": false,
    "cases": [
      [
        "([[101, 102], [201], [301, 302, 303]],)",
        "[101, 102, 201, 301, 302, 303]"
      ],
      [
        "([],)",
        "[]"
      ],
      [
        "([[1]],)",
        "[1]"
      ],
      [
        "([[1, 2], []],)",
        "[1, 2]"
      ],
      [
        "([['a', 'b'], ['c']],)",
        "['a', 'b', 'c']"
      ],
      [
        "([[5, 4], [3, 2], [1]],)",
        "[5, 4, 3, 2, 1]"
      ]
    ]
  },
  "5.13": {
    "fn": "solution_513",
    "is_special": false,
    "cases": [
      [
        "('VIP2026', 7)",
        "True"
      ],
      [
        "('MEMBER88', 8)",
        "True"
      ],
      [
        "('GUEST123', 8)",
        "False"
      ],
      [
        "('VIP12', 6)",
        "False"
      ],
      [
        "('', 0)",
        "False"
      ],
      [
        "('MEMBERPRO', 9)",
        "True"
      ]
    ]
  },
  "5.14": {
    "fn": "solution_514",
    "is_special": false,
    "cases": [
      [
        "({'ao_thun': 150000, 'quan_jean': 350000, 'non': 150000}, 350000)",
        "True"
      ],
      [
        "({'ao_thun': 150000, 'quan_jean': 350000, 'non': 150000}, 200000)",
        "False"
      ],
      [
        "({}, 100)",
        "False"
      ],
      [
        "({'item': 0}, 0)",
        "True"
      ],
      [
        "({'a': 10, 'b': 20, 'c': 30}, 10)",
        "True"
      ],
      [
        "({'a': 10, 'b': 20, 'c': 30}, 30)",
        "True"
      ]
    ]
  },
  "5.15": {
    "fn": "solution_515",
    "is_special": false,
    "cases": [
      [
        "([100, 250, 400], 500)",
        "True"
      ],
      [
        "([100, -50, 200], 500)",
        "False"
      ],
      [
        "([], 500)",
        "True"
      ],
      [
        "([600, 100], 500)",
        "False"
      ],
      [
        "([500], 500)",
        "True"
      ],
      [
        "([50, 100, 501], 500)",
        "False"
      ]
    ]
  },
  "6.01": {
    "fn": "solution_601",
    "is_special": false,
    "cases": [
      [
        "([2, 3, 1, 2, 4, 3], 7)",
        "2"
      ],
      [
        "([1, 4, 4], 4)",
        "1"
      ],
      [
        "([1, 1, 1, 1, 1, 1, 1, 1], 11)",
        "0"
      ],
      [
        "([1, 2, 3, 4, 5], 15)",
        "5"
      ],
      [
        "([5], 5)",
        "1"
      ],
      [
        "([5], 6)",
        "0"
      ],
      [
        "([], 10)",
        "0"
      ],
      [
        "([1, 2, 3, 4, 5], 11)",
        "3"
      ]
    ]
  },
  "6.02": {
    "fn": "solution_602",
    "is_special": false,
    "cases": [
      [
        "([[1, 3], [2, 6], [8, 10], [15, 18]],)",
        "[[1, 6], [8, 10], [15, 18]]"
      ],
      [
        "([[1, 4], [4, 5]],)",
        "[[1, 5]]"
      ],
      [
        "([[1, 10], [2, 3], [4, 8], [9, 12]],)",
        "[[1, 12]]"
      ],
      [
        "([],)",
        "[]"
      ],
      [
        "([[5, 8]],)",
        "[[5, 8]]"
      ],
      [
        "([[7, 9], [1, 3], [2, 4], [10, 12], [3, 5]],)",
        "[[1, 5], [7, 9], [10, 12]]"
      ],
      [
        "([[1, 4], [0, 2], [3, 5]],)",
        "[[0, 5]]"
      ],
      [
        "([[2, 2], [2, 2]],)",
        "[[2, 2]]"
      ]
    ]
  },
  "6.03": {
    "fn": "solution_603",
    "is_special": false,
    "cases": [
      [
        "([[2, 1, 1], [1, 1, 0], [0, 1, 1]],)",
        "4"
      ],
      [
        "([[2, 1, 1], [0, 1, 1], [1, 0, 1]],)",
        "-1"
      ],
      [
        "([[0, 2]],)",
        "0"
      ],
      [
        "([[1]],)",
        "-1"
      ],
      [
        "([[2]],)",
        "0"
      ],
      [
        "([[2, 2], [1, 1], [0, 0]],)",
        "1"
      ],
      [
        "([[0, 0], [0, 0]],)",
        "0"
      ],
      [
        "([[1, 2, 1], [1, 1, 1], [1, 2, 1]],)",
        "2"
      ]
    ]
  },
  "6.04": {
    "fn": "solution_604",
    "is_special": false,
    "cases": [
      [
        "([2, 3, 4, 5], [3, 4, 5, 6], 5)",
        "7"
      ],
      [
        "([1, 2, 3], [10, 15, 40], 6)",
        "65"
      ],
      [
        "([10, 20, 30], [60, 100, 120], 50)",
        "220"
      ],
      [
        "([5], [10], 3)",
        "0"
      ],
      [
        "([], [], 10)",
        "0"
      ],
      [
        "([3, 2, 1], [10, 20, 30], 0)",
        "0"
      ],
      [
        "([4, 5, 1], [1, 2, 3], 4)",
        "3"
      ],
      [
        "([1, 1, 1], [10, 20, 30], 2)",
        "50"
      ]
    ]
  },
  "6.05": {
    "fn": "solution_605",
    "is_special": false,
    "cases": [
      [
        "([[1, 3, 1], [1, 5, 1], [4, 2, 1]],)",
        "7"
      ],
      [
        "([[1, 2, 3], [4, 5, 6]],)",
        "12"
      ],
      [
        "([[5]],)",
        "5"
      ],
      [
        "([[1, 2], [1, 1]],)",
        "3"
      ],
      [
        "([[1, 10, 1], [1, 10, 1], [1, 1, 1]],)",
        "5"
      ],
      [
        "([[0, 0], [0, 0]],)",
        "0"
      ],
      [
        "([[1, 2, 5], [3, 2, 1]],)",
        "6"
      ]
    ]
  },
  "6.06": {
    "fn": "solution_606",
    "is_special": false,
    "cases": [
      [
        "('3[a]2[bc]',)",
        "'aaabcbc'"
      ],
      [
        "('3[a2[c]]',)",
        "'accaccacc'"
      ],
      [
        "('2[abc]3[cd]ef',)",
        "'abcabccdcdcdef'"
      ],
      [
        "('abc',)",
        "'abc'"
      ],
      [
        "('10[a]',)",
        "'aaaaaaaaaa'"
      ],
      [
        "('2[2[b]]',)",
        "'bbbb'"
      ],
      [
        "('',)",
        "''"
      ],
      [
        "('2[a]3[b2[c]]',)",
        "'aabccbccbcc'"
      ]
    ]
  },
  "6.07": {
    "fn": "solution_607",
    "is_special": false,
    "cases": [
      [
        "('apple:5, banana:10, apple:3',)",
        "{'apple': 8, 'banana': 10}"
      ],
      [
        "(' milk : 2 , tea:5 , milk : 3 ',)",
        "{'milk': 5, 'tea': 5}"
      ],
      [
        "('item1:10, item2:invalid, :5, item3:-2, item4:0, item1:5',)",
        "{'item1': 15}"
      ],
      [
        "('a:1,,b:2, c:d , , : ',)",
        "{'a': 1, 'b': 2}"
      ],
      [
        "('',)",
        "{}"
      ],
      [
        "('bad_format_without_colon, : , 123:abc',)",
        "{}"
      ],
      [
        "('item@bad:5, good_item:10',)",
        "{'good_item': 10}"
      ],
      [
        "('book_1:50, book_2:30, book_1:20',)",
        "{'book_1': 70, 'book_2': 30}"
      ]
    ]
  },
  "6.08": {
    "fn": "solution_608",
    "is_special": false,
    "cases": [
      [
        "([[1, 2, 3], [4, 5, 6], [7, 8, 9]],)",
        "[7, 4, 1, 2, 3, 6, 9, 8, 5]"
      ],
      [
        "([[1, 2], [3, 4], [5, 6]],)",
        "[5, 3, 1, 2, 4, 6]"
      ],
      [
        "([[1, 2, 3, 4]],)",
        "[1, 2, 3, 4]"
      ],
      [
        "([[1], [2], [3]],)",
        "[3, 2, 1]"
      ],
      [
        "([[42]],)",
        "[42]"
      ],
      [
        "([],)",
        "[]"
      ],
      [
        "([[1, 2], [3, 4]],)",
        "[3, 1, 2, 4]"
      ]
    ]
  },
  "6.09": {
    "fn": "solution_609",
    "is_special": false,
    "cases": [
      [
        "([{'id': 'A', 'doanh_thu': 100, 'danh_gia': 4.5, 'luot_xem': 10}, {'id': 'B', 'doanh_thu': 100, 'danh_gia': 4.8, 'luot_xem': 5}], 1)",
        "['B']"
      ],
      [
        "([{'id': 'A', 'doanh_thu': 100, 'danh_gia': 4.5, 'luot_xem': 10}, {'id': 'B', 'doanh_thu': 100, 'danh_gia': 4.5, 'luot_xem': 20}], 2)",
        "['B', 'A']"
      ],
      [
        "([{'id': 'Z', 'doanh_thu': 50, 'danh_gia': 4.0, 'luot_xem': 100}, {'id': 'A', 'doanh_thu': 50, 'danh_gia': 4.0, 'luot_xem': 100}], 2)",
        "['A', 'Z']"
      ],
      [
        "([{'id': 'X', 'doanh_thu': 200, 'danh_gia': 5.0, 'luot_xem': 1}], 0)",
        "[]"
      ],
      [
        "([], 5)",
        "[]"
      ],
      [
        "([{'id': 'P1', 'doanh_thu': 10, 'danh_gia': 3.0, 'luot_xem': 5}, {'id': 'P2', 'doanh_thu': 20, 'danh_gia': 4.0, 'luot_xem': 10}, {'id': 'P3', 'doanh_thu': 15, 'danh_gia': 4.5, 'luot_xem': 8}], 5)",
        "['P2', 'P3', 'P1']"
      ],
      [
        "([{'id': 'M1', 'doanh_thu': 50, 'danh_gia': 4.0, 'luot_xem': 30}], 1)",
        "['M1']"
      ]
    ]
  },
  "6.10": {
    "fn": "solution_610",
    "is_special": false,
    "cases": [
      [
        "([(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], 2)",
        "{'tong_thoi_gian': 8, 'cho_trung_binh': 0.5, 'phuc_vu_boi_quay': [2, 2]}"
      ],
      [
        "([(1, 0, 10)], 1)",
        "{'tong_thoi_gian': 10, 'cho_trung_binh': 0.0, 'phuc_vu_boi_quay': [1]}"
      ],
      [
        "([(1, 0, 2), (2, 0, 3), (3, 0, 1)], 3)",
        "{'tong_thoi_gian': 3, 'cho_trung_binh': 0.0, 'phuc_vu_boi_quay': [1, 1, 1]}"
      ],
      [
        "([], 2)",
        "{'tong_thoi_gian': 0, 'cho_trung_binh': 0.0, 'phuc_vu_boi_quay': [0, 0]}"
      ],
      [
        "([(1, 0, 4), (2, 1, 4), (3, 2, 4)], 1)",
        "{'tong_thoi_gian': 12, 'cho_trung_binh': 3.0, 'phuc_vu_boi_quay': [3]}"
      ],
      [
        "([(1, 5, 2), (2, 10, 3)], 2)",
        "{'tong_thoi_gian': 13, 'cho_trung_binh': 0.0, 'phuc_vu_boi_quay': [2, 0]}"
      ],
      [
        "([(1, 0, 5), (2, 0, 5)], 2)",
        "{'tong_thoi_gian': 5, 'cho_trung_binh': 0.0, 'phuc_vu_boi_quay': [1, 1]}"
      ]
    ]
  },
  "6.11": {
    "fn": "solution_611",
    "is_special": false,
    "cases": [
      [
        "([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)",
        "15"
      ],
      [
        "([3, 2, 2, 4, 1, 4], 3)",
        "6"
      ],
      [
        "([1, 2, 3, 1, 1], 4)",
        "3"
      ],
      [
        "([10], 1)",
        "10"
      ],
      [
        "([5, 5, 5, 5], 2)",
        "10"
      ],
      [
        "([5, 5, 5, 5], 4)",
        "5"
      ],
      [
        "([1, 2, 3, 4], 1)",
        "10"
      ]
    ]
  },
  "6.12": {
    "fn": "solution_612",
    "is_special": false,
    "cases": [
      [
        "(5, [[0, 1], [1, 2], [3, 4]])",
        "(2, 3, 2)"
      ],
      [
        "(5, [[0, 1], [1, 2], [2, 3], [3, 4]])",
        "(1, 5, 5)"
      ],
      [
        "(4, [])",
        "(4, 1, 1)"
      ],
      [
        "(6, [[0, 1], [0, 2], [1, 2], [3, 4]])",
        "(3, 3, 1)"
      ],
      [
        "(1, [])",
        "(1, 1, 1)"
      ],
      [
        "(0, [])",
        "(0, 0, 0)"
      ],
      [
        "(4, [[0, 1], [0, 1], [2, 3]])",
        "(2, 2, 2)"
      ]
    ]
  },
  "6.13": {
    "fn": "kt_6_13",
    "is_special": true,
    "doc": "Kiem tra lop KhoHang.",
    "src": "def kt_6_13(m):\n    \"\"\"Kiem tra lop KhoHang.\"\"\"\n    kho = m.KhoHang(canh_bao_ton_it=5)\n    assert kho.ton_kho(\"SP01\") == 0\n    assert kho.thong_tin(\"SP01\") is None\n    kho.nhap_hang(\"SP01\", \"Ao thun\", 10, 150000)\n    kho.nhap_hang(\"SP02\", \"Quan jean\", 3, 300000)\n    kho.nhap_hang(\"SP03\", \"Giay sneaker\", 2, 500000)\n    assert kho.ton_kho(\"SP01\") == 10\n    assert kho.ton_kho(\"SP02\") == 3\n    assert kho.thong_tin(\"SP01\") == {\n        \"ma_sp\": \"SP01\",\n        \"ten_sp\": \"Ao thun\",\n        \"so_luong\": 10,\n        \"gia_nhap\": 150000,\n    }\n    # Nhap so luong am hoac gia am -> bo qua\n    kho.nhap_hang(\"SP01\", \"Ao thun\", -5, 100000)\n    assert kho.ton_kho(\"SP01\") == 10\n    kho.nhap_hang(\"SP01\", \"Ao thun\", 5, -100)\n    assert kho.ton_kho(\"SP01\") == 10\n    # Nhap them cap nhat so luong va gia\n    kho.nhap_hang(\"SP01\", \"Ao thun\", 5, 160000)\n    assert kho.ton_kho(\"SP01\") == 15\n    assert kho.thong_tin(\"SP01\")[\"gia_nhap\"] == 160000\n    # Xuat hang\n    assert kho.xuat_hang(\"SP01\", 20) is False, \"Khong du hang nhung van cho xuat\"\n    assert kho.xuat_hang(\"SP01\", -1) is False, \"So luong xuat <= 0 phai tra ve False\"\n    assert kho.xuat_hang(\"SP99\", 1) is False, \"Ma sp khong ton tai phai tra ve False\"\n    assert kho.xuat_hang(\"SP01\", 12) is True\n    assert kho.ton_kho(\"SP01\") == 3\n    # Kiem tra danh sach canh bao (SP01: 3, SP02: 3, SP03: 2) -> sap tang so luong, trung thi ma A-Z\n    assert kho.danh_sach_canh_bao() == [\"SP03\", \"SP01\", \"SP02\"]\n    # Xuat het SP03 -> ton kho = 0 -> khong con trong danh sach canh bao\n    assert kho.xuat_hang(\"SP03\", 2) is True\n    assert kho.ton_kho(\"SP03\") == 0\n    assert kho.danh_sach_canh_bao() == [\"SP01\", \"SP02\"]\n    # Tong gia tri kho: SP01: 3 * 160000 = 480000, SP02: 3 * 300000 = 900000, SP03: 0 * 500000 = 0 -> 1380000\n    assert kho.tong_gia_tri_kho() == 1380000",
    "cases": []
  },
  "6.14": {
    "fn": "kt_6_14",
    "is_special": true,
    "doc": "Kiem tra lop TaiKhoan.",
    "src": "def kt_6_14(m):\n    \"\"\"Kiem tra lop TaiKhoan.\"\"\"\n    tk = m.TaiKhoan(\"Nguyen Van A\", 1000)\n    assert tk.xem_so_du() == 1000\n    assert tk.nap_tien(500, \"Thuong tet\") is True\n    assert tk.xem_so_du() == 1500\n    assert tk.nap_tien(-100) is False\n    assert tk.rut_tien(200, \"Mua sach\") is True\n    assert tk.xem_so_du() == 1300\n    assert tk.rut_tien(2000) is False, \"Rut qua so du phai tra ve False\"\n    assert tk.rut_tien(0) is False\n    assert tk.xem_so_du() == 1300\n    # Kiem tra lich su\n    ls = tk.lich_su_giao_dich()\n    assert len(ls) == 2\n    assert ls[0][\"loai\"] == \"NAP\" and ls[0][\"so_tien\"] == 500 and ls[0][\"so_du_sau\"] == 1500\n    assert ls[1][\"loai\"] == \"RUT\" and ls[1][\"so_tien\"] == 200 and ls[1][\"so_du_sau\"] == 1300\n    assert len(tk.lich_su_giao_dich(gioi_han=1)) == 1\n    assert tk.lich_su_giao_dich(gioi_han=1)[0][\"loai\"] == \"RUT\"\n    # Hoan tac 1 buoc (undo RUT 200 -> so du ve 1500)\n    assert tk.hoan_tac(1) == 1\n    assert tk.xem_so_du() == 1500\n    assert len(tk.lich_su_giao_dich()) == 1\n    # Hoan tac tiep 1 buoc (undo NAP 500 -> so du ve 1000)\n    assert tk.hoan_tac(1) == 1\n    assert tk.xem_so_du() == 1000\n    assert len(tk.lich_su_giao_dich()) == 0\n    # Hoan tac khi lich su rong\n    assert tk.hoan_tac(1) == 0\n    # Test truong hop khong du so du de hoan tac NAP\n    tk2 = m.TaiKhoan(\"Le Thi B\", 0)\n    tk2.nap_tien(1000)\n    tk2.rut_tien(800)\n    assert tk2.hoan_tac(2) == 2\n    assert tk2.xem_so_du() == 0\n    # Test so du ban dau am\n    tk3 = m.TaiKhoan(\"Tran C\", -500)\n    assert tk3.xem_so_du() == 0",
    "cases": []
  },
  "6.15": {
    "fn": "kt_6_15",
    "is_special": true,
    "doc": "Kiem tra lop LRUCache.",
    "src": "def kt_6_15(m):\n    \"\"\"Kiem tra lop LRUCache.\"\"\"\n    import ast\n    import inspect\n    nguon = inspect.getsource(m)\n    tree = ast.parse(nguon)\n    for node in ast.walk(tree):\n        if isinstance(node, ast.Import):\n            for alias in node.names:\n                assert alias.name != \"functools\", \"Khong duoc import functools\"\n        elif isinstance(node, ast.ImportFrom):\n            assert node.module != \"functools\", \"Khong duoc import tu functools\"\n\n    cache = m.LRUCache(2)\n    assert cache.do_dai() == 0\n    assert cache.get(1) == -1\n    cache.put(1, 10)\n    cache.put(2, 20)\n    assert cache.do_dai() == 2\n    assert cache.danh_sach_keys() == [1, 2]\n    # Truy cap key 1 -> 1 tro thanh MRU\n    assert cache.get(1) == 10\n    assert cache.danh_sach_keys() == [2, 1]\n    # Put key 3 -> day dung luong -> loai bo LRU la key 2\n    cache.put(3, 30)\n    assert cache.get(2) == -1, \"Key 2 phai bi loai bo vi la LRU\"\n    assert cache.danh_sach_keys() == [1, 3]\n    # Cap nhat gia tri key 1\n    cache.put(1, 100)\n    assert cache.get(1) == 100\n    assert cache.danh_sach_keys() == [3, 1]\n    # Put key 4 -> loai bo key 3\n    cache.put(4, 40)\n    assert cache.get(3) == -1\n    assert cache.get(4) == 40\n    assert cache.danh_sach_keys() == [1, 4]\n    # Xoa phan tu\n    assert cache.xoa(99) is False\n    assert cache.xoa(1) is True\n    assert cache.get(1) == -1\n    assert cache.do_dai() == 1\n    assert cache.danh_sach_keys() == [4]",
    "cases": []
  }
};
