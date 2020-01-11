function calculateMoney(money, price) {
    alert(`Вы можете купить ${Math.floor(money / price)} шоколадок и у Вас останется ${money % price} сдачи.`);
}

function chocolateMain() {
    let money = validateNum("Введите сумму денег в Вашем кошельке"),
        price = validateNum("Введите цену одной шоколадки");
    calculateMoney(money, price);
}

chocolateMain();