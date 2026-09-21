# ============================================================================
# PHẦN 0: NHẬP MÔN PYTHON (DÀNH CHO NGƯỜI BẮT ĐẦU TỪ CON SỐ 0)
# ============================================================================
# Phong cách học: Tự viết code hoàn chỉnh từ đầu (Code from scratch).
# Mục tiêu: Nắm vững các khái niệm cơ bản nhất (Biến, Toán tử, If-Else, Vòng lặp For, List).

# ---------------------------------------------------------------- Bai 0.01
from ast import Return
def bai_01_tinh_tong(a, b):
    """
    BÀI 1: BIẾN VÀ TOÁN TỬ CƠ BẢN
    Yêu cầu: Tính tổng của 2 biến a và b, sau đó trả về kết quả.
    Ví dụ: a = 5, b = 3 -> Trả về 8
    """
    c =a + b
    return c
    pass


# ---------------------------------------------------------------- Bai 0.02
def bai_02_kiem_tra_chan_le(n):
    """
    BÀI 2: LỆNH ĐIỀU KIỆN IF - ELSE
    Yêu cầu: Kiểm tra số nguyên n là chẵn hay lẻ. 
    Nếu chẵn trả về "Chan", nếu lẻ trả về "Le".
    Gợi ý: Số chẵn là số chia hết cho 2 (phép chia lấy dư % cho 2 bằng 0).
    """
    if(n % 2 ==0):
        return "Chan"
    else:
        return "Le"
    pass


# ---------------------------------------------------------------- Bai 0.03
def bai_03_in_loi_chao(ten, tuoi):
    """
    BÀI 3: NỐI CHUỖI (STRING FORMATTING)
    Yêu cầu: Trả về một chuỗi theo định dạng "Xin chao, toi la [ten], [tuoi] tuoi."
    Gợi ý: Sử dụng f-string (f"chuỗi và {biến}").
    Ví dụ: ten="An", tuoi=20 -> "Xin chao, toi la An, 20 tuoi."
    """
    return f"Xin chao, toi la {ten}, {tuoi} tuoi."

    pass


# ---------------------------------------------------------------- Bai 0.04
def bai_04_tinh_tong_1_den_n(n):
    """
    BÀI 4: VÒNG LẶP FOR CƠ BẢN
    Yêu cầu: Tính tổng các số từ 1 đến n (bao gồm cả n).
    Gợi ý: Dùng hàm range(bắt_đầu, kết_thúc). Nhớ rằng range() không bao gồm điểm kết_thúc!
    Ví dụ: n = 4 -> 1 + 2 + 3 + 4 = 10
    """
    sum=0
    for i in range(0,n+1):
        sum = sum + i
    return sum
    pass


# ---------------------------------------------------------------- Bai 0.05
def bai_05_tim_so_lon_nhat(danh_sach):
    """
    BÀI 5: LÀM VIỆC VỚI LIST (MẢNG)
    Yêu cầu: Tìm và trả về giá trị lớn nhất trong mảng `danh_sach`.
    (Tự viết thuật toán duyệt mảng, không dùng hàm max() có sẵn).
    Ví dụ: danh_sach = [3, 7, 2, 9, 5] -> Trả về 9
    """
    max = danh_sach[0]
    for i in danh_sach:
        if max < i:
            max = i
    
    return max
    pass
