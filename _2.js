"use strict";
// 2. Didžioji kūdrinė varlė.

const m = prompt("Kiek sveria varlė?");
const n = prompt("Kiek varlių norima stebėti?");

const arPakanka = (m, n) => {
return m / 1000 * n > 5 ? "Varlių stebėjimui pakanka" : "Varlių stebėjimui per mažai"
}
document.getElementById("_p").innerHTML = arPakanka(m, n);