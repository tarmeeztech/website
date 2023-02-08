const accordion = document.querySelectorAll('.content-box');


accordion.forEach((item, index) => {
    item.addEventListener('click', () => {
        for(i = 0; i < accordion.length; i++) {
            if(accordion[i].className.includes('active') && item != accordion[i])
                accordion[i].classList.toggle('active');
        }
        item.classList.toggle('active');
    })
})

