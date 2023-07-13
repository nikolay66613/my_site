const btnMobileMenu = document.querySelector(".btn_menu");
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
    if(window.innerWidth <= 960){
        mobileMenu.classList.toggle('show_menu');
        mobileMenuContent.classList.toggle('show_cont_mobile');
        mobileMenuNav.classList.toggle('show_cont_mobile');
    }
})

// slider

const slider = document.querySelector('.project_list');
const itemSlider = Array.from(slider.children);

const btnPrevSlider = document.querySelector('.btn_left');
const btnNextSlider = document.querySelector('.btn_right');

let activeSlide = 0;

itemSlider[activeSlide].classList.add('show_slider');


btnNextSlider.addEventListener('click', () => {
    if(activeSlide < itemSlider.length - 1) {
        itemSlider[activeSlide].classList.remove('show_slider');
        activeSlide++;
        itemSlider[activeSlide].classList.add('show_slider');
    } else {
        itemSlider[activeSlide].classList.remove('show_slider');
        activeSlide = 0;
        itemSlider[activeSlide].classList.add('show_slider');
    }
})

btnPrevSlider.addEventListener('click', () => {
    if(activeSlide < itemSlider.length - 1) {
        itemSlider[activeSlide].classList.remove('show_slider');
        ++activeSlide;
        itemSlider[activeSlide].classList.add('show_slider');
    } else {
        itemSlider[activeSlide].classList.remove('show_slider');
        activeSlide = 0;
        itemSlider[activeSlide].classList.add('show_slider');
    }
})




