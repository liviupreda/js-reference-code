// Asynchronous- using the setTimeout function
const second = () => {
  setTimeout(() => {
    console.log('Async hey there');
  }, 2000);
};

// Synchronous
const first = () => {
  console.log('Hey there');
  second();
  console.log('The end');
};

first();
