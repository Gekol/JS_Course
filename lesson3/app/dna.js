function get_complementary(initial) {
    let res = "";
    for(let i = 0; i < initial.length; i++) {
        switch (initial[i]) {
            case "T": {
                res += "A";
                break;
            }
            case "A": {
                res += "T";
                break;
            }
            case "G": {
                res += "C";
                break;
            }
            case "C": {
                res += "G";
                break;
            }
        }
    }
    return res;
}

function validation(data) {
    for(let i = 0; i < data.length; i++) {
        if (data[i] != "T" && data[i] != "A" && data[i] != "G" && data[i] != "C") {
            return false;
        }
    }
    return true;
}

let initial = prompt("Enter DNA string");

while(!validation(initial)) {
    console.log("Wrong data!!!");
    initial = prompt("Enter DNA string");
}
console.log(get_complementary(initial));