add.style.display = "none";
let entries = JSON.parse(localStorage.getItem("entries")) || [],
    biggestId = getBiggestId() + 1;
add_form.addEventListener("click", addEntryForm);
addBtn.addEventListener("click", addEntry);
drawBlocks();

function getBiggestId() {
    let lastElem = entries[entries.length - 1];
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
    let elem = addText(createElemBlock(document.createElement("div"), entry), entry);
    row.appendChild(elem);
}

function addEntryForm() {
    add.style.display = "block";
}

function createElemBlock(elem, entry) {
    elem.classList.add("col-3");

    elem.appendChild(document.createElement("h3"));
    elem.appendChild(document.createElement("p"));
    elem.appendChild(document.createElement("p"));
    elem.childNodes[2].appendChild(makeShowButton(entry));
    let comments = document.createElement("div")
    comments.style.display = "none";
    comments.id = "com" + entry.id;
    elem.appendChild(makeForm(entry));
    for (let comment of entry.comments) {
        let commentParagraph = document.createElement("p");
        commentParagraph.innerText = comment;
    }
    elem.appendChild(comments);
    elem.appendChild(document.createElement("button"));
    elem.appendChild(document.createElement("button"));
    return elem
}

function addText(elem, entry) {
    elem.childNodes[0].innerText = entry.title;
    elem.childNodes[1].innerText = entry.description;
    elem.childNodes[2].id = "show" + entry.id;
    elem.childNodes[5].innerText = "Add comments";
    elem.childNodes[5].id = "addCom" + entry.id;
    elem.childNodes[5].addEventListener("click", showCommentForm);
    elem.childNodes[6].innerText = "Delete entry";
    elem.childNodes[6].id = "del" + entry.id;
    elem.childNodes[6].addEventListener("click", deleteElement);
    return elem
}

function makeShowButton(entry) {
    let showBtn = document.createElement("button");
    showBtn.innerText = "Show comments";
    showBtn.id = "showBtn" + entry.id;
    showBtn.addEventListener("click", showComments);
    return showBtn
}

function makeForm(entry) {
    let form = document.createElement("form");
    form.style.display = "none";
    form.id = "form" + entry.id;
    let commentField = document.createElement("input");
    commentField.id = "comfield" + entry.id;
    let label = document.createElement("label");
    let comBtn = document.createElement("button");
    label.innerText = "Add comment";
    comBtn.innerText = "Submit";
    comBtn.id = "sub" + entry.id;
    comBtn.addEventListener("click", addComment);
    form.appendChild(label);
    form.appendChild(commentField);
    form.appendChild(comBtn);
    return form
}

function showComments(event) {
    let id = event.target.id.slice(7);
    console.log(id);
    document.querySelector("#show" + id).style.display = "block";
}

function addComment(event) {
    let id = event.target.id,
        index = id.slice(3);
        commentText = document.querySelector("#comfield" + index).value,
        entry = entries[entries.findIndex(elem => elem.id=index)];
    if (commentText != "") {
        entry.comments.unshift(commentText);
        localStorage.setItem("entries", JSON.stringify(entries));
        alert(commentText);
    } else {
        alert("You must enter some text to leave comment!!!")
    }
    
    drawBlocks();
}

function addEntry() {
    let titleValue = title.value;
    let descriptionValue = description.value;
    title.value = "";
    description.value = "";
    add.style.display = "none";
    let newEntry = {id: biggestId, title: titleValue, description: descriptionValue, comments: []};
    entries.unshift(newEntry);
    biggestId++;
    localStorage.setItem("entries", JSON.stringify(entries));
    addEntryBlock(newEntry);
}

function showCommentForm(event) {
    let elemId = event.target.id.slice(6);
    console.log(elemId);
    console.log(document.querySelector("#form" + elemId));
    document.querySelector("#form" + elemId).style.display = "block";
    // entries[index].childNodes[2].style.display = "block";
}

function deleteElement(event) {
    let elemId = event.target.id.slice(6),
        index = entries.findIndex(elem => elem.id==elemId);
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));
    drawBlocks();
}