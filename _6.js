"use strict";
//  6.  Žiemojantys  paukščiai.

const kiekKiekvienosRūšiesPaukščiųLikoZiemoti = [1000, 1500, 1800];
const sorted = kiekKiekvienosRūšiesPaukščiųLikoZiemoti.sort((a, b) => b - a);
document.getElementById("_p").innerHTML = `
${sorted[0]} <br>
${sorted[1]} <br>
${sorted[2]} <br>
Skirtumas tarp didžiausio ir mažiausio kiekio: 
${sorted[0] - sorted[2]}`;
