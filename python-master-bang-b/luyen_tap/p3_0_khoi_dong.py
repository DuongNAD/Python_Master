# -*- coding: utf-8 -*-
"""
BƯỚC ĐỆM DESIGN: 6 BÀI TẬP KHỞI ĐỘNG TƯ DUY TỰ CODE (TỪ DỄ ĐẾN VỪA)
================================================================================
Mục tiêu: Xây dựng nền tảng tư duy để bạn tự tin giải quyết Nhóm 3 (Design).
Mỗi bài tập dưới đây giải quyết đúng 1 kỹ năng cốt lõi:
  - Bài 01: Mảng & lọc điều kiện biên (Chuẩn bị cho bài 3.01)
  - Bài 02: Mô phỏng giao dịch thực tế (Chính là bài 3.04)
  - Bài 03: Dictionary đếm số lượng / tần suất (Nền tảng của Counter)
  - Bài 04: Dictionary gom nhóm danh sách (Mở khóa bài 3.02 Gom nhóm Anagram)
  - Bài 05: Tìm phần tử xuất hiện nhiều nhất (Mở khóa bài 3.05 Top K)
  - Bài 06: Kiểm tra 2 khoảng giao nhau (Mở khóa bài 3.03 Giao khoảng)

CÁCH CHẠY KIỂM TRA:
  Mở Terminal và gõ:
      python3 python-master-bang-b/luyen_tap/p3_0_khoi_dong.py
  (Hoặc bấm nút Run Python File trên IDE)
================================================================================
"""


# ---------------------------------------------------------------- Bai 3.00.1
def tinh_diem_giam_khao(diem):
    """
    BÀI 1: TÍNH ĐIỂM THI ĐẤU (Bỏ Min và Max)
    
    Đề bài:
      Cho danh sách điểm số thực của các giám khảo chấm thi (`diem`).
      - Nếu số lượng giám khảo ít hơn 3 (len(diem) < 3), trả về 0.0.
      - Nếu có từ 3 giám khảo trở lên:
          1. Bỏ đi 1 điểm thấp nhất (min) và 1 điểm cao nhất (max).
          2. Tính trung bình cộng của các điểm còn lại.
          3. Làm tròn kết quả 2 chữ số thập phân bằng hàm `round(..., 2)`.

    Ví dụ:
      diem = [8.0, 9.0, 7.5, 9.5, 8.5]
      -> Bỏ 7.5 (min) và 9.5 (max), còn lại: [8.0, 9.0, 8.5]
      -> Trung bình cộng = (8.0 + 9.0 + 8.5) / 3 = 8.5 -> Trả về 8.5
      
      diem = [10.0, 9.0] -> Trả về 0.0 (vì ít hơn 3 giám khảo)

    Gợi ý:
      - Kiểm tra `if len(diem) < 3: return 0.0`
      - Sắp xếp mảng: `s = sorted(diem)`. Khi đó `s[0]` là min, `s[-1]` là max.
      - Lấy các phần tử ở giữa bằng cắt lát: `con_lai = s[1:-1]`
      - Tính trung bình: `round(sum(con_lai) / len(con_lai), 2)`
    """
    if len(diem) < 3:
      return 0
    
    max_diem = max(diem)
    min_diem = min(diem)
    diem.remove(max_diem)
    diem.remove(min_diem)
    
    return round(sum(diem)/len(diem),2)


