const menu = document.querySelector(".menu-overlay");
const menuBar = document.querySelector(".menu-bar")
const menuButton = document.querySelector(".menu-button");
const sections = document.querySelectorAll("section");
const sectOffsets = [];

sections.forEach((section) =>
{
    let offset = section.offsetTop;
    sectOffsets.push(offset);
});


let prevY = window.scrollY;

function toggleMenu()
{
    menu.classList.toggle("hidden");
    menuButton.classList.toggle("menu-active");
}

// hides menu when you scroll down, reveals when scroll up
function toggleMenuBar()
{
    const isMenu = menu.classList.contains("hidden");

    let newY = window.scrollY;

    if (isMenu)
    {
        if (newY > prevY)
        {
            menuBar.classList.add("hide-up");
            console.log("scrolled down");
        } else if (newY < prevY)
        {
            menuBar.classList.remove("hide-up");
            console.log("scrolled up");
        }

    }
    prevY = newY;
}

function toggleBackground()
{
    const body = document.querySelector("body");
    body.classList.toggle("bg-black");
}

window.addEventListener("scroll", toggleMenuBar)
menuButton.addEventListener("click", toggleMenu)

