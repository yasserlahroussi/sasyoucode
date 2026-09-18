const prompt = require('prompt-sync')();
console.log("Count Vowels")
let str = prompt("entrer votre mot : ");
let count = 0;
let count1 = 0;
let count2 = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        count++
    } else if (str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
        count1++
    } else {

    }
}
count2 = count + count1
console.log("num of voyelle is :" + count2)