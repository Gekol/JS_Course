function askQuestion(question) {
    let active = true;
    let answer;
    while (active) {
        answer = prompt(question);
        switch (answer) {
            case "a":
            case "b":
            case "c": {
                active = false;
                break;
            }
            default: {
                console.log("Wrong answer!!!");
            }
        }
    }
    return answer;
}

function questionMain() {
    let score = 0;
    let q1 = askQuestion("2 ^ 8 = (a - 512, b - 128, c - 256)"),
        q2 = askQuestion("sqrt(625) = (a - 25, b - 23, c - 15)"),
        q3 = askQuestion("cos(0) + sin(90) = (a - 0, b - 1/2, c - 2)");
    score += (q1 == "c")?2:0;
    score += (q2 == "a")?2:0;
    score += (q3 == "c")?2:0;
    alert(`Your score - ${score} points.`);
}

questionMain();