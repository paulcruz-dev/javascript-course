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
 
// const functionTypes = {
//     regularFunction: function () {
//         console.log('Arguments length:', arguments.length);
//         console.log('First argument:', arguments[0]);
//     },
 
//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');
//     },
 
//     modernFunction: (...args) => {
//         console.log('Args length', args.length);
//         console.log('First arg:', args[0]);
//     },
// }
 
// functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');
 
// let age = 30;
 
// let oldage = age;
 
// age = 31;
// console.log('age', age);
// console.log('oldAge', oldage);
 
// const me = {name: 'Paul', age: 22};
 
// const friend = me;
 
// friend.name = 'John';
// friend.age = 23;
 
// console.log('me:', me);
// console.log('friend:', friend);
 
// const original = {
//     name: 'Paul',
//     age: 22,
//     hobbies: ['reading', 'sleeping'],
// };
 
// const shallowCopy = { ...original };
 
// shallowCopy.name = 'John';
 
// console.log('original name:', original.name);
// console.log('Copy name:', shallowCopy.name);
 
// shallowCopy.hobbies.push('gaming');
 
// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);
 
const deepOriginal = {
    name: 'Berting',
    age: 21,
    // nested object
    address: {city: 'Manila', country: 'Philippines'},
    // nested array
    hobbies: ['sleeping', 'reading'],
};
 
const deepCopy = structuredClone(deepOriginal);
 
deepCopy.address.city = 'Quezon';
deepCopy.hobbies.push('eating');
deepCopy.name = 'Cardo';
 
console.log(deepOriginal);
console.log(deepCopy);