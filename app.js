console.log("super ça marche");

const CodeHttp = document.getElementById('code');

//Get 
fetch("https://reqres.in/api/users?page=2%22")
    .then(function (res) {
        console.log(res.status);
        CodeHttp.innerHTML = res.status;
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
      //pour afficher les users
       console.log(value.data);
    })

    .catch(function (err) {
        // Une erreur est survenue
    });


function Post() {
    const user = {
        first_name: 'John',
        last_name: 'Lilly',
        job_title: 'Software Engineer'
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://reqres.in/api/users', options)
        .then((res) => {
            if (res.ok) {
                return (CodeHttp.innerHTML = res.status);
            } else {
                return Promise.reject('Une erreur est survenue');
            }
        })
        .then(res => console.log(res));

}
function Put() {
    const user = {
        first_name: 'John',
        last_name: 'Lilly',
        job_title: 'Software Engineer'
    };

    const options = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://reqres.in/api/users/2', options)
        .then((res) => {
            if (res.ok) {
                return (CodeHttp.innerHTML = res.status);
            } else {
                return Promise.reject('Une erreur est survenue');
            }
        })
        .then(res => console.log(res));

}
function Delete() {

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch('https://reqres.in/api/users/2', options)
        .then((res) => {
            if (res.ok) {
                return (CodeHttp.innerHTML = res.status);
            } else {
                return Promise.reject('Une erreur est survenue');
            }
        })
        .then((res) => console.log(res));

}
