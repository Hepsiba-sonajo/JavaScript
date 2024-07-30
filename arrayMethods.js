
// 1. JavaScript Array push() method to add one or more elements to the end of an array.
// 2. JavaScript Array pop() method to remove the last element from an array.

let arr = ['a','b','c','d'];
let result = arr.push('e');
let result1 = arr.pop();

 console.log(arr);
 console.log(arr.length);

// 3. JavaScript Array unshift() method to add one or more elements to the beginning of an array.

let days = ['wednesday','thursday','friday'];

let daysResult = days.unshift('monday','tuesday');

console.log(days);

// 4. JavaScript Array shift() method to remove the first element from an array.

let days = ['wednesday','thursday','friday'];

let daysResult = days.shift();
console.log(days);

// 5. JavaScript Array’s splice() method to delete existing elements, insert new elements, and replace elements in an array.


let array = [10,20,30,40];

let result = array.splice(0,2);
let result = array.splice(2);


// console.log(result);

// 6. slice() method that allows you to extract subset elements of an array and add them to the new array.


let array = [10,20,30,40];

//let result = array.slice(0,2);
let result = array.splice(2);


console.log(result);

// 7. indexOf() method. This method returns the index of the first occurrence the element that you want to find, 
//    or -1 if the element is not found.

let array = [10,20,30,40];

let result = array.indexOf(20);

console.log(result);
// 8. The lastIndexOf() method returns the index of the last occurrence of the searchElement in the array.

let array = [10,20,30,40,20];

let result = array.lastIndexOf(20);

console.log(result);

// 9. Use the JavaScript Array findIndex() method to find the first element that satisfies a given test.

let array = [10,20,30,40,20];

let result = array.findIndex((element,index) => element === 20 && index > 2);

console.log(result);

// 10. JavaScript find() method to search for the first element in an array, which satisfies a test.

let array = [10,20,30,40,20];

let result = array.find((element,index) => element === 20 && index > 2);

 console.log(result);

 // 11. JavaScript Array includes() method that checks if an element is in an array.
 let array = [10,20,30,40,20];

 let result = array.includes(70);

 console.log(result);

 // 12. JavaScript Array map() method to transform elements in an array.
 //Typically, you use a for loop to iterate over the elements, transform each individual one, and push the results into a new array.

 let mapArrray = [10,20,30,40,20];

 function addition(mapArrray){
    return mapArrray + 1;

 }
let areas = mapArrray.map(addition);
(or)
 let areas = mapArrray.map(x => x +1);
 console.log(areas);

// 13. JavaScript Array filter() method to filter elements in an array based on a test provided by a callback function.


let filterArrray = [10,70,30,40,60];
let result = filterArrray.filter(x => x > 50);
console.log(result);

// 14. JavaScript Array reduce() and reduceRight() methods to reduce an array to a value.
let reduceArrray = [10,70,30,40,60];
let result = reduceArrray.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
});
console.log(result);

// 15. Sometimes, you need to test whether every element of an array satisfies a specified condition.
let numbers = [0, 3, 5];

let result = numbers.every( e  => e > 0);

console.log(result);

// 16. JavaScript Array some() method to check if at least one element in the array passes a test.

let numbers = [0, 3, 5];
let result = numbers.some( e  => e > 10);
console.log(result);

// 17. By default, the sort() method sorts the array elements in ascending order, meaning that 
//     it places the smallest value first and then the largest value last.

let arrray = [10,70,30,40,60];
let result = arrray.sort();
console.log(result.reverse());

// 18. JavaScript Array forEach() method to execute a callback on every element of an array.

let array = [10, 70, 30, 40, 60];
array.forEach((element, index, arr) => {
    arr[index] = element * 2;
});
console.log(array);

// 19. JavaScript Array concat() method to merge two or more arrays into a single array.

let odds = [1,3,5];
let evens = [2,4,6];
// merge odds and evens array
let combined = [].concat(odds, evens);

console.log(combined);

// 20. JavaScript Array join() method to concatenate all elements of an array into a string separated by a separator.

const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');

console.log(btnClass);

// 21. JavaScript array reverse() method that reverses the order of elements within an array.

let colors = ['red','green','apple','blue'];
colors.reverse();
console.log(colors);
