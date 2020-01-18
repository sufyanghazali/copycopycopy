const button = document.querySelector("#button");
const userDiv = document.querySelector("#users");

button.addEventListener("click", loadUsers)

function loadUsers()
{
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users");

    xhr.onload = function ()
    {
        if (xhr.status == 200)
        {
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            let output = "";
            users.forEach(user =>
            {
                output += 
                `<div class="user">
                    <img src="${user.avatar_url}" width="200px">
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Login: ${user.login}</li>
                    </ul>
                </div>`;

            });
            userDiv.innerHTML = output;
        }
    }
    xhr.send();
}