let purchases = [],
    active = true,
    countregexp = /\d+/;

while(active) {
    let command = prompt("Enter the command(add/buy/show/exit)");
    switch(command) {
        case "add": {
            let name = prompt("Enter the name of the item");
            let count = prompt("Enter the number of items");
            let check = count.match(countregexp);
            while(!check || check[0] != count) {
                count = prompt("Enter the number of items");
            }
            count = parseInt(count);
            let bought = confirm("Have you bought the items?");
            let added = false, new_object = {"name": name, "count": count, "bought": bought}
            purchases = purchases.map((elem, i, link) => {
                if (!added) {
                    if (elem["name"] == name) {
                        elem["count"] += count;
                        elem["bought"] = bought;
                        added = true;
                    }
                }
                return elem;
            });
            if (!added) {
                purchases.push(new_object);
            }
            break;
        }
        case "buy": {
            let name = prompt("Enter the name of the item");
            purchases.find((element) => element["name"] == name)["bought"] = true;
            break;
        }
        case "show": {
            let bought_elements = purchases.filter((element) => element["bought"] == true);
            let unbought_elements = purchases.filter((element) => element["bought"] == false);
            unbought_elements.forEach((elem) => console.log(`${elem["name"]} - ${elem["count"]}`));
            bought_elements.forEach((elem) => console.log(`${elem["name"]} - ${elem["count"]}`));
            break;
        }
        case "exit": {
            active = false;
            break;
        }
        default: {
            console.log("Wrong command!!!");
        }
    }
}