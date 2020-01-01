let auditories = [],
    active = true,
    countregexp = /\d+/;;

while(active) {
    let command = prompt("Enter a command(add/show/sort/exit)");
    switch(command) {
        case "add": {
            let name = prompt("Enter the auditory name");
            let chairs = "";
            let check = chairs.match(countregexp);
            while(!check || check[0] != chairs || chairs < 10 || chairs > 20) {
                console.log(check, chairs);
                chairs = prompt("Enter the number of chairs in the auditory");
                check = chairs.match(countregexp);
            }
            let faculty = prompt("Enter the faculty"),
                added = false,
                auditory = {"name": name, "chairs": chairs, "faculty": faculty};
            auditories = auditories.map((elem, i, link) => {
                if(!added) {
                    if (elem["name"] == name) {
                        elem["chairs"] = chairs;
                        elem["faculty"] = faculty;
                        added = true;
                    }
                }
                return elem;
            });
            if (!added) {
                auditories.push(auditory);
            }

            break;
        }
        case "show": {
            let option,
                valid = false;
            while (!valid) {
                option = prompt("Enter the option(all/faculty/group)");
                switch(option) {
                    case "all": {
                        valid = true;
                        auditories.forEach((elem) => console.log(`Auditory '${elem["name"]}' has ${elem["chairs"]} chairs and it's given to '${elem["faculty"]}' faculty.`));
                        break;
                    }
                    case "faculty": {
                        valid = true;
                        let faculty = prompt("Enter the faculty");
                        auditories.forEach((elem) => {
                            if (elem["faculty"] == faculty) {
                                console.log(`Auditory '${elem["name"]}' has ${elem["chairs"]} chairs and it's given to '${elem["faculty"]}' faculty.`);
                            }
                        });
                        break;
                    }
                    case "group": {
                        valid = true;
                        let name = prompt("Enter the name of the group"),
                            number = "",
                            numbercheck = number.match(countregexp);
                        
                        while(!numbercheck || numbercheck[0] != number) {
                            number = prompt("Enter the number of students");
                            numbercheck = number.match(countregexp);
                        }

                        let faculty = prompt("Enter the faculty");
                        auditories.forEach((elem) => {
                            if (elem["faculty"] == faculty && elem["chairs"] >= number) {
                                console.log(`Auditory '${elem["name"]}' fits the group '${name} which has ${number} students who study at the '${faculty}' faculty`);
                            }
                        });
                        
                        break;
                    }
                    default: {
                        console.log("Wrong data!!!");
                        break;
                    }
                }
            }
            break;
        }
        case "sort": {
            let option,
                valid = false;
            while(!valid) {
                option = prompt("Enter the option(chairs/name): ");
                switch(option) {
                    case "chairs": {
                        auditories.sort((a, b) => a["chairs"] - b["chairs"]).forEach((elem) =>console.log(`Auditory '${elem["name"]}' has ${elem["chairs"]} chairs and it's given to '${elem["faculty"]}' faculty.`));
                        valid = true;
                        break;
                    }
                    case "name": {
                        auditories.sort((a, b) => a["name"] - b["name"]).forEach((elem) =>console.log(`Auditory '${elem["name"]}' has ${elem["chairs"]} chairs and it's given to '${elem["faculty"]}' faculty.`));
                        valid = true;
                        break;
                    }
                    default: {
                        console.log("Wrong data!!!");
                        break;
                    }
                }
            }
            break;
        }
        case "exit": {
            active = false;
            break;
        }
        default: {
            console.log("Wrong command!");
            break;
        }
    }
}