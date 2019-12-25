//Task 1

let numexp = "\d+", valid = false;
while (!valid) {
    let age = prompt("Enter your age"),
    message = "You are ";
    switch (true) {
        case 0 <= age && age <= 12: {
            message += "a child.";
            valid = true;
            break;
        }
        case age <= 18: {
            message += "a teen.";
            valid = true;
            break;
        }
        case age <= 60: {
            message += "an adult.";
            valid = true;
            break;
        }
        case age > 60: {
            message += "a retired person.";
            valid = true;
            break;
        }
    }
}

console.log(message);

//Task 2

let digit = prompt("Enter a digit"), valid = false;

while (!valid) {
    switch (true) {
        case digit == 1: {
            console.log("!");
            valid = true;
            break;
        }
        case digit == 2: {
            console.log("@");
            valid = true;
            break;
        }
        case digit == 3: {
            console.log("#");
            valid = true;
            break;
        }
        case digit == 4: {
            console.log("$");
            valid = true;
            break;
        }
        case digit == 5: {
            console.log("%");
            valid = true;
            break;
        }
        case digit == 6: {
            console.log("^");
            valid = true;
            break;
        }
        case digit == 7: {
            console.log("&");
            valid = true;
            break;
        }
        case digit == 8: {
            console.log("*");
            valid = true;
            break;
        }
        case digit == 9: {
            console.log("(");
            valid = true;
            break;
        }
        case digit == 0: {
            console.log(")");
            valid = true;
            break;
        }
        default: {
            console.log("Wrong data!!!");
            break;
        }
    }
}

//Task 3
while (true) {
    let num = prompt("Enter the number").split(""); 
    if (num.search(numexp)) {
        let numbers = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "0": 0}, sameNums = false;
        
        numbers.forEach(element => {
            numbers[element]++;
            if (numbers[element] == 2) {
                sameNums = true;
                break;
            }
        });
        
        console.log(sameNums);
        break;
    }
    console.log("Wrong data!!!");
}


//Task 4

while (true) {
    let year = prompt("Enter the year");
    if (year.search(numexp)) {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            console.log("Leap year!!!");
            break;
        } else {
            console.log("Simple year!!!");
            break;
        }
    }
    console.log("Wrong data!!!");
}

//Task 5

let num = prompt("Enter the number"),
reversedNum = num.split("").reverse().join("");
if (num == reversedNum) {
    console.log("Palindrome!!!");
} else {
    console.log("Not a palindrome!!!");
}

//Task 6

// let uanRate = 7, eurRate = .9, aznRate = 1.7;
// let regexp = "\d+\.?\d+";
// while (true) {
//     let money = prompt("Enter your number of dollars"),currency = prompt("Enter the currency(EUR, UAN, AZN)");
//     if (currency != "EUR" && currency != "UAN" && currency != "AZN") {
//         continue;
//     }
//     let converted = 0;
//     switch (currency) {
//         case "EUR": {
//             converted = money * eurRate;
//             break;
//         }
//         case "UAN": {
//             converted = money * uanRate;
//             break;
//         }
//         case "AZN": {
//             converted = money * aznRate;
//             break;
//         }
//     }
//     if (converted == NaN) {
//         continue;
//     }
//     alert(converted);
//     break;

// }

//Task 7

// let moneySpent = prompt("Enter the money spent"),
// discount = 0;

// switch (true) {
//     case 200 <= moneySpent <= 300: {
//         discount = .03;
//         break;
//     }
//     case 300 < moneySpent <= 500: {
//         discount = .05;
//         break;
//     }
//     case 500 < moneySpent: {
//         discount = .07;
//         break;
//     }
// }

// console.log(moneySpent * (1 - discount));

//Task 8

// let circleLength = prompt("Enter the circle length"),
// perimeter = prompt("Enter the square perimeter"),
// diameter = circleLength / Math.PI,
// side = perimeter / 4;
// if (diameter <= side) {
//     console.log("Circle can fit!");
// } else {
//     console.log("Circle cannot fit!");
// }

//Task 9

// alert("Enter A, B or C");

// let score = 0, q1 = prompt("2 ^ 5 = (A. 32; B. 64; C. 128 )"), q2 = prompt("cos(45) = (A. 0; B. 1; C. 0.5 )"), q3 = prompt("The most populated country of the world is (A. China; B. India; C. USA)");
// if (q1 == "A") {
//     score++;
// } else {
//     console.log("2 ^ 5 = 32 (A is correct.)");
// }
// if (q2 == "B") {
//     score++;
// } else {
//     console.log("cos(45) = 1 (B is correct.)");
// }
// if (q3 == "A") {
//     score++;
// } else {
//     console.log("The most populated country of the world is China (A is correct.)");
// }

// console.log(`Your score is ${score}.`);

//Task 10

// let message = "";
// let year, month, day;
// while (true) {
//     year = prompt("Enter the year"), month = prompt("Enter the month"), day = prompt("Enter the day");

//     if (year.search(numexp) && month.search(numexp) && day.search(numexp)) {
//         if (year < 0 || month < 0 || month > 12 || day < 0) {
//             continue;
//         }
//         if ((month == "1" || month == "3" || month == "5" ||  month == "7" || month == "8" || month == "10" || month == "12") && day > 31) {
//             continue
//         }
//         if ((month == "4" || month == "6" || month == "9" || month == "11") && day > 30) {
//             continue
//         }
//         if (month == "2") {
//             if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//                 if (day > 29) {
//                     continue;
//                 }
//             } else {
//                 if (day > 28) {
//                     continue;
//                 }
//             }
//         }
//         break;
//     } else {
//         continue;
//     }
// }

// switch (month) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12": {
//         (day == 31)?(month++, day=1):day++;
//         break;
//     }
//     case "2": {
//         if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//             (day == 29)?(month++, day = 1):day++;
//         } else {
//             (day == 28)?(month++, day = 1):day++;
//         }
//         break;
//     }
//     case "4":
//     case "6":
//     case "9":
//     case "11": {
//         (day == 30)?(month++, day = 1):day++;
//         break;
//     }
// }
// message = `${year}/${month}/${day}`;
// console.log(message);