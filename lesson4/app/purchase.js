function purchaseMain() {
    let active = true,
        purchases = [];

    while (active) {
        let command = prompt("Enter command(add/show/buy/exit)");
        switch (command) {
            case "add": {
                add(purchases);
                break;
            }
            case "show": {
                show(purchases);
                break;
            }
            case "buy": {
                buy(purchases);
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

function add(purchases) {
    let name = prompt("Enter the name of the item"),
        count = getInt("Enter the number of the items"),
        bought = confirm("Did you buy the item?");
    let taken = purchases.findIndex((element) => element.name == name);
    if (taken != -1) {
        purchases[taken].count += count;
        purchases[taken].bought = bought;
    } else {
        purchases.push({
            name: name,
            count: count,
            bought: bought
        });
    }
    
}

function show(purchases) {
    let sortedPurchases = purchases.sort((a, b) => a.bought - b.bought);
    sortedPurchases.forEach((element) =>
        console.log(`${element.name}, number - ${element.count}, bought - ${element.bought}`));
    console.log("");
}

function buy(purchases) {
    let name = prompt("Enter the name of the item"),
        taken = purchases.findIndex((element) => element.name == name);
    if (taken != -1) {
        purchases[taken].bought = true;
    } else {
        alert(`There is no ${name} in the purchase list!!!`);
    }
}

purchaseMain();