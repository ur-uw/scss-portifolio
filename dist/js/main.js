//select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');

const navItems=document.querySelectorAll('.nav-item');


//Set Initial State Of Menu

let showMenu=false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('show');
        }
        //Set Menu State
        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('show');
        }
        //Set Menu State
        showMenu = false;
    }
}