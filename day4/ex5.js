let tableau = [1, 2, 3, 3, 4]

function repetition(tableau1) {
    let newliste = [];
    for (let i = 0; i < tableau1.length; i++) {
        let entre = true;
        for (let j = 0; j < i; j++) {
            if (tableau1[i] === tableau1[j]) {
                entre = false;
                break;
            }
        }
        if (entre) {
            newliste.push(tableau1[i])
        }

    }
    return newliste
}
console.log(repetition(tableau))