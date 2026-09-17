const prompt = require('prompt-sync')();
let num1 = prompt(" entrer la premier : ");
let num2 = prompt("entre la deuxieme valeur : ");
let operation = prompt("entre le symbole de operation ( +, *, /, -) :");
let total = 0;
switch (operation) {
    case '+':
        total = Number(num1) + Number(num2)
        break;
    case "-":
        total = Number(num1) - Number(num2)
        break;
    case "/":
        if (num2 == 0) {
            console.log("division not allowed")
        } else {

            total = Number(num1) / Number(num2)
        }
        break;
    case "*":
        total = Number(num1) * Number(num2)
        break;
    default:
        console.log("eror")
        break;
}
console.log("total est:" + total)