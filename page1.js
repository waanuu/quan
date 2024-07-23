const data= [
    {
        id : 0,
        img : '/img/page1/a1.jpg',
        name : 'Ngày Hôm Qua Mắt Biếc',
        price : 48.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec: 'Ngày Hôm Qua Mắt Biếc là tập hợp những câu chuyện thiếu nhi được viết theo lối trải nghiệm hồi ức, ở đó, người ta liên tưởng đến một dòng sông êm đềm. Từng khúc sông sẽ mang đến một câu chuyện riêng biệt. Mà trong mỗi câu chuyện đó sẽ là cả một thế giới đầy màu sắc về chuyện trường, chuyện lớp, chuyện gia đình, chuyện bạn bè, những giận hờn, xung đột, lỗi lầm…',
        itemInCart: false
    },
    {
        id : 1,
        img : '/img/page1/a2.jpg',
        name : 'Mắt Biếc - Nguyễn Nhật Ánh',
        price : 110.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Tác phẩm này cũng đã được dịch giả Kato Sakae dịch sang tiếng Nhật để giới thiệu với độc giả Nhật Bản. “Tôi gửi tình yêu cho mùa hè, nhưng mùa hè không giữ nổi. Mùa hè chỉ biết ra hoa, phượng đỏ sân trường và tiếng ve nỉ non trong lá. Mùa hè ngây ngô, giống như tôi vậy. Nó chẳng làm được những điều tôi ký thác. Nó để Hà Lan đốt tôi, đốt rụi. Trái tim tôi cháy thành tro, rơi vãi trên đường về.”',
        itemInCart: false
    },
    {
        id : 2,
        img : '/img/page1/a3.jpg',
        name : 'Đôi Mắt - Nam Cao',
        price : 49.000 ,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Đôi Mắt phê phán cách nhìn đời, nhìn người lệch lạc, khinh miệt, lối sống ích kỷ và bàng quan của một trí thức đối với kháng chiến, đồng thời biểu dương một lớp trí thức, văn nghệ sĩ có một cái tâm đẹp, gắn bó với nhân dân, tích cực tham gia sự nghiệp cách mạng của dân tộc. “Đôi mắt” thể hiện cách nhìn và thái độ của người trí thức đối với nông dân và kháng chiến',
        itemInCart: false
    },
    {
        id : 3,
        img : '/img/page1/a4.jpg',
        name : 'Sáng Mắt - José Saramago',
        price : 100.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Khoảng ba giờ chiều, mưa cuối cùng cũng tạnh. Đúng bốn giờ, cử tri đổ xô đến các điểm bỏ phiếu, như thể họ đã được lệnh để xuất hiện cùng lúc, nhưng khi các lá phiếu được kiểm đếm, hơn 70 phần trăm là phiếu trắng. Các công dân nổi loạn. Tình trạng khẩn cấp được ban bố. Nhưng có phải các nhà chức trách đã hành động quá vội vàng? Hay thậm chí là mù quáng? Những lá phiếu trắng này gợi lên những ký ức khủng khiếp về bệnh dịch mù lòa đã ập đến thành phố bốn năm trước, và về một người phụ nữ duy nhất vẫn giữ được thị giác của mình. Có thể nào chính bà ấy là người đứng đằng sau những lá phiếu đó không?',
        itemInCart: false
    },
    {
        id : 4,
        img : '/img/page1/a5.jpg',
        name : 'Con Chim Xanh Biếc Bay Về',
        price : 112.000,
        save : 25.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Con Chim Xanh Biếc Bay Về Không giống như những tác phẩm trước đây lấy bối cảnh vùng quê miền Trung đầy ắp những hoài niệm tuổi thơ dung dị, trong trẻo với các nhân vật ở độ tuổi dậy thì, trong quyển sách mới lần này nhà văn Nguyễn Nhật Ánh lấy bối cảnh chính là Sài Gòn – Thành phố Hồ Chí Minh nơi tác giả sinh sống (như là một sự đền đáp ân tình với mảnh đất miền Nam). Các nhân vật chính trong truyện cũng “lớn” hơn, với những câu chuyện mưu sinh lập nghiệp lắm gian nan thử thách của các sinh viên trẻ đầy hoài bão. Tất nhiên không thể thiếu những câu chuyện tình cảm động, kịch tính và bất ngờ khiến bạn đọc ngẩn ngơ, cười ra nước mắt.',
        itemInCart: false
    },
    {
        id : 5,
        img : '/img/page1/a6.jpg',
        name : 'Trên Đồi, Mở Mắt Và Mơ',
        price : 70.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Làng quê thay đổi từng ngày từng giờ, dấu tích xưa cũ dần nhường chỗ cho các công trình và tiện nghi của cuộc sống hiện đại. Thế nhưng trong mắt cậu bé Thành, quê nội vẫn là xứ sở thần tiên, nơi chốn tuyệt diệu để trở về. Mùa Hè đến, thỏa lòng mong ngóng bấy lâu, Thành và em gái được bố mẹ cho về thăm ông bà nội. Các trò chơi kì lạ với hội bạn thân, những khám phá đầy hào hứng mà cũng lắng đọng cảm xúc mở ra từ đây. Ngày Hè của các cậu bé, cô bé hiện lên thật sống động, tràn ngập tiếng cười và lấp lánh cả những hạt nước mắt.Không chỉ mở ra nhiều không gian kì thú trong mắt trẻ thơ, mùa Hè của cậu bé Thành cùng các bạn còn là những bước chân tiến gần đến với những con người, những cảnh đời đặc biệt. Để từ đó, các bạn nhỏ hiểu hơn cuộc sống, yêu hơn những con người đang ở quanh mình.',
        itemInCart: false
    },
    {
        id : 6,
        img : '/img/page1/a7.jpg',
        name : 'Hãy nhắm mắt khi anh đến',
        price : 97.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Hãy nhắm mắt khi anh đến chứa đủ những yếu tố tình cảm, trinh thám, đôi lúc làm bạn ám ảnh với thủ đoạn giết người tàn nhẫn như phim kinh dị nhưng đôi lúc lại khiến bạn cảm thấy ấm áp với khoảnh khắc yên bình, vui vẻ của những nhân vật. Xuyên suốt câu chuyện còn là quá trình đấu tranh với cái ác, cái xấu. Quá trình đó có đau thương, có mất mát, hi sinh nhưng những người hùng thầm lặng ấy vẫn không bao giờ bỏ cuộc, luôn chiến đấu hết mình để bảo vệ sự yên bình của xã hội.',
        itemInCart: false
    },
    {
        id : 7,
        img : '/img/page1/a8.jpg',
        name : 'Hai Mươi Tư Con Mắt',
        price : 1950.000,
        save : 25.000,
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'Hai Mươi Tư Con Mắt - Bản Phổ Thông - Bìa Cứng Hai mươi tư con mắt là câu chuyện xoay quanh tuổi trẻ của cô giáo Ooishi đến khi cô già đi và trở lại ngôi trường nơi cô từng gắn bó và tâm huyết từ ngày đầu đến dạy lớp học đầu tiên có 12 học trò. Không gian vùng biển đảo Seto yên bình cùng người dân lao động chăm chỉ và những đứa trẻ thuần khiết trong thoáng chốc bị xáo trộn bởi sự hiện diện của cô giáo - một modern girl theo lời người dân bàn tán. Cô giáo được tụi trẻ đặt cho biệt danh Hòn Đá Nhỏ đã nhanh chóng chiếm được tình cảm của người dân nhờ lòng nhiệt thành và tình yêu thương cao cả dành cho những đứa trẻ phải sống trong hoàn cảnh thiếu thốn. Cuốn sách mang đến giá trị hiện thực và nhân văn sâu sắc về tình cô trò thiêng liêng, trở thành một trong những tiểu thuyết về đề tài phản chiến hay nhất của văn học Nhật',
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
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})


//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Giá: '+data[getId].price + '.000 VND ';
    youSave.innerHTML= 'Tiết Kiệm : (' + data[getId].save + '.000 VND)';
    spec.innerHTML ='*Mô tả: '+ data[getId].spec;
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('Sản Phẩm Đã Được Thêm Vào Giỏ Hàng')

    }
    else{
        alert('Sản Phẩm Đã Có Trong Cửa Hàng')
    }
    data[id].itemInCart= true
}

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
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price ;
            totalSaving = totalSaving + cart.save ;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price + '.000 VND';
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Tổng Tiền :  ' + totalAmount +'.000 VND';
        document.getElementById('total-items').innerHTML = 'Tổng Mặt hàng : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'Bạn Đã Tiết Kiệm :' + totalSaving +'.000 VND';
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}
//home
