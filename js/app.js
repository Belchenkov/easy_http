const http = new easyHTTP();
const urlPosts = 'https://jsonplaceholder.typicode.com/posts2';

// Get Posts
http.get(urlPosts, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

