const posts =[
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000); //time in milliseconds
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post); //post to the new array the new post
        callback();
    },2000);
}



createPost( {title: 'Post Three', body: 'This is post three'}, getPost);