function palindromeMain() {
    let num = prompt("Enter a string");
    alert(num == num.split("").reverse().join("")?"A palindrome!!!":"Not a palindrome!!!");
}

palindromeMain();