const data= [
    {
        id : 0,
        img : '/img/Truyện/anh1.jpg',
        name : 'Doraemon Movie Story',
        borrow: 12.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec: 'Câu chuyện bắt đầu khi Nobita tìm thấy một hòn đảo hình lưỡi liềm trên trời mây. Ở nơi đó, tất cả đều hoàn hảo… đến mức cậu nhóc mê ngủ ngày như Nobita cũng có thể trở thành một thần đồng toán học, một siêu sao thể thao! Doraemon và nhóm bạn đã cùng sử dụng một món bảo bối độc đáo chưa từng xuất hiện trước đây để đến với vương quốc tuyệt vời này. Cùng với những người bạn ở đây, đặc biệt là chàng robot mèo Sonya, cả hội đã có chuyến hành trình tới vương quốc trên mây tuyệt vời… cho đến khi những bí mật đằng sau vùng đất lý tưởng này được hé lộ! ',
    },
    {
        id : 1,
        img : '/img/Truyện/anh2.jpg',
        name : 'Dragon Ball - 7 Viên Ngọc Rồng',
        borrow: 13.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Bộ truyện kể về một cậu bé đuôi khỉ tên là Son Goku sống một mình trong chốn rừng sâu. Cậu rất coi trọng viên ngọc kỉ vật quý giá ông nội để lại trước khi mất. Một ngày nọ, cậu vô tình gặp một cô gái kì lạ tên là Bulma đang trên đường tìm kiếm 7 viên ngọc rồng truyền thuyết. Bulma chỉ cho Son Goku thấy rằng, viên ngọc gia bảo của cậu chính là viên ngọc 4 sao, 1 trong 7 viên ngọc rồng mà cô đang tìm kiếm, còn rủ Son Goku tham gia phiêu lưu cùng với mình nữa. Chẳng mảy may suy nghĩ, Goku vui vẻ nhận lời và kể từ đó, cậu nhóc chính thức bước vào một hành trình vĩ đại, không đơn giản chỉ là tìm ...',
        itemInCart: false
    },
    {
        id : 2,
        img : '/img/Truyện/anh3.jpg',
        name : 'One Piece',
        borrow: 14.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Trận chiến khốc liệt ở Tổng bộ Hải quân dần đi tới hồi kết. Số phận của Ace, Luffy cùng toàn bộ những kẻ tham gia vào cuộc chiến này rồi sẽ ra sao!!? Một kết cục không ai ngờ tới vẫn còn ở phía trước!!',
        itemInCart: false
    },
    {
        id : 3,
        img : '/img/Truyện/anh4.jpg',
        name : 'Your Name',
        borrow: 15.000,
        delievery : 'Từ 3 đến 4 Ngày',
        spec:'Mitsuha là nữ sinh trung học sống ở vùng quê hẻo lánh. Một ngày nọ, cô mơ thấy mình ở Tokyo trong một căn phòng xa lạ, biến thành con trai, gặp những người bạn chưa từng quen biết.Trong khi đó ở một nơi khác, Taki, một nam sinh trung học người Tokyo lại mơ thấy mình biến thành con gái, sống ở vùng quê hẻo lánh.Cuối cùng hai người họ nhận ra đang bị hoán đổi với nhau qua giấc mơ. Kể từ lúc hai con người xa lạ ấy gặp nhau, bánh xe số phận bắt đầu chuyển động.',
        itemInCart: false
    },
    {
        id : 4,
        img : '/img/Truyện/a5.jpg',
        name : 'Mộ Đom Đóm',
        borrow: 16.000,
        
        delievery : 'Tu 3 - 4 Ngagy',
        spec:'',
        itemInCart: false
    },
    {
        id : 5,
        img : '/img/Sách Khoa Học/anh1.jpg',
        name : 'Khoa Học Khám Phá - Stephen Hawking ',
        borrow: 17.000,
        
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 6,
        img : '/img/Sách Tiếng Anhh/anh3.jpg',
        name : 'Tự học tiếng Đức cho người mới bắt đầu',
        borrow: 18.000,
       
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    {
        id : 7,
        img : '/img/Sách Tiếng Anhh/anh1.jpg',
        name : 'Luyện kỹ năng đọc hiểu tiếng Anh ',
        borrow: 19.000,
       
        delievery : 'Tu 3 - 4 Ngagy',
        itemInCart: false
    },
    
];

let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailBorrow = document.getElementById('detail-borrow')
var spec = document.getElementById('spec');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)
var borrow = document.getElementById('borrow');

//click events to add items to cart from details page
borrow.addEventListener('click',()=>addToCart(getId))

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
    detailBorrow.innerHTML=' Giá Mượn : '+data[getId].borrow + '.000 VND';
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
            if('click',()=>borrow){
                totalAmount = totalAmount + cart.borrow ;
            }
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
            listPay.innerHTML = cart.borrow + '.000 VND';
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
setInterval(changeimage,2000);
const btn = document.querySelector(".n");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }
        return false;
      }