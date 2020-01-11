function repairMain() {
    let length = validateNum("Enter the length"),
        width = validateNum("Enter the width"),
        height = validateNum("Enter the height");
    
    let surface = 2 * (length * width + length * height + width * height);
    alert(`You need ${Math.ceil(surface / 16)} tins of paint!!!`);
}

repairMain();