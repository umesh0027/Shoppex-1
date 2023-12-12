const card = document.querySelector('.card-wrapper');

fetch('https://fakestoreapi.com/products')
    .then(resolve => resolve.json())
    .then(data => {
        const idx = Math.abs(Math.floor(Math.random() * data.length-1));
        card.innerHTML = `
        <div class="card">
            <img class="image-top" src=${data[idx].image} alt="${data[idx].title}">
            <div class="card-body">
                <h5 class="card-title">${data[idx].title}</h5>
                <p class="card-text">&#36;${data[idx].price}</p>
                <p class="card-stock">Hurry up only ${data[idx].rating.count} items left!!!</p>
                <p class="card-rating">Ratings: ${data[idx].rating.rate} &#9733;</p>   
            </div>
            <button class='addCart'>Add to cart</button>
        </div>`;
        const addCart = document.querySelector('.addCart');
        addCart.addEventListener("click", () => {
            alert("Please login to continue!!");
        })
    })

const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const login2 = document.querySelector('#login');
const signup2 = document.querySelector('#signup');
const home = document.querySelector('.home');
const myCart = document.querySelector('.myCart');
myCart.addEventListener('click',()=>{
    alert('Please login to continue!!!')
})

login2.addEventListener("click", () => {
    window.location.href = "./Login/login.html";
})

signup2.addEventListener("click", () => {
    window.location.href = "./Signup/signup.html";
})

if(window.localStorage.getItem('currentUser')){
    window.location.href = '../Landingpage/landingpage.html';
}