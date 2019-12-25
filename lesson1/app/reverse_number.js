let number = prompt("Введите число"),
    reversed = "";

reversed += number % 10;
number = Math.floor(number / 10);
reversed += number % 10;
number = Math.floor(number / 10);
reversed += number % 10;
alert(reversed);