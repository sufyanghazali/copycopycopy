const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel__track");
const slides = Array.from(track.children);
const numGroups = slides.length / 3;
const leftBtn = carousel.querySelector(".carousel__button--left");
const rightBtn = carousel.querySelector(".carousel__button--right");

let iGroup = 0; // keeps track of which group in focus in carousel 

/**
 *  
 *  Set slide width
 * 
 */

function getWidth(el)
{
    return el.getBoundingClientRect().width;
}

function setSlidePosition(slide, index, width) 
{
    slide.style.left = `${index * width}px`;
}

function moveTrack() 
{
    const browserWidth = window.innerWidth;
    iGroup++;
    if (iGroup < numGroups)
    {

        track.style.transform = `translateX(-${iGroup * browserWidth}px)`;
    }
}


function initialize()
{
    const slideWidth = getWidth(slides[0]);

    /* move slides into place */
    slides.forEach((slide, index) =>
    {
        setSlidePosition(slide, index, slideWidth);
    });
}

initialize();
rightBtn.addEventListener("click", moveTrack);