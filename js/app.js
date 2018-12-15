const http = new easyHTTP();
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

// Get Posts
/*http.get(urlPosts, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});*/

// Get Single Post
/*
http.get(`${urlPosts}/1`, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
*/

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post(urlPosts, data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});