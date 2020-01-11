function repeatMain() {
    let num = prompt("Enter a string"),
        digits = {},
        repeat = false;

    for(let i of num) {
        if (digits.hasOwnProperty(i)) {
            digits[i]++;
        } else {
            digits[i] = 1;
        }
        if (digits[i] == 2) {
            repeat = true;
            break;
        }
    }
    alert((repeat)?"Symbols repeat!!!":"Symbols don't repeat!!!");
}

repeatMain();