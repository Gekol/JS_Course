let money = prompt("Введите сумму денег в Вашем кошельке"),
    price = prompt("Введите цену одной шоколадки");

alert(`Вы можете купить ${Math.floor(money / price)} шоколадок и у Вас останется ${money % price} сдачи.`);