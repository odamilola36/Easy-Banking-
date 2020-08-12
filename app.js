let button = document.querySelector("button");
let ham = document.querySelector("#ham");
let close = document.querySelector("#close");
let nav = document.querySelector(".nav-links")

ham.onclick = close.onclick = function(){
    ham.classList.toggle("hide-mobile");
    close.classList.toggle("hide-mobile");
    nav.classList.toggle("show-nav");
};

button.disabled = window.pageYOffset === 0 ? true : false;

button.onclick = function(){
    if(!button.disabled){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
