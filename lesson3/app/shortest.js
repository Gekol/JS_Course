function shortest_word(sentence) {
    let words = sentence.split(" "), shortest = words[0].length, current_length;
    for(let i = 1; i < words.length; i++) {
        current_length = words[i].length;
        if (current_length < shortest) {
            shortest = current_length;
        }
    }
    return shortest;
}

function shortestMain() {
    let sentence = prompt("Enter a sentence");
    alert(shortest_word(sentence));
}

shortestMain();