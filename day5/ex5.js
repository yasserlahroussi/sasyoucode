const product = [{ name: "chair", price: 200, Instock: true }, { name: "tableau", price: 300, Instock: true }, { name: "pc", price: 200, Instock: false }]

function newarrays(arr) {
    let t = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Instock) {
            t.push(arr[i])
        }
    }
    return t
}
console.log(newarrays(product))