const menu = document.querySelector(".menu-overlay");
const menuBar = document.querySelector(".menu-bar")
const menuButton = document.querySelector(".menu-button");
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

window.addEventListener("scroll", toggleMenuBar)
menuButton.addEventListener("click", toggleMenu)

