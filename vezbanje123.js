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
  while (i--) {
    console.log((b + a).repeat(i));
  }
}
trougao3(5);
