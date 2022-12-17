//sign up func
function signup(e){
    event.preventDefault()
    console.log('working');
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var user = {
        email: email,
        username: username,
        password: pass,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    window.location.href = "login.html";
}

function loginFunc(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result= document.getElementById('result');
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    
    if(data == null){
        result.innerHTML = 'Неправильный логин';
    }else if(username == data.username && pass == data.password){
        result.innerHTML = 'Вы вошли успешно';
        sessionStorage.setItem('sessionuser', data.username);
        window.location.href = "main.html";
    }else{
        result.innerHTML = 'Неправильный пароль';
    }
}
function logout(){
    sessionStorage.clear();
    window.location.href = "login.html";
}