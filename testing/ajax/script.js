const button = document.querySelector("#button");

button.addEventListener("click", loadText);

function loadText()
{
    // create XHR object;
    const xhr = new XMLHttpRequest();

    // OPEN - type, url/file, async
    console.log(xhr.readyState);

    xhr.open("GET", "sample.tdxt", true);
    console.log(xhr.readyState);


    xhr.onprogress = function ()
    {
        console.log(xhr.readyState);
    }
    xhr.onload = function ()
    {
        if (this.status == 200)
        {
            // console.log(this.responseText);

            const text = document.querySelector(".text");
            text.innerText = xhr.responseText;
            console.log(xhr.readyState);
        } else if (xhr.status == 404)
        {
            const text = document.querySelector(".text");

            text.innerText = "Not Found"
        }
    }
    xhr.send();
}