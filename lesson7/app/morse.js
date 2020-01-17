const morse = {
    "": " ",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
}

function decoderMain() {
    code = prompt("Enter the Morse code");
    let decoded = "";
    code = code.split(" ");
    for(chr of code) {
        if (morse[chr] === undefined) {
            decoded = "Wrong Morse code!!!";
            break;
        }
        decoded += morse[chr];
    }
    alert(decoded);
}

decoderMain();