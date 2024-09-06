const toDoList = [
    {
        name : 'make dinner',
        duedate : '08-22-2024'
    },
    {
        name : 'wash dishes',
        duedate : '08-22-2024'
    }
];
rendertodo();

function rendertodo(){
let toDoListHTML = '';
for ( i=0; i<toDoList.length; i++){
    const todoObject = toDoList[i];
    const { name , duedate } = todoObject ;
    const html = `
        <div>${name}</div> 
        <div>${duedate}</div>
        <button class= "js-delete-button" onclick = " toDoList.splice(${i} , 1)
        rendertodo();"
        >Delete</button>
`;
    toDoListHTML += html;
}

document.querySelector('.js-todolist').innerHTML = toDoListHTML;
}

function addtodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-duedate-input');

    const duedate = dueDateElement.value;

    toDoList.push({
        name,
        duedate
    });

    
    inputElement.value = '';

    rendertodo();
}