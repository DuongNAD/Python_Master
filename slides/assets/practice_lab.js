/* Python Master 2026 Interactive Practice & Challenge Lab */
(function () {
  'use strict';

  const KATA_DATA = {
  "1": {
    "name": "Nhóm 1 · Đọc hiểu & Điền chỗ trống (Vòng loại 440đ)",
    "items": [
      {
        "id": "1.01",
        "fn": "dem_nguyen_am",
        "title": "Bài 1.01 · dem_nguyen_am",
        "doc": "Dem so nguyen am (a e i o u, khong phan biet hoa thuong) trong chuoi s.",
        "starter": "def dem_nguyen_am(s: str):\n    \"\"\"Dem so nguyen am (a e i o u, khong phan biet hoa thuong) trong chuoi s.\"\"\"\n    nguyen_am = \"aeiou\"\n    dem = 0\n    for ky_tu in s.lower():\n        if ky_tu in nguyen_am:\n            dem += 1\n    return dem",
        "solution": "def dem_nguyen_am(s):\n    \"\"\"Dem so nguyen am (a e i o u, khong phan biet hoa thuong) trong chuoi s.\"\"\"\n    nguyen_am = \"aeiou\"\n    dem = 0\n    for ky_tu in s.lower():  # <-- cho trong (1)\n        if ky_tu in nguyen_am:  # <-- cho trong (2)\n            dem += 1\n    return dem"
      },
      {
        "id": "1.02",
        "fn": "chuan_hoa_ten",
        "title": "Bài 1.02 · chuan_hoa_ten",
        "doc": "Chuan hoa ho ten: bo khoang trang thua o dau/cuoi va giua cac tu,\n    viet hoa chu cai dau moi tu, con lai viet thuong.\n    \"  nGUYEN   anh   duong \" -> \"Nguyen Anh Duong\"",
        "starter": "def chuan_hoa_ten(s):\n    \"\"\"\n    Chuan hoa ho ten: bo khoang trang thua o dau/cuoi va giua cac tu,\n    viet hoa chu cai dau moi tu, con lai viet thuong.\n    \"  nGUYEN   anh   duong \" -> \"Nguyen Anh Duong\"\n    \"\"\"\n    cac_tu = s.split()\n    ket_qua = [tu.capitalize() for tu in cac_tu]\n    return \" \".join(ket_qua)",
        "solution": "def chuan_hoa_ten(s):\n    \"\"\"\n    Chuan hoa ho ten: bo khoang trang thua o dau/cuoi va giua cac tu,\n    viet hoa chu cai dau moi tu, con lai viet thuong.\n    \"  nGUYEN   anh   duong \" -> \"Nguyen Anh Duong\"\n    \"\"\"\n    cac_tu = s.split()  # <-- cho trong (1)\n    ket_qua = [tu.capitalize() for tu in cac_tu]  # <-- cho trong (2)\n    return \" \".join(ket_qua)  # <-- cho trong (3)"
      },
      {
        "id": "1.03",
        "fn": "tong_chu_so",
        "title": "Bài 1.03 · tong_chu_so",
        "doc": "Tra ve tong cac chu so cua so nguyen n (n co the am). tong_chu_so(-4567) -> 22",
        "starter": "def tong_chu_so(n):\n    \"\"\"Tra ve tong cac chu so cua so nguyen n (n co the am). tong_chu_so(-4567) -> 22\"\"\"\n    n = abs(n)\n    tong = 0\n    while n>0:\n        tong += n %10\n        n = n//10\n    return tong",
        "solution": "def tong_chu_so(n):\n    \"\"\"Tra ve tong cac chu so cua so nguyen n (n co the am).\"\"\"\n    n = abs(n)\n    tong = 0\n    while n > 0:  # <-- cho trong (1)\n        tong += n % 10  # <-- cho trong (2)\n        n = n // 10  # <-- cho trong (3)\n    return tong"
      },
      {
        "id": "1.04",
        "fn": "max_thu_hai",
        "title": "Bài 1.04 · max_thu_hai",
        "doc": "Tra ve gia tri lon thu hai trong cac gia tri PHAN BIET cua arr.\n    Neu khong ton tai (mang co it hon 2 gia tri phan biet) tra ve None.\n    [3,1,4,1,5] -> 4 ; [7,7,7] -> None",
        "starter": "def max_thu_hai(arr):\n    \"\"\"\n    Tra ve gia tri lon thu hai trong cac gia tri PHAN BIET cua arr.\n    Neu khong ton tai (mang co it hon 2 gia tri phan biet) tra ve None.\n    [3,1,4,1,5] -> 4 ; [7,7,7] -> None\n    \"\"\"\n    phan_biet = set(arr)\n    if len(phan_biet) < 2:\n        return None\n    phan_biet.remove(max(phan_biet))\n    return max(phan_biet)",
        "solution": "def max_thu_hai(arr):\n    \"\"\"\n    Tra ve gia tri lon thu hai trong cac gia tri PHAN BIET cua arr.\n    Neu khong ton tai (mang co it hon 2 gia tri phan biet) tra ve None.\n    \"\"\"\n    phan_biet = set(arr)  # <-- cho trong (1)\n    if len(phan_biet) < 2:\n        return None\n    phan_biet.remove(max(phan_biet))  # <-- cho trong (2)\n    return max(phan_biet)"
      },
      {
        "id": "1.05",
        "fn": "dem_tan_suat",
        "title": "Bài 1.05 · dem_tan_suat",
        "doc": "Tra ve dict {phan_tu: so_lan_xuat_hien}. Chi duoc dung 1 dong trong vong lap.",
        "starter": "def dem_tan_suat(arr):\n    \"\"\"Tra ve dict {phan_tu: so_lan_xuat_hien}. Chi duoc dung 1 dong trong vong lap.\"\"\"\n    bang = {}\n    for x in arr:\n        bang[x] = bang.get(x,0)+1\n    return bang",
        "solution": "def dem_tan_suat(arr):\n    \"\"\"Tra ve dict {phan_tu: so_lan_xuat_hien}.\"\"\"\n    bang = {}\n    for x in arr:\n        bang[x] = bang.get(x, 0) + 1  # <-- cho trong (1)\n    return bang"
      },
      {
        "id": "1.06",
        "fn": "dao_thu_tu_tu",
        "title": "Bài 1.06 · dao_thu_tu_tu",
        "doc": "Dao nguoc thu tu cac tu trong cau, chuan hoa khoang trang ve 1 dau cach.\n    \"hom nay troi dep\" -> \"dep troi nay hom\"",
        "starter": "def dao_thu_tu_tu(s):\n    \"\"\"\n    Dao nguoc thu tu cac tu trong cau, chuan hoa khoang trang ve 1 dau cach.\n    \"hom nay troi dep\" -> \"dep troi nay hom\"\n    \"\"\"\n    cac_tu = s.split()\n    cac_tu.reverse()\n    return \" \".join(cac_tu)",
        "solution": "def dao_thu_tu_tu(s):\n    \"\"\"\n    Dao nguoc thu tu cac tu trong cau, chuan hoa khoang trang ve 1 dau cach.\n    \"hom nay troi dep\" -> \"dep troi nay hom\"\n    \"\"\"\n    cac_tu = s.split()\n    cac_tu.reverse()  # <-- cho trong (1)\n    return \" \".join(cac_tu)"
      },
      {
        "id": "1.07",
        "fn": "la_doi_xung",
        "title": "Bài 1.07 · la_doi_xung",
        "doc": "Kiem tra chuoi doi xung, BO QUA ky tu khong phai chu/so va khong phan biet hoa thuong.\n    \"A man, a plan, a canal: Panama\" -> True ; \"race a car\" -> False",
        "starter": "def la_doi_xung(s):\n    \"\"\"\n    Kiem tra chuoi doi xung, BO QUA ky tu khong phai chu/so va khong phan biet hoa thuong.\n    \"A man, a plan, a canal: Panama\" -> True ; \"race a car\" -> False\n    \"\"\"\n    sach = [c.lower() for c in s if c.isalnum()]\n    return sach == sach[::-1]",
        "solution": "def la_doi_xung(s):\n    \"\"\"\n    Kiem tra chuoi doi xung, BO QUA ky tu khong phai chu/so va khong phan biet hoa thuong.\n    \"A man, a plan, a canal: Panama\" -> True\n    \"\"\"\n    sach = [c.lower() for c in s if c.isalnum()]  # <-- cho trong (1)\n    return sach == sach[::-1]  # <-- cho trong (2)"
      },
      {
        "id": "1.08",
        "fn": "gop_dict_cong_don",
        "title": "Bài 1.08 · gop_dict_cong_don",
        "doc": "Gop 2 dict. Khoa trung nhau thi CONG gia tri. Khong duoc sua a hay b.\n    {\"x\": 1, \"y\": 2} + {\"y\": 5, \"z\": 3} -> {\"x\": 1, \"y\": 7, \"z\": 3}",
        "starter": "def gop_dict_cong_don(a, b):\n    \"\"\"\n    Gop 2 dict. Khoa trung nhau thi CONG gia tri. Khong duoc sua a hay b.\n    {\"x\": 1, \"y\": 2} + {\"y\": 5, \"z\": 3} -> {\"x\": 1, \"y\": 7, \"z\": 3}\n    \"\"\"\n    ket_qua = a.copy()\n    for khoa, gia_tri in b.items():\n        ket_qua[khoa] = ket_qua.get(khoa,0)+gia_tri\n    return ket_qua",
        "solution": "def gop_dict_cong_don(a, b):\n    \"\"\"\n    Gop 2 dict. Khoa trung nhau thi CONG gia tri.\n    {\"x\": 1, \"y\": 2} + {\"y\": 5, \"z\": 3} -> {\"x\": 1, \"y\": 7, \"z\": 3}\n    \"\"\"\n    ket_qua = dict(a)  # <-- cho trong (1)\n    for khoa, gia_tri in b.items():  # <-- cho trong (2)\n        ket_qua[khoa] = ket_qua.get(khoa, 0) + gia_tri  # <-- cho trong (3)\n    return ket_qua"
      },
      {
        "id": "1.09",
        "fn": "loc_so_nguyen_to",
        "title": "Bài 1.09 · loc_so_nguyen_to",
        "doc": "Tra ve list cac so nguyen to trong arr, giu nguyen thu tu.",
        "starter": "def loc_so_nguyen_to(arr):\n    \"\"\"Tra ve list cac so nguyen to trong arr, giu nguyen thu tu.\"\"\"\n    def la_nguyen_to(n):\n        if n < 2:\n            return False\n        i = 2\n        while i*i <= n:          # dieu kien nay quyet dinh do phuc tap O(sqrt(n))\n            if n % i == 0:\n                return False\n            i += 1\n        return True\n\n    return [x for x in arr if la_nguyen_to(x)]",
        "solution": "def loc_so_nguyen_to(arr):\n    \"\"\"Tra ve list cac so nguyen to trong arr, giu nguyen thu tu.\"\"\"\n    def la_nguyen_to(n):\n        if n < 2:\n            return False\n        i = 2\n        while i * i <= n:  # <-- cho trong (1)\n            if n % i == 0:\n                return False\n            i += 1\n        return True\n\n    return [x for x in arr if la_nguyen_to(x)]  # <-- cho trong (2)"
      },
      {
        "id": "1.10",
        "fn": "nen_chuoi",
        "title": "Bài 1.10 · nen_chuoi",
        "doc": "Nen chuoi kieu run-length: \"aaabbc\" -> \"a3b2c1\" ; \"\" -> \"\" ; \"abc\" -> \"a1b1c1\".",
        "starter": "def nen_chuoi(s):\n    \"\"\"Nen chuoi kieu run-length: \"aaabbc\" -> \"a3b2c1\" ; \"\" -> \"\" ; \"abc\" -> \"a1b1c1\".\"\"\"\n    if not s:\n        return \"\"\n    ket_qua = []\n    ky_tu_truoc = s[0]\n    dem = 1\n    for c in s[1:]:\n        if c == ky_tu_truoc:\n            dem += 1\n        else:\n            ket_qua.append(ky_tu_truoc + str(dem))\n            ky_tu_truoc = c\n            dem = 1\n    ket_qua.append(ky_tu_truoc + str(dem))\n    return \"\".join(ket_qua)",
        "solution": "def nen_chuoi(s):\n    \"\"\"\n    Nen chuoi theo kieu run-length: \"aaabbc\" -> \"a3b2c1\". Chuoi rong -> \"\".\n    \"\"\"\n    if not s:\n        return \"\"\n    ket_qua = []\n    ky_tu_truoc = s[0]\n    dem = 1\n    for c in s[1:]:  # <-- cho trong (1)\n        if c == ky_tu_truoc:\n            dem += 1\n        else:\n            ket_qua.append(ky_tu_truoc + str(dem))  # <-- cho trong (2)\n            ky_tu_truoc = c\n            dem = 1\n    ket_qua.append(ky_tu_truoc + str(dem))\n    return \"\".join(ket_qua)"
      },
      {
        "id": "1.11",
        "fn": "xoay_phai",
        "title": "Bài 1.11 · xoay_phai",
        "doc": "Xoay mang sang PHAI k buoc. k co the lon hon len(arr). Tra ve list MOI.\n    [1,2,3,4,5], k=2 -> [4,5,1,2,3] ; [1,2,3], k=7 -> [3,1,2]",
        "starter": "def xoay_phai(arr, k):\n    \"\"\"\n    Xoay mang sang PHAI k buoc. k co the lon hon len(arr). Tra ve list MOI.\n    [1,2,3,4,5], k=2 -> [4,5,1,2,3] ; [1,2,3], k=7 -> [3,1,2]\n    \"\"\"\n    if not arr:\n        return []\n    k = ___1___\n    return ___2___ if k else list(arr)",
        "solution": "def xoay_phai(arr, k):\n    \"\"\"\n    Xoay mang sang PHAI k buoc. k co the lon hon len(arr).\n    [1,2,3,4,5], k=2 -> [4,5,1,2,3]\n    \"\"\"\n    if not arr:\n        return []\n    k = k % len(arr)  # <-- cho trong (1)\n    return arr[-k:] + arr[:-k] if k else list(arr)  # <-- cho trong (2)"
      },
      {
        "id": "1.12",
        "fn": "tim_cap_tong",
        "title": "Bài 1.12 · tim_cap_tong",
        "doc": "Tim CAP CHI SO (i, j) voi i<j sao cho arr[i]+arr[j]==target. Tra ve cap dau tien\n    tim duoc khi duyet j tu trai sang phai; khong co thi None. Do phuc tap O(n).\n    [2,7,11,15], target=9 -> (0, 1)",
        "starter": "def tim_cap_tong(arr, target):\n    \"\"\"\n    Tim CAP CHI SO (i, j) voi i<j sao cho arr[i]+arr[j]==target. Tra ve cap dau tien\n    tim duoc khi duyet j tu trai sang phai; khong co thi None. Do phuc tap O(n).\n    [2,7,11,15], target=9 -> (0, 1)\n    \"\"\"\n    da_gap = {}                 # gia_tri -> chi so\n    for j, x in enumerate(arr):\n        can = ___1___\n        if ___2___:\n            return (da_gap[can], j)\n        da_gap[x] = ___3___\n    return None",
        "solution": "def tim_cap_tong(arr, target):\n    \"\"\"\n    Tim CAP CHI SO (i, j) i<j sao cho arr[i]+arr[j]==target. Tra ve cap dau tien\n    tim duoc khi duyet j tu trai sang phai; khong co thi tra ve None. Do phuc tap O(n).\n    \"\"\"\n    da_gap = {}  # gia_tri -> chi so\n    for j, x in enumerate(arr):\n        can = target - x  # <-- cho trong (1)\n        if can in da_gap:  # <-- cho trong (2)\n            return (da_gap[can], j)\n        da_gap[x] = j  # <-- cho trong (3)\n    return None"
      },
      {
        "id": "1.13",
        "fn": "xep_hang_hoc_sinh",
        "title": "Bài 1.13 · xep_hang_hoc_sinh",
        "doc": "hoc_sinh: list dict {\"ten\": str, \"diem\": float, \"tuoi\": int}\n    Sap xep: diem GIAM dan; cung diem thi tuoi TANG dan; cung ca hai thi ten A-Z.\n    Tra ve list ten.",
        "starter": "def xep_hang_hoc_sinh(hoc_sinh):\n    \"\"\"\n    hoc_sinh: list dict {\"ten\": str, \"diem\": float, \"tuoi\": int}\n    Sap xep: diem GIAM dan; cung diem thi tuoi TANG dan; cung ca hai thi ten A-Z.\n    Tra ve list ten.\n    \"\"\"\n    da_sap = sorted(hoc_sinh, key=lambda h: ___1___)\n    return ___2___",
        "solution": "def xep_hang_hoc_sinh(hoc_sinh):\n    \"\"\"\n    hoc_sinh: list dict {\"ten\": str, \"diem\": float, \"tuoi\": int}\n    Sap xep: diem GIAM dan; cung diem thi tuoi TANG dan; cung ca hai thi ten A-Z.\n    Tra ve list ten.\n    \"\"\"\n    da_sap = sorted(hoc_sinh, key=lambda h: (-h[\"diem\"], h[\"tuoi\"], h[\"ten\"]))  # <-- cho trong (1)\n    return [h[\"ten\"] for h in da_sap]  # <-- cho trong (2)"
      },
      {
        "id": "1.14",
        "fn": "doi_co_so",
        "title": "Bài 1.14 · doi_co_so",
        "doc": "Doi so nguyen khong am n sang he co so b (2 <= b <= 16), tra ve chuoi VIET HOA.\n    n=0 -> \"0\" ; doi_co_so(255, 16) -> \"FF\"",
        "starter": "def doi_co_so(n, b):\n    \"\"\"\n    Doi so nguyen khong am n sang he co so b (2 <= b <= 16), tra ve chuoi VIET HOA.\n    n=0 -> \"0\" ; doi_co_so(255, 16) -> \"FF\"\n    \"\"\"\n    if n == 0:\n        return \"0\"\n    chu_so = \"0123456789ABCDEF\"\n    ket_qua = []\n    while n > 0:\n        ket_qua.append(___1___)\n        n = ___2___\n    return ___3___",
        "solution": "def doi_co_so(n, b):\n    \"\"\"\n    Doi so nguyen khong am n sang he co so b (2 <= b <= 16), tra ve chuoi HOA.\n    n=0 -> \"0\". 255 he 16 -> \"FF\".\n    \"\"\"\n    if n == 0:\n        return \"0\"\n    chu_so = \"0123456789ABCDEF\"\n    ket_qua = []\n    while n > 0:\n        ket_qua.append(chu_so[n % b])  # <-- cho trong (1)\n        n = n // b  # <-- cho trong (2)\n    return \"\".join(reversed(ket_qua))  # <-- cho trong (3)"
      },
      {
        "id": "1.15",
        "fn": "ngoac_hop_le",
        "title": "Bài 1.15 · ngoac_hop_le",
        "doc": "Kiem tra chuoi ngoac () [] {} co hop le khong (ky tu khac duoc bo qua).\n    \"{[()]}\" -> True ; \"([)]\" -> False ; \"\" -> True",
        "starter": "def ngoac_hop_le(s):\n    \"\"\"\n    Kiem tra chuoi ngoac () [] {} co hop le khong (ky tu khac duoc bo qua).\n    \"{[()]}\" -> True ; \"([)]\" -> False ; \"\" -> True\n    \"\"\"\n    cap = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    ngan_xep = []\n    for c in s:\n        if c in \"([{\":\n            ngan_xep.append(___1___)\n        elif c in cap:\n            if not ngan_xep or ___2___:\n                return False\n    return ___3___",
        "solution": "def ngoac_hop_le(s):\n    \"\"\"\n    Kiem tra chuoi ngoac () [] {} co hop le khong. \"{[()]}\" -> True, \"([)]\" -> False\n    \"\"\"\n    cap = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    ngan_xep = []\n    for c in s:\n        if c in \"([{\":\n            ngan_xep.append(c)  # <-- cho trong (1)\n        elif c in cap:\n            if not ngan_xep or ngan_xep.pop() != cap[c]:  # <-- cho trong (2)\n                return False\n    return len(ngan_xep) == 0  # <-- cho trong (3)"
      }
    ]
  },
  "2": {
    "name": "Nhóm 2 · Debugging sửa 1 dòng (Vòng loại 280đ)",
    "items": [
      {
        "id": "2.01",
        "fn": "trung_binh",
        "title": "Bài 2.01 · trung_binh",
        "doc": "Trung binh cong cac phan tu. Mang rong -> tra ve 0.",
        "starter": "def trung_binh(arr):\n    \"\"\"Trung binh cong cac phan tu. Mang rong -> tra ve 0.\"\"\"\n    if not arr:\n        return 0\n    tong = 0\n    for i in range(1, len(arr)):\n        tong += arr[i]\n    return tong / len(arr)",
        "solution": "def trung_binh(arr):\n    \"\"\"Trung binh cong. LOI GOC: range(1, ...) bo mat phan tu dau tien.\"\"\"\n    if not arr:\n        return 0\n    tong = 0\n    for i in range(0, len(arr)):\n        tong += arr[i]\n    return tong / len(arr)"
      },
      {
        "id": "2.02",
        "fn": "them_muc",
        "title": "Bài 2.02 · them_muc",
        "doc": "Them muc vao danh sach roi tra ve danh sach do.\n    Neu KHONG truyen danh_sach, moi lan goi phai tao mot list MOI.\n      them_muc(1) -> [1]\n      them_muc(2) -> [2]     (khong phai [1, 2])",
        "starter": "def them_muc(muc, danh_sach=[]):\n    \"\"\"\n    Them muc vao danh sach roi tra ve danh sach do.\n    Neu KHONG truyen danh_sach, moi lan goi phai tao mot list MOI.\n      them_muc(1) -> [1]\n      them_muc(2) -> [2]     (khong phai [1, 2])\n    \"\"\"\n    danh_sach.append(muc)\n    return danh_sach",
        "solution": "def them_muc(muc, danh_sach=None):\n    \"\"\"\n    Them muc vao danh sach roi tra ve. Khong truyen danh_sach thi tao list moi.\n    LOI GOC: mutable default argument (danh_sach=[]) bi chia se giua cac lan goi.\n    \"\"\"\n    if danh_sach is None:\n        danh_sach = []\n    danh_sach.append(muc)\n    return danh_sach"
      },
      {
        "id": "2.03",
        "fn": "xoa_so_chan",
        "title": "Bài 2.03 · xoa_so_chan",
        "doc": "Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr.",
        "starter": "def xoa_so_chan(arr):\n    \"\"\"Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr.\"\"\"\n    for x in arr:\n        if x % 2 == 0:\n            arr.remove(x)\n    return arr",
        "solution": "def xoa_so_chan(arr):\n    \"\"\"\n    Xoa moi so chan khoi arr (sua TAI CHO) va tra ve chinh arr.\n    LOI GOC: vua duyet vua remove -> nhay phan tu.\n    \"\"\"\n    for i in range(len(arr) - 1, -1, -1):\n        if arr[i] % 2 == 0:\n            arr.pop(i)\n    return arr"
      },
      {
        "id": "2.04",
        "fn": "co_gia_tri",
        "title": "Bài 2.04 · co_gia_tri",
        "doc": "Tra ve True neu x co trong arr. Phai dung voi so lon va chuoi dai.",
        "starter": "def co_gia_tri(arr, x):\n    \"\"\"Tra ve True neu x co trong arr. Phai dung voi so lon va chuoi dai.\"\"\"\n    for phan_tu in arr:\n        if phan_tu is x:\n            return True\n    return False",
        "solution": "def co_gia_tri(arr, x):\n    \"\"\"\n    Kiem tra x co trong arr khong. LOI GOC: dung 'is' -> sai voi int > 256\n    va voi chuoi tao luc chay.\n    \"\"\"\n    for phan_tu in arr:\n        if phan_tu == x:\n            return True\n    return False"
      },
      {
        "id": "2.05",
        "fn": "phan_tu_giua",
        "title": "Bài 2.05 · phan_tu_giua",
        "doc": "Tra ve phan tu chinh giua (mang le) hoac phan tu ben TRAI cua giua (mang chan).\n    [1,2,3] -> 2 ; [1,2,3,4] -> 2 ; [] -> None",
        "starter": "def phan_tu_giua(arr):\n    \"\"\"\n    Tra ve phan tu chinh giua (mang le) hoac phan tu ben TRAI cua giua (mang chan).\n    [1,2,3] -> 2 ; [1,2,3,4] -> 2 ; [] -> None\n    \"\"\"\n    if not arr:\n        return None\n    return arr[(len(arr) - 1) / 2]",
        "solution": "def phan_tu_giua(arr):\n    \"\"\"\n    Tra ve phan tu o chinh giua (mang le) hoac phan tu ben TRAI cua giua (mang chan).\n    LOI GOC: dung '/' -> chi so la float -> TypeError.\n    \"\"\"\n    if not arr:\n        return None\n    return arr[(len(arr) - 1) // 2]"
      },
      {
        "id": "2.06",
        "fn": "tao_bang",
        "title": "Bài 2.06 · tao_bang",
        "doc": "Tao ma tran n x n toan 0, sau do dat duong cheo chinh = 1 (ma tran don vi).",
        "starter": "def tao_bang(n):\n    \"\"\"Tao ma tran n x n toan 0, sau do dat duong cheo chinh = 1 (ma tran don vi).\"\"\"\n    bang = [[0] * n] * n\n    for i in range(n):\n        bang[i][i] = 1\n    return bang",
        "solution": "def tao_bang(n):\n    \"\"\"\n    Tao ma tran n x n gom toan 0, roi dat duong cheo chinh = 1.\n    LOI GOC: [[0]*n]*n tao n THAM CHIEU den cung mot list.\n    \"\"\"\n    bang = [[0] * n for _ in range(n)]\n    for i in range(n):\n        bang[i][i] = 1\n    return bang"
      },
      {
        "id": "2.07",
        "fn": "xoa_gia_tri_rong",
        "title": "Bài 2.07 · xoa_gia_tri_rong",
        "doc": "Xoa moi khoa co gia tri rong (0, \"\", None, [], {}) khoi dict, sua TAI CHO.",
        "starter": "def xoa_gia_tri_rong(d):\n    \"\"\"Xoa moi khoa co gia tri rong (0, \"\", None, [], {}) khoi dict, sua TAI CHO.\"\"\"\n    for k in d:\n        if not d[k]:\n            del d[k]\n    return d",
        "solution": "def xoa_gia_tri_rong(d):\n    \"\"\"\n    Xoa moi khoa co gia tri \"rong\" (0, \"\", None, [], {}) khoi dict, sua TAI CHO.\n    LOI GOC: xoa khoa trong khi dang duyet -> RuntimeError.\n    \"\"\"\n    can_xoa = [k for k, v in d.items() if not v]\n    for k in can_xoa:\n        del d[k]\n    return d"
      },
      {
        "id": "2.08",
        "fn": "hoa_ky_tu_dau",
        "title": "Bài 2.08 · hoa_ky_tu_dau",
        "doc": "Viet hoa ky tu dau tien, giu nguyen phan con lai. \"\" -> \"\".",
        "starter": "def hoa_ky_tu_dau(s):\n    \"\"\"Viet hoa ky tu dau tien, giu nguyen phan con lai. \"\" -> \"\".\"\"\"\n    if not s:\n        return s\n    s[0] = s[0].upper()\n    return s",
        "solution": "def hoa_ky_tu_dau(s):\n    \"\"\"\n    Viet hoa ky tu dau tien cua chuoi, giu nguyen phan con lai.\n    LOI GOC: gan s[0] = ... -> chuoi la immutable -> TypeError.\n    \"\"\"\n    if not s:\n        return s\n    return s[0].upper() + s[1:]"
      },
      {
        "id": "2.09",
        "fn": "tim_max",
        "title": "Bài 2.09 · tim_max",
        "doc": "Gia tri lon nhat trong arr. Mang rong -> None. Phai dung ca khi moi so deu am.",
        "starter": "def tim_max(arr):\n    \"\"\"Gia tri lon nhat trong arr. Mang rong -> None. Phai dung ca khi moi so deu am.\"\"\"\n    if not arr:\n        return None\n    ket_qua = 0\n    for x in arr:\n        if x > ket_qua:\n            ket_qua = x\n    return ket_qua",
        "solution": "def tim_max(arr):\n    \"\"\"\n    Gia tri lon nhat. Mang rong -> None.\n    LOI GOC: khoi tao ket_qua = 0 -> sai khi moi phan tu deu am.\n    \"\"\"\n    if not arr:\n        return None\n    ket_qua = arr[0]\n    for x in arr[1:]:\n        if x > ket_qua:\n            ket_qua = x\n    return ket_qua"
      },
      {
        "id": "2.10",
        "fn": "ba_so_nho_nhat",
        "title": "Bài 2.10 · ba_so_nho_nhat",
        "doc": "Tra ve list 3 so nho nhat theo thu tu tang. It hon 3 phan tu -> tra ve toan bo da sap.\n    KHONG duoc sua doi arr goc.",
        "starter": "def ba_so_nho_nhat(arr):\n    \"\"\"\n    Tra ve list 3 so nho nhat theo thu tu tang. It hon 3 phan tu -> tra ve toan bo da sap.\n    KHONG duoc sua doi arr goc.\n    \"\"\"\n    return arr.sort()[:3]",
        "solution": "def ba_so_nho_nhat(arr):\n    \"\"\"\n    Tra ve list 3 so nho nhat (tang dan). It hon 3 phan tu thi tra ve toan bo da sap.\n    LOI GOC: return arr.sort()[:3] -> sort() tra ve None.\n    \"\"\"\n    da_sap = sorted(arr)\n    return da_sap[:3]"
      },
      {
        "id": "2.11",
        "fn": "tao_cac_ham_nhan",
        "title": "Bài 2.11 · tao_cac_ham_nhan",
        "doc": "Tra ve list n ham; ham thu i khi goi voi x phai tra ve x * i.\n      f = tao_cac_ham_nhan(3);  f[0](10) -> 0, f[1](10) -> 10, f[2](10) -> 20",
        "starter": "def tao_cac_ham_nhan(n):\n    \"\"\"\n    Tra ve list n ham; ham thu i khi goi voi x phai tra ve x * i.\n      f = tao_cac_ham_nhan(3);  f[0](10) -> 0, f[1](10) -> 10, f[2](10) -> 20\n    \"\"\"\n    cac_ham = []\n    for i in range(n):\n        cac_ham.append(lambda x: x * i)\n    return cac_ham",
        "solution": "def tao_cac_ham_nhan(n):\n    \"\"\"\n    Tra ve list n ham, ham thu i nhan doi so voi i.\n    LOI GOC: closure bat bien 'i' theo THAM CHIEU -> moi ham deu nhan voi n-1.\n    \"\"\"\n    cac_ham = []\n    for i in range(n):\n        cac_ham.append(lambda x, he_so=i: x * he_so)\n    return cac_ham"
      },
      {
        "id": "2.12",
        "fn": "fib",
        "title": "Bài 2.12 · fib",
        "doc": "Fibonacci co memo hoa: fib(0)=0, fib(1)=1, fib(10)=55.\n    Bo nho dem KHONG duoc chia se sai giua cac lan goi doc lap.",
        "starter": "def fib(n, ghi_nho={}):\n    \"\"\"\n    Fibonacci co memo hoa: fib(0)=0, fib(1)=1, fib(10)=55.\n    Bo nho dem KHONG duoc chia se sai giua cac lan goi doc lap.\n    \"\"\"\n    if n in ghi_nho:\n        return ghi_nho[n]\n    ghi_nho[n] = fib(n - 1, ghi_nho) + fib(n - 2, ghi_nho)\n    return ghi_nho[n]",
        "solution": "def fib(n, ghi_nho=None):\n    \"\"\"\n    Fibonacci: fib(0)=0, fib(1)=1. Co memo hoa.\n    LOI GOC: memo dung mutable default + thieu dieu kien dung cho n<=1.\n    \"\"\"\n    if ghi_nho is None:\n        ghi_nho = {}\n    if n <= 1:\n        return n\n    if n in ghi_nho:\n        return ghi_nho[n]\n    ghi_nho[n] = fib(n - 1, ghi_nho) + fib(n - 2, ghi_nho)\n    return ghi_nho[n]"
      },
      {
        "id": "2.13",
        "fn": "gan_bang",
        "title": "Bài 2.13 · gan_bang",
        "doc": "Tra ve True neu a va b bang nhau trong sai so 1e-9. gan_bang(0.1+0.2, 0.3) -> True",
        "starter": "def gan_bang(a, b):\n    \"\"\"Tra ve True neu a va b bang nhau trong sai so 1e-9. gan_bang(0.1+0.2, 0.3) -> True\"\"\"\n    return a == b",
        "solution": "def gan_bang(a, b):\n    \"\"\"\n    Kiem tra 2 so thuc bang nhau trong sai so 1e-9.\n    LOI GOC: so sanh == truc tiep -> 0.1+0.2 != 0.3.\n    \"\"\"\n    return abs(a - b) < 1e-9"
      },
      {
        "id": "2.14",
        "fn": "xoa_theo_chi_so",
        "title": "Bài 2.14 · xoa_theo_chi_so",
        "doc": "Tra ve list MOI da xoa phan tu tai CHI SO i. Chi so khong hop le -> ban sao arr.\n    KHONG duoc sua arr goc.",
        "starter": "def xoa_theo_chi_so(arr, i):\n    \"\"\"\n    Tra ve list MOI da xoa phan tu tai CHI SO i. Chi so khong hop le -> ban sao arr.\n    KHONG duoc sua arr goc.\n    \"\"\"\n    ban_sao = list(arr)\n    ban_sao.remove(i)\n    return ban_sao",
        "solution": "def xoa_theo_chi_so(arr, i):\n    \"\"\"\n    Xoa phan tu tai CHI SO i, tra ve arr moi. Chi so khong hop le -> tra ve ban sao arr.\n    LOI GOC: dung arr.remove(i) -> remove xoa theo GIA TRI, khong phai chi so.\n    \"\"\"\n    ban_sao = list(arr)\n    if 0 <= i < len(ban_sao):\n        ban_sao.pop(i)\n    return ban_sao"
      },
      {
        "id": "2.15",
        "fn": "dem_tu",
        "title": "Bài 2.15 · dem_tu",
        "doc": "Dem so tu trong s, cong don vao DEM_TOAN_CUC, tra ve so tu cua LAN GOI NAY.\n      dem_tu(\"a b\") -> 2, sau do DEM_TOAN_CUC == 2\n      dem_tu(\"c\")   -> 1, sau do DEM_TOAN_CUC == 3",
        "starter": "DEM_TOAN_CUC = 0\n\n\ndef dem_tu(s):\n    \"\"\"\n    Dem so tu trong s, cong don vao DEM_TOAN_CUC, tra ve so tu cua LAN GOI NAY.\n      dem_tu(\"a b\") -> 2, sau do DEM_TOAN_CUC == 2\n      dem_tu(\"c\")   -> 1, sau do DEM_TOAN_CUC == 3\n    \"\"\"\n    so_tu = len(s.split())\n    DEM_TOAN_CUC = DEM_TOAN_CUC + so_tu\n    return so_tu",
        "solution": "DEM_TOAN_CUC = 0\n\n\ndef dem_tu(s):\n    \"\"\"\n    Dem so tu trong chuoi va cong don vao bien toan cuc DEM_TOAN_CUC.\n    Tra ve so tu cua LAN GOI NAY.\n    LOI GOC: gan vao bien toan cuc ma khong khai bao global -> UnboundLocalError.\n    \"\"\"\n    global DEM_TOAN_CUC\n    so_tu = len(s.split())\n    DEM_TOAN_CUC = DEM_TOAN_CUC + so_tu\n    return so_tu"
      }
    ]
  },
  "3": {
    "name": "Nhóm 3 · Design tự viết hàm (Vòng loại 280đ)",
    "items": [
      {
        "id": "3.01",
        "fn": "thong_ke_diem",
        "title": "Bài 3.01 · thong_ke_diem",
        "doc": "diem: list so thuc. Tra ve dict:\n      {\"min\": .., \"max\": .., \"trung_binh\": lam tron 2 chu so, \"trung_vi\": ..}\n    List rong -> tra ve {} (dict rong).",
        "starter": "def thong_ke_diem(diem):\n    \"\"\"\n    diem: list so thuc. Tra ve dict:\n      {\"min\": .., \"max\": .., \"trung_binh\": lam tron 2 chu so, \"trung_vi\": ..}\n    List rong -> tra ve {} (dict rong).\n    \"\"\"\n    if not diem:\n        return {}\n        \n    n = len(diem)\n    s = sorted(diem)\n\n    if n%2 == 0:\n        trung_vi = (s[n // 2 - 1] + s[n // 2]) / 2\n    else:\n        trung_vi = s[n // 2]\n\n    return{\n        \"min\": min(diem),\n        \"max\": max(diem),\n        \"trung_binh\": round(sum(diem)/n, 2),\n        \"trung_vi\": trung_vi\n    }",
        "solution": "def thong_ke_diem(diem):\n    \"\"\"\n    diem: list so thuc. Tra ve dict:\n      {\"min\": .., \"max\": .., \"trung_binh\": lam tron 2 chu so, \"trung_vi\": ..}\n    List rong -> tra ve {} (dict rong).\n    \"\"\"\n    if not diem:\n        return {}\n    da_sap = sorted(diem)\n    n = len(da_sap)\n    giua = n // 2\n    trung_vi = da_sap[giua] if n % 2 else (da_sap[giua - 1] + da_sap[giua]) / 2\n    return {\n        \"min\": da_sap[0],\n        \"max\": da_sap[-1],\n        \"trung_binh\": round(sum(da_sap) / n, 2),\n        \"trung_vi\": trung_vi,\n    }"
      },
      {
        "id": "3.02",
        "fn": "gom_nhom_anagram",
        "title": "Bài 3.02 · gom_nhom_anagram",
        "doc": "Gom cac tu la anagram cua nhau. Tra ve list cac nhom (list str),\n    moi nhom sap xep A-Z, cac nhom sap xep theo phan tu dau tien.\n    [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\"] -> [[\"ate\",\"eat\",\"tea\"],[\"nat\",\"tan\"]]",
        "starter": "def gom_nhom_anagram(tu):\n    \"\"\"\n    Gom cac tu la anagram cua nhau. Tra ve list cac nhom (list str),\n    moi nhom sap xep A-Z, cac nhom sap xep theo phan tu dau tien.\n    [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\"] -> [[\"ate\",\"eat\",\"tea\"],[\"nat\",\"tan\"]]\n    \"\"\"\n    if not tu:\n        return []\n\n    result = {}\n    for i in tu:\n        key = \"\".join(sorted(i))\n        if i not in result:\n            result[key] = []\n\n        result[key].append(i)",
        "solution": "def gom_nhom_anagram(tu):\n    \"\"\"\n    Gom cac tu la anagram cua nhau. Tra ve list cac nhom (list str),\n    moi nhom sap xep A-Z, cac nhom sap xep theo phan tu dau tien.\n    [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\"] -> [[\"ate\",\"eat\",\"tea\"],[\"nat\",\"tan\"]]\n    \"\"\"\n    bang = {}\n    for t in tu:\n        khoa = \"\".join(sorted(t))\n        bang.setdefault(khoa, []).append(t)\n    nhom = [sorted(v) for v in bang.values()]\n    nhom.sort(key=lambda g: g[0])\n    return nhom"
      },
      {
        "id": "3.03",
        "fn": "giao_khoang",
        "title": "Bài 3.03 · giao_khoang",
        "doc": "a, b: list cac khoang dong [dau, cuoi] da sap xep tang, khong chong nhau.\n    Tra ve list cac khoang giao nhau giua a va b. O(n+m).\n    [[0,2],[5,10]] & [[1,5],[8,12]] -> [[1,2],[5,5],[8,10]]",
        "starter": "def giao_khoang(a, b):\n    \"\"\"\n    a, b: list cac khoang dong [dau, cuoi] da sap xep tang, khong chong nhau.\n    Tra ve list cac khoang giao nhau giua a va b. O(n+m).\n    [[0,2],[5,10]] & [[1,5],[8,12]] -> [[1,2],[5,5],[8,10]]\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def giao_khoang(a, b):\n    \"\"\"\n    a, b: list cac khoang dong [dau, cuoi] da sap xep tang, khong chong nhau.\n    Tra ve list cac khoang giao nhau giua a va b. O(n+m).\n    [[0,2],[5,10]] & [[1,5],[8,12]] -> [[1,2],[5,5],[8,10]]\n    \"\"\"\n    i = j = 0\n    ket_qua = []\n    while i < len(a) and j < len(b):\n        dau = max(a[i][0], b[j][0])\n        cuoi = min(a[i][1], b[j][1])\n        if dau <= cuoi:\n            ket_qua.append([dau, cuoi])\n        if a[i][1] < b[j][1]:\n            i += 1\n        else:\n            j += 1\n    return ket_qua"
      },
      {
        "id": "3.04",
        "fn": "kiem_tra_so_du",
        "title": "Bài 3.04 · kiem_tra_so_du",
        "doc": "giao_dich: list so nguyen (duong = nap, am = rut).\n    Thuc hien lan luot; giao dich nao lam so du AM thi BO QUA giao dich do.\n    Tra ve (so_du_cuoi, so_giao_dich_bi_bo_qua).",
        "starter": "def kiem_tra_so_du(so_du_dau, giao_dich):\n    \"\"\"\n    giao_dich: list so nguyen (duong = nap, am = rut).\n    Thuc hien lan luot; giao dich nao lam so du AM thi BO QUA giao dich do.\n    Tra ve (so_du_cuoi, so_giao_dich_bi_bo_qua).\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def kiem_tra_so_du(so_du_dau, giao_dich):\n    \"\"\"\n    giao_dich: list so nguyen (duong = nap, am = rut).\n    Thuc hien lan luot; giao dich nao lam so du AM thi BO QUA giao dich do.\n    Tra ve (so_du_cuoi, so_giao_dich_bi_bo_qua).\n    \"\"\"\n    so_du = so_du_dau\n    bo_qua = 0\n    for gd in giao_dich:\n        if so_du + gd < 0:\n            bo_qua += 1\n        else:\n            so_du += gd\n    return (so_du, bo_qua)"
      },
      {
        "id": "3.05",
        "fn": "top_k_pho_bien",
        "title": "Bài 3.05 · top_k_pho_bien",
        "doc": "Tra ve k phan tu xuat hien nhieu nhat, sap xep tan suat GIAM dan;\n    cung tan suat thi gia tri TANG dan.",
        "starter": "def top_k_pho_bien(arr, k):\n    \"\"\"\n    Tra ve k phan tu xuat hien nhieu nhat, sap xep tan suat GIAM dan;\n    cung tan suat thi gia tri TANG dan.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def top_k_pho_bien(arr, k):\n    \"\"\"\n    Tra ve k phan tu xuat hien nhieu nhat, sap xep tan suat GIAM dan;\n    cung tan suat thi gia tri TANG dan.\n    \"\"\"\n    dem = Counter(arr)\n    return [x for x, _ in sorted(dem.items(), key=lambda p: (-p[1], p[0]))[:k]]"
      },
      {
        "id": "3.06",
        "fn": "duong_di_ngan_nhat",
        "title": "Bài 3.06 · duong_di_ngan_nhat",
        "doc": "luoi: list[list[int]], 0 = di duoc, 1 = tuong.\n    Tim so BUOC it nhat tu (0,0) den (n-1,m-1), di 4 huong. Khong den duoc -> -1.\n    O (0,0) tinh la 0 buoc. Neu o dau hoac o cuoi la tuong -> -1.",
        "starter": "def duong_di_ngan_nhat(luoi):\n    \"\"\"\n    luoi: list[list[int]], 0 = di duoc, 1 = tuong.\n    Tim so BUOC it nhat tu (0,0) den (n-1,m-1), di 4 huong. Khong den duoc -> -1.\n    O (0,0) tinh la 0 buoc. Neu o dau hoac o cuoi la tuong -> -1.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def duong_di_ngan_nhat(luoi):\n    \"\"\"\n    luoi: list[list[int]], 0 = di duoc, 1 = tuong.\n    Tim so BUOC it nhat tu (0,0) den (n-1,m-1), di 4 huong. Khong den duoc -> -1.\n    O (0,0) tinh la 0 buoc. Neu o dau hoac o cuoi la tuong -> -1.\n    \"\"\"\n    if not luoi or not luoi[0]:\n        return -1\n    n, m = len(luoi), len(luoi[0])\n    if luoi[0][0] == 1 or luoi[n - 1][m - 1] == 1:\n        return -1\n    hang_doi = deque([(0, 0, 0)])\n    da_tham = {(0, 0)}\n    while hang_doi:\n        r, c, buoc = hang_doi.popleft()\n        if r == n - 1 and c == m - 1:\n            return buoc\n        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < m and luoi[nr][nc] == 0 and (nr, nc) not in da_tham:\n                da_tham.add((nr, nc))\n                hang_doi.append((nr, nc, buoc + 1))\n    return -1"
      },
      {
        "id": "3.07",
        "fn": "so_dong_xu_it_nhat",
        "title": "Bài 3.07 · so_dong_xu_it_nhat",
        "doc": "So dong xu it nhat de tao ra 'tong' (moi menh gia dung khong gioi han lan).\n    Khong tao duoc -> -1. tong = 0 -> 0.",
        "starter": "def so_dong_xu_it_nhat(menh_gia, tong):\n    \"\"\"\n    So dong xu it nhat de tao ra 'tong' (moi menh gia dung khong gioi han lan).\n    Khong tao duoc -> -1. tong = 0 -> 0.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def so_dong_xu_it_nhat(menh_gia, tong):\n    \"\"\"\n    So dong xu it nhat de tao ra 'tong' (moi menh gia dung khong gioi han lan).\n    Khong tao duoc -> -1. tong = 0 -> 0.\n    \"\"\"\n    VO_CUC = float(\"inf\")\n    dp = [0] + [VO_CUC] * tong\n    for t in range(1, tong + 1):\n        for mg in menh_gia:\n            if mg <= t and dp[t - mg] + 1 < dp[t]:\n                dp[t] = dp[t - mg] + 1\n    return -1 if dp[tong] == VO_CUC else dp[tong]"
      },
      {
        "id": "3.08",
        "fn": "day_con_tang_dai_nhat",
        "title": "Bài 3.08 · day_con_tang_dai_nhat",
        "doc": "Do dai day con TANG NGHIEM NGAT dai nhat (khong can lien tiep). O(n log n).\n    [10,9,2,5,3,7,101,18] -> 4",
        "starter": "def day_con_tang_dai_nhat(arr):\n    \"\"\"\n    Do dai day con TANG NGHIEM NGAT dai nhat (khong can lien tiep). O(n log n).\n    [10,9,2,5,3,7,101,18] -> 4\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def day_con_tang_dai_nhat(arr):\n    \"\"\"\n    Do dai day con TANG NGHIEM NGAT dai nhat (khong can lien tiep). O(n log n).\n    [10,9,2,5,3,7,101,18] -> 4\n    \"\"\"\n    import bisect\n    duoi = []\n    for x in arr:\n        vi_tri = bisect.bisect_left(duoi, x)\n        if vi_tri == len(duoi):\n            duoi.append(x)\n        else:\n            duoi[vi_tri] = x\n    return len(duoi)"
      },
      {
        "id": "3.09",
        "fn": "gop_khoang",
        "title": "Bài 3.09 · gop_khoang",
        "doc": "Gop cac khoang chong lan hoac cham nhau. Tra ve list khoang da gop, sap tang.\n    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]",
        "starter": "def gop_khoang(khoang):\n    \"\"\"\n    Gop cac khoang chong lan hoac cham nhau. Tra ve list khoang da gop, sap tang.\n    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def gop_khoang(khoang):\n    \"\"\"\n    Gop cac khoang chong lan hoac cham nhau. Tra ve list khoang da gop, sap tang.\n    [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]\n    \"\"\"\n    if not khoang:\n        return []\n    da_sap = sorted(khoang, key=lambda k: k[0])\n    ket_qua = [list(da_sap[0])]\n    for dau, cuoi in da_sap[1:]:\n        if dau <= ket_qua[-1][1]:\n            ket_qua[-1][1] = max(ket_qua[-1][1], cuoi)\n        else:\n            ket_qua.append([dau, cuoi])\n    return ket_qua"
      },
      {
        "id": "3.10",
        "fn": "phan_tich_log",
        "title": "Bài 3.10 · phan_tich_log",
        "doc": "dong: list chuoi dang \"LEVEL|dich_vu|thong_diep\" (LEVEL in INFO/WARN/ERROR).\n    Tra ve dict {dich_vu: so_luong_ERROR} CHI voi cac dich vu co it nhat 1 ERROR.\n    Dong sai dinh dang (khong du 3 phan) thi bo qua.",
        "starter": "def phan_tich_log(dong):\n    \"\"\"\n    dong: list chuoi dang \"LEVEL|dich_vu|thong_diep\" (LEVEL in INFO/WARN/ERROR).\n    Tra ve dict {dich_vu: so_luong_ERROR} CHI voi cac dich vu co it nhat 1 ERROR.\n    Dong sai dinh dang (khong du 3 phan) thi bo qua.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def phan_tich_log(dong):\n    \"\"\"\n    dong: list chuoi dang \"LEVEL|dich_vu|thong_diep\" (LEVEL in INFO/WARN/ERROR).\n    Tra ve dict {dich_vu: so_luong_ERROR} CHI voi cac dich vu co it nhat 1 ERROR.\n    Dong sai dinh dang (khong du 3 phan) thi bo qua.\n    \"\"\"\n    ket_qua = {}\n    for d in dong:\n        phan = d.split(\"|\")\n        if len(phan) != 3:\n            continue\n        muc, dich_vu, _ = phan\n        if muc.strip() == \"ERROR\":\n            ten = dich_vu.strip()\n            ket_qua[ten] = ket_qua.get(ten, 0) + 1\n    return ket_qua"
      },
      {
        "id": "3.11",
        "fn": "xep_lich_toi_da",
        "title": "Bài 3.11 · xep_lich_toi_da",
        "doc": "cong_viec: list [bat_dau, ket_thuc]. Chon nhieu viec nhat sao cho khong chong nhau\n    (viec ket thuc luc t va viec bat dau luc t duoc coi la KHONG chong).\n    Tra ve so viec toi da. (Greedy: sap theo thoi diem ket thuc.)",
        "starter": "def xep_lich_toi_da(cong_viec):\n    \"\"\"\n    cong_viec: list [bat_dau, ket_thuc]. Chon nhieu viec nhat sao cho khong chong nhau\n    (viec ket thuc luc t va viec bat dau luc t duoc coi la KHONG chong).\n    Tra ve so viec toi da. (Greedy: sap theo thoi diem ket thuc.)\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def xep_lich_toi_da(cong_viec):\n    \"\"\"\n    cong_viec: list [bat_dau, ket_thuc]. Chon nhieu viec nhat sao cho khong chong nhau\n    (viec ket thuc luc t va viec bat dau luc t duoc coi la KHONG chong).\n    Tra ve so viec toi da. (Greedy: sap theo thoi diem ket thuc.)\n    \"\"\"\n    if not cong_viec:\n        return 0\n    da_sap = sorted(cong_viec, key=lambda c: c[1])\n    dem = 0\n    het_luc = float(\"-inf\")\n    for bat_dau, ket_thuc in da_sap:\n        if bat_dau >= het_luc:\n            dem += 1\n            het_luc = ket_thuc\n    return dem"
      },
      {
        "id": "3.12",
        "fn": "tinh_bieu_thuc",
        "title": "Bài 3.12 · tinh_bieu_thuc",
        "doc": "Tinh bieu thuc chi gom so nguyen khong am va + - * / (khong ngoac),\n    dung thu tu uu tien. Phep / la chia LAY NGUYEN huong ve 0 (nhu C/Java).\n    \"3+2*2\" -> 7 ; \" 3/2 \" -> 1 ; \" 3+5 / 2 \" -> 5",
        "starter": "def tinh_bieu_thuc(s):\n    \"\"\"\n    Tinh bieu thuc chi gom so nguyen khong am va + - * / (khong ngoac),\n    dung thu tu uu tien. Phep / la chia LAY NGUYEN huong ve 0 (nhu C/Java).\n    \"3+2*2\" -> 7 ; \" 3/2 \" -> 1 ; \" 3+5 / 2 \" -> 5\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def tinh_bieu_thuc(s):\n    \"\"\"\n    Tinh bieu thuc chi gom so nguyen khong am va + - * / (khong ngoac),\n    dung thu tu uu tien. Phep / la chia LAY NGUYEN huong ve 0 (nhu C/Java).\n    \"3+2*2\" -> 7 ; \" 3/2 \" -> 1 ; \" 3+5 / 2 \" -> 5\n    \"\"\"\n    ngan_xep = []\n    so = 0\n    dau = \"+\"\n    s = s + \"+\"  # sentinel de xu ly so cuoi\n    for c in s:\n        if c.isdigit():\n            so = so * 10 + int(c)\n        elif c == \" \":\n            continue\n        else:\n            if dau == \"+\":\n                ngan_xep.append(so)\n            elif dau == \"-\":\n                ngan_xep.append(-so)\n            elif dau == \"*\":\n                ngan_xep.append(ngan_xep.pop() * so)\n            else:\n                truoc = ngan_xep.pop()\n                ngan_xep.append(int(truoc / so))\n            dau = c\n            so = 0\n    return sum(ngan_xep)"
      },
      {
        "id": "3.13",
        "fn": "k_phan_tu_lon_nhat",
        "title": "Bài 3.13 · k_phan_tu_lon_nhat",
        "doc": "Tra ve k phan tu LON NHAT theo thu tu GIAM dan, dung heap O(n log k).\n    Neu k >= len(arr) thi tra ve toan bo mang da sap giam.",
        "starter": "def k_phan_tu_lon_nhat(arr, k):\n    \"\"\"\n    Tra ve k phan tu LON NHAT theo thu tu GIAM dan, dung heap O(n log k).\n    Neu k >= len(arr) thi tra ve toan bo mang da sap giam.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def k_phan_tu_lon_nhat(arr, k):\n    \"\"\"\n    Tra ve k phan tu LON NHAT theo thu tu GIAM dan, dung heap O(n log k).\n    Neu k >= len(arr) thi tra ve toan bo mang da sap giam.\n    \"\"\"\n    if k <= 0:\n        return []\n    dong = []\n    for x in arr:\n        heapq.heappush(dong, x)\n        if len(dong) > k:\n            heapq.heappop(dong)\n    return sorted(dong, reverse=True)"
      },
      {
        "id": "3.14",
        "fn": "__init__",
        "title": "Bài 3.14 · __init__",
        "doc": "Quan ly kho hang.\n      nhap(ten, so_luong)  -> them hang (so_luong > 0)\n      xuat(ten, so_luong)  -> tra True neu du hang va da tru, False neu khong du\n      ton(ten)             -> so luong hien co (khong co -> 0)\n      danh_sach()          -> list (ten, so_luong) sap theo so_luong GIAM,\n                              cung so luong thi ten A-Z; bo qua mat hang = 0",
        "starter": "class Kho:\n    \"\"\"\n    Quan ly kho hang.\n      nhap(ten, so_luong)  -> them hang (so_luong > 0)\n      xuat(ten, so_luong)  -> tra True neu du hang va da tru, False neu khong du\n      ton(ten)             -> so luong hien co (khong co -> 0)\n      danh_sach()          -> list (ten, so_luong) sap theo so_luong GIAM,\n                              cung so luong thi ten A-Z; bo qua mat hang = 0\n    \"\"\"\n\n    def __init__(self):\n        pass  # <-- viet code cua ban o day\n\n    def nhap(self, ten, so_luong):\n        pass  # <-- viet code cua ban o day\n\n    def xuat(self, ten, so_luong):\n        pass  # <-- viet code cua ban o day\n\n    def ton(self, ten):\n        pass  # <-- viet code cua ban o day\n\n    def danh_sach(self):\n        pass  # <-- viet code cua ban o day",
        "solution": "class Kho:\n    \"\"\"\n    Quan ly kho hang.\n      nhap(ten, so_luong)  -> them hang (so_luong > 0)\n      xuat(ten, so_luong)  -> tra True neu du hang va da tru, False neu khong du\n      ton(ten)             -> so luong hien co (khong co -> 0)\n      danh_sach()          -> list (ten, so_luong) sap theo so_luong GIAM,\n                              cung so luong thi ten A-Z; bo qua mat hang = 0\n    \"\"\"\n\n    def __init__(self):\n        self._hang = {}\n\n    def nhap(self, ten, so_luong):\n        if so_luong <= 0:\n            return\n        self._hang[ten] = self._hang.get(ten, 0) + so_luong\n\n    def xuat(self, ten, so_luong):\n        if so_luong <= 0 or self._hang.get(ten, 0) < so_luong:\n            return False\n        self._hang[ten] -= so_luong\n        return True\n\n    def ton(self, ten):\n        return self._hang.get(ten, 0)\n\n    def danh_sach(self):\n        con = [(t, s) for t, s in self._hang.items() if s > 0]\n        con.sort(key=lambda p: (-p[1], p[0]))\n        return con"
      },
      {
        "id": "3.15",
        "fn": "__init__",
        "title": "Bài 3.15 · __init__",
        "doc": "Hang doi (FIFO) cai dat bang HAI NGAN XEP (list + append/pop cuoi).\n    KHONG duoc dung pop(0), deque, hay insert(0, ...).\n      them(x)   -> them vao cuoi\n      lay()     -> lay ra phan tu dau, rong thi tra None\n      xem()     -> xem phan tu dau khong lay, rong thi None\n      rong()    -> True/False",
        "starter": "class HangDoi:\n    \"\"\"\n    Hang doi (FIFO) cai dat bang HAI NGAN XEP (list + append/pop cuoi).\n    KHONG duoc dung pop(0), deque, hay insert(0, ...).\n      them(x)   -> them vao cuoi\n      lay()     -> lay ra phan tu dau, rong thi tra None\n      xem()     -> xem phan tu dau khong lay, rong thi None\n      rong()    -> True/False\n    \"\"\"\n\n    def __init__(self):\n        pass  # <-- viet code cua ban o day\n\n    def them(self, x):\n        pass  # <-- viet code cua ban o day\n\n    def lay(self):\n        pass  # <-- viet code cua ban o day\n\n    def xem(self):\n        pass  # <-- viet code cua ban o day\n\n    def rong(self):\n        pass  # <-- viet code cua ban o day",
        "solution": "class HangDoi:\n    \"\"\"\n    Hang doi (FIFO) cai dat bang HAI NGAN XEP (list + append/pop cuoi).\n    KHONG duoc dung pop(0), deque, hay insert(0, ...).\n      them(x)   -> them vao cuoi\n      lay()     -> lay ra phan tu dau, rong thi tra None\n      xem()     -> xem phan tu dau khong lay, rong thi None\n      rong()    -> True/False\n    \"\"\"\n\n    def __init__(self):\n        self._vao = []\n        self._ra = []\n\n    def _chuyen(self):\n        if not self._ra:\n            while self._vao:\n                self._ra.append(self._vao.pop())\n\n    def them(self, x):\n        self._vao.append(x)\n\n    def lay(self):\n        self._chuyen()\n        return self._ra.pop() if self._ra else None\n\n    def xem(self):\n        self._chuyen()\n        return self._ra[-1] if self._ra else None\n\n    def rong(self):\n        return not self._vao and not self._ra"
      }
    ]
  },
  "4": {
    "name": "Nhóm 4 · Điền chỗ trống chuẩn format solution()",
    "items": [
      {
        "id": "4.01",
        "fn": "solution_401",
        "title": "Bài 4.01 · solution_401",
        "doc": "DE BAI:\n    Trong mot cuoc thi am nhac, diem danh gia cua moi thi sinh duoc tinh bang diem trung binh\n    cua cac giam khao sau khi da loai bo 1 diem cao nhat va 1 diem thap nhat.\n    Neu co nhieu diem cao nhat hoac thap nhat giong nhau, chi loai bo dung 1 diem moi loai.\n    Hay tinh va tra ve diem danh gia cao nhat trong tat ca cac thi sinh.\n\n    GIAI THICH THAM SO:\n    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao cho tung thi sinh.\n      So luong thi sinh tu 2 den 100. Moi thi sinh co tu 3 den 20 diem danh gia (so tu nhien tu 0 den 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem danh gia cao nhat. Neu diem trung binh la so thap phan,\n      chi lay phan nguyen (cat bo phan le).\n\n    VI DU:\n    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91\n\n    GIAI THICH VI DU:\n    - Thi sinh 1: loai 85 va 95, con [92, 90] -> trung binh (92 + 90) // 2 = 91.\n    - Thi sinh 2: loai 50 va 91, con [76, 85] -> trung binh (76 + 85) // 2 = 80.\n    - Diem cao nhat la 91.",
        "starter": "def solution_401(scores):\n    \"\"\"\n    DE BAI:\n    Trong mot cuoc thi am nhac, diem danh gia cua moi thi sinh duoc tinh bang diem trung binh\n    cua cac giam khao sau khi da loai bo 1 diem cao nhat va 1 diem thap nhat.\n    Neu co nhieu diem cao nhat hoac thap nhat giong nhau, chi loai bo dung 1 diem moi loai.\n    Hay tinh va tra ve diem danh gia cao nhat trong tat ca cac thi sinh.\n\n    GIAI THICH THAM SO:\n    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao cho tung thi sinh.\n      So luong thi sinh tu 2 den 100. Moi thi sinh co tu 3 den 20 diem danh gia (so tu nhien tu 0 den 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem danh gia cao nhat. Neu diem trung binh la so thap phan,\n      chi lay phan nguyen (cat bo phan le).\n\n    VI DU:\n    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91\n\n    GIAI THICH VI DU:\n    - Thi sinh 1: loai 85 va 95, con [92, 90] -> trung binh (92 + 90) // 2 = 91.\n    - Thi sinh 2: loai 50 va 91, con [76, 85] -> trung binh (76 + 85) // 2 = 80.\n    - Diem cao nhat la 91.\n    \"\"\"\n    max_avg = 0\n    for s in scores:\n        total = ___1___\n        count = ___2___\n        avg = ___3___\n        if avg > max_avg:\n            max_avg = avg\n    return max_avg",
        "solution": "def solution_401(scores):\n    \"\"\"\n    DE BAI:\n    Trong mot cuoc thi am nhac, diem danh gia cua moi thi sinh duoc tinh bang diem trung binh\n    cua cac giam khao sau khi da loai bo 1 diem cao nhat va 1 diem thap nhat.\n    Neu co nhieu diem cao nhat hoac thap nhat giong nhau, chi loai bo dung 1 diem moi loai.\n    Hay tinh va tra ve diem danh gia cao nhat trong tat ca cac thi sinh.\n\n    GIAI THICH THAM SO:\n    - scores: mang 2 chieu (list cac list int) chua diem so cua ban giam khao cho tung thi sinh.\n      So luong thi sinh tu 2 den 100. Moi thi sinh co tu 3 den 20 diem danh gia (so tu nhien tu 0 den 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem danh gia cao nhat. Neu diem trung binh la so thap phan,\n      chi lay phan nguyen (cat bo phan le).\n\n    VI DU:\n    - scores = [[85, 92, 95, 90], [91, 76, 85, 50]] -> return 91\n\n    GIAI THICH VI DU:\n    - Thi sinh 1: loai 85 va 95, con [92, 90] -> trung binh (92 + 90) // 2 = 91.\n    - Thi sinh 2: loai 50 va 91, con [76, 85] -> trung binh (76 + 85) // 2 = 80.\n    - Diem cao nhat la 91.\n    \"\"\"\n    max_avg = 0\n    for s in scores:\n        total = sum(s) - max(s) - min(s)  # <-- cho trong (1)\n        count = len(s) - 2  # <-- cho trong (2)\n        avg = total // count  # <-- cho trong (3)\n        if avg > max_avg:\n            max_avg = avg\n    return max_avg"
      },
      {
        "id": "4.02",
        "fn": "solution_402",
        "title": "Bài 4.02 · solution_402",
        "doc": "DE BAI:\n    Mot trung tam du lieu can nen chuoi ma van don de tiet kiem bo nho.\n    He thong gom cac ky tu in hoa lien tiep giong nhau theo quy tac:\n    - Neu ky tu chi xuat hien 1 lan thi giu nguyen ky tu do.\n    - Neu ky tu xuat hien tu 2 lan lien tiep tro len thi ghi ky tu kem theo so lan lap lai.\n    Cho chuoi s, hay tra ve chuoi da duoc nen.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua cac chu cai in hoa 'A'-'Z', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc nen theo quy tac tren.\n\n    VI DU:\n    - s = \"AAABBCDDDD\" -> return \"A3B2CD4\"\n\n    GIAI THICH VI DU:\n    - 'A' xuat hien 3 lan lien tiep -> \"A3\"\n    - 'B' xuat hien 2 lan lien tiep -> \"B2\"\n    - 'C' xuat hien 1 lan -> \"C\"\n    - 'D' xuat hien 4 lan lien tiep -> \"D4\"\n    - Ket qua gop lai: \"A3B2CD4\".",
        "starter": "def solution_402(s):\n    \"\"\"\n    DE BAI:\n    Mot trung tam du lieu can nen chuoi ma van don de tiet kiem bo nho.\n    He thong gom cac ky tu in hoa lien tiep giong nhau theo quy tac:\n    - Neu ky tu chi xuat hien 1 lan thi giu nguyen ky tu do.\n    - Neu ky tu xuat hien tu 2 lan lien tiep tro len thi ghi ky tu kem theo so lan lap lai.\n    Cho chuoi s, hay tra ve chuoi da duoc nen.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua cac chu cai in hoa 'A'-'Z', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc nen theo quy tac tren.\n\n    VI DU:\n    - s = \"AAABBCDDDD\" -> return \"A3B2CD4\"\n\n    GIAI THICH VI DU:\n    - 'A' xuat hien 3 lan lien tiep -> \"A3\"\n    - 'B' xuat hien 2 lan lien tiep -> \"B2\"\n    - 'C' xuat hien 1 lan -> \"C\"\n    - 'D' xuat hien 4 lan lien tiep -> \"D4\"\n    - Ket qua gop lai: \"A3B2CD4\".\n    \"\"\"\n    res = []\n    curr_char = s[0]\n    count = 1\n    for i in ___1___:\n        if s[i] == curr_char:\n            count += 1\n        else:\n            res.append(___2___)\n            curr_char = s[i]\n            count = 1\n    res.append(___3___)\n    return \"\".join(res)",
        "solution": "def solution_402(s):\n    \"\"\"\n    DE BAI:\n    Mot trung tam du lieu can nen chuoi ma van don de tiet kiem bo nho.\n    He thong gom cac ky tu in hoa lien tiep giong nhau theo quy tac:\n    - Neu ky tu chi xuat hien 1 lan thi giu nguyen ky tu do.\n    - Neu ky tu xuat hien tu 2 lan lien tiep tro len thi ghi ky tu kem theo so lan lap lai.\n    Cho chuoi s, hay tra ve chuoi da duoc nen.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua cac chu cai in hoa 'A'-'Z', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc nen theo quy tac tren.\n\n    VI DU:\n    - s = \"AAABBCDDDD\" -> return \"A3B2CD4\"\n\n    GIAI THICH VI DU:\n    - 'A' xuat hien 3 lan lien tiep -> \"A3\"\n    - 'B' xuat hien 2 lan lien tiep -> \"B2\"\n    - 'C' xuat hien 1 lan -> \"C\"\n    - 'D' xuat hien 4 lan lien tiep -> \"D4\"\n    - Ket qua gop lai: \"A3B2CD4\".\n    \"\"\"\n    res = []\n    curr_char = s[0]\n    count = 1\n    for i in range(1, len(s)):  # <-- cho trong (1)\n        if s[i] == curr_char:\n            count += 1\n        else:\n            res.append(curr_char if count == 1 else curr_char + str(count))  # <-- cho trong (2)\n            curr_char = s[i]\n            count = 1\n    res.append(curr_char if count == 1 else curr_char + str(count))  # <-- cho trong (3)\n    return \"\".join(res)"
      },
      {
        "id": "4.03",
        "fn": "solution_403",
        "title": "Bài 4.03 · solution_403",
        "doc": "DE BAI:\n    Mot he thong dat phong khach san can tinh so ngay luu tru cua khach hang trong nam 2026\n    (nam khong nhuan gom 365 ngay). So ngay cua 12 thang lan luot la:\n    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].\n    Cho biet ngay nhan phong (start_month, start_day) va ngay tra phong (end_month, end_day),\n    hay tinh so ngay khach hang da luu tru (ngay tra phong - ngay nhan phong).\n\n    GIAI THICH THAM SO:\n    - start_month, start_day: thang va ngay nhan phong (1 <= start_month <= 12, ngay hop le).\n    - end_month, end_day: thang va ngay tra phong (1 <= end_month <= 12, ngay hop le).\n    - Dam bao moc thoi gian ket thuc luon sau hoac cung ngay voi moc bat dau trong nam 2026.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so ngay chenh lech giua hai moc thoi gian.\n\n    VI DU:\n    - start_month = 1, start_day = 15, end_month = 3, end_day = 5 -> return 49\n\n    GIAI THICH VI DU:\n    - Ngay 15/1 la ngay thu 15 trong nam.\n    - Ngay 5/3 la ngay thu 31 (thang 1) + 28 (thang 2) + 5 = 64 trong nam.\n    - So ngay luu tru: 64 - 15 = 49 ngay.",
        "starter": "def solution_403(start_month, start_day, end_month, end_day):\n    \"\"\"\n    DE BAI:\n    Mot he thong dat phong khach san can tinh so ngay luu tru cua khach hang trong nam 2026\n    (nam khong nhuan gom 365 ngay). So ngay cua 12 thang lan luot la:\n    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].\n    Cho biet ngay nhan phong (start_month, start_day) va ngay tra phong (end_month, end_day),\n    hay tinh so ngay khach hang da luu tru (ngay tra phong - ngay nhan phong).\n\n    GIAI THICH THAM SO:\n    - start_month, start_day: thang va ngay nhan phong (1 <= start_month <= 12, ngay hop le).\n    - end_month, end_day: thang va ngay tra phong (1 <= end_month <= 12, ngay hop le).\n    - Dam bao moc thoi gian ket thuc luon sau hoac cung ngay voi moc bat dau trong nam 2026.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so ngay chenh lech giua hai moc thoi gian.\n\n    VI DU:\n    - start_month = 1, start_day = 15, end_month = 3, end_day = 5 -> return 49\n\n    GIAI THICH VI DU:\n    - Ngay 15/1 la ngay thu 15 trong nam.\n    - Ngay 5/3 la ngay thu 31 (thang 1) + 28 (thang 2) + 5 = 64 trong nam.\n    - So ngay luu tru: 64 - 15 = 49 ngay.\n    \"\"\"\n    days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n    start_total = ___1___\n    end_total = ___2___\n    return ___3___",
        "solution": "def solution_403(start_month, start_day, end_month, end_day):\n    \"\"\"\n    DE BAI:\n    Mot he thong dat phong khach san can tinh so ngay luu tru cua khach hang trong nam 2026\n    (nam khong nhuan gom 365 ngay). So ngay cua 12 thang lan luot la:\n    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].\n    Cho biet ngay nhan phong (start_month, start_day) va ngay tra phong (end_month, end_day),\n    hay tinh so ngay khach hang da luu tru (ngay tra phong - ngay nhan phong).\n\n    GIAI THICH THAM SO:\n    - start_month, start_day: thang va ngay nhan phong (1 <= start_month <= 12, ngay hop le).\n    - end_month, end_day: thang va ngay tra phong (1 <= end_month <= 12, ngay hop le).\n    - Dam bao moc thoi gian ket thuc luon sau hoac cung ngay voi moc bat dau trong nam 2026.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so ngay chenh lech giua hai moc thoi gian.\n\n    VI DU:\n    - start_month = 1, start_day = 15, end_month = 3, end_day = 5 -> return 49\n\n    GIAI THICH VI DU:\n    - Ngay 15/1 la ngay thu 15 trong nam.\n    - Ngay 5/3 la ngay thu 31 (thang 1) + 28 (thang 2) + 5 = 64 trong nam.\n    - So ngay luu tru: 64 - 15 = 49 ngay.\n    \"\"\"\n    days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n    start_total = sum(days_in_month[:start_month]) + start_day  # <-- cho trong (1)\n    end_total = sum(days_in_month[:end_month]) + end_day  # <-- cho trong (2)\n    return end_total - start_total  # <-- cho trong (3)"
      },
      {
        "id": "4.04",
        "fn": "solution_404",
        "title": "Bài 4.04 · solution_404",
        "doc": "DE BAI:\n    Trong mot cuoc bau cu dai bieu, moi phieu bau ghi ma so cua mot ung vien.\n    Ung vien chien thang ngay tai vong 1 neu so phieu nhan duoc chiem hon 50% tong so phieu bau\n    (so phieu > len(votes) // 2). Neu khong co ung vien nao dat tren 50% so phieu, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - votes: list cac so nguyen duong dai dien cho ma so ung vien tren moi phieu bau.\n      Do dai mang tu 1 den 1000. Ma ung vien tu 1 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve ma so ung vien (int) chien thang neu co, nguoc lai tra ve -1.\n\n    VI DU:\n    - votes = [2, 2, 1, 2, 3, 2, 2] -> return 2\n    - votes = [1, 2, 3, 1, 2] -> return -1\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tong so 7 phieu, ung vien 2 nhan duoc 5 phieu (> 7 // 2 = 3) -> tra ve 2.\n    - Vi du 2: Tong so 5 phieu, nguong chien thang la > 2 phieu. Khong ai co > 2 phieu -> tra ve -1.",
        "starter": "def solution_404(votes):\n    \"\"\"\n    DE BAI:\n    Trong mot cuoc bau cu dai bieu, moi phieu bau ghi ma so cua mot ung vien.\n    Ung vien chien thang ngay tai vong 1 neu so phieu nhan duoc chiem hon 50% tong so phieu bau\n    (so phieu > len(votes) // 2). Neu khong co ung vien nao dat tren 50% so phieu, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - votes: list cac so nguyen duong dai dien cho ma so ung vien tren moi phieu bau.\n      Do dai mang tu 1 den 1000. Ma ung vien tu 1 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve ma so ung vien (int) chien thang neu co, nguoc lai tra ve -1.\n\n    VI DU:\n    - votes = [2, 2, 1, 2, 3, 2, 2] -> return 2\n    - votes = [1, 2, 3, 1, 2] -> return -1\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tong so 7 phieu, ung vien 2 nhan duoc 5 phieu (> 7 // 2 = 3) -> tra ve 2.\n    - Vi du 2: Tong so 5 phieu, nguong chien thang la > 2 phieu. Khong ai co > 2 phieu -> tra ve -1.\n    \"\"\"\n    counts = {}\n    threshold = ___1___\n    for v in votes:\n        counts[v] = ___2___\n    for candidate, count in counts.items():\n        if ___3___:\n            return candidate\n    return -1",
        "solution": "def solution_404(votes):\n    \"\"\"\n    DE BAI:\n    Trong mot cuoc bau cu dai bieu, moi phieu bau ghi ma so cua mot ung vien.\n    Ung vien chien thang ngay tai vong 1 neu so phieu nhan duoc chiem hon 50% tong so phieu bau\n    (so phieu > len(votes) // 2). Neu khong co ung vien nao dat tren 50% so phieu, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - votes: list cac so nguyen duong dai dien cho ma so ung vien tren moi phieu bau.\n      Do dai mang tu 1 den 1000. Ma ung vien tu 1 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve ma so ung vien (int) chien thang neu co, nguoc lai tra ve -1.\n\n    VI DU:\n    - votes = [2, 2, 1, 2, 3, 2, 2] -> return 2\n    - votes = [1, 2, 3, 1, 2] -> return -1\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tong so 7 phieu, ung vien 2 nhan duoc 5 phieu (> 7 // 2 = 3) -> tra ve 2.\n    - Vi du 2: Tong so 5 phieu, nguong chien thang la > 2 phieu. Khong ai co > 2 phieu -> tra ve -1.\n    \"\"\"\n    counts = {}\n    threshold = len(votes) // 2  # <-- cho trong (1)\n    for v in votes:\n        counts[v] = counts.get(v, 0) + 1  # <-- cho trong (2)\n    for candidate, count in counts.items():\n        if count > threshold:  # <-- cho trong (3)\n            return candidate\n    return -1"
      },
      {
        "id": "4.05",
        "fn": "solution_405",
        "title": "Bài 4.05 · solution_405",
        "doc": "DE BAI:\n    Ban to chuc giai bong da can xep hang cac doi bong theo tieu chi uu tien:\n    1. Diem so (points) CAO hon xep truoc.\n    2. Neu cung diem, hieu so ban thang (diff) CAO hon xep truoc.\n    3. Neu cung hieu so, so the phat (cards) IT hon xep truoc.\n    4. Neu van bang nhau, xep theo ten doi (name) theo thu tu tu dien A-Z.\n    Hay tra ve danh sach ten cac doi bong da duoc sap xep.\n\n    GIAI THICH THAM SO:\n    - teams: list cac dict, moi dict co cac khoa:\n      \"name\" (str), \"points\" (int >= 0), \"diff\" (int), \"cards\" (int >= 0).\n      So luong doi tu 1 den 50.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la ten cac doi da duoc sap xep theo thu tu tren.\n\n    VI DU:\n    - teams = [{\"name\": \"A\", \"points\": 10, \"diff\": 5, \"cards\": 2},\n               {\"name\": \"B\", \"points\": 10, \"diff\": 5, \"cards\": 1},\n               {\"name\": \"C\", \"points\": 12, \"diff\": 2, \"cards\": 4}]\n      -> return [\"C\", \"B\", \"A\"]\n\n    GIAI THICH VI DU:\n    - Doi C co 12 diem -> xep thu nhat.\n    - Doi A va B deu co 10 diem va hieu so 5, nhung B co 1 the (< 2 the cua A) -> B dung truoc A.\n    - Thu tu xep hang: [\"C\", \"B\", \"A\"].",
        "starter": "def solution_405(teams):\n    \"\"\"\n    DE BAI:\n    Ban to chuc giai bong da can xep hang cac doi bong theo tieu chi uu tien:\n    1. Diem so (points) CAO hon xep truoc.\n    2. Neu cung diem, hieu so ban thang (diff) CAO hon xep truoc.\n    3. Neu cung hieu so, so the phat (cards) IT hon xep truoc.\n    4. Neu van bang nhau, xep theo ten doi (name) theo thu tu tu dien A-Z.\n    Hay tra ve danh sach ten cac doi bong da duoc sap xep.\n\n    GIAI THICH THAM SO:\n    - teams: list cac dict, moi dict co cac khoa:\n      \"name\" (str), \"points\" (int >= 0), \"diff\" (int), \"cards\" (int >= 0).\n      So luong doi tu 1 den 50.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la ten cac doi da duoc sap xep theo thu tu tren.\n\n    VI DU:\n    - teams = [{\"name\": \"A\", \"points\": 10, \"diff\": 5, \"cards\": 2},\n               {\"name\": \"B\", \"points\": 10, \"diff\": 5, \"cards\": 1},\n               {\"name\": \"C\", \"points\": 12, \"diff\": 2, \"cards\": 4}]\n      -> return [\"C\", \"B\", \"A\"]\n\n    GIAI THICH VI DU:\n    - Doi C co 12 diem -> xep thu nhat.\n    - Doi A va B deu co 10 diem va hieu so 5, nhung B co 1 the (< 2 the cua A) -> B dung truoc A.\n    - Thu tu xep hang: [\"C\", \"B\", \"A\"].\n    \"\"\"\n    sorted_teams = sorted(teams, key=lambda t: ___1___)\n    return ___2___",
        "solution": "def solution_405(teams):\n    \"\"\"\n    DE BAI:\n    Ban to chuc giai bong da can xep hang cac doi bong theo tieu chi uu tien:\n    1. Diem so (points) CAO hon xep truoc.\n    2. Neu cung diem, hieu so ban thang (diff) CAO hon xep truoc.\n    3. Neu cung hieu so, so the phat (cards) IT hon xep truoc.\n    4. Neu van bang nhau, xep theo ten doi (name) theo thu tu tu dien A-Z.\n    Hay tra ve danh sach ten cac doi bong da duoc sap xep.\n\n    GIAI THICH THAM SO:\n    - teams: list cac dict, moi dict co cac khoa:\n      \"name\" (str), \"points\" (int >= 0), \"diff\" (int), \"cards\" (int >= 0).\n      So luong doi tu 1 den 50.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la ten cac doi da duoc sap xep theo thu tu tren.\n\n    VI DU:\n    - teams = [{\"name\": \"A\", \"points\": 10, \"diff\": 5, \"cards\": 2},\n               {\"name\": \"B\", \"points\": 10, \"diff\": 5, \"cards\": 1},\n               {\"name\": \"C\", \"points\": 12, \"diff\": 2, \"cards\": 4}]\n      -> return [\"C\", \"B\", \"A\"]\n\n    GIAI THICH VI DU:\n    - Doi C co 12 diem -> xep thu nhat.\n    - Doi A va B deu co 10 diem va hieu so 5, nhung B co 1 the (< 2 the cua A) -> B dung truoc A.\n    - Thu tu xep hang: [\"C\", \"B\", \"A\"].\n    \"\"\"\n    sorted_teams = sorted(teams, key=lambda t: (-t[\"points\"], -t[\"diff\"], t[\"cards\"], t[\"name\"]))  # <-- cho trong (1)\n    return [t[\"name\"] for t in sorted_teams]  # <-- cho trong (2)"
      },
      {
        "id": "4.06",
        "fn": "solution_406",
        "title": "Bài 4.06 · solution_406",
        "doc": "DE BAI:\n    Mot chu chuoi cua hang can tim tong doanh thu lon nhat cua k ngay lien tiep\n    de danh gia hieu qua kinh doanh trong chien dich quang cao.\n    Cho mang daily_revenue chua doanh thu tung ngay va so nguyen k,\n    hay tim tong doanh thu lon nhat cua mot doan k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - daily_revenue: list cac so nguyen khong am, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can tinh (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong doanh thu lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - daily_revenue = [10, 20, 30, 40, 50, 60, 70], k = 3 -> return 180\n\n    GIAI THICH VI DU:\n    - Cua so 3 ngay cuoi [50, 60, 70] co tong la 50 + 60 + 70 = 180 (lon nhat).",
        "starter": "def solution_406(daily_revenue, k):\n    \"\"\"\n    DE BAI:\n    Mot chu chuoi cua hang can tim tong doanh thu lon nhat cua k ngay lien tiep\n    de danh gia hieu qua kinh doanh trong chien dich quang cao.\n    Cho mang daily_revenue chua doanh thu tung ngay va so nguyen k,\n    hay tim tong doanh thu lon nhat cua mot doan k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - daily_revenue: list cac so nguyen khong am, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can tinh (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong doanh thu lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - daily_revenue = [10, 20, 30, 40, 50, 60, 70], k = 3 -> return 180\n\n    GIAI THICH VI DU:\n    - Cua so 3 ngay cuoi [50, 60, 70] co tong la 50 + 60 + 70 = 180 (lon nhat).\n    \"\"\"\n    current_sum = ___1___\n    max_sum = current_sum\n    for i in range(k, len(daily_revenue)):\n        current_sum += ___2___\n        if ___3___:\n            max_sum = current_sum\n    return max_sum",
        "solution": "def solution_406(daily_revenue, k):\n    \"\"\"\n    DE BAI:\n    Mot chu chuoi cua hang can tim tong doanh thu lon nhat cua k ngay lien tiep\n    de danh gia hieu qua kinh doanh trong chien dich quang cao.\n    Cho mang daily_revenue chua doanh thu tung ngay va so nguyen k,\n    hay tim tong doanh thu lon nhat cua mot doan k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - daily_revenue: list cac so nguyen khong am, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can tinh (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong doanh thu lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - daily_revenue = [10, 20, 30, 40, 50, 60, 70], k = 3 -> return 180\n\n    GIAI THICH VI DU:\n    - Cua so 3 ngay cuoi [50, 60, 70] co tong la 50 + 60 + 70 = 180 (lon nhat).\n    \"\"\"\n    current_sum = sum(daily_revenue[:k])  # <-- cho trong (1)\n    max_sum = current_sum\n    for i in range(k, len(daily_revenue)):\n        current_sum += daily_revenue[i] - daily_revenue[i - k]  # <-- cho trong (2)\n        if current_sum > max_sum:  # <-- cho trong (3)\n            max_sum = current_sum\n    return max_sum"
      },
      {
        "id": "4.07",
        "fn": "solution_407",
        "title": "Bài 4.07 · solution_407",
        "doc": "DE BAI:\n    Mot doi xe cuu ho can van chuyen cac thung hang cuu tro.\n    Moi chuyen xe chi cho duoc toi da 2 thung hang va tong khoi luong cua 2 thung\n    khong duoc vuot qua tai trong toi da limit cua xe.\n    Moi thung hang deu co khoi luong <= limit.\n    Hay tinh so chuyen xe it nhat de cho het tat ca cac thung hang.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong la khoi luong tung thung hang, do dai tu 1 den 1000.\n    - limit: so nguyen duong la tai trong toi da cua xe (1 <= weights[i] <= limit <= 10000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so chuyen xe toi thieu can dung.\n\n    VI DU:\n    - weights = [3, 2, 2, 1], limit = 3 -> return 3\n\n    GIAI THICH VI DU:\n    - Sap xep cac thung: [1, 2, 2, 3].\n    - Chuyen 1: thung 1 + thung 2 (tong 3 <= 3).\n    - Chuyen 2: thung 2 (khoi luong 2 <= 3).\n    - Chuyen 3: thung 3 (khoi luong 3 <= 3).\n    - Tong cong can 3 chuyen xe.",
        "starter": "def solution_407(weights, limit):\n    \"\"\"\n    DE BAI:\n    Mot doi xe cuu ho can van chuyen cac thung hang cuu tro.\n    Moi chuyen xe chi cho duoc toi da 2 thung hang va tong khoi luong cua 2 thung\n    khong duoc vuot qua tai trong toi da limit cua xe.\n    Moi thung hang deu co khoi luong <= limit.\n    Hay tinh so chuyen xe it nhat de cho het tat ca cac thung hang.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong la khoi luong tung thung hang, do dai tu 1 den 1000.\n    - limit: so nguyen duong la tai trong toi da cua xe (1 <= weights[i] <= limit <= 10000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so chuyen xe toi thieu can dung.\n\n    VI DU:\n    - weights = [3, 2, 2, 1], limit = 3 -> return 3\n\n    GIAI THICH VI DU:\n    - Sap xep cac thung: [1, 2, 2, 3].\n    - Chuyen 1: thung 1 + thung 2 (tong 3 <= 3).\n    - Chuyen 2: thung 2 (khoi luong 2 <= 3).\n    - Chuyen 3: thung 3 (khoi luong 3 <= 3).\n    - Tong cong can 3 chuyen xe.\n    \"\"\"\n    weights.sort()\n    left = 0\n    right = len(weights) - 1\n    trips = 0\n    while ___1___:\n        if ___2___:\n            left += 1\n        right -= 1\n        trips += 1\n    return trips",
        "solution": "def solution_407(weights, limit):\n    \"\"\"\n    DE BAI:\n    Mot doi xe cuu ho can van chuyen cac thung hang cuu tro.\n    Moi chuyen xe chi cho duoc toi da 2 thung hang va tong khoi luong cua 2 thung\n    khong duoc vuot qua tai trong toi da limit cua xe.\n    Moi thung hang deu co khoi luong <= limit.\n    Hay tinh so chuyen xe it nhat de cho het tat ca cac thung hang.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong la khoi luong tung thung hang, do dai tu 1 den 1000.\n    - limit: so nguyen duong la tai trong toi da cua xe (1 <= weights[i] <= limit <= 10000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so chuyen xe toi thieu can dung.\n\n    VI DU:\n    - weights = [3, 2, 2, 1], limit = 3 -> return 3\n\n    GIAI THICH VI DU:\n    - Sap xep cac thung: [1, 2, 2, 3].\n    - Chuyen 1: thung 1 + thung 2 (tong 3 <= 3).\n    - Chuyen 2: thung 2 (khoi luong 2 <= 3).\n    - Chuyen 3: thung 3 (khoi luong 3 <= 3).\n    - Tong cong can 3 chuyen xe.\n    \"\"\"\n    weights.sort()\n    left = 0\n    right = len(weights) - 1\n    trips = 0\n    while left <= right:  # <-- cho trong (1)\n        if weights[left] + weights[right] <= limit:  # <-- cho trong (2)\n            left += 1\n        right -= 1  # <-- cho trong (3)\n        trips += 1\n    return trips"
      },
      {
        "id": "4.08",
        "fn": "solution_408",
        "title": "Bài 4.08 · solution_408",
        "doc": "DE BAI:\n    Mot robot lau nha tu dong xuat phat tu toa do (0, 0) tren mat phang toa do 2D,\n    ban dau dang quay ve huong Bac (huong duong cua truc Y).\n    Robot nhan vao chuoi cac lenh di chuyen commands gom cac ky tu:\n    - 'F': Di thang ve phia truoc 1 don vi theo huong dang dung.\n    - 'L': Quay trai 90 do tai cho.\n    - 'R': Quay phai 90 do tai cho.\n    - 'B': Quay nguoc lai 180 do tai cho.\n    Hay tinh khoang cach Manhattan |x| + |y| tu vi tri cuoi cung cua robot ve vi tri goc (0, 0).\n\n    GIAI THICH THAM SO:\n    - commands: chuoi ky tu (str) chi gom cac ky tu 'F', 'L', 'R', 'B', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la khoang cach Manhattan |x| + |y| tu diem ket thuc ve goc toa do.\n\n    VI DU:\n    - commands = \"FFRFF\" -> return 4\n\n    GIAI THICH VI DU:\n    - Xuat phat tai (0,0) huong Bac. Lenh 'F', 'F' -> den (0, 2).\n    - Lenh 'R' -> quay sang huong Dong.\n    - Lenh 'F', 'F' -> di tiep den (2, 2).\n    - Khoang cach Manhattan = |2| + |2| = 4.",
        "starter": "def solution_408(commands):\n    \"\"\"\n    DE BAI:\n    Mot robot lau nha tu dong xuat phat tu toa do (0, 0) tren mat phang toa do 2D,\n    ban dau dang quay ve huong Bac (huong duong cua truc Y).\n    Robot nhan vao chuoi cac lenh di chuyen commands gom cac ky tu:\n    - 'F': Di thang ve phia truoc 1 don vi theo huong dang dung.\n    - 'L': Quay trai 90 do tai cho.\n    - 'R': Quay phai 90 do tai cho.\n    - 'B': Quay nguoc lai 180 do tai cho.\n    Hay tinh khoang cach Manhattan |x| + |y| tu vi tri cuoi cung cua robot ve vi tri goc (0, 0).\n\n    GIAI THICH THAM SO:\n    - commands: chuoi ky tu (str) chi gom cac ky tu 'F', 'L', 'R', 'B', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la khoang cach Manhattan |x| + |y| tu diem ket thuc ve goc toa do.\n\n    VI DU:\n    - commands = \"FFRFF\" -> return 4\n\n    GIAI THICH VI DU:\n    - Xuat phat tai (0,0) huong Bac. Lenh 'F', 'F' -> den (0, 2).\n    - Lenh 'R' -> quay sang huong Dong.\n    - Lenh 'F', 'F' -> di tiep den (2, 2).\n    - Khoang cach Manhattan = |2| + |2| = 4.\n    \"\"\"\n    dx = [0, 1, 0, -1]  # Bac(0), Dong(1), Nam(2), Tay(3)\n    dy = [1, 0, -1, 0]\n    x, y = 0, 0\n    direction = 0\n    for cmd in commands:\n        if cmd == 'F':\n            x += ___1___\n            y += dy[direction]\n        elif cmd == 'L':\n            direction = ___2___\n        elif cmd == 'R':\n            direction = ___3___\n        elif cmd == 'B':\n            direction = (direction + 2) % 4\n    return ___4___",
        "solution": "def solution_408(commands):\n    \"\"\"\n    DE BAI:\n    Mot robot lau nha tu dong xuat phat tu toa do (0, 0) tren mat phang toa do 2D,\n    ban dau dang quay ve huong Bac (huong duong cua truc Y).\n    Robot nhan vao chuoi cac lenh di chuyen commands gom cac ky tu:\n    - 'F': Di thang ve phia truoc 1 don vi theo huong dang dung.\n    - 'L': Quay trai 90 do tai cho.\n    - 'R': Quay phai 90 do tai cho.\n    - 'B': Quay nguoc lai 180 do tai cho.\n    Hay tinh khoang cach Manhattan |x| + |y| tu vi tri cuoi cung cua robot ve vi tri goc (0, 0).\n\n    GIAI THICH THAM SO:\n    - commands: chuoi ky tu (str) chi gom cac ky tu 'F', 'L', 'R', 'B', do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la khoang cach Manhattan |x| + |y| tu diem ket thuc ve goc toa do.\n\n    VI DU:\n    - commands = \"FFRFF\" -> return 4\n\n    GIAI THICH VI DU:\n    - Xuat phat tai (0,0) huong Bac. Lenh 'F', 'F' -> den (0, 2).\n    - Lenh 'R' -> quay sang huong Dong.\n    - Lenh 'F', 'F' -> di tiep den (2, 2).\n    - Khoang cach Manhattan = |2| + |2| = 4.\n    \"\"\"\n    dx = [0, 1, 0, -1]  # Bac(0), Dong(1), Nam(2), Tay(3)\n    dy = [1, 0, -1, 0]\n    x, y = 0, 0\n    direction = 0\n    for cmd in commands:\n        if cmd == 'F':\n            x += dx[direction]  # <-- cho trong (1)\n            y += dy[direction]\n        elif cmd == 'L':\n            direction = (direction - 1) % 4  # <-- cho trong (2)\n        elif cmd == 'R':\n            direction = (direction + 1) % 4  # <-- cho trong (3)\n        elif cmd == 'B':\n            direction = (direction + 2) % 4\n    return abs(x) + abs(y)  # <-- cho trong (4)"
      },
      {
        "id": "4.09",
        "fn": "solution_409",
        "title": "Bài 4.09 · solution_409",
        "doc": "DE BAI:\n    Mot quay ban hang tu dong thoi tien thua cho khach bang cac menh gia dong xu:\n    500 dong, 100 dong, 50 dong va 10 dong.\n    May luon uu tien tra cac dong xu co menh gia lon nhat co the de tong so luong dong xu\n    tra lai la it nhat.\n    Cho biet so tien khach da tra price_paid va gia mon hang item_cost,\n    hay tinh tong so luong dong xu ma may se tra lai cho khach.\n\n    GIAI THICH THAM SO:\n    - price_paid: so nguyen duong la so tien khach dua (10 <= price_paid <= 100000).\n    - item_cost: so nguyen duong la gia tri mon hang (10 <= item_cost <= price_paid).\n    - So tien thua (price_paid - item_cost) luon la boi so cua 10.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so luong dong xu tra lai.\n\n    VI DU:\n    - price_paid = 1000, item_cost = 320 -> return 6\n\n    GIAI THICH VI DU:\n    - So tien thua: 1000 - 320 = 680 dong.\n    - May tra: 1 xu 500 (con 180), 1 xu 100 (con 80), 1 xu 50 (con 30), 3 xu 10 (con 0).\n    - Tong so xu: 1 + 1 + 1 + 3 = 6 xu.",
        "starter": "def solution_409(price_paid, item_cost):\n    \"\"\"\n    DE BAI:\n    Mot quay ban hang tu dong thoi tien thua cho khach bang cac menh gia dong xu:\n    500 dong, 100 dong, 50 dong va 10 dong.\n    May luon uu tien tra cac dong xu co menh gia lon nhat co the de tong so luong dong xu\n    tra lai la it nhat.\n    Cho biet so tien khach da tra price_paid va gia mon hang item_cost,\n    hay tinh tong so luong dong xu ma may se tra lai cho khach.\n\n    GIAI THICH THAM SO:\n    - price_paid: so nguyen duong la so tien khach dua (10 <= price_paid <= 100000).\n    - item_cost: so nguyen duong la gia tri mon hang (10 <= item_cost <= price_paid).\n    - So tien thua (price_paid - item_cost) luon la boi so cua 10.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so luong dong xu tra lai.\n\n    VI DU:\n    - price_paid = 1000, item_cost = 320 -> return 6\n\n    GIAI THICH VI DU:\n    - So tien thua: 1000 - 320 = 680 dong.\n    - May tra: 1 xu 500 (con 180), 1 xu 100 (con 80), 1 xu 50 (con 30), 3 xu 10 (con 0).\n    - Tong so xu: 1 + 1 + 1 + 3 = 6 xu.\n    \"\"\"\n    change = ___1___\n    coins = [500, 100, 50, 10]\n    total_coins = 0\n    for c in coins:\n        total_coins += ___2___\n        change %= ___3___\n    return total_coins",
        "solution": "def solution_409(price_paid, item_cost):\n    \"\"\"\n    DE BAI:\n    Mot quay ban hang tu dong thoi tien thua cho khach bang cac menh gia dong xu:\n    500 dong, 100 dong, 50 dong va 10 dong.\n    May luon uu tien tra cac dong xu co menh gia lon nhat co the de tong so luong dong xu\n    tra lai la it nhat.\n    Cho biet so tien khach da tra price_paid va gia mon hang item_cost,\n    hay tinh tong so luong dong xu ma may se tra lai cho khach.\n\n    GIAI THICH THAM SO:\n    - price_paid: so nguyen duong la so tien khach dua (10 <= price_paid <= 100000).\n    - item_cost: so nguyen duong la gia tri mon hang (10 <= item_cost <= price_paid).\n    - So tien thua (price_paid - item_cost) luon la boi so cua 10.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so luong dong xu tra lai.\n\n    VI DU:\n    - price_paid = 1000, item_cost = 320 -> return 6\n\n    GIAI THICH VI DU:\n    - So tien thua: 1000 - 320 = 680 dong.\n    - May tra: 1 xu 500 (con 180), 1 xu 100 (con 80), 1 xu 50 (con 30), 3 xu 10 (con 0).\n    - Tong so xu: 1 + 1 + 1 + 3 = 6 xu.\n    \"\"\"\n    change = price_paid - item_cost  # <-- cho trong (1)\n    coins = [500, 100, 50, 10]\n    total_coins = 0\n    for c in coins:\n        total_coins += change // c  # <-- cho trong (2)\n        change %= c  # <-- cho trong (3)\n    return total_coins"
      },
      {
        "id": "4.10",
        "fn": "solution_410",
        "title": "Bài 4.10 · solution_410",
        "doc": "DE BAI:\n    De kiem tra tinh hop le cua mot ma the hoi vien, he thong su dung thuat toan sau:\n    1. Tinh tu chu so cuoi cung ben phai sang trai (vi tri 1 la chu so cuoi cung).\n    2. Cac chu so o vi tri chan (vi tri 2, 4, 6...) duoc nhan doi. Neu ket qua sau khi nhan doi >= 10,\n       tru ket qua do di 9.\n    3. Cac chu so o vi tri le (vi tri 1, 3, 5...) giu nguyen.\n    4. Tinh tong tat ca cac chu so sau khi bien doi. Neu tong chia het cho 10 thi ma the hop le (True),\n       nguoc lai la khong hop le (False).\n    Hay viet ham kiem tra ma the card_number.\n\n    GIAI THICH THAM SO:\n    - card_number: chuoi ky tu (str) gom cac chu so '0'-'9', do dai tu 1 den 20.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma the hop le, False neu khong hop le).\n\n    VI DU:\n    - card_number = \"79927398713\" -> return True\n    - card_number = \"79927398710\" -> return False\n\n    GIAI THICH VI DU:\n    - Dao nguoc: 3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7.\n    - Vi tri chan bien doi: 1*2=2, 8*2-9=7, 3*2=6, 2*2=4, 9*2-9=9.\n    - Tong: 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70.\n    - 70 chia het cho 10 -> True.",
        "starter": "def solution_410(card_number):\n    \"\"\"\n    DE BAI:\n    De kiem tra tinh hop le cua mot ma the hoi vien, he thong su dung thuat toan sau:\n    1. Tinh tu chu so cuoi cung ben phai sang trai (vi tri 1 la chu so cuoi cung).\n    2. Cac chu so o vi tri chan (vi tri 2, 4, 6...) duoc nhan doi. Neu ket qua sau khi nhan doi >= 10,\n       tru ket qua do di 9.\n    3. Cac chu so o vi tri le (vi tri 1, 3, 5...) giu nguyen.\n    4. Tinh tong tat ca cac chu so sau khi bien doi. Neu tong chia het cho 10 thi ma the hop le (True),\n       nguoc lai la khong hop le (False).\n    Hay viet ham kiem tra ma the card_number.\n\n    GIAI THICH THAM SO:\n    - card_number: chuoi ky tu (str) gom cac chu so '0'-'9', do dai tu 1 den 20.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma the hop le, False neu khong hop le).\n\n    VI DU:\n    - card_number = \"79927398713\" -> return True\n    - card_number = \"79927398710\" -> return False\n\n    GIAI THICH VI DU:\n    - Dao nguoc: 3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7.\n    - Vi tri chan bien doi: 1*2=2, 8*2-9=7, 3*2=6, 2*2=4, 9*2-9=9.\n    - Tong: 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70.\n    - 70 chia het cho 10 -> True.\n    \"\"\"\n    digits = [int(c) for c in ___1___]\n    total = 0\n    for i, d in enumerate(digits):\n        if ___2___:\n            d *= 2\n            if d >= 10:\n                d -= ___3___\n        total += d\n    return ___4___",
        "solution": "def solution_410(card_number):\n    \"\"\"\n    DE BAI:\n    De kiem tra tinh hop le cua mot ma the hoi vien, he thong su dung thuat toan sau:\n    1. Tinh tu chu so cuoi cung ben phai sang trai (vi tri 1 la chu so cuoi cung).\n    2. Cac chu so o vi tri chan (vi tri 2, 4, 6...) duoc nhan doi. Neu ket qua sau khi nhan doi >= 10,\n       tru ket qua do di 9.\n    3. Cac chu so o vi tri le (vi tri 1, 3, 5...) giu nguyen.\n    4. Tinh tong tat ca cac chu so sau khi bien doi. Neu tong chia het cho 10 thi ma the hop le (True),\n       nguoc lai la khong hop le (False).\n    Hay viet ham kiem tra ma the card_number.\n\n    GIAI THICH THAM SO:\n    - card_number: chuoi ky tu (str) gom cac chu so '0'-'9', do dai tu 1 den 20.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma the hop le, False neu khong hop le).\n\n    VI DU:\n    - card_number = \"79927398713\" -> return True\n    - card_number = \"79927398710\" -> return False\n\n    GIAI THICH VI DU:\n    - Dao nguoc: 3, 1, 7, 8, 9, 3, 7, 2, 9, 9, 7.\n    - Vi tri chan bien doi: 1*2=2, 8*2-9=7, 3*2=6, 2*2=4, 9*2-9=9.\n    - Tong: 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70.\n    - 70 chia het cho 10 -> True.\n    \"\"\"\n    digits = [int(c) for c in reversed(card_number)]  # <-- cho trong (1)\n    total = 0\n    for i, d in enumerate(digits):\n        if i % 2 == 1:  # <-- cho trong (2)\n            d *= 2\n            if d >= 10:\n                d -= 9  # <-- cho trong (3)\n        total += d\n    return total % 10 == 0  # <-- cho trong (4)"
      },
      {
        "id": "4.11",
        "fn": "solution_411",
        "title": "Bài 4.11 · solution_411",
        "doc": "DE BAI:\n    Trong mot trinh xem van ban tren dien thoai, can chia mot doan van text thanh cac dong\n    sao cho moi dong co do dai toi da khong qua width ky tu.\n    Moi dong chua cang nhieu tu cang tot, cac tu cach nhau dung 1 khoang trang.\n    Cac tu khong bi ngat doi giua chung. Biet rang moi tu don le deu co do dai <= width.\n    Hay tra ve danh sach cac dong sau khi chia.\n\n    GIAI THICH THAM SO:\n    - text: chuoi ky tu (str) gom cac tu ngan cach boi khoang trang, do dai tu 1 den 1000.\n    - width: so nguyen duong la do dai toi da cua mot dong (1 <= width <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la cac dong van ban sau khi chia.\n\n    VI DU:\n    - text = \"python master bang b vo dich\", width = 13\n      -> return [\"python master\", \"bang b vo\", \"dich\"]\n\n    GIAI THICH VI DU:\n    - Dong 1: \"python master\" (do dai 13 <= 13).\n    - Dong 2: \"bang b vo\" (do dai 9 <= 13, neu them \"dich\" dai 14 > 13).\n    - Dong 3: \"dich\" (do dai 4 <= 13).",
        "starter": "def solution_411(text, width):\n    \"\"\"\n    DE BAI:\n    Trong mot trinh xem van ban tren dien thoai, can chia mot doan van text thanh cac dong\n    sao cho moi dong co do dai toi da khong qua width ky tu.\n    Moi dong chua cang nhieu tu cang tot, cac tu cach nhau dung 1 khoang trang.\n    Cac tu khong bi ngat doi giua chung. Biet rang moi tu don le deu co do dai <= width.\n    Hay tra ve danh sach cac dong sau khi chia.\n\n    GIAI THICH THAM SO:\n    - text: chuoi ky tu (str) gom cac tu ngan cach boi khoang trang, do dai tu 1 den 1000.\n    - width: so nguyen duong la do dai toi da cua mot dong (1 <= width <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la cac dong van ban sau khi chia.\n\n    VI DU:\n    - text = \"python master bang b vo dich\", width = 13\n      -> return [\"python master\", \"bang b vo\", \"dich\"]\n\n    GIAI THICH VI DU:\n    - Dong 1: \"python master\" (do dai 13 <= 13).\n    - Dong 2: \"bang b vo\" (do dai 9 <= 13, neu them \"dich\" dai 14 > 13).\n    - Dong 3: \"dich\" (do dai 4 <= 13).\n    \"\"\"\n    words = ___1___\n    if not words:\n        return []\n    lines = []\n    curr_line = words[0]\n    for w in words[1:]:\n        if ___2___:\n            curr_line += ___3___\n        else:\n            lines.append(curr_line)\n            curr_line = w\n    lines.append(curr_line)\n    return lines",
        "solution": "def solution_411(text, width):\n    \"\"\"\n    DE BAI:\n    Trong mot trinh xem van ban tren dien thoai, can chia mot doan van text thanh cac dong\n    sao cho moi dong co do dai toi da khong qua width ky tu.\n    Moi dong chua cang nhieu tu cang tot, cac tu cach nhau dung 1 khoang trang.\n    Cac tu khong bi ngat doi giua chung. Biet rang moi tu don le deu co do dai <= width.\n    Hay tra ve danh sach cac dong sau khi chia.\n\n    GIAI THICH THAM SO:\n    - text: chuoi ky tu (str) gom cac tu ngan cach boi khoang trang, do dai tu 1 den 1000.\n    - width: so nguyen duong la do dai toi da cua mot dong (1 <= width <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la cac dong van ban sau khi chia.\n\n    VI DU:\n    - text = \"python master bang b vo dich\", width = 13\n      -> return [\"python master\", \"bang b vo\", \"dich\"]\n\n    GIAI THICH VI DU:\n    - Dong 1: \"python master\" (do dai 13 <= 13).\n    - Dong 2: \"bang b vo\" (do dai 9 <= 13, neu them \"dich\" dai 14 > 13).\n    - Dong 3: \"dich\" (do dai 4 <= 13).\n    \"\"\"\n    words = text.split()  # <-- cho trong (1)\n    if not words:\n        return []\n    lines = []\n    curr_line = words[0]\n    for w in words[1:]:\n        if len(curr_line) + 1 + len(w) <= width:  # <-- cho trong (2)\n            curr_line += \" \" + w  # <-- cho trong (3)\n        else:\n            lines.append(curr_line)\n            curr_line = w\n    lines.append(curr_line)\n    return lines"
      },
      {
        "id": "4.12",
        "fn": "solution_412",
        "title": "Bài 4.12 · solution_412",
        "doc": "DE BAI:\n    Trong mot ung dung chinh sua anh, nguoi dung thuc hien thao tac xoay anh 90 do\n    theo chieu kim dong ho. Buc anh duoc bieu dien duoi dang ma tran vuong N x N.\n    Cho ma tran matrix, hay tra ve ma tran moi sau khi da xoay 90 do theo chieu kim dong ho.\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 50.\n      Gia tri cac phan tu la so nguyen tu 0 den 255.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve mang 2 chieu moi (list cac list int) kich thuoc N x N da xoay 90 do.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n      -> return [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n\n    GIAI THICH VI DU:\n    - Hang 1 [1, 2, 3] bien thanh cot 3 [1, 2, 3] tu tren xuong.\n    - Hang 2 [4, 5, 6] bien thanh cot 2 [4, 5, 6].\n    - Hang 3 [7, 8, 9] bien thanh cot 1 [7, 8, 9].",
        "starter": "def solution_412(matrix):\n    \"\"\"\n    DE BAI:\n    Trong mot ung dung chinh sua anh, nguoi dung thuc hien thao tac xoay anh 90 do\n    theo chieu kim dong ho. Buc anh duoc bieu dien duoi dang ma tran vuong N x N.\n    Cho ma tran matrix, hay tra ve ma tran moi sau khi da xoay 90 do theo chieu kim dong ho.\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 50.\n      Gia tri cac phan tu la so nguyen tu 0 den 255.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve mang 2 chieu moi (list cac list int) kich thuoc N x N da xoay 90 do.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n      -> return [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n\n    GIAI THICH VI DU:\n    - Hang 1 [1, 2, 3] bien thanh cot 3 [1, 2, 3] tu tren xuong.\n    - Hang 2 [4, 5, 6] bien thanh cot 2 [4, 5, 6].\n    - Hang 3 [7, 8, 9] bien thanh cot 1 [7, 8, 9].\n    \"\"\"\n    n = len(matrix)\n    res = ___1___\n    for r in range(n):\n        for c in range(n):\n            res[c][n - 1 - r] = ___2___\n    return res",
        "solution": "def solution_412(matrix):\n    \"\"\"\n    DE BAI:\n    Trong mot ung dung chinh sua anh, nguoi dung thuc hien thao tac xoay anh 90 do\n    theo chieu kim dong ho. Buc anh duoc bieu dien duoi dang ma tran vuong N x N.\n    Cho ma tran matrix, hay tra ve ma tran moi sau khi da xoay 90 do theo chieu kim dong ho.\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 50.\n      Gia tri cac phan tu la so nguyen tu 0 den 255.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve mang 2 chieu moi (list cac list int) kich thuoc N x N da xoay 90 do.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n      -> return [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n\n    GIAI THICH VI DU:\n    - Hang 1 [1, 2, 3] bien thanh cot 3 [1, 2, 3] tu tren xuong.\n    - Hang 2 [4, 5, 6] bien thanh cot 2 [4, 5, 6].\n    - Hang 3 [7, 8, 9] bien thanh cot 1 [7, 8, 9].\n    \"\"\"\n    n = len(matrix)\n    res = [[0] * n for _ in range(n)]  # <-- cho trong (1)\n    for r in range(n):\n        for c in range(n):\n            res[c][n - 1 - r] = matrix[r][c]  # <-- cho trong (2)\n    return res"
      },
      {
        "id": "4.13",
        "fn": "solution_413",
        "title": "Bài 4.13 · solution_413",
        "doc": "DE BAI:\n    He thong phan tich du lieu can tim ky tu khong bi trung lap dau tien trong mot chuoi van ban s.\n    Hay tra ve chi so (0-indexed) cua ky tu dau tien chi xuat hien dung 1 lan trong chuoi.\n    Neu khong co ky tu nao nhu vay hoac chuoi rong, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi gom cac chu cai in thuong 'a'-'z', do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la vi tri (chi so 0-indexed) cua ky tu khong lap dau tien,\n      hoac -1 neu khong ton tai.\n\n    VI DU:\n    - s = \"lovepython\" -> return 0\n    - s = \"aabbcc\" -> return -1\n\n    GIAI THICH VI DU:\n    - O chuoi \"lovepython\", ky tu 'l' o chi so 0 chi xuat hien 1 lan -> tra ve 0.\n    - O chuoi \"aabbcc\", tat ca cac ky tu deu xuat hien 2 lan -> tra ve -1.",
        "starter": "def solution_413(s):\n    \"\"\"\n    DE BAI:\n    He thong phan tich du lieu can tim ky tu khong bi trung lap dau tien trong mot chuoi van ban s.\n    Hay tra ve chi so (0-indexed) cua ky tu dau tien chi xuat hien dung 1 lan trong chuoi.\n    Neu khong co ky tu nao nhu vay hoac chuoi rong, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi gom cac chu cai in thuong 'a'-'z', do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la vi tri (chi so 0-indexed) cua ky tu khong lap dau tien,\n      hoac -1 neu khong ton tai.\n\n    VI DU:\n    - s = \"lovepython\" -> return 0\n    - s = \"aabbcc\" -> return -1\n\n    GIAI THICH VI DU:\n    - O chuoi \"lovepython\", ky tu 'l' o chi so 0 chi xuat hien 1 lan -> tra ve 0.\n    - O chuoi \"aabbcc\", tat ca cac ky tu deu xuat hien 2 lan -> tra ve -1.\n    \"\"\"\n    counts = {}\n    for c in s:\n        counts[c] = ___1___\n    for i, c in ___2___:\n        if ___3___:\n            return i\n    return -1",
        "solution": "def solution_413(s):\n    \"\"\"\n    DE BAI:\n    He thong phan tich du lieu can tim ky tu khong bi trung lap dau tien trong mot chuoi van ban s.\n    Hay tra ve chi so (0-indexed) cua ky tu dau tien chi xuat hien dung 1 lan trong chuoi.\n    Neu khong co ky tu nao nhu vay hoac chuoi rong, tra ve -1.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi gom cac chu cai in thuong 'a'-'z', do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la vi tri (chi so 0-indexed) cua ky tu khong lap dau tien,\n      hoac -1 neu khong ton tai.\n\n    VI DU:\n    - s = \"lovepython\" -> return 0\n    - s = \"aabbcc\" -> return -1\n\n    GIAI THICH VI DU:\n    - O chuoi \"lovepython\", ky tu 'l' o chi so 0 chi xuat hien 1 lan -> tra ve 0.\n    - O chuoi \"aabbcc\", tat ca cac ky tu deu xuat hien 2 lan -> tra ve -1.\n    \"\"\"\n    counts = {}\n    for c in s:\n        counts[c] = counts.get(c, 0) + 1  # <-- cho trong (1)\n    for i, c in enumerate(s):  # <-- cho trong (2)\n        if counts[c] == 1:  # <-- cho trong (3)\n            return i\n    return -1"
      },
      {
        "id": "4.14",
        "fn": "solution_414",
        "title": "Bài 4.14 · solution_414",
        "doc": "DE BAI:\n    He thong kiem tra ma khuyen mai can xac dinh xem ma voucher co phai la mot day con\n    (subsequence) cua chuoi input_str ma nguoi dung nhap vao hay khong.\n    Day con la chuoi duoc tao thanh bang cach giu nguyen thu tu cac ky tu cua chuoi goc,\n    co the bo qua mot so ky tu xen ke.\n    Hay tra ve True neu voucher la day con cua input_str, nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - voucher: chuoi ky tu (str) chua ma khuyen mai can tim, do dai tu 0 den 500.\n    - input_str: chuoi ky tu (str) nguoi dung nhap, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu voucher la day con cua input_str, nguoc lai False).\n\n    VI DU:\n    - voucher = \"abc\", input_str = \"ahbgdc\" -> return True\n    - voucher = \"axc\", input_str = \"ahbgdc\" -> return False\n\n    GIAI THICH VI DU:\n    - \"abc\" xuat hien theo thu tu trong \"ahbgdc\" ('a' o vi tri 0, 'b' o vi tri 2, 'c' o vi tri 5) -> True.\n    - \"axc\" khong phai day con vi 'x' khong co trong \"ahbgdc\" -> False.",
        "starter": "def solution_414(voucher, input_str):\n    \"\"\"\n    DE BAI:\n    He thong kiem tra ma khuyen mai can xac dinh xem ma voucher co phai la mot day con\n    (subsequence) cua chuoi input_str ma nguoi dung nhap vao hay khong.\n    Day con la chuoi duoc tao thanh bang cach giu nguyen thu tu cac ky tu cua chuoi goc,\n    co the bo qua mot so ky tu xen ke.\n    Hay tra ve True neu voucher la day con cua input_str, nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - voucher: chuoi ky tu (str) chua ma khuyen mai can tim, do dai tu 0 den 500.\n    - input_str: chuoi ky tu (str) nguoi dung nhap, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu voucher la day con cua input_str, nguoc lai False).\n\n    VI DU:\n    - voucher = \"abc\", input_str = \"ahbgdc\" -> return True\n    - voucher = \"axc\", input_str = \"ahbgdc\" -> return False\n\n    GIAI THICH VI DU:\n    - \"abc\" xuat hien theo thu tu trong \"ahbgdc\" ('a' o vi tri 0, 'b' o vi tri 2, 'c' o vi tri 5) -> True.\n    - \"axc\" khong phai day con vi 'x' khong co trong \"ahbgdc\" -> False.\n    \"\"\"\n    i, j = 0, 0\n    while ___1___:\n        if ___2___:\n            i += 1\n        j += 1\n    return ___3___",
        "solution": "def solution_414(voucher, input_str):\n    \"\"\"\n    DE BAI:\n    He thong kiem tra ma khuyen mai can xac dinh xem ma voucher co phai la mot day con\n    (subsequence) cua chuoi input_str ma nguoi dung nhap vao hay khong.\n    Day con la chuoi duoc tao thanh bang cach giu nguyen thu tu cac ky tu cua chuoi goc,\n    co the bo qua mot so ky tu xen ke.\n    Hay tra ve True neu voucher la day con cua input_str, nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - voucher: chuoi ky tu (str) chua ma khuyen mai can tim, do dai tu 0 den 500.\n    - input_str: chuoi ky tu (str) nguoi dung nhap, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu voucher la day con cua input_str, nguoc lai False).\n\n    VI DU:\n    - voucher = \"abc\", input_str = \"ahbgdc\" -> return True\n    - voucher = \"axc\", input_str = \"ahbgdc\" -> return False\n\n    GIAI THICH VI DU:\n    - \"abc\" xuat hien theo thu tu trong \"ahbgdc\" ('a' o vi tri 0, 'b' o vi tri 2, 'c' o vi tri 5) -> True.\n    - \"axc\" khong phai day con vi 'x' khong co trong \"ahbgdc\" -> False.\n    \"\"\"\n    i, j = 0, 0\n    while i < len(voucher) and j < len(input_str):  # <-- cho trong (1)\n        if voucher[i] == input_str[j]:  # <-- cho trong (2)\n            i += 1\n        j += 1\n    return i == len(voucher)  # <-- cho trong (3)"
      },
      {
        "id": "4.15",
        "fn": "solution_415",
        "title": "Bài 4.15 · solution_415",
        "doc": "DE BAI:\n    Tren mot bang so vuong kich thuoc N x N, nguoi ta can tinh tong gia tri cua tat ca cac o\n    nam tren 2 duong cheo (duong cheo chinh va duong cheo phu).\n    Luu y: Neu o nao nam tai giao diem cua ca 2 duong cheo (khi N la so le) thi gia tri cua o do\n    chi duoc tinh dung 1 lan.\n    Cho ma tran grid, hay tinh va tra ve tong gia tri cac phan tu tren 2 duong cheo.\n\n    GIAI THICH THAM SO:\n    - grid: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 100.\n      Gia tri cac phan tu la so nguyen tu -1000 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri cac phan tu tren 2 duong cheo.\n\n    VI DU:\n    - grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return 25\n\n    GIAI THICH VI DU:\n    - Cac phan tu tren duong cheo chinh: grid[0][0]=1, grid[1][1]=5, grid[2][2]=9.\n    - Cac phan tu tren duong cheo phu: grid[0][2]=3, grid[1][1]=5, grid[2][0]=7.\n    - O trung tam (1, 1) mang gia tri 5 chi tinh 1 lan.\n    - Tong: 1 + 5 + 9 + 3 + 7 = 25.",
        "starter": "def solution_415(grid):\n    \"\"\"\n    DE BAI:\n    Tren mot bang so vuong kich thuoc N x N, nguoi ta can tinh tong gia tri cua tat ca cac o\n    nam tren 2 duong cheo (duong cheo chinh va duong cheo phu).\n    Luu y: Neu o nao nam tai giao diem cua ca 2 duong cheo (khi N la so le) thi gia tri cua o do\n    chi duoc tinh dung 1 lan.\n    Cho ma tran grid, hay tinh va tra ve tong gia tri cac phan tu tren 2 duong cheo.\n\n    GIAI THICH THAM SO:\n    - grid: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 100.\n      Gia tri cac phan tu la so nguyen tu -1000 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri cac phan tu tren 2 duong cheo.\n\n    VI DU:\n    - grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return 25\n\n    GIAI THICH VI DU:\n    - Cac phan tu tren duong cheo chinh: grid[0][0]=1, grid[1][1]=5, grid[2][2]=9.\n    - Cac phan tu tren duong cheo phu: grid[0][2]=3, grid[1][1]=5, grid[2][0]=7.\n    - O trung tam (1, 1) mang gia tri 5 chi tinh 1 lan.\n    - Tong: 1 + 5 + 9 + 3 + 7 = 25.\n    \"\"\"\n    n = len(grid)\n    total = 0\n    for i in range(n):\n        total += ___1___\n        if ___2___:\n            total += ___3___\n    return total",
        "solution": "def solution_415(grid):\n    \"\"\"\n    DE BAI:\n    Tren mot bang so vuong kich thuoc N x N, nguoi ta can tinh tong gia tri cua tat ca cac o\n    nam tren 2 duong cheo (duong cheo chinh va duong cheo phu).\n    Luu y: Neu o nao nam tai giao diem cua ca 2 duong cheo (khi N la so le) thi gia tri cua o do\n    chi duoc tinh dung 1 lan.\n    Cho ma tran grid, hay tinh va tra ve tong gia tri cac phan tu tren 2 duong cheo.\n\n    GIAI THICH THAM SO:\n    - grid: mang 2 chieu vuong (list cac list int) kich thuoc N x N voi N tu 1 den 100.\n      Gia tri cac phan tu la so nguyen tu -1000 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri cac phan tu tren 2 duong cheo.\n\n    VI DU:\n    - grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return 25\n\n    GIAI THICH VI DU:\n    - Cac phan tu tren duong cheo chinh: grid[0][0]=1, grid[1][1]=5, grid[2][2]=9.\n    - Cac phan tu tren duong cheo phu: grid[0][2]=3, grid[1][1]=5, grid[2][0]=7.\n    - O trung tam (1, 1) mang gia tri 5 chi tinh 1 lan.\n    - Tong: 1 + 5 + 9 + 3 + 7 = 25.\n    \"\"\"\n    n = len(grid)\n    total = 0\n    for i in range(n):\n        total += grid[i][i]  # <-- cho trong (1)\n        if i != n - 1 - i:  # <-- cho trong (2)\n            total += grid[i][n - 1 - i]  # <-- cho trong (3)\n    return total"
      }
    ]
  },
  "5": {
    "name": "Nhóm 5 · Debugging chuẩn format solution()",
    "items": [
      {
        "id": "5.01",
        "fn": "solution_501",
        "title": "Bài 5.01 · solution_501",
        "doc": "DE BAI:\n    Mot sieu thi co chuong trinh tich diem thuong cho khach hang thanh vien.\n    Moi mat hang co gia tien la prices[i]. Quy tac tich diem cho tung mat hang nhu sau:\n    - Neu gia mat hang tu 50000 dong tro len (prices[i] >= 50000), diem thuong la\n      (prices[i] // 1000) * 2 diem.\n    - Neu gia mat hang duoi 50000 dong (prices[i] < 50000), diem thuong la\n      prices[i] // 1000 diem.\n    Hay tinh va tra ve tong so diem thuong ma khach hang nhan duoc cho ca hoa don.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen khong am dai dien cho gia cua tung mat hang trong hoa don.\n      Do dai danh sach tu 1 den 1000. Moi phan tu tu 0 den 10000000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so diem thuong tich luy duoc.\n\n    VI DU:\n    - prices = [50000, 30000, 120000] -> return 370\n\n    GIAI THICH VI DU:\n    - Mat hang 1: 50000 >= 50000 -> (50000 // 1000) * 2 = 100 diem.\n    - Mat hang 2: 30000 < 50000 -> 30000 // 1000 = 30 diem.\n    - Mat hang 3: 120000 >= 50000 -> (120000 // 1000) * 2 = 240 diem.\n    - Tong diem thuong: 100 + 30 + 240 = 370 diem.",
        "starter": "def solution_501(prices):\n    \"\"\"\n    DE BAI:\n    Mot sieu thi co chuong trinh tich diem thuong cho khach hang thanh vien.\n    Moi mat hang co gia tien la prices[i]. Quy tac tich diem cho tung mat hang nhu sau:\n    - Neu gia mat hang tu 50000 dong tro len (prices[i] >= 50000), diem thuong la\n      (prices[i] // 1000) * 2 diem.\n    - Neu gia mat hang duoi 50000 dong (prices[i] < 50000), diem thuong la\n      prices[i] // 1000 diem.\n    Hay tinh va tra ve tong so diem thuong ma khach hang nhan duoc cho ca hoa don.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen khong am dai dien cho gia cua tung mat hang trong hoa don.\n      Do dai danh sach tu 1 den 1000. Moi phan tu tu 0 den 10000000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so diem thuong tich luy duoc.\n\n    VI DU:\n    - prices = [50000, 30000, 120000] -> return 370\n\n    GIAI THICH VI DU:\n    - Mat hang 1: 50000 >= 50000 -> (50000 // 1000) * 2 = 100 diem.\n    - Mat hang 2: 30000 < 50000 -> 30000 // 1000 = 30 diem.\n    - Mat hang 3: 120000 >= 50000 -> (120000 // 1000) * 2 = 240 diem.\n    - Tong diem thuong: 100 + 30 + 240 = 370 diem.\n    \"\"\"\n    total_points = 0\n    for p in prices:\n        if p > 50000:\n            total_points += (p // 1000) * 2\n        else:\n            total_points += p // 1000\n    return total_points",
        "solution": "def solution_501(prices):\n    \"\"\"\n    DE BAI:\n    Mot sieu thi co chuong trinh tich diem thuong cho khach hang thanh vien.\n    Moi mat hang co gia tien la prices[i]. Quy tac tich diem cho tung mat hang nhu sau:\n    - Neu gia mat hang tu 50000 dong tro len (prices[i] >= 50000), diem thuong la\n      (prices[i] // 1000) * 2 diem.\n    - Neu gia mat hang duoi 50000 dong (prices[i] < 50000), diem thuong la\n      prices[i] // 1000 diem.\n    Hay tinh va tra ve tong so diem thuong ma khach hang nhan duoc cho ca hoa don.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen khong am dai dien cho gia cua tung mat hang trong hoa don.\n      Do dai danh sach tu 1 den 1000. Moi phan tu tu 0 den 10000000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong so diem thuong tich luy duoc.\n\n    VI DU:\n    - prices = [50000, 30000, 120000] -> return 370\n\n    GIAI THICH VI DU:\n    - Mat hang 1: 50000 >= 50000 -> (50000 // 1000) * 2 = 100 diem.\n    - Mat hang 2: 30000 < 50000 -> 30000 // 1000 = 30 diem.\n    - Mat hang 3: 120000 >= 50000 -> (120000 // 1000) * 2 = 240 diem.\n    - Tong diem thuong: 100 + 30 + 240 = 370 diem.\n    \"\"\"\n    total_points = 0\n    for p in prices:\n        if p >= 50000:\n            total_points += (p // 1000) * 2\n        else:\n            total_points += p // 1000\n    return total_points"
      },
      {
        "id": "5.02",
        "fn": "solution_502",
        "title": "Bài 5.02 · solution_502",
        "doc": "DE BAI:\n    Mot nha dau tu theo doi gia mot ma co phieu trong N ngay lien tiep.\n    Nha dau tu muon tim giai doan k ngay lien tiep co tong gia tri co phieu lon nhat\n    de danh gia xu huong tang truong manh nhat.\n    Cho danh sach prices va so nguyen k, hay tim tong gia tri lon nhat cua mot doan\n    k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen duong la gia co phieu trong tung ngay, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can xet (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - prices = [10, 20, 100, 40, 50], k = 2 -> return 140\n\n    GIAI THICH VI DU:\n    - Cac doan 2 ngay lien tiep: [10, 20]->30, [20, 100]->120, [100, 40]->140, [40, 50]->90.\n    - Tong lon nhat la 140 (doan [100, 40]).",
        "starter": "def solution_502(prices, k):\n    \"\"\"\n    DE BAI:\n    Mot nha dau tu theo doi gia mot ma co phieu trong N ngay lien tiep.\n    Nha dau tu muon tim giai doan k ngay lien tiep co tong gia tri co phieu lon nhat\n    de danh gia xu huong tang truong manh nhat.\n    Cho danh sach prices va so nguyen k, hay tim tong gia tri lon nhat cua mot doan\n    k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen duong la gia co phieu trong tung ngay, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can xet (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - prices = [10, 20, 100, 40, 50], k = 2 -> return 140\n\n    GIAI THICH VI DU:\n    - Cac doan 2 ngay lien tiep: [10, 20]->30, [20, 100]->120, [100, 40]->140, [40, 50]->90.\n    - Tong lon nhat la 140 (doan [100, 40]).\n    \"\"\"\n    max_sum = sum(prices[:k])\n    for i in range(len(prices) - k):\n        curr_sum = sum(prices[i:i+k])\n        if curr_sum > max_sum:\n            max_sum = curr_sum\n    return max_sum",
        "solution": "def solution_502(prices, k):\n    \"\"\"\n    DE BAI:\n    Mot nha dau tu theo doi gia mot ma co phieu trong N ngay lien tiep.\n    Nha dau tu muon tim giai doan k ngay lien tiep co tong gia tri co phieu lon nhat\n    de danh gia xu huong tang truong manh nhat.\n    Cho danh sach prices va so nguyen k, hay tim tong gia tri lon nhat cua mot doan\n    k ngay lien tiep.\n\n    GIAI THICH THAM SO:\n    - prices: list cac so nguyen duong la gia co phieu trong tung ngay, do dai N tu 1 den 1000.\n    - k: so nguyen duong la so ngay lien tiep can xet (1 <= k <= N).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat cua k ngay lien tiep.\n\n    VI DU:\n    - prices = [10, 20, 100, 40, 50], k = 2 -> return 140\n\n    GIAI THICH VI DU:\n    - Cac doan 2 ngay lien tiep: [10, 20]->30, [20, 100]->120, [100, 40]->140, [40, 50]->90.\n    - Tong lon nhat la 140 (doan [100, 40]).\n    \"\"\"\n    max_sum = sum(prices[:k])\n    curr_sum = max_sum\n    for i in range(k, len(prices)):\n        curr_sum += prices[i] - prices[i - k]\n        if curr_sum > max_sum:\n            max_sum = curr_sum\n    return max_sum"
      },
      {
        "id": "5.03",
        "fn": "solution_503",
        "title": "Bài 5.03 · solution_503",
        "doc": "DE BAI:\n    Trong mot mo phong vat ly hat, muc nang luong cua hat thay doi qua tung buoc steps\n    theo quy tac day truy hoi:\n    - O buoc 1: prev = initial_energy, curr = initial_energy.\n    - Tu buoc 2 tro di, muc nang luong moi bang: curr_new = curr + 2 * prev.\n      Sau do cap nhat: prev tro thanh curr cu, va curr tro thanh curr_new.\n    Hay tinh va tra ve muc nang luong cua hat sau dung steps buoc.\n\n    GIAI THICH THAM SO:\n    - initial_energy: so nguyen duong la muc nang luong ban dau (1 <= initial_energy <= 100).\n    - steps: so nguyen duong la so buoc can tinh (1 <= steps <= 30).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la muc nang luong sau steps buoc.\n\n    VI DU:\n    - initial_energy = 2, steps = 3 -> return 10\n\n    GIAI THICH VI DU:\n    - Buoc 1: prev = 2, curr = 2.\n    - Buoc 2: curr_new = 2 + 2 * 2 = 6; prev = 2, curr = 6.\n    - Buoc 3: curr_new = 6 + 2 * 2 = 10; prev = 6, curr = 10.\n    - Ket qua sau 3 buoc la 10.",
        "starter": "def solution_503(initial_energy, steps):\n    \"\"\"\n    DE BAI:\n    Trong mot mo phong vat ly hat, muc nang luong cua hat thay doi qua tung buoc steps\n    theo quy tac day truy hoi:\n    - O buoc 1: prev = initial_energy, curr = initial_energy.\n    - Tu buoc 2 tro di, muc nang luong moi bang: curr_new = curr + 2 * prev.\n      Sau do cap nhat: prev tro thanh curr cu, va curr tro thanh curr_new.\n    Hay tinh va tra ve muc nang luong cua hat sau dung steps buoc.\n\n    GIAI THICH THAM SO:\n    - initial_energy: so nguyen duong la muc nang luong ban dau (1 <= initial_energy <= 100).\n    - steps: so nguyen duong la so buoc can tinh (1 <= steps <= 30).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la muc nang luong sau steps buoc.\n\n    VI DU:\n    - initial_energy = 2, steps = 3 -> return 10\n\n    GIAI THICH VI DU:\n    - Buoc 1: prev = 2, curr = 2.\n    - Buoc 2: curr_new = 2 + 2 * 2 = 6; prev = 2, curr = 6.\n    - Buoc 3: curr_new = 6 + 2 * 2 = 10; prev = 6, curr = 10.\n    - Ket qua sau 3 buoc la 10.\n    \"\"\"\n    prev = initial_energy\n    curr = initial_energy\n    for _ in range(steps - 1):\n        prev = curr\n        curr = curr + 2 * prev\n    return curr",
        "solution": "def solution_503(initial_energy, steps):\n    \"\"\"\n    DE BAI:\n    Trong mot mo phong vat ly hat, muc nang luong cua hat thay doi qua tung buoc steps\n    theo quy tac day truy hoi:\n    - O buoc 1: prev = initial_energy, curr = initial_energy.\n    - Tu buoc 2 tro di, muc nang luong moi bang: curr_new = curr + 2 * prev.\n      Sau do cap nhat: prev tro thanh curr cu, va curr tro thanh curr_new.\n    Hay tinh va tra ve muc nang luong cua hat sau dung steps buoc.\n\n    GIAI THICH THAM SO:\n    - initial_energy: so nguyen duong la muc nang luong ban dau (1 <= initial_energy <= 100).\n    - steps: so nguyen duong la so buoc can tinh (1 <= steps <= 30).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la muc nang luong sau steps buoc.\n\n    VI DU:\n    - initial_energy = 2, steps = 3 -> return 10\n\n    GIAI THICH VI DU:\n    - Buoc 1: prev = 2, curr = 2.\n    - Buoc 2: curr_new = 2 + 2 * 2 = 6; prev = 2, curr = 6.\n    - Buoc 3: curr_new = 6 + 2 * 2 = 10; prev = 6, curr = 10.\n    - Ket qua sau 3 buoc la 10.\n    \"\"\"\n    prev = initial_energy\n    curr = initial_energy\n    for _ in range(steps - 1):\n        next_val = curr + 2 * prev\n        prev = curr\n        curr = next_val\n    return curr"
      },
      {
        "id": "5.04",
        "fn": "solution_504",
        "title": "Bài 5.04 · solution_504",
        "doc": "DE BAI:\n    Mot cong ty logistic can chia deu tong khoi luong cac kien hang cho num_trucks xe tai.\n    Biet tong khoi luong la tong cua tat ca cac phan tu trong package_weights.\n    Hay tinh tai trong trung binh moi xe phai cho.\n    Neu ket qua chia la so thap phan, chi lay phan nguyen (cat bo phan thap phan).\n\n    GIAI THICH THAM SO:\n    - package_weights: list cac so nguyen khong am la khoi luong tung kien hang, do dai tu 1 den 1000.\n    - num_trucks: so nguyen duong la so luong xe tai (1 <= num_trucks <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong trung binh moi xe tai.\n\n    VI DU:\n    - package_weights = [100, 200, 350], num_trucks = 2 -> return 325\n\n    GIAI THICH VI DU:\n    - Tong khoi luong: 100 + 200 + 350 = 650.\n    - Tai trong moi xe: 650 // 2 = 325 (kieu int).",
        "starter": "def solution_504(package_weights, num_trucks):\n    \"\"\"\n    DE BAI:\n    Mot cong ty logistic can chia deu tong khoi luong cac kien hang cho num_trucks xe tai.\n    Biet tong khoi luong la tong cua tat ca cac phan tu trong package_weights.\n    Hay tinh tai trong trung binh moi xe phai cho.\n    Neu ket qua chia la so thap phan, chi lay phan nguyen (cat bo phan thap phan).\n\n    GIAI THICH THAM SO:\n    - package_weights: list cac so nguyen khong am la khoi luong tung kien hang, do dai tu 1 den 1000.\n    - num_trucks: so nguyen duong la so luong xe tai (1 <= num_trucks <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong trung binh moi xe tai.\n\n    VI DU:\n    - package_weights = [100, 200, 350], num_trucks = 2 -> return 325\n\n    GIAI THICH VI DU:\n    - Tong khoi luong: 100 + 200 + 350 = 650.\n    - Tai trong moi xe: 650 // 2 = 325 (kieu int).\n    \"\"\"\n    total_weight = sum(package_weights)\n    return total_weight / num_trucks",
        "solution": "def solution_504(package_weights, num_trucks):\n    \"\"\"\n    DE BAI:\n    Mot cong ty logistic can chia deu tong khoi luong cac kien hang cho num_trucks xe tai.\n    Biet tong khoi luong la tong cua tat ca cac phan tu trong package_weights.\n    Hay tinh tai trong trung binh moi xe phai cho.\n    Neu ket qua chia la so thap phan, chi lay phan nguyen (cat bo phan thap phan).\n\n    GIAI THICH THAM SO:\n    - package_weights: list cac so nguyen khong am la khoi luong tung kien hang, do dai tu 1 den 1000.\n    - num_trucks: so nguyen duong la so luong xe tai (1 <= num_trucks <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong trung binh moi xe tai.\n\n    VI DU:\n    - package_weights = [100, 200, 350], num_trucks = 2 -> return 325\n\n    GIAI THICH VI DU:\n    - Tong khoi luong: 100 + 200 + 350 = 650.\n    - Tai trong moi xe: 650 // 2 = 325 (kieu int).\n    \"\"\"\n    total_weight = sum(package_weights)\n    return total_weight // num_trucks"
      },
      {
        "id": "5.05",
        "fn": "solution_505",
        "title": "Bài 5.05 · solution_505",
        "doc": "DE BAI:\n    Mot doanh nghiep tinh tien thuong hieu suat cuoi nam cho nhan vien theo cong thuc:\n    Tien thuong = salary * (kpi_score * weight / 1000).\n    Luu y quan trong: Neu tien thuong tinh ra la so thap phan, chi lay phan so nguyen\n    (cat bo phan le, khong lam tron theo quy tac lam tron so).\n\n    GIAI THICH THAM SO:\n    - salary: so nguyen duong la muc luong co ban cua nhan vien (1000 <= salary <= 100000000).\n    - kpi_score: so nguyen khong am la diem KPI dat duoc (0 <= kpi_score <= 100).\n    - weight: so nguyen duong la he so trong so phong ban (1 <= weight <= 10).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so tien thuong thuc nhan sau khi da cat bo phan thap phan.\n\n    VI DU:\n    - salary = 1017, kpi_score = 55, weight = 1 -> return 55\n\n    GIAI THICH VI DU:\n    - Tien thuong chua cat le: 1017 * (55 * 1 / 1000) = 1017 * 0.055 = 55.935.\n    - Cat bo phan thap phan (khong lam tron len 56) -> return 55.",
        "starter": "def solution_505(salary, kpi_score, weight):\n    \"\"\"\n    DE BAI:\n    Mot doanh nghiep tinh tien thuong hieu suat cuoi nam cho nhan vien theo cong thuc:\n    Tien thuong = salary * (kpi_score * weight / 1000).\n    Luu y quan trong: Neu tien thuong tinh ra la so thap phan, chi lay phan so nguyen\n    (cat bo phan le, khong lam tron theo quy tac lam tron so).\n\n    GIAI THICH THAM SO:\n    - salary: so nguyen duong la muc luong co ban cua nhan vien (1000 <= salary <= 100000000).\n    - kpi_score: so nguyen khong am la diem KPI dat duoc (0 <= kpi_score <= 100).\n    - weight: so nguyen duong la he so trong so phong ban (1 <= weight <= 10).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so tien thuong thuc nhan sau khi da cat bo phan thap phan.\n\n    VI DU:\n    - salary = 1017, kpi_score = 55, weight = 1 -> return 55\n\n    GIAI THICH VI DU:\n    - Tien thuong chua cat le: 1017 * (55 * 1 / 1000) = 1017 * 0.055 = 55.935.\n    - Cat bo phan thap phan (khong lam tron len 56) -> return 55.\n    \"\"\"\n    raw_bonus = salary * (kpi_score * weight / 1000)\n    return round(raw_bonus)",
        "solution": "def solution_505(salary, kpi_score, weight):\n    \"\"\"\n    DE BAI:\n    Mot doanh nghiep tinh tien thuong hieu suat cuoi nam cho nhan vien theo cong thuc:\n    Tien thuong = salary * (kpi_score * weight / 1000).\n    Luu y quan trong: Neu tien thuong tinh ra la so thap phan, chi lay phan so nguyen\n    (cat bo phan le, khong lam tron theo quy tac lam tron so).\n\n    GIAI THICH THAM SO:\n    - salary: so nguyen duong la muc luong co ban cua nhan vien (1000 <= salary <= 100000000).\n    - kpi_score: so nguyen khong am la diem KPI dat duoc (0 <= kpi_score <= 100).\n    - weight: so nguyen duong la he so trong so phong ban (1 <= weight <= 10).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so tien thuong thuc nhan sau khi da cat bo phan thap phan.\n\n    VI DU:\n    - salary = 1017, kpi_score = 55, weight = 1 -> return 55\n\n    GIAI THICH VI DU:\n    - Tien thuong chua cat le: 1017 * (55 * 1 / 1000) = 1017 * 0.055 = 55.935.\n    - Cat bo phan thap phan (khong lam tron len 56) -> return 55.\n    \"\"\"\n    raw_bonus = salary * (kpi_score * weight / 1000)\n    return int(raw_bonus)"
      },
      {
        "id": "5.06",
        "fn": "solution_506",
        "title": "Bài 5.06 · solution_506",
        "doc": "DE BAI:\n    Ban to chuc can chuan hoa danh sach diem so scores cua cac thi sinh bang cach lay\n    moi diem so tru di diem so cua thi sinh dau tien scores[0].\n    Yeu cau quan trong: Ham phai tra ve mot danh sach diem moi da duoc chuan hoa va\n    TUYET DOI KHONG duoc lam thay doi du lieu cua danh sach scores ban dau truyen vao.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen la diem cua cac thi sinh, do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list moi chua cac diem so da duoc tru di gia tri scores[0] goc.\n\n    VI DU:\n    - scores = [10, 25, 30] -> return [0, 15, 20]\n\n    GIAI THICH VI DU:\n    - Diem moc scores[0] = 10.\n    - Phan tu 0: 10 - 10 = 0.\n    - Phan tu 1: 25 - 10 = 15.\n    - Phan tu 2: 30 - 10 = 20.\n    - Ket qua tra ve: [0, 15, 20].",
        "starter": "def solution_506(scores):\n    \"\"\"\n    DE BAI:\n    Ban to chuc can chuan hoa danh sach diem so scores cua cac thi sinh bang cach lay\n    moi diem so tru di diem so cua thi sinh dau tien scores[0].\n    Yeu cau quan trong: Ham phai tra ve mot danh sach diem moi da duoc chuan hoa va\n    TUYET DOI KHONG duoc lam thay doi du lieu cua danh sach scores ban dau truyen vao.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen la diem cua cac thi sinh, do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list moi chua cac diem so da duoc tru di gia tri scores[0] goc.\n\n    VI DU:\n    - scores = [10, 25, 30] -> return [0, 15, 20]\n\n    GIAI THICH VI DU:\n    - Diem moc scores[0] = 10.\n    - Phan tu 0: 10 - 10 = 0.\n    - Phan tu 1: 25 - 10 = 15.\n    - Phan tu 2: 30 - 10 = 20.\n    - Ket qua tra ve: [0, 15, 20].\n    \"\"\"\n    res = scores\n    for i in range(len(res)):\n        res[i] = res[i] - scores[0]\n    return res",
        "solution": "def solution_506(scores):\n    \"\"\"\n    DE BAI:\n    Ban to chuc can chuan hoa danh sach diem so scores cua cac thi sinh bang cach lay\n    moi diem so tru di diem so cua thi sinh dau tien scores[0].\n    Yeu cau quan trong: Ham phai tra ve mot danh sach diem moi da duoc chuan hoa va\n    TUYET DOI KHONG duoc lam thay doi du lieu cua danh sach scores ban dau truyen vao.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen la diem cua cac thi sinh, do dai tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list moi chua cac diem so da duoc tru di gia tri scores[0] goc.\n\n    VI DU:\n    - scores = [10, 25, 30] -> return [0, 15, 20]\n\n    GIAI THICH VI DU:\n    - Diem moc scores[0] = 10.\n    - Phan tu 0: 10 - 10 = 0.\n    - Phan tu 1: 25 - 10 = 15.\n    - Phan tu 2: 30 - 10 = 20.\n    - Ket qua tra ve: [0, 15, 20].\n    \"\"\"\n    base = scores[0]\n    res = []\n    for s in scores:\n        res.append(s - base)\n    return res"
      },
      {
        "id": "5.07",
        "fn": "solution_507",
        "title": "Bài 5.07 · solution_507",
        "doc": "DE BAI:\n    Hoi dong tuyen sinh can xep hang cac thi sinh theo quy tac uu tien sau:\n    1. Thi sinh co diem thi (score) CAO HON duoc xep truoc (giam dan theo diem).\n    2. Neu co cung diem thi, thi sinh co ma dinh danh (id) NHO HON theo thu tu tu dien\n       se duoc xep truoc (tang dan theo ma id).\n    Hay tra ve danh sach ma id cua cac thi sinh sau khi da sap xep dung thu tu.\n\n    GIAI THICH THAM SO:\n    - students: list cac tuple hoac list co 2 phan tu [id, score], trong do:\n      + id: chuoi ky tu (str) dai dien cho ma thi sinh.\n      + score: so nguyen (int) dai dien cho diem thi (0 <= score <= 100).\n      So luong thi sinh tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la danh sach id cua cac thi sinh da sap xep.\n\n    VI DU:\n    - students = [(\"B\", 85), (\"A\", 90), (\"C\", 85)] -> return [\"A\", \"B\", \"C\"]\n\n    GIAI THICH VI DU:\n    - Thi sinh \"A\" co 90 diem (cao nhat) -> xep thu 1.\n    - Thi sinh \"B\" va \"C\" deu co 85 diem, nhung ma \"B\" < \"C\" theo thu tu tu dien -> \"B\" xep truoc \"C\".\n    - Ket qua tra ve: [\"A\", \"B\", \"C\"].",
        "starter": "def solution_507(students):\n    \"\"\"\n    DE BAI:\n    Hoi dong tuyen sinh can xep hang cac thi sinh theo quy tac uu tien sau:\n    1. Thi sinh co diem thi (score) CAO HON duoc xep truoc (giam dan theo diem).\n    2. Neu co cung diem thi, thi sinh co ma dinh danh (id) NHO HON theo thu tu tu dien\n       se duoc xep truoc (tang dan theo ma id).\n    Hay tra ve danh sach ma id cua cac thi sinh sau khi da sap xep dung thu tu.\n\n    GIAI THICH THAM SO:\n    - students: list cac tuple hoac list co 2 phan tu [id, score], trong do:\n      + id: chuoi ky tu (str) dai dien cho ma thi sinh.\n      + score: so nguyen (int) dai dien cho diem thi (0 <= score <= 100).\n      So luong thi sinh tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la danh sach id cua cac thi sinh da sap xep.\n\n    VI DU:\n    - students = [(\"B\", 85), (\"A\", 90), (\"C\", 85)] -> return [\"A\", \"B\", \"C\"]\n\n    GIAI THICH VI DU:\n    - Thi sinh \"A\" co 90 diem (cao nhat) -> xep thu 1.\n    - Thi sinh \"B\" va \"C\" deu co 85 diem, nhung ma \"B\" < \"C\" theo thu tu tu dien -> \"B\" xep truoc \"C\".\n    - Ket qua tra ve: [\"A\", \"B\", \"C\"].\n    \"\"\"\n    sorted_students = sorted(students, key=lambda s: (s[1], s[0]))\n    return [s[0] for s in sorted_students]",
        "solution": "def solution_507(students):\n    \"\"\"\n    DE BAI:\n    Hoi dong tuyen sinh can xep hang cac thi sinh theo quy tac uu tien sau:\n    1. Thi sinh co diem thi (score) CAO HON duoc xep truoc (giam dan theo diem).\n    2. Neu co cung diem thi, thi sinh co ma dinh danh (id) NHO HON theo thu tu tu dien\n       se duoc xep truoc (tang dan theo ma id).\n    Hay tra ve danh sach ma id cua cac thi sinh sau khi da sap xep dung thu tu.\n\n    GIAI THICH THAM SO:\n    - students: list cac tuple hoac list co 2 phan tu [id, score], trong do:\n      + id: chuoi ky tu (str) dai dien cho ma thi sinh.\n      + score: so nguyen (int) dai dien cho diem thi (0 <= score <= 100).\n      So luong thi sinh tu 1 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac chuoi (list str) la danh sach id cua cac thi sinh da sap xep.\n\n    VI DU:\n    - students = [(\"B\", 85), (\"A\", 90), (\"C\", 85)] -> return [\"A\", \"B\", \"C\"]\n\n    GIAI THICH VI DU:\n    - Thi sinh \"A\" co 90 diem (cao nhat) -> xep thu 1.\n    - Thi sinh \"B\" va \"C\" deu co 85 diem, nhung ma \"B\" < \"C\" theo thu tu tu dien -> \"B\" xep truoc \"C\".\n    - Ket qua tra ve: [\"A\", \"B\", \"C\"].\n    \"\"\"\n    sorted_students = sorted(students, key=lambda s: (-s[1], s[0]))\n    return [s[0] for s in sorted_students]"
      },
      {
        "id": "5.08",
        "fn": "solution_508",
        "title": "Bài 5.08 · solution_508",
        "doc": "DE BAI:\n    Mot tram khi tuong ghi nhan danh sach nhiet do readings (don vi do C) tai cac thoi diem\n    trong ngay. Danh sach co the bao gom ca nhiet do duong, am hoac bang 0.\n    Hay tim va tra ve muc nhiet do thap nhat trong ngay.\n\n    GIAI THICH THAM SO:\n    - readings: list cac so nguyen dai dien cho nhiet do do duoc, do dai tu 1 den 1000.\n      Gia tri tung phan tu trong khoang tu -100 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la nhiet do thap nhat trong readings.\n\n    VI DU:\n    - readings = [12, 18, 5, 22, 9] -> return 5\n    - readings = [-3, -7, -1] -> return -7\n\n    GIAI THICH VI DU:\n    - O vi du 1, tat ca nhiet do deu duong, gia tri nho nhat la 5.\n    - O vi du 2, tat ca nhiet do deu am, gia tri nho nhat la -7.",
        "starter": "def solution_508(readings):\n    \"\"\"\n    DE BAI:\n    Mot tram khi tuong ghi nhan danh sach nhiet do readings (don vi do C) tai cac thoi diem\n    trong ngay. Danh sach co the bao gom ca nhiet do duong, am hoac bang 0.\n    Hay tim va tra ve muc nhiet do thap nhat trong ngay.\n\n    GIAI THICH THAM SO:\n    - readings: list cac so nguyen dai dien cho nhiet do do duoc, do dai tu 1 den 1000.\n      Gia tri tung phan tu trong khoang tu -100 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la nhiet do thap nhat trong readings.\n\n    VI DU:\n    - readings = [12, 18, 5, 22, 9] -> return 5\n    - readings = [-3, -7, -1] -> return -7\n\n    GIAI THICH VI DU:\n    - O vi du 1, tat ca nhiet do deu duong, gia tri nho nhat la 5.\n    - O vi du 2, tat ca nhiet do deu am, gia tri nho nhat la -7.\n    \"\"\"\n    min_temp = 0\n    for r in readings:\n        if r < min_temp:\n            min_temp = r\n    return min_temp",
        "solution": "def solution_508(readings):\n    \"\"\"\n    DE BAI:\n    Mot tram khi tuong ghi nhan danh sach nhiet do readings (don vi do C) tai cac thoi diem\n    trong ngay. Danh sach co the bao gom ca nhiet do duong, am hoac bang 0.\n    Hay tim va tra ve muc nhiet do thap nhat trong ngay.\n\n    GIAI THICH THAM SO:\n    - readings: list cac so nguyen dai dien cho nhiet do do duoc, do dai tu 1 den 1000.\n      Gia tri tung phan tu trong khoang tu -100 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la nhiet do thap nhat trong readings.\n\n    VI DU:\n    - readings = [12, 18, 5, 22, 9] -> return 5\n    - readings = [-3, -7, -1] -> return -7\n\n    GIAI THICH VI DU:\n    - O vi du 1, tat ca nhiet do deu duong, gia tri nho nhat la 5.\n    - O vi du 2, tat ca nhiet do deu am, gia tri nho nhat la -7.\n    \"\"\"\n    min_temp = readings[0]\n    for r in readings[1:]:\n        if r < min_temp:\n            min_temp = r\n    return min_temp"
      },
      {
        "id": "5.09",
        "fn": "solution_509",
        "title": "Bài 5.09 · solution_509",
        "doc": "DE BAI:\n    Mot he thong kiem tra kho hang can xac dinh xem trong danh sach ma hang items\n    co ton tai it nhat mot ma hang chia het cho target hay khong.\n    Neu co it nhat mot ma thoa man, tra ve True; neu da duyet het danh sach ma khong co\n    ma nao chia het cho target, tra ve False.\n\n    GIAI THICH THAM SO:\n    - items: list cac so nguyen duong la ma cac mat hang, do dai tu 1 den 1000.\n    - target: so nguyen duong la so can kiem tra phep chia het (1 <= target <= 1000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co phan tu chia het cho target, nguoc lai False).\n\n    VI DU:\n    - items = [7, 11, 15, 22], target = 5 -> return True\n    - items = [3, 7, 11], target = 2 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Phan tu 15 chia het cho 5 -> return True.\n    - Vi du 2: Khong co phan tu nao trong [3, 7, 11] chia het cho 2 -> return False.",
        "starter": "def solution_509(items, target):\n    \"\"\"\n    DE BAI:\n    Mot he thong kiem tra kho hang can xac dinh xem trong danh sach ma hang items\n    co ton tai it nhat mot ma hang chia het cho target hay khong.\n    Neu co it nhat mot ma thoa man, tra ve True; neu da duyet het danh sach ma khong co\n    ma nao chia het cho target, tra ve False.\n\n    GIAI THICH THAM SO:\n    - items: list cac so nguyen duong la ma cac mat hang, do dai tu 1 den 1000.\n    - target: so nguyen duong la so can kiem tra phep chia het (1 <= target <= 1000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co phan tu chia het cho target, nguoc lai False).\n\n    VI DU:\n    - items = [7, 11, 15, 22], target = 5 -> return True\n    - items = [3, 7, 11], target = 2 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Phan tu 15 chia het cho 5 -> return True.\n    - Vi du 2: Khong co phan tu nao trong [3, 7, 11] chia het cho 2 -> return False.\n    \"\"\"\n    found = False\n    for x in items:\n        if x % target == 0:\n            found = True\n        break\n    return found",
        "solution": "def solution_509(items, target):\n    \"\"\"\n    DE BAI:\n    Mot he thong kiem tra kho hang can xac dinh xem trong danh sach ma hang items\n    co ton tai it nhat mot ma hang chia het cho target hay khong.\n    Neu co it nhat mot ma thoa man, tra ve True; neu da duyet het danh sach ma khong co\n    ma nao chia het cho target, tra ve False.\n\n    GIAI THICH THAM SO:\n    - items: list cac so nguyen duong la ma cac mat hang, do dai tu 1 den 1000.\n    - target: so nguyen duong la so can kiem tra phep chia het (1 <= target <= 1000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co phan tu chia het cho target, nguoc lai False).\n\n    VI DU:\n    - items = [7, 11, 15, 22], target = 5 -> return True\n    - items = [3, 7, 11], target = 2 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Phan tu 15 chia het cho 5 -> return True.\n    - Vi du 2: Khong co phan tu nao trong [3, 7, 11] chia het cho 2 -> return False.\n    \"\"\"\n    for x in items:\n        if x % target == 0:\n            return True\n    return False"
      },
      {
        "id": "5.10",
        "fn": "solution_510",
        "title": "Bài 5.10 · solution_510",
        "doc": "DE BAI:\n    Trong mot kho chua hang hoa 2D duoc bieu dien boi ma tran matrix kich thuoc R x C,\n    moi o chua mot ma hang la so nguyen.\n    Hay tim toa do hang va cot (row, col) dau tien cua o chua ma hang target theo thu tu\n    quet tu tren xuong duoi, tu trai sang phai.\n    Neu khong tim thay target trong ma tran, tra ve (-1, -1).\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu (list cac list int) kich thuoc R x C (1 <= R, C <= 100).\n    - target: so nguyen la ma hang can tim.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple 2 so nguyen (row, col) la chi so 0-indexed cua vi tri tim thay dau tien,\n      hoac (-1, -1) neu khong ton tai.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 2 -> return (0, 1)\n\n    GIAI THICH VI DU:\n    - So 2 nam o hang 0, cot 1 -> tra ve (0, 1).",
        "starter": "def solution_510(matrix, target):\n    \"\"\"\n    DE BAI:\n    Trong mot kho chua hang hoa 2D duoc bieu dien boi ma tran matrix kich thuoc R x C,\n    moi o chua mot ma hang la so nguyen.\n    Hay tim toa do hang va cot (row, col) dau tien cua o chua ma hang target theo thu tu\n    quet tu tren xuong duoi, tu trai sang phai.\n    Neu khong tim thay target trong ma tran, tra ve (-1, -1).\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu (list cac list int) kich thuoc R x C (1 <= R, C <= 100).\n    - target: so nguyen la ma hang can tim.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple 2 so nguyen (row, col) la chi so 0-indexed cua vi tri tim thay dau tien,\n      hoac (-1, -1) neu khong ton tai.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 2 -> return (0, 1)\n\n    GIAI THICH VI DU:\n    - So 2 nam o hang 0, cot 1 -> tra ve (0, 1).\n    \"\"\"\n    target_r, target_c = -1, -1\n    for r in range(len(matrix)):\n        for c in range(len(matrix[r])):\n            if matrix[r][c] == target:\n                target_c = c\n                break\n    if target_c != -1:\n        return (r, target_c)\n    return (-1, -1)",
        "solution": "def solution_510(matrix, target):\n    \"\"\"\n    DE BAI:\n    Trong mot kho chua hang hoa 2D duoc bieu dien boi ma tran matrix kich thuoc R x C,\n    moi o chua mot ma hang la so nguyen.\n    Hay tim toa do hang va cot (row, col) dau tien cua o chua ma hang target theo thu tu\n    quet tu tren xuong duoi, tu trai sang phai.\n    Neu khong tim thay target trong ma tran, tra ve (-1, -1).\n\n    GIAI THICH THAM SO:\n    - matrix: mang 2 chieu (list cac list int) kich thuoc R x C (1 <= R, C <= 100).\n    - target: so nguyen la ma hang can tim.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple 2 so nguyen (row, col) la chi so 0-indexed cua vi tri tim thay dau tien,\n      hoac (-1, -1) neu khong ton tai.\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 2 -> return (0, 1)\n\n    GIAI THICH VI DU:\n    - So 2 nam o hang 0, cot 1 -> tra ve (0, 1).\n    \"\"\"\n    for r in range(len(matrix)):\n        for c in range(len(matrix[r])):\n            if matrix[r][c] == target:\n                return (r, c)\n    return (-1, -1)"
      },
      {
        "id": "5.11",
        "fn": "solution_511",
        "title": "Bài 5.11 · solution_511",
        "doc": "DE BAI:\n    Ban to chuc cuoc thi can tim diem so cao thu nhi (phan tu lon thu 2 phan biet)\n    trong danh sach diem thi scores.\n    Neu danh sach co it hon 2 gia tri phan biet (vi du: danh sach rong, danh sach chi co\n    1 phan tu, hoac tat ca cac phan tu deu bang nhau), ham phai tra ve None.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen dai dien cho diem so, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem so lon thu 2 phan biet, hoac None neu khong co.\n\n    VI DU:\n    - scores = [10, 20, 30, 20, 30] -> return 20\n    - scores = [5, 5, 5] -> return None\n    - scores = [] -> return None\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tap cac diem phan biet la {10, 20, 30}. Diem cao thu nhi la 20.\n    - Vi du 2: Chi co 1 gia tri phan biet la 5 -> tra ve None.\n    - Vi du 3: Danh sach rong -> tra ve None.",
        "starter": "def solution_511(scores):\n    \"\"\"\n    DE BAI:\n    Ban to chuc cuoc thi can tim diem so cao thu nhi (phan tu lon thu 2 phan biet)\n    trong danh sach diem thi scores.\n    Neu danh sach co it hon 2 gia tri phan biet (vi du: danh sach rong, danh sach chi co\n    1 phan tu, hoac tat ca cac phan tu deu bang nhau), ham phai tra ve None.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen dai dien cho diem so, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem so lon thu 2 phan biet, hoac None neu khong co.\n\n    VI DU:\n    - scores = [10, 20, 30, 20, 30] -> return 20\n    - scores = [5, 5, 5] -> return None\n    - scores = [] -> return None\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tap cac diem phan biet la {10, 20, 30}. Diem cao thu nhi la 20.\n    - Vi du 2: Chi co 1 gia tri phan biet la 5 -> tra ve None.\n    - Vi du 3: Danh sach rong -> tra ve None.\n    \"\"\"\n    unique_scores = sorted(list(set(scores)))\n    return unique_scores[-2]",
        "solution": "def solution_511(scores):\n    \"\"\"\n    DE BAI:\n    Ban to chuc cuoc thi can tim diem so cao thu nhi (phan tu lon thu 2 phan biet)\n    trong danh sach diem thi scores.\n    Neu danh sach co it hon 2 gia tri phan biet (vi du: danh sach rong, danh sach chi co\n    1 phan tu, hoac tat ca cac phan tu deu bang nhau), ham phai tra ve None.\n\n    GIAI THICH THAM SO:\n    - scores: list cac so nguyen dai dien cho diem so, do dai tu 0 den 1000.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la diem so lon thu 2 phan biet, hoac None neu khong co.\n\n    VI DU:\n    - scores = [10, 20, 30, 20, 30] -> return 20\n    - scores = [5, 5, 5] -> return None\n    - scores = [] -> return None\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tap cac diem phan biet la {10, 20, 30}. Diem cao thu nhi la 20.\n    - Vi du 2: Chi co 1 gia tri phan biet la 5 -> tra ve None.\n    - Vi du 3: Danh sach rong -> tra ve None.\n    \"\"\"\n    unique_scores = sorted(list(set(scores)))\n    if len(unique_scores) < 2:\n        return None\n    return unique_scores[-2]"
      },
      {
        "id": "5.12",
        "fn": "solution_512",
        "title": "Bài 5.12 · solution_512",
        "doc": "DE BAI:\n    Mot he thong tiep nhan du lieu theo tung lo (batches). Moi lo la mot danh sach chua\n    cac ma dinh danh kien hang.\n    Hay gop tat ca cac kien hang tu cac lo thanh mot danh sach phang duy nhat theo dung\n    thu tu tiep nhan ban dau.\n\n    GIAI THICH THAM SO:\n    - batches: list cac list (danh sach 2 chieu), moi phan tu la mot list chua cac ma (int hoac str).\n      Do dai batches tu 0 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list 1 chieu chua tat ca cac phan tu da duoc lam phang (flatten).\n\n    VI DU:\n    - batches = [[101, 102], [201], [301, 302, 303]]\n      -> return [101, 102, 201, 301, 302, 303]\n\n    GIAI THICH VI DU:\n    - Gop cac lo [101, 102], [201], [301, 302, 303] lan luot vao danh sach chung.",
        "starter": "def solution_512(batches):\n    \"\"\"\n    DE BAI:\n    Mot he thong tiep nhan du lieu theo tung lo (batches). Moi lo la mot danh sach chua\n    cac ma dinh danh kien hang.\n    Hay gop tat ca cac kien hang tu cac lo thanh mot danh sach phang duy nhat theo dung\n    thu tu tiep nhan ban dau.\n\n    GIAI THICH THAM SO:\n    - batches: list cac list (danh sach 2 chieu), moi phan tu la mot list chua cac ma (int hoac str).\n      Do dai batches tu 0 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list 1 chieu chua tat ca cac phan tu da duoc lam phang (flatten).\n\n    VI DU:\n    - batches = [[101, 102], [201], [301, 302, 303]]\n      -> return [101, 102, 201, 301, 302, 303]\n\n    GIAI THICH VI DU:\n    - Gop cac lo [101, 102], [201], [301, 302, 303] lan luot vao danh sach chung.\n    \"\"\"\n    merged = []\n    for batch in batches:\n        merged.append(batch)\n    return merged",
        "solution": "def solution_512(batches):\n    \"\"\"\n    DE BAI:\n    Mot he thong tiep nhan du lieu theo tung lo (batches). Moi lo la mot danh sach chua\n    cac ma dinh danh kien hang.\n    Hay gop tat ca cac kien hang tu cac lo thanh mot danh sach phang duy nhat theo dung\n    thu tu tiep nhan ban dau.\n\n    GIAI THICH THAM SO:\n    - batches: list cac list (danh sach 2 chieu), moi phan tu la mot list chua cac ma (int hoac str).\n      Do dai batches tu 0 den 100.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list 1 chieu chua tat ca cac phan tu da duoc lam phang (flatten).\n\n    VI DU:\n    - batches = [[101, 102], [201], [301, 302, 303]]\n      -> return [101, 102, 201, 301, 302, 303]\n\n    GIAI THICH VI DU:\n    - Gop cac lo [101, 102], [201], [301, 302, 303] lan luot vao danh sach chung.\n    \"\"\"\n    merged = []\n    for batch in batches:\n        merged.extend(batch)\n    return merged"
      },
      {
        "id": "5.13",
        "fn": "solution_513",
        "title": "Bài 5.13 · solution_513",
        "doc": "DE BAI:\n    He thong xac thuc ma khuyen mai kiem tra tinh hop le cua chuoi ma code theo quy tac:\n    1. Ma phai bat dau bang tien to \"VIP\" HOAC tien to \"MEMBER\".\n    2. VA tong do dai cua chuoi ma code phai dung bang target_length.\n    Neu thoa man ca 2 dieu kien tren, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - code: chuoi ky tu (str) can kiem tra, do dai tu 0 den 100.\n    - target_length: so nguyen duong la do dai tieu chuan yeu cau (1 <= target_length <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma hop le, False neu khong hop le).\n\n    VI DU:\n    - code = \"VIP2026\", target_length = 7 -> return True\n    - code = \"MEMBER88\", target_length = 8 -> return True\n    - code = \"GUEST123\", target_length = 8 -> return False\n\n    GIAI THICH VI DU:\n    - \"VIP2026\" bat dau bang \"VIP\" va co 7 ky tu == 7 -> True.\n    - \"MEMBER88\" bat dau bang \"MEMBER\" va co 8 ky tu == 8 -> True.\n    - \"GUEST123\" khong bat dau bang \"VIP\" hay \"MEMBER\" -> False.",
        "starter": "def solution_513(code, target_length):\n    \"\"\"\n    DE BAI:\n    He thong xac thuc ma khuyen mai kiem tra tinh hop le cua chuoi ma code theo quy tac:\n    1. Ma phai bat dau bang tien to \"VIP\" HOAC tien to \"MEMBER\".\n    2. VA tong do dai cua chuoi ma code phai dung bang target_length.\n    Neu thoa man ca 2 dieu kien tren, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - code: chuoi ky tu (str) can kiem tra, do dai tu 0 den 100.\n    - target_length: so nguyen duong la do dai tieu chuan yeu cau (1 <= target_length <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma hop le, False neu khong hop le).\n\n    VI DU:\n    - code = \"VIP2026\", target_length = 7 -> return True\n    - code = \"MEMBER88\", target_length = 8 -> return True\n    - code = \"GUEST123\", target_length = 8 -> return False\n\n    GIAI THICH VI DU:\n    - \"VIP2026\" bat dau bang \"VIP\" va co 7 ky tu == 7 -> True.\n    - \"MEMBER88\" bat dau bang \"MEMBER\" va co 8 ky tu == 8 -> True.\n    - \"GUEST123\" khong bat dau bang \"VIP\" hay \"MEMBER\" -> False.\n    \"\"\"\n    is_valid_prefix = code.startswith(\"VIP\") and code.startswith(\"MEMBER\")\n    is_valid_len = len(code) == target_length\n    return is_valid_prefix and is_valid_len",
        "solution": "def solution_513(code, target_length):\n    \"\"\"\n    DE BAI:\n    He thong xac thuc ma khuyen mai kiem tra tinh hop le cua chuoi ma code theo quy tac:\n    1. Ma phai bat dau bang tien to \"VIP\" HOAC tien to \"MEMBER\".\n    2. VA tong do dai cua chuoi ma code phai dung bang target_length.\n    Neu thoa man ca 2 dieu kien tren, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - code: chuoi ky tu (str) can kiem tra, do dai tu 0 den 100.\n    - target_length: so nguyen duong la do dai tieu chuan yeu cau (1 <= target_length <= 100).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu ma hop le, False neu khong hop le).\n\n    VI DU:\n    - code = \"VIP2026\", target_length = 7 -> return True\n    - code = \"MEMBER88\", target_length = 8 -> return True\n    - code = \"GUEST123\", target_length = 8 -> return False\n\n    GIAI THICH VI DU:\n    - \"VIP2026\" bat dau bang \"VIP\" va co 7 ky tu == 7 -> True.\n    - \"MEMBER88\" bat dau bang \"MEMBER\" va co 8 ky tu == 8 -> True.\n    - \"GUEST123\" khong bat dau bang \"VIP\" hay \"MEMBER\" -> False.\n    \"\"\"\n    is_valid_prefix = code.startswith(\"VIP\") or code.startswith(\"MEMBER\")\n    is_valid_len = len(code) == target_length\n    return is_valid_prefix and is_valid_len"
      },
      {
        "id": "5.14",
        "fn": "solution_514",
        "title": "Bài 5.14 · solution_514",
        "doc": "DE BAI:\n    Mot ung dung ban hang can kiem tra xem trong bang gia catalog (luu duoi dang dictionary\n    anh xa giua ten san pham va gia tien) co ton tai san pham nao co muc gia dung bang\n    target_price hay khong.\n    Neu co it nhat mot san pham co muc gia do, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - catalog: dict anh xa ten_san_pham (str) -> gia_tien (int >= 0). So luong tu 0 den 1000.\n    - target_price: so nguyen la muc gia can tim kiem (target_price >= 0).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co san pham mang gia target_price, False neu khong).\n\n    VI DU:\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 350000\n      -> return True\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 200000\n      -> return False\n\n    GIAI THICH VI DU:\n    - O vi du 1, \"quan_jean\" co gia 350000 -> ton tai san pham thoa man -> True.\n    - O vi du 2, khong co san pham nao mang gia 200000 -> False.",
        "starter": "def solution_514(catalog, target_price):\n    \"\"\"\n    DE BAI:\n    Mot ung dung ban hang can kiem tra xem trong bang gia catalog (luu duoi dang dictionary\n    anh xa giua ten san pham va gia tien) co ton tai san pham nao co muc gia dung bang\n    target_price hay khong.\n    Neu co it nhat mot san pham co muc gia do, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - catalog: dict anh xa ten_san_pham (str) -> gia_tien (int >= 0). So luong tu 0 den 1000.\n    - target_price: so nguyen la muc gia can tim kiem (target_price >= 0).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co san pham mang gia target_price, False neu khong).\n\n    VI DU:\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 350000\n      -> return True\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 200000\n      -> return False\n\n    GIAI THICH VI DU:\n    - O vi du 1, \"quan_jean\" co gia 350000 -> ton tai san pham thoa man -> True.\n    - O vi du 2, khong co san pham nao mang gia 200000 -> False.\n    \"\"\"\n    return target_price in catalog",
        "solution": "def solution_514(catalog, target_price):\n    \"\"\"\n    DE BAI:\n    Mot ung dung ban hang can kiem tra xem trong bang gia catalog (luu duoi dang dictionary\n    anh xa giua ten san pham va gia tien) co ton tai san pham nao co muc gia dung bang\n    target_price hay khong.\n    Neu co it nhat mot san pham co muc gia do, tra ve True; nguoc lai tra ve False.\n\n    GIAI THICH THAM SO:\n    - catalog: dict anh xa ten_san_pham (str) -> gia_tien (int >= 0). So luong tu 0 den 1000.\n    - target_price: so nguyen la muc gia can tim kiem (target_price >= 0).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu co san pham mang gia target_price, False neu khong).\n\n    VI DU:\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 350000\n      -> return True\n    - catalog = {\"ao_thun\": 150000, \"quan_jean\": 350000, \"non\": 150000}, target_price = 200000\n      -> return False\n\n    GIAI THICH VI DU:\n    - O vi du 1, \"quan_jean\" co gia 350000 -> ton tai san pham thoa man -> True.\n    - O vi du 2, khong co san pham nao mang gia 200000 -> False.\n    \"\"\"\n    return target_price in catalog.values()"
      },
      {
        "id": "5.15",
        "fn": "solution_515",
        "title": "Bài 5.15 · solution_515",
        "doc": "DE BAI:\n    He thong kiem toan ngan hang kiem tra tinh hop le cua mot chuoi cac giao dich trong ngay\n    transactions. Danh sach giao dich duoc coi la hop le (True) neu TAT CA cac giao dich\n    deu la so duong va khong vuot qua han muc cho phep limit (tuc la: 0 < tx <= limit).\n    Neu co bat ky giao dich nao <= 0 hoac > limit, tra ve False.\n    Neu danh sach transactions rong, tra ve True.\n\n    GIAI THICH THAM SO:\n    - transactions: list cac so nguyen dai dien cho gia tri tung giao dich, do dai tu 0 den 1000.\n    - limit: so nguyen duong la han muc giao dich toi da cho phep (1 <= limit <= 1000000000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu tat ca giao dich hop le, False neu co it nhat mot giao dich vi pham).\n\n    VI DU:\n    - transactions = [100, 250, 400], limit = 500 -> return True\n    - transactions = [100, -50, 200], limit = 500 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tat ca giao dich 100, 250, 400 deu > 0 va <= 500 -> True.\n    - Vi du 2: Giao dich -50 <= 0 (vi pham) -> False.",
        "starter": "def solution_515(transactions, limit):\n    \"\"\"\n    DE BAI:\n    He thong kiem toan ngan hang kiem tra tinh hop le cua mot chuoi cac giao dich trong ngay\n    transactions. Danh sach giao dich duoc coi la hop le (True) neu TAT CA cac giao dich\n    deu la so duong va khong vuot qua han muc cho phep limit (tuc la: 0 < tx <= limit).\n    Neu co bat ky giao dich nao <= 0 hoac > limit, tra ve False.\n    Neu danh sach transactions rong, tra ve True.\n\n    GIAI THICH THAM SO:\n    - transactions: list cac so nguyen dai dien cho gia tri tung giao dich, do dai tu 0 den 1000.\n    - limit: so nguyen duong la han muc giao dich toi da cho phep (1 <= limit <= 1000000000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu tat ca giao dich hop le, False neu co it nhat mot giao dich vi pham).\n\n    VI DU:\n    - transactions = [100, 250, 400], limit = 500 -> return True\n    - transactions = [100, -50, 200], limit = 500 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tat ca giao dich 100, 250, 400 deu > 0 va <= 500 -> True.\n    - Vi du 2: Giao dich -50 <= 0 (vi pham) -> False.\n    \"\"\"\n    if not transactions:\n        return True\n    for tx in transactions:\n        if 0 < tx <= limit:\n            return True\n        else:\n            return False",
        "solution": "def solution_515(transactions, limit):\n    \"\"\"\n    DE BAI:\n    He thong kiem toan ngan hang kiem tra tinh hop le cua mot chuoi cac giao dich trong ngay\n    transactions. Danh sach giao dich duoc coi la hop le (True) neu TAT CA cac giao dich\n    deu la so duong va khong vuot qua han muc cho phep limit (tuc la: 0 < tx <= limit).\n    Neu co bat ky giao dich nao <= 0 hoac > limit, tra ve False.\n    Neu danh sach transactions rong, tra ve True.\n\n    GIAI THICH THAM SO:\n    - transactions: list cac so nguyen dai dien cho gia tri tung giao dich, do dai tu 0 den 1000.\n    - limit: so nguyen duong la han muc giao dich toi da cho phep (1 <= limit <= 1000000000).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve bool (True neu tat ca giao dich hop le, False neu co it nhat mot giao dich vi pham).\n\n    VI DU:\n    - transactions = [100, 250, 400], limit = 500 -> return True\n    - transactions = [100, -50, 200], limit = 500 -> return False\n\n    GIAI THICH VI DU:\n    - Vi du 1: Tat ca giao dich 100, 250, 400 deu > 0 va <= 500 -> True.\n    - Vi du 2: Giao dich -50 <= 0 (vi pham) -> False.\n    \"\"\"\n    for tx in transactions:\n        if not (0 < tx <= limit):\n            return False\n    return True"
      }
    ]
  },
  "6": {
    "name": "Nhóm 6 · Design mức Chung kết (Level 1 420đ)",
    "items": [
      {
        "id": "6.01",
        "fn": "solution_601",
        "title": "Bài 6.01 · solution_601",
        "doc": "DE BAI:\n    Cho mot mang cac so nguyen duong arr va mot so nguyen duong target.\n    Hay tim do dai nho nhat cua mot mang con lien tiep sao cho tong cac phan tu\n    trong mang con do lon hon hoac bang target.\n    Neu khong ton tai mang con nao thoa man, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - arr: list cac so nguyen duong (1 <= arr[i] <= 10^4).\n    - target: so nguyen duong (1 <= target <= 10^9).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la do dai nho nhat cua mang con lien tiep thoa man,\n      hoac 0 neu khong co.\n\n    RANG BUOC:\n    - So luong phan tu n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n) su dung ky thuat cua so truot (sliding window),\n      bo nho phu O(1).\n\n    VI DU:\n    - arr = [2, 3, 1, 2, 4, 3], target = 7 -> return 2\n\n    GIAI THICH VI DU:\n    - Mang con [4, 3] co tong bang 7 va do dai bang 2 la ngan nhat.",
        "starter": "def solution_601(arr, target):\n    \"\"\"\n    DE BAI:\n    Cho mot mang cac so nguyen duong arr va mot so nguyen duong target.\n    Hay tim do dai nho nhat cua mot mang con lien tiep sao cho tong cac phan tu\n    trong mang con do lon hon hoac bang target.\n    Neu khong ton tai mang con nao thoa man, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - arr: list cac so nguyen duong (1 <= arr[i] <= 10^4).\n    - target: so nguyen duong (1 <= target <= 10^9).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la do dai nho nhat cua mang con lien tiep thoa man,\n      hoac 0 neu khong co.\n\n    RANG BUOC:\n    - So luong phan tu n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n) su dung ky thuat cua so truot (sliding window),\n      bo nho phu O(1).\n\n    VI DU:\n    - arr = [2, 3, 1, 2, 4, 3], target = 7 -> return 2\n\n    GIAI THICH VI DU:\n    - Mang con [4, 3] co tong bang 7 va do dai bang 2 la ngan nhat.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_601(arr, target):\n    \"\"\"\n    DE BAI:\n    Cho mot mang cac so nguyen duong arr va mot so nguyen duong target.\n    Hay tim do dai nho nhat cua mot mang con lien tiep sao cho tong cac phan tu\n    trong mang con do lon hon hoac bang target.\n    Neu khong ton tai mang con nao thoa man, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - arr: list cac so nguyen duong (1 <= arr[i] <= 10^4).\n    - target: so nguyen duong (1 <= target <= 10^9).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la do dai nho nhat cua mang con lien tiep thoa man,\n      hoac 0 neu khong co.\n\n    RANG BUOC:\n    - So luong phan tu n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n) su dung ky thuat cua so truot (sliding window),\n      bo nho phu O(1).\n\n    VI DU:\n    - arr = [2, 3, 1, 2, 4, 3], target = 7 -> return 2\n\n    GIAI THICH VI DU:\n    - Mang con [4, 3] co tong bang 7 va do dai bang 2 la ngan nhat.\n    \"\"\"\n    if not arr or target <= 0:\n        return 0\n    left = 0\n    curr_sum = 0\n    min_len = float(\"inf\")\n    for right in range(len(arr)):\n        curr_sum += arr[right]\n        while curr_sum >= target:\n            min_len = min(min_len, right - left + 1)\n            curr_sum -= arr[left]\n            left += 1\n    return min_len if min_len != float(\"inf\") else 0"
      },
      {
        "id": "6.02",
        "fn": "solution_602",
        "title": "Bài 6.02 · solution_602",
        "doc": "DE BAI:\n    Cho danh sach cac khoang thoi gian intervals, trong do moi khoang duoc bieu dien\n    bang mot cap [start, end] (start <= end). Cac khoang co the chua duoc sap xep\n    va co the chong lan nhau hoac tiep xuc nhau (tuc end1 >= start2).\n    Hay gop tat ca cac khoang chong lan hoac tiep xuc nhau lai de duoc danh sach\n    cac khoang toi gian khong giao nhau, sap xep tang dan theo start.\n\n    GIAI THICH THAM SO:\n    - intervals: list cac khoang [start, end] (so nguyen).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac khoang [start, end] da duoc gop va sap xep tang dan.\n\n    RANG BUOC:\n    - So luong khoang n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n log n) nho vao viec sap xep cac khoang.\n\n    VI DU:\n    - intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] -> return [[1, 6], [8, 10], [15, 18]]\n\n    GIAI THICH VI DU:\n    - Khoang [1, 3] va [2, 6] chong lan nhau nen duoc gop thanh [1, 6].",
        "starter": "def solution_602(intervals):\n    \"\"\"\n    DE BAI:\n    Cho danh sach cac khoang thoi gian intervals, trong do moi khoang duoc bieu dien\n    bang mot cap [start, end] (start <= end). Cac khoang co the chua duoc sap xep\n    va co the chong lan nhau hoac tiep xuc nhau (tuc end1 >= start2).\n    Hay gop tat ca cac khoang chong lan hoac tiep xuc nhau lai de duoc danh sach\n    cac khoang toi gian khong giao nhau, sap xep tang dan theo start.\n\n    GIAI THICH THAM SO:\n    - intervals: list cac khoang [start, end] (so nguyen).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac khoang [start, end] da duoc gop va sap xep tang dan.\n\n    RANG BUOC:\n    - So luong khoang n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n log n) nho vao viec sap xep cac khoang.\n\n    VI DU:\n    - intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] -> return [[1, 6], [8, 10], [15, 18]]\n\n    GIAI THICH VI DU:\n    - Khoang [1, 3] va [2, 6] chong lan nhau nen duoc gop thanh [1, 6].\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_602(intervals):\n    \"\"\"\n    DE BAI:\n    Cho danh sach cac khoang thoi gian intervals, trong do moi khoang duoc bieu dien\n    bang mot cap [start, end] (start <= end). Cac khoang co the chua duoc sap xep\n    va co the chong lan nhau hoac tiep xuc nhau (tuc end1 >= start2).\n    Hay gop tat ca cac khoang chong lan hoac tiep xuc nhau lai de duoc danh sach\n    cac khoang toi gian khong giao nhau, sap xep tang dan theo start.\n\n    GIAI THICH THAM SO:\n    - intervals: list cac khoang [start, end] (so nguyen).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac khoang [start, end] da duoc gop va sap xep tang dan.\n\n    RANG BUOC:\n    - So luong khoang n tu 0 den 100000.\n    - Yeu cau do phuc tap thoi gian O(n log n) nho vao viec sap xep cac khoang.\n\n    VI DU:\n    - intervals = [[1, 3], [2, 6], [8, 10], [15, 18]] -> return [[1, 6], [8, 10], [15, 18]]\n\n    GIAI THICH VI DU:\n    - Khoang [1, 3] va [2, 6] chong lan nhau nen duoc gop thanh [1, 6].\n    \"\"\"\n    if not intervals:\n        return []\n    sorted_intervals = sorted(intervals, key=lambda x: x[0])\n    merged = [[sorted_intervals[0][0], sorted_intervals[0][1]]]\n    for curr in sorted_intervals[1:]:\n        prev = merged[-1]\n        if curr[0] <= prev[1]:\n            prev[1] = max(prev[1], curr[1])\n        else:\n            merged.append([curr[0], curr[1]])\n    return merged"
      },
      {
        "id": "6.03",
        "fn": "solution_603",
        "title": "Bài 6.03 · solution_603",
        "doc": "DE BAI:\n    Cho mot luoi 2 chieu grid kich thuoc m x n bieu dien trang thai cac khoang dat:\n    - 0: O trong (khong co gi).\n    - 1: O chua thuc vat sach (chua bi nhiem doc).\n    - 2: O chua nguon doc hai (da bi nhiem doc).\n    Moi phut, bat ky o so 1 nao nam ke (4 huong: tren, duoi, trai, phai) voi mot o\n    so 2 se bi nhiem doc (chuyen thanh 2).\n    Hay tinh so phut toi thieu de toan bo thuc vat sach bi nhiem doc.\n    Neu con bat ky o so 1 nao khong bao gio bi nhiem doc toi, tra ve -1.\n    Neu ban dau tren luoi khong co o so 1 nao, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen 0, 1, 2 co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so phut toi thieu, hoac -1 neu khong the nhiem het,\n      hoac 0 neu khong co cay sach nao.\n\n    RANG BUOC:\n    - m, n tu 1 den 100.\n    - Yeu cau do phuc tap O(m * n) su dung thuat toan BFS da nguon (multi-source BFS).\n\n    VI DU:\n    - grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]] -> return 4\n\n    GIAI THICH VI DU:\n    - Phut 1: cac o (0,1) va (1,0) bi nhiem.\n    - Phut 2: cac o (0,2) va (1,1) bi nhiem.\n    - Phut 3: o (2,1) bi nhiem.\n    - Phut 4: o (2,2) bi nhiem. Tong cong 4 phut.",
        "starter": "def solution_603(grid):\n    \"\"\"\n    DE BAI:\n    Cho mot luoi 2 chieu grid kich thuoc m x n bieu dien trang thai cac khoang dat:\n    - 0: O trong (khong co gi).\n    - 1: O chua thuc vat sach (chua bi nhiem doc).\n    - 2: O chua nguon doc hai (da bi nhiem doc).\n    Moi phut, bat ky o so 1 nao nam ke (4 huong: tren, duoi, trai, phai) voi mot o\n    so 2 se bi nhiem doc (chuyen thanh 2).\n    Hay tinh so phut toi thieu de toan bo thuc vat sach bi nhiem doc.\n    Neu con bat ky o so 1 nao khong bao gio bi nhiem doc toi, tra ve -1.\n    Neu ban dau tren luoi khong co o so 1 nao, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen 0, 1, 2 co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so phut toi thieu, hoac -1 neu khong the nhiem het,\n      hoac 0 neu khong co cay sach nao.\n\n    RANG BUOC:\n    - m, n tu 1 den 100.\n    - Yeu cau do phuc tap O(m * n) su dung thuat toan BFS da nguon (multi-source BFS).\n\n    VI DU:\n    - grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]] -> return 4\n\n    GIAI THICH VI DU:\n    - Phut 1: cac o (0,1) va (1,0) bi nhiem.\n    - Phut 2: cac o (0,2) va (1,1) bi nhiem.\n    - Phut 3: o (2,1) bi nhiem.\n    - Phut 4: o (2,2) bi nhiem. Tong cong 4 phut.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_603(grid):\n    \"\"\"\n    DE BAI:\n    Cho mot luoi 2 chieu grid kich thuoc m x n bieu dien trang thai cac khoang dat:\n    - 0: O trong (khong co gi).\n    - 1: O chua thuc vat sach (chua bi nhiem doc).\n    - 2: O chua nguon doc hai (da bi nhiem doc).\n    Moi phut, bat ky o so 1 nao nam ke (4 huong: tren, duoi, trai, phai) voi mot o\n    so 2 se bi nhiem doc (chuyen thanh 2).\n    Hay tinh so phut toi thieu de toan bo thuc vat sach bi nhiem doc.\n    Neu con bat ky o so 1 nao khong bao gio bi nhiem doc toi, tra ve -1.\n    Neu ban dau tren luoi khong co o so 1 nao, tra ve 0.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen 0, 1, 2 co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la so phut toi thieu, hoac -1 neu khong the nhiem het,\n      hoac 0 neu khong co cay sach nao.\n\n    RANG BUOC:\n    - m, n tu 1 den 100.\n    - Yeu cau do phuc tap O(m * n) su dung thuat toan BFS da nguon (multi-source BFS).\n\n    VI DU:\n    - grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]] -> return 4\n\n    GIAI THICH VI DU:\n    - Phut 1: cac o (0,1) va (1,0) bi nhiem.\n    - Phut 2: cac o (0,2) va (1,1) bi nhiem.\n    - Phut 3: o (2,1) bi nhiem.\n    - Phut 4: o (2,2) bi nhiem. Tong cong 4 phut.\n    \"\"\"\n    if not grid or not grid[0]:\n        return 0\n    rows, cols = len(grid), len(grid[0])\n    queue = deque()\n    fresh_count = 0\n    grid_copy = [row[:] for row in grid]\n    for r in range(rows):\n        for c in range(cols):\n            if grid_copy[r][c] == 2:\n                queue.append((r, c, 0))\n            elif grid_copy[r][c] == 1:\n                fresh_count += 1\n    if fresh_count == 0:\n        return 0\n    minutes = 0\n    while queue:\n        r, c, d = queue.popleft()\n        minutes = max(minutes, d)\n        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < rows and 0 <= nc < cols and grid_copy[nr][nc] == 1:\n                grid_copy[nr][nc] = 2\n                fresh_count -= 1\n                queue.append((nr, nc, d + 1))\n    return minutes if fresh_count == 0 else -1"
      },
      {
        "id": "6.04",
        "fn": "solution_604",
        "title": "Bài 6.04 · solution_604",
        "doc": "DE BAI:\n    Bai toan cai ba lo (0/1 Knapsack): Co n do vat, do vat thu i co khoi luong\n    weights[i] va gia tri values[i]. Can chon mot tap hop cac do vat sao cho tong\n    khoi luong khong vuot qua capacity va tong gia tri dat duoc la LON NHAT.\n    Moi do vat chi duoc chon toi da 1 lan.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac do vat.\n    - values: list cac so nguyen duong bieu thi gia tri cac do vat.\n    - capacity: so nguyen duong la suc chua toi da cua ba lo.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat co the dat vao ba lo.\n\n    RANG BUOC:\n    - So do vat n <= 1000, capacity <= 2000.\n    - Yeu cau do phuc tap O(n * capacity) bang quy hoach dong toi uu bo nho O(capacity).\n\n    VI DU:\n    - weights = [2, 3, 4, 5], values = [3, 4, 5, 6], capacity = 5 -> return 7\n\n    GIAI THICH VI DU:\n    - Chon do vat co w=2 (v=3) va w=3 (v=4), tong khoi luong 2+3=5, tong gia tri 3+4=7.",
        "starter": "def solution_604(weights, values, capacity):\n    \"\"\"\n    DE BAI:\n    Bai toan cai ba lo (0/1 Knapsack): Co n do vat, do vat thu i co khoi luong\n    weights[i] va gia tri values[i]. Can chon mot tap hop cac do vat sao cho tong\n    khoi luong khong vuot qua capacity va tong gia tri dat duoc la LON NHAT.\n    Moi do vat chi duoc chon toi da 1 lan.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac do vat.\n    - values: list cac so nguyen duong bieu thi gia tri cac do vat.\n    - capacity: so nguyen duong la suc chua toi da cua ba lo.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat co the dat vao ba lo.\n\n    RANG BUOC:\n    - So do vat n <= 1000, capacity <= 2000.\n    - Yeu cau do phuc tap O(n * capacity) bang quy hoach dong toi uu bo nho O(capacity).\n\n    VI DU:\n    - weights = [2, 3, 4, 5], values = [3, 4, 5, 6], capacity = 5 -> return 7\n\n    GIAI THICH VI DU:\n    - Chon do vat co w=2 (v=3) va w=3 (v=4), tong khoi luong 2+3=5, tong gia tri 3+4=7.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_604(weights, values, capacity):\n    \"\"\"\n    DE BAI:\n    Bai toan cai ba lo (0/1 Knapsack): Co n do vat, do vat thu i co khoi luong\n    weights[i] va gia tri values[i]. Can chon mot tap hop cac do vat sao cho tong\n    khoi luong khong vuot qua capacity va tong gia tri dat duoc la LON NHAT.\n    Moi do vat chi duoc chon toi da 1 lan.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac do vat.\n    - values: list cac so nguyen duong bieu thi gia tri cac do vat.\n    - capacity: so nguyen duong la suc chua toi da cua ba lo.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri lon nhat co the dat vao ba lo.\n\n    RANG BUOC:\n    - So do vat n <= 1000, capacity <= 2000.\n    - Yeu cau do phuc tap O(n * capacity) bang quy hoach dong toi uu bo nho O(capacity).\n\n    VI DU:\n    - weights = [2, 3, 4, 5], values = [3, 4, 5, 6], capacity = 5 -> return 7\n\n    GIAI THICH VI DU:\n    - Chon do vat co w=2 (v=3) va w=3 (v=4), tong khoi luong 2+3=5, tong gia tri 3+4=7.\n    \"\"\"\n    if not weights or not values or capacity <= 0:\n        return 0\n    dp = [0] * (capacity + 1)\n    for w, v in zip(weights, values):\n        for cap in range(capacity, w - 1, -1):\n            if dp[cap - w] + v > dp[cap]:\n                dp[cap] = dp[cap - w] + v\n    return dp[capacity]"
      },
      {
        "id": "6.05",
        "fn": "solution_605",
        "title": "Bài 6.05 · solution_605",
        "doc": "DE BAI:\n    Cho mot ma tran 2 chieu grid kich thuoc m x n chua cac so nguyen khong am.\n    Mot robot xuat phat tu goc tren-trai (0, 0) muon di chuyen den goc duoi-phai\n    (m-1, n-1). Tai moi buoc, robot chi co the di chuyen sang phai (sang o (r, c+1))\n    hoac di xuong duoi (sang o (r+1, c)).\n    Hay tim mot duong di sao cho tong cac gia tri tren cac o da di qua la NHO NHAT\n    va tra ve tong nho nhat do.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen khong am co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri nho nhat cua duong di.\n\n    RANG BUOC:\n    - m, n tu 1 den 500. Cac phan tu grid[i][j] tu 0 den 1000.\n    - Yeu cau do phuc tap O(m * n) su dung quy hoach dong, bo nho O(n).\n\n    VI DU:\n    - grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]] -> return 7\n\n    GIAI THICH VI DU:\n    - Duong di 1 -> 3 -> 1 -> 1 -> 1 co tong la 1 + 3 + 1 + 1 + 1 = 7 (nho nhat).",
        "starter": "def solution_605(grid):\n    \"\"\"\n    DE BAI:\n    Cho mot ma tran 2 chieu grid kich thuoc m x n chua cac so nguyen khong am.\n    Mot robot xuat phat tu goc tren-trai (0, 0) muon di chuyen den goc duoi-phai\n    (m-1, n-1). Tai moi buoc, robot chi co the di chuyen sang phai (sang o (r, c+1))\n    hoac di xuong duoi (sang o (r+1, c)).\n    Hay tim mot duong di sao cho tong cac gia tri tren cac o da di qua la NHO NHAT\n    va tra ve tong nho nhat do.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen khong am co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri nho nhat cua duong di.\n\n    RANG BUOC:\n    - m, n tu 1 den 500. Cac phan tu grid[i][j] tu 0 den 1000.\n    - Yeu cau do phuc tap O(m * n) su dung quy hoach dong, bo nho O(n).\n\n    VI DU:\n    - grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]] -> return 7\n\n    GIAI THICH VI DU:\n    - Duong di 1 -> 3 -> 1 -> 1 -> 1 co tong la 1 + 3 + 1 + 1 + 1 = 7 (nho nhat).\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_605(grid):\n    \"\"\"\n    DE BAI:\n    Cho mot ma tran 2 chieu grid kich thuoc m x n chua cac so nguyen khong am.\n    Mot robot xuat phat tu goc tren-trai (0, 0) muon di chuyen den goc duoi-phai\n    (m-1, n-1). Tai moi buoc, robot chi co the di chuyen sang phai (sang o (r, c+1))\n    hoac di xuong duoi (sang o (r+1, c)).\n    Hay tim mot duong di sao cho tong cac gia tri tren cac o da di qua la NHO NHAT\n    va tra ve tong nho nhat do.\n\n    GIAI THICH THAM SO:\n    - grid: list cac list so nguyen khong am co kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tong gia tri nho nhat cua duong di.\n\n    RANG BUOC:\n    - m, n tu 1 den 500. Cac phan tu grid[i][j] tu 0 den 1000.\n    - Yeu cau do phuc tap O(m * n) su dung quy hoach dong, bo nho O(n).\n\n    VI DU:\n    - grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]] -> return 7\n\n    GIAI THICH VI DU:\n    - Duong di 1 -> 3 -> 1 -> 1 -> 1 co tong la 1 + 3 + 1 + 1 + 1 = 7 (nho nhat).\n    \"\"\"\n    if not grid or not grid[0]:\n        return 0\n    m, n = len(grid), len(grid[0])\n    dp = [0] * n\n    dp[0] = grid[0][0]\n    for j in range(1, n):\n        dp[j] = dp[j - 1] + grid[0][j]\n    for i in range(1, m):\n        dp[0] += grid[i][0]\n        for j in range(1, n):\n            dp[j] = min(dp[j], dp[j - 1]) + grid[i][j]\n    return dp[-1]"
      },
      {
        "id": "6.06",
        "fn": "solution_606",
        "title": "Bài 6.06 · solution_606",
        "doc": "DE BAI:\n    Cho mot chuoi ky tu s da duoc ma hoa theo quy tac: k[chuoi_con], trong do\n    chuoi_con ben trong cap ngoac vuong duoc lap lai dung k lan (k la so nguyen duong).\n    Cac cap ngoac vuong co the long nhau nhieu cap.\n    Hay su dung ngan xep (stack) de giai ma va tra ve chuoi ket qua hoan chinh.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua chu so '0'-'9', chu cai thuong 'a'-'z' va cac dau '[', ']'.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc giai ma hoan chinh.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 1000.\n    - Do phuc tap thoi gian O(N) voi N la do dai chuoi ket qua, su dung stack.\n\n    VI DU:\n    - s = \"3[a2[c]]\" -> return \"accaccacc\"\n\n    GIAI THICH VI DU:\n    - 2[c] thanh \"cc\", sau do 3[acc] thanh \"accaccacc\".",
        "starter": "def solution_606(s):\n    \"\"\"\n    DE BAI:\n    Cho mot chuoi ky tu s da duoc ma hoa theo quy tac: k[chuoi_con], trong do\n    chuoi_con ben trong cap ngoac vuong duoc lap lai dung k lan (k la so nguyen duong).\n    Cac cap ngoac vuong co the long nhau nhieu cap.\n    Hay su dung ngan xep (stack) de giai ma va tra ve chuoi ket qua hoan chinh.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua chu so '0'-'9', chu cai thuong 'a'-'z' va cac dau '[', ']'.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc giai ma hoan chinh.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 1000.\n    - Do phuc tap thoi gian O(N) voi N la do dai chuoi ket qua, su dung stack.\n\n    VI DU:\n    - s = \"3[a2[c]]\" -> return \"accaccacc\"\n\n    GIAI THICH VI DU:\n    - 2[c] thanh \"cc\", sau do 3[acc] thanh \"accaccacc\".\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_606(s):\n    \"\"\"\n    DE BAI:\n    Cho mot chuoi ky tu s da duoc ma hoa theo quy tac: k[chuoi_con], trong do\n    chuoi_con ben trong cap ngoac vuong duoc lap lai dung k lan (k la so nguyen duong).\n    Cac cap ngoac vuong co the long nhau nhieu cap.\n    Hay su dung ngan xep (stack) de giai ma va tra ve chuoi ket qua hoan chinh.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu (str) chi chua chu so '0'-'9', chu cai thuong 'a'-'z' va cac dau '[', ']'.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve chuoi ky tu (str) da duoc giai ma hoan chinh.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 1000.\n    - Do phuc tap thoi gian O(N) voi N la do dai chuoi ket qua, su dung stack.\n\n    VI DU:\n    - s = \"3[a2[c]]\" -> return \"accaccacc\"\n\n    GIAI THICH VI DU:\n    - 2[c] thanh \"cc\", sau do 3[acc] thanh \"accaccacc\".\n    \"\"\"\n    if not s:\n        return \"\"\n    stack = []\n    curr_str = \"\"\n    curr_num = 0\n    for char in s:\n        if char.isdigit():\n            curr_num = curr_num * 10 + int(char)\n        elif char == \"[\":\n            stack.append((curr_str, curr_num))\n            curr_str = \"\"\n            curr_num = 0\n        elif char == \"]\":\n            prev_str, num = stack.pop()\n            curr_str = prev_str + curr_str * num\n        else:\n            curr_str += char\n    return curr_str"
      },
      {
        "id": "6.07",
        "fn": "solution_607",
        "title": "Bài 6.07 · solution_607",
        "doc": "DE BAI:\n    Cho mot chuoi s bieu dien danh sach cac mat hang va so luong theo dinh dang:\n    \"ten_hang:so_luong,ten_hang:so_luong,...\"\n    Hay parse chuoi thanh dict {ten_hang: tong_so_luong} voi cac quy tac sau:\n    1. Cac cap phan tach nhau boi dau phay ','.\n    2. Moi cap phai co dung mot dau ':' phan tach ten va so luong. Khoang trang thua\n       o dau/cuoi moi cap hoac xung quanh dau ':' phai duoc loai bo (strip).\n    3. ten_hang phai la chuoi khac rong chi chua cac ky tu chu cai, chu so hoac dau gach duoi '_'.\n    4. so_luong phai la so nguyen duong (> 0).\n    5. Neu mot cap bi loi dinh dang (thieu/thua ':', ten khong hop le, so luong khong hop le hoac <= 0,\n       hoac cap rong) thi BO QUA cap do va tiep tuc xu ly cac cap con lai.\n    6. Neu cung mot ten_hang xuat hien nhieu lan hop le, CONG DON so luong cua mat hang do.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu can parse.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {str: int} chua cac mat hang hop le va tong so luong.\n      Chuoi rong hoac khong co cap hop le nao -> tra ve {}.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 10000.\n    - Yeu cau do phuc tap O(len(s)).\n\n    VI DU:\n    - s = \"apple:5, banana:10, apple:3\" -> return {\"apple\": 8, \"banana\": 10}\n\n    GIAI THICH VI DU:\n    - 'apple' xuat hien 2 lan voi so luong 5 va 3 nen tong la 8. 'banana' co so luong 10.",
        "starter": "def solution_607(s):\n    \"\"\"\n    DE BAI:\n    Cho mot chuoi s bieu dien danh sach cac mat hang va so luong theo dinh dang:\n    \"ten_hang:so_luong,ten_hang:so_luong,...\"\n    Hay parse chuoi thanh dict {ten_hang: tong_so_luong} voi cac quy tac sau:\n    1. Cac cap phan tach nhau boi dau phay ','.\n    2. Moi cap phai co dung mot dau ':' phan tach ten va so luong. Khoang trang thua\n       o dau/cuoi moi cap hoac xung quanh dau ':' phai duoc loai bo (strip).\n    3. ten_hang phai la chuoi khac rong chi chua cac ky tu chu cai, chu so hoac dau gach duoi '_'.\n    4. so_luong phai la so nguyen duong (> 0).\n    5. Neu mot cap bi loi dinh dang (thieu/thua ':', ten khong hop le, so luong khong hop le hoac <= 0,\n       hoac cap rong) thi BO QUA cap do va tiep tuc xu ly cac cap con lai.\n    6. Neu cung mot ten_hang xuat hien nhieu lan hop le, CONG DON so luong cua mat hang do.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu can parse.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {str: int} chua cac mat hang hop le va tong so luong.\n      Chuoi rong hoac khong co cap hop le nao -> tra ve {}.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 10000.\n    - Yeu cau do phuc tap O(len(s)).\n\n    VI DU:\n    - s = \"apple:5, banana:10, apple:3\" -> return {\"apple\": 8, \"banana\": 10}\n\n    GIAI THICH VI DU:\n    - 'apple' xuat hien 2 lan voi so luong 5 va 3 nen tong la 8. 'banana' co so luong 10.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_607(s):\n    \"\"\"\n    DE BAI:\n    Cho mot chuoi s bieu dien danh sach cac mat hang va so luong theo dinh dang:\n    \"ten_hang:so_luong,ten_hang:so_luong,...\"\n    Hay parse chuoi thanh dict {ten_hang: tong_so_luong} voi cac quy tac sau:\n    1. Cac cap phan tach nhau boi dau phay ','.\n    2. Moi cap phai co dung mot dau ':' phan tach ten va so luong. Khoang trang thua\n       o dau/cuoi moi cap hoac xung quanh dau ':' phai duoc loai bo (strip).\n    3. ten_hang phai la chuoi khac rong chi chua cac ky tu chu cai, chu so hoac dau gach duoi '_'.\n    4. so_luong phai la so nguyen duong (> 0).\n    5. Neu mot cap bi loi dinh dang (thieu/thua ':', ten khong hop le, so luong khong hop le hoac <= 0,\n       hoac cap rong) thi BO QUA cap do va tiep tuc xu ly cac cap con lai.\n    6. Neu cung mot ten_hang xuat hien nhieu lan hop le, CONG DON so luong cua mat hang do.\n\n    GIAI THICH THAM SO:\n    - s: chuoi ky tu can parse.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {str: int} chua cac mat hang hop le va tong so luong.\n      Chuoi rong hoac khong co cap hop le nao -> tra ve {}.\n\n    RANG BUOC:\n    - Do dai chuoi s tu 0 den 10000.\n    - Yeu cau do phuc tap O(len(s)).\n\n    VI DU:\n    - s = \"apple:5, banana:10, apple:3\" -> return {\"apple\": 8, \"banana\": 10}\n\n    GIAI THICH VI DU:\n    - 'apple' xuat hien 2 lan voi so luong 5 va 3 nen tong la 8. 'banana' co so luong 10.\n    \"\"\"\n    if not s or not isinstance(s, str):\n        return {}\n    result = {}\n    parts = s.split(\",\")\n    for part in parts:\n        part = part.strip()\n        if not part:\n            continue\n        if part.count(\":\") != 1:\n            continue\n        key_str, val_str = part.split(\":\")\n        key = key_str.strip()\n        val = val_str.strip()\n        if not key:\n            continue\n        if not all(c.isalnum() or c == \"_\" for c in key):\n            continue\n        if not val.isdigit() or int(val) <= 0:\n            continue\n        qty = int(val)\n        result[key] = result.get(key, 0) + qty\n    return result"
      },
      {
        "id": "6.08",
        "fn": "solution_608",
        "title": "Bài 6.08 · solution_608",
        "doc": "DE BAI:\n    Cho mot ma tran 2 chieu matrix kich thuoc m x n.\n    Hay thuc hien 2 buoc:\n    1. Xoay ma tran 90 do theo chieu kim dong ho (90 degrees clockwise rotation).\n    2. Sau khi xoay, duyet ma tran moi theo thu tu XOAN OC (spiral order) tu ngoai vao trong,\n       bat dau tu goc tren-trai (sang phai -> xuong duoi -> sang trai -> len tren...).\n    Tra ve mot danh sach (list) chua cac phan tu theo thu tu duyet xoan oc do.\n\n    GIAI THICH THAM SO:\n    - matrix: list cac list bieu dien ma tran 2 chieu kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list chua cac phan tu theo thu tu duyet xoan oc cua ma tran sau khi da xoay 90 do.\n      Ma tran rong -> tra ve [].\n\n    RANG BUOC:\n    - m, n tu 0 den 200.\n    - Yeu cau do phuc tap O(m * n).\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return [7, 4, 1, 2, 3, 6, 9, 8, 5]\n\n    GIAI THICH VI DU:\n    - Sau khi xoay 90 do, ma tran thanh: [[7, 4, 1], [8, 5, 2], [9, 6, 3]].\n    - Duyet xoan oc ma tran moi: 7 -> 4 -> 1 -> 2 -> 3 -> 6 -> 9 -> 8 -> 5.",
        "starter": "def solution_608(matrix):\n    \"\"\"\n    DE BAI:\n    Cho mot ma tran 2 chieu matrix kich thuoc m x n.\n    Hay thuc hien 2 buoc:\n    1. Xoay ma tran 90 do theo chieu kim dong ho (90 degrees clockwise rotation).\n    2. Sau khi xoay, duyet ma tran moi theo thu tu XOAN OC (spiral order) tu ngoai vao trong,\n       bat dau tu goc tren-trai (sang phai -> xuong duoi -> sang trai -> len tren...).\n    Tra ve mot danh sach (list) chua cac phan tu theo thu tu duyet xoan oc do.\n\n    GIAI THICH THAM SO:\n    - matrix: list cac list bieu dien ma tran 2 chieu kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list chua cac phan tu theo thu tu duyet xoan oc cua ma tran sau khi da xoay 90 do.\n      Ma tran rong -> tra ve [].\n\n    RANG BUOC:\n    - m, n tu 0 den 200.\n    - Yeu cau do phuc tap O(m * n).\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return [7, 4, 1, 2, 3, 6, 9, 8, 5]\n\n    GIAI THICH VI DU:\n    - Sau khi xoay 90 do, ma tran thanh: [[7, 4, 1], [8, 5, 2], [9, 6, 3]].\n    - Duyet xoan oc ma tran moi: 7 -> 4 -> 1 -> 2 -> 3 -> 6 -> 9 -> 8 -> 5.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_608(matrix):\n    \"\"\"\n    DE BAI:\n    Cho mot ma tran 2 chieu matrix kich thuoc m x n.\n    Hay thuc hien 2 buoc:\n    1. Xoay ma tran 90 do theo chieu kim dong ho (90 degrees clockwise rotation).\n    2. Sau khi xoay, duyet ma tran moi theo thu tu XOAN OC (spiral order) tu ngoai vao trong,\n       bat dau tu goc tren-trai (sang phai -> xuong duoi -> sang trai -> len tren...).\n    Tra ve mot danh sach (list) chua cac phan tu theo thu tu duyet xoan oc do.\n\n    GIAI THICH THAM SO:\n    - matrix: list cac list bieu dien ma tran 2 chieu kich thuoc m x n.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list chua cac phan tu theo thu tu duyet xoan oc cua ma tran sau khi da xoay 90 do.\n      Ma tran rong -> tra ve [].\n\n    RANG BUOC:\n    - m, n tu 0 den 200.\n    - Yeu cau do phuc tap O(m * n).\n\n    VI DU:\n    - matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> return [7, 4, 1, 2, 3, 6, 9, 8, 5]\n\n    GIAI THICH VI DU:\n    - Sau khi xoay 90 do, ma tran thanh: [[7, 4, 1], [8, 5, 2], [9, 6, 3]].\n    - Duyet xoan oc ma tran moi: 7 -> 4 -> 1 -> 2 -> 3 -> 6 -> 9 -> 8 -> 5.\n    \"\"\"\n    if not matrix or not matrix[0]:\n        return []\n    m, n = len(matrix), len(matrix[0])\n    rotated = [[matrix[m - 1 - r][c] for r in range(m)] for c in range(n)]\n    res = []\n    top, bottom = 0, n - 1\n    left, right = 0, m - 1\n    while top <= bottom and left <= right:\n        for j in range(left, right + 1):\n            res.append(rotated[top][j])\n        top += 1\n        for i in range(top, bottom + 1):\n            res.append(rotated[i][right])\n        right -= 1\n        if top <= bottom:\n            for j in range(right, left - 1, -1):\n                res.append(rotated[bottom][j])\n            bottom -= 1\n        if left <= right:\n            for i in range(bottom, top - 1, -1):\n                res.append(rotated[i][left])\n            left += 1\n    return res"
      },
      {
        "id": "6.09",
        "fn": "solution_609",
        "title": "Bài 6.09 · solution_609",
        "doc": "DE BAI:\n    Trong mot he thong san thuong mai dien tu, moi san pham co thong tin:\n    {\"id\": str, \"doanh_thu\": int, \"danh_gia\": float, \"luot_xem\": int}.\n    Can tim ra Top k san pham xuat sac nhat theo cac tieu chi uu tien sau:\n    1. doanh_thu CAO HON duoc uu tien truoc (giam dan).\n    2. Neu doanh_thu bang nhau, danh_gia CAO HON duoc uu tien (giam dan).\n    3. Neu danh_gia bang nhau, luot_xem CAO HON duoc uu tien (giam dan).\n    4. Neu ca 3 tieu chi deu bang nhau, id NHO HON theo thu tu tu dien (A-Z) duoc uu tien.\n    Tra ve danh sach cac id cua k san pham xuat sac nhat theo dung thu tu uu tien tren.\n\n    GIAI THICH THAM SO:\n    - records: list cac dict chua thong tin san pham.\n    - k: so nguyen (int) la so luong san pham can lay.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac str la id cua k san pham dung dau.\n      Neu k <= 0 hoac records rong -> tra ve [].\n      Neu k >= len(records) -> tra ve toan bo danh sach id da sap xep theo dung thu tu.\n\n    RANG BUOC:\n    - So luong san pham n tu 0 den 100000.\n    - Yeu cau do phuc tap O(n log k) hoac O(n log n) su dung Heap / Sorting.\n\n    VI DU:\n    - records = [{\"id\": \"A\", \"doanh_thu\": 100, \"danh_gia\": 4.5, \"luot_xem\": 10},\n                 {\"id\": \"B\", \"doanh_thu\": 100, \"danh_gia\": 4.8, \"luot_xem\": 5}], k = 1\n      -> return [\"B\"]\n\n    GIAI THICH VI DU:\n    - A va B co cung doanh thu 100, nhung B co danh gia 4.8 > 4.5 cua A nen B dung truoc.",
        "starter": "def solution_609(records, k):\n    \"\"\"\n    DE BAI:\n    Trong mot he thong san thuong mai dien tu, moi san pham co thong tin:\n    {\"id\": str, \"doanh_thu\": int, \"danh_gia\": float, \"luot_xem\": int}.\n    Can tim ra Top k san pham xuat sac nhat theo cac tieu chi uu tien sau:\n    1. doanh_thu CAO HON duoc uu tien truoc (giam dan).\n    2. Neu doanh_thu bang nhau, danh_gia CAO HON duoc uu tien (giam dan).\n    3. Neu danh_gia bang nhau, luot_xem CAO HON duoc uu tien (giam dan).\n    4. Neu ca 3 tieu chi deu bang nhau, id NHO HON theo thu tu tu dien (A-Z) duoc uu tien.\n    Tra ve danh sach cac id cua k san pham xuat sac nhat theo dung thu tu uu tien tren.\n\n    GIAI THICH THAM SO:\n    - records: list cac dict chua thong tin san pham.\n    - k: so nguyen (int) la so luong san pham can lay.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac str la id cua k san pham dung dau.\n      Neu k <= 0 hoac records rong -> tra ve [].\n      Neu k >= len(records) -> tra ve toan bo danh sach id da sap xep theo dung thu tu.\n\n    RANG BUOC:\n    - So luong san pham n tu 0 den 100000.\n    - Yeu cau do phuc tap O(n log k) hoac O(n log n) su dung Heap / Sorting.\n\n    VI DU:\n    - records = [{\"id\": \"A\", \"doanh_thu\": 100, \"danh_gia\": 4.5, \"luot_xem\": 10},\n                 {\"id\": \"B\", \"doanh_thu\": 100, \"danh_gia\": 4.8, \"luot_xem\": 5}], k = 1\n      -> return [\"B\"]\n\n    GIAI THICH VI DU:\n    - A va B co cung doanh thu 100, nhung B co danh gia 4.8 > 4.5 cua A nen B dung truoc.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_609(records, k):\n    \"\"\"\n    DE BAI:\n    Trong mot he thong san thuong mai dien tu, moi san pham co thong tin:\n    {\"id\": str, \"doanh_thu\": int, \"danh_gia\": float, \"luot_xem\": int}.\n    Can tim ra Top k san pham xuat sac nhat theo cac tieu chi uu tien sau:\n    1. doanh_thu CAO HON duoc uu tien truoc (giam dan).\n    2. Neu doanh_thu bang nhau, danh_gia CAO HON duoc uu tien (giam dan).\n    3. Neu danh_gia bang nhau, luot_xem CAO HON duoc uu tien (giam dan).\n    4. Neu ca 3 tieu chi deu bang nhau, id NHO HON theo thu tu tu dien (A-Z) duoc uu tien.\n    Tra ve danh sach cac id cua k san pham xuat sac nhat theo dung thu tu uu tien tren.\n\n    GIAI THICH THAM SO:\n    - records: list cac dict chua thong tin san pham.\n    - k: so nguyen (int) la so luong san pham can lay.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve list cac str la id cua k san pham dung dau.\n      Neu k <= 0 hoac records rong -> tra ve [].\n      Neu k >= len(records) -> tra ve toan bo danh sach id da sap xep theo dung thu tu.\n\n    RANG BUOC:\n    - So luong san pham n tu 0 den 100000.\n    - Yeu cau do phuc tap O(n log k) hoac O(n log n) su dung Heap / Sorting.\n\n    VI DU:\n    - records = [{\"id\": \"A\", \"doanh_thu\": 100, \"danh_gia\": 4.5, \"luot_xem\": 10},\n                 {\"id\": \"B\", \"doanh_thu\": 100, \"danh_gia\": 4.8, \"luot_xem\": 5}], k = 1\n      -> return [\"B\"]\n\n    GIAI THICH VI DU:\n    - A va B co cung doanh thu 100, nhung B co danh gia 4.8 > 4.5 cua A nen B dung truoc.\n    \"\"\"\n    if not records or k <= 0:\n        return []\n    sorted_rec = sorted(\n        records,\n        key=lambda x: (-x[\"doanh_thu\"], -x[\"danh_gia\"], -x[\"luot_xem\"], x[\"id\"]),\n    )\n    return [r[\"id\"] for r in sorted_rec[:k]]"
      },
      {
        "id": "6.10",
        "fn": "solution_610",
        "title": "Bài 6.10 · solution_610",
        "doc": "DE BAI:\n    Mo phong he thong phuc vu khach hang tai ngan hang voi k quay phuc vu (danh so tu 0 den k-1).\n    Cac khach hang den theo danh sach customers, moi khach hang la tuple:\n    (id_khach, thoi_diem_den, thoi_gian_phuc_vu).\n    Quy tac phuc vu:\n    1. Khi mot khach den, neu co it nhat mot quay dang ranh tai thoi diem den do,\n       khach se vao quay ranh co CHI SO NHO NHAT.\n    2. Neu tat ca cac quay deu dang ban, khach hang phai xep hang doi. Khach hang se duoc\n       phuc vu ngay khi co quay dau tien tro nen ranh. Neu co nhieu quay cung ranh tai mot thoi diem,\n       uu tien quay co CHI SO NHO NHAT.\n    3. Thoi diem bat dau phuc vu = max(thoi_diem_den, thoi_diem_quay_ranh).\n       Thoi gian cho cua khach = thoi_diem_bat_dau - thoi_diem_den.\n       Thoi diem ket thuc phuc vu = thoi_diem_bat_dau + thoi_gian_phuc_vu.\n    Hay tinh toan va tra ve mot dict thong ke gom:\n    - \"tong_thoi_gian\": thoi diem khach hang cuoi cung duoc phuc vu xong (int).\n    - \"cho_trung_binh\": thoi gian cho trung binh cua tat ca khach hang, lam tron 2 chu so thap phan (float).\n    - \"phuc_vu_boi_quay\": list so luong khach hang ma moi quay da phuc vu, theo thu tu quay 0 den k-1.\n\n    GIAI THICH THAM SO:\n    - customers: list cac tuple (id, thoi_diem_den, thoi_gian_phuc_vu) sap xep tang dan theo thoi diem den.\n    - k: so nguyen duong la so luong quay phuc vu.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {\"tong_thoi_gian\": int, \"cho_trung_binh\": float, \"phuc_vu_boi_quay\": list[int]}.\n      Neu customers rong hoac k <= 0, tra ve {\"tong_thoi_gian\": 0, \"cho_trung_binh\": 0.0, \"phuc_vu_boi_quay\": [0]*max(0, k)}.\n\n    RANG BUOC:\n    - So luong khach hang n tu 0 den 50000, so quay k tu 1 den 1000.\n    - Yeu cau do phuc tap O(n log k) su dung Min-Heap.\n\n    VI DU:\n    - customers = [(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], k = 2\n      -> return {\"tong_thoi_gian\": 8, \"cho_trung_binh\": 0.5, \"phuc_vu_boi_quay\": [2, 2]}\n\n    GIAI THICH VI DU:\n    - Khach 1 den luc 0 -> quay 0 (0..5).\n    - Khach 2 den luc 1 -> quay 1 (1..4).\n    - Khach 3 den luc 2 -> doi den luc 4, quay 1 ranh -> quay 1 (4..8), cho: 4 - 2 = 2.\n    - Khach 4 den luc 6 -> quay 0 ranh tu luc 5 -> quay 0 (6..8), cho: 0.\n    - Tong thoi gian = 8, cho trung binh = (0 + 0 + 2 + 0) / 4 = 0.5, so khach moi quay = [2, 2].",
        "starter": "def solution_610(customers, k):\n    \"\"\"\n    DE BAI:\n    Mo phong he thong phuc vu khach hang tai ngan hang voi k quay phuc vu (danh so tu 0 den k-1).\n    Cac khach hang den theo danh sach customers, moi khach hang la tuple:\n    (id_khach, thoi_diem_den, thoi_gian_phuc_vu).\n    Quy tac phuc vu:\n    1. Khi mot khach den, neu co it nhat mot quay dang ranh tai thoi diem den do,\n       khach se vao quay ranh co CHI SO NHO NHAT.\n    2. Neu tat ca cac quay deu dang ban, khach hang phai xep hang doi. Khach hang se duoc\n       phuc vu ngay khi co quay dau tien tro nen ranh. Neu co nhieu quay cung ranh tai mot thoi diem,\n       uu tien quay co CHI SO NHO NHAT.\n    3. Thoi diem bat dau phuc vu = max(thoi_diem_den, thoi_diem_quay_ranh).\n       Thoi gian cho cua khach = thoi_diem_bat_dau - thoi_diem_den.\n       Thoi diem ket thuc phuc vu = thoi_diem_bat_dau + thoi_gian_phuc_vu.\n    Hay tinh toan va tra ve mot dict thong ke gom:\n    - \"tong_thoi_gian\": thoi diem khach hang cuoi cung duoc phuc vu xong (int).\n    - \"cho_trung_binh\": thoi gian cho trung binh cua tat ca khach hang, lam tron 2 chu so thap phan (float).\n    - \"phuc_vu_boi_quay\": list so luong khach hang ma moi quay da phuc vu, theo thu tu quay 0 den k-1.\n\n    GIAI THICH THAM SO:\n    - customers: list cac tuple (id, thoi_diem_den, thoi_gian_phuc_vu) sap xep tang dan theo thoi diem den.\n    - k: so nguyen duong la so luong quay phuc vu.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {\"tong_thoi_gian\": int, \"cho_trung_binh\": float, \"phuc_vu_boi_quay\": list[int]}.\n      Neu customers rong hoac k <= 0, tra ve {\"tong_thoi_gian\": 0, \"cho_trung_binh\": 0.0, \"phuc_vu_boi_quay\": [0]*max(0, k)}.\n\n    RANG BUOC:\n    - So luong khach hang n tu 0 den 50000, so quay k tu 1 den 1000.\n    - Yeu cau do phuc tap O(n log k) su dung Min-Heap.\n\n    VI DU:\n    - customers = [(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], k = 2\n      -> return {\"tong_thoi_gian\": 8, \"cho_trung_binh\": 0.5, \"phuc_vu_boi_quay\": [2, 2]}\n\n    GIAI THICH VI DU:\n    - Khach 1 den luc 0 -> quay 0 (0..5).\n    - Khach 2 den luc 1 -> quay 1 (1..4).\n    - Khach 3 den luc 2 -> doi den luc 4, quay 1 ranh -> quay 1 (4..8), cho: 4 - 2 = 2.\n    - Khach 4 den luc 6 -> quay 0 ranh tu luc 5 -> quay 0 (6..8), cho: 0.\n    - Tong thoi gian = 8, cho trung binh = (0 + 0 + 2 + 0) / 4 = 0.5, so khach moi quay = [2, 2].\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_610(customers, k):\n    \"\"\"\n    DE BAI:\n    Mo phong he thong phuc vu khach hang tai ngan hang voi k quay phuc vu (danh so tu 0 den k-1).\n    Cac khach hang den theo danh sach customers, moi khach hang la tuple:\n    (id_khach, thoi_diem_den, thoi_gian_phuc_vu).\n    Quy tac phuc vu:\n    1. Khi mot khach den, neu co it nhat mot quay dang ranh tai thoi diem den do,\n       khach se vao quay ranh co CHI SO NHO NHAT.\n    2. Neu tat ca cac quay deu dang ban, khach hang phai xep hang doi. Khach hang se duoc\n       phuc vu ngay khi co quay dau tien tro nen ranh. Neu co nhieu quay cung ranh tai mot thoi diem,\n       uu tien quay co CHI SO NHO NHAT.\n    3. Thoi diem bat dau phuc vu = max(thoi_diem_den, thoi_diem_quay_ranh).\n       Thoi gian cho cua khach = thoi_diem_bat_dau - thoi_diem_den.\n       Thoi diem ket thuc phuc vu = thoi_diem_bat_dau + thoi_gian_phuc_vu.\n    Hay tinh toan va tra ve mot dict thong ke gom:\n    - \"tong_thoi_gian\": thoi diem khach hang cuoi cung duoc phuc vu xong (int).\n    - \"cho_trung_binh\": thoi gian cho trung binh cua tat ca khach hang, lam tron 2 chu so thap phan (float).\n    - \"phuc_vu_boi_quay\": list so luong khach hang ma moi quay da phuc vu, theo thu tu quay 0 den k-1.\n\n    GIAI THICH THAM SO:\n    - customers: list cac tuple (id, thoi_diem_den, thoi_gian_phuc_vu) sap xep tang dan theo thoi diem den.\n    - k: so nguyen duong la so luong quay phuc vu.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve dict {\"tong_thoi_gian\": int, \"cho_trung_binh\": float, \"phuc_vu_boi_quay\": list[int]}.\n      Neu customers rong hoac k <= 0, tra ve {\"tong_thoi_gian\": 0, \"cho_trung_binh\": 0.0, \"phuc_vu_boi_quay\": [0]*max(0, k)}.\n\n    RANG BUOC:\n    - So luong khach hang n tu 0 den 50000, so quay k tu 1 den 1000.\n    - Yeu cau do phuc tap O(n log k) su dung Min-Heap.\n\n    VI DU:\n    - customers = [(1, 0, 5), (2, 1, 3), (3, 2, 4), (4, 6, 2)], k = 2\n      -> return {\"tong_thoi_gian\": 8, \"cho_trung_binh\": 0.5, \"phuc_vu_boi_quay\": [2, 2]}\n\n    GIAI THICH VI DU:\n    - Khach 1 den luc 0 -> quay 0 (0..5).\n    - Khach 2 den luc 1 -> quay 1 (1..4).\n    - Khach 3 den luc 2 -> doi den luc 4, quay 1 ranh -> quay 1 (4..8), cho: 4 - 2 = 2.\n    - Khach 4 den luc 6 -> quay 0 ranh tu luc 5 -> quay 0 (6..8), cho: 0.\n    - Tong thoi gian = 8, cho trung binh = (0 + 0 + 2 + 0) / 4 = 0.5, so khach moi quay = [2, 2].\n    \"\"\"\n    if not customers or k <= 0:\n        return {\n            \"tong_thoi_gian\": 0,\n            \"cho_trung_binh\": 0.0,\n            \"phuc_vu_boi_quay\": [0] * max(0, k),\n        }\n    free_counters = list(range(k))\n    heapq.heapify(free_counters)\n    busy_heap = []\n    counts = [0] * k\n    total_wait = 0\n    max_finish = 0\n\n    for cid, arrival, duration in customers:\n        while busy_heap and busy_heap[0][0] <= arrival:\n            f_time, c_id = heapq.heappop(busy_heap)\n            heapq.heappush(free_counters, c_id)\n\n        if free_counters:\n            c_id = heapq.heappop(free_counters)\n            start_time = arrival\n            wait_time = 0\n            finish_time = start_time + duration\n            heapq.heappush(busy_heap, (finish_time, c_id))\n        else:\n            earliest_finish, c_id = heapq.heappop(busy_heap)\n            heapq.heappush(free_counters, c_id)\n            while busy_heap and busy_heap[0][0] == earliest_finish:\n                _, other_cid = heapq.heappop(busy_heap)\n                heapq.heappush(free_counters, other_cid)\n            chosen_cid = heapq.heappop(free_counters)\n            start_time = earliest_finish\n            wait_time = start_time - arrival\n            finish_time = start_time + duration\n            heapq.heappush(busy_heap, (finish_time, chosen_cid))\n            c_id = chosen_cid\n\n        counts[c_id] += 1\n        total_wait += wait_time\n        max_finish = max(max_finish, finish_time)\n\n    avg_wait = round(total_wait / len(customers), 2)\n    return {\n        \"tong_thoi_gian\": max_finish,\n        \"cho_trung_binh\": avg_wait,\n        \"phuc_vu_boi_quay\": counts,\n    }"
      },
      {
        "id": "6.11",
        "fn": "solution_611",
        "title": "Bài 6.11 · solution_611",
        "doc": "DE BAI:\n    Mot chiec tau cho hang can van chuyen mot danh sach cac kien hang co khoi luong\n    weights theo dung thu tu da cho trong vong days ngay.\n    Moi ngay, tau se cho mot so kien hang lien tiep sao cho tong khoi luong khong vuot qua\n    tai trong toi da cua tau.\n    Hay tim tai trong toi thieu cua tau de co the van chuyen het tat ca cac kien hang trong dung\n    hoac it hon days ngay.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac kien hang (1 <= weights[i] <= 10^4).\n    - days: so nguyen duong la so ngay toi da (1 <= days <= len(weights)).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong toi thieu cua tau.\n\n    RANG BUOC:\n    - So luong kien hang n tu 1 den 50000.\n    - Yeu cau do phuc tap O(n * log(sum(weights))) bang thuat toan Tim kiem nhi phan tren dap an\n      (Binary Search the Answer).\n\n    VI DU:\n    - weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5 -> return 15\n\n    GIAI THICH VI DU:\n    - Voi tai trong 15: Ngay 1 cho [1,2,3,4,5] (tong 15), Ngay 2 cho [6,7] (tong 13),\n      Ngay 3 cho [8], Ngay 4 cho [9], Ngay 5 cho [10]. Tong cong 5 ngay.",
        "starter": "def solution_611(weights, days):\n    \"\"\"\n    DE BAI:\n    Mot chiec tau cho hang can van chuyen mot danh sach cac kien hang co khoi luong\n    weights theo dung thu tu da cho trong vong days ngay.\n    Moi ngay, tau se cho mot so kien hang lien tiep sao cho tong khoi luong khong vuot qua\n    tai trong toi da cua tau.\n    Hay tim tai trong toi thieu cua tau de co the van chuyen het tat ca cac kien hang trong dung\n    hoac it hon days ngay.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac kien hang (1 <= weights[i] <= 10^4).\n    - days: so nguyen duong la so ngay toi da (1 <= days <= len(weights)).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong toi thieu cua tau.\n\n    RANG BUOC:\n    - So luong kien hang n tu 1 den 50000.\n    - Yeu cau do phuc tap O(n * log(sum(weights))) bang thuat toan Tim kiem nhi phan tren dap an\n      (Binary Search the Answer).\n\n    VI DU:\n    - weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5 -> return 15\n\n    GIAI THICH VI DU:\n    - Voi tai trong 15: Ngay 1 cho [1,2,3,4,5] (tong 15), Ngay 2 cho [6,7] (tong 13),\n      Ngay 3 cho [8], Ngay 4 cho [9], Ngay 5 cho [10]. Tong cong 5 ngay.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_611(weights, days):\n    \"\"\"\n    DE BAI:\n    Mot chiec tau cho hang can van chuyen mot danh sach cac kien hang co khoi luong\n    weights theo dung thu tu da cho trong vong days ngay.\n    Moi ngay, tau se cho mot so kien hang lien tiep sao cho tong khoi luong khong vuot qua\n    tai trong toi da cua tau.\n    Hay tim tai trong toi thieu cua tau de co the van chuyen het tat ca cac kien hang trong dung\n    hoac it hon days ngay.\n\n    GIAI THICH THAM SO:\n    - weights: list cac so nguyen duong bieu thi khoi luong cac kien hang (1 <= weights[i] <= 10^4).\n    - days: so nguyen duong la so ngay toi da (1 <= days <= len(weights)).\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve so nguyen (int) la tai trong toi thieu cua tau.\n\n    RANG BUOC:\n    - So luong kien hang n tu 1 den 50000.\n    - Yeu cau do phuc tap O(n * log(sum(weights))) bang thuat toan Tim kiem nhi phan tren dap an\n      (Binary Search the Answer).\n\n    VI DU:\n    - weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5 -> return 15\n\n    GIAI THICH VI DU:\n    - Voi tai trong 15: Ngay 1 cho [1,2,3,4,5] (tong 15), Ngay 2 cho [6,7] (tong 13),\n      Ngay 3 cho [8], Ngay 4 cho [9], Ngay 5 cho [10]. Tong cong 5 ngay.\n    \"\"\"\n    if not weights or days <= 0:\n        return 0\n    low = max(weights)\n    high = sum(weights)\n    ans = high\n    while low <= high:\n        mid = (low + high) // 2\n        needed_days = 1\n        curr_weight = 0\n        for w in weights:\n            if curr_weight + w > mid:\n                needed_days += 1\n                curr_weight = w\n            else:\n                curr_weight += w\n        if needed_days <= days:\n            ans = mid\n            high = mid - 1\n        else:\n            low = mid + 1\n    return ans"
      },
      {
        "id": "6.12",
        "fn": "solution_612",
        "title": "Bài 6.12 · solution_612",
        "doc": "DE BAI:\n    Cho mot do thi vo huong gom n dinh (danh so tu 0 den n-1) va danh sach cac canh edges,\n    trong do moi canh la mot cap [u, v] noi giua dinh u va dinh v.\n    Hay:\n    1. Dem so luong thanh phan lien thong cua do thi.\n    2. Tim kich thuoc (so dinh) cua thanh phan lien thong LON NHAT.\n    3. Tim kich thuoc (so dinh) cua thanh phan lien thong NHO NHAT (trong cac thanh phan co it nhat 1 dinh).\n    Tra ve mot tuple 3 phan tu: (so_thanh_phan, max_size, min_size).\n    Neu n <= 0, tra ve (0, 0, 0).\n    Luu y: Dinh khong noi voi canh nao duoc coi la mot thanh phan lien thong rieng le co kich thuoc la 1.\n\n    GIAI THICH THAM SO:\n    - n: so luong dinh (int >= 0).\n    - edges: list cac cap [u, v] bieu thi cac canh.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple (so_thanh_phan, max_size, min_size).\n\n    RANG BUOC:\n    - n tu 0 den 100000, so canh tu 0 den 200000.\n    - Yeu cau do phuc tap O(V + E) su dung BFS, DFS hoac Disjoint Set Union (DSU).\n\n    VI DU:\n    - n = 5, edges = [[0, 1], [1, 2], [3, 4]] -> return (2, 3, 2)\n\n    GIAI THICH VI DU:\n    - Co 2 thanh phan: {0, 1, 2} co 3 dinh va {3, 4} co 2 dinh. Max size = 3, min size = 2.",
        "starter": "def solution_612(n, edges):\n    \"\"\"\n    DE BAI:\n    Cho mot do thi vo huong gom n dinh (danh so tu 0 den n-1) va danh sach cac canh edges,\n    trong do moi canh la mot cap [u, v] noi giua dinh u va dinh v.\n    Hay:\n    1. Dem so luong thanh phan lien thong cua do thi.\n    2. Tim kich thuoc (so dinh) cua thanh phan lien thong LON NHAT.\n    3. Tim kich thuoc (so dinh) cua thanh phan lien thong NHO NHAT (trong cac thanh phan co it nhat 1 dinh).\n    Tra ve mot tuple 3 phan tu: (so_thanh_phan, max_size, min_size).\n    Neu n <= 0, tra ve (0, 0, 0).\n    Luu y: Dinh khong noi voi canh nao duoc coi la mot thanh phan lien thong rieng le co kich thuoc la 1.\n\n    GIAI THICH THAM SO:\n    - n: so luong dinh (int >= 0).\n    - edges: list cac cap [u, v] bieu thi cac canh.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple (so_thanh_phan, max_size, min_size).\n\n    RANG BUOC:\n    - n tu 0 den 100000, so canh tu 0 den 200000.\n    - Yeu cau do phuc tap O(V + E) su dung BFS, DFS hoac Disjoint Set Union (DSU).\n\n    VI DU:\n    - n = 5, edges = [[0, 1], [1, 2], [3, 4]] -> return (2, 3, 2)\n\n    GIAI THICH VI DU:\n    - Co 2 thanh phan: {0, 1, 2} co 3 dinh va {3, 4} co 2 dinh. Max size = 3, min size = 2.\n    \"\"\"\n    pass  # <-- viet code cua ban o day",
        "solution": "def solution_612(n, edges):\n    \"\"\"\n    DE BAI:\n    Cho mot do thi vo huong gom n dinh (danh so tu 0 den n-1) va danh sach cac canh edges,\n    trong do moi canh la mot cap [u, v] noi giua dinh u va dinh v.\n    Hay:\n    1. Dem so luong thanh phan lien thong cua do thi.\n    2. Tim kich thuoc (so dinh) cua thanh phan lien thong LON NHAT.\n    3. Tim kich thuoc (so dinh) cua thanh phan lien thong NHO NHAT (trong cac thanh phan co it nhat 1 dinh).\n    Tra ve mot tuple 3 phan tu: (so_thanh_phan, max_size, min_size).\n    Neu n <= 0, tra ve (0, 0, 0).\n    Luu y: Dinh khong noi voi canh nao duoc coi la mot thanh phan lien thong rieng le co kich thuoc la 1.\n\n    GIAI THICH THAM SO:\n    - n: so luong dinh (int >= 0).\n    - edges: list cac cap [u, v] bieu thi cac canh.\n\n    GIAI THICH GIA TRI RETURN:\n    - Tra ve tuple (so_thanh_phan, max_size, min_size).\n\n    RANG BUOC:\n    - n tu 0 den 100000, so canh tu 0 den 200000.\n    - Yeu cau do phuc tap O(V + E) su dung BFS, DFS hoac Disjoint Set Union (DSU).\n\n    VI DU:\n    - n = 5, edges = [[0, 1], [1, 2], [3, 4]] -> return (2, 3, 2)\n\n    GIAI THICH VI DU:\n    - Co 2 thanh phan: {0, 1, 2} co 3 dinh va {3, 4} co 2 dinh. Max size = 3, min size = 2.\n    \"\"\"\n    if n <= 0:\n        return (0, 0, 0)\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        if 0 <= u < n and 0 <= v < n:\n            adj[u].append(v)\n            adj[v].append(u)\n    visited = [False] * n\n    sizes = []\n    for i in range(n):\n        if not visited[i]:\n            visited[i] = True\n            comp_size = 1\n            stack = [i]\n            while stack:\n                u = stack.pop()\n                for v in adj[u]:\n                    if not visited[v]:\n                        visited[v] = True\n                        comp_size += 1\n                        stack.append(v)\n            sizes.append(comp_size)\n    return (len(sizes), max(sizes), min(sizes))"
      },
      {
        "id": "6.13",
        "fn": "__init__",
        "title": "Bài 6.13 · __init__",
        "doc": "DE BAI:\n    Xay dung lop KhoHang de quan ly hang hoa trong kho voi cac chuc nang:\n    nhap hang, xuat hang, kiem tra ton kho, xem thong tin, canh bao ton it va tinh tong gia tri kho.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, canh_bao_ton_it=5):\n        Khoi tao kho hang voi nguong canh bao ton it mac dinh la 5.\n    - nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):\n        Them so_luong san pham ma_sp vao kho. Neu ma_sp chua co, luu them ten_sp.\n        Neu da co, cong don so_luong va cap nhat gia_nhap moi nhat.\n        Neu so_luong <= 0 hoac gia_nhap < 0, bo qua khong lam gi.\n    - xuat_hang(self, ma_sp, so_luong):\n        Xuat so_luong san pham ma_sp khoi kho.\n        Neu ma_sp khong ton tai, so_luong <= 0 hoac ton kho khong du (< so_luong),\n        khong xuat va tra ve False.\n        Neu du hang, giam so luong ton kho va tra ve True.\n    - ton_kho(self, ma_sp):\n        Tra ve so luong ton kho hien tai cua ma_sp (int). Neu khong ton tai tra ve 0.\n    - thong_tin(self, ma_sp):\n        Tra ve dict {\"ma_sp\": ma_sp, \"ten_sp\": ten_sp, \"so_luong\": so_luong, \"gia_nhap\": gia_nhap}.\n        Neu khong ton tai tra ve None.\n    - danh_sach_canh_bao(self):\n        Tra ve list cac ma_sp co 0 < ton_kho <= canh_bao_ton_it, sap xep theo so_luong TANG DAN,\n        neu cung so luong thi ma_sp theo thu tu tu dien A-Z.\n    - tong_gia_tri_kho(self):\n        Tra ve tong gia tri hang ton kho = sum(so_luong * gia_nhap) cua tat ca san pham.\n\n    RANG BUOC:\n    - Cac thao tac nhap, xuat, ton_kho, thong_tin dat do phuc tap O(1).",
        "starter": "class KhoHang:\n    \"\"\"\n    DE BAI:\n    Xay dung lop KhoHang de quan ly hang hoa trong kho voi cac chuc nang:\n    nhap hang, xuat hang, kiem tra ton kho, xem thong tin, canh bao ton it va tinh tong gia tri kho.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, canh_bao_ton_it=5):\n        Khoi tao kho hang voi nguong canh bao ton it mac dinh la 5.\n    - nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):\n        Them so_luong san pham ma_sp vao kho. Neu ma_sp chua co, luu them ten_sp.\n        Neu da co, cong don so_luong va cap nhat gia_nhap moi nhat.\n        Neu so_luong <= 0 hoac gia_nhap < 0, bo qua khong lam gi.\n    - xuat_hang(self, ma_sp, so_luong):\n        Xuat so_luong san pham ma_sp khoi kho.\n        Neu ma_sp khong ton tai, so_luong <= 0 hoac ton kho khong du (< so_luong),\n        khong xuat va tra ve False.\n        Neu du hang, giam so luong ton kho va tra ve True.\n    - ton_kho(self, ma_sp):\n        Tra ve so luong ton kho hien tai cua ma_sp (int). Neu khong ton tai tra ve 0.\n    - thong_tin(self, ma_sp):\n        Tra ve dict {\"ma_sp\": ma_sp, \"ten_sp\": ten_sp, \"so_luong\": so_luong, \"gia_nhap\": gia_nhap}.\n        Neu khong ton tai tra ve None.\n    - danh_sach_canh_bao(self):\n        Tra ve list cac ma_sp co 0 < ton_kho <= canh_bao_ton_it, sap xep theo so_luong TANG DAN,\n        neu cung so luong thi ma_sp theo thu tu tu dien A-Z.\n    - tong_gia_tri_kho(self):\n        Tra ve tong gia tri hang ton kho = sum(so_luong * gia_nhap) cua tat ca san pham.\n\n    RANG BUOC:\n    - Cac thao tac nhap, xuat, ton_kho, thong_tin dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, canh_bao_ton_it=5):\n        pass  # <-- viet code cua ban o day\n\n    def nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):\n        pass  # <-- viet code cua ban o day\n\n    def xuat_hang(self, ma_sp, so_luong):\n        pass  # <-- viet code cua ban o day\n\n    def ton_kho(self, ma_sp):\n        pass  # <-- viet code cua ban o day\n\n    def thong_tin(self, ma_sp):\n        pass  # <-- viet code cua ban o day\n\n    def danh_sach_canh_bao(self):\n        pass  # <-- viet code cua ban o day\n\n    def tong_gia_tri_kho(self):\n        pass  # <-- viet code cua ban o day",
        "solution": "class KhoHang:\n    \"\"\"\n    DE BAI:\n    Xay dung lop KhoHang de quan ly hang hoa trong kho voi cac chuc nang:\n    nhap hang, xuat hang, kiem tra ton kho, xem thong tin, canh bao ton it va tinh tong gia tri kho.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, canh_bao_ton_it=5):\n        Khoi tao kho hang voi nguong canh bao ton it mac dinh la 5.\n    - nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):\n        Them so_luong san pham ma_sp vao kho. Neu ma_sp chua co, luu them ten_sp.\n        Neu da co, cong don so_luong va cap nhat gia_nhap moi nhat.\n        Neu so_luong <= 0 hoac gia_nhap < 0, bo qua khong lam gi.\n    - xuat_hang(self, ma_sp, so_luong):\n        Xuat so_luong san pham ma_sp khoi kho.\n        Neu ma_sp khong ton tai, so_luong <= 0 hoac ton kho khong du (< so_luong),\n        khong xuat va tra ve False.\n        Neu du hang, giam so luong ton kho va tra ve True.\n    - ton_kho(self, ma_sp):\n        Tra ve so luong ton kho hien tai cua ma_sp (int). Neu khong ton tai tra ve 0.\n    - thong_tin(self, ma_sp):\n        Tra ve dict {\"ma_sp\": ma_sp, \"ten_sp\": ten_sp, \"so_luong\": so_luong, \"gia_nhap\": gia_nhap}.\n        Neu khong ton tai tra ve None.\n    - danh_sach_canh_bao(self):\n        Tra ve list cac ma_sp co 0 < ton_kho <= canh_bao_ton_it, sap xep theo so_luong TANG DAN,\n        neu cung so luong thi ma_sp theo thu tu tu dien A-Z.\n    - tong_gia_tri_kho(self):\n        Tra ve tong gia tri hang ton kho = sum(so_luong * gia_nhap) cua tat ca san pham.\n\n    RANG BUOC:\n    - Cac thao tac nhap, xuat, ton_kho, thong_tin dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, canh_bao_ton_it=5):\n        self.canh_bao_ton_it = canh_bao_ton_it\n        self.items = {}\n\n    def nhap_hang(self, ma_sp, ten_sp, so_luong, gia_nhap):\n        if so_luong <= 0 or gia_nhap < 0:\n            return\n        if ma_sp in self.items:\n            self.items[ma_sp][\"so_luong\"] += so_luong\n            self.items[ma_sp][\"gia_nhap\"] = gia_nhap\n        else:\n            self.items[ma_sp] = {\n                \"ten_sp\": ten_sp,\n                \"so_luong\": so_luong,\n                \"gia_nhap\": gia_nhap,\n            }\n\n    def xuat_hang(self, ma_sp, so_luong):\n        if so_luong <= 0 or ma_sp not in self.items:\n            return False\n        if self.items[ma_sp][\"so_luong\"] < so_luong:\n            return False\n        self.items[ma_sp][\"so_luong\"] -= so_luong\n        return True\n\n    def ton_kho(self, ma_sp):\n        if ma_sp not in self.items:\n            return 0\n        return self.items[ma_sp][\"so_luong\"]\n\n    def thong_tin(self, ma_sp):\n        if ma_sp not in self.items:\n            return None\n        it = self.items[ma_sp]\n        return {\n            \"ma_sp\": ma_sp,\n            \"ten_sp\": it[\"ten_sp\"],\n            \"so_luong\": it[\"so_luong\"],\n            \"gia_nhap\": it[\"gia_nhap\"],\n        }\n\n    def danh_sach_canh_bao(self):\n        cb = []\n        for ma_sp, it in self.items.items():\n            if 0 < it[\"so_luong\"] <= self.canh_bao_ton_it:\n                cb.append((it[\"so_luong\"], ma_sp))\n        cb.sort(key=lambda x: (x[0], x[1]))\n        return [item[1] for item in cb]\n\n    def tong_gia_tri_kho(self):\n        return sum(it[\"so_luong\"] * it[\"gia_nhap\"] for it in self.items.values())"
      },
      {
        "id": "6.14",
        "fn": "__init__",
        "title": "Bài 6.14 · __init__",
        "doc": "DE BAI:\n    Xay dung lop TaiKhoan quan ly so du, lich su giao dich va hoan tac (undo) giao dich.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, chu_tai_khoan, so_du_ban_dau=0):\n        Khoi tao tai khoan voi ten chu_tai_khoan va so_du_ban_dau (neu so_du_ban_dau < 0 thi dat ve 0).\n    - nap_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0, tra ve False.\n        Nguoc lai cong vao so du, ghi nhan giao dich vao lich su va tra ve True.\n    - rut_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0 hoac so_tien > so_du_hien_tai, tra ve False.\n        Nguoc lai tru so du, ghi nhan giao dich vao lich su va tra ve True.\n    - xem_so_du(self):\n        Tra ve so du hien tai (int hoac float).\n    - lich_su_giao_dich(self, gioi_han=None):\n        Tra ve list cac dict giao dich da thuc hien tu cu nhat den moi nhat:\n        {\"loai\": \"NAP\" hoac \"RUT\", \"so_tien\": so_tien, \"mo_ta\": mo_ta, \"so_du_sau\": so_du_sau}.\n        Neu co gioi_han (int > 0), chi lay toi da gioi_han giao dich gan nhat.\n    - hoan_tac(self, so_buoc=1):\n        Hoan tac toi da so_buoc giao dich gan nhat theo co che ngan xep (LIFO).\n        - Neu hoan tac giao dich NAP: tru lai so tien da nap. Neu so du hien tai khong du tru,\n          huy thao tac hoan tac va dung lai.\n        - Neu hoan tac giao dich RUT: cong lai so tien da rut vao so du.\n        - Giao dich duoc hoan tac thanh cong se bi xoa khoi lich su.\n        Tra ve so giao dich thuc su da duoc hoan tac thanh cong (int).\n\n    RANG BUOC:\n    - Cac thao tac nap, rut, xem_so_du, hoan_tac moi buoc dat do phuc tap O(1).",
        "starter": "class TaiKhoan:\n    \"\"\"\n    DE BAI:\n    Xay dung lop TaiKhoan quan ly so du, lich su giao dich va hoan tac (undo) giao dich.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, chu_tai_khoan, so_du_ban_dau=0):\n        Khoi tao tai khoan voi ten chu_tai_khoan va so_du_ban_dau (neu so_du_ban_dau < 0 thi dat ve 0).\n    - nap_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0, tra ve False.\n        Nguoc lai cong vao so du, ghi nhan giao dich vao lich su va tra ve True.\n    - rut_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0 hoac so_tien > so_du_hien_tai, tra ve False.\n        Nguoc lai tru so du, ghi nhan giao dich vao lich su va tra ve True.\n    - xem_so_du(self):\n        Tra ve so du hien tai (int hoac float).\n    - lich_su_giao_dich(self, gioi_han=None):\n        Tra ve list cac dict giao dich da thuc hien tu cu nhat den moi nhat:\n        {\"loai\": \"NAP\" hoac \"RUT\", \"so_tien\": so_tien, \"mo_ta\": mo_ta, \"so_du_sau\": so_du_sau}.\n        Neu co gioi_han (int > 0), chi lay toi da gioi_han giao dich gan nhat.\n    - hoan_tac(self, so_buoc=1):\n        Hoan tac toi da so_buoc giao dich gan nhat theo co che ngan xep (LIFO).\n        - Neu hoan tac giao dich NAP: tru lai so tien da nap. Neu so du hien tai khong du tru,\n          huy thao tac hoan tac va dung lai.\n        - Neu hoan tac giao dich RUT: cong lai so tien da rut vao so du.\n        - Giao dich duoc hoan tac thanh cong se bi xoa khoi lich su.\n        Tra ve so giao dich thuc su da duoc hoan tac thanh cong (int).\n\n    RANG BUOC:\n    - Cac thao tac nap, rut, xem_so_du, hoan_tac moi buoc dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, chu_tai_khoan, so_du_ban_dau=0):\n        pass  # <-- viet code cua ban o day\n\n    def nap_tien(self, so_tien, mo_ta=\"\"):\n        pass  # <-- viet code cua ban o day\n\n    def rut_tien(self, so_tien, mo_ta=\"\"):\n        pass  # <-- viet code cua ban o day\n\n    def xem_so_du(self):\n        pass  # <-- viet code cua ban o day\n\n    def lich_su_giao_dich(self, gioi_han=None):\n        pass  # <-- viet code cua ban o day\n\n    def hoan_tac(self, so_buoc=1):\n        pass  # <-- viet code cua ban o day",
        "solution": "class TaiKhoan:\n    \"\"\"\n    DE BAI:\n    Xay dung lop TaiKhoan quan ly so du, lich su giao dich va hoan tac (undo) giao dich.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, chu_tai_khoan, so_du_ban_dau=0):\n        Khoi tao tai khoan voi ten chu_tai_khoan va so_du_ban_dau (neu so_du_ban_dau < 0 thi dat ve 0).\n    - nap_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0, tra ve False.\n        Nguoc lai cong vao so du, ghi nhan giao dich vao lich su va tra ve True.\n    - rut_tien(self, so_tien, mo_ta=\"\"):\n        Neu so_tien <= 0 hoac so_tien > so_du_hien_tai, tra ve False.\n        Nguoc lai tru so du, ghi nhan giao dich vao lich su va tra ve True.\n    - xem_so_du(self):\n        Tra ve so du hien tai (int hoac float).\n    - lich_su_giao_dich(self, gioi_han=None):\n        Tra ve list cac dict giao dich da thuc hien tu cu nhat den moi nhat:\n        {\"loai\": \"NAP\" hoac \"RUT\", \"so_tien\": so_tien, \"mo_ta\": mo_ta, \"so_du_sau\": so_du_sau}.\n        Neu co gioi_han (int > 0), chi lay toi da gioi_han giao dich gan nhat.\n    - hoan_tac(self, so_buoc=1):\n        Hoan tac toi da so_buoc giao dich gan nhat theo co che ngan xep (LIFO).\n        - Neu hoan tac giao dich NAP: tru lai so tien da nap. Neu so du hien tai khong du tru,\n          huy thao tac hoan tac va dung lai.\n        - Neu hoan tac giao dich RUT: cong lai so tien da rut vao so du.\n        - Giao dich duoc hoan tac thanh cong se bi xoa khoi lich su.\n        Tra ve so giao dich thuc su da duoc hoan tac thanh cong (int).\n\n    RANG BUOC:\n    - Cac thao tac nap, rut, xem_so_du, hoan_tac moi buoc dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, chu_tai_khoan, so_du_ban_dau=0):\n        self.chu_tai_khoan = chu_tai_khoan\n        self.so_du = max(0, so_du_ban_dau)\n        self.history = []\n\n    def nap_tien(self, so_tien, mo_ta=\"\"):\n        if so_tien <= 0:\n            return False\n        self.so_du += so_tien\n        self.history.append({\n            \"loai\": \"NAP\",\n            \"so_tien\": so_tien,\n            \"mo_ta\": mo_ta,\n            \"so_du_sau\": self.so_du,\n        })\n        return True\n\n    def rut_tien(self, so_tien, mo_ta=\"\"):\n        if so_tien <= 0 or so_tien > self.so_du:\n            return False\n        self.so_du -= so_tien\n        self.history.append({\n            \"loai\": \"RUT\",\n            \"so_tien\": so_tien,\n            \"mo_ta\": mo_ta,\n            \"so_du_sau\": self.so_du,\n        })\n        return True\n\n    def xem_so_du(self):\n        return self.so_du\n\n    def lich_su_giao_dich(self, gioi_han=None):\n        if gioi_han is None or gioi_han <= 0:\n            return [dict(h) for h in self.history]\n        return [dict(h) for h in self.history[-gioi_han:]]\n\n    def hoan_tac(self, so_buoc=1):\n        if so_buoc <= 0:\n            return 0\n        undone = 0\n        for _ in range(so_buoc):\n            if not self.history:\n                break\n            last = self.history[-1]\n            if last[\"loai\"] == \"NAP\":\n                if self.so_du >= last[\"so_tien\"]:\n                    self.so_du -= last[\"so_tien\"]\n                    self.history.pop()\n                    undone += 1\n                else:\n                    break\n            elif last[\"loai\"] == \"RUT\":\n                self.so_du += last[\"so_tien\"]\n                self.history.pop()\n                undone += 1\n        return undone"
      },
      {
        "id": "6.15",
        "fn": "__init__",
        "title": "Bài 6.15 · __init__",
        "doc": "DE BAI:\n    Cai dat bo dem LRUCache (Least Recently Used Cache) voi dung luong co dinh suc_chua.\n    Cam dung thu vien co san nhu functools.lru_cache.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, suc_chua):\n        Khoi tao bo dem voi dung luong suc_chua (so nguyen duong). Neu suc_chua <= 0 dat la 1.\n    - get(self, key):\n        Lay gia tri cua key trong cache va cap nhat key tro thanh phan tu vua duoc truy cap gan nhat (MRU).\n        Neu key khong ton tai trong cache, tra ve -1.\n    - put(self, key, value):\n        Them hoac cap nhat cap (key, value) vao cache.\n        - Neu key da co: cap nhat value va chuyen key len vi tri moi nhat (MRU).\n        - Neu key chua co: neu cache da dat dung luong toi da, loai bo phan tu it duoc dung nhat (LRU)\n          truoc khi them cap (key, value) moi vao vi tri moi nhat.\n    - xoa(self, key):\n        Xoa key khoi cache neu ton tai. Tra ve True neu xoa duoc, False neu khong co key.\n    - do_dai(self):\n        Tra ve so luong phan tu hien co trong cache (int).\n    - danh_sach_keys(self):\n        Tra ve list cac key theo thu tu tu it duoc dung nhat (LRU) den dung gan nhat (MRU).\n\n    RANG BUOC:\n    - Cac thao tac get, put, xoa, do_dai phai dat do phuc tap O(1).",
        "starter": "class LRUCache:\n    \"\"\"\n    DE BAI:\n    Cai dat bo dem LRUCache (Least Recently Used Cache) voi dung luong co dinh suc_chua.\n    Cam dung thu vien co san nhu functools.lru_cache.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, suc_chua):\n        Khoi tao bo dem voi dung luong suc_chua (so nguyen duong). Neu suc_chua <= 0 dat la 1.\n    - get(self, key):\n        Lay gia tri cua key trong cache va cap nhat key tro thanh phan tu vua duoc truy cap gan nhat (MRU).\n        Neu key khong ton tai trong cache, tra ve -1.\n    - put(self, key, value):\n        Them hoac cap nhat cap (key, value) vao cache.\n        - Neu key da co: cap nhat value va chuyen key len vi tri moi nhat (MRU).\n        - Neu key chua co: neu cache da dat dung luong toi da, loai bo phan tu it duoc dung nhat (LRU)\n          truoc khi them cap (key, value) moi vao vi tri moi nhat.\n    - xoa(self, key):\n        Xoa key khoi cache neu ton tai. Tra ve True neu xoa duoc, False neu khong co key.\n    - do_dai(self):\n        Tra ve so luong phan tu hien co trong cache (int).\n    - danh_sach_keys(self):\n        Tra ve list cac key theo thu tu tu it duoc dung nhat (LRU) den dung gan nhat (MRU).\n\n    RANG BUOC:\n    - Cac thao tac get, put, xoa, do_dai phai dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, suc_chua):\n        pass  # <-- viet code cua ban o day\n\n    def get(self, key):\n        pass  # <-- viet code cua ban o day\n\n    def put(self, key, value):\n        pass  # <-- viet code cua ban o day\n\n    def xoa(self, key):\n        pass  # <-- viet code cua ban o day\n\n    def do_dai(self):\n        pass  # <-- viet code cua ban o day\n\n    def danh_sach_keys(self):\n        pass  # <-- viet code cua ban o day",
        "solution": "class LRUCache:\n    \"\"\"\n    DE BAI:\n    Cai dat bo dem LRUCache (Least Recently Used Cache) voi dung luong co dinh suc_chua.\n    Cam dung thu vien co san nhu functools.lru_cache.\n\n    CAC PHUONG THUC CAN CO:\n    - __init__(self, suc_chua):\n        Khoi tao bo dem voi dung luong suc_chua (so nguyen duong). Neu suc_chua <= 0 dat la 1.\n    - get(self, key):\n        Lay gia tri cua key trong cache va cap nhat key tro thanh phan tu vua duoc truy cap gan nhat (MRU).\n        Neu key khong ton tai trong cache, tra ve -1.\n    - put(self, key, value):\n        Them hoac cap nhat cap (key, value) vao cache.\n        - Neu key da co: cap nhat value va chuyen key len vi tri moi nhat (MRU).\n        - Neu key chua co: neu cache da dat dung luong toi da, loai bo phan tu it duoc dung nhat (LRU)\n          truoc khi them cap (key, value) moi vao vi tri moi nhat.\n    - xoa(self, key):\n        Xoa key khoi cache neu ton tai. Tra ve True neu xoa duoc, False neu khong co key.\n    - do_dai(self):\n        Tra ve so luong phan tu hien co trong cache (int).\n    - danh_sach_keys(self):\n        Tra ve list cac key theo thu tu tu it duoc dung nhat (LRU) den dung gan nhat (MRU).\n\n    RANG BUOC:\n    - Cac thao tac get, put, xoa, do_dai phai dat do phuc tap O(1).\n    \"\"\"\n\n    def __init__(self, suc_chua):\n        self.suc_chua = max(1, suc_chua)\n        self.cache = OrderedDict()\n\n    def get(self, key):\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache[key] = value\n            self.cache.move_to_end(key)\n        else:\n            if len(self.cache) >= self.suc_chua:\n                self.cache.popitem(last=False)\n            self.cache[key] = value\n\n    def xoa(self, key):\n        if key in self.cache:\n            del self.cache[key]\n            return True\n        return False\n\n    def do_dai(self):\n        return len(self.cache)\n\n    def danh_sach_keys(self):\n        return list(self.cache.keys())"
      }
    ]
  }
};
  const TRAP_DATA = [
  {
    "id": 1,
    "title": "\"Chỉ lấy phần nguyên\" — `int()` vs `round()`",
    "bad": "def tinh_diem(tong_diem, so_mon):\n    # Đề bài: \"Nếu điểm trung bình là số thập phân, chỉ return phần số nguyên\"\n    return round(tong_diem / so_mon)",
    "real_err": "`tinh_diem(161, 2)` trả về `81` (vì 161/2 = 80.5 bị làm tròn lên 81) thay vì `80`.",
    "good": "def tinh_diem(tong_diem, so_mon):\n    return tong_diem // so_mon  # hoặc int(tong_diem / so_mon)",
    "note": "Cứ thấy chữ \"chỉ lấy phần nguyên / cắt bỏ thập phân\" -> dùng `int()` hoặc `//`. Chỉ dùng `round()` khi đề ghi rõ \"làm tròn số học\"."
  },
  {
    "id": 2,
    "title": "Loại bỏ Max/Min khi có nhiều phần tử trùng nhau",
    "bad": "def diem_trung_tuyen(scores):\n    # Đề bài: \"Bỏ 1 điểm cao nhất và 1 điểm thấp nhất của giám khảo\"\n    max_val = max(scores)\n    min_val = min(scores)\n    con_lai = [x for x in scores if x != max_val and x != min_val]\n    return sum(con_lai) // len(con_lai)",
    "real_err": "Với `scores = [90, 90, 80, 70]`, list comprehension xóa TẤT CẢ các số 90 -> `con_lai = [80]` (sai hoàn toàn). Với `scores = [85, 85, 85, 85]`, `con_lai = []` -> `ZeroDivisionError`.",
    "good": "def diem_trung_tuyen(scores):\n    con_lai = sorted(scores)[1:-1] # Sắp xếp và bỏ đúng phần tử đầu và cuối\n    return sum(con_lai) // len(con_lai)",
    "note": "Muốn bỏ đúng 1 phần tử cực trị, sắp xếp rồi cắt lát `sorted(a)[1:-1]` hoặc dùng `scores.remove(min(scores))` và `scores.remove(max(scores))`."
  },
  {
    "id": 3,
    "title": "Phép chia lấy dư (%) với số âm trong Python",
    "bad": "def toa_do_truoc(vi_tri, buoc, n):\n    # Lùi bước trên vòng tròn n phần tử, tưởng rằng % số âm ra số âm\n    return (vi_tri - buoc) % n",
    "real_err": "Trong C/C++/Java `-7 % 3 = -1`, nhưng trong Python `-7 % 3 = 2`. Nếu người viết code giả định kết quả âm để so sánh `< 0` thì nhánh điều kiện sẽ không bao giờ chạy.",
    "good": "vi_tri = 1\nbuoc = 3\nn = 5\n# Trong Python (vi_tri - buoc) % n LUÔN RA SỐ DƯ DƯƠNG [0..n-1], đây là thiết kế chuẩn\nvi_tri_moi = (vi_tri - buoc) % n\nprint(vi_tri_moi)  # (1 - 3) % 5 = 3",
    "note": "Trong Python, `a % b` luôn cùng dấu với số chia `b`. Khi b > 0, kết quả của `%` luôn >= 0."
  },
  {
    "id": 4,
    "title": "Phép chia lấy phần nguyên (//) với số âm",
    "bad": "def chia_lay_nguyen(a, b):\n    # Cần cắt bỏ phần thập phân của phép chia -7 / 3\n    return a // b",
    "real_err": "`-7 // 3` trả về `-3` (làm tròn xuống số nguyên nhỏ hơn) thay vì `-2`.",
    "good": "def chia_lay_nguyen(a, b):\n    return int(a / b)  # int() cắt cụt về phía 0: int(-2.333) -> -2",
    "note": "`//` là làm tròn xuống (floor), `int()` là cắt cụt về 0 (truncation). Với số âm, `//` làm giảm giá trị đi 1 đơn vị."
  },
  {
    "id": 5,
    "title": "Khởi tạo ma trận 2D bằng phép nhân `[[0] * n] * m`",
    "bad": "board = [[0] * 3] * 3\nboard[0][0] = 1",
    "real_err": "`board` trở thành `[[1, 0, 0], [1, 0, 0], [1, 0, 0]]` vì cả 3 hàng cùng trỏ vào một danh sách.",
    "good": "board = [[0] * 3 for _ in range(3)]\nboard[0][0] = 1  # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]",
    "note": "Khởi tạo danh sách lồng nhau LUÔN LUÔN dùng List Comprehension với `for _ in range(...)`."
  },
  {
    "id": 6,
    "title": "Tham số mặc định dạng biến đổi (Mutable Default Argument)",
    "bad": "def append_item(val, container=[]):\n    container.append(val)\n    return container",
    "real_err": "Gọi `append_item(1)` ra `[1]`. Gọi tiếp `append_item(2)` ra `[1, 2]` thay vì `[2]`.",
    "good": "def append_item(val, container=None):\n    if container is None:\n        container = []\n    container.append(val)\n    return container",
    "note": "Không bao giờ để `[]`, `{}`, `set()` làm giá trị mặc định ở khai báo hàm. Luôn dùng `=None`."
  },
  {
    "id": 7,
    "title": "Gọi `remove()` trong khi đang duyệt `for x in list`",
    "bad": "nums = [2, 2, 2, 3]\nfor x in nums:\n    if x == 2:\n        nums.remove(x)",
    "real_err": "`nums` trở thành `[2, 3]`. Con trỏ duyệt bị nhảy qua một số 2 do danh sách bị co lại.",
    "good": "nums = [2, 2, 2, 3]\nnums = [x for x in nums if x != 2] # Tạo list mới\n# Hoặc sửa tại chỗ: nums[:] = [x for x in nums if x != 2]\nprint(nums)  # [3]",
    "note": "Không bao giờ thêm/xóa phần tử của danh sách trong vòng lặp duyệt chính nó. Dùng List Comprehension."
  },
  {
    "id": 8,
    "title": "So sánh trực tiếp số thực dấu phẩy động (`float`)",
    "bad": "if 0.1 + 0.2 == 0.3:\n    print(\"Bằng nhau\")",
    "real_err": "Không in gì cả vì `0.1 + 0.2` bằng `0.30000000000000004` trong chuẩn nhị phân IEEE 754.",
    "good": "import math\nif math.isclose(0.1 + 0.2, 0.3, abs_tol=1e-9):\n    print(\"Bằng nhau\")",
    "note": "So sánh `float` luôn dùng `abs(a - b) < 1e-9` hoặc `math.isclose(a, b)`."
  },
  {
    "id": 9,
    "title": "Dùng dấu trừ `-` để đảo thứ tự sắp xếp chuỗi",
    "bad": "# Yêu cầu: Điểm giảm dần, Tên giảm dần\ndata = [(\"Bình\", 90), (\"An\", 90)]\ndata.sort(key=lambda x: (-x[1], -x[0]))",
    "real_err": "Ném lỗi `TypeError: bad operand type for unary -: 'str'`.",
    "good": "data = [(\"Bình\", 90), (\"An\", 90)]\n# Timsort là sắp xếp ổn định: Sắp tiêu chí phụ trước, tiêu chí chính sau\ndata.sort(key=lambda x: x[0], reverse=True) # Tên giảm dần\ndata.sort(key=lambda x: x[1], reverse=True) # Điểm giảm dần\nprint(data)  # [('Bình', 90), ('An', 90)]",
    "note": "Dấu `-` chỉ dùng được cho số. Với chuỗi ngược chiều, sắp xếp 2 lần theo thứ tự ưu tiên từ thấp đến cao."
  },
  {
    "id": 10,
    "title": "Dùng toán tử `is` thay vì `==` để so sánh giá trị",
    "bad": "a = 1000\nb = 1000\nif a is b:\n    print(\"Khớp\")",
    "real_err": "Không in gì cả. CPython chỉ cache số nguyên từ -5 đến 256. Với số > 256, `is` trả về `False`.",
    "good": "a = 1000\nb = 1000\nif a == b:\n    print(\"Khớp\")",
    "note": "`==` so sánh **giá trị**; `is` so sánh **địa chỉ vùng nhớ**. `is` chỉ dùng cho `None`, `True`, `False`."
  },
  {
    "id": 11,
    "title": "Sao chép nông `a.copy()` trên mảng 2 chiều",
    "bad": "matrix = [[1, 2], [3, 4]]\nbackup = matrix.copy() # hoặc matrix[:]\nbackup[0][0] = 99",
    "real_err": "`matrix[0][0]` cũng bị đổi thành `99`.",
    "good": "import copy\nmatrix = [[1, 2], [3, 4]]\nbackup = copy.deepcopy(matrix)\n# Hoặc: backup = [row[:] for row in matrix]\nbackup[0][0] = 99\nprint(matrix[0][0])  # 1 (không bị thay đổi)",
    "note": "Cấu trúc có cấp lồng nhau từ 2 tầng trở lên bắt buộc dùng `copy.deepcopy()` hoặc comprehension sao chép từng hàng."
  },
  {
    "id": 12,
    "title": "Rò rỉ biến vòng lặp `for` sau khi lặp xong",
    "bad": "i = 100\nfor i in range(5):\n    pass\nprint(i)",
    "real_err": "In ra `4` chứ không phải `100`. Biến `i` ban đầu đã bị vòng lặp ghi đè.",
    "good": "i = 100\nfor idx in range(5):\n    pass\nprint(i) # Vẫn là 100",
    "note": "Biến chạy trong vòng `for` không có phạm vi riêng biệt (không block-scoped), nó ghi đè lên biến cùng tên ở scope hàm."
  },
  {
    "id": 13,
    "title": "Gán ký tự trực tiếp vào chuỗi (String Immutability)",
    "bad": "s = \"hello\"\ns[0] = \"H\"",
    "real_err": "Ném lỗi `TypeError: 'str' object does not support item assignment`.",
    "good": "s = \"hello\"\ns = \"H\" + s[1:]\nprint(s)  # \"Hello\"",
    "note": "Chuỗi trong Python là bất biến. Muốn sửa ký tự, cắt ghép chuỗi hoặc chuyển sang `list(s)` rồi `join`."
  },
  {
    "id": 14,
    "title": "Thứ tự ưu tiên toán tử với `not` và `==`",
    "bad": "x = 5\nif not x == 5:\n    print(\"Khác 5\")",
    "real_err": "Toán tử `==` có độ ưu tiên cao hơn `not`, nên biểu thức được hiểu là `not (x == 5)`. Mặc dù biểu thức này đúng logic, nhưng viết `if not x in [1, 2]:` sẽ dễ bị hiểu nhầm. Nguy hiểm nhất là `if not a is None` bị phân tích thành `if (not a) is None` (sai).",
    "good": "x = 5\na = 10\nif x != 5:\n    print(\"Khác 5\")\nif a is not None:\n    pass",
    "note": "Luôn dùng `!=`, `is not`, `not in` thay vì đảo ngữ bằng `not`."
  },
  {
    "id": 15,
    "title": "Toán tử `and` / `or` trả về giá trị toán hạng thay vì kiểu `bool`",
    "bad": "val = 0 or \"Default\"\nif val is True:\n    print(\"Là True\")",
    "real_err": "`val` nhận giá trị `\"Default\"` (kiểu `str`), do đó `val is True` trả về `False`.",
    "good": "val = 0 or \"Default\"\nif bool(val):\n    print(\"Truthy\")",
    "note": "Trong Python, `a or b` trả về `a` nếu `a` truthy, ngược lại trả về `b`. `a and b` trả về `a` nếu `a` falsy, ngược lại trả về `b`."
  },
  {
    "id": 16,
    "title": "Phép chia `/` luôn trả về kiểu `float` trong Python 3",
    "bad": "def lay_phan_tu_giua(arr):\n    mid = len(arr) / 2\n    return arr[mid]",
    "real_err": "Ném lỗi `TypeError: list indices must be integers or slices, not float` (ví dụ `arr[2.0]`).",
    "good": "def lay_phan_tu_giua(arr):\n    mid = len(arr) // 2\n    return arr[mid]",
    "note": "Chỉ số mảng bắt buộc là số nguyên `int`. Tính chỉ số luôn dùng `//`."
  },
  {
    "id": 17,
    "title": "Gán hoặc trả về kết quả của `list.sort()`, `list.reverse()`",
    "bad": "def lay_ba_so_nho_nhat(arr):\n    return arr.sort()[:3]",
    "real_err": "Ném lỗi `TypeError: 'NoneType' object is not subscriptable` vì `arr.sort()` trả về `None`.",
    "good": "def lay_ba_so_nho_nhat(arr):\n    return sorted(arr)[:3]",
    "note": "Các phương thức sửa tại chỗ (`sort`, `reverse`, `append`, `extend`, `insert`) đều trả về `None`. Hàm trả về danh sách mới là `sorted()`, `reversed()`."
  },
  {
    "id": 18,
    "title": "Late Binding trong Closure / Lambda",
    "bad": "funcs = [lambda x: x * i for i in range(3)]\nprint([f(2) for f in funcs])",
    "real_err": "In ra `[4, 4, 4]` thay vì `[0, 2, 4]` vì biến `i` được tra cứu lúc hàm chạy (khi `i = 2`).",
    "good": "funcs = [lambda x, i=i: x * i for i in range(3)] # Đóng băng giá trị i vào default arg\nprint([f(2) for f in funcs]) # [0, 2, 4]",
    "note": "Khi tạo lambda/hàm trong vòng lặp, luôn đóng băng biến bằng tham số mặc định: `lambda x, i=i: ...`."
  },
  {
    "id": 19,
    "title": "Xóa khóa của Dictionary khi đang duyệt `for k in d:`",
    "bad": "d = {\"a\": 1, \"b\": 0, \"c\": 3}\nfor k, v in d.items():\n    if v == 0:\n        del d[k]",
    "real_err": "Ném lỗi `RuntimeError: dictionary changed size during iteration`.",
    "good": "d = {\"a\": 1, \"b\": 0, \"c\": 3}\nfor k in [k for k, v in d.items() if v == 0]:\n    del d[k]",
    "note": "Đóng băng danh sách khóa cần xóa bằng `list(...)` trước khi thực hiện xóa."
  },
  {
    "id": 20,
    "title": "Khởi tạo biến tìm Max bằng `0` khi mảng toàn số âm",
    "bad": "def tim_max(arr):\n    max_val = 0\n    for x in arr:\n        if x > max_val: max_val = x\n    return max_val",
    "real_err": "`tim_max([-5, -2, -9])` trả về `0` (số 0 không hề tồn tại trong mảng).",
    "good": "def tim_max(arr):\n    max_val = arr[0]  # hoặc float('-inf')\n    for x in arr:\n        if x > max_val: max_val = x\n    return max_val",
    "note": "Giá trị khởi tạo của Max phải lấy từ phần tử đầu tiên `arr[0]` hoặc `-inf`."
  },
  {
    "id": 21,
    "title": "Khởi tạo biến tìm Min bằng `0` khi mảng toàn số dương",
    "bad": "def tim_min(arr):\n    min_val = 0\n    for x in arr:\n        if x < min_val: min_val = x\n    return min_val",
    "real_err": "`tim_min([10, 5, 20])` trả về `0`.",
    "good": "def tim_min(arr):\n    min_val = arr[0]  # hoặc float('inf')\n    for x in arr:\n        if x < min_val: min_val = x\n    return min_val",
    "note": "Giá trị khởi tạo của Min phải lấy từ `arr[0]` hoặc `+inf`."
  },
  {
    "id": 22,
    "title": "Khởi tạo biến tích dồn bằng `0` thay vì `1`",
    "bad": "def tich_mang(arr):\n    tich = 0\n    for x in arr: tich *= x\n    return tich",
    "real_err": "Luôn trả về `0` với mọi mảng.",
    "good": "def tich_mang(arr):\n    tich = 1\n    for x in arr: tich *= x\n    return tich",
    "note": "Phần tử trung hòa của phép cộng là 0, của phép nhân là 1."
  },
  {
    "id": 23,
    "title": "`str.split()` không tham số vs `str.split(\" \")`",
    "bad": "s = \"  Python   Master  \"\nwords = s.split(\" \") # Tách theo dấu cách đơn\nprint(len(words))",
    "real_err": "In ra `6` (chứa các chuỗi rỗng `\"\"`) thay vì `2`.",
    "good": "s = \"  Python   Master  \"\nwords = s.split()    # Tự động gộp khoảng trắng liên tiếp và strip 2 đầu\nprint(len(words))   # 2",
    "note": "Đếm từ trong văn bản luôn dùng `s.split()` không tham số."
  },
  {
    "id": 24,
    "title": "`str.capitalize()` viết thường toàn bộ phần sau của chuỗi",
    "bad": "s = \"iPhone 15 Pro\"\nprint(s.capitalize())",
    "real_err": "In ra `'Iphone 15 pro'` (chữ 'P' bị biến thành chữ thường).",
    "good": "s = \"iPhone 15 Pro\"\nprint(s[0].upper() + s[1:]) # 'IPhone 15 Pro'",
    "note": "`capitalize()` chỉ viết hoa ký tự đầu và ÉP TẤT CẢ ký tự sau về chữ thường."
  },
  {
    "id": 25,
    "title": "`str.title()` phân tách từ sai ở dấu nháy đơn",
    "bad": "name = \"they're\"\nprint(name.title())",
    "real_err": "In ra `\"They'Re\"` (chữ 'R' sau dấu nháy bị viết hoa).",
    "good": "name = \"they're\"\nprint(\" \".join(w.capitalize() for w in name.split())) # \"They're\"",
    "note": "Không dùng `.title()` cho văn bản tiếng Anh có dấu nháy sở hữu/viết tắt. Dùng `w.capitalize()` trên từng từ."
  },
  {
    "id": 26,
    "title": "`str.strip()` xóa tập hợp các ký tự ở 2 đầu",
    "bad": "filename = \"spambaconspam.txt\"\nprint(filename.strip(\"spam\"))",
    "real_err": "In ra `'baconspam.txt'` nếu ở đầu có ký tự thuộc tập `{'s', 'p', 'a', 'm'}`. Nhưng với `\"apple_pie\".strip(\"apple\")` sẽ xóa cả chữ `e` ở cuối nếu có.",
    "good": "# Xóa chính xác tiền tố:\ns = \"spambacon.txt\"\nif s.startswith(\"spam\"):\n    s = s[len(\"spam\"):]",
    "note": "Đối số của `strip()` là tập hợp các ký tự đơn lẻ, không phải chuỗi con nguyên vẹn."
  },
  {
    "id": 27,
    "title": "Kiểm tra sự tồn tại chuỗi con bằng `if s.find(sub):`",
    "bad": "s = \"Python\"\nif s.find(\"P\"):  # s.find(\"P\") trả về 0 (chỉ số đầu tiên)\n    print(\"Tìm thấy\")",
    "real_err": "Không in gì cả vì `0` được coi là `False`!",
    "good": "s = \"Python\"\nif \"P\" in s:     # hoặc if s.find(\"P\") != -1:\n    print(\"Tìm thấy\")",
    "note": "Kiểm tra tồn tại trong chuỗi dùng toán tử `in`. `find()` trả về `-1` khi không thấy và `0` khi ở đầu chuỗi."
  },
  {
    "id": 28,
    "title": "Xóa đầu danh sách bằng `list.pop(0)` gây O(N)",
    "bad": "# Thuật toán BFS dùng list thông thường\nq = [start_node]\nwhile q:\n    curr = q.pop(0) # Tốn O(N) cho mỗi lần lấy phần tử",
    "real_err": "Thuật toán chạy đúng với test nhỏ nhưng bị quá thời gian (Time Limit Exceeded) với N >= 10^4.",
    "good": "from collections import deque\nstart_node = 0\nq = deque([start_node])\nwhile q:\n    curr = q.popleft() # Tốn O(1)",
    "note": "Hàng đợi BFS bắt buộc dùng `collections.deque`. Tuyệt đối không dùng `list.pop(0)`."
  },
  {
    "id": 29,
    "title": "`list.remove(x)` xóa theo giá trị, không phải theo chỉ số",
    "bad": "arr = [10, 20, 30]\ni = 1\narr.remove(i) # Định xóa phần tử ở vị trí thứ 1 (số 20)",
    "real_err": "Ném lỗi `ValueError: list.remove(x): x not in list` vì không tìm thấy giá trị `1`.",
    "good": "arr = [10, 20, 30]\ni = 1\narr.pop(i)    # Xóa theo CHỈ SỐ: arr trở thành [10, 30]",
    "note": "`remove(x)` là xóa theo GIÁ TRỊ; `pop(i)` hoặc `del arr[i]` là xóa theo CHỈ SỐ."
  },
  {
    "id": 30,
    "title": "Truy cập phần tử tập hợp `set` bằng chỉ số `s[0]`",
    "bad": "unique_elements = set([3, 1, 2])\nfirst_item = unique_elements[0]",
    "real_err": "Ném lỗi `TypeError: 'set' object is not subscriptable`.",
    "good": "unique_elements = sorted(list(set([3, 1, 2])))\nfirst_item = unique_elements[0]",
    "note": "Tập hợp `set` không có thứ tự và không hỗ trợ đánh chỉ số. Muốn lấy phần tử phải ép sang `list`."
  },
  {
    "id": 31,
    "title": "Dùng `list` làm khóa cho `dict` hoặc phần tử của `set`",
    "bad": "visited = set()\nvisited.add([0, 1]) # Lưu tọa độ dạng list",
    "real_err": "Ném lỗi `TypeError: unhashable type: 'list'`.",
    "good": "visited = set()\nvisited.add((0, 1)) # Lưu tọa độ dạng Tuple (immutable)",
    "note": "Khóa của `dict` và phần tử của `set` phải là kiểu bất biến (hashable) như `int`, `str`, `tuple`."
  },
  {
    "id": 32,
    "title": "Cận trên của `range(start, stop)` không bao gồm `stop`",
    "bad": "# Cần tính tổng từ 1 đến N\ndef tong_1_den_n(n):\n    tong = 0\n    for i in range(1, n):\n        tong += i\n    return tong",
    "real_err": "`tong_1_den_n(5)` trả về `10` (1+2+3+4) thay vì `15`.",
    "good": "def tong_1_den_n(n):\n    return sum(range(1, n + 1))",
    "note": "`range(a, b)` luôn dừng ở b - 1. Muốn lặp đến N phải viết `range(a, n + 1)`."
  },
  {
    "id": 33,
    "title": "Duyệt ngược bằng `range(n-1, 0, -1)` bỏ sót phần tử ở chỉ số 0",
    "bad": "arr = [10, 20, 30]\nfor i in range(len(arr) - 1, 0, -1):\n    print(arr[i])",
    "real_err": "Chỉ in ra `30` và `20`, bỏ sót `10` ở vị trí `0`.",
    "good": "arr = [10, 20, 30]\nfor i in range(len(arr) - 1, -1, -1):\n    print(arr[i])",
    "note": "Khi duyệt ngược về chỉ số 0, cận dừng bắt buộc là `-1`."
  },
  {
    "id": 34,
    "title": "Chân trị của danh sách rỗng trong `all([])` và `any([])`",
    "bad": "conditions = []\nif all(conditions):\n    print(\"Thỏa mãn mọi điều kiện\")",
    "real_err": "In ra màn hình vì `all([])` trả về `True` (chân lý rỗng - vacuous truth), trong khi `any([])` trả về `False`.",
    "good": "conditions = []\nif conditions and all(conditions):\n    print(\"Thỏa mãn\")",
    "note": "`all([]) == True` và `any([]) == False`. Kiểm tra danh sách rỗng trước khi gọi `all`."
  },
  {
    "id": 35,
    "title": "Gán biến toàn cục trong hàm thiếu `global`",
    "bad": "count = 0\ndef increment():\n    count += 1 # Python coi count là biến cục bộ chưa được khởi tạo\nincrement()",
    "real_err": "Ném lỗi `UnboundLocalError: local variable 'count' referenced before assignment`.",
    "good": "count = 0\ndef increment():\n    global count\n    count += 1\nincrement()",
    "note": "Khi đọc biến toàn cục thì không cần khai báo, nhưng khi GÁN lại biến toàn cục bắt buộc phải có `global`."
  },
  {
    "id": 36,
    "title": "Sửa biến của hàm bao ngoài thiếu `nonlocal`",
    "bad": "def outer():\n    x = 10\n    def inner():\n        x += 1\n    inner()\n    return x",
    "real_err": "Ném lỗi `UnboundLocalError: local variable 'x' referenced before assignment`.",
    "good": "def outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 1\n    inner()\n    return x",
    "note": "Trong hàm lồng nhau (DFS/Backtracking), muốn sửa biến số nguyên của hàm cha phải khai báo `nonlocal`."
  },
  {
    "id": 37,
    "title": "Ép kiểu chuỗi số thực hoặc chuỗi rỗng trực tiếp sang `int()`",
    "bad": "so1 = int(\"9.5\")\nso2 = int(\"\")",
    "real_err": "Cả 2 dòng đều ném lỗi `ValueError: invalid literal for int() with base 10`.",
    "good": "so1 = int(float(\"9.5\"))       # 9\nso2 = int(\"\" or 0)            # 0",
    "note": "Chuỗi có dấu chấm thập phân phải qua `float()` trước khi sang `int()`."
  },
  {
    "id": 38,
    "title": "Chuyển chuỗi `\"False\"` sang kiểu boolean: `bool(\"False\")`",
    "bad": "raw_input = \"False\"\nis_active = bool(raw_input)",
    "real_err": "`is_active` nhận giá trị `True` vì chuỗi có độ dài 5 ký tự.",
    "good": "raw_input = \"False\"\nis_active = (raw_input.strip().lower() == \"true\")\nprint(is_active)  # False",
    "note": "`bool(s)` chỉ trả về `False` khi `s` là chuỗi rỗng `\"\"`. Mọi chuỗi khác đều là `True`."
  },
  {
    "id": 39,
    "title": "Sắp xếp chuỗi số theo thứ tự từ điển thay vì số học",
    "bad": "str_nums = [\"10\", \"2\", \"1\", \"20\"]\nstr_nums.sort()\nprint(str_nums)",
    "real_err": "In ra `['1', '10', '2', '20']` (thứ tự từ điển: '10' đứng trước '2').",
    "good": "str_nums = [\"10\", \"2\", \"1\", \"20\"]\nstr_nums.sort(key=int)\nprint(str_nums) # ['1', '2', '10', '20']",
    "note": "Sắp xếp danh sách chuỗi đại diện cho số bắt buộc phải truyền `key=int` hoặc `key=float`."
  },
  {
    "id": 40,
    "title": "`heapq` là Min-Heap mặc định, quên đổi dấu khi cần Max-Heap",
    "bad": "import heapq\nh = []\nfor x in [3, 1, 4]: heapq.heappush(h, x)\ntop_max = heapq.heappop(h)",
    "real_err": "`top_max` là `1` (giá trị nhỏ nhất) thay vì `4`.",
    "good": "import heapq\nh = []\nfor x in [3, 1, 4]: heapq.heappush(h, -x)\ntop_max = -heapq.heappop(h) # 4",
    "note": "`heapq` trong Python LUÔN LÀ MIN-HEAP. Muốn lấy giá trị lớn nhất phải đẩy số âm `-x` và lấy ra `-pop()`."
  },
  {
    "id": 41,
    "title": "Lỗi so sánh phần tử thứ hai khi lưu Tuple vào `heapq`",
    "bad": "import heapq\n# Tuple lưu (khoảng cách, đối tượng node)\nh = []\nheapq.heappush(h, (1, {\"id\": \"A\"}))\nheapq.heappush(h, (1, {\"id\": \"B\"})) # Hai khoảng cách bằng 1",
    "real_err": "Ném lỗi `TypeError: '<' not supported between instances of 'dict' and 'dict'`.",
    "good": "import heapq\nh = []\nidx = 0\nheapq.heappush(h, (1, idx, {\"id\": \"A\"})); idx += 1\nheapq.heappush(h, (1, idx, {\"id\": \"B\"})); idx += 1",
    "note": "Chèn thêm chỉ số tự tăng `idx` vào giữa Tuple `(priority, idx, data)` để tránh Python so sánh trường dữ liệu không so sánh được."
  },
  {
    "id": 42,
    "title": "`collections.defaultdict` tự động thêm khóa khi chỉ đọc",
    "bad": "from collections import defaultdict\nd = defaultdict(int)\nif d[\"missing_key\"] == 0:\n    pass\nprint(len(d))",
    "real_err": "In ra `1` vì việc truy cập `d[\"missing_key\"]` đã tự động chèn khóa đó vào từ điển với giá trị 0.",
    "good": "from collections import defaultdict\nd = defaultdict(int)\nif \"missing_key\" in d:\n    pass\nprint(len(d))  # 0",
    "note": "Kiểm tra khóa tồn tại trong `defaultdict` luôn dùng toán tử `in`, không truy cập trực tiếp `d[k]`."
  },
  {
    "id": 43,
    "title": "Nhân bản danh sách chứa đối tượng `[{}] * n` hoặc `[[]] * n`",
    "bad": "ds = [{}] * 3\nds[0][\"ten\"] = \"An\"",
    "real_err": "Cả 3 dict trong danh sách đều có `{\"ten\": \"An\"}`.",
    "good": "ds = [{} for _ in range(3)]\nds[0][\"ten\"] = \"An\"",
    "note": "Mọi thao tác tạo mảng chứa đối tượng mutable (list, dict, set) đều phải dùng List Comprehension."
  },
  {
    "id": 44,
    "title": "Nhân chuỗi hoặc danh sách với số âm ra kết quả rỗng",
    "bad": "so_lan = -2\nchuoi = \"ABC\" * so_lan\nmang = [1, 2] * so_lan",
    "real_err": "`chuoi` thành `\"\"` và `mang` thành `[]` mà không hề báo lỗi ngoại lệ.",
    "good": "so_lan = -2\nso_lan = max(0, so_lan)\nchuoi = \"ABC\" * so_lan\nprint(repr(chuoi))  # \"\"",
    "note": "Phép nhân sequence với số <= 0 luôn trả về đối tượng rỗng."
  },
  {
    "id": 45,
    "title": "Cơ chế Round Half to Even của `round()`",
    "bad": "print(round(2.5))\nprint(round(3.5))",
    "real_err": "`round(2.5)` cho kết quả `2`, trong khi `round(3.5)` cho kết quả `4`. Không phải lúc nào đuôi `.5` cũng được làm tròn lên.",
    "good": "import math\ndef round_up_half(x):\n    # Làm tròn lên truyền thống\n    return math.floor(x + 0.5)",
    "note": "`round()` trong Python làm tròn về số chẵn gần nhất."
  },
  {
    "id": 46,
    "title": "`math.floor()` vs `int()` khi xử lý số thực âm",
    "bad": "import math\nprint(int(-3.7))\nprint(math.floor(-3.7))",
    "real_err": "`int(-3.7)` trả về `-3` (cắt cụt phần thập phân), còn `math.floor(-3.7)` trả về `-4` (làm tròn xuống số nguyên nhỏ hơn).",
    "good": "# Chọn đúng hàm theo yêu cầu đề bài:\n# Đề ghi \"làm tròn xuống\" -> dùng math.floor()\n# Đề ghi \"cắt bỏ phần thập phân\" -> dùng int()",
    "note": "Với số dương thì `int()` và `floor()` giống nhau, nhưng với số âm thì khác nhau hoàn toàn."
  },
  {
    "id": 47,
    "title": "`itertools.groupby` trên danh sách chưa được sắp xếp",
    "bad": "import itertools\ndata = [1, 2, 1, 1, 2]\ngroups = {k: len(list(g)) for k, g in itertools.groupby(data)}",
    "real_err": "`groups` chỉ gom cụm liên tiếp cuối cùng và làm mất thông tin gom nhóm toàn cục.",
    "good": "import itertools\ndata = sorted([1, 2, 1, 1, 2])\ngroups = {k: len(list(g)) for k, g in itertools.groupby(data)}",
    "note": "`itertools.groupby` BẮT BUỘC danh sách đầu vào phải được sắp xếp trước."
  },
  {
    "id": 48,
    "title": "Vượt quá giới hạn độ sâu đệ quy mặc định",
    "bad": "def dfs_sau(node, depth):\n    if depth == 1500: return\n    dfs_sau(node + 1, depth + 1)\ndfs_sau(0, 0)",
    "real_err": "Ném lỗi `RecursionError: maximum recursion depth exceeded in comparison` khi độ sâu đạt ~1000.",
    "good": "import sys\nsys.setrecursionlimit(200000)\n# Hoặc chuyển thuật toán sang dùng Stack khử đệ quy",
    "note": "Khi giải bài toán cây/đồ thị lớn bằng đệ quy, luôn đặt `sys.setrecursionlimit(200000)` ở đầu file."
  },
  {
    "id": 49,
    "title": "Truyền List vào hàm làm thay đổi dữ liệu của hàm gọi",
    "bad": "def chuan_hoa(scores):\n    scores.sort() # Sắp xếp trực tiếp trên mảng truyền vào\n    return scores[-1]",
    "real_err": "Mảng `scores` bên ngoài của hàm chấm điểm bị thay đổi thứ tự, khiến các bước kiểm tra sau bị sai lệch.",
    "good": "def chuan_hoa(scores):\n    sorted_scores = sorted(scores) # Tạo bản sao mới\n    return sorted_scores[-1]",
    "note": "Trong Python, List được truyền theo tham chiếu (pass-by-assignment). Không thay đổi mảng đầu vào trừ khi đề bài yêu cầu cụ thể."
  },
  {
    "id": 50,
    "title": "Gọi `list.count()` trong vòng lặp đẩy độ phức tạp lên O(N^2)",
    "bad": "def tim_phan_tu_xuat_hien_mot_lan(arr):\n    for x in arr:\n        if arr.count(x) == 1: # arr.count(x) tốn O(N) cho mỗi phần tử\n            return x",
    "real_err": "Chạy đúng với mảng 10 phần tử, nhưng với N = 10^5 thuật toán tốn 10^{10} phép tính -> TLE chắc chắn.",
    "good": "from collections import Counter\n\ndef tim_phan_tu_xuat_hien_mot_lan(arr):\n    counts = Counter(arr) # Đếm toàn bộ trong O(N)\n    for x in arr:\n        if counts[x] == 1:\n            return x",
    "note": "Tuyệt đối không gọi `arr.count(x)` hay `x in list` bên trong vòng lặp `for`. Hãy tiền xử lý bằng `Counter` hoặc `set` để đạt O(1)."
  }
];

  let currentGroup = "1";
  let currentKataId = "1.01";
  let currentTrapIdx = 0;
  let timerInterval = null;
  let timeRemaining = 50 * 60; // 50 mins

  function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  // DOM Elements
  const tabBtns = document.querySelectorAll('.prac-tab-btn');
  const panes = document.querySelectorAll('.prac-pane');

  function activateTab(tabId) {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.target === tabId));
    panes.forEach(p => p.classList.toggle('active', p.id === tabId));

    if (tabId === 'pane-algo') {
      setTimeout(() => {
        if (window.initTwoPointersVisualizer) window.initTwoPointersVisualizer('lab-twoptr-box');
        if (window.initSlidingWindowVisualizer) window.initSlidingWindowVisualizer('lab-sliding-box');
        if (window.initSpiralMatrixVisualizer) window.initSpiralMatrixVisualizer('lab-spiral-box');
        if (window.initStackVisualizer) window.initStackVisualizer('lab-stack-box');
      }, 40);
    }
  }

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.dataset.target);
    });
  });

  // ??????????????????????????????????????????????????????????????????????????
  // 1. KATA ARENA (90 EXERCISES)
  // ??????????????????????????????????????????????????????????????????????????
  const groupSelect = document.getElementById('kata-group-select');
  const kataListEl = document.getElementById('kata-list');
  const kataTitleEl = document.getElementById('kata-title');
  const kataDocEl = document.getElementById('kata-doc');
  const kataEditor = document.getElementById('kata-code-editor');
  const kataSolBox = document.getElementById('kata-solution-box');
  const kataSolCode = document.getElementById('kata-solution-code');
  const kataStatusBadge = document.getElementById('kata-status-badge');
  const resBox = document.getElementById('kata-test-results');

  function renderKataList() {
    if (!kataListEl) return;
    const groupItems = KATA_DATA[currentGroup]?.items || [];
    kataListEl.innerHTML = groupItems.map((k) => {
      const isPassed = localStorage.getItem('pm:kata:' + k.id) === '1';
      const isCurrent = (k.id === currentKataId);
      return `
        <div class="ch-item ${isCurrent ? 'active' : ''} ${isPassed ? 'completed' : ''}" data-id="${k.id}" style="padding:0.55rem 0.8rem; border-radius:var(--r-sm); cursor:pointer; display:flex; justify-content:space-between; align-items:center; background:${isCurrent ? 'var(--surface-2)' : 'transparent'}; border:1px solid ${isCurrent ? 'var(--py-blue)' : 'var(--line-soft)'}; margin-bottom:0.35rem; transition:0.12s;">
          <div style="display:grid; gap:0.15rem;">
            <span style="font-weight:700; font-size:0.86rem; color:${isCurrent ? 'var(--py-blue)' : 'var(--text)'};">${k.id} ? ${k.fn}</span>
            <span class="tiny" style="color:var(--text-3); max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${k.title}</span>
          </div>
          <span style="font-size:0.8rem; font-weight:800; color:${isPassed ? 'var(--green)' : 'var(--text-3)'};">
            ${isPassed ? '? ??T' : '?'}
          </span>
        </div>
      `;
    }).join('');

    kataListEl.querySelectorAll('.ch-item').forEach(el => {
      el.addEventListener('click', () => {
        loadKata(el.dataset.id);
      });
    });
  }

  function loadKata(kataId) {
    currentKataId = kataId;
    const groupItems = KATA_DATA[currentGroup]?.items || [];
    const kata = groupItems.find(k => k.id === kataId);
    if (!kata) return;

    if (kataTitleEl) kataTitleEl.textContent = `${kata.title}`;
    if (kataDocEl) kataDocEl.innerHTML = `<pre style="font-family:var(--sans); font-size:0.92rem; color:var(--text-2); white-space:pre-wrap; margin:0.4rem 0;">${escapeHtml(kata.doc)}</pre>`;
    
    const savedCode = localStorage.getItem('pm:code:' + kata.id);
    if (kataEditor) kataEditor.value = (savedCode !== null ? savedCode : kata.starter);
    if (kataSolCode) kataSolCode.textContent = kata.solution;
    if (kataSolBox) kataSolBox.style.display = 'none';

    const isPassed = localStorage.getItem('pm:kata:' + kata.id) === '1';
    if (kataStatusBadge) {
      kataStatusBadge.className = 'chip ' + (isPassed ? 'green' : 'py-blue');
      kataStatusBadge.textContent = isPassed ? 'Tr?ng th?i: ?? ??T ?' : 'Tr?ng th?i: ?ANG L?M';
    }

    renderKataList();
    if (resBox) {
      resBox.innerHTML = '<span class="tiny" style="color:var(--text-3)">Nh?n "Ch?y ki?m tra ?" ?? ch?m ?i?m b?i l?m c?a b?n qua b? ki?m th? t? ??ng.</span>';
    }
  }

  if (groupSelect) {
    groupSelect.addEventListener('change', (e) => {
      currentGroup = e.target.value;
      const first = KATA_DATA[currentGroup]?.items[0];
      if (first) currentKataId = first.id;
      renderKataList();
      loadKata(currentKataId);
    });
  }

  // Reveal Solution Button
  document.getElementById('btn-reveal-solution')?.addEventListener('click', () => {
    if (kataSolBox) {
      const isShown = kataSolBox.style.display === 'block';
      kataSolBox.style.display = isShown ? 'none' : 'block';
    }
  });

  // Reset starter code
  document.getElementById('btn-reset-starter')?.addEventListener('click', () => {
    const groupItems = KATA_DATA[currentGroup]?.items || [];
    const kata = groupItems.find(k => k.id === currentKataId);
    if (kata && kataEditor) {
      kataEditor.value = kata.starter;
      localStorage.removeItem('pm:code:' + kata.id);
    }
  });

  // Test Runner logic
  async function runKataTests(group, kataId, userCode) {
    if (userCode.includes('___1___') || userCode.includes('___2___') || userCode.includes('___3___')) {
      return {
        success: false,
        error: 'Ch?a ho?n th?nh ?i?n ch? tr?ng! B?n v?n c?n ?? l?i bi?n ___1___ ho?c ___2___ ch?a thay th? b?ng m? code ch?nh x?c.'
      };
    }

    // 1. Th? g?i CPython Backend Server (/api/test_kata)
    if (window.location.protocol.startsWith('http')) {
      try {
        const resp = await fetch('/api/test_kata', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ group: parseInt(group), kata_id: kataId, code: userCode })
        });
        if (resp.ok) {
          const data = await resp.json();
          data.engine = 'CPython 3 (launch_hub server)';
          return data;
        }
      } catch (e) {}
    }

    // 2. Fallback Skulpt offline
    if (typeof window.Sk === 'undefined') {
      return {
        success: false,
        error: 'Ch?a t?i ???c th? vi?n Skulpt v? ch?a b?t m?y ch? Python! H?y kh?i ch?y: `py launch_hub.py`'
      };
    }

    if (!window.__skulpt_ready) {
      window.Sk.configure({
        read: (x) => {
          if (!window.Sk.builtinFiles || !window.Sk.builtinFiles.files[x]) throw new Error('File not found: ' + x);
          return window.Sk.builtinFiles.files[x];
        },
        __future__: window.Sk.python3
      });
      window.__skulpt_ready = true;
    }

    const spec = window.KATA_TEST_SPECS ? window.KATA_TEST_SPECS[kataId] : null;
    if (!spec) {
      return {
        success: false,
        error: `Kh?ng t?m th?y c?u h?nh test cho b?i ${kataId}!`
      };
    }

    const t0 = performance.now();
    let runnerPython = '';

    if (!spec.is_special) {
      const casesTupleStr = "[" + spec.cases.map(c => "(" + c[0] + ", " + c[1] + ")").join(", ") + "]";
      runnerPython = `
${userCode}

__test_cases = ${casesTupleStr}
for __idx, (__args, __exp) in enumerate(__test_cases):
    try:
        __c_args = [list(x) if isinstance(x, list) else (dict(x) if isinstance(x, dict) else (set(x) if isinstance(x, set) else x)) for x in __args]
        __got = ${spec.fn}(*__c_args)
        __ok = 1 if (__got == __exp) else 0
        print("__PM_TEST__:" + str(__idx+1) + ":" + ("PASS" if __ok else "FAIL") + ":" + repr(__args) + ":" + repr(__exp) + ":" + repr(__got))
    except Exception as __err:
        print("__PM_TEST__:" + str(__idx+1) + ":ERROR:" + repr(__args) + ":" + repr(__exp) + ":" + str(__err))
`;
    } else {
      runnerPython = `
${userCode}

${spec.src}

class ModuleProxy:
    pass
m = ModuleProxy()
for k, v in list(globals().items()):
    setattr(m, k, v)
m.__file__ = "bai.py"

try:
    ${spec.fn}(m)
    print("__PM_SPECIAL__:PASS:V??t qua to?n b? k?ch b?n ki?m th? ??c bi?t")
except AssertionError as e:
    print("__PM_SPECIAL__:FAIL:" + (str(e) or "AssertionError: K?t qu? th?c thi kh?ng ??t k? v?ng."))
except Exception as e:
    print("__PM_SPECIAL__:ERROR:" + str(e))
`;
    }

    let outputBuffer = '';
    window.Sk.configure({
      output: (t) => { outputBuffer += t; },
      read: (x) => window.Sk.builtinFiles.files[x],
      __future__: window.Sk.python3
    });

    try {
      await window.Sk.misceval.asyncToPromise(() => {
        return window.Sk.importMainWithBody('<stdin>', false, runnerPython, true);
      });
      const t1 = performance.now();

      const results = [];
      let passedCount = 0;
      let totalCount = 0;

      const lines = outputBuffer.split('\n');
      for (const line of lines) {
        if (line.startsWith('__PM_TEST__:')) {
          totalCount++;
          const parts = line.slice(12).split(':');
          const testNum = parseInt(parts[0]);
          const status = parts[1];
          const args = parts[2] || '';
          const expected = parts[3] || '';
          const got = parts.slice(4).join(':');

          const isPass = (status === 'PASS');
          if (isPass) passedCount++;

          results.push({
            test_num: testNum,
            args: args,
            expected: expected,
            got: got,
            passed: isPass,
            error: (status === 'ERROR' ? got : null)
          });
        } else if (line.startsWith('__PM_SPECIAL__:')) {
          totalCount = 1;
          const parts = line.slice(15).split(':');
          const status = parts[0];
          const desc = parts.slice(1).join(':');
          const isPass = (status === 'PASS');
          if (isPass) passedCount = 1;

          results.push({
            test_num: 1,
            args: 'K?ch b?n ki?m th? ??c bi?t (OOP / Tr?ng th?i)',
            expected: 'V??t qua to?n b? assertion',
            got: desc,
            passed: isPass,
            error: isPass ? null : desc
          });
        }
      }

      const allPassed = (totalCount > 0 && passedCount === totalCount);
      return {
        success: true,
        all_passed: allPassed,
        passed_count: passedCount,
        total_count: totalCount,
        results: results,
        time_ms: Math.round(t1 - t0),
        engine: 'Skulpt Python 3 (Offline Engine)'
      };

    } catch (err) {
      let errMsg = err.toString();
      if (err.traceback && err.traceback.length) {
        const tb = err.traceback.map(item => `  File "${item.filename}", line ${item.lineno}`).join('\n');
        errMsg = `${tb}\n${errMsg}`;
      }
      return {
        success: false,
        all_passed: false,
        error: errMsg,
        engine: 'Skulpt Python 3 (Offline Engine)'
      };
    }
  }

  // Handle Run Tests Button
  document.getElementById('btn-run-tests')?.addEventListener('click', async () => {
    const groupItems = KATA_DATA[currentGroup]?.items || [];
    const kata = groupItems.find(k => k.id === currentKataId);
    if (!kata || !kataEditor || !resBox) return;

    const userCode = kataEditor.value;
    localStorage.setItem('pm:code:' + kata.id, userCode);

    const btn = document.getElementById('btn-run-tests');
    const origText = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = '?ang ch?m ?';
    }

    resBox.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.5rem; color:var(--cyan); padding:0.5rem 0;">
        <span>? ?ang ch?y ki?m th? qua b? test cases th?c t?...</span>
      </div>
    `;

    try {
      const res = await runKataTests(currentGroup, currentKataId, userCode);

      if (!res.success) {
        resBox.innerHTML = `
          <div class="diff-bad" style="padding:0.8rem">
            <h4 class="rose">? Ki?m th? th?t b?i / L?i c? ph?p:</h4>
            <pre style="margin:0.5rem 0 0 0; font-family:var(--mono); color:#fca5a5; font-size:0.88rem; white-space:pre-wrap;">${escapeHtml(res.error || res.message || 'L?i kh?ng x?c ??nh')}</pre>
          </div>
        `;
        return;
      }

      const badge = `<span class="chip tiny ${res.all_passed ? 'green' : 'rose'}" style="margin-bottom:0.6rem; display:inline-block;">? ${res.engine} ? ${res.time_ms || 0}ms</span>`;

      if (res.all_passed) {
        localStorage.setItem('pm:kata:' + kata.id, '1');
        if (kataStatusBadge) {
          kataStatusBadge.className = 'chip green';
          kataStatusBadge.textContent = 'Tr?ng th?i: ?? ??T ?';
        }
        renderKataList();

        let tableHtml = '';
        if (res.results && res.results.length) {
          tableHtml = `
            <div style="margin-top:0.8rem; overflow-x:auto;">
              <table class="matrix-table" style="font-size:0.82rem;">
                <thead>
                  <tr><th>#</th><th>Tham s? (Args)</th><th>K? v?ng</th><th>Nh?n ???c</th><th>K?t qu?</th></tr>
                </thead>
                <tbody>
                  ${res.results.map(r => `
                    <tr>
                      <td><b>${r.test_num}</b></td>
                      <td><code>${escapeHtml(r.args)}</code></td>
                      <td><code>${escapeHtml(r.expected)}</code></td>
                      <td><code style="color:var(--green)">${escapeHtml(r.got)}</code></td>
                      <td><span class="chip tiny green">PASS ?</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }

        resBox.innerHTML = `
          <div class="diff-good" style="padding:0.8rem">
            ${badge}
            <h4 class="green">?? CH?C M?NG! B?I L?M ?? ??T TO?N B? TEST CASES (${res.passed_count}/${res.total_count} PASS)!</h4>
            <p class="tiny" style="margin:0.3rem 0 0 0">M? ngu?n c?a b?n ?? v??t qua t?t c? c?c b? ki?m th? bi?n, d? li?u r?ng v? gi?i h?n th?i gian.</p>
            ${tableHtml}
          </div>
        `;
      } else {
        let tableHtml = '';
        if (res.results && res.results.length) {
          tableHtml = `
            <div style="margin-top:0.8rem; overflow-x:auto;">
              <table class="matrix-table" style="font-size:0.82rem;">
                <thead>
                  <tr><th>#</th><th>Tham s? (Args)</th><th>K? v?ng</th><th>Nh?n ???c</th><th>K?t qu?</th></tr>
                </thead>
                <tbody>
                  ${res.results.map(r => `
                    <tr style="${r.passed ? '' : 'background:rgba(244,63,94,0.1)'}">
                      <td><b>${r.test_num}</b></td>
                      <td><code>${escapeHtml(r.args)}</code></td>
                      <td><code>${escapeHtml(r.expected)}</code></td>
                      <td><code style="color:${r.passed ? 'var(--green)' : 'var(--rose)'}">${escapeHtml(r.error || r.got)}</code></td>
                      <td><span class="chip tiny ${r.passed ? 'green' : 'rose'}">${r.passed ? 'PASS ?' : 'FAIL ?'}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }

        resBox.innerHTML = `
          <div class="diff-bad" style="padding:0.8rem">
            ${badge}
            <h4 class="rose">? CH?A ??T CHU?N (${res.passed_count}/${res.total_count} Test Cases Th?nh C?ng):</h4>
            <p class="tiny" style="margin:0.3rem 0 0 0">M?t s? test case kh?ng kh?p v?i k?t qu? k? v?ng. H?y xem chi ti?t b?ng b?n d??i ?? ??i chi?u:</p>
            ${tableHtml}
          </div>
        `;
      }
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = origText;
      }
    }
  });

  // ??????????????????????????????????????????????????????????????????????????
  // 2. 50 TRAPS SPOTTER CHALLENGE
  // ??????????????????????????????????????????????????????????????????????????
  const trapSelect = document.getElementById('trap-select');
  const trapTitleEl = document.getElementById('trap-title');
  const trapBadCodeEl = document.getElementById('trap-bad-code');
  const trapGoodCodeEl = document.getElementById('trap-good-code');
  const trapErrEl = document.getElementById('trap-err-desc');
  const trapNoteEl = document.getElementById('trap-note-desc');
  const trapQuizBox = document.getElementById('trap-quiz-box');

  function renderTrapSelect() {
    if (!trapSelect) return;
    trapSelect.innerHTML = TRAP_DATA.map((t, idx) => `
      <option value="${idx}">B?y ${String(t.id).padStart(2, '0')}: ${t.title}</option>
    `).join('');

    trapSelect.addEventListener('change', (e) => {
      loadTrap(parseInt(e.target.value));
    });
  }

  function loadTrap(idx) {
    currentTrapIdx = idx;
    const trap = TRAP_DATA[idx];
    if (!trap) return;

    if (trapSelect) trapSelect.value = idx;
    if (trapTitleEl) trapTitleEl.textContent = `B?y ${String(trap.id).padStart(2, '0')}: ${trap.title}`;
    if (trapBadCodeEl) trapBadCodeEl.textContent = trap.bad;
    if (trapGoodCodeEl) trapGoodCodeEl.textContent = trap.good;
    if (trapErrEl) trapErrEl.textContent = trap.real_err;
    if (trapNoteEl) trapNoteEl.textContent = trap.note;

    if (trapQuizBox) trapQuizBox.style.display = 'none';
  }

  document.getElementById('btn-trap-prev')?.addEventListener('click', () => {
    if (currentTrapIdx > 0) loadTrap(currentTrapIdx - 1);
  });

  document.getElementById('btn-trap-next')?.addEventListener('click', () => {
    if (currentTrapIdx < TRAP_DATA.length - 1) loadTrap(currentTrapIdx + 1);
  });

  document.getElementById('btn-trap-spot')?.addEventListener('click', () => {
    if (trapQuizBox) {
      trapQuizBox.style.display = trapQuizBox.style.display === 'block' ? 'none' : 'block';
    }
  });

  // ??????????????????????????????????????????????????????????????????????????
  // 3. MOCK EXAM SIMULATOR (COUNTDOWN & SCORER)
  // ??????????????????????????????????????????????????????????????????????????
  const timerDisplay = document.getElementById('exam-timer-display');
  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  const btnTimerReset = document.getElementById('btn-timer-reset');
  const btnRunMockExam = document.getElementById('btn-run-mock-exam');
  const mockExamSelect = document.getElementById('mock-exam-select');
  const mockExamResult = document.getElementById('mock-exam-result');

  function updateTimer() {
    if (!timerDisplay) return;
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timeRemaining <= 300) {
      timerDisplay.style.color = 'var(--rose)';
    } else {
      timerDisplay.style.color = 'var(--cyan)';
    }
  }

  if (btnTimerToggle) {
    btnTimerToggle.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        btnTimerToggle.textContent = 'Ti?p t?c ?';
      } else {
        timerInterval = setInterval(() => {
          if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert('H?T GI? L?M B?I! Vui l?ng n?p b?i ?? xem ?i?m thi.');
          }
        }, 1000);
        btnTimerToggle.textContent = 'T?m d?ng ?';
      }
    });
  }

  if (btnTimerReset) {
    btnTimerReset.addEventListener('click', () => {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null;
      timeRemaining = 50 * 60;
      updateTimer();
      if (btnTimerToggle) btnTimerToggle.textContent = 'B?t ??u l?m b?i ?';
    });
  }

  if (btnRunMockExam) {
    btnRunMockExam.addEventListener('click', async () => {
      const examName = mockExamSelect ? mockExamSelect.value : 'de_mau_2708';
      if (!mockExamResult) return;

      btnRunMockExam.disabled = true;
      const origText = btnRunMockExam.textContent;
      btnRunMockExam.textContent = '?ang ch?m thi ?';
      mockExamResult.innerHTML = '<span style="color:var(--cyan)">?ang ch?y b? ch?m thi ?? m? ph?ng qua CPython...</span>';

      if (window.location.protocol.startsWith('http')) {
        try {
          const resp = await fetch('/api/run_exam', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ exam: examName })
          });
          const res = await resp.json();
          if (res.success) {
            mockExamResult.innerHTML = `
              <div class="diff-good" style="padding:0.8rem">
                <div class="row" style="justify-content:space-between; margin-bottom:0.5rem">
                  <span class="chip green font-bold">K?T QU? ?? THI: 1000/1000 ?I?M (PASS ?)</span>
                  <span class="chip tiny py-blue">CPython Engine</span>
                </div>
                <pre style="margin:0; font-family:var(--mono); font-size:0.82rem; color:#e0f2fe; white-space:pre-wrap; max-height:280px; overflow-y:auto;">${escapeHtml(res.output)}</pre>
              </div>
            `;
            btnRunMockExam.disabled = false;
            btnRunMockExam.textContent = origText;
            return;
          }
        } catch (e) {}
      }

      mockExamResult.innerHTML = `
        <div class="card" style="padding:0.8rem; border-color:var(--py-gold)">
          <div style="color:var(--py-gold); font-weight:700; margin-bottom:0.4rem">💡 CHẠY QUA TERMINAL (Khuyên dùng khi không bật server launch_hub)</div>
          <p class="tiny">Để chấm điểm trực tiếp đề này bằng CPython chuẩn xác 100%, mở PowerShell và chạy:</p>
          <div class="code-head" style="margin-top:0.4rem"><div class="dots"><i></i><i></i><i></i></div><span>Terminal</span></div>
          <pre class="code" data-lang="bash">cd D:\02_Learning_Knowledge\Python_Master\python-master-bang-b
py de_mo_phong/${examName}.py</pre>
        </div>
      `;
      btnRunMockExam.disabled = false;
      btnRunMockExam.textContent = origText;
    });
  }

  // Initialize all
  renderKataList();
  loadKata(currentKataId);
  renderTrapSelect();
  loadTrap(0);
  updateTimer();

})();
