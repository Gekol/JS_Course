'use strict'

function checkPrimary(num, divisor=2) {
    if (divisor == Math.trunc(num / 2) || num == 1) {
        return "A primary number!!!";
    }
    if (!(num % divisor)) {
        return "Not a primary number!!!";
    }
    return checkPrimary(num, ++divisor);
}

function primaryMain() {
    let num = validateInt("", "Enter the number");
    alert(checkPrimary(num));
}

primaryMain();