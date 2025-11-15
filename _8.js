"use strict";
//  8. Skaičiai. 

const reikšme_a = prompt("Įveskite a reikšmę.");
const reikšme_b = prompt("Įveskite b reikšmę.");
const reikšme_c = prompt("Įveskite c reikšmę.");
const reikšmes = [];
reikšmes.push(reikšme_a, reikšme_b, reikšme_c);
const getNumber = (reikšmes) => {
for (const reikšme of reikšmes) {
   if(reikšme % 3 === 0) return `Atsakymas: ${reikšme}`;
}
return "Atsakymas: nėra ";
}
document.getElementById("_p").innerHTML = getNumber(reikšmes)