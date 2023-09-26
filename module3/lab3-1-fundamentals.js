console.log("1. -------------------------");
//10
console.log("" + 1 + 0);
//-1
console.log("" - 1 + 0);
//1
console.log(true + false);
//true
console.log(!false);
//2
console.log(6 / "3");
//6
console.log("2" * "3");
//9px
console.log(4 + 5 + "px");
//$45
console.log("$" + 4 + 5);
//2
console.log("4" - 2);
//NaN
console.log("4px" - 2);
// -9 5
console.log(" -9 " + 5);
//-14
console.log(" -9 " - 5);
//1
console.log(null + 1);
//NaN
console.log(undefined + 1);
//true
console.log(undefined == null);
//false
console.log(undefined === null);
//-2
console.log(" \t \n ", -2);

console.log("2. -------------------------");

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
//34
let addition = three + four;
console.log("addition:", addition);
//12
let multiplication = three * four;
console.log("multiplication:", multiplication);
//0.75
let division = three / four;
console.log("division:", division);
//-1
let subtraction = three - four;
console.log("subtraction:", subtraction);
//true
let lessThan1 = three < four;
console.log("lessThan1:", lessThan1);
//false
let lessThan2 = thirty < four;
console.log("lessThan2:", lessThan2);

console.log("3. -------------------------");

// not print
if (0) console.log("#1 zero is true");
//print : non-empty string is considered true
if ("0") console.log("#2 zero is true");
//not print
if (null) console.log("null is true");
//print
if (-1) console.log("negative is true");
//print
if (1) console.log("positive is true");

console.log("4. -------------------------");

// let x = 5;
// x += 3; (x = x + 3)
// console.log(x); // Output: 8

// let a = 2,
//   b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

let a = 2,
  b = 3;
let result = `${a} + ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;
console.log("result:", result);

console.log("5. -------------------------");

// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

const getGreeting = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting("Mary"));

console.log("6. -------------------------");

const westley = {
  name: "Westley",
  numFingers: 5,
  lastName: "Johnson",
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
  lastName: "Smith",
};
const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name} ${person.lastName}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers <= 5) {
      return "Nice to meet you.";
    } else {
      return "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?";
    }
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

const tiger = {
  name: "Tiger",
  numFingers: 5,
  lastName: "Woods",
};

inigo.greeting(tiger);

console.log("7. -------------------------");

const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  fullTime() {
    console.log("Fulltime score is " + this.score);
    return this;
  },
  fouls() {
    this.score -= 1;
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .threePointer()
  .fouls()
  .fullTime();

console.log("8. -------------------------");

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const auckland = {
  name: "Auckland",
  population: 1_440_300,
  state: "AKL",
  founded: "18 September 1840",
  timezone: "Auckland",
};

function printCityProperties(city) {
  for (let property in city) {
    console.log(`${property}: ${city[property]}`);
  }
}

printCityProperties(sydney);
printCityProperties(auckland);

console.log("9. -------------------------");

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports]
moreSports.push('Soccer');
moreSports.unshift('Golf');

let dog2 = [dog1, 'Coco'];

let cat2 = {name: 'Boba', breed: 'Siberian'};

console.log(moreSports);
console.log(dog2);
console.log(cat2);

console.log(teamSports);
console.log(dog1);
console.log(cat1);

console.log("10. -------------------------");

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
canDrive() {
    return this.age >= 18;
}
}

const millie = new Person('Millie', 20);
console.log(millie);

const molly = new Person('Molly', 18);
console.log(molly);

const May = new Person("May", 24); 
console.log(May);

console.log(millie.canDrive());