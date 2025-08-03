document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskinput');
    const addTaskBtn = document.getElementById('addtaskbtn');
    const taskList = document.getElementById('list');

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText != '') {
            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            li.appendChild(taskSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);

            taskList.appendChild(li);

            taskInput.value = '';

            taskSpan.addEventListener('click', () => {
                li.classList.toggle('done');
            });

            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    };

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            addTask();
        }
    });
})