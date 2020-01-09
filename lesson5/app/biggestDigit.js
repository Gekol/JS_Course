'use strict'

function biggestDigit(num) {
    if (num.length == 1) {
        return num;
    }
    let current = num[0];
    let another_digit = biggestDigit(num.slice(1));
    return current > another_digit? current: another_digit;
}

function biggestMain() {
    let num = validate_data("", "Enter the num");
    alert(biggestDigit(num));
}

biggestMain();