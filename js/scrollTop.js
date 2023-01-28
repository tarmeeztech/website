let scrollUp = document.querySelector('.top');

window.onscroll = function() {
    this.scrollY >= 1000? scrollUp.classList.add('show'): scrollUp.classList.remove('show');
}
scrollUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};