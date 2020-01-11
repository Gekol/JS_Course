function leapMain() {
    let year = validateInt("Enter the year");
    alert((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))?"A leap year!!!":"Not a leap year!!!");
}

leapMain();