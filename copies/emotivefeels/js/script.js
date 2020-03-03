const emotions = document.querySelectorAll(".emotion");
const body = document.querySelector("body");

function toggle()
{
    const story = this.querySelector(".emotion__story");
    const header = this.querySelector(".emotion__header");
    console.log(this);
    header.classList.toggle("emotion__header--active");
    story.classList.toggle("emotion__story--show");
    body.classList.toggle("no-scroll");

}


emotions.forEach(emotion =>
{
    emotion.addEventListener("click", toggle);
});