"use strict";
// 3.  Matematika. 

const grade_1 = +prompt("grade");
const grade_2 = +prompt("grade");
const grade_3 = +prompt("grade");
const grade_4 = +prompt("grade");
const grade_5 = +prompt("grade");

const grades = [];
grades.push(grade_1, grade_2,
    grade_3, grade_4, grade_5
);
const kiekGaus = (grades) => {
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    const vidurkis = sum / grades.length;
if (vidurkis > 9) {
    return "Petriukas gaus tris saldainius";
} else if(vidurkis <= 9 && vidurkis >= 7) {
    return "Petriukas gaus du saldainius";
}
return "Petriukas gaus vieną saldainį"
}
document.getElementById("_p").innerHTML = kiekGaus(grades);