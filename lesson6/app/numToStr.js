function transform(num) {
    let tens = {
        "2": "Двадцать",
        "3": "Тридцать",
        "4": "Сорок",
        "5": "Пятьдесят",
        "6": "Шестьдесят",
        "7": "Семьдесят",
        "8": "Восемьдесят",
        "9": "Девяносто",
    }
    let ones = {
        "1": "один",
        "2": "два",
        "3": "три",
        "4": "четыре",
        "5": "пять",
        "6": "шесть",
        "7": "семь",
        "8": "восемь",
        "9": "девять",
    }
    let less20 = {
        "10": "Десять",
        "11": "Одиннадцать",
        "12": "Двенадцать",
        "13": "Тринадцать",
        "14": "Четырнадцать",
        "15": "Пятнадцать",
        "16": "Шестнадцать",
        "17": "Семнадцать",
        "18": "Восемнадцать",
        "19": "Девятнадцать",
    }
    if (num < 20) {
        return less20[num];
    }
    else if (num % 10) {
        return tens[num[0]] + " " + ones[num[1]]
    } else {
        return tens[num[0]];
    }
}

function transformMain() {
    function getInt(input, num="") {
        let validNum = /\d\d/;
        while (!num.match(validNum)) {
            num = prompt(input);
        }
        return num;
    }
    let num = getInt("Enter the num");
    alert(transform(num));
}

transformMain();