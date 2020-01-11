function dustMain() {
    let a1 = validateNum("Enter the value for a kg of the first kind of dust"),
        a2 = validateNum("Enter the value for a kg of the second kind of dust"),
        a3 = validateNum("Enter the value for a kg of the third kind of dust"),
        b1 = validateNum("Enter the capacity of the first tank"),
        b2 = validateNum("Enter the capacity of the second tank"),
        b3 = validateNum("Enter the capacity of the third tank");
    
    let prices = [a1, a2, a3].sort((a, b) => a - b);
    let volumes = [b1, b2, b3].sort((a, b) => a - b);
    let total = volumes[0] * prices[0] + volumes[1] * prices[1] + volumes[2] * prices[2];
    alert(total);
}

dustMain();