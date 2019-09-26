///////////////////////////////////////
// Lecture: Hoisting

// Function hoisting

// calculateAge(1985);

// function calculateAge(year) {
//   console.log(2019 - year);
// }

// // retirementYears(1985);

// let retirementYears = function(year) {
//   console.log(65 - (2019 - year));
// };

// // retirementYears(1985);

// // Variable hoisting
// // console.log(age);
// const age = 34;

// function foo() {
//   const age = 65;
//   console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = 'Hello! ';
// first();

// function first() {
//   var b = 'Hi! ';
//   second();

//   function second() {
//     var c = 'Hey! ';
//     console.log(a + b + c);
//   }
// }

// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     third();
//   }
// }

// // This function is declared in the global scope,
// // so it cannot access vars b and c => error
// // Scope chain != Execution context
// function third() {
//   var d = 'John';
//   console.log(a + d);
// }

///////////////////////////////////////
// Lecture: The this keyword
// console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
//   console.log(2019 - year);
//   console.log(this);
// }

const john = {
  name: 'John',
  yearOfBirth: 1985,
  calculateAge: function() {
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
};

john.calculateAge();

const mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// Method borrowing - no () as functions are treated as variables here,
// and not called
mike.calculateAge = john.calculateAge;
// this becomes the mike object, as the obj mike invokes a function from obj john
mike.calculateAge();
