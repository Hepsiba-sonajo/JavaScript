
// 1. The search() method accepts a regular expression and returns the index of the first match in a string:

let re = /[A-Z]/;
let str = 'hi There! How are you?';
let index = str.search(re);

 console.log(index);

// 2.indexOf() returns the index of the first occurrence of substring (substr) in a string (str)
// 3. lastIndexOf() returns the last occurrence of a substring (substr) in a string (str).


let str = "how are you?";
let substr = "o";
let result = str.indexOf(substr);
let result1 = str.lastIndexOf(substr);
console.log(result);
console.log(result1);

// 4.The includes() method determines whether a string contains another string

let str = "Rakesh Pandian";
let result = str.includes('h');
console.log(result);

// 5. The startsWith() returns true if a string starts with a substring or false otherwise.
// 6. The endsWith() returns true if a string ends with the characters of a specified string or false otherwise.

let str = "Rakesh Pandian";
let result = str.startsWith('R');
let result1 = str.endsWith('n');
console.log(result);
console.log(result1);

// 7. JavaScript trim() method to remove whitespace characters from both ends of a string.
// 8. JavaScript String trimStart() method to remove whitespace from the beginning of a string.
// 9. JavaScript String trimEnd() method to remove whitespace characters from the end of a string.

let str = "   hepsi   ";
let a = str.trim();
let b = str.trimStart();
let c = str.trimEnd();

console.log(a);
console.log(b);
console.log(c);

// 10. padStart() and padEnd()

let str = '1234'.padStart(8);
console.log(str); // "00001234"

let str1 = 'abc'.padEnd(5,'0');
console.log(str1); // "  abc"

// 11. JavaScript split() method to split a string into an array of substrings.

let str = 'how are you?';

let singleSpace = str.split('');
let doubleSpace = str.split(' ');
console.log(singleSpace);
console.log(doubleSpace);

let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences);

// 12. JavaScript substring() method to extract a substring from a string.

let str = 'how are you?';

let result = str.substring(0,3);
let result1 = str.substring(3);
console.log(result);
console.log(result1);

let email = 'john.doe@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);

console.log(domain); // gmail.com

// 13. Use the JavaScript String slice() method to extract a substring from a string.

let str = 'how are you?';

let result = str.slice(0,3);
let result1 = str.slice(3);
console.log(result);
console.log(result1);

// 14. JavaScript concat() method to concatenate strings.

let str = 'Hepsi';
let result = str.concat(' '+ 'Rakesh');
console.log(result);

let array = ['hepsiba', 'sona', 'jo'];

let output = ''.concat(...array);
console.log(output);

// 15. JavaScript String replace() method to replace a substring in a string with a new one.
// 16. replaceAll() method that replaces all occurrences of a substring with a new string.

let str = 'JS will, JS will rock you!';
let newStr = str.replace('JS','JavaScript');
let newStr1 = str.replaceAll('JS','JavaScript');

console.log(newStr);
console.log(newStr1);

// 17. tolowercase()
// 18. toUppercase()

let string = 'rakesh pandian';
let string1 = 'JAVASCRIPT';

let result = string.toUpperCase();
let result1 = string1.toLocaleLowerCase();

console.log(result);
console.log(result1);

