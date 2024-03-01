let up = document.querySelector(".up");
let nums = document.querySelectorAll(".l2info1 .l2onfo1n1");
let section = document.querySelector(".landing2");
let arrows = document.querySelectorAll(".arrows .arrow"),
    firstrow = document.querySelector(".r2"),
    mainrow = document.querySelector(".r1"),
    firstrowWidth = firstrow.clientWidth;
let mainchildren = [...mainrow.children];
let mainPerView = Math.round(mainrow.offsetWidth / firstrowWidth);
mainchildren.slice(-mainPerView).reverse().forEach(main => {
    mainrow.insertAdjacentHTML("afterbegin", main.outerHTML);
});
mainchildren.slice(0, mainPerView).forEach(main => {
    mainrow.insertAdjacentHTML("beforeend", main.outerHTML);
});
arrows.forEach(icon => {
    icon.addEventListener("click", () => {
        mainrow.scrollLeft += icon.id == `left` ? -firstrowWidth : firstrowWidth;
    });
});


let scrollPreviousSection = () => {
    let currentScrollPos = mainrow.scrollLeft;

    let currentIndex = Math.round(currentScrollPos / mainrow.offsetWidth);

    let previousIndex = currentIndex - 1;
    let previousSectionPos = previousIndex * mainrow.offsetWidth;

    mainrow.scrollTo({
        left: previousSectionPos + 30,
        behavior: 'smooth'
    });
};

let intervalId = setInterval(scrollPreviousSection, 5000);

let stopAutoScrolling = () => {
    clearInterval(intervalId);
};

let resumeAutoScrolling = () => {
    intervalId = setInterval(scrollPreviousSection, 5000);
};

mainrow.addEventListener("mouseenter", stopAutoScrolling);
arrows.forEach(arrow => {
    arrow.addEventListener("mouseenter", stopAutoScrolling);
});

mainrow.addEventListener("mouseleave", resumeAutoScrolling);
arrows.forEach(arrow => {
    arrow.addEventListener("mouseleave", resumeAutoScrolling);
});




// let isdragstart = false, prevpagex, prevscrollleft;

// let dragstart = (e) => {
//     isdragstart = true;
//     prevpagex = e.pageX;
//     prevscrollleft = mainrow.scrollLeft;
// }

// let dragging = (e) => {
//     mainrow.scrollLeft = e.pageX;
// }

// let dragstop = () => {
//     isdragstart = false;
// }

// mainrow.addEventListener("mousedown", dragstart);
// mainrow.addEventListener("mousemove", dragging);
// mainrow.addEventListener("mouseup", dragstop);

// let isMouseDown = false;
// let initialX;
// let scrollLeft;
// let prevScrollPos = 0;

// let dragstart = (e) => {
//     isMouseDown = true;
//     initialX = (e.pageX || e.touches[0].pageX) - mainrow.offsetLeft;
//     scrollLeft = mainrow.scrollLeft;
// }
// let dragging = (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     x = (e.pageX || e.touches[0].pageX) - mainrow.offsetLeft;
//     const walk = (x - initialX) * 2; // You can adjust the sensitivity by changing the multiplier
//     mainrow.scrollLeft = scrollLeft - walk;
// }
// let dragstop = () => {
//     isMouseDown = false;
// }
// mainrow.addEventListener("mousedown", dragstart);
// mainrow.addEventListener("touchstart", dragstart);
// mainrow.addEventListener("mousemove", dragging);
// mainrow.addEventListener("touchmove", dragging);
// mainrow.addEventListener("mouseup", dragstop);
// mainrow.addEventListener("touchend", dragstop);

let started = false;
window.onscroll = function () {
    if (window.scrollY >= 600) {
        up.style.opacity = 1;
        up.style.transform = "scale(1)";
    } else {
        up.style.transform = "scale(0)";
    }
    if (window.scrollY >= section.offsetTop - 250) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visibility", "visible");
            entry.target.style.animationDuration = "1s";
            entry.target.style.animationDelay = "0s";
            entry.target.style.animationName = "zoomInRight";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

var targets = document.querySelectorAll('.wow');
targets.forEach(function (target) {
    observer.observe(target);
});

let observer1 = new IntersectionObserver(function (entries1, observer1) {
    entries1.forEach(function (entry1) {
        if (entry1.isIntersecting) {
            entry1.target.style.cssText = "visibility: visible; animation-duration: 1s; animation-delay: 0s; animation-name: fadeInUp;";
            observer1.unobserve(entry1.target);
        }
    });
}, { threshold: 0 });

let targets1 = document.querySelectorAll('.wow1');
targets1.forEach(function (target1) {
    observer1.observe(target1);
});
