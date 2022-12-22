//////////////////////////////////1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function(item){console.log(item)});
fibonacci.forEach(item => console.log(item));
////////////////////////////////////////////////////2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let users1 = users.map(function(item, index){return `member ${index + 1}: ${item}`});
console.log(users1);
let users2 = users.map((item, index) => `member ${index + 1}: ${item}`);
console.log(users2);
//////////////////////////////////////////////////3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let positiveNumbers = numbers.filter(function(num){return num>=0})
console.log(positiveNumbers);
let positiveNumbers1 = numbers.filter(num => num>=0);
console.log(positiveNumbers1);
//////////////////////////////////////////////////4

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let sumOfFibonacci1 = fibonacci1.reduce(function(sum,item){return sum + item});
console.log(sumOfFibonacci1);
let sumOfFibonacci2 = fibonacci1.reduce((sum, item) => sum + item);
console.log(sumOfFibonacci2);
///////////////////////////////////////////////////////5

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let evenNumber = numbers1.find(function(item){return item%2==0})
console.log(evenNumber);
let evenNumber1 = numbers1.find(item => item%2==0);
console.log(evenNumber1);

