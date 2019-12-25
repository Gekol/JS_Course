let size = prompt("Введите размер флешки в Гб"),
    file_size = .820;

let file_count = Math.floor(size / file_size);
alert(`На флешке размером в ${size} Гб поместится ${Math.floor(size / file_size)} файлов по ${file_size * 100} Мб.`);