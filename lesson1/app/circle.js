function circle_surface(radius) {
    alert(`Площадь равна ${radius ** 2 * Math.PI} см^2.`);
}

function circleMain() {
    let radius = validateNum("Введите радиус окружности");
    circle_surface(radius);
}

circleMain();