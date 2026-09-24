const person = [{ name: "yasser", age: 20 }, { name: "yahya", age: 30 }, { name: "hind", age: 18 }]

function older(arr) {
    let max = 0
    let indice = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > max) {
            max = arr[i].age
            indice = i
        }
    }
    return arr[indice].name
}
console.log(older(person))