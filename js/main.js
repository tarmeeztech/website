// Change Language
const lang = document.querySelector('#current-lang');
const showLang = document.querySelector('.lnag-menu ul');
lang.addEventListener('click', () => {
    showLang.classList.toggle("active");
})

// Show Navbar (Mobile View) & Active Link
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('nav-link').forEach(
    e => e.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
}))

// background
// const background = document.querySelector('.background');
// const bar = document.querySelector('.hamburger');
// bar.addEventListener('click', () => {
//     background.classList.toggle('active');
// })

