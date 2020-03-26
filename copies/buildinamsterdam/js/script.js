const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel__track");
const slides = Array.from(track.children);

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
    slide.style.left = `${i * width}px`;
}


function initialize()
{
    setSlideWidth
}