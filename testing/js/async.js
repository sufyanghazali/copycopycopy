const button = document.querySelector("button");

function load() {
    const xhr = new XMLHttpRequest();


    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Success!", xhr);
            const response = xhr.response;
            const body = document.querySelector("body");
            const wrap = document.querySelector(".wrap");
            const newWrap = response.querySelector(".wrap");

            body.insertBefore(newWrap, wrap);
            body.removeChild(wrap);
        } else {
            console.log("failed");
        }
    }
    xhr.open("GET", "http://127.0.0.1:5501/async2.html");
    xhr.responseType = "document";
    xhr.send();
}

button.addEventListener("click", load);