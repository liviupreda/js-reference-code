// const john = {
//   name: 'John',
//   yearOfBirth: 1985,
//   job: 'teacher'
// };

// // -- Function constructor
// const Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// // Inherited by instances when method is called
// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// // Property inheritance
// Person.prototype.lastName = 'Popesco';

// const mary = new Person('Mary', 1990, 'medic');
// const jane = new Person('Jane', 1977, 'designer');
// const mark = new Person('Mark', 1948, 'retired');
// mary.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// console.log(mary.lastName, jane.lastName, mark.lastName);

// // --Object.create
// const personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// const john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1985;
// john.job = 'teacher';

// const jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' }
// });

// -- Primitives vs Objects

// Primitives
// let a = 23;
// let b = a;
// a = 46;
// console.log(a, b);

// // Objects
// let obj1 = {
//   name: 'John',
//   age: 26
// };
// let obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age, obj2.age);

// // Functions
// let age = 27;
// let obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age, obj.city);

// --FUNCTIONS
// Passing functions as arguments
// let years = [1985, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   let arrResult = [];
//   arr.forEach(function(e) {
//     arrResult.push(fn(e));
//   });
//   return arrResult;
// }

// function isFullAge(element) {
//   return element >= 18;
// }

// function maxHeartRate(element) {
//   // valid between ages 18 and 81
//   if (element >= 18 && element <= 81) {
//     return Math.round(206.9 - 0.67 * element);
//   } else return -1;
// }

// // Callback function
// function calculateAge(element) {
//   return 2019 - element;
// }

// // Callback function (no parantheses => we don't call it right away)
// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let heartRates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(heartRates);

// Functions returning functions
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', which subject do you teach?');
//     };
//   } else {
//     return function(name) {
//       console.log('Hello' + name + ', what do you do?');
//     };
//   }
// }

// const teacherQuestion = interviewQuestion('teacher');
// const designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Mary');
// interviewQuestion('teacher')('Mark');

// -- IIFEs

// function game() {
//   let score = Math.random() * 10; // random between 0 and 9
//   console.log(score >= 5);
// }
// game();

// We use the 1st set of parantheses to declare an anonymous function
// without the parser throwing an error, and the 2nd set of
// parantheses to invoke the function
// (function() {
//   let score = Math.random() * 10; // random between 0 and 9
//   console.log(score >= 5);
// })();

// (function(goodLuck) {
//   let score = Math.random() * 10; // random between 0 and 9
//   console.log(score >= 5 - goodLuck);
// })(5);

// -- CLOSURES

// function retirement(retirementAge) {
//   let a = ' years left until retirement';
//   return function(yearOfBirth) {
//     let age = 2019 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// let retirementUS = retirement(66);
// let retirementRO = retirement(65);
// let retirementNL = retirement(67);

// retirementUS(1959);
// retirementRO(1959);
// retirementNL(1959);

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log(name + ', which subject do you teach?');
//     };
//   } else {
//     return function(name) {
//       console.log('Hello' + name + ', what do you do?');
//     };
//   }
// }

// Interview Questions rewritten with closures

// function interviewQuestion(job) {
//   let designer = ', can you please explain what UX design is?';
//   let teacher = ', which subject do you teach?';
//   return function(name) {
//     if (job === 'designer') console.log(name + designer);
//     else if (job === 'teacher') console.log(name + teacher);
//     else console.log('Hello ' + name + ' , what do you do?');
//   };
// }

// const teacherQuestion = interviewQuestion('teacher');
// const designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Mary');
// interviewQuestion('plumber')('Gigi');

// -- BIND, CALL and APPLY - methods inherited from the Function constructor OBJ

// let john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log(
//         'Good ' +
//           timeOfDay +
//           ", Ladies and Gentlemen. I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           ' years old.'
//       );
//     } else if (style === 'friendly') {
//       console.log(
//         "Yo! What's up? How's the " +
//           timeOfDay +
//           ' treating ya? ' +
//           this.name +
//           ' my name, the best ' +
//           this.job +
//           ' from the hood, ' +
//           this.age +
//           ' years of age with a brand new track, yo!'
//       );
//     }
//   }
// };

// const emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// john.presentation('formal', 'Evening');
// // with CALL, this becomes the first argument (emily)
// // (method borrowing)
// john.presentation.call(emily, 'friendly', 'afernoon');

// // APPLY accepts the this argument and the others as an array
// john.presentation.apply(emily, ['friendly', 'morning']);

// // BIND doesn't immediately call the function, but generates a copy of the function
// // so we can store it somewhere. We can use it to create functions
// // with preset arguments; 'Carrying'

// let johnFriendly = john.presentation.bind(john, 'friendly');
// let emilyFormal = john.presentation.bind(emily, 'formal');

// johnFriendly('night');
// johnFriendly('morning');
// emilyFormal('night');
// emilyFormal('afternoon');

// let years = [1985, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   let arrResult = [];
//   arr.forEach(function(e) {
//     arrResult.push(fn(e));
//   });
//   return arrResult;
// }

// function calculateAge(element) {
//   return 2019 - element;
// }

// function isFullAge(ageLimit, element) {
//   return element >= ageLimit;
// }

// let ages = arrayCalc(years, calculateAge);
// // Age limit in japan 20 years. calculateAge accepts only 1 argument
// // so we preset it with bind and then enter it in isFullAge
// let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);
