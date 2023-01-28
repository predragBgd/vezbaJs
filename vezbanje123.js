function minMax(arr) {
  console.log(arr.length);
  console.log(arr.sort());
  if (arr.length == 1) {
    let a = arr.shift();
    let b = a;
    let c = [];
    c.push(a);
    c.push(b);
    return c;
  } else {
    let a = arr
      .sort((a, b) => {
        return a - b;
      })
      .shift();
    let b = arr
      .sort((a, b) => {
        return a - b;
      })
      .pop();
    let c = [];
    c.push(a);
    c.push(b);
    return c;
  }
}
console.log(minMax([2334454, 5]));

let a = "# ";
let b = "  ";

function trougao(c) {
  console.log(a);
  let i = 0;
  while (i < c - 2) {
    console.log(a + b.repeat(i) + a);
    i++;
  }
  console.log(a.repeat(c));
}
trougao(3);
console.log("----------------------");

function kvadrat(d) {
  let i = 0;
  console.log(a.repeat(d));
  while (i < d - 2) {
    console.log(a + b.repeat(d - 2) + a);
    i++;
  }
  console.log(a.repeat(d));
}
kvadrat(3);
console.log("---------------------");
function sahovnica(d) {
  let i = 0;
  while (i < d) {
    console.log((a + b).repeat(d));
    console.log((b + a).repeat(d));
    i++;
  }
}
sahovnica(5);
console.log("trougao2");
function trougao2(d) {
  let i = 0;

  while (i <= d) {
    console.log((a + b).repeat(i++));
  }
  while (i--) {
    console.log((a + b).repeat(i));
  }
}
trougao2(3);

function trougao3(d) {
  let i = 3;
  console.log(a.repeat(d));
  while (i) {
    console.log(a + b.repeat(i - 1) + a);
    i--;
  }
  console.log(a);
}
trougao3(5);

console.log("Kocka");
let prvi = " ";
let drugi = "/\\";
let treci = "_\\";
let cetvrti = "\\/";
let peti = "_/";

function kocka(n) {
  let i = 0;
  let m = n;
  while (i < n) {
    console.log(prvi.repeat(m - 1) + drugi.repeat(i + 1) + treci.repeat(n));
    i++;
    m--;
  }
  while (i) {
    console.log(prvi.repeat(m) + cetvrti.repeat(i) + peti.repeat(n));
    i--;
    m++;
  }
}
kocka(3);

// Nalazenje srednje vrednosti i medijalnog broja u nizu

let arr = [0, 3, 8, 3, 1, 9, 11];
let sumNo = 0;
for (let i = 0; i < arr.length; i++) {
  sumNo += arr[i];
}
console.log(sumNo);

let srednjaVrednost = sumNo / arr.length;
console.log(srednjaVrednost);

let arrSlozen = arr.sort((a, b) => {
  return a - b;
});
console.log(arrSlozen);

if (arrSlozen.length % 2 != 0) {
  let indexBr = Math.ceil(arrSlozen.length / 2);
  console.log("yyyy" + arrSlozen[indexBr - 1]);
}
if (arrSlozen.length % 2 == 0) {
  let indexBr = arrSlozen.length / 2;
  console.log("uuuu" + (arrSlozen[indexBr - 1] + arrSlozen[indexBr]) / 2);
}
//console.log(arrSlozen[arrSlozen.length / 2]);

// let medijalnaVrednost =
