'use strict'

function divisors(num) {
    let divisor = 2;
    while (divisor <= num && num % divisor != 0) {
        divisor++;
    }
    
    if (num != divisor) {
        return divisor + " * " + divisors(num / divisor);
    }
    return num;
}

function divisorsMain() {
    let num = validate_data("", "Enter the number");
    alert(divisors(num));
}

divisorsMain();