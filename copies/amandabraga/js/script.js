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
    const duration = 0.4; // here instead of style shee
    const delay = .03;

    letters.forEach(setLetters);

    function setLetters(element, index)
    {
        setAnimation();
        addDelay(element, index);
    }

    function setAnimation()
    {
        link.addEventListener("mouseenter", () =>
        {
            letters.forEach(letter =>
            {
                letter.classList.add("moveup");
                // remove animation after being played
                setTimeout(() =>
                {
                    letter.classList.remove("moveup");
                }, (duration + delay) * 1000);
            });
        });
    }


    // 
    function addDelay(element, index)
    {
        element.style.animationDelay = `${delay * index}s`;
        element.style.animationDuration = `${duration}s`;
    }
});