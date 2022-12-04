"use strict"
const User = require("./user")

let korisnik1 = new User ("korisnik1")
let korisnik2 = new User ("korisnik2")

korisnik1.printName()
korisnik1.login()
korisnik2.printName()
setTimeout(
    ()=>{
        console.log("Vreme je isteklo");

    },
    5000
)
let hello = function () {
    console.log("Anonimna funkcija");
    
}
console.log(hello());