add.style.display = "none";
let entries = localStorage["entries"]?JSON.parse(localStorage["entries"]):[],
    biggestId = getBiggestId() + 1;
add_form.addEventListener("click", addEntryForm);
addBtn.addEventListener("click", addEntry);
drawBlocks();

class Entry {
    constructor(id, title, description, comments) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.comments = comments;
    }
}

function getBiggestId() {
    let lastElem = entries[0];
    return lastElem?+lastElem.id:-1;
}

function drawBlocks() {
    let row = document.querySelector(".row");
    row.innerHTML = "";
    for (let entry of entries) {
        addEntryBlock(entry);
    }
}

function addEntryBlock(entry) {
    let row = document.querySelector(".row");
    let elem = createElemBlock(document.createElement("div"), entry);
    row.appendChild(elem);
}

function addEntryForm() {
    add.style.display = "block";
}

function createElemBlock(elem, entry) {
    elem.classList = ["col-3"];
    let title = document.createElement("h3"),
        description = document.createElement("p"),
        showBtn = document.createElement("p");
    title.innerText = entry.title;

    description.innerText = entry.description;

    showBtn.innerHTML = `<button id="showBtn_${entry.id}">Show comments</button>`;
    showBtn.id = `show_${entry.id}`;
    showBtn.children[0].addEventListener("click", showComments);

    let comments = document.createElement("div");
    comments.style.display = "none";
    comments.id = "com_" + entry.id;
    let index = 0;
    for (let comment of entry.comments) {
        let commentBlock = document.createElement("div");
        let commentText = document.createElement("span");
        commentText.innerText = comment;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.id = "comDel_" + entry.id + "_" + index;
        delBtn.addEventListener("click", deleteComment);
        commentBlock.appendChild(commentText);
        commentBlock.appendChild(delBtn);
        comments.appendChild(commentBlock);
        index++;
    }

    let addComBtn = document.createElement("button");
    addComBtn.innerText = "Add comments";
    addComBtn.id = "addCom_" + entry.id;
    addComBtn.addEventListener("click", showCommentForm);

    let delComBtn = document.createElement("button");
    delComBtn.innerText = "Delete entry";
    delComBtn.id = "del_" + entry.id;
    delComBtn.addEventListener("click", deleteElement);

    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    elem.appendChild(title);
    elem.appendChild(description);
    elem.appendChild(showBtn);
    elem.appendChild(comments);
    elem.appendChild(makeForm(entry));
    elem.appendChild(addComBtn);
    elem.appendChild(delComBtn);
    return elem
}

function deleteComment(event) {
    let data = event.target.id.split("_"),
        elemId = data[1],
        commentId = data[2];
    entries.find(elem => elem.id == elemId).comments.splice(commentId, 1);
    drawBlocks();
}

function makeForm(entry) {
    let form = document.createElement("form");
    form.style.display = "none";
    form.id = "form_" + entry.id;
    form.action = "#";
    let commentField = document.createElement("input");
    commentField.id = "comfield_" + entry.id;
    let label = document.createElement("label");
    let comBtn = document.createElement("button");
    label.innerText = "Add comment";
    comBtn.innerText = "Submit";
    comBtn.type = "submit";
    form.addEventListener("submit", addComment)
    form.appendChild(label);
    form.appendChild(commentField);
    form.appendChild(comBtn);
    return form
}

function showComments(event) {
    let id = event.target.id.split("_")[1];
    document.querySelector("#com_" + id).style.display = "block";
    event.target.innerText = "Hide comments";
    event.target.id = "hide_" + id;
    event.target.removeEventListener("click", showComments);
    event.target.addEventListener("click", hideComments);
}

function hideComments(event) {
    let id = event.target.id.split("_")[1];
    document.querySelector("#com_" + id).style.display = "none";
    event.target.innerText = "Show comments";
    event.target.id = "showBtn_" + id;
    event.target.removeEventListener("click", hideComments);
    event.target.addEventListener("click", showComments);
}

function addComment(event) {
    let id = event.target.id.split("_")[1],
        commentText = document.querySelector("#comfield_" + id).value,
        entry = entries[entries.findIndex(elem => elem.id == id)];
    if (commentText != "") {
        entry.comments.unshift(commentText);
        localStorage.setItem("entries", JSON.stringify(entries));
        let row = document.querySelector(".row");
        for(let i in entries) {
            if (entries[i] == entry) {
                row.children[i] = createElemBlock(row.children[i], entry);
                break;
            }
        }
    } else {
        alert("You must enter some text to leave comment!!!")
    }
}

function addEntry() {
    let titleValue = title.value;
    let descriptionValue = description.value;
    title.value = "";
    description.value = "";
    add.style.display = "none";
    let newEntry = new Entry(biggestId, titleValue, descriptionValue, []);
    entries.unshift(newEntry);
    biggestId++;
    localStorage.setItem("entries", JSON.stringify(entries));
    drawBlocks();
}

function showCommentForm(event) {
    let elemId = event.target.id.split("_")[1];
    document.querySelector("#form_" + elemId).style.display = "block";
    // entries[index].childNodes[2].style.display = "block";
}

function deleteElement(event) {
    let elemId = event.target.id.split("_")[1],
        index = entries.findIndex(elem => elem.id==elemId);
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));
    drawBlocks();
}