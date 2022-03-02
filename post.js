function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => getPost(json))
}
loadpost();
function getPost(json){
const postContainer = document.getElementById('postContainer');
for(const post of json){
    const div = document.createElement('div');
    div.classList.add('color');
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
    console.log(post);
}
}