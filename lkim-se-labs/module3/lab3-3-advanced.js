console.log("1. -------------------------");

function makeCounter() {
  let currentCount = 2;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
  };
}

const incrementBy = 2;

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter();
counter2();
counter2();
counter2();

console.log("2. -------------------------");

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}
const timeout1 = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
const timeout2 = setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
const timeout3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
const timeout5 = setTimeout(delayMsg, 5000, '#5: Delayed by 5 seconds');
delayMsg('#4: Not delayed at all')

// order of print : #4, #3, #2, #1

clearTimeout(timeout5);

console.log("3. -------------------------");

function debounce(func, ms) {
    let timeoutId;

    return function() {
      clearTimeout(timeoutId);

      const context = this;
      const args = arguments;

      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, ms);
    };
  }

  function printMe(msg) {
    console.log('Printing debounced message:', msg);
  }

  printMe = debounce(printMe, 1000);

  setTimeout(() => printMe('First message'), 100);
  setTimeout(() => printMe('Second message'), 200);
  setTimeout(() => printMe('Third message'), 300);

console.log("4. -------------------------");

// function printFibonacci() {
//   let prev = 0;
//   let current = 1;

//   console.log(prev); // Output the first number in the sequence

//   const fibonacciInterval = setInterval(() => {
//     console.log(current); // Output the current number in the sequence
//     const next = prev + current;
//     prev = current;
//     current = next;
//   }, 1000)
// };

// printFibonacci();

// function printFibonacciTimeouts() {
//   let prev = 0;
//   let current = 1;

//   console.log(prev); // Output the first number in the sequence

//   const fibonacciTimeout = () => {
//     console.log(current); // Output the current number in the sequence
//     const next = prev + current;
//     prev = current;
//     current = next;
//     setTimeout(fibonacciTimeout, 1000); // Call the function again after 1 second
//   };

//   setTimeout(fibonacciTimeout, 1000); // Start the sequence after 1 second
// }

// printFibonacciTimeouts();

function printFibonacci(limit) {
  let prev = 0;
  let current = 1;
  let count = 0;

  console.log(prev); // Output the first number in the sequence
  count++;

  const fibonacciInterval = setInterval(() => {
    if (count >= limit) {
      clearInterval(fibonacciInterval);
      return;
    }

    console.log(current); // Output the current number in the sequence
    const next = prev + current;
    prev = current;
    current = next;
    count++;
  }, 1000); // Output a number every second (1000 milliseconds)
}

printFibonacci(10);

console.log("5. -------------------------");

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {

    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  }
};

// car.description(); //works
// setTimeout(car.description, 200); //fails

// It fails as this. under method gets lost

// setTimeout(function () {
//   car.description();
// }, 200);

// let carClone = Object.assign({}, car);
// carClone.year = 2000;

// carClone.description();

//yes, because the car has a setTimeout of 200

setTimeout(car.description.bind(car), 200);

let carClone = Object.assign({}, car);
carClone.make = "Ferrari";
setTimeout(carClone.description.bind(carClone), 400);

console.log("6. -------------------------");

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}
Function.prototype.delay = function (delayTime) {
  var originalFunction = this;
  return function (...args) {
    setTimeout(function () {
      originalFunction.apply(null, args);
    }, delayTime);
  };
};

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
multiply.delay(1000)(2, 3, 4, 5);

console.log("7. -------------------------");

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.toString = function () {
  return `Person: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
};

var john = new Person("John", "Smith", 30);
console.log(john.toString());

var anne = new Person("Anne", "Mellor", 25);
var cleo = new Person("Cleo", "Patra", 22);
console.log(anne.toString());
console.log(cleo.toString());

function Student(firstName, lastName, age, cohort) {
  Person.call(this, firstName, lastName, age);
  this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


var jane = new Student("Jane", "Smith", 20, "2023");
console.log(jane.toString());
console.log(jane.cohort);

Student.prototype.toString = function () {
  return `Student: ${this.firstName} ${this.lastName}, Age: ${this.age}, Cohort: ${this.cohort}`;
};

var kirsty = new Student("Kirsty", "Rose", 21, "2021");
console.log(kirsty.toString());
console.log(kirsty.cohort);

var elly = new Student("Elly", "Wing", 23, "2023");
console.log(elly.toString());
console.log(elly.cohort);

console.log("8. -------------------------");

class DigitalClock {
  constructor(prefix) {
  this.prefix = prefix;
  }
  display() {
  let date = new Date();
  //create 3 variables in one go using array destructuring
  let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
  date.getSeconds()];
  if (hours < 10) hours = '0' + hours;
  if (mins < 10) mins = '0' + mins;
  if (secs < 10) secs = '0' + secs;
  console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
  clearInterval(this.timer);
  }
  start() {
  this.display();
  this.timer = setInterval(() => this.display(), 1000);
  }
  }
  const myClock = new DigitalClock('my clock:')
  myClock.start()

  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }

    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }

  const myPrecisionClock = new PrecisionClock('my clock:', 1000); // Precision of 500ms
  myPrecisionClock.start();

  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }

    display() {
      let currentDate = new Date();
      let currentHours = currentDate.getHours();
      let currentMinutes = currentDate.getMinutes();
      let currentTime = `${currentHours}:${currentMinutes}`;

      super.display();

      if (currentTime === this.wakeupTime) {
        console.log('Wake Up');
        this.stop();
      }
    }
  }

console.log("9. -------------------------");

// function randomDelay() {
//   return new Promise(resolve => {
//     const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1 and 20 seconds
//     setTimeout(resolve, delay);
//   });
// }

// // Example usage:
// randomDelay().then(() => {
//   console.log('Delayed function executed!');
// });

// function randomDelay() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 2000) + 2000; // Random delay between 1 and 20 seconds
//     setTimeout(() => {
//       if (delay % 2 === 0) {
//         resolve();
//       } else {
//         reject(new Error('Delay failed'));
//       }
//     }, delay);
//   });
// }

//   randomDelay()
//   .then(() => {
//     console.log('Successful delay!');
//   })
//   .catch(error => {
//     console.error('Delay failed:', error);
//     console.log('Alternate message for rejected promise');
//   });

function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 2000; // Random delay between 1 and 20 seconds
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(new Error(`Delay of ${delay}ms failed`));
      }
    }, delay);
  });
}

randomDelay()
  .then(delay => {
    console.log(`Successful delay of ${delay}ms`);
  })
  .catch(error => {
    console.error(error.message);
    console.log('Alternate message for rejected promise');
  });

console.log("10. -------------------------");

// import fetch from 'node-fetch';

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));