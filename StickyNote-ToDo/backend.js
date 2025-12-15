function loadList(){


    let html = "";
    let list = getList();

    if(list){

        list.forEach(note => {
        
            html+= `<div style="background-color:${note.colour};" class="note">
            
                    <h3 style="margin-bottom: 10px;">${note.title}</h3>
            `;
            note.description.forEach(element => {
                html+= `<p>${element}</p>`;
            });
    
            html+= `<div class="note-delete">
                        <input title="change note colour" onchange="changeNoteColour('${note.date}', this.value)" type="color" name="note-colour-change" id="note-colour-change" value="${note.colour}">
                        <i onclick="deleteListItem('${note.date}')" style="color: red;" title="delete note" class="bi bi-trash-fill"></i>
                    </div>`;
    
            html+= `</div>`;
        });

    }
   
    html += `<div onclick="noteMaker('visible')" title="Add new note" class="note note-add">+</div>`;
    document.getElementsByClassName("sticky-note-holder")[0].innerHTML = html;
}

function noteMaker(visibility){
    document.getElementsByClassName("new-note-div")[0].style.visibility = visibility;

    document.getElementById('note-title').value = ""; 
    document.getElementById('note-text').value = "";
}


function addListItem(title, description, colour){

    if(description.filter(items => items != "").length == 0){
        noteMaker('hidden');
        return;
    }

    let list = getList();

    let note = {
        date: Date.now() + Math.random(),
        title: title,
        description: description,
        colour: colour
    };
    list.push(note);

    localStorage.setItem("notes", JSON.stringify(list));



    noteMaker("hidden");

    loadList();
}

function getList(){
    return JSON.parse(localStorage.getItem("notes")) || [];
}
function deleteListItem(date){

    let list = getList();

    list = list.filter(notes => notes.date != date);

    localStorage.setItem("notes", JSON.stringify(list));
    loadList();
}
function changeNoteColour(date, colour){

    let list = getList();
    let note = list.find(note => note.date == date);
    if (!note) return; 

    note.colour = colour;

    localStorage.setItem("notes", JSON.stringify(list));
    loadList();

}


// for testing purposes
function clearData(){
    localStorage.setItem("notes", JSON.stringify([]));
    loadList()
}

function testData(){

addListItem(
    "Grocery Run",
    [
        "- milk",
        "- eggs",
        "- chicken breast",
        "- rice for the week"
    ],
    "#FFD966"
);

addListItem(
    "Web Project",
    [
        "- fix grid layout on small screens",
        "- make notes wrap properly",
        "- test localStorage persistence"
    ],
    "#A4C2F4"
);

addListItem(
    "Reminder",
    [
        "- call bank about card charge"
    ],
    "#F4CCCC"
);

addListItem(
    "Workout Log",
    [
        "- 10 min warmup",
        "- chest + triceps",
        "- stretch lower back"
    ],
    "#D9EAD3"
);

addListItem(
    "Meeting Notes",
    [
        "- discuss UI spacing",
        "- agree on note size",
        "- decide color palette",
        "- next review Friday"
    ],
    "#FFF2CC"
);

addListItem(
    "Bug Report",
    [
        "- delete button removes wrong note",
        "- issue happens after refresh",
        "- likely ID mismatch"
    ],
    "#EAD1DC"
);

addListItem(
    "Study Plan",
    [
        "- review CSS grid vs flex",
        "- practice media queries",
        "- understand rem and em units"
    ],
    "#CFE2F3"
);

addListItem(
    "Daily Tasks",
    [
        "- reply to emails",
        "- clean workspace",
        "- push code to github",
        "- back up files"
    ],
    "#D0E0E3"
);

addListItem(
    "App Ideas",
    [
        "- draggable sticky notes",
        "- color picker per note",
        "- autosave on edit"
    ],
    "#E2EFDA"
);

addListItem(
    "Quick Thought",
    [
        "- keep UI simple and readable"
    ],
    "#FCE5CD"
);

addListItem(
    "Long Planning",
    [
        "- redesign note layout to better handle long text",
        "- ensure text does not overflow fixed note size",
        "- test on mobile, tablet, and desktop",
        "- improve spacing between notes dynamically"
    ],
    "#D5E8D4"
);

addListItem(
    "Errands",
    [
        "- pick up package",
        "- refill prescription",
        "- stop by hardware store"
    ],
    "#FFF2CC"
);

addListItem(
    "Refactor Notes",
    [
        "- avoid inline onclick handlers",
        "- move logic into JS",
        "- add unique IDs to notes"
    ],
    "#F4CCCC"
);

addListItem(
    "Weekend Plan",
    [
        "- laundry",
        "- meal prep",
        "- relax and catch up on reading"
    ],
    "#EAD1DC"
);

addListItem(
    "Edge Case Test",
    [
        "- very long content to see wrapping behavior inside a fixed width sticky note component and confirm nothing overflows or breaks layout unexpectedly"
    ],
    "#D9D2E9"
);

}