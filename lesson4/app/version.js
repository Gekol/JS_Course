function versionMain() {
    let version = getVersion("Enter the current version");
    let nums = version.split("."),
        added = false,
        index = nums.length - 1;
    while (!added) {
        if (index != 0 && nums[index] == 9) {
            nums[index] = 0;
            index--;
        } else {
            nums[index]++;
            added = true;
        }
    }
    alert(nums.join("."));
}

function getVersion(input, num="") {
    let versionregexp = /^\d+(\.\d)*$/;
    while (!num.match(versionregexp)) {
        num = prompt(input);
    }
    return num;
}

versionMain();