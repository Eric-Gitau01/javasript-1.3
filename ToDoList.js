const todoList = ['make dinner', 'make toast'];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</P>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputEl = document.querySelector('.js-name-input')
    const name = inputEl.value;
    todoList.push(name);
    inputEl.value = '';
    console.log(todoList);  
    renderTodoList();
}
