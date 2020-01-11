function ageMain() {
    let age = validateInt("Enter your age");
    switch (true) {
        case 0 <= age && age < 12: {
            alert("A child!");
            break;
        }
        case 12 <= age && age < 18: {
            alert("A teenager!");
            break;
        }
        case 18 <= age && age < 60: {
            alert("An adult!");
            break;
        }
        case 60 <= age: {
            alert("A retiree!");
            break;
        }
    }
}

ageMain();