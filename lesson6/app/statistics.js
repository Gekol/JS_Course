function symbolCount(string) {
    let letterCount = 0, numCount = 0, otherCount = 0;
    let letter = /[A-Za-z]/, num = /\d/;
    string.split("").forEach(symbol => {
        if (symbol.match(letter)) {
            letterCount++;
        } else if (symbol.match(num)) {
            numCount++;
        } else {
            otherCount++;
        }
    }); 
    return [letterCount, numCount, otherCount];
}

function statMain() {
    let str = prompt("Enter the string");
    let data = symbolCount(str);
    let letterCount = data[0], numCount = data[1], otherCount = data[2];
    alert(`Letters - ${letterCount}, digits - ${numCount}, others - ${otherCount}`);
}

statMain();