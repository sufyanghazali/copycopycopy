// const talents = ["digital design.", "logo design.", "type design.", "conception.", "brand design.", "pitches.", "HTML and CSS.", "editorial design.", "brand design.", "prototyping.", "signage."];

// ES6 class
class TypeWriter
{
    constructor(textEl, words, wait = 300)
    {
        this.textEl = textEl;
        this.words = words;
        this.text = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type()
    {
        // Current index of word
        // using modulo will reset the counter to 0
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const word = this.words[current];
        // Type Speed
        let typeSpeed = 70;

        // check if deleting
        if (this.isDeleting)
        {
            // remove char
            this.text = word.substring(0, this.text.length - 1);
        } else
        {
            // add char
            this.text = word.substring(0, this.text.length + 1);
        }

        // should pause after deleting first letter
        if (this.isDeleting && this.text == word.substring(0, word.length - 1))
        {
            typeSpeed = 1250;
        }

        // Insert text into element
        this.textEl.innerHTML = `<span class='text'>${this.text}</span`;

        if (this.isDeleting)
        {
            // deleting text is twice as fast
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.text == word)
        {
            // Pause after word is completed typing
            typeSpeed = this.wait;

            // Set delete to true
            this.isDeleting = true;

        } else if (this.isDeleting && this.text === "")
        {
            this.isDeleting = false;

            // move to next word
            this.wordIndex++;

            // pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

function init()
{
    const projects = document.querySelectorAll(".project");
    const textElement = document.querySelector(".text-type");
    const words = JSON.parse(textElement.getAttribute("data-words"));
    const wait = textElement.getAttribute("data-wait");

    new TypeWriter(textElement, words, wait);

    projects.forEach(project =>
    {
        // remove this later
        project.classList.add("check");

        const trigger = project.querySelector(".project__image--main");
        const content = project.querySelector(".project__content");
        trigger.onclick = () =>
        {
            if (content.classList.contains("project__content--show"))
            {
                content.style.animation = "fadeOut 0.4s ease-in-out";
                setTimeout(() => content.style.display = "none", 400);
            } else
            {
                content.style.display = "block";
                content.style.animation = "fadeIn 0.5s ease-in";
            }
            content.classList.toggle("project__content--show");
        }
    });
}

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);