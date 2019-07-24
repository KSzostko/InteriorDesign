"use strict";

const menuList = document.querySelector('.navigation__list--js');
const btnMenu = document.querySelector('.navigation__button--js');

btnMenu.addEventListener('click', () => {
    menuList.classList.toggle('navigation__list--visible');
})