function makeAbbreviation(string) {
    let dashWords = string.split("-");
    let words = dashWords.reduce((accumulator, elem) => {
        let words = elem.split(" ");
        accumulator = accumulator.concat(words);
        return accumulator
    }, []);
    return words.reduce((accumulator, elem) => accumulator + elem[0].toUpperCase(), "");
}

function abbreviationMain() {
    let string = prompt("Enter string");
    alert(makeAbbreviation(string));
}

abbreviationMain();