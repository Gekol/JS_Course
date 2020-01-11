'use strict'

function maxDivisor(a, b) {
    let maximum = a > b?a:b,
        minimum = a < b?a:b,
        rest = maximum % minimum;

    if (rest) {
        return maxDivisor(minimum, rest);
    }
    return minimum;
}

function maxDivisorMain() {
    let a = validateInt("", "Enter the number"), b = validateInt("", "Enter the number");
    alert(maxDivisor(a, b));
}

maxDivisorMain();