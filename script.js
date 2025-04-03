
let posts = [];

function validatePostInfo(title, content, image) {
// TODO
}

function createPost(title, content, image) {
    if (validatePostInfo(title, content, image) == true) {
        let post = {
            title: title,
            content: content,
            image: image
        };
        posts.push(post);
    }
}

function loadPosts() {
    let oldPosts = localStorage.getItem("posts");
// TODO
}