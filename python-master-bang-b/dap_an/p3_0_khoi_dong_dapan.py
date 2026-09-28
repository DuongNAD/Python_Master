# -*- coding: utf-8 -*-
"""
ĐÁP ÁN THAM KHẢO & GIẢI THÍCH CHI TIẾT: 6 BÀI TẬP BƯỚC ĐỆM DESIGN
================================================================================
(Chỉ mở file này khi bạn đã tự suy nghĩ và thử code ít nhất 5-10 phút)
================================================================================
"""


# ---------------------------------------------------------------- Bai 3.00.1
def tinh_diem_giam_khao(diem):
    """
    Ý tưởng:
      - Loại biên độ dài < 3.
      - Sắp xếp tăng dần: số đầu tiên là min, số cuối cùng là max.
      - Cắt lát bỏ đầu đuôi s[1:-1], tính sum / len và round 2 chữ số.
    """
    if len(diem) < 3:
        return 0.0
    s = sorted(diem)
    con_lai = s[1:-1]
    return round(sum(con_lai) / len(con_lai), 2)


# ---------------------------------------------------------------- Bai 3.00.2
def kiem_tra_tai_khoan(so_du_ban_dau, giao_dich):
    """
    Ý tưởng:
      - Mô phỏng tuần tự. Nếu trừ tiền mà làm số dư < 0 thì bỏ qua và đếm.
    """
    so_du = so_du_ban_dau
    so_bo_qua = 0
    for gd in giao_dich:
        if so_du + gd < 0:
            so_bo_qua += 1
        else:
            so_du += gd
    return (so_du, so_bo_qua)


# ---------------------------------------------------------------- Bai 3.00.3
def dem_so_lan_xuat_hien(danh_sach):
    """
    Ý tưởng:
      - Dictionary tần suất: kiểm tra `if x not in dem` thì gán = 1, ngược lại cộng 1.
    """
    dem = {}
    for x in danh_sach:
        if x not in dem:
            dem[x] = 1
        else:
            dem[x] += 1
    return dem


# ---------------------------------------------------------------- Bai 3.00.4
def gom_nhom_theo_do_dai(danh_sach_tu):
    """
    Ý tưởng:
      - Dict gom nhóm: Value là một list. Nếu key chưa có thì tạo list rỗng [], rồi append.
    """
    nhom = {}
    for tu in danh_sach_tu:
        k = len(tu)
        if k not in nhom:
            nhom[k] = []
        nhom[k].append(tu)
    return nhom


# ---------------------------------------------------------------- Bai 3.00.5
def phan_tu_xuat_hien_nhieu_nhat(arr):
    """
    Ý tưởng:
      - Bước 1: Đếm tần suất bằng dict.
      - Bước 2: Duyệt các cặp (so, so_lan) để tìm max.
        Nếu so_lan > max_lan: cập nhật max_lan và kq.
        Nếu so_lan == max_lan: lấy số nhỏ hơn (kq = min(kq, so)).
    """
    if not arr:
        return None
    dem = {}
    for x in arr:
        dem[x] = dem.get(x, 0) + 1

    max_so = None
    max_lan = -1
    for so, so_lan in dem.items():
        if so_lan > max_lan:
            max_lan = so_lan
            max_so = so
        elif so_lan == max_lan:
            if so < max_so:
                max_so = so
    return max_so


# ---------------------------------------------------------------- Bai 3.00.6
def kiem_tra_hai_khoang_trung_nhau(k1, k2):
    """
    Ý tưởng:
      - Hai khoảng [a, b] và [c, d] giao nhau khi: max(start) <= min(end).
    """
    return max(k1[0], k2[0]) <= min(k1[1], k2[1])
