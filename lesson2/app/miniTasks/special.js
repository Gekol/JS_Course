function specialMain() {
    let active = true,
    digit = "";

    while(active) {
        digit = prompt("Enter the digit");
        switch(digit) {
            case "1": {
                alert("!");
                active = false;
                break;
            }
            case "2": {
                alert("@");
                active = false;
                break;
            }
            case "3": {
                alert("#");
                active = false;
                break;
            }
            case "4": {
                alert("$");
                active = false;
                break;
            }
            case "5": {
                alert("%");
                active = false;
                break;
            }
            case "6": {
                alert("^");
                active = false;
                break;
            }
            case "7": {
                alert("&");
                active = false;
                break;
            }
            case "8": {
                alert("*");
                active = false;
                break;
            }
            case "9": {
                alert("(");
                active = false;
                break;
            }
            case "0": {
                alert(")");
                active = false;
                break;
            }
            default: {
                alert("Wrong data!!!");
                break;
            }
        }
    }
}

specialMain();