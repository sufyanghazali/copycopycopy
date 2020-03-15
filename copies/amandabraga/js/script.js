const navlinks = document.querySelectorAll(".navlink");

navlinks.forEach(link =>
{
    const letters = link.querySelectorAll(".navlink__letter");
    const duration = .7;
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

/********************************************************************
 * 
 *  CURSOR
 * 
 ********************************************************************/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", cursorFollow);

function cursorFollow(e)
{
    let xPos = e.pageX;
    let yPos = e.pageY;

    cursor.style.top = `${yPos}px`;
    cursor.style.left = `${xPos}px`;
}