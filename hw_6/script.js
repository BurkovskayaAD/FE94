// 1

const colors = ["red", "green", "blue"];
console.log(colors.length);

// 2

const animals = ["monkey", "dog", "cat"];
console.log(animals.pop());

// 3
// 3-1

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, 5);
console.log(numbers);

// 3-2

numbers.length = 0;
console.log(numbers);

// 4

const students = ["Polina", "Dasha", "Masha"];

console.log(students.pop());
console.log(students.push("Borya"));
console.log(students.shift());
console.log(students.unshift("Andrey"));
console.log(students);
students.splice(2, 1, "Borya");
students.splice(0, 1, "Andrey");
console.log(students);

// 5

const cats = ["Gachito", "Tom", "Batman"];
console.log(cats[0]);
console.log(cats[1]);
console.log(cats[2]);

// 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let one = evenNumbers.concat(oddNumbers);
// console.log(one);
console.log(one.indexOf(8));

// 7

const binary = [0, 0, 0, 0];
console.log(binary.join("1"));
