"use strict";
//  4. Bandelės.

const kaina_a = prompt("kaina a");
const kaina_b = prompt("kaina b");
const kiekis_1 = prompt("kiekis 1");
const kiekis_2 = prompt("kiekis 2");
const kiekis_3 = prompt("kiekis 3");
const bandelesKaina = prompt("bandeles kaina");
const kainas = [];
if (kaina_a > kaina_b) {
    alert("a visada mažiau nei b");
}
kainas.push(kaina_a, kaina_b);
const kiekius = [];
kiekius.push(kiekis_1, kiekis_2, kiekis_3);
const howMuch = (kainas, kiekius, bandelesKaina) => {
    let x;
    if (bandelesKaina <= kainas[0]) {
        x = bandelesKaina * kiekius[0];
    } else if(bandelesKaina > kainas[0] && bandelesKaina < kainas[1]) {
        x = bandelesKaina * kiekius[1];
    } else {
        x = bandelesKaina * kiekius[2];
    }
return `Už bandeles bus sumokėta: ${Math.round(x * 100) / 100 } Lt`;
}
document.getElementById("_p").innerHTML = howMuch(kainas, kiekius, bandelesKaina);