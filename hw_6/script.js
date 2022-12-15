//Task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

//Task 3
const numbers1 = [5, 43, 63, 23, 90];
const numbers2 = [5, 43, 63, 23, 90];

function deleteAll1 (arr) {
    arr.splice(0, arr.length);
    console.log(arr);
}

function deleteAll2 (arr) {
    for(let i = 0; i < arr.length; i++) {
        delete arr[i];
    }
    console.log(arr);
}

deleteAll1(numbers1);
deleteAll2(numbers2);

//Task4

const students = ['Polina', 'Dasha', 'Masha'];

console.log(students);
students.pop();
console.log(students);
students.push("Borya");
console.log(students);
students.shift();
console.log(students);
students.unshift("Andrey");
console.log(students);

//Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i<cats.length;i++) {
    console.log(cats[i]);
}

//Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = oddNumbers.concat(evenNumbers);
console.log(allNumbers);
console.log("Индекс 8 равен: "+allNumbers.indexOf(8));

//Task 7

const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

//ADVANCED level Task 1 👨‍🏫

function isPalindrom (word) {
    let newWord = word.split("");
    newWord.reverse();
    newWord = newWord.join("");
    if (word === newWord) {
        console.log("Это слово палиндром");
    } else {
        console.log("Это не палиндром")
    }
}

isPalindrom("течет");
isPalindrom("течетy");

//ADVANCED level Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function sumAll (arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i]);
    }

    let sum = 0;
    for(let i = 0; i < newArr.length; i++) {
        sum+=newArr[i];
    }

    console.log(sum / newArr.length);
}

sumAll(matrix);

//ADVANCED level Task 3 👨‍🏫

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

function twoArr (arr) {
    let pos = [];
    let neg = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pos.push(arr[i]);
        } else {
            neg.push(arr[i]);
        }
    }
    console.log(pos);
    console.log(neg);
}

twoArr(mixedNumbers);

//ADVANCED level Task 4 👨‍🏫

let array = [];

for(let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random()*10);
}

function inCube(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]*arr[i]*arr[i];
    }

    console.log(`Исходный массив: ${arr}`);
    console.log(`Новый массив: ${newArr}`);
}

inCube(array);