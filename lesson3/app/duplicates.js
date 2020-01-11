function calculate_duplicates(word) {
    let characters = {}, total = 0;
    for(symbol of word) {
        if (!characters.hasOwnProperty(symbol)) {
            characters[symbol] = 0;
        }
        characters[symbol]++;
        if (characters[symbol] == 2) {
            total++;
        }
    }
    return total;
}

function duplicatesMain() {
    let word = prompt("Enter a word");
    word = word.toLowerCase();
    alert(calculate_duplicates(word));
}

duplicatesMain();