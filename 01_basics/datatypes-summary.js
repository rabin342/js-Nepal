//primitive data types
// 7 types: String, Number, Boolean, Null, undefined, symbol(unique value), BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


const bigNumber = 2364420490921234n


// Reference(Non primitive)

//Array, Objects, Functions
const heros = ["pukar", "aaditya", "guufffran"];
let myObj = {
    name: "rabin",
    age: 24,

}

const myFunction =function () {
console.log("Hello world");

}
console.log(typeof myFunction );
