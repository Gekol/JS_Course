function shapeMain() {
    let squarePerimeter = validateFloat("Enter the square perimeter"),
        circleLength = validateFloat("Enter the square perimeter"),
        side = squarePerimeter / 4,
        diameter = circleLength / Math.PI;
    if (diameter <= side) {
        alert("Circle can fit!!!");
    } else {
        alert("Circle cannot fit!!!");
    }
}

shapeMain();