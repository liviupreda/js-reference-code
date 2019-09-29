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
function getRecipe() {
  // simpulate AJAX call from the webserver
  setTimeout(() => {
    const recipeID = [523, 883, 432, 974];
    console.log(recipeID);

    setTimeout(
      id => {
        const fakeRecipe = { title: 'Pasta Bolognese', publisher: 'Liv' };
        console.log(`${id}: ${fakeRecipe.title} by ${fakeRecipe.publisher}`);

        setTimeout(
          publisher => {
            const fakeRecipe2 = { title: 'Pizza al Cippola', publisher: 'Liv' };
            console.log(fakeRecipe);
          },
          1500,
          fakeRecipe.publisher
        );
      },
      1500,
      recipeID[2]
    ); // recipeID[2] will be thrown in the id argument above
  }, 1500);
}
getRecipe();
