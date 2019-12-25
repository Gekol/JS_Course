let a1 = parseFloat(prompt("Enter the price for a kg of the first king of dust")), a2 = parseFloat(prompt("Enter the price for a kg of the second king of dust")), a3 = parseFloat(prompt("Enter the price for a kg of the third king of dust")), b1 = parseFloat(prompt("Enter the volume of the first tank")), b2 = parseFloat(prompt("Enter the volume of the second tank")), b3 = parseFloat(prompt("Enter the volume of the third tank"));

let maxPrice = a1;
switch(true) {
    case a1 <= a2 && a3 <= a2: {
        maxPrice = a2;
        break;
    }
    case a1 <= a3 && a2 <= a3: {
        maxPrice = a3;
        break;
    }
}
alert(maxPrice);
alert((b1 + b2 + b3) * maxPrice);