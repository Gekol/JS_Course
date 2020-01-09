'use strict'

function pow(num, extent) {
    if (extent == 1) {
        return num;
    }
    return num * pow(num, extent - 1);
}

function powMain() {
    let num = validate_data("", "Enter the number");
    let extent = validate_data("", "Enter the extent");
    alert(pow(num, extent));
}

powMain();