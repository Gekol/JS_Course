//Task 1

let numregexp = /\d+/, valid = false;
let message = "You are ";
while (!valid) {
    let age = prompt("Enter your age");
    res = age.match(numregexp);
    if (res && res[0] == age) {
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
    } else {
        console.log(res);
    }
    
}

console.log(message);

//Task 2

valid = false;

while (!valid) {
    let digit = prompt("Enter a digit");
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
    let num = prompt("Enter the number");
    res = num.match(numregexp);
    if (res && res[0] == num) {
        num = num.split("");
        let numbers = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "0": 0}, sameNums = false;
        
        for(let i = 0; i < num.length; i++) {
            numbers[num[i]]++;
            if (numbers[num[i]] == 2) {
                sameNums = true;
                break;
            }
        }
        
        console.log(sameNums);
        break;
    }
    console.log("Wrong data!!!");
}

//Task 4

while (true) {
    let year = prompt("Enter the year");
    res = year.match(numregexp);
    if (res && res[0] == year) {
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

const uanRate = 7, eurRate = .9, aznRate = 1.7;
while (true) {
    let money = prompt("Enter your number of dollars");
    res = money.match(floatregexp);
    if (res && res[0] == money) {
        let converted = 0;
        let currency = prompt("Enter the currency(EUR, UAN, AZN)");
        switch (currency) {
            case "EUR": {
                converted = money * eurRate;
                break;
            }
            case "UAN": {
                converted = money * uanRate;
                break;
            }
            case "AZN": {
                converted = money * aznRate;
                break;
            }
            default: {
                continue;
            }
        }
        console.log(converted);
        break;
    }

}

//Task 7

while (true) {
    let moneySpent = prompt("Enter the money spent"),
    discount = 0;
    res = moneySpent.match(floatregexp);
    if (res && res[0] == moneySpent) {
        switch (true) {
            case 200 <= moneySpent && moneySpent <= 300: {
                discount = .03;
                break;
            }
            case 300 < moneySpent && moneySpent <= 500: {
                discount = .05;
                break;
            }
            case 500 < moneySpent: {
                discount = .07;
                break;
            }
        }
        
        console.log(moneySpent * (1 - discount));
        break;
    }
}


//Task 8
let circleLength, perimeter;
while (true) {
    circleLength = prompt("Enter the circle length");
    res = circleLength.match(floatregexp);
    if (res && res[0] == circleLength) {
        break;
    }
}
while (true) {
    perimeter = prompt("Enter the square perimeter");
    res = perimeter.match(floatregexp);
    if (res && res[0] == perimeter) {
        break;
    }
}
diameter = circleLength / Math.PI,
side = perimeter / 4;
if (diameter <= side) {
    console.log("Circle can fit!");
} else {
    console.log("Circle cannot fit!");
}

//Task 9

alert("Enter A, B or C");

let score = 0, q1, q2, q3;
while (true) {
    q1 = prompt("2 ^ 5 = (A. 32; B. 64; C. 128 )");
    if (q1 == "A" || q1 == "B" || q1 == "C") {
        break;
    }
}
while (true) {
    q2 = prompt("cos(45) = (A. 0; B. 1; C. 0.5 )");
    if (q2 == "A" || q2 == "B" || q2 == "C") {
        break;
    }
}
while (true) {
    q3 = prompt("The most populated country of the world is (A. China; B. India; C. USA)");
    if (q3 == "A" || q3 == "B" || q3 == "C") {
        break;
    }
}

if (q1 == "A") {
    score+=2;
} else {
    console.log("2 ^ 5 = 32 (A is correct.)");
}
if (q2 == "B") {
    score+=2;
} else {
    console.log("cos(45) = 1 (B is correct.)");
}
if (q3 == "A") {
    score+=2;
} else {
    console.log("The most populated country of the world is China (A is correct.)");
}

console.log(`Your score is ${score}.`);

//Task 10

message = "";
let year, month, day;
while (true) {
    year = prompt("Enter the year");
    if (year > 0) {
        break;
    }
}
while (true) {
    month = prompt("Enter the month");
    if (0 < month && month <= 12) {
        break;
    }
}
while (true) {
    day = prompt("Enter the day");
    if (day < 0 || ((month == "1" || month == "3" || month == "5" ||  month == "7" || month == "8" || month == "10" || month == "12") && day > 31) || ((month == "4" || month == "6" || month == "9" || month == "11") && day > 30)) {
        continue;
    }
    if (month == "2") {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            if (day > 29) {
                continue;
            }
        } else {
            if (day > 28) {
                continue;
            }
        }
    }
    break;
}

switch (month) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":{
        (day == 31)?(month++, day = 1):day++;
        break;
    }
    case "12": {
        (day == 31)?(year++, month = 1, day = 1):day++;
        break;
    }
    case "2": {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            (day == 29)?(month++, day = 1):day++;
        } else {
            (day == 28)?(month++, day = 1):day++;
        }
        break;
    }
    case "4":
    case "6":
    case "9":
    case "11": {
        (day == 30)?(month++, day = 1):day++;
        break;
    }
}
message = `${year}/${month}/${day}`;
console.log(message);