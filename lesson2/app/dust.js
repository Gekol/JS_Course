let a1, a2, a3, b1, b2, b3;
while (true) {
    a1 = prompt("Enter the price for a kg of the first kind of dust");
    res = a1.match(floatregexp);
    if (!res || res[0] != a1) {
        continue;
    }
    break;
}

while (true) {
    a2 = prompt("Enter the price for a kg of the second kind of dust");
    res = a2.match(floatregexp);
    if (!res || res[0] != a2) {
        continue;
    }
    break;
}

while (true) {
    a3 = prompt("Enter the price for a kg of the third kind of dust");
    res = a3.match(floatregexp);
    if (!res || res[0] != a3) {
        continue;
    }
    break;
}
while (true) {
    b1 = prompt("Enter the volume of the first tank");
    res = b1.match(floatregexp);
    if (!res || res[0] != b1) {
        continue;
    }
    break;
}
while (true) {
    b2 = prompt("Enter the volume of the second tank");
    res = b2.match(floatregexp);
    if (!res || res[0] != b2) {
        continue;
    }
    break;
}
while (true) {
    b3 = prompt("Enter the volume of the third tank");
    res = b3.match(floatregexp);
    if (!res || res[0] != b3) {
        continue;
    }
    break;
}
a1 = parseFloat(a1);
a2 = parseFloat(a2);
a3 = parseFloat(a3);
b1 = parseFloat(b1);
b2 = parseFloat(b2);
b3 = parseFloat(b3);

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
console.log((b1 + b2 + b3) * maxPrice);