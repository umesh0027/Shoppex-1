const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const loginLink = document.querySelector('.login-link');
const home = document.querySelector('.home');
const myCart = document.querySelector('.myCart');

myCart.addEventListener('click', () =>{
    alert("Login to continue!!!")
})
loginLink.addEventListener("click", () => {
    window.location.href = "../Login/login.html";
})

const fullName = document.querySelector('#signup-name');
const email = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const confirmPassword = document.querySelector('#signup-confirm-password');
const signupButton = document.querySelector('.signup-button');
const checkbox = document.querySelector('#checkbox');

let users = [];
localStorage.getItem('users') ? users = JSON.parse(localStorage.getItem('users')) : [];

signupButton.addEventListener('click',(e)=>{
    e.preventDefault();
    
    // Name Validation
    const nameArr = fullName.value.split(" ");
    if(nameArr.length<1){
        alert('Please enter your name and surname!!!');
        return false;
    }

    ///Email Validation
    if(email.value.indexOf('@')<2){
        alert("Please enter valid email address!!!");
        return false;
    }
    else if(email.value.lastIndexOf('.')!==email.value.length-4 && email.value.lastIndexOf('.')!==email.value.length-3){
        alert("Please enter valid email address!!!");
        return false;
    }

    let sameEmail = false;
    let userArr = []
    if(localStorage.getItem('users')){
        userArr = JSON.parse(localStorage.getItem('users'))
        if(userArr.filter(user => user.email==email.value).length!=0){
            alert('Email already exists!!! Try another email address!!!');
            return false;
        }
    }

    //Password Validation
    if(!password.value.match(/[a-z]/)){
        alert('Password must contains at least one lower case letter!!!');
        return false;
    }
    if(!password.value.match(/[A-Z]/)){
        alert('Password must contains at least one upper case letter!!!');
        return false;
    }
    if(!password.value.match(/[0-9]/)){
        alert('Password must contains at least number!!!');
        return false;
    }
    if(!password.value.match(/[!/@/#/$/%/^/&/*/(/)/+/_/</>/]/)){
        alert('Password must contains at least one symbol!!!');
        return false;
    }
    if(password.value.length<8 || password.value.length>16){
        alert('Password length must be between 8 and 16 characters!!!');
        return false;
    }
    
    //Confirm password validation
    if(password.value!==confirmPassword.value){
        alert("Password and Confirm Password should be same!!!");
    }
    if(!checkbox.checked){
        alert('Please accept the terms and conditions to continue!!!');
    }
    else{
        const userData = {
            name : fullName.value,
            email : email.value,
            password : password.value,
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "../Login/login.html";
        alert('Signed up successfully!!! Please login to continue!!!');
    }
})
if(window.localStorage.getItem('currentUser')){
    window.location.href = '../Landingpage/landingpage.html';
}

// Script for navigation bar
const bar= document.getElementById('bar')
const close= document.getElementById('close')

const nav=document.getElementById('navbar');
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
