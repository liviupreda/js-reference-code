// -- LET AND CONST - block scoped (if, for, while blocks or simply wrapped in {})
// // var - function scoped
// // // ES5
// // var name5 = 'Jane Smith';
// // var age5 = 23;
// // name5 = 'Jane Miller';
// // console.log(name5);

// // // ES6
// // const name6 = 'Jane Smith';
// // let age6 = 23;
// // name6 = 'Jane Miller';
// // console.log(name6);

// // ES5
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     console.log(firstName);
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }

//   console.log(
//     firstName +
//       ', born in ' +
//       yearOfBirth +
//       ' is now officially allowed to drive a car.'
//   );
// }

// driversLicense5(true);

// // // ES6
// // function driversLicense6(passedTest) {
// //   // with let and const variables are not hoisted to undefined;
// //   // we get an Uncaught ReferenceError
// //   console.log(firstName);
// //   let firstName;
// //   // const can only be declared here. syntax error if defined inside of the
// //   // if-block
// //   const yearOfBirth = 1990;

// //   if (passedTest) {
// //     firstName = 'John';
// //   }

// //   console.log(
// //     firstName +
// //       ', born in ' +
// //       yearOfBirth +
// //       ' is now officially allowed to drive a car.'
// //   );
// // }

// // driversLicense6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0 1 2 3 4
// }

// console.log(i); // 23

// // -- BLOCKS AND IIFES
// // use a block instead of IIFEs for data privacy

// // ES 6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }

// console.log(a + b); // script7.js:73 Uncaught ReferenceError: a is not defined
// console.log(c); // 3

// ES5
// (function() {
//   var c = 3;
// })();

// console.log(c); // Uncaught ReferenceError: c is not defined

// -- STRINGS
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//   return 2019 - year;
// }

// // ES5
// console.log(
//   'This is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '. He was born in ' +
//     yearOfBirth +
//     '. Today, he is ' +
//     calcAge(yearOfBirth) +
//     ' years old.'
// );

// // -- Template literals
// // ES6
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// // New string methods
// const name = `${firstName} ${lastName}`;
// console.log(name.startsWith('J')); // true
// console.log(name.startsWith('j')); // false
// console.log(name.endsWith('th')); // true
// console.log(name.endsWith('Th')); // false
// console.log(name.includes(' ')); // true
// console.log(name.includes('ohn')); // true
// console.log(firstName.repeat(3)); // JohnJohnJohn
// console.log(firstName.repeat(3)); // JohnJohnJohn
// console.log(`${firstName} `.repeat(3)); // John John John

