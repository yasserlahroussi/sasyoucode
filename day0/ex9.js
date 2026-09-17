let weight = 24;
let height = 100;
let total;
total = (weight / (height * height))
if (total < 18.5) {
    console.log("Underweight")
} else if (total >= 18.5 && total <= 24.9) {
    console.log("Normal")
} else if (total >= 25) {
    console.log("Overweight")
} else {
    console.log("underrated")
}