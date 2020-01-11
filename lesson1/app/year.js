function calculateAge(birth_year, current_year) {
    alert(`Вам ${current_year - birth_year} лет!`);
}

function ageMain() {
    birth_year = validateNum("Введите год Вашего рождения");
    const current_year = 2020;
    calculateAge(birth_year, current_year);
}

ageMain();