function speed(distance, time) {
    alert(`Вы должны ехать со скоростью ${distance/time} км/час.`);
}

function speedMain() {
    let distance = validateNum("Введите расстояние в км"),
    time = validateNum("Введите время в часах");
    speed(distance, time);
}

speedMain();