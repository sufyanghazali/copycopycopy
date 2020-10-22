const target = document.querySelector(".text");

let scrollY = window.scrollY;

const scrollChecker = num => {
    if (num < 0) {
        console.log("Should be scrolling up");
    } else if (num > 0) {
        console.log("Should be scrolling down");
    }
}


window.addEventListener("scroll", () => {
    let newX;

    // get x position value of text and convert to number
    let xPos = target.style.left;
    xPos = Number(xPos.substring(0, xPos.length - 2));

    // check whether scrolled up
    let currentY = window.scrollY; // get current scrollY;
    let deltaY = currentY - scrollY;
    scrollY = currentY; // update scrollY;
    console.log(`Change ${deltaY}`);
    scrollChecker(deltaY);

    if (deltaY < 0) {
        // newX = 100;
        newX = xPos - 1;
    } else if (deltaY > 0) {
        // newX = 200;
        newX = xPos + 1;
    }

    target.style.left = `${newX}px`;
    console.log(target.style.left);
})