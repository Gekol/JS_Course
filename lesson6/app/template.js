function templateFormat(string, ...params) {
    let res = "";
    let i = 0;
    let numexp = /\d+/;
    while(i < string.length) {
        if (string[i] == "%") {
            let num = string.slice(i).match(numexp);
            res += params[num - 1];
            i += 1 + num.length;
        } else {
            res += string[i];
            i++;
        }
    }
    return res;
}

function getData() {
    let template = prompt("Enter a template");
    let posexp = /%\d+/g;
    let positions = [...template.matchAll(posexp)];
    let biggestIndex;
    if (positions) {
        biggestIndex = +(positions[positions.length - 1][0].slice(1));
    } else {
        biggestIndex = 0;
    }
    let words = [];
    for(let i = 0; i < biggestIndex; i++) {
        words[i] = prompt("Enter a word");
    }
    return [template, words];
}

function templateMain() {
    let data = getData();
    alert(templateFormat(data[0], ...data[1]));
}

templateMain();