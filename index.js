const typed = new Typed('.multiple-text',{
    strings: ['FullStack Developer','Forntend Developer','Backend developer','UI/UX Desinger'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");   

menu.onclick =  () => {
    console.log("im clicked");
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}      