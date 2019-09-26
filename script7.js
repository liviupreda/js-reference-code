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
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log(
  'This is ' +
    firstName +
    ' ' +
    lastName +
    '. He was born in ' +
    yearOfBirth +
    '. Today, he is ' +
    calcAge(yearOfBirth) +
    ' years old.'
);

// -- Template literals
// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

// New string methods
const name = `${firstName} ${lastName}`;
console.log(name.startsWith('J')); // true
console.log(name.startsWith('j')); // false
console.log(name.endsWith('th')); // true
console.log(name.endsWith('Th')); // false
console.log(name.includes(' ')); // true
console.log(name.includes('ohn')); // true
console.log(firstName.repeat(3)); // JohnJohnJohn
console.log(firstName.repeat(3)); // JohnJohnJohn
console.log(`${firstName} `.repeat(3)); // John John John
