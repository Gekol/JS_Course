function caseChange(str) {
    let num = /\d/;
    str = str.split("");
    let res = str.reduce((accumulator, symbol) => {
        if (symbol.match(num)) {
            return accumulator + "_";
        } else if (symbol == symbol.toLowerCase()) {
            return accumulator + symbol.toUpperCase();
        } else {
            return accumulator + symbol.toLowerCase();
        }
    }, "");
    return res;
}

function caseMain() {
    let str = prompt("Enter the string");
    alert(caseChange(str));
}

caseMain();