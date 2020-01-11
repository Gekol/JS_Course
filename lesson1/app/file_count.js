function file_count(size, file_size) {
    let file_count = Math.floor(size / file_size);
    alert(`На флешке размером в ${size} Гб поместится ${Math.floor(size / file_size)} файлов по ${file_size * 100} Мб.`);
}

function fileMain() {
    let size = validateNum("Введите размер флешки в Гб"),
        file_size = .82;
    file_count(size, file_size);
}

fileMain();