const scrollButton = document.querySelector(".salute__line--scrollDown");
const emotionWrapper = document.querySelector(".emotion__wrapper");

scrollButton.addEventListener("click", scrollTo)

function scrollTo()
{
    emotionWrapper.scrollIntoView({behavior:"smooth"});
}