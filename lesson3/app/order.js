function get_num(word) {
    let regexp = /\d+/;
    return word.match(regexp)[0];
}

function sort_sentence(sentence) {
    let words = sentence.split(" "), nums = [], curent_num;
    for(let i = 0; i < words.length; i++) {
        curent_num = get_num(words[i]);
        nums[curent_num] = words[i];
    }
    return nums.join(" ");
}

function orderMain() {
    sentence = prompt("Enter a sentence");
    alert(sort_sentence(sentence));
}

orderMain();