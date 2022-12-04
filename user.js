"use strict"
const Person = require("./person")

module.exports = class extends Person{
    login(){
        console.log(`Login ${this.name}`);
    }
    printName(){
        console.log(`Moje ime je ${this.name} Ja sam korisnik`);
    }
}