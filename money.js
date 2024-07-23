var inputname = document.getElementById('name');        
var inputphone = document.getElementById('phone');
var inputaddress = document.getElementById('address');
var formmoney = document.getElementById('form_money');
if(formmoney.attachEvent){
    formmoney.attachEvent('submit', onFormSubmit);  
}
else{
    formmoney.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(e){
    e.preventDefault();
    if (inputname.value === ""||inputphone.value === ""||inputaddress === "")
    {
        alert('Xin đừng để trống !!! ');
    }
    else{
            alert('Điền thông tin thành công !!! ');
            window.location.href = "/view/thanhtoan.html";
    }
}