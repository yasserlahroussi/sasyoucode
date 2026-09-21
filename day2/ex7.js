const p = require('prompt-sync')();
let a = Number(p("entrer a :"))
let b = Number(p("entrer b :"))


function calculate(a, b, operation) {
    return (operation(a, b))

}
const add = (a, b) => a + b;
const soustraction = (a, b) => a - b;



console.log(calculate(a, b, add))
console.log(calculate(a, b, soustraction))