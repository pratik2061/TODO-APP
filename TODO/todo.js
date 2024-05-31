let TodoList = [];
DisplayItem();

function addTodo() {
    let InputElement = document.querySelector('#todo-input');
    let DateElement = document.querySelector('#todo-date');
    let TodoItem = InputElement.value;
    let TodoDate = DateElement.value; 
    TodoList.push({Itemname : TodoItem , Duedate : TodoDate});
    InputElement.value = '';
    DateElement.value = '';
     DisplayItem();
}
function DisplayItem(){
    let dipslayElement = document.querySelector('.displayElement');
    let newHtml ='';
    for(i=0; i<TodoList.length; i++){
        // let item = TodoList[i].Itemname
        // let date = TodoList[i].Duedate
        let {Itemname , Duedate} = TodoList[i]
            newHtml = newHtml +`
            <span>${Itemname}</span>
            <span>${Duedate}</span>
            <button id="delete" onclick ="TodoList.splice(${i},1);DisplayItem()">Delete</button>
            `
    }
 dipslayElement.innerHTML = newHtml;
}
