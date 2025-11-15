"use strict";
// 5.  Geriausia  klasė.

const klaseVidurkius = [];
const klase_1 = +prompt("klase");
const klase_2 = +prompt("klase");
const klase_3 = +prompt("klase");
const klase_4 = +prompt("klase");


klaseVidurkius.push(klase_1, klase_2, klase_3, klase_4);
const klaseVidurkiusSorted = klaseVidurkius.sort((a,b) => a - b);
const geriausiaKlase = klaseVidurkiusSorted.pop();
const gautiSkirtuma = (klaseVidurkiusSorted, geriausiaKlase) => {
const skirtumas = [];
for (const klase of klaseVidurkiusSorted) {
    skirtumas.push(geriausiaKlase - klase)
}
return skirtumas;
}
document.getElementById("_p").innerHTML = `Didžiausias vidurkis: ${geriausiaKlase} Kitų klasių vidurkiai skiriasi: ${gautiSkirtuma(klaseVidurkiusSorted, geriausiaKlase)}`;
