

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const categorySelect = document.getElementById('category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const category = categorySelect.value;

        addTask(taskText, dueDate, priority, category);

        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
        categorySelect.value = 'work';
    });

    function addTask(taskText, dueDate, priority, category) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} - ${dueDate} - ${priority} - ${category}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
