let cheque = [], 
    active = true,
    priceregexp = /\d+.?\d?\d?/,
    numberregexp = /\d+/;

while(active) {
    let command = prompt("Enter the command(add/total/max/average/show/exit)");
    switch (command) {
        case "add": {
            let name = prompt("Enter the name of the item"),
                number = prompt("Enter the number of the items"),
                numbercheck = number.match(numberregexp);

            while (!numbercheck || numbercheck[0] != number) {
                number = prompt("Enter the number of the items");
                numbercheck = number.match(numberregexp);
            }
            number = parseInt(number);
            
            let price = prompt("Enter the price for the item"),
                pricecheck = price.match(priceregexp);
            
            while (!pricecheck || pricecheck[0] != price) {
                price = prompt("Enter the price for the item");
                pricecheck = price.match(priceregexp);
            }
            price = parseFloat(price);
            let added = false;
            cheque.map((elem, i, link) => {
                if (!added) {
                    if (elem["name"] == name) {
                        elem["number"] += number;
                        elem["price"] = price;
                        added = true;
                    }
                }
                return elem;
            });
            if (!added) {
                cheque.push({"name": name, "number": number, "price": price});
            }
            break;
        }
        case "total": {
            let total = cheque.reduce((accumulator, elem) => accumulator + elem["number"] * elem["price"], 0);
            console.log(total);
            break;
        }
        case "max": {
            let max = cheque.reduce((accumulator, elem) => accumulator>(elem["price"] * elem["number"])?accumulator:elem["price"] * elem["number"]);
            console.log(max);
            break;
        }
        case "average": {
            if(cheque.length != 0) {
                let total = cheque.reduce((accumulator, elem) => accumulator + elem["number"] * elem["price"], 0);
                let items_count = cheque.reduce((accumulator, elem) => accumulator + elem["number"], 0);
                console.log(total / items_count);
                break;
            } else {
                console.log("You haven't bought anything yet!!!");
            }
            break;
        }
        case "show": {
            cheque.forEach((elem) => console.log(`${elem["name"]}x${elem["number"]} - ${elem["number"] * elem["price"]}`));
            break;
        }
        case "exit": {
            active = false;
            break;
        }
        default: {
            console.log("Wrong command!!!");
            break;
        }
    }
}