# ============================================================================
# PHẦN 0.2: LÀM QUEN VỚI "VIẾT TẮT" TRONG PYTHON (PYTHONIC CODE)
# ============================================================================
# Mục tiêu: Học cách chuyển đổi code từ cách viết "dài dòng" (như C++/Java)
# sang cách viết siêu ngắn gọn và đặc trưng của Python.
# Bạn hãy thay thế từ khóa `pass` bằng 1 dòng code duy nhất nhé!

# ---------------------------------------------------------------- Bai 0.06
def bai_06_if_else_ngan_gon(n):
    """
    BÀI 6: IF-ELSE TRONG 1 DÒNG (Ternary Operator)
    Cách viết dài:
        if n % 2 == 0:
            return "Chan"
        else:
            return "Le"
            
    Yêu cầu: Hãy viết lại đoạn code trên chỉ trong đúng 1 dòng.
    Cú pháp gợi ý: return [Giá trị 1] if [Điều kiện] else [Giá trị 2]
    """
    return "Chan" if n % 2== 0 else "Le"
    pass


# ---------------------------------------------------------------- Bai 0.07
def bai_07_tao_mang_binh_phuong(n):
    """
    BÀI 7: TẠO MẢNG SIÊU NHANH (List Comprehension)
    Yêu cầu: Tạo mảng chứa bình phương các số từ 1 đến n.
    Ví dụ: n = 4 -> Trả về [1, 4, 9, 16]
    
    Cách viết dài:
        ket_qua = []
        for i in range(1, n + 1):
            ket_qua.append(i * i)
        return ket_qua
        
    Yêu cầu: Viết lại đoạn trên chỉ trong 1 dòng!
    Cú pháp gợi ý: return [ biểu_thức for biến in danh_sách ]
    (Tức là nhét hẳn vòng lặp for vào bên trong dấu ngoặc vuông [] của mảng)
    """
    return [i*i for i in range(1,n+1)]
    pass


# ---------------------------------------------------------------- Bai 0.08
def bai_08_hoan_doi_bien():
    """
    BÀI 8: GÁN NHIỀU BIẾN CÙNG LÚC & HOÁN ĐỔI (Swap)
    Cách viết dài (khi muốn đổi giá trị 2 biến a và b cho nhau):
        temp = a
        a = b
        b = temp
        
    Yêu cầu: 
    1. Khai báo 2 biến: a = 5 và b = 10 (trong 1 dòng, cú pháp: a, b = 5, 10)
    2. Đổi giá trị của a và b cho nhau mà KHÔNG dùng biến tạm (temp). 
       Cú pháp: x, y = y, x
    3. Trả về cặp (a, b)
    """
    a = 5
    b = 10 
    a,b = b,a
    return a,b
    pass


# ---------------------------------------------------------------- Bai 0.09
def bai_09_loc_so_chan(danh_sach):
    """
    BÀI 9: LỌC MẢNG SIÊU NHANH (List Comprehension kết hợp IF)
    Yêu cầu: Trả về một mảng mới chỉ chứa các số CHẴN từ mảng danh_sach ban đầu.
    Ví dụ: danh_sach = [1, 2, 3, 4, 5] -> Trả về [2, 4]
    
    Cách viết dài:
        ket_qua = []
        for so in danh_sach:
            if so % 2 == 0:
                ket_qua.append(so)
        return ket_qua
        
    Yêu cầu: Viết lại chỉ trong 1 dòng!
    Cú pháp gợi ý: return [ biểu_thức for biến in danh_sách if điều_kiện ]
    """
    return  [i for i in danh_sach if i % 2 == 0]
    pass

