function auditoryMain() {
    let active = true,
        auditories = [];
    while(active) {
        let command = prompt("Enter the command(add/show/sort/exit)");
        switch(command) {
            case "add": {
                add(auditories);
                break;
            }
            case "show": {
                show(auditories)
                break;
            }
            case "sort": {
                sort(auditories);
                showAll(auditories);
                break;
            }
            case "exit": {
                active = false;
                break;
            }
            default: {
                alert("Wrong command!!!")
                break;
            }
        }
    }
}

function getChairs(input) {
    let chairs = 0;
    while (chairs < 10 || chairs > 20) {
        chairs = getInt(input);
    }
    return chairs;
}

function add(auditories) {
    let name = prompt("Enter the name of the auditory"),
        chairs = getChairs("Enter the number of chairs in the auditory"),
        faculty = prompt("Enter the name of the faculty");
    let index = auditories.findIndex((elem) => elem.name == name && elem.faculty == faculty);
    if (index == -1 || auditories.length == 0) {
        auditories.push({
            name, 
            chairs,
            faculty
        });
    } else {
        auditories[index].chairs = chairs;
    }
}

function getOption(options, input) {
    let option;
    while (!options.includes(option)) {
        option = prompt(input);
    }
    return option;
}

function show(auditories) {
    switch (getOption(["all", "faculty", "group"], "Enter the option(all/faculty/group)")) {
        case "all": {
            showAll(auditories);
            break;
        }
        case "faculty": {
            showFaculty(auditories);
            break;
        }
        case "group": {
            showGroup(auditories)
            break;
        }
    }
}

function showAll(auditories) {
    auditories.forEach((elem) => console.log(`Auditory '${elem.name}' has ${elem.chairs} chairs and belongs to the '${elem.faculty}' faculty.`));
}

function showFaculty(auditories) {
    let faculty = prompt("Enter the name of the faculty");
    auditories.filter((elem) => elem.faculty == faculty).forEach((elem) => console.log(`Auditory '${elem.name}' has ${elem.chairs} chairs and belongs to the '${elem.faculty}' faculty.`));
}

function showGroup(auditories) {
    let name = prompt("Enter the name of the group");
    let students = getInt("Enter the number of students");
    let faculty = prompt("Enter the name of the faculty");
    auditories.filter((elem) => elem.faculty == faculty && elem.chairs >= students).forEach((elem) => console.log(`Auditory '${elem.name}' fits the group '${name} which has ${students} students who study at the '${faculty}' faculty`));
}

function sort(auditories) {
    switch(getOption(["chairs", "name"], "Enter the option(chairs/name)")) {
        case "chairs": {
            auditories.sort((a, b) => a.chairs - b.chairs);
            break;
        }
        case "name": {
            auditories.sort((a, b) => a.name - b.name);
            break;
        }
    }
}

auditoryMain();