/*
Vrste podataka:
    Promenjiva:
        Bez vrednosti:
            let a; undefine ------------------- bez vrednosti
        Brojevi:
            a = 1; ------------------------ broj
        String:    
            let b = "string" ------------------ string je niz karaktera
        Nan:    
            let c = "string" / 5; NaN --------- nije broj
        Boolean:    
            let d = true ili false ------------ boolean        
    Konstanta:
        const VELIKA_SLOVA = "neka vrednost" -- konstanta
*/
let a;
(a = 1), (b = 2); // još jedan način dodeljivanja vrednosti
console.log("a = " + a, "b= " + b);
/*
Operatori:
    (+) --------- Sabiranje.
    (-) --------- Oduzimanje.
    (*) --------- Množenje.
    (/) --------- Deljenje.
    (**) -------- Stepenovanje.
    (%) --------- Moduo (Ostatak od deljenja).
    (++) -------- Povećavanje vrednosti.
    (--) -------- Smanjivanje vrednosti.
Logički operatori:
    (&&) -------- I jedno i drugo
    (||) -------- Ili jedno ili drugo.. 
    (!=) -------- Nije jednako.
    (==) ------- Poredjenje da li su dve promenjive iste vrednosti.
    (===) ----- Strogo poredjenje da li su dve promenjive iste vrednosti i da li su vrednosti istog tipa .
*/
let c = a + b;
let d = 6 - a;
let e = b * 2;
let f = "30" / c; // vraća broj
let g = f ** b;
let h = g % c;
let i = "3pet" / b; // vraća string
let j = "3" + b; // vraća string
let k = (b += 2);
let l = (e *= 3);
let m = (b **= 2);
let n = 45e5;
let o = 45e-5;
console.log(j.length);
console.log(
  "c = " + c,
  "d = " + d,
  "e = " + e,
  "f = " + f,
  "g = " + g,
  "h = " + h,
  "i = " + i,
  "j = " + j,
  "k = " + k,
  "l = " + l,
  "m = " + m,
  "n = " + n,
  "o = " + o
);

console.log(b++); // vraća rezultat pa promeni vrednost promenjive b
console.log(b);
console.log(--c); // promeni vrednost promenjivoj c pa vraća rezultat
console.log(c);

let p = true && false;
let q = true || false;

console.log(p, q);
/* 
Nizovi:
    Metode koje se najčešće koriste za manpulaciju sa nizovima:
        .length ----------------------------------- Vraća vrednost dužine niza. Piše se bez zagrade na kraju.
        .push() ----------------------------------- Dodaje element na kraj niza. 
        .pop() ------------------------------------ Uzima zadnji element iz niza i može da ga dodeli novoj promenjivoj.
        .shift() ---------------------------------- Uzima prvi element iz niza i može da ga dodeli novoj promenjivoj.
        .unshift() -------------------------------- Dodaje element na početak niza niza.
        .splice() --------------------------------- Iseca niz i vraća novi niz od elemenata koje je isekao. U zagradu se upisuje indeks početnog i krajnjeg elementa.Elementi se isecaju iz niza
        .slice() ---------------------------------- Iseca niz od odredjenog elemenata i gradi novi niz. U zagradu se upisuje indeks početnog i krajnjeg elementa. Elementi ostaju i u starom nizu.
        .join() ------------------------------- Vraća elemente niza kao string razdvojene zarezima.
*/
let niz1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(niz1.length);
niz1.pop(); // izbacio zadnji el (8)
niz1.push(8, 9); // dodao zadnji el (8,9)
console.log(niz1);
let niz2 = [niz1.pop()]; // Ubacio u niz2 zadnj el od niz1
console.log("niz2", niz2);
let promenjiva = niz1.shift(); // Dodao vrednost promenjivoj prvog el niza1
console.log("promenjiva", promenjiva);
niz1.unshift(0); // Dodao el na početak niza
console.log(niz1);
let niz4 = niz1.splice(1, 2); // Isekao iz niza i dodao u novi niz el sa odgovarajucim indexom
console.log("niz4", niz4);
let niz5 = niz1.slice(4, 7); // Dodao u novi niz el sa odgovarajucim indexom
console.log(niz5);

