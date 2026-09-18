const p = require('prompt-sync')();
console.log("Multiplication Table:")
let multipilcation = p('put a number :');
let total;
for (let i = 1; i <= 10; i++) {
    total = multipilcation * i
    console.log(`${multipilcation} * ${i} = ${total}`)
}