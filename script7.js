// -- LET AND CONST - block scoped (if, for, while blocks)
// var - function scoped
// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(
    firstName +
      ', born in ' +
      yearOfBirth +
      ' is now officially allowed to drive a car.'
  );
}

driversLicense5(true);

// // ES6
// function driversLicense6(passedTest) {
//   // with let and const variables are not hoisted to undefined;
//   // we get an Uncaught ReferenceError
//   console.log(firstName);
//   let firstName;
//   // const can only be declared here. syntax error if defined inside of the
//   // if-block
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = 'John';
//   }

//   console.log(
//     firstName +
//       ', born in ' +
//       yearOfBirth +
//       ' is now officially allowed to drive a car.'
//   );
// }

// driversLicense6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

console.log(i); // 23
