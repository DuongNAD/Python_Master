# ============================================================================
# PHẦN 0.3: LUYỆN TẬP CƠ BẢN (PHẦN 2)
# ============================================================================
# Phong cách học: Tự viết code hoàn chỉnh từ đầu (Code from scratch).
# Mục tiêu: Rèn luyện tư duy vòng lặp, xử lý chuỗi (String) và mảng (List) ở mức cơ bản.

# ---------------------------------------------------------------- Bai 0.10
def bai_10_dem_nguyen_am(chuoi):
    """
    BÀI 10: ĐẾM NGUYÊN ÂM (Xử lý chuỗi)
    Yêu cầu: Đếm xem trong chuỗi có bao nhiêu nguyên âm (a, e, i, o, u).
    (Giả định đầu vào toàn là chữ cái viết thường để bạn dễ code).
    Ví dụ: chuoi = "hello" -> Trả về 2 (chữ e và chữ o)
    
    Gợi ý: Khởi tạo dem = 0. Duyệt từng chữ cái bằng `for c in chuoi:`, 
    nếu c nằm trong chuỗi "aeiou" thì tăng biến dem lên 1.
    """
    count = 0
    for i in chuoi:
        if i in "aeiou":
            count= count +1
    return count
    pass


# ---------------------------------------------------------------- Bai 0.11
def bai_11_dao_nguoc_chuoi(chuoi):
    """
    BÀI 11: ĐẢO NGƯỢC CHUỖI
    Yêu cầu: Trả về một chuỗi bị đảo ngược thứ tự các ký tự.
    Ví dụ: chuoi = "python" -> Trả về "nohtyp"
    
    Gợi ý: Có 2 cách.
    Cách 1: Khởi tạo chuỗi rỗng kq = "". Duyệt vòng lặp `for c in chuoi:`, 
            rồi cộng dồn ngược lại: kq = c + kq
    Cách 2: (Mẹo Pythonic) return chuoi[::-1]
    Bạn hãy thử viết bằng Cách 1 để rèn luyện tư duy nhé!
    """
    result = ""
    for c in chuoi:
        result = c + result
    return result
    pass


# ---------------------------------------------------------------- Bai 0.12
def bai_12_tong_so_chan(danh_sach):
    """
    BÀI 12: TÍNH TỔNG CÓ ĐIỀU KIỆN (Mảng)
    Yêu cầu: Tính tổng của TẤT CẢ CÁC SỐ CHẴN nằm trong danh_sach.
    Ví dụ: danh_sach = [1, 2, 3, 4, 5, 6] -> 2 + 4 + 6 = 12
    
    Gợi ý: Khởi tạo tong = 0. Duyệt `for so in danh_sach:`. 
    Kiểm tra chẵn/lẻ bằng % 2. Nếu chẵn thì cộng vào tong.
    """
    result =0
    for i in danh_sach:
        if i%2 ==0:
            result = result +i

    return result 
    pass


# ---------------------------------------------------------------- Bai 0.13
def bai_13_tim_so_nho_nhat(danh_sach):
    """
    BÀI 13: TÌM SỐ NHỎ NHẤT (Ôn lại bài tìm số lớn nhất)
    Yêu cầu: Tương tự bài 0.05, nhưng lần này là tìm số NHỎ NHẤT.
    (Không dùng hàm min() có sẵn).
    Ví dụ: danh_sach = [8, 3, 9, 1, 5] -> Trả về 1
    """
    min = danh_sach[0]
    for i in danh_sach:
        if i < min:
            min = i
    
    return min
    pass


# ---------------------------------------------------------------- Bai 0.14
def bai_14_kiem_tra_so_nguyen_to(n):
    """
    BÀI 14: KIỂM TRA SỐ NGUYÊN TỐ (Thử thách vòng lặp lồng IF)
    Yêu cầu: Trả về True nếu n là số nguyên tố, False nếu không phải.
    (Số nguyên tố là số lớn hơn 1 và CHỈ chia hết cho 1 và chính nó).
    
    Ví dụ: n = 7 -> True, n = 8 -> False, n = 1 -> False.
    
    Gợi ý thuật toán:
    1. Nếu n < 2: return False luôn.
    2. Nếu không, cho vòng lặp i chạy từ 2 đến n-1 (dùng range).
    3. Nếu n chia hết cho i (tức là n % i == 0) -> return False (vì có ước khác 1 và n).
    4. Chạy xong hết vòng lặp mà không return False, thì return True (đây đích thị là số nguyên tố).
    """
    if n < 2:          
        return False
        
    for i in range(2, int(n**0.5) + 1): 
        if n % i == 0:
            return False
    return True
    pass
