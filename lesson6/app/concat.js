function concatString(...strings) {
    return strings.reduce((acc, elem) => acc + elem);
}

function concatMain() {
    let numexp = /\d+/, num = "";
    while (!num.match(numexp)) {
        num = prompt("Enter the number of words");
    }
    let strings = [];
    for(let i = 0; i < num; i++) {
        strings[i] = prompt("Enter a string");
    }
    alert(concatString(...strings));
}

concatMain();