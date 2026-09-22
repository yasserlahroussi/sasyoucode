let arrays = [12, 1, 34, 58, 938];
let num = 58

function Existence(tableau, n) {
    for (let i = 0; i < arrays.length; i++) {
        if (tableau[i] === n) {
            return true
        }

    }
    return false
}
console.log(Existence(arrays, num))