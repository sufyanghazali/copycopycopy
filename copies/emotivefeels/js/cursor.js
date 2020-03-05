const cursor = document.querySelector(".cursor");
const wrapper = document.querySelector(".emotion__wrapper");
const rect = cursor.getBoundingClientRect();
const cursorOffset = rect.height / 2;


let prevX = window.scrollX;
let prevY = window.scrollY;

wrapper.addEventListener("mousemove", follow);
// window.addEventListener("scroll", onscroll);

function follow(e)
{
    let x = e.pageX;
    let y = e.pageY;
    console.log(cursorOffset);
    updateCursor(x, y, 100);
}

function onscroll(e)
{
    let newY = window.scrollY;
    const cursorY = Number(cursor.style.top.slice(0, -2));
    const delta = newY - prevY;
    cursor.style.top = `${delta + cursorY - cursorOffset}px`;
    prevY = newY;
    
}


function updateCursor(x, y, xOffset)
{
    cursor.style.left = `${x + xOffset}px`;
    cursor.style.top = `${y - cursorOffset}px`;
}