export class Employee {
    #name;
    #lastName;
    #stage;
    #salary;

    constructor(name, lastName, stage, salary) {
        this.name = name;
        this.lastName = lastName;
        this.stage = stage;
        this.salary = salary;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get stage() {
        return this.#stage;
    }

    set stage(value) {
        this.#stage = value;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        this.#salary = value;
    }
}

function makeCell(data) {
    let cell = document.createElement("td");
    cell.innerText = data;
    return cell;
}

export class EmpTable {
    #employees;
    constructor(employees) {
        this.#employees = employees;
    }

    get employees() {
        return this.#employees;
    }

    set employees(value) {
        this.#employees = value;
    }

    getCode() {
        let table = document.querySelector("#employees");
        table.innerHTML = "";
        for (let employee of this.employees) {
            let row = document.createElement("tr");
            row.appendChild(makeCell(employee.name));
            row.appendChild(makeCell(employee.lastName));
            row.appendChild(makeCell(employee.stage));
            row.appendChild(makeCell(employee.salary));
            table.appendChild(row);
        }
    }
}