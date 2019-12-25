let length = prompt("Enter the length of the office: "), width = prompt("Enter the width of the office: "), height = prompt("Enter the height of the office: ");

function paintCount(length, width, height) {
    let surface = 2 * (length * height + width * height + length * width);
    return Math.ceil(surface / 16);
}

alert(paintCount(length, width, height));