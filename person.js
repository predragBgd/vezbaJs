"use strict"
class Person {
    constructor(name){
        this.name = name
    }
    printName(){
        console.log(`Moje ime je ${this.name}`);
    }
    login(){
    console.log(`Logovan sam`);
    }
}
module.exports = Person