let floatregexp = "[0-9]+.?[0-9]*", res;

function paintCount(length, width, height) {
    let surface = 2 * (length * height + width * height + length * width);
    return Math.ceil(surface / 16);
}
let length, width, height;
while(true) {
    length = prompt("Enter the length of the office: ")
    res = length.match(floatregexp);
    if (!res || res[0] != length) {
        continue;
    }
    break;
}
while(true) {
    width = prompt("Enter the width of the office: ");
    res = width.match(floatregexp);
    if (!res || res[0] != width) {
        continue;
    }
    break;
}
while(true) {
    height = prompt("Enter the height of the office: ");
    res = height.match(floatregexp);
    if (!res || res[0] != height) {
        continue;
    }
    break;
}

console.log(paintCount(length, width, height));