
const togleBtn = document.querySelector('.togle-button');
const menu = document.querySelector('.menu');
const togleClose = document.querySelector('.togle-close')
let flag = false;

menu.classList.remove('togle-menu')

togleBtn.onclick = () => {
    menu.classList.toggle('togle-menu')
}

const photo = document.querySelectorAll('img');

window.onload =  console.log(photo);


