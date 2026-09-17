let num1 = 23;
let num2 = 24;
let operation = "-";
let total = 0;
switch (operation) {
    case '+':
        total = Number(num1) + Number(num2)
        break;
    case "-":
        total = Number(num1) - Number(num2)
        break;
    case "/":
        total = Number(num1) / Number(num2)
        break;
    case "*":
        total = Number(num1) * Number(num2)
        break;
}
console.log("total est:" + total)