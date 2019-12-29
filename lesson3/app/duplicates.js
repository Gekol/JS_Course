let word = prompt("Enter a word");
word = word.toLowerCase();

function calculate_duplicates(word) {
    let characters = {}, total = 0;
    for(let i = 0; i < word.length; i++) {
        if (!(word[i] in characters)) {
            characters[word[i]] = 0;
        }
        characters[word[i]]++;
    }
    
    for(let key in characters) {
        if (characters[key] >= 2) {
            total++;
        }
    }
    return total;
}

console.log(calculate_duplicates(word));