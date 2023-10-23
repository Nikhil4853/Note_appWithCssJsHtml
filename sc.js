const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask() {
    if (inputbox.value == '') {
        alert("you must write somthing");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

    }
    inputbox.value = '';
}
AddTask();