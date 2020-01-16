function mySplit(string, separator) {
    let start = 0;
    let substrings = [];
    for(let i in string) {
        if (string[i].includes(separator)) {
            substrings.push(string.slice(start, i));
            start = +i + 1;
        }
    }
    substrings.push(string.slice(start));
    return substrings;
}

function splitMain() {
    function getSeparator(input, separator="") {
        let sepexp = /./;
        while(!separator.match(sepexp)) {
            separator = prompt(input);
        }
        return separator;
    }
    let string = prompt("Enter string");
    let separator = getSeparator("Enter separator");
    alert(mySplit(string, separator).join(", "));
}

splitMain();