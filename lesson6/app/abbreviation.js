function makeAbbreviation(string) {
    let dashWords = string.split("-");
    console.log(dashWords);
    let words = dashWords.reduce((accumulator, elem) => {
        let words = elem.split(" ");
        accumulator = accumulator.concat(words);
        return accumulator
    }, []);
    console.log(words);
    return words.reduce((accumulator, elem) => accumulator + elem[0].toUpperCase(), "");
}

function abbreviationMain() {
    let string = prompt("Enter string");
    alert(makeAbbreviation(string));
}

abbreviationMain();