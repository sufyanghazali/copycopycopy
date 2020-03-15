const navlinks = document.querySelectorAll(".navlink");

// navlinks.forEach(link =>
// {
//     const letters = link.querySelectorAll(".navlink__letter");
//     letters.forEach(addDelay);

//     function addDelay(element, index)
//     {
//         element.style.animationDelay = `${delay * index}s`;
//     }
// });


navlinks.forEach(link =>
{
    const letters = link.querySelectorAll(".navlink__letter");
    const duration = 0.4; // here instead of stylesheet
    const delay = .03;

    letters.forEach(setLetterDelay);

    link.addEventListener("mouseenter", () =>
    {
        console.log("fired");
        letters.forEach((letter, index) =>
        {
            letter.classList.add("moveup");
            // remove animation after being played
            setTimeout(() =>
            {
                letter.classList.remove("moveup");
            }, (duration + delay * index) * 1000);
        });
    });


    function setLetterDelay(element, index)
    {
        element.style.animationDelay = `${delay * index}s`;
        element.style.animationDuration = `${duration}s`;
    }   
});