let resultat = "";
for (let i = 1; i <= 5; i++) {
    for (j = 6; j > i; j--) {
        resultat = resultat + " * "
    }
    resultat = resultat + "\n"
}
console.log(resultat);