const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const deadlineInput = document.getElementById("deadlineInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;

    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <span class="priority">${priority}</span>
            <span class="deadline">${deadline}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        prioritySelect.value = "low";
        deadlineInput.value = "";
        checkDeadline(deadline);
    }
}

function checkDeadline(deadline) {
    const oneDayBefore = new Date(deadline);
    oneDayBefore.setDate(oneDayBefore.getDate() - 1);
    
    const currentDate = new Date();
    if (currentDate >= oneDayBefore && currentDate <= deadline) {
        alert("One day left for the task deadline!");
    }
}

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains("edit")) {
        const taskSpan = event.target.parentElement.querySelector("span");
        const newTaskText = prompt("Edit task:", taskSpan.textContent);
        if (newTaskText !== null) {
            taskSpan.textContent = newTaskText;
        }
    }
});
