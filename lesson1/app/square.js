function squarePerimeter(side_length) {
    alert(`Периметр равен ${4*side_length} см.`);
}

function squareMain() {
    let side_length = validateNum("Введите длину стороны квадрата");
    squarePerimeter(side_length);
}

squareMain();