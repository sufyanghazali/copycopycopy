const copyItems = document.querySelector(".copies__list").querySelectorAll("li");

copyItems.forEach(item =>
{
    item.classList.add("copy__item");
});