# ---------------------------------------------------------------- Bai 3.00.2
def kiem_tra_tai_khoan(so_du_ban_dau, giao_dich):
    """
    BÀI 2: MÔ PHỎNG TÀI KHOẢN NGÂN HÀNG (Giống hệt Bài 3.04)

    Đề bài:
      - `so_du_ban_dau`: Số nguyên dương (tiền có sẵn trong tài khoản lúc đầu).
      - `giao_dich`: List các số nguyên:
          + Số dương (> 0): Nạp tiền vào tài khoản.
          + Số âm (< 0): Rút tiền ra khỏi tài khoản.
      
      Quy tắc:
        Thực hiện lần lượt từng giao dịch từ đầu đến cuối danh sách.
        Nếu một giao dịch rút tiền làm cho số dư bị ÂM (< 0), thì:
          - BỎ QUA giao dịch đó (không trừ tiền).
          - Tăng số lần giao dịch bị bỏ qua lên 1.
      
      Trả về:
        Một tuple gồm: (so_du_cuoi_cung, so_giao_dich_bi_bo_qua)

    Ví dụ:
      kiem_tra_tai_khoan(100, [50, -200, -30])
      - Ban đầu: số dư = 100, bỏ qua = 0
      - Giao dịch 1 (+50): 100 + 50 = 150 (hợp lệ)
      - Giao dịch 2 (-200): Nếu trừ thì còn 150 - 200 = -50 (âm!) 
        -> BỎ QUA, số dư vẫn là 150, số lần bỏ qua = 1
      - Giao dịch 3 (-30): 150 - 30 = 120 (hợp lệ)
      -> Kết quả trả về: (120, 1)

    Gợi ý:
      - Khởi tạo `so_du = so_du_ban_dau` và `so_bo_qua = 0`
      - Duyệt `for gd in giao_dich:`
      - Kiểm tra: `if so_du + gd < 0:` thì tăng `so_bo_qua += 1`
                  ngược lại `else:` cập nhật `so_du += gd`
      - Cuối cùng `return (so_du, so_bo_qua)`
    """
    count = 0

    for i in giao_dich:
      if so_du_ban_dau + i < 0:
        count = count + 1
        continue
      else:
        so_du_ban_dau = so_du_ban_dau + i
    
    return (so_du_ban_dau,count)


# ---------------------------------------------------------------- Bai 3.00.3
def dem_so_lan_xuat_hien(danh_sach):
    """
    BÀI 3: ĐẾM SỐ LẦN XUẤT HIỆN BẰNG DICTIONARY (Cốt lõi của Dict)

    Đề bài:
      Cho một danh sách các chuỗi (hoặc số) `danh_sach`.
      Hãy đếm xem mỗi phần tử xuất hiện bao nhiêu lần và trả về một `dict`.
      Nếu `danh_sach` rỗng -> trả về `{}`.

    Ví dụ:
      danh_sach = ["cam", "tao", "cam", "le", "cam", "tao"]
      -> Trả về: {"cam": 3, "tao": 2, "le": 1}

    Gợi ý mẫu code kinh điển cần thuộc lòng:
      dem = {}
      for x in danh_sach:
          if x not in dem:
              dem[x] = 1
          else:
              dem[x] += 1
      return dem
    """
    if len(danh_sach) == 0:
      return {}
    
    set_danh_sach = set(danh_sach)
    dem = {}
    for i in set_danh_sach:
      count = 0
      for j in danh_sach:
        if i == j:
          count = count + 1
      
      dem[i] = count

    return dem


# ---------------------------------------------------------------- Bai 3.00.4
def gom_nhom_theo_do_dai(danh_sach_tu):
    """
    BÀI 4: GOM NHÓM DANH SÁCH BẰNG DICT (Chìa khóa giải Bài 3.02 Anagram)

    Đề bài:
      Cho một danh sách các từ `danh_sach_tu`.
      Hãy gom các từ có CÙNG ĐỘ DÀI vào một danh sách.
      Trả về một `dict` với:
        - Key: Độ dài của từ (số nguyên)
        - Value: List các từ có độ dài tương ứng (giữ nguyên thứ tự xuất hiện ban đầu)
      Nếu danh sách rỗng -> trả về `{}`.

    Ví dụ:
      danh_sach_tu = ["cat", "dog", "apple", "banana", "bat"]
      - "cat", "dog", "bat" có độ dài 3 -> nhóm 3: ["cat", "dog", "bat"]
      - "apple" có độ dài 5 -> nhóm 5: ["apple"]
      - "banana" có độ dài 6 -> nhóm 6: ["banana"]
      -> Trả về: {3: ["cat", "dog", "bat"], 5: ["apple"], 6: ["banana"]}

    Gợi ý mẫu gom nhóm (Mẫu này áp dụng cho 80% bài gom nhóm trong thi):
      nhom = {}
      for tu in danh_sach_tu:
          key = len(tu)
          if key not in nhom:
              nhom[key] = []      # Khởi tạo list rỗng cho nhóm mới
          nhom[key].append(tu)    # Thêm từ vào nhóm tương ứng
      return nhom
    """
    dem = {}
    for i in danh_sach_tu:
      so_tu = len(i)
      if so_tu not in dem:
        dem[so_tu] = []
      dem[so_tu].append(i)

    return dem
      



