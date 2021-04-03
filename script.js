let addTodo = document.getElementById('addTodo');
let container = document.getElementById('container');
let textValue = document.getElementById('textValue');
let todos = new Array;

addTodo.addEventListener('click', function(){
let paragraph = document.createElement('p');
let lineThrough = document.createElement('button');
let remover = document.createElement('button');
let br = document.createElement('br');
task = textValue.value;

lineThrough.id = 'lineThrough';
lineThrough.innerHTML = ('✔');

remover.id = 'remover';
remover.innerHTML = ('❌');

paragraph.innerText = task;

container.appendChild(paragraph);
container.appendChild(lineThrough);
container.appendChild(remover);
container.appendChild(br);

lineThrough.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
});
remover.addEventListener('click', function(){
    container.removeChild(paragraph);
    container.removeChild(lineThrough);
    container.removeChild(remover);
    container.removeChild(br);
});
});