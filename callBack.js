const post =[
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        post.forEach((post, index)=> {
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}
getPost();