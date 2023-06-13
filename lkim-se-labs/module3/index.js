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

const truncate = (str, max) => {
    return str.length > max ? str.substring(0, max) + "..." : str
}

const truncateShortSyntax = (str, max) => str.length > max ? str.substring(0, max) + "..." : str

