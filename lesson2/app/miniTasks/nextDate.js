function getNum(input, limit) {
    while(true) {
        let num = validateInt(input);
        if (0 < num && num <= limit) {
            return Number(num);
        }
    }
}

function dateMain() {
    let year = getNum("Enter the year", Infinity),
        month = getNum("Enter the month", 12),
        day = getNum("Enter the day", 31);
    let nextDate = new Date(year, month - 1, day + 1);
    alert(`${nextDate.getDate()}, ${nextDate.getMonth() + 1}, ${nextDate.getFullYear()}`);
}

dateMain();