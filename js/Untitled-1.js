let overlay = document.querySelector(".overlay");
let btn = document.querySelector(".menu-icon");
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
});
overlay.addEventListener("click", function () {
    btn.click();
})

let up = document.querySelector(".up");
let upi = document.querySelector(".up i");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let angle = (scrollTop / height * 360);
    if (angle > 360) angle = 360;
    up.style.background = `conic-gradient(white ${angle}deg, transparent 0deg)`;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        upi.classList.add(`anim`)
    } else {
        upi.classList.remove(`anim`)
    }
});

window.onscroll = function () {
    if (window.scrollY >= 500) {
        up.style.opacity = 1;
        up.style.transform = "scale(1)";
    } else {
        up.style.transform = "scale(0)";
    }
};

const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 5000,
    },
    speed: 500,
    slidesPerView: "2",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadow: true,
    }
});

let countDownDate = new Date("Jun 23, 2025 11:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let weeks = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".weeks span").innerHTML = weeks < 10 ? `0${weeks}` : weeks;
    document.querySelector(".days span").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hrs span").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".min span").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".sec span").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);