let inputField = document.querySelector("#name");
inputField.addEventListener("change", function() {
    let data = inputField.value,
        strexp = /[A-Za-z]/;
    inputField.value = data.split("").reduce((accumulator, elem) => (elem.match(strexp))?accumulator + elem:accumulator );
});