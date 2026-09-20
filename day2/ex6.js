const p = require('prompt-sync')();
let n = p("entre le nombre pour convertir en factorial:")

function factorial(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num = num * i;
    }
    return num;
}
console.log(factorial(n))