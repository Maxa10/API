const userForm    = {
    first_name: 'John',
    last_name: 'Lilly',
    email: 'Software Engineer'
};
 
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}
 
fetch('https://reqres.in/api/users', options)
    .then(res => res.json())
    .then(res => console.log(res));