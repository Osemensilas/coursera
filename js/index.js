const hamburger = document.querySelector(".hamburger-container");
const cancel = document.querySelector(".cancel-container");
const nav = document.querySelector(".header-nav-container");

hamburger.addEventListener("click", function() {
    nav.classList.add("active");
    cancel.classList.add("active");
});

cancel.addEventListener("click", function() {
    nav.classList.remove("active");
    cancel.classList.remove("active");
});

//Client testimonial

const clients = document.querySelectorAll(".client-testimonial");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");

let activeNum = 0;

let initialActiveCLient = clients[0];

initialActiveCLient.classList.add("active");

moveLeft.addEventListener("click", function() {
    activeNum--;

    initialActiveCLient.classList.remove("active");

    if (activeNum < 0) {
        activeNum = 2;
        clients[0].classList.remove("active");
    }

    clients[activeNum].classList.add("active");
    clients[activeNum + 1].classList.remove("active");
});

moveRight.addEventListener("click", function() {
    activeNum++;

    initialActiveCLient.classList.remove("active");

    if (activeNum > 2) {
        activeNum = 0;
        clients[2].classList.remove("active");
    }

    clients[activeNum].classList.add("active");
    clients[activeNum - 1].classList.remove("active");
});