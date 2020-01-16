function camelTransform(style) {
    let words = style.split("-");
    let res = words.slice(1).reduce((accumulator, word) => accumulator + word[0].toUpperCase() + word.slice(1), words[0]);
    return res;
}

function camelMain() {
    let style = prompt("Enter the style");
    alert(camelTransform(style))
}

camelMain();