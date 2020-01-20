let openButton = document.querySelector("#openModal");

let modWin = document.querySelector("#modal");
openButton.addEventListener("click", function() {
    modWin.style.visibility = "visible";
});

let closeButton = document.querySelector("#closeModal");
closeButton.addEventListener("click", function() {
    modWin.style.visibility = "hidden";
})
