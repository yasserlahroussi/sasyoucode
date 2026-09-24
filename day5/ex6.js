let sala = [
    { name: "table", price: 200, quantité: 3 },
    { name: "chaire", price: 300, quantité: 3 }
]

function achat(sala) {
    let somme1 = 0
    for (let i = 0; i < sala.length; i++) {
        somme1 = sala[i].price * sala[i].quantité + somme1
    }
    return somme1
}
console.log(achat(sala))