# ---------------------------------------------------------------- Bai 3.00.5
def phan_tu_xuat_hien_nhieu_nhat(arr):
    """
    BÀI 5: TÌM PHẦN TỬ XUẤT HIỆN NHIỀU NHẤT (Chìa khóa giải Bài 3.05 Top K)

    Đề bài:
      Cho một danh sách số nguyên `arr`.
      Tìm và trả về số xuất hiện NHIỀU LẦN NHẤT trong mảng.
      - Nếu mảng rỗng `[]`, trả về `None`.
      - Nếu có nhiều số có cùng số lần xuất hiện cao nhất, trả về số có GIÁ TRỊ NHỎ HƠN.

    Ví dụ:
      arr = [1, 2, 2, 3, 3, 3, 1]
      Số 1 xuất hiện 2 lần, số 2 xuất hiện 2 lần, số 3 xuất hiện 3 lần
      -> Trả về 3

      arr = [4, 4, 2, 2]
      Cả 4 và 2 đều xuất hiện 2 lần, nhưng 2 < 4
      -> Trả về 2

    Gợi ý:
      1. Nếu not arr: return None
      2. Bước 1: Dùng dict để đếm tần suất của từng số (như Bài 3).
      3. Bước 2: Duyệt qua từng cặp (so, so_lan) trong dict.items():
         Tìm cặp có `so_lan` lớn nhất. Nếu bằng `so_lan` lớn nhất thì chọn `so` nhỏ hơn.
    """
    if len(arr) == 0:
      return None

    set_arr = set(arr)
    max = 0
    is_max = 0
    for i in set_arr:
      count = 0
      for j in arr:
        if i ==j:
          count = count + 1
      if max < count or (max == count and is_max > i):
        max = count
        is_max = i
      
    return is_max

# ---------------------------------------------------------------- Bai 3.00.6
def kiem_tra_hai_khoang_trung_nhau(k1, k2):
    """
    BÀI 6: KIỂM TRA 2 KHOẢNG GIAO NHAU (Chìa khóa giải Bài 3.03 Giao khoảng)

    Đề bài:
      Cho 2 khoảng số thực hoặc nguyên:
        k1 = [dau1, cuoi1]
        k2 = [dau2, cuoi2]
      (Giả định dau <= cuoi).
      
      Hãy kiểm tra xem 2 khoảng này có điểm chung nào không (giao nhau).
      Lưu ý: Chạm mép nhau cũng tính là giao nhau (ví dụ [1, 5] và [5, 8] có chung điểm 5).
      
      Trả về `True` nếu có giao nhau, `False` nếu không giao nhau.

    Ví dụ:
      k1 = [1, 5], k2 = [3, 8] -> True  (giao nhau đoạn [3, 5])
      k1 = [1, 4], k2 = [4, 7] -> True  (chạm nhau tại 4)
      k1 = [1, 3], k2 = [5, 9] -> False (rời nhau hoàn toàn)

    Gợi ý công thức toán học kinh điển:
      Hai đoạn [a, b] và [c, d] giao nhau khi và chỉ khi:
          Điểm bắt đầu lớn hơn <= Điểm kết thúc nhỏ hơn
          tức là: max(a, c) <= min(b, d)
      Chỉ cần 1 dòng code duy nhất:
          return max(k1[0], k2[0]) <= min(k1[1], k2[1])
    """
    pass  # <-- Viết code của bạn ở đây


