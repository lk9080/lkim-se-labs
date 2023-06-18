console.log("1. -------------------------");

function ucFirstLetters(string) {
  let words = string.split(" ");
  // Iterate over each word
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of the word
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  // Join the capitalized words back into a string
  let result = words.join(" ");
  return result;
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
console.log(ucFirstLetters("new york"));

console.log("2. -------------------------");

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

console.log(truncate('This text will', 25))

console.log(truncateIfElse('This text will be truncated if it is too long', 25))


function truncateIfElse(str, max) {
  if (str.length > max)
    return str.slice(0, max) + "...";
  else
    return str;
}

function truncate(str, max) {
  return str.length > max ? str.substring(0, max) + "..." : str
}

// const truncate = (str, max) => {
//     return str.length > max ? str.substring(0, max) + "..." : str
// }

const truncateShortSyntax = (str, max) => str.length > max ? str.substring(0, max) + "..." : str

console.log("3. -------------------------");

const animals = ['Tiger', 'Giraffe'];
console.log(animals);

animals.push('Elephant', 'Lion');
console.log(animals);

animals.unshift('Crododile', 'Hippo');
console.log(animals);

animals.sort();
console.log(animals);

// animals[2]="Goldfish";
// animals[3]="Zebra";
// console.log(animals);

function replaceMiddleAnimal(newValue) {
  let middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
  return animals;
}

let newAnimals = replaceMiddleAnimal('Leopard');
console.log(newAnimals);

function findMatchingAnimals(beginsWith) {
  let MatchingAnimals = [];

  beginsWith = beginsWith.toLowerCase();

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i].toLowerCase();

    if (animal.startsWith(beginsWith)) {
      MatchingAnimals.push(animals[i]);
    }
  }

  return MatchingAnimals;

}

let matchedAnimals = findMatchingAnimals('E');
console.log(matchedAnimals);

console.log("4. -------------------------");

//function below replaces hyphen within a-z (/-([a-z])/g), /g meaning global search

function camelCase(cssProp) {
  return cssProp.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

// will come back to this!! make function using for loops and with/without conditional operator (for later)
// function camelCase(cssProp) {

// }

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

console.log("5. -------------------------");

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
//its taking the data as strings and not numbers? do we have to parseInt (pass as integers first?)

function currencyAddition(float1, float2) {
  float1 = parseFloat(float1);
  float2 = parseFloat(float2);
  return float1 + float2
}

var result1 = currencyAddition('10.2', '20');
console.log(result1);

function currencyOperation(float1, float2, operation, numDecimals) {
  float1 = parseFloat(float1);
  float2 = parseFloat(float2);
  if (operation == "*") {
    return float1 * float2;
  } else if (operation == "-") {
    return float1 - float2
  } else if (operation == "+") {
    return float1 + float2
  } else if (operation == "/") {
    return float1 / float2
  }

  // will come back to this!! need to add fourth numDecimal 
  // let result3 = result2.toFixed(numDecimals);
  // return parseFloat(result3);
}

var result2 = currencyOperation('0.34', '2.65', '/', 2);
console.log(result2);
// console.log(result3);

console.log("6. -------------------------");

// first method i found below, without using function
// let colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// let uniqueColours = [...new Set(colours)];
// console.log(uniqueColours);

// let testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// let uniqueTestScores = [...new Set(testScores)];
// console.log(uniqueTestScores);

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
  return duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) === index);
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

console.log("7. -------------------------");

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
  const book = books.find(function (book) {
    return book.id === bookId;
  });

  if (book) {
    return book.title;
  } else {
    return null;
  }
}

const title = getBookTitle(4);
console.log(title);

function getOldBooks() {
  const oldBooks = books.filter(function (book) {
    return book.year < 1950;
  });

  return oldBooks;
}

const oldBooks = getOldBooks();
console.log(oldBooks);

function addGenre() {
  const bookGenre = books.map(function (book) {
    return { ...book, genre: 'classic' };
  });
  return bookGenre;
}

const bookGenre = addGenre();
console.log(bookGenre);

// will come back to this!! need to do extension exercise

console.log("8. -------------------------");

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


console.log(phoneBookABC);

var phoneBookDEF = new Map();
for (const [name, phoneNumber] of phoneBookABC) {
  const firstLetter = name.charAt(0).toUpperCase();
  if (['D', 'E', 'F'].includes(firstLetter)) {
    phoneBookDEF.set(name, phoneNumber);
  }
}

console.log(phoneBookDEF);

var phoneBookDEFArray = [
  ['Devon', '0123456789'],
  ['Elanor', '1234567890'],
  ['Emily', '2345678901'],
  ['Finn', '3456789012'],
];

var phoneBookDEF = new Map(phoneBookDEFArray);
console.log(phoneBookDEF);

phoneBookABC.set('Caroline', '000111222333');

console.log(phoneBookABC);

function printPhoneBook(contacts) {
  for (const [name, phoneNumber] of contacts) {
    console.log(`Name: ${name}, Phone Number: ${phoneNumber}`);
  }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC.entries(), ...phoneBookDEF.entries()]);

console.log(phoneBook);

for (const name of phoneBook.keys()) {
  console.log(name);
}

console.log("9. -------------------------");

let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000
};

function sumSalaries(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}

const totalSalaries = sumSalaries(salaries);
console.log(totalSalaries);

function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = '';

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }

  return topEarnerName;
}

const topEarnerName = topEarner(salaries);
console.log(topEarnerName);

console.log("10. -------------------------");

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutes = hours * 60 + minutes;

console.log('Minutes passed today: ' + totalMinutes);

const seconds = today.getSeconds();
const totalSeconds = totalMinutes * 60 + seconds;

console.log('Seconds passed today: ' + totalSeconds);

// Calculate and print your age as: 'I am x years, y months and z days old'
// age inputer

// function calculateAge(yearAge, yearMonth, yearDay) {

// }

const birthYear = 1994;

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const currentMonth = today.getMonth() + 1;

const ageYears = today.getFullYear() - birthYear - 1;
const ageMonths = currentMonth
const ageDays = today.getDate()

console.log('I am ' + ageYears + ' years, ' + ageMonths + ' months and ' + ageDays + ' days old');

function daysInBetween(date1, date2) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}

const date1 = new Date('2023-06-01');
const date2 = new Date('2023-06-10');
const dayDifference = daysInBetween(date1, date2);
console.log('Number of days between is: ' + dayDifference);