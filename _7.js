"use strict";
// 7. Jonuko problema.

const variantas = +prompt("variantas");
const reiksme_a = +prompt("reikšme a");
const reiksme_b = +prompt("reikšme b");

const isProblem = (variantas, a, b) => {
    let x;
    if (variantas === 1) {
        x = a*b + 3;
    } else if (variantas === 2) {
        x = a + b;
    } else x = a - b;
    return `Atsakymas: x = ${x}`;
}
document.getElementById("_p").innerHTML = isProblem(variantas, reiksme_a, reiksme_b);
