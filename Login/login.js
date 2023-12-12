const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const signupLink = document.querySelector('.register-link');
const home = document.querySelector('.home');
const myCart = document.querySelector('.myCart');

signupLink.addEventListener("click", () => {
    window.location.href = "../Signup/signup.html";
})
home.addEventListener("click", () => {
    if (localStorage.getItem('currentUser')) {
        window.location.href = '../LandingPage/landingpage.html';
    }
    else {
        window.location.href = '../index.html';
    }
})

login.addEventListener("click", () => {
    window.location.href = "./login.html"
})

signup.addEventListener("click", () => {
    window.location.href = "../Signup/signup.html";
})

myCart.addEventListener('click', () => {
    alert("Login to continue!!!")
})

const email = document.querySelector('#login-email');
const loginSubmit = document.querySelector('.login-button');
const password = document.querySelector('#login-password');
const users = JSON.parse(localStorage.getItem('users'));
const currentUser = {};

loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let countEmail = 0;
    users.map(data => {
        if (data.email === email.value && data.password === password.value) {
            countEmail++;
            currentUser.email = data.email;
            currentUser.name = data.name;
            currentUser.password = data.password;
        }
        if (countEmail == 0) {
            alert("Invalid email or password!!!");
            return false;
        }
        else {
            currentUser.token = generateToken();
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = '../Landingpage/landingpage.html';
        }
    });

})
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../Landingpage/landingpage.html';
}
function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}

// Script for navigation bar
const bar= document.getElementById('bar')
const close= document.getElementById('close')

const nav=document.getElementById('navbar')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
