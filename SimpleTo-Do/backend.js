function loadList(){

    let list = getList();

    let html = "";
    for(let i = 0; i < list.length; i++){
        html += `<div class="List-tasks">${list[i]}<i onclick="removeItem('${list[i]}')" class="bi bi-trash-fill"></i></div>`;
    }
    document.getElementsByClassName("List-Items")[0].innerHTML = html;
    document.getElementsByClassName("Tasks-remaining")[0].innerHTML = "You have " + list.length + " tasks";
}

function addToList(item) {

    if(item.trim() === ""){return;}

    let list = getList()
    list.push(item);
    localStorage.setItem("tasks", JSON.stringify(list));

    document.getElementById("user-input").value = "";

    loadList();
}

function getList() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function removeItem(item){
    let list = getList();
    list = list.filter(items => items !== item);
    localStorage.setItem("tasks", JSON.stringify(list));

    loadList();
}
function removeAll(){

    localStorage.setItem("tasks", JSON.stringify([]));
    loadList();
}


// Test data
function testData(){

    addToList("Buy groceries");
    addToList("Finish homework");
    addToList("Clean desk");
    addToList("Call mom");
    addToList("Reply to emails");
    addToList("Do laundry");
    addToList("Walk the dog");
    addToList("Read 10 pages");
    addToList("Workout");
    addToList("Pay phone bill");
    addToList("Water plants");
    addToList("Fix CSS layout");
    addToList("Push code to git");
    addToList("Update resume");
    addToList("Book dentist appt");
    addToList("Meal prep");
    addToList("Review JS notes");
    addToList("Backup laptop");
    addToList("Organize files");
    addToList("Plan weekend");

}
  