// -- ARROW FUNCTIONS

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(element) {
//   return 2019 - element;
// });
// console.log(ages5);

// // ES6
// let ages6 = years.map(element => 2019 - element);
// console.log(ages6);

// ages6 = years.map(
//   (element, index) => `Age element ${index + 1}: ${2019 - element}.`
// );
// console.log(ages6);

// let ages6 = years.map((element, index) => {
//   const now = new Date().getFullYear();
//   const age = now - element;
//   return `Age element ${index + 1}: ${age}.`;
// });
// console.log(ages6);

// -- ARROW FUNCTIONS THIS KEYWORD
// arrow functions use the .this keyword of the function they are written in
// "lexical this"
// ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this; // fix
//     document.querySelector('.green').addEventListener('click', function() {
//       // regular function declaration for the callback; this does not
//       // point to the object
//       // but to the global object => position and color = undefined
//       var string =
//         'This is box number ' + self.position + ' and color is ' + self.color;
//       alert(string);
//     });
//   }
// };
// box5.clickMe();

//ES6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     // arrow fct shares this with the function it is written in
//     document.querySelector('.green').addEventListener('click', () => {
//       // regular function declaration for the callback; this does not
//       // point to the object
//       // but to the global object => position and color = undefined
//       var string =
//         'This is box number ' + this.position + ' and color is ' + this.color;
//       alert(string);
//     });
//   }
// };
// box6.clickMe();

// const box6_2 = {
//   color: 'green',
//   position: 1,
//   // do not use arrow functions for method calls
//   // lexical this means that this points to global obj
//   clickMe: () => {
//     // arrow fct shares this with the function it is written in
//     document.querySelector('.green').addEventListener('click', () => {
//       // regular function declaration for the callback; this does not
//       // point to the object
//       // but to the global object => position and color = undefined
//       var string =
//         'This is box number ' + this.position + ' and color is ' + this.color;
//       alert(string);
//     });
//   }
// };
// box6_2.clickMe();

// ES5
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {
//   var array = friends.map(
//     function(element) {
//       // callback in another function
//       // this.name will return ''; in ES5 we fix this with bind / call
//       return this.name + ' is friends with ' + element;
//     }.bind(this) // this will now point to the object
//   );
//   console.log(array);
// };

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// ES6
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends6 = function(friends) {
//   const array = friends.map(
//     element => `${this.name} is friends with ${element}`
//   );
//   console.log(array);
// };

// let friends = ['Bob', 'Jane', 'Mark'];
// new Person('Cici').myFriends6(friends);

// -- DESTRUCTURING - extract values from arrays,
// or properties from objects, into distinct variables.

//ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, year] = ['John', 26]; // array destructuring
// console.log(name);
// console.log(year);

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };

// const { firstName, lastName } = obj; // object destructuring
// console.log(firstName, lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// Return multiple values from a function
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age]; // 65 = retirement age
// }

// const [age, retirement] = calcAgeRetirement(1985);
// console.log(age);
// console.log(retirement);

// -- ARRAYS IN ES6
// const boxes = document.querySelectorAll('.box'); // returns node list

// // ES5
// // // transform node list to array
// var boxesArr5 = Array.prototype.slice.call(boxes);
// // change all boxes to .blue class
// boxesArr5.forEach(function(curr) {
//   curr.style.backgroundColor = 'dodgerblue';
// });

//ES6
// transform node list to array with FROM Array method
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(curr => (curr.style.backgroundColor = 'dodgerblue'));

// loop through the array and change the text for box1 and box3 to
// 'Changed to blue'
// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   // continue the loop for the box that is already class .blue
//   if (boxesArr5[i].classList.contains('blue')) {
//     continue; // goes to next iteration of the loop
//   }
//   boxesArr5[i].textContent = 'Changed to blue';
// }

// ES6
// using for ... of
// for (const curr of boxesArr6) {
//   if (curr.className.includes('blue')) continue;
//   curr.textContent = 'Changed to blue';
// }

// New Methods to finds elements in an array
// Having an array of ages, we know only 1 person is of full age 18
// We want to print what his/ her age is

//ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var fullAge = ages.map(function(curr) {
//   return curr >= 18;
// });

// console.log(fullAge);
// console.log(fullAge.indexOf(true)); // position 3
// console.log(
//   'The full age person is ' + ages[fullAge.indexOf(true)] + ' years old.'
// );

//ES6: findIndex , find
// ages.findIndex(curr => curr >= 18); // position 3
// console.log(
//   `The full age person is ${ages.find(curr => curr >= 18)} years old`
// );

// -- SPREAD OPERATOR
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1); // 81

// Pass an entire array into the addFourAges function
// ES5
// var ages = [18, 30, 12, 21];
// we can use the apply() method to call the function with the array values
// var sum2 = addFourAges.apply(null, ages); // this variable is null in this case
// console.log(sum2); // 81

// ES6
// const sum3 = addFourAges(...ages); // spread operator EXPANDS an array into its components
// console.log(sum3);

// Join arrays
// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const extendedFamily = [...familySmith, 'Lily', ...familyMiller];
// Lily will be introduced between the two joined arrays, forming an array
// length = 7
// console.log(extendedFamily);

// Spread operator and node lists
// select the heading and 3 boxes and change the text color of all 4 elements
// to yellow
const h = document.querySelector('h1'); // node
const boxes = document.querySelectorAll('.box'); // node list
const all = [h, ...boxes];
// convert node list to an array
Array.from(all).forEach(curr => (curr.style.color = 'yellow'));
