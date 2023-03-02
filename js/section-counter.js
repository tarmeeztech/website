let counters = document.querySelectorAll('.counter-item .counter');

let speed = 200;

counters.forEach((counter, index) => {
    function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerHTML;
        const incPerCount = targetNumber / speed;
        if(initialNumber < targetNumber) {
            counter.innerHTML = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 40);
        } else {
            counter.innerText = targetNumber;
        }
        console.log(targetNumber);
    }
    UpdateCounter();
})