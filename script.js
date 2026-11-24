// Danh sách sản phẩm dùng cho chức năng sắp xếp
var danhSachSanPham = [
    {
        ten: "Bình giữ nhiệt Elmich 500ml inox 304 nắp bấm",
        gia: 450000,
        giaChu: "450.000đ",
        giaCuChu: "1.290.000đ",
        giam: "-65%",
        anh: "assets/binh-1.png"
    },
    {
        ten: "Bình giữ nhiệt Elmich 800ml thể thao nắp khóa",
        gia: 320000,
        giaChu: "320.000đ",
        giaCuChu: "1.600.000đ",
        giam: "-80%",
        anh: "assets/binh-2.png"
    },
    {
        ten: "Bình giữ nhiệt Elmich 1 lít nắp quai xách",
        gia: 380000,
        giaChu: "380.000đ",
        giaCuChu: "1.190.000đ",
        giam: "-68%",
        anh: "assets/binh-3.png"
    },
    {
        ten: "Bình giữ nhiệt Elmich 600ml inox 316 màu đen",
        gia: 620000,
        giaChu: "620.000đ",
        giaCuChu: "730.000đ",
        giam: "-15%",
        anh: "assets/binh-4.png"
    },
    {
        ten: "Bình giữ nhiệt cho bé Elmich 400ml có ống hút",
        gia: 290000,
        giaChu: "290.000đ",
        giaCuChu: "580.000đ",
        giam: "-50%",
        anh: "assets/binh-5.png"
    },
    {
        ten: "Bình nước thể thao Elmich 750ml nắp vặn chống rò",
        gia: 350000,
        giaChu: "350.000đ",
        giaCuChu: "700.000đ",
        giam: "-50%",
        anh: "assets/binh-6.png"
    },
    {
        ten: "Cốc giữ nhiệt Elmich 380ml nắp trượt chống tràn",
        gia: 210000,
        giaChu: "210.000đ",
        giaCuChu: "420.000đ",
        giam: "-50%",
        anh: "assets/coc.png"
    },
    {
        ten: "Hộp cơm giữ nhiệt Elmich 1.2 lít 3 tầng inox",
        gia: 540000,
        giaChu: "540.000đ",
        giaCuChu: "900.000đ",
        giam: "-40%",
        anh: "assets/hop-com.png"
    },
    {
        ten: "Bình giữ nhiệt Elmich 350ml mini để bàn",
        gia: 260000,
        giaChu: "260.000đ",
        giaCuChu: "520.000đ",
        giam: "-50%",
        anh: "assets/binh-1.png"
    },
    {
        ten: "Bình giữ nhiệt Elmich 1.5 lít gia đình văn phòng",
        gia: 690000,
        giaChu: "690.000đ",
        giaCuChu: "1.380.000đ",
        giam: "-50%",
        anh: "assets/binh-2.png"
    },
    {
        ten: "Cốc giữ nhiệt Elmich 500ml kèm ống hút inox",
        gia: 240000,
        giaChu: "240.000đ",
        giaCuChu: "480.000đ",
        giam: "-50%",
        anh: "assets/coc.png"
    },
    {
        ten: "Hộp cơm giữ nhiệt Elmich 800ml 2 tầng",
        gia: 420000,
        giaChu: "420.000đ",
        giaCuChu: "840.000đ",
        giam: "-50%",
        anh: "assets/hop-com.png"
    }
];

// Tạo mã HTML cho một sản phẩm
function taoTheSanPham(sp) {
    var html = "";
    html = html + '<div class="san-pham">';
    html = html + '<div class="hang-nhan"><span class="nhan-giam">' + sp.giam + '</span></div>';
    html = html + '<a class="anh-san-pham" href="#">';
    html = html + '<img src="' + sp.anh + '" alt="' + sp.ten + '">';
    html = html + '</a>';
    html = html + '<div class="thong-tin">';
    html = html + '<h3 class="ten-san-pham">' + sp.ten + '</h3>';
    html = html + '<div class="gia">';
    html = html + '<b class="gia-moi">' + sp.giaChu + '</b>';
    html = html + '<i class="gia-cu">' + sp.giaCuChu + '</i>';
    html = html + '</div>';
    html = html + '<div class="uudai">';
    html = html + '<div class="uudai-o"><span class="nho">Giảm thêm</span><span class="lon">10%</span></div>';
    html = html + '<div class="uudai-o"><span class="nho">Ưu đãi</span><span class="lon">50%+</span></div>';
    html = html + '<div class="uudai-o"><span class="nho">Freeship</span><span class="lon">500K</span></div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    return html;
}

// Hiển thị danh sách sản phẩm ra khung bên phải
function hienThiDanhSach(mang) {
    var ketQua = "";
    for (var i = 0; i < mang.length; i++) {
        ketQua = ketQua + taoTheSanPham(mang[i]);
    }
    document.getElementById("danh-sach-san-pham").innerHTML = ketQua;
}

// Sắp xếp sản phẩm: 0 - như ban đầu, 1 - giá tăng dần, 2 - giá giảm dần, 3 - tên A-Z
function sapXep(kieu) {
    var mang = [];
    for (var i = 0; i < danhSachSanPham.length; i++) {
        mang.push(danhSachSanPham[i]);
    }
    for (var i = 0; i < mang.length - 1; i++) {
        for (var j = i + 1; j < mang.length; j++) {
            var canDoi = false;
            if (kieu == 1 && mang[j].gia < mang[i].gia) {
                canDoi = true;
            }
            if (kieu == 2 && mang[j].gia > mang[i].gia) {
                canDoi = true;
            }
            if (kieu == 3 && mang[j].ten.toLowerCase() < mang[i].ten.toLowerCase()) {
                canDoi = true;
            }
            if (canDoi == true) {
                var tam = mang[i];
                mang[i] = mang[j];
                mang[j] = tam;
            }
        }
    }
    hienThiDanhSach(mang);
}

// Ẩn hoặc hiện cột bộ lọc bên trái
var dangAnBoLoc = false;
function anBoLoc() {
    var khoiTrai = document.getElementById("khoi-trai");
    if (dangAnBoLoc == false) {
        khoiTrai.style.display = "none";
        document.getElementById("nut-an-loc").innerHTML = "Hiện bộ lọc";
        dangAnBoLoc = true;
    } else {
        khoiTrai.style.display = "block";
        document.getElementById("nut-an-loc").innerHTML = "Ẩn bộ lọc";
        dangAnBoLoc = false;
    }
}
