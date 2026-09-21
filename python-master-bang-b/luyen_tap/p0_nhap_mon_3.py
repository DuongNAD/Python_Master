# ============================================================================
# PHẦN 0.4: LUYỆN TẬP CƠ BẢN (PHẦN 3)
# ============================================================================
# Phong cách học: Tự viết code hoàn chỉnh từ đầu.
# Mục tiêu: Kết hợp vòng lặp, câu lệnh rẽ nhánh và tư duy logic phức tạp hơn.

# ---------------------------------------------------------------- Bai 0.15
def bai_15_dem_so_tu(chuoi):
    """
    BÀI 15: ĐẾM SỐ TỪ TRONG CHUỖI
    Yêu cầu: Viết hàm đếm xem một chuỗi có bao nhiêu từ. 
    (Giả định các từ cách nhau bởi đúng 1 dấu cách, và không có dấu cách ở đầu/cuối).
    
    Ví dụ: chuoi = "hom nay troi dep" -> Trả về 4
    
    Gợi ý: Số từ sẽ luôn bằng số lượng dấu cách (space) cộng thêm 1.
    Ví dụ: "a b" có 1 dấu cách, tức là có 2 từ.
    Hãy duyệt chuỗi, đếm số dấu cách " ", sau đó return kết quả + 1.
    (Không được dùng hàm chuoi.split() có sẵn).
    """
    count = 0
    for i in chuoi:
        if i == " ":
            count = count + 1
    
    return count
    pass


# ---------------------------------------------------------------- Bai 0.16
def bai_16_kiem_tra_doi_xung(chuoi):
    """
    BÀI 16: KIỂM TRA CHUỖI ĐỐI XỨNG (Palindrome)
    Yêu cầu: Kiểm tra xem chuỗi đọc xuôi và đọc ngược có giống hệt nhau không.
    Ví dụ: "radar" -> True, "madam" -> True, "hello" -> False
    
    Gợi ý: 
    Cách dễ nhất: Đảo ngược chuỗi (như bạn đã làm ở bài 11), 
    sau đó so sánh xem (chuỗi ban đầu == chuỗi đảo ngược) không.
    """
    n = len(chuoi)
    for i in range(n//2):
        if chuoi[i] != chuoi[n-1 -i]:
            return False
    return True
    pass


# ---------------------------------------------------------------- Bai 0.17
def bai_17_loc_so_duong(danh_sach):
    """
    BÀI 17: LỌC MẢNG (Tạo danh sách mới)
    Yêu cầu: Nhận vào một mảng chứa cả số âm và số dương.
    Hãy trả về một danh sách (list) MỚI, chỉ chứa các số DƯƠNG (> 0).
    Ví dụ: danh_sach = [-2, 5, -9, 3, 0] -> Trả về [5, 3]
    
    Gợi ý: 
    1. Khởi tạo mảng rỗng: kq = []
    2. Duyệt từng số trong danh_sach.
    3. Nếu số đó > 0, thêm nó vào mảng kq bằng lệnh: kq.append(so)
    4. Trả về kq.
    """
    result = []
    for i in danh_sach:
        if i > 0:
            result.append(i)
    return result
    pass


# ---------------------------------------------------------------- Bai 0.18
def bai_18_so_lon_thu_hai(danh_sach):
    """
    BÀI 18: TÌM SỐ LỚN THỨ HAI (Thử thách khó)
    Yêu cầu: Tìm số lớn thứ HAI trong danh_sach (giả định danh_sach có ít nhất 2 phần tử, 
    và các phần tử khác nhau).
    Ví dụ: danh_sach = [5, 1, 9, 3] -> Trả về 5 (9 là lớn nhất, 5 là thứ hai)
    
    Gợi ý thuật toán:
    1. Lấy 2 số đầu tiên của mảng để gán cho 2 biến `lon_nhat` và `lon_nhi`. 
       Nhớ kiểm tra xem số nào lớn hơn để gán cho đúng.
    2. Duyệt các số CÒN LẠI trong mảng (hoặc duyệt từ đầu cũng không sao).
    3. Nếu số đang xét > `lon_nhat`: 
       -> Số lớn nhất cũ sẽ bị đẩy xuống thành số lớn nhì, và số lớn nhất mới = số đang xét.
    4. Nếu số đang xét không lớn hơn `lon_nhat`, nhưng lại > `lon_nhi`:
       -> Số lớn nhì = số đang xét.
    """
    max = danh_sach[0]
    for i in danh_sach:
        if i > max:
            max = i

    second_max= 
    
    pass
