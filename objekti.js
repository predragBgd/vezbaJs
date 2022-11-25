/*
Objekti
*/
/*
let turisti = [
  {
    ime: "Petar",
    prezime: "Jović",
    jmbg: 1234568,
    posetio: ["Njujork", "London", "Pariz", "Moskva", "Peking"],
  },
  {
    ime: "Marko",
    prezime: "Ković",
    jmbg: 8765233,
    posetio: ["Beč", "Moskva", "London", "Minhen", "Atina"],
  },
  {
    ime: "Zoran",
    prezime: "Djordjević",
    jmbg: 7378967,
    posetio: ["Tel Aviv", "Njujork", "London", "Pariz", "Moskva"],
  },
  {
    ime: "Mirko",
    prezime: "Mitić",
    jmbg: 5201739,
    posetio: ["Minhen", "Atina", "Moskva", "Los Andjeles", "Čikago"],
  },
  {
    ime: "Jovana",
    prezime: "Cekić",
    jmbg: 9127439,
    posetio: ["Peking", "Moskva", "Los Andjeles", "Tel Aviv", "Njujork"],
  },
  {
    ime: "Nikola",
    prezime: "Brkić",
    jmbg: 4810984,
    posetio: ["London", "Moskva", "Tokio", "Čikago", "Peking"],
  },
  {
    ime: "Petar",
    prezime: "Zorić",
    jmbg: 1947204,
    posetio: ["Atina", "Moskva", "Los Andjeles", "Čikago", "Tel Aviv"],
  },
  {
    ime: "Marija",
    prezime: "Ivić",
    jmbg: 4209843,
    posetio: ["Čikago", "Tel Aviv", "Peking"],
  },
  {
    ime: "Biljana",
    prezime: "Lekić",
    jmbg: 8147409,
    posetio: ["Atina", "Tokio", "Njujork", "Pariz"],
  },
];
*/
// function posetiociGradova(grad) {
//   for (let i = 0; i <= turisti.posetio.length; i++) {
//     if (grad == turisti.posetio[i]) {
//       return turisti.ime + " " + turisti.prezime;
//     }
//   }
// }
// console.log(posetiociGradova("London"));
let turisti = [
  {
    ime: "Marija",
    prezime: "Ivić",
    jmbg: 4209843,
    posetio: ["Čikago", "Tel Aviv", "Peking"],
  },
  {
    ime: "Biljana",
    prezime: "Lekić",
    jmbg: 8147409,
    posetio: ["Atina", "Tokio", "Njujork", "Pariz"],
  },
];
function posete() {
  turisti.forEach((turista) => {
    turista.posetio.map((poseta) => {
      if (poseta === "Atina") {
        return turista.ime;
      }
    });
  });
}
console.log(posete());

let imeTuriste = turisti.map((turista) => {
  return turista.ime;
});
console.log(imeTuriste + " je posetila ");
