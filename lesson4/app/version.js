let version,
    regexp = /\d+[.\d]*/,
    check = null;

while (!check || check[0] != version) {
    version = prompt("Enter the version");
    check = version.match(regexp);
}


let nums = version.split("."),
    added = false;

nums = nums.reverse();
nums.map((element, index, link) => {
    if (!added) {
        link[index]++;
        added = true;
    }
    if (link[index] >= 10 && index != link.length - 1) {
        link[index] = 0;
        added = false;
    }
});
nums.reverse();
console.log(nums.join("."));