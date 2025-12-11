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
    localStorage.setItem("myList", JSON.stringify(list));

    document.getElementById("user-input").value = "";

    loadList();
}

function getList() {
    return JSON.parse(localStorage.getItem("myList")) || [];
}

function removeItem(item){
    let list = getList();
    list = list.filter(items => items !== item);
    localStorage.setItem("myList", JSON.stringify(list));

    loadList();
}
function removeAll(){

    localStorage.setItem("myList", JSON.stringify([]));
    loadList();
}
  
