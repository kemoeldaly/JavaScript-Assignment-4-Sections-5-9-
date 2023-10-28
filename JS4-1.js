//! Content: Functional programming and higher order
// TODO: Note to students - these questions are experimental & may not all be
// TODO: possible presently - do to best of ability using tools from lectures

// Reading: Review EJS 5, review other chapters as needed

// HW:
//* 1.  Filter out all of the empty strings from the list below
// Input: let places = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"]
// Output: ['Argentina', 'San Diego', 'Boston', 'New York']
// let place = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"];

let filteredPlaces = place.filter(function (place) {
  return place.trim() !== "";
});

console.log(filteredPlaces);

//* 2. Write an anonymous function that sorts this list by the last name
// Input: let author = ["Joel Carter", "Victor aNisimov", "Andrew P. Garfield","David hassELHOFF","Gary A.J. Bernstein"]
// Output: ['Victor aNisimov', 'Gary A.J. Bernstein', 'Joel Carter', 'Andrew P. Garfield', 'David hassELHOFF']
let author = [
  "Joel Carter",
  "Victor aNisimov",
  "Andrew P. Garfield",
  "David hassELHOFF",
  "Gary A.J. Bernstein",
];

author.sort(function (a, b) {
  const partsA = a.split(" ");
  const partsB = b.split(" ");

  const lastNameA = partsA[partsA.length - 1].toLowerCase();
  const lastNameB = partsB[partsB.length - 1].toLowerCase();

  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
});

console.log(author);

//* 3. Convert the list below from Celsius to Farhenheit, using the map function
// # F = (9/5)*C + 32
// places = [{name: 'Nashua', temperature: 32},{name: "Boston", temperature: 12},{name: "Los Angelos", temperature: 44,},{name: "Miami", temperature: 29}]

// Output: [('Nashua', 89.6), ('Boston', 53.6), ('Los Angelos', 111.2), ('Miami', 84.2)]
const places = [
  { name: "Nashua", temperature: 32 },
  { name: "Boston", temperature: 12 },
  { name: "Los Angeles", temperature: 44 },
  { name: "Miami", temperature: 29 },
];

const converted = places.map(
  (place) =>
    `('${place.name}', ${((place.temperature * 9) / 5 + 32).toFixed(1)})`
);

console.log(converted);

//* 4. Write a recursion function to perform the fibonacci sequence up to the number passed in.
//? You don't need to log out 'iteration 0' etc if you don't want to.
//? Just log the final values for each iteration
// Output for fib(5) =>
// Iteration 0: 1
// Iteration 1: 1
// Iteration 2: 2
// Iteration 3: 3
// Iteration 4: 5
// Iteration 5: 8

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 0; i <= 5; i++) {
  console.log(`Iteration ${i}: ${fibonacci(i)}`);
}
