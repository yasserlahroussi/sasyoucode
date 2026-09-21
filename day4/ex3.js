let arrays = [12, 1, 34, 58, 938];
let num = 12;

function Existence(tableau, n) {
    for (let i = 0; i <= arrays.length; i++) {
        if (num[0] === n[i]) {
            return true
        } else {
            return false
        }
    }

}
console.log(Existence(arrays, num))