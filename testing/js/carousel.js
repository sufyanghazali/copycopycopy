const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button.right");
const prevButton = document.querySelector(".carousel-button.left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
let slideWidth;

setSlideWidth(); // Initialize slideWidth


function getSlideWidth() {
    return slides[0].getBoundingClientRect().width;
}

function setSlideWidth() {
    console.log("fired");
    slideWidth = getSlideWidth();
}

const setSlidePosition = (slide, i) => {
    slide.style.left = i * slideWidth + "px";
}

const moveToSlide = (currentIndex, targetIndex) => {
    track.style.transform = `translateX(-${slides[targetIndex].style.left})`;

    slides[currentIndex].classList.remove("active");
    slides[targetIndex].classList.add("active");

    // when nav indicators clicked, move to that indicator
    dots[currentIndex].classList.remove("active");
    dots[targetIndex].classList.add("active");
}

// change slideWidth everytime window resizes
window.onresize = function () {
    setSlideWidth();
    slides.forEach(setSlidePosition);
}

// Initialize slide positions
slides.forEach(setSlidePosition);


//when i click left, move slides left
prevButton.addEventListener("click", e => {
    const current = track.querySelector(".active");
    const isEnd = current.previousElementSibling;

    const currentIndex = slides.findIndex((slide) => slide === current);
    const targetIndex = currentIndex - 1;

    if (isEnd) {
        moveToSlide(currentIndex, targetIndex);
    }
});

//when i click right, move slides right
nextButton.addEventListener("click", e => {
    const current = track.querySelector(".active");
    const isEnd = current.nextElementSibling;

    const currentIndex = slides.findIndex((slide) => slide === current);
    const targetIndex = currentIndex + 1;

    if (isEnd) {
        moveToSlide(currentIndex, targetIndex);
    }
});


dotsNav.addEventListener("click", e => {
    const current = track.querySelector(".active");
    const currentIndex = slides.findIndex((slide) => slide === current);

    const target = e.target.closest(".carousel-indicator");
    const targetIndex = dots.findIndex((dot) => dot === target);

        if (targetIndex >= 0) {
            moveToSlide(currentIndex, targetIndex);
        }
});