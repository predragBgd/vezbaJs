// if petlja
let x = 4;
if (x == 5) {
  console.log("X = 5");
} else if (x < 5) {
  console.log("x < 5");
} else console.log("X != 5");

// switch koristi strogo poredjenje. mora da postoji default

switch (x) {
  case 0:
    console.log("x = 0");
    break;
  case 1:
    console.log("x = 1");
  default:
    console.log("x = ququ");
    break;
}

//for petlja
for (let i = 1; i < 11; i++) {
  console.log(i);
}
//wile petlja
let br = 0;
while (br <= 5) {
  console.log("broj " + br++);
}
//for in
