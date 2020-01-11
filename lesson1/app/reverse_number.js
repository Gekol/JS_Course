function reverseString(string) {
    return string.split("").reverse().join("");
}

function reverseMain() {
    let string = prompt("Введите строку");
    alert(reverseString(string));
}

reverseMain();