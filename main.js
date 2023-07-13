const btnMobileMenu = document.querySelector(".mobile_icon");
const mobileMenu = document.querySelector('.wrapper_header');
const mobileMenuContent = document.querySelector('.cont_header');
const mobileMenuNav = document.querySelector('.nav');

const mobileMenuNavItem = document.querySelector('.list_menu');




btnMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('show_menu');
    mobileMenuContent.classList.toggle('show_cont_mobile');
    mobileMenuNav.classList.toggle('show_cont_mobile');
})

mobileMenuNavItem.addEventListener('click', () => {
    mobileMenu.classList.toggle('show_menu');
    mobileMenuContent.classList.toggle('show_cont_mobile');
    mobileMenuNav.classList.toggle('show_cont_mobile');
})