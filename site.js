const data= [
    {
        id : 0,
        img : '/img/Thịnh Hành/anh1.jpg',
        name : 'Sách - The True Ielts Guide',
        price : 138.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec: 'The True Ielts Guide “ là cuốn sách giúp bạn có được một lộ trình học IELTS chi tiết từ cơ bản đến nâng cao, tiết kiệm thời gian nhưng vẫn vô cùng hiệu quả.',
        itemInCart: false
    },
    {
        id : 1,
        img : '/img/Thịnh Hành/anh2.jpg',
        name : 'Sách Hướng Nghiệp:Hiểu đúng ngành Chọn đúng nghề',
        price : 115.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'aaaaaa',
        itemInCart: false
    },
    {
        id : 2,
        img : '/img/Thịnh Hành/anh3.jpg',
        name : 'Sách - Sương Khói Quê Nhà',
        price : 76.000 ,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        itemInCart: false
    },
    {
        id : 3,
        img : '/img/Thịnh Hành/anh4.jpg',
        name : 'Sách - Harry Potter Và Hòn Đá Phù Thủy',
        price : 120.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        itemInCart: false
    },
    {
        id : 4,
        img : '/img/Sách Khoa Học/anh1.jpg',
        name : 'Sách - Khoa Học Khám Phá - Stephen Hawking',
        price : 113.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Ý tưởng độc đáo của bộ sách nằm ở chỗ nó được thiết kế mô phỏng cuốn vở ghi chép trên lớp của một học sinh giỏi nhất lớp. Nhờ vậy, nội dung mỗi cuốn sách không chỉ khái quát gần như đầy đủ những kiến thức cơ bản trong chương trình bậc trung học cơ sở mà chúng còn được trình bày theo cách rất khoa học, dễ hiểu và sinh động, bắt mắt.',
        itemInCart: false
    },
    {
        id : 5,
        img : '/img/Thịnh Hành/anh2.jpg',
        name : 'Sách sổ tay khoa học máy tính và mật mã Á Châu Books',
        price : 321.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 6,
        img : '/img/Sách Khoa Học/anh3.jpg',
        name : 'Khái Lược Những Tư Tưởng Lớn (Tái Bản 2023)',
        price : 337.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 7,
        img : '/img/Sách Khoa Học/anh4.jpg',
        name : 'SÁCH - Bách khoa thư về khoa học- Trái Đất và vũ trụ',
        price : 54.000 ,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 8,
        img : '/img/Sách Tiếng Anhh/anh1.jpg',
        name : 'Luyện kỹ năng đọc hiểu tiếng Anh',
        price : 24.000,
        save : 25.000,
        spec:'Bộ sách “Luyện kỹ năng đọc hiểu tiếng Anh” gồm bốn quyển dành cho học viên trình độ sơ cấp và trung cấp muốn cải thiện các kỹ năng đọc hiểu của mình. Mỗi bài bắt đầu với ba hoặc bốn câu hỏi trước khi đọc nhằm khuyến khích học viên nghĩ về các vấn đề liên quan đến chủ đề. Các câu hỏi được thiết kế dành cho các học viên để làm việc theo cặp hoặc theo nhóm nhỏ để phát triển khả năng tiên đoán và hiểu thông tin từ kiến thức và kinh nghiệm của họ.',
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 9,
        img : '/img/Sách Tiếng Anhh/anh2.jpg',
        name : 'Luyện dịch song ngữ Hàn Việt qua 3000 tiêu đề báo chí',
        price : 104.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Trong mối quan hệ hợp tác Việt Nam - Hàn Quốc ngày càng tăng cường và thúc đẩy thì nhu cầu học tiếng Hàn ngày càng lớn. Giáo trình Luyện dịch song ngữ Hàn – Việt qua 3.000 tiêu đề báo chí được tác giả Lê Huy Khoa và tập thể giáo viên Trường Hàn ngữ Việt – Hàn Kanata biên soạn với mong muốn đây là tài liệu cung cấp cho người học đầy đủ vốn từ vựng có tính thời sự và phong cách diễn đạt báo chí của người Hàn Quốc.',
        itemInCart: false
    },
    {
        id : 10,
        img : '/img/Sách Tiếng Anhh/anh3.jpg',
        name : 'Tự học tiếng Đức cho người mới bắt đầu',
        price : 117.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Đây là giáo trình tự học tiếng Đức hoàn chỉnh nhất và được biên soạn công phu nhằm giúp người học phát triển cả 4 kỹ năng: Nghe, nói, đọc, viết. Ngoài ra phần chú giải ngữ pháp và bài tập áp dụng giúp cho các học viên tự phát triển, xây dựng các mẫu câu căn bản và từ đó nâng dẩn thành các mẫu câu phức tạp hơn đủ để diễn tả các tình huống thường gặp. Paul Coggle và Heiner Schenke, tác giả của giáo trình tự học này đổng thời cũng là giảng viên tiếng Đức tại Viện đại học Luân Đôn Anh Quốc, đã đúc kết nhiều năm kinh nghiệm dạy tiếng Đức cho người nước ngoài.',
        itemInCart: false
    },
    {
        id : 11,
        img : '/img/Sách Tiếng Anhh/anh4.jpg',
        name : 'Sách tiếng Nhật-Kanji Look and learn',
        price : 160.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Giáo trình Kanji (chữ Hán trong tiếng Nhật) mức độ sơ-trung cấp, mang đến phương pháp học cực kì dễ nhớ và đầy hứng khởi qua các hình minh họa thú vị, vô cùng thích hợp cho các bạn mới làm quen với tiếng Nhật và đặc biệt là Kanji. Đi kèm lượng từ vựng phong phú và thiết thực. Cực kì hiệu quả cho tự học!Ngoài ra, cuốn sách có thể được sử dụng như một cuốn từ điển Kanji, giúp tra cứu tiện lợi do cách sắp xếp chữ và từ hết sức khoa học.',
        itemInCart: false
    },
    {
        id : 12,
        img : '/img/Truyện/anh1.jpg',
        name : 'Doraemon Movie Story',
        price : 32.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 13,
        img : '/img/Truyện/anh2.jpg',
        name : 'Dragon Ball - 7 Viên Ngọc Rồng',
        price : 23.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 14,
        img : '/img/Truyện/anh3.jpg',
        name : 'One Piece',
        price : 24.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 15,
        img : '/img/Truyện/anh4.jpg',
        name : 'Your Name',
        price : 72.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },


];

let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var spec = document.getElementById('spec');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
var home = document.getElementById('logo');
//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;
// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Giá : '+data[getId].price + '.000 VND ';
    youSave.innerHTML= 'Tiết Kiệm : (' + data[getId].save + '.000 VND)';
    spec.innerHTML ='*Mô tả: '+ data[getId].spec;
}
// back main
back.addEventListener('click',refreshPage)
//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){}
//home
var index=1;
changeimage = function(){
    var imgs = ["/img/home4.jpg","/img/home3.jpg","/img/home2.jpg","/img/home1.jpg"];
    document.getElementById('imga').src = imgs[index];
    index++;
    if(index==4){
        index=0;
    }
}
setInterval(changeimage,2000);
