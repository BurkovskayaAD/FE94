'use strict'

////////////Task 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

////////////Task 2

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length - 1]);

////////////Task 3

let numbers = [5, 43, 63, 23, 90];

//numbers.length = 0

//// or

for(let i = 0; i < numbers.length; i++){
    numbers.splice(i, numbers[i]);
};

console.log(numbers);

////////////Task 4

let students = ['Polina', 'Dasha', 'Masha'];

students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');

console.log(students);

////////////Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

cats.forEach(item => {
    console.log(item);
})
 
////////////Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

function getNumbers(arrOne, arrTwo) {
    arrOne.forEach(item => {
        arrTwo.push(item)
    })
 
    return arrTwo
}

const allNumbers = getNumbers(oddNumbers, evenNumbers);
console.log(allNumbers.indexOf(8));
console.log(allNumbers);

////////////Task 7

let binary = [0, 0, 0, 0];

console.log(binary.join('1'));

////////////ADVANCED level Task 1

const palindrome = ['течет', 'alesia', 'лес', 'топот', 'array'];

function getPalindrome(palindrome){
    let reverse = []
    for(let i = 0; i < palindrome.length; i++){
        reverse.push(palindrome[i].split('').reverse().join(''));
        if(palindrome[i] == reverse[i]){
            console.log('палиндром')
        } else [
            console.log('не палиндром')
        ];
    }
}

getPalindrome(palindrome);

////////////ADVANCED level Task 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

function getMean(arr){
    let sum = 0;
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++ ){
            sum += arr[i][j]
            count++
        }
    }

    let resalt = sum / count

    return resalt
}

console.log(getMean(matrix))

////////////ADVANCED level Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let arrOne = [];
let arrTwo = [];

for(let value of mixedNumbers){
    if(value >= 0){
        arrOne.push(value)
    } else {
         arrTwo.push(value)
    }
}

console.log(arrOne);
console.log(arrTwo);

////////////ADVANCED level Task 4

let random = [];
let res = [];

function getRandom(random, res, num, max){
    for(let i = 0; i < num; i++){
        random[i] = Math.floor(Math.random() * max);
        res[i] = random[i] ** 3;
    }
    return res;
}

getRandom(random, res, 5, 20);
console.log(random);
console.log(res);
