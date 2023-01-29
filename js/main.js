// Change Language
const lang = document.querySelector('#current-lang');
const showLang = document.querySelector('.lnag-menu ul');
const navbar = document.querySelector('.navbar');
lang.addEventListener('click', () => {
    showLang.classList.toggle("active");
})

// Show Navbar (Mobile View) & Active Link
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    const backgroundColor = window.getComputedStyle(navbar ,null).getPropertyValue('background-color'); 
    if(backgroundColor !== 'rgba(0, 0, 0, 0)') {
        navbar.style = "background-color: transparent";
    } else {
        navbar.style = "background-color: var(--color-white)";
    }
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link').forEach(
    e => e.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
}))
