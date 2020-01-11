function converterMain() {
    let currencies = {
        eur: 0.9,
        uan: 6.92,
        azn: 1.7,
    },
        active = true;

    let dollars = validateFloat("Enter the number of dollars");

    while (active) {
        let currency = prompt("Enter the currency(eur/uan/azn)");
        switch (currency) {
            case "eur": {
                alert(`${dollars} USD - ${dollars * currencies[currency]} EUR`);
                active = false;
                break
            }
            case "uan": {
                alert(`${dollars} USD - ${dollars * currencies[currency]} UAN`);
                active = false;
                break
            }
            case "azn": {
                alert(`${dollars} USD - ${dollars * currencies[currency]} AZN`);
                active = false;
                break
            }
            default: {
                alert("Wrong data!!!")
            }
        }
    }
}

converterMain();