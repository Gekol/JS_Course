function convert(dollars, rate) {
    alert(`В евро: ${dollars * rate}`);
}

function converterMain() {
    const rate = .9;
    let dollars = validateNum("Введите количество долларов");
    convert(dollars, rate);
}

converterMain();