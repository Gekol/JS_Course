function calculator(num1, num2, operation) {
    switch(operation) {
        case "+": {
            return +num1 + +num2;
        }
        case "-": {
            return num1 - num2;
        }
        case "*": {
            return num1 * num2;
        }
        case "/": {
            return num1 / num2;
        }
    }
}

function calcMain() {
    function getOperation(input, num="") {
        let operationexp = /^\d+(\.\d)?\d? \d+(\.\d)?\d? [\*\+-\/]$/;
        while(!num.match(operationexp)) {
            num = prompt(input);
        }
        return num;
    }
    let operation = getOperation("Enter the operation");
    alert(calculator(...operation.split(" ")));
}

calcMain();