let resultat = "";
for (let i = 1; i <= 5; i++) {
    for (j = 1; i >= j; j++) {
        resultat = resultat + "* ";
    }
    resultat = resultat + "\n";
}
console.log(resultat);