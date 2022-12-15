/* 1 задание */
const colors = ["red", "green", "blue"];
console.log(colors.length);

/* 2 задание */
const animals = ["monkey", "dog", "cat"];
animals.reverse();
console.log(animals[0]);

/* 3 задание */
/* option 1:*/

const numbers = [5, 43, 63, 23, 90];
console.log(numbers.slice(5));

/* Option 2:*/
const numberz = [5, 43, 63, 23, 90];
numberz.length = 0;
console.log(numberz);

/* 4 задание */
const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

/* 5 задание */
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

/* 6 задание */
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const result = evenNumbers.concat(oddNumbers);
console.log(result);
console.log(result.indexOf(8));

/* 7 задание */
const binary = [0, 0, 0, 0];
let zeroone = binary.join("1");
console.log(zeroone);

/* 8 задание */
function palindrome() {
  let v = prompt(
    "Enter any word here, and ill tell you if this word if a palindrome!"
  );
  let newArr = v.split("");
  let newArrr = newArr.concat();
  newArrr.reverse();
  let a = newArrr.join("");
  let b = newArr.join("");
  if (a == b) {
    return "Yes, this word is a palindrome!";
  } else {
    return "No, this word is not a palindrome!";
  }
}
console.log(palindrome());

/* 9 задание */
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

const something = [].concat(matrix[0], matrix[1], matrix[2], matrix[3]);
const average = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log(average(something));

/* 10 задание */
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const plus = mixedNumbers.filter((item) => item >= 0);
console.log(plus);
const minus = mixedNumbers.filter((item) => item < 0);
console.log(minus);

/* 11 задание */
let q = [
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
];
console.log(q);

let zero = Math.pow(q[0], 3);
let one = Math.pow(q[1], 3);
let two = Math.pow(q[2], 3);
let three = Math.pow(q[3], 3);
let four = Math.pow(q[4], 3);

let arrsum = [zero, one, two, three, four];
console.log(q);
console.log(arrsum);
