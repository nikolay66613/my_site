const btnMobileMenu = document.querySelector(".mobile_icon");
const mobileMenu = document.querySelector('.wrapper_header');



btnMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('.activ_menu');
})