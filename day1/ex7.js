for (let i = 2; i <= 50; i++) {
    let premiere = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            premiere = false
            break;
        }
    }
    if (premiere) {
        console.log(i)
    }
}