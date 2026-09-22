let tableau = [1, 2, 3, 4]

function reverse(tableau1) {
    let newliste = []
    for (let i = tableau1.length - 1; i >= 0; i--) {
        newliste.push(tableau1[i])
    }
    return newliste
}
console.log(reverse(tableau))