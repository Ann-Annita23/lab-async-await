function displayPost(posts) {
    const postList = document.getElementById("post-list");
    if (!postList) return;
    postList.innerHTML = "";

    posts.forEach((post) => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try{
        //Apply await to the fetch call and assign the result to a variable called response
const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//Parse the JSON data
const posts = await response.json()

// call displayPosts() after the fetched
displayPost(posts)
} catch (error) {
    console.error('Error fetching posts:', error);
}
}

//Initiliaze the fetch process
getPosts()
    
   