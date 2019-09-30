// // Asynchronous- using the setTimeout function
// const second = () => {
//   setTimeout(() => {
//     console.log('Async hey there');
//   }, 2000);
// };

// // Synchronous
// const first = () => {
//   console.log('Hey there');
//   second();
//   console.log('The end');
// };

// first();

// -- Async JS with CALLBACKS
// function getRecipe() {
//   // simpulate AJAX call from the webserver
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);

//     setTimeout(
//       id => {
//         const fakeRecipe = { title: 'Pasta Bolognese', publisher: 'Liv' };
//         console.log(`${id}: ${fakeRecipe.title} by ${fakeRecipe.publisher}`);

//         setTimeout(
//           publisher => {
//             const fakeRecipe2 = { title: 'Pizza al Cippola', publisher: 'Liv' };
//             console.log(fakeRecipe);
//           },
//           1500,
//           fakeRecipe.publisher
//         );
//       },
//       1500,
//       recipeID[2]
//     ); // recipeID[2] will be thrown in the id argument above
//   }, 1500);
// }
// getRecipe();

// -- PROMISES
// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//     // no need to call the reject function here. setTimeout always finishes
//   }, 1500);
// });

// // function that receives ID and returns a promise
// const getRecipe = recID => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       id => {
//         const recipe = { title: 'Pasta Bolognese', publisher: 'Liv' };
//         resolve(`${id}: ${recipe.title} by ${recipe.publisher}`);
//       },
//       1500,
//       recID
//     );
//   });
// };

// const getRelated = publisher => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       pub => {
//         const recipe = { title: 'Pizza al Cippola', publisher: 'Liv' };
//         resolve(`${pub}: ${recipe.title}`);
//       },
//       1500,
//       publisher
//     );
//   });
// };

// // Consume promises
// getIDs
//   .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]); // returns a promise
//   })
//   .then(recipe => {
//     // Chaining
//     console.log(recipe);
//     return getRelated('Liviu Preda');
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log('Something went wrong');
//   });

// -- ASYNC/ AWAIT ES8 - designed to CONSUME PROMISES, not to produce them
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
    // no need to call the reject function here. setTimeout always finishes
  }, 1500);
});

// function that receives ID and returns a promise
const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      id => {
        const recipe = { title: 'Pasta Bolognese', publisher: 'Liv' };
        resolve(`${id}: ${recipe.title} by ${recipe.publisher}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = { title: 'Pizza al Cippola', publisher: 'Liv' };
        resolve(`${pub}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

// Asynchronous function; runs in the background and is non- blocking
// returns a promise; Await can only be used inside an async function,
// because it stops the code in that function from executing
// until the promise is resolved
async function getRecipesAW() {
  // consume the three promises
  const IDs = await getIDs; // stops the code from executing until promise is resolved
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Liviu Preda');
  console.log(related);

  // If we return a value from an async function, the
  // returned promise from the function will be resolved with that same value
  return recipe;
}
getRecipesAW().then(promiseResult =>
  console.log(`${promiseResult} async return test`)
);
