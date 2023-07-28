const navEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

navEmail.addEventListener('click',tooleDesktopMenu);
menuHamIcon.addEventListener('click',tooleMobileMenu);

function tooleDesktopMenu(){
desktopMenu.classList.toggle('inactive');
}
function tooleMobileMenu(){
mobileMenu.classList.toggle('inactive');
}