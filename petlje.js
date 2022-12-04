// if uslov

// Ako je izraz u uslovu true onda se petlj izvrsava
if (false) {
  console.log(a1 + a3);
}

let x = 4;
if (x < 5) {
  console.log("X < 5");
} else if (x == 5) {
  console.log("x = 5");
} else console.log("x > 5");

//switch uslov
// switch koristi strogo poredjenje. mora da postoji default
switch (x) {
  case 0:
  case 1:
    console.log("x < 2");
    break;
  case 2:
    console.log("x = 2");
    break;
  case 3:
  default:
    console.log("x > 2");
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
// wile petlja unazad
while (br) {
  console.log("broj unazad " + br--);
}

// do wile petlja
do {
  console.log("do wile " + br++);
} while (br <= 10);

// primer for in  petlje na nizu
// prolazi kroz niz pomoću index-a
// preskače indexe bez vrednosti
let gradovi = ["Peking", "Moskva", "Los Andjeles", "Tel Aviv", "Njujork"];
gradovi[400] = "Mogadiš";
for (let index in gradovi) {
  console.log("for in petlja: " + gradovi[index]);
}

// primer for of petlje na nizu
// prolazi kroz niz i vraća vrednost elementa
// prikazuje i indexe bez vrednosti
for (let grad of gradovi) {
  console.log("for of petlja: " + grad);
}

// primer for in  petlje na objektu
let osoba = {
  ime: "Marija",
  prezime: "Ivić",
  jmbg: 4209843,
};
for (property in osoba) {
  console.log(property, osoba[property]);
}
// for (property of osoba) {
//   console.log(property, osoba[property]);
// }

// prikazuje i indexe bez vrednosti
for (let i = 0; i < gradovi.length; i++) {
  console.log(gradovi[i]);
}
