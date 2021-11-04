// // XMLHttpRequest

// function reqListener () {
//     // console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open("get", "data.txt", true);
// // req.open("get", "data.json", true);
// req.open("get", "")

const addUsers = document.querySelector('.addUsers')
fetch('https://reqres.in/api/users?page=2')
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
        const users = result.data;
        if (users.length > 0) {
            users.forEach((user) => {
                const html = `               
                <div>
                    <p>${user.id} - ${user.last_name} ${user.first_name}</p>
                    <p>${user.email}</p>
                    <img src="${user.avatar}">
                        <button type="button">Modifier</button>
                    </a>
                    <button type="button" onClick="deleteUser(${user.id})">Supprimer</button>
                </div>                        
                `;
                addUsers.innerHTML += html;
            }) 
        }
        console.log(result.data);
    })

