let years = 2016;
if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
    console.log("true")
} else {
    console.log("false")
}