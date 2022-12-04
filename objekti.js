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

let turisti = [
  {
    ime: "Marija",
    prezime: "Ivić",
    jmbg: 4209843,
    posetio: ["Čikago", "Tel Aviv", "Peking"],
    zelje: ["Njujork", "Tirana", "Barselona", "London"],
  },
  {
    ime: "Biljana",
    prezime: "Lekić",
    jmbg: 8147409,
    posetio: ["Atina", "Tokio", "Njujork", "Pariz"],
    zelje: ["Madrid", "Tirana", "Solun"],
  },
];

// brise grad turisti
function briseGradTuristi(ime, grad) {
  turisti.forEach((turista) => {
    if (turista.ime == ime) {
      for (let i in turista.zelje) {
        if (turista.zelje[i] == grad) {
          turista.zelje.splice(i, 1);
        }
      }
    }
  });
}

//dodaje grad turisti
function dodajGradTuristi(ime, grad) {
  turisti.forEach((turista) => {
    if (turista.ime == ime) {
      turista.posetio.push(grad);
    } else if (briseGradTuristi(ime, grad));
  });
}
dodajGradTuristi("Biljana", "Tirana");

// ispisuje turiste
turisti.forEach((turista) => {
  console.log(
    turista.ime +
      " Posetila: " +
      turista.posetio +
      " Želi da poseti: " +
      turista.zelje
  );
});
