window.onload = function () {
    document.getElementById("press").onclick = btnAddTask;
};
function btnAddTask() {
    var addTaskInput = document.getElementById("inputs").value;
    var doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("doneish");
    var taskDisplay = document.createElement("label");
    taskDisplay.classList.add("displayClassList");
    taskDisplay.innerText = addTaskInput;
    var taskList = document.getElementById("showtasks");
    var breakDown = document.createElement("br");
    taskList.appendChild(doneCheckBox);
    taskList.appendChild(taskDisplay);
    taskList.appendChild(breakDown);
    clearTextBox();
    function clearTextBox() {
        document.getElementById("inputs").focus();
        document.getElementById("inputs").value = "";
    }
}
