function scrollAppear()
{
    const introText = document.querySelector(".intro-text");
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight/1.2;

    console.log(introPosition);
    console.log(screenPosition);

    if (introPosition < screenPosition)
    {
        introText.classList.add("intro-appear");
        console.log("fired");
    }
}

window.addEventListener("scroll", scrollAppear);
