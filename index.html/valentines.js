
const nextBtn = document.getElementById("next-btn");
const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("cardTwo")

nextBtn.addEventListener('click', () => {
    cardOne.classList.add('active1');
    cardTwo.classList.add('active2')
});

const cardNo = document.getElementById("card-no");

function btnNo(){

    cardNo.classList.add("active3")
    cardTwo.classList.remove("active2");
}

const btnAgain = document.getElementById("btn-again");

btnAgain.addEventListener("click", () => {
    cardNo.classList.remove("active3");
    cardTwo.classList.add("active2");
});

const cardYes = document.getElementById("card-yes");

function btnYes(){

    cardYes.classList.add("active4");
    cardTwo.classList.remove("active2");
}

const btnThankyou = document.getElementById("btn-thankyou");

btnThankyou.addEventListener("click", () => {
    cardYes.classList.remove("active4");
    cardTwo.classList.add("active2");
});