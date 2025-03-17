// Display the current date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("datetime").innerText = dateTimeString;
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;

        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function () {
            this.parentElement.remove();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
