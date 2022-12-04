/*
Funkcije:
*/

function zbir(n1, n2) {
  return n1 + n2;
}
let res = zbir(5, 8);
console.log(res);

let zb = (a, b) => {
  return a + b;
};
console.log(zb(6, 5));

let a1 = 5;
let a2 = 5;
let a3 = 9;

function dodavanje(a, b) {
  if (a < b) {
    return b - a;
  } else if (a > b) {
    return a - b;
  } else return "O0oooooo0O";
}
console.log(dodavanje(a1, a2));

niz3 = [1, 2, 3, 4, 5, 6, 7, 8];
niz3[99] = 100;
//Funkcija koja menja mesta elementima u nizu.
function zamenaMesta(nizZaZamenu, element1, element2) {
  if (
    element1 < 0 ||
    element1 > nizZaZamenu.lenght ||
    element2 < 0 ||
    element2 > nizZaZamenu.lenght ||
    nizZaZamenu[element1] === undefined ||
    nizZaZamenu[element2] === undefined
  ) {
    return "Proveri unos! " + nizZaZamenu;
  }
  let medjuVrednost;
  medjuVrednost = nizZaZamenu[element1];
  nizZaZamenu[element1] = nizZaZamenu[element2];
  nizZaZamenu[element2] = medjuVrednost;
  return "Zamenjeno :) " + nizZaZamenu;
}
let nizSaZamenjenjiMestima = zamenaMesta(niz3, 1, 96);
console.log(nizSaZamenjenjiMestima);
