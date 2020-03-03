const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

button1.addEventListener("click", loadUser);
button2.addEventListener("click", loadUsers);

function loadUser()
{
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "user.json", true);
    xhr.onload = function ()
    {
        if (xhr.status == 200)
        {
            const div = document.querySelector("#user");
            const user = JSON.parse(xhr.responseText);
            console.log(user.name);

            const output = `<ul><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>Email: ${user.email}</li></ul>`;

            div.innerHTML = output;
        }
    }
    xhr.send();
}

function loadUsers()
{
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "users.json", true);
    xhr.onload = function ()
    {
        if (xhr.status == 200)
        {
            const div = document.querySelector("#users");
            const users = JSON.parse(xhr.responseText);
            let output = "";

            users.forEach((user) =>
            {
                output += `<ul><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>Email: ${user.email}</li></ul>`;
            });

            div.innerHTML = output;
        }
    }
    xhr.send();
}