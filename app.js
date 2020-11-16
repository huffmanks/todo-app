const addTodo = document.querySelector('#add-todo');
const addTodoBtn = document.querySelector('#add-todo-btn');
const todoList = document.querySelector('#todo-list');

// Add todo
addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create parent
    const todoDiv = document.createElement('div');

    // Create checkbox input
    const checkboxEl = document.createElement('input');
    checkboxEl.setAttribute('type', 'checkbox');
    checkboxEl.classList.add('checkbox');

    // Create new todo item
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = addTodo.value;

    // Create edit button
    const editTodoBtn = document.createElement('button');
    editTodoBtn.className = 'btn edit';
    editTodoBtn.innerText = 'edit';

    // Create delete button
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.className = 'btn delete';
    deleteTodoBtn.innerText = 'delete';

    // Append only if input has a value
    if (addTodo.value !== '') {
        todoDiv.append(checkboxEl, newTodo, editTodoBtn, deleteTodoBtn);
    }

    todoList.appendChild(todoDiv);

    // Clear input
    addTodo.value = '';
});

// Complete, edit or delete todo
todoList.addEventListener('click', (e) => {
    //Complete
    if (e.target.classList.contains('checkbox')) {
        e.target.nextElementSibling.classList.toggle('completed');
    }

    // Edit
    if (e.target.classList.contains('edit')) {
        const todoItem = e.target.previousElementSibling;
        todoItem.contentEditable = true;

        // Return contenteditable to false after focusout
        todoItem.addEventListener('focusout', () => {
            todoItem.contentEditable = false;
        });
    }

    // Delete
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
