let colors = document.querySelectorAll(".circle");
colors[0].style.backgroundColor = "red";
let coloredIndex = 0;
let button = document.querySelector("#next");
button.addEventListener("click", function() {
    colors[coloredIndex].style.backgroundColor = "grey";
    switch(coloredIndex) {
        case 0: {
            coloredIndex++;
            colors[coloredIndex].style.backgroundColor = "orange";
            break;
        }
        case 1: {
            coloredIndex++;
            colors[coloredIndex].style.backgroundColor = "green";
            break;
        }
        case 2: {
            coloredIndex = 0;
            colors[coloredIndex].style.backgroundColor = "red";
            break;
        }
    }
});
