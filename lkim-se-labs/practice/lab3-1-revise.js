const { get } = require("http");

console.log("1. -------------------------");
//10
console.log("" + 1 + 0);
//-1
console.log("" - 1 + 0);
//1
console.log(true + false);
//false
console.log(!true);
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
//-9 5
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
console.log(" \t \n" - 2);

console.log("2. -------------------------");

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
//34
let addition = three + four;
console.log(addition);
//12
let multiplication = three * four;
console.log(multiplication);
//0.75
let division = three / four;
console.log(division);
//-1
let subtraction = three - four;
console.log(subtraction);
//true
let lessThan1 = three < four;
console.log(lessThan1);
//false
let lessThan2 = thirty < four;
console.log("lessThan2:", lessThan2);

console.log("3. -------------------------");

//true
if (0) console.log('#1 zero is true')
//false
if ("0") console.log('#2 zero is true')
//false
if (null) console.log('null is true')
//true
if (-1) console.log('negative is true')
//true
if (1) console.log('positive is true')

console.log("4. -------------------------");

let a = 2, b = 3;
let result = `${a} + ${b} is `;

// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

let numberResult = result += 10 ? "less than 10" : "greater than 10";
console.log(numberResult);

console.log("5. -------------------------");

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

const getGreeting = (name) => {
    return 'Hello ' + name + '!';
}

console.log(getGreeting("Lisa"));

console.log("6. -------------------------");

