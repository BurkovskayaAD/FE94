// NORMAL level Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// NORMAL level Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at (-1));

// NORMAL level Task 3
const numbers = [5, 43, 63, 23, 90];
console.log(numbers);
//Variant #1
for (let i = 0; i < numbers.length; i++) {
  numbers.pop();
  i -=1;
}
console.log(numbers);
//Variant #2
const numbers1 = [5, 43, 63, 23, 90];
console.log(numbers1);
numbers1.splice(0, numbers1.length);
console.log(numbers1);

// NORMAL level Task 4
const students = ['Polina', 'Dasha', 'Masha'];
console.log(students);
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

// NORMAL level Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// NORMAL level Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let allNumbers = [];
for (let i = 0; i < evenNumbers.length; i++) {
	allNumbers.push(oddNumbers[i]);
  allNumbers.push(evenNumbers[i]);
}
console.log(allNumbers);

// NORMAL level Task 7
const binary = [0, 0, 0, 0];
let str = binary.join("1");
console.log(str);

// ADVANCE level Task 1
function wordIsPalindrom(str) {
	let arr = [];
  for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
	}
  arr.reverse();
  for (let i = 0; i < str.length; i++) {
  	if (String(arr[i]) !== str[i]) {
    	return console.log(`Слово ${str} - не является палиндромом!!!`);
    } else return console.log(`Слово ${str} - палиндром.`);
	}
}
wordIsPalindrom('шалаш');
wordIsPalindrom('массив');

//Более короткий вариант ADVANCE level Task 1, но без массива
function wordIsPalindrom(str) {
  for (let i = 0; i < str.length; i++) {
  	if (str[i] !== str[(str.length -1 - i)]) {
    	return console.log(`Слово ${str} - не является палиндромом!!!`);
    } else return console.log(`Слово ${str} - палиндром.`);
	}
}
wordIsPalindrom('шалаш');
wordIsPalindrom('массив');

// ADVANCE level Task 2
const matrix = [
	[12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]
let count = 0;
let totalSumm = 0;
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
  	totalSumm += matrix[i][j];
    count++;
  }
}
console.log(`Среднее значение чисел в массиве ${totalSumm/count}`);

// ADVANCE level Task 3
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 4, 412, 4];
let plusArray = [];
let minusArray = [];
for (let i = 0; i < mixedNumbers.length; i++) {
	if (mixedNumbers[i] >= 0) {
  	plusArray.push(mixedNumbers[i]);
  } else minusArray.push(mixedNumbers[i]);
}
console.log(plusArray);
console.log(minusArray);

// ADVANCE level Task 4
let arrLength = +prompt('Введите длину массива:');
let arrRandom = [];
let arrRandomCube = [];
for (let i = 0; i < arrLength; i++) {
	arrRandom.push( Math.round(Math.random() * 100));
}
for (let i = 0; i < arrRandom.length; i++) {
	arrRandomCube.push(arrRandom[i] ** 3);
}
console.log(arrRandom);
console.log(arrRandomCube);
