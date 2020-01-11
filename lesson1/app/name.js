function showName(name) {
    alert(`Привет, ${name}!`);
}

function nameMain() {
    let name = prompt("Введите ваше имя");
    showName(name);
}

nameMain();