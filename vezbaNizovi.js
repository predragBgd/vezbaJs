// Nizovi:

let nizM = ["Mirko", "Slavko"];
let nizZ = ["Una", "Milica", "Irena", "Jovana", "Ana", "Sanja", "Vanja"];
nizM.push("Nikola", "Marko", "Ivan", "Jovan", "Uroš");
let par = [nizM.pop(), "i", nizZ.pop(), "to su srca dva!"];
let par2 = nizM.slice(2, 3) + " i " + nizZ.splice(2, 1) + " rodjaci.";
let par3 = nizM.shift() + " i " + nizM.slice(1, 2) + " su braća.";
let par4 = par.slice(2, 3) + " i " + nizZ.slice(3, 4) + " su sestre.";
let slavlje =
  "Na proslavu su došli: " + nizM.join(", ") + nizZ.join(", ") + ".";
console.log(par.toString().replace(/,/g, " "));
console.log(par2);
console.log(par3);
console.log(par4);
console.log(nizM);
console.log(nizZ);
console.log(slavlje);

// Stringovi:
let str1 =
  "             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.              ";
let str2 = "Nikola Nikolić";
let str3 = str1.trimStart().concat(str2).slice(203);
let arr1 = str2.split(" ");
console.log(str3);
console.log(arr1);
