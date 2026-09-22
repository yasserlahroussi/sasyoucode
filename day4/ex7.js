let matric = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let tableau = []

function matrix1(matric, tableau) {
    for (let i = 0; i < matric.length; i++) {
        for (let j = 0; j < matric[i].length; j++) {
            tableau.push(matric[i][j])
        }

    }
    return tableau

}
console.log(matrix1(matric, tableau))