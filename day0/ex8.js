let angle1 = 90;
let angle2 = 89;
let angle3 = 1;
if (Number(angle1) + Number(angle2) + Number(angle3) == 180) {
    console.log("triangle valid")
} else if (angle1 == 0 || angle2 == 0 || angle3 == 0) {
    console.log("valeur angle null")
} else {
    console.log("pas de triangle")
}