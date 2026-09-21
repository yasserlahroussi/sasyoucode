let tableau = [12, 13, 14, 15, 16, 17]

function Max(tableau1) {
    let Max1 = tableau1[0]
    for (let i = 0; i < tableau1.length; i++) {
        if (Max1 < tableau1[i]) {
            Max1 = tableau1[i]
        }

    }
    return Max1
}
console.log(Max(tableau))