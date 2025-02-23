 function post(){
    // console.log('poss')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => userPost(data))
}

 function userPost(posts){
    const div = document.getElementById('section');
    for(const post of posts){
        console.log(post)
        const creat = document.createElement('div');
        creat.innerHTML = `
            <h3>User id :${post.userId}</h3>
            <h2>Post Title :${post.title}</h2>
            <p>${post.body}</p> `
            div.appendChild(creat)
    }
 }


post()


