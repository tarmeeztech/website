const btnSend = document.body.querySelector(".btn-send");
const spinner = document.body.querySelector(".fa-circle-notch");
const check = document.body.querySelector(".fa-circle-check");
const btnText = document.body.querySelector(".btn-text");

btnSend.addEventListener('click', () => {
    btnSend.style.cursor = "wait";
    btnText.textContent = "";
    btnText.style.margin = 0;
    check.style.display = "block";
    check.classList.replace("fa-circle-check", "fa-circle-notch");

    setTimeout(() => {
        btnSend.style.pointerEvents = "none";
        btnText.textContent = "done";

        check.classList.replace("fa-circle-notch", "fa-circle-check");
        check.classList.add("checked");
        btnText.style = "margin-left: 5px";
    }, 1000)
})