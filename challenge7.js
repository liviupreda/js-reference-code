////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, 
and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. 
If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, 
default parameters, maps, arrow functions, destructuring, etc.

*/

// super class
class TownObjective {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

// parks and streets are subclasses
class Park extends TownObjective {
  constructor(name, buildYear, treeNumber, parkArea) {
    super(name, buildYear);
    this.treeNumber = treeNumber;
    this.parkArea = parkArea;
  }

  treeDensity() {
    const density = this.treeNumber / this.parkArea; //km^2
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends TownObjective {
  // default = normal, => default size = 3
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  // assign a number to each of the sizes => hashmap
  streetSize() {
    const sizeClass = new Map();
    sizeClass.set(1, 'tiny');
    sizeClass.set(2, 'small');
    sizeClass.set(3, 'normal');
    sizeClass.set(4, 'big');
    sizeClass.set(5, 'huge');
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${sizeClass.get(
        this.size
      )} street`
    );
  }
}

const allParks = [
  new Park('Herastrau', 1987, 215, 0.2),
  new Park('Tabacarie', 1894, 3541, 2.9),
  new Park('Cismigiu', 1953, 949, 0.4)
];

const allStreets = [
  new Street('Magheru', 1999, 1.1, 4),
  new Street('Dacia', 2008, 2.7, 2),
  new Street('Drumul Taberei', 2015, 0.8),
  new Street('Raul Doamnei', 1982, 2.5, 5)
];

function calc(arr) {
  // reduces an array to a single value (ES5)
  const sum = arr.reduce((prev, curr, index) => prev + curr, 0); // start with prev at 0

  // destructuring
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('-----------PARKS REPORT-----------');
  // Density
  p.forEach(e => e.treeDensity());
  // Average age
  const ages = p.map(e => new Date().getFullYear() - e.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
  // Which park has more than 1000 trees
  // ES6 findIndex()
  const i = p.map(e => e.treeNumber).findIndex(e => e >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('-----------STREETS REPORT-----------');
  // Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(e => e.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );
  // Classify sizes
  s.forEach(e => e.streetSize());
}

reportParks(allParks);
reportStreets(allStreets);
