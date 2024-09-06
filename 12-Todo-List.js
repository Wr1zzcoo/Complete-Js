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
toDoList.forEach((todoObject , index) => {
    const { name , duedate } = todoObject ;
    const html = `
        <div>${name}</div> 
        <div>${duedate}</div>
        <button class= "js-delete-button js-delete-todo-button" 
        >Delete</button>
`;
    toDoListHTML += html;
});


document.querySelector('.js-todolist').innerHTML = toDoListHTML;

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton , index) => {
    deleteButton.addEventListener('click' , () => {
        toDoList.splice(index , 1)
        rendertodo();
    });
});
}

document.querySelector('.js-add-todo-button')
.addEventListener('click' , () => {
    addtodo();
})

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