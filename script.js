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

const airIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
  book(flighNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flighNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flighNum} , ${name}` });
  },
};

airIndia.book('LH123', 'Surya');
airIndia.book('LH234', 'Iron Man');
console.log(airIndia);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = airIndia.book;

console.log(book.call(euroWings, 23, 'Sarah'));

console.log(euroWings);

book.call(airIndia, 239, 'Bolt');

const swiss = {
  airline: 'Swiss',
  iataCode: 'CH',
  bookings: [],
};

book.call(swiss, 239, 'Mary cooper');

const flightData = [583, 'George'];

book.apply(swiss, flightData);
