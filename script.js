document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDateTime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = taskInput.value;
    taskText.setAttribute('readonly', 'readonly');

    const taskTime = document.createElement('span');
    taskTime.classList.add('task-datetime');
    taskTime.innerText = taskDateTime.value ? `Due: ${new Date(taskDateTime.value).toLocaleString()}` : '';

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-task');
    editButton.addEventListener('click', () => editTask(taskText, editButton));

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-task');
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete-task');
    completeButton.addEventListener('click', () => completeTask(taskItem));

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);
    taskActions.appendChild(completeButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskTime);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDateTime.value = '';
}

function editTask(taskText, editButton) {
    if (editButton.innerText.toLowerCase() === 'edit') {
        taskText.removeAttribute('readonly');
        taskText.focus();
        editButton.innerText = 'Save';
    } else {
        taskText.setAttribute('readonly', 'readonly');
        editButton.innerText = 'Edit';
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}
