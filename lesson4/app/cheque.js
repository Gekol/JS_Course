function chequeMain() {
    let active = true,
        items = [];
    while (active) {
        let command = prompt("Enter the command(add/show/total/expensive/average/exit)");
        switch (command) {
            case "add": {
                add(items);
                break;
            }
            case "show": {
                show(items);
                break;
            }
            case "total": {
                alert(total(items));
                break;
            }
            case "expensive": {
                alert(expensive(items));
                break;
            }
            case "average": {
                alert(average(items));
                break;
            }
            case "exit": {
                active = false;
                break;
            }
            default: {
                alert("Wrong command!!!");
                break;
            }
        }
    }
}

function add(items) {
    let name = prompt("Enter the name of the item"),
        number = getInt("Enter the number of items"),
        price = getNum("Enter the price per item");

    items.push({
        name,
        number,
        price
    });
}

function show(items) {
    items.forEach((element) => console.log(`${element.name}, count - ${element.number}, price - ${element.price}, total - ${element.number * element.price}`));
    console.log("");
}

function total(items) {
    return items.reduce((accumulator, element) => accumulator + (element.number * element.price), 0);
}

function expensive(items) {
    let mostExpensive = 0;
    items.forEach((element) => {
        let purchase = element.price * element.number;
        mostExpensive = (mostExpensive < purchase)?purchase:mostExpensive;
    });
    return mostExpensive;
}

function average(items) {
    let number = items.reduce((accumulator, elem) => accumulator + elem.number, 0)
    return total(items) / number;
}

chequeMain();