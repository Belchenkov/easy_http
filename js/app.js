const http = new EasyHTTP();
const urlUsers = 'https://jsonplaceholder.typicode.com/users';

// Get Users
http.get(urlUsers)
    .then(data => console.log(data))
    .catch(err => console.error(err));

// User Data
/*
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
};
*/

// Create User
/*
http.post(urlUsers, data)
    .then(data => console.log(data))
    .catch(err => console.error(err));
*/

// Update User
/*
http.put(`${urlUsers}/1`, data)
    .then(data => console.log(data))
    .catch(err => console.error(err));
*/

// Delete User
/*
http.delete(`${urlUsers}/1`, data)
    .then(data => console.log(data))
    .catch(err => console.error(err));
*/

