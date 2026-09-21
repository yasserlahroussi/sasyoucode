const p = require('prompt-sync')();
let a = Number(p("entrer a :"))
let b = Number(p("entrer b :"))
let v = p("entrer l'operation :")


function calculate(a, b, operation) {
    return (operation(a, b))

}
const add = (a, b) => a + b;
const soustraction = (a, b) => a - b;

if (v === "+") {
    console.log(calculate(a, b, add))

} else if (v === "-") {
    console.log(calculate(a, b, soustraction))
} else {
    console.log("eror")
}