let nizStr = ["str0", "str1", "str2", "str3", "str4", "str5", "str6"];
delete nizStr[3]; // Briše vrednost na odgovarajućem indexu.
console.log(nizStr);
nizStr[3] = "str3"; // Dodaje vrednost na odgovarajućem indexu.
console.log(nizStr);
let viseDimenzionalniNiz = [
  ["a11", "a12", "a13", ["b11", "b12", "b13"]],
  ["a21", "a22", "a23", ["b21", "b22", "b23"], [["c11", "c12", "c13"]]],
  ["a31", "a32", "a33"],
];

viseDimenzionalniNiz[0][3].push("b14");
viseDimenzionalniNiz[0][3].shift();
let nizNov1 = viseDimenzionalniNiz[1].slice();

console.log(viseDimenzionalniNiz);
console.log(viseDimenzionalniNiz[1][4]);
console.log("nizNovi", nizNov1);
let prazanNiz1 = [];
prazanNiz1[0] = "Nova stavka"; // Dodavanje na index 0 vrednost.
prazanNiz1[0] = "Izmena"; // Promena vrednosti
console.log(prazanNiz1);

/* 
Kretanje kroz više dimenzionlne nizove. za biranje elementa u nizu [] i index tog elementa
Primer: visedimenzionalniNiz[1][3][1]
 */
/*
Objekti:
    let objekat = {};
*/

/*
String metode:
    .length ----------------- Vraća vrednost dužine stringa.
    .charAt() -------------- Vraća karakter na odgovarajućem indeksu.
    .concat() -------------- Vraća spojena dva ili više stringova.
    .trim() ---------------- Sklanja razmake sa početka i kraja niza.
    .trimEnd() ------------- Sklanja razmake sa početka niza.
    .trimStart() ----------- Sklanja razmake sa kraja niza.
    .slice() --------------- Iseca string. U zagradu se upisuje index pox=cetka i kraja isecanja.
    .split() --------------- Pretvara string u niz. ("") -- Svaki karakter postaje el niza, (" ") -- Svaka reč postaje el niza.
    .toLowerCase() --------- Vraća niz sa malim slovima.
    .toUpperCase() --------- Vraća niz sa velikom slovima.
    .substring() ----------- Iseca string i vraća isečeni string u zagradu se upisuje index pocetnog i zadnjeg karaktera.
    .substr() -------------- Iseca string i vraća isečeni string u zagradu se upisuje index pocetnog i zadnjeg karaktera.
    .toString() ------------ Pretvara broj u string.
    .replace() ------------- Pretraži string i zameni staru vrednost novom. U zagrade se upiše stara i nova vrednost.
    .repeat() -------------- Ispise ponovo string koliko se upiše u zagradi.
    .valueOf() ------------- Vraca vrednost stringa.

------------

    toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
    toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
    
    -----constructor	 Returns the string's constructor function
    startsWith()	Checks whether a string begins with specified characters
    endsWith()	Returns if a string ends with a specified value
    includes()	Returns if a string contains a specified value
    indexOf()	Returns the index (position) of the first occurrence of a value in a string
    lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
    
    localeCompare()	Compares two strings in the current locale
    match()	Searches a string for a value, or a regular expression, and returns the matches
    prototype	Allows you to add properties and methods to an object
    search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
*/

function namew() {
  let br = 1238888888;
  return br.toString().substring(2, 5);
}
console.log(Number(namew()) + 3);

function promeni(rec2) {
  let rec = "Voće imamo na stanju u prodavnici.";
  return rec.replace("Voće", rec2);
}
console.log(promeni("Malina").repeat(3));

let rec = "187908888";
console.log(rec.valueOf());
