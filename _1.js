"use strict";
// 1. Parašiutininkas.

const h = prompt("Iš kokio aukščio šoka parašiutininkas? ");
const s = prompt("Per kiek sekundžių išsiskleidžia jo  parašiutas?");

const arSpes = (h, s) => {
return Math.sqrt(2*h/9.8) >= s ? "Parašiutas išsiskleis" : "Parašiutas neišsiskleis"
}
document.getElementById("_p").innerHTML = arSpes(h, s);