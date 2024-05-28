let TodoList = [];

function addTodo() {
    let InputElement = document.querySelector('#todo-input');
    let TodoItem = InputElement.value;
    TodoList.push(TodoItem);
    InputElement.value = '';
     DisplayItem();
}
function DisplayItem(){
    let TodoDisplay = document.querySelector("#TodoDisplay")
    TodoDisplay.innerHTML = ''
    for (let i = 0; i < TodoList.length; i++) {
        TodoDisplay.innerHTML = TodoDisplay.innerHTML + "<br>" + TodoList[i];
    }
}