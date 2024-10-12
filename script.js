'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassangers = 1,
//   price = 199 * numPassangers
// ) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', undefined, 5);

// const flight = 'LH234';
// const surya = {
//   name: 'Surya',
//   age: 22,
//   passportNo: '123456789',
// };

// const checkIn = function (flighNum, passenger) {
//   flighNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passportNo === '123456789') {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport No');
//   }
// };
// checkIn(flight, surya);
// console.log(flight);
// console.log(surya);

// const flighNum = flight;
// const passenger = surya;

// const newPassport = function (person) {
//   person.passportNo = Math.trunc(Math.random() * 10000000000);
//   console.log(person.passportNo);
// };

// newPassport(surya);
// checkIn(flight, surya);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transFormer = function (str, fn) {
//   console.log(`original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed string: ${fn.name}`);
// };

// transFormer('Javscript is the best!', upperFirstWord);
// transFormer('Javscript is the best!', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     return `${greeting} ${name}`;
//   };
// };

// const greet = greeting => name => `${greeting} ${name}`;
// const greetHey = greet('Hey');
// console.log(greetHey('Surya'));

// console.log(greet('Hi')('Iron Man'));

// const airIndia = {
//   airline: 'Air India',
//   iataCode: 'AI',
//   bookings: [],
//   book(flighNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flighNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flighNum} , ${name}` });
//   },
// };

// airIndia.book('LH123', 'Surya');
// airIndia.book('LH234', 'Iron Man');
// console.log(airIndia);

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = airIndia.book;

// console.log(book.call(euroWings, 23, 'Sarah'));

// console.log(euroWings);

// book.call(airIndia, 239, 'Bolt');

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'CH',
//   bookings: [],
// };

// book.call(swiss, 239, 'Mary cooper');

// const flightData = [583, 'George'];

// book.apply(swiss, flightData);

//Bind method

// const bookEW = book.bind(euroWings);
// bookEW(239, 'Sarah');

//With Even Listeners;

// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 100));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT = addTaxRate(0.23);

// console.log(addVAT(110));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// let test1 = [5, 2, 3];
// let test2 = [1, 5, 3, 9, 6, 1];
// const pollBtn = document.querySelector('.poll');

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   displayResults() {
//     const resultPrompt = prompt(
//       'In which type format do you want the results to be displayed?'
//     );
//     if (resultPrompt === 'array') {
//       console.log(this.answers);
//     } else if (resultPrompt === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     this.displayResults();
//   },
// };

// console.log(poll.displayResults.call({ answers: test1 }, 'string'));
// console.log(poll.displayResults.call({ answers: test2 }, 'string'));

// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

///////////////////////////////////////

//Imediately Invoked Function Expression(IIFE);

// (() => console.log('I am Iron Man'))();

///////////////////////////////////////

//Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();

// console.dir(booker);

console.log(anyArr([1, 2, 2, 3, 4], [2, 4, 4, 5, 6], [5, 1, 2, 3, 6, 6]));

function anyArr(...arr) {
  return arr.flat().filter((item, index) => arr.indexOf(item) === index);
}
