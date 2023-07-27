const navEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

navEmail.addEventListener('click',tooleDesktopMenu);

function tooleDesktopMenu(){
desktopMenu.classList.toggle('inactive');
}