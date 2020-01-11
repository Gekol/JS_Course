function discountMain() {
    let sum = validateFloat("Enter the sum of a purchase"),
        discount = 1;
    switch(true) {
        case 200 <= sum && sum < 300: {
            discount = 0.97;
            break;
        }
        case 300 <= sum && sum < 500: {
            discount = 0.95;
            break;
        }
        case 500 <= sum: {
            discount = 0.93;
            break;
        }
    }
    alert(sum * discount);
}

discountMain();