// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(function(item) {
    console.log(item);
});
fibonacci.forEach(item => console.log(item));
//////////
// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let usersOne = users.map(function(item, index) {
    return `member ${index + 1}: ${item}`
});
console.log(usersOne);
let usersTwo = users.map((item, index) => `member ${index + 1}: ${item}`);
console.log(usersTwo);
//////////
// Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbersOne = numbers.filter(function(item) {
    return item > 0;
});
console.log(numbersOne);
let numbersTwo = numbers.filter(item => item > 0);
console.log(numbersTwo);
//////////
// Task 4
const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let fibonaciSumOne = fibonaci.reduce(function(item, index) {
    return item + index;
});
console.log(fibonaciSumOne);
let fibonaciSumTwo = fibonaci.reduce((item, index) => item + index);
console.log(fibonaciSumTwo);
//////////
// Task 5
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let numberOne = number.find(function(item) {
    return item % 2 == 0;
});
console.log(numberOne);
let numberTwo = number.find(item => item % 2 == 0);
console.log(numberTwo);