# ==============================================================================
# BỘ TỰ ĐỘNG CHẤM ĐIỂM (TỰ CHẠY KHI ẤN NÚT PLAY HOẶC CHẠY FILE NÀY)
# ==============================================================================
def chay_kiem_tra():
    XANH = "\033[92m"
    DO = "\033[91m"
    TAT = "\033[0m"

    cac_bai = [
        ("3.00.1 tinh_diem_giam_khao", [
            (([8.0, 9.0, 7.5, 9.5, 8.5],), 8.5),
            (([10.0, 5.0],), 0.0),
            (([6.0, 7.0, 8.0],), 7.0),
            (([1.0, 1.0, 1.0, 1.0],), 1.0),
        ], tinh_diem_giam_khao),

        ("3.00.2 kiem_tra_tai_khoan", [
            ((100, [50, -200, -30]), (120, 1)),
            ((50, [-60, -70]), (50, 2)),
            ((200, [100, 50]), (350, 0)),
            ((100, [-100]), (0, 0)),
        ], kiem_tra_tai_khoan),

        ("3.00.3 dem_so_lan_xuat_hien", [
            ((["cam", "tao", "cam", "le", "cam", "tao"],), {"cam": 3, "tao": 2, "le": 1}),
            (([],), {}),
            (([1, 2, 2, 3],), {1: 1, 2: 2, 3: 1}),
        ], dem_so_lan_xuat_hien),

        ("3.00.4 gom_nhom_theo_do_dai", [
            ((["cat", "dog", "apple", "banana", "bat"],), {3: ["cat", "dog", "bat"], 5: ["apple"], 6: ["banana"]}),
            (([],), {}),
            ((["a", "b", "c"],), {1: ["a", "b", "c"]}),
        ], gom_nhom_theo_do_dai),

        ("3.00.5 phan_tu_xuat_hien_nhieu_nhat", [
            (([1, 2, 2, 3, 3, 3, 1],), 3),
            (([4, 4, 2, 2],), 2),
            (([],), None),
            (([7],), 7),
        ], phan_tu_xuat_hien_nhieu_nhat),

        ("3.00.6 kiem_tra_hai_khoang_trung_nhau", [
            (([1, 5], [3, 8]), True),
            (([1, 4], [4, 7]), True),
            (([1, 3], [5, 9]), False),
            (([10, 20], [0, 5]), False),
            (([0, 10], [2, 5]), True),
        ], kiem_tra_hai_khoang_trung_nhau),
    ]

    print("\n" + "=" * 60)
    print("   BẢNG ĐIỂM BƯỚC ĐỆM DESIGN: 6 BÀI TẬP KHỞI ĐỘNG")
    print("=" * 60)
    
    tong_pass = 0
    for ten_bai, tests, func in cac_bai:
        bai_pass = True
        loi_msg = ""
        for args, mong_doi in tests:
            try:
                kq = func(*args)
                if kq != mong_doi:
                    bai_pass = False
                    loi_msg = f"  Input: {args} -> Mong đợi: {mong_doi}, Nhận được: {kq}"
                    break
            except Exception as e:
                bai_pass = False
                loi_msg = f"  Input: {args} -> Bị lỗi: {e}"
                break
        
        if bai_pass:
            print(f"  {XANH}PASS{TAT}  {ten_bai}")
            tong_pass += 1
        else:
            print(f"  {DO}FAIL{TAT}  {ten_bai}")
            if loi_msg:
                print(f"        {loi_msg}")

    print("=" * 60)
    print(f"  KẾT QUẢ: {tong_pass}/{len(cac_bai)} bài đạt yêu cầu.")
    if tong_pass == len(cac_bai):
        print(f"  {XANH}XUẤT SẮC! BẠN ĐÃ SẴN SÀNG QUAY LẠI FILE P3_DESIGN.PY!{TAT}")
    else:
        print("  Hãy hoàn thiện từng bài và chạy lại file để kiểm tra nhé!")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    chay_kiem_tra()
