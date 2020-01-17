function calcStrongness(n) {
    let strongness = 0;
    while(n % 2 == 0) {
        strongness++;
        n /= 2;
    }
    return strongness;
}

function getNum(input, n="") {
    let numexp = /\d+/;
    while (!n.match(numexp)) {
        n = prompt(input);
    }
    return +n;
}

function intervalStrongest(n, m) {
    let strongest = 0, strongness = 0;
    for(let i = n; i <= m; i++) {
        let current = calcStrongness(i);
        if (current > strongness) {
            strongness = current;
            strongest = i;
        }
    }
    return strongest;
}

function intervalMain() {
    let n = getNum("Enter n"),
        m = getNum("Enter m");
    alert(intervalStrongest(n, m));
}

intervalMain();