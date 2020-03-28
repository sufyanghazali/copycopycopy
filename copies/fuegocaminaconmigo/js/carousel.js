/***************************************************
 *  Functionality:
 *  - Buttons make the carousel move corresponding directions
 *  - On resize, moves track to correct position
 *  - Clicking on dots in 
 *  
 *  
 *
 **/

const carousel = document.querySelector(".carousel");
const carouselNav = document.querySelector(".carousel-nav");
const track = carousel.querySelector(".carousel-track");
const images = Array.from(track.children);
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const indicators = [];

let slideWidth;


/**********************************************************************
 * 
 * Create carousel navigation. Done with JS in case more images were to be added
 * 
 *********************************************************************/

function insertCarouselNav()
{
    for (let i = 0; i < images.length; i++)
    {
        const indicator = document.createElement("div");
        const indicatorBar = document.createElement("div");
        indicator.className = "carousel-indicator";
        indicatorBar.className = "indicator-bar";
        indicator.appendChild(indicatorBar);
        carouselNav.appendChild(indicator);
        indicators[i] = indicator; // add indicator to array
    }
    carouselNav.children[0].classList.add("active");
}

/**********************************************************************
 * 
 * Set slide width
 * 
 *********************************************************************/

function getSlideWidth()
{
    return images[0].getBoundingClientRect().width;
}

function setSlideWidth()
{
    slideWidth = getSlideWidth();
}

/**********************************************************************
 * 
 * Set positions for images
 * 
 *********************************************************************/

function setSlidePosition(image, i)
{
    image.style.left = `${i * slideWidth}px`;
}

/**********************************************************************
 * 
 * Event listeners for buttons
 * 
 *********************************************************************/

function getActiveIndex()
{
    return images.findIndex(image => image.classList.contains("active"));
}

function moveToTargetSlide(index)
{
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function removeActive()
{
    const actives = document.querySelectorAll(".active");
    actives.forEach(active =>
    {
        active.classList.remove("active");
    });
}

function addActive(index)
{
    images[index].classList.add("active");
    indicators[index].classList.add("active");
}

function updateActive(index)
{
    removeActive();
    addActive(index);
}

function updateTrack(index)
{
    moveToTargetSlide(index);
    updateActive(index);
}

function navSlide(e)
{
    const active = getActiveIndex();
    const target = e.target.closest(".carousel-indicator");
    const targetIndex = indicators.indexOf(target);

    if (targetIndex >= 0 && targetIndex != active)
    {
        console.log("fired");
        updateTrack(targetIndex);
    }
}

function nextSlide()
{
    const targetIndex = getActiveIndex() + 1;
    console.log(targetIndex);
    if (targetIndex < images.length)
    {
        updateTrack(targetIndex);
    }
}

function prevSlide()
{
    const targetIndex = getActiveIndex() - 1;

    if (targetIndex >= 0)
    {
        updateTrack(targetIndex);
    }
}

function initialize()
{
    setSlideWidth();
    images.forEach(setSlidePosition);
}

leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);
carouselNav.addEventListener("click", navSlide);

window.onload = function ()
{
    insertCarouselNav();
    initialize();
}
window.onresize = function ()
{
    console.log("resized");
    initialize();
    moveToTargetSlide(getActiveIndex());
    console.log(getActiveIndex());
}