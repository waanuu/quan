var inputEmail = document.getElementById('Email');
            
var inputPassword = document.getElementById('Password');
var formLogin = document.getElementById('form_login');
if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);  
}
else{
    formLogin.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(e){
    e.preventDefault();
    if (inputEmail.value === ""||inputPassword.value === "")
    {
        alert('Xin đừng để trống !!! ');
    }
    else{
        const user = JSON.parse(localStorage.getItem("userInfo"));
        console.log(1111, user);
        if(
            user.email === inputEmail.value &&
            user.password === inputPassword.value
        ){
            alert('Đăng Nhập đã hoàn thành !!! ');
            window.location.href = "/view/user.html";
        }
        else{
            alert("Đăng Nhập thất bại !!!");
        }
    }
}