let n;

while (true) {
    n = prompt("Enter the number");
    let res = n.match(floatregexp);
    if (!res || res[0] != n) {
        continue;
    }
    break;
}

function checkLuck(n) {
    let nums = n.split("");
    let center = Math.floor(nums.length / 2);
    let first_part = nums.slice(0, center);
    let second_part = nums.slice(center);
    const reducer = (accumulator, currentVal) => accumulator + parseInt(currentVal);
    let first_sum = first_part.reduce(reducer, 0),
        second_sum = second_part.reduce(reducer, 0);
    if (first_sum == second_sum) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(checkLuck(n));