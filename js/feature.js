let tabs = document.querySelectorAll('.tabs li');
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach(e => {
    e.addEventListener('click', function(e) {
        tabsArray.forEach(e => {
            e.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        divsArray.forEach(div => {
            div.style.display = 'none';
        });
        // Get Current Tab
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'flex';
    })
})