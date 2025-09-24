'use strict';
 
// console.log(varX);
// console.log(letX);
// console.log(constX);
 
// var varX = 1;
// let letX = 2;
// const constX = 3;
 
// function addDecl(a, b) {
//     return a + b;
// }
 
// const addExpr = function(a, b) {
//     return a + b;
// };
// const addArrow = (a, b) => a + b;
 
// const person = {
//     name: 'Joji',
//     greet: function () {
//         console.log(`Yo It's ${this.name}`);
//     },
// };
 
// person.greet();
 
// const anotherPerson = {name: 'Pol'};
 
// // Borrows the greet before
// anotherPerson.greet = person.greet;
 
// // Displays another greet
// anotherPerson.greet();
 
// // Detached Function
// const greetFunction = person.greet;
 
// greetFunction();
 
// const obj = {
//     name: 'Objects',
//     regularMethod: function() {
//         console.log('Regular:', this.name);
//     },
//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };
 
// obj.regularMethod();
 
// obj.arrowMethod();
 
// const timer = {
//     name: 'Timer',
//     start: function () {
//         console.log(`${this.name} starting....`);
 
//         const self = this;
       
//         setTimeout(function () {
//             console.log(`${self.name} Finished`);
//         }, 1000);
//     },
//     startModern: function () {
//         console.log(`${this.name} Starting Modern...`);
 
//         setTimeout (() => {
//             console.log(`${this.name} finished modern`);
//         }, 1500);
//     },
// };
 
// timer.start();
// timer.startModern();
 
const functionTypes = {
    regularFunction: function () {
        console.log('Arguments length:', arguments.length);
        console.log('First argument:', arguments[0]);
    },
 
    arrowFunction: () => {
        console.log(arguments);
        console.log('Arrow function called');
    },
 
    modernFunction: (...args) => {
        console.log('Args length', args.length);
        console.log('First arg:', args[0]);
    },
}
 
functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');