'use strict'

//////////////Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(item => console.log(item));

////or

fibonacci.forEach(function (item){
   console.log(item);
});

//////////////Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

let arrowUsers = users.map((item, ind) => `member ${ind + 1}: ${item}`);
console.log(arrowUsers);

////or

// let declarationUsers = users.map( function (item, ind) {
//     return `member ${ind + 1}: ${item}`;
// });
// console.log(declarationUsers);

//////////////Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

let arroNumbers = numbers.filter(item => item > 0);
console.log(arroNumbers);

////or

let declarationNumbers = numbers.filter(function(item){
    return item > 0;
});
console.log(declarationNumbers);

//////////////Task 4

const numFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

let arrowNumFibonacci = numFibonacci.reduce((accum, item) => accum + item);
console.log(arrowNumFibonacci);

////or

let declarationNumFibonacci = numFibonacci.reduce(function (accum, item){
    return accum + item;
});
console.log(declarationNumFibonacci);

//////////////Task 5

const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let arrowNumber = number.find(item => item % 2 == 0);
console.log(arrowNumber);

////or

let declaratioNumber = number.find(function(item) {
    return item % 2 == 0;
});
console.log(declaratioNumber);

///////////ADVANCED level Task 1

function Student(salary, rate, name){
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.getSum = function() {
        if(this.rate == 'A'){
            return this.salary * 12;
        } else if(this.rate == 'B'){
            return this.salary * 9;
        } else if(this.rate == 'C'){
            return this.salary * 6;
        } else if(this.rate == 'D') {
            return 0
        }; 
    };
}

let studentArtem = new Student(1500, 'B', 'Artem');
let studentAlex = new Student(1350, 'C', 'Alex');
let studentKirill = new Student(1300, 'D', 'Kirill');
let studentNastya = new Student(1600, 'A', 'Nastya');
let studentKatya = new Student(1920, 'A', 'Katya');

let students = [studentArtem, studentAlex, studentKirill, studentNastya, studentKatya]

function getCredit(arr){
    let result = arr.reduce((accum, item) => accum + item.getSum(), 0);
    return result
}
console.log(getCredit(students));


///////////ADVANCED level Task 2

function getStr(str) {
    let consonants = str.split('').filter(item => !/[aeiou]/i.test(item)).join('')
    return consonants
}
console.log(getStr('This website is for losers LOL'))     

///////////////ADVANCED level Task 3

function accum(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        let res = '';
        let letter = str[i].toLowerCase();
        for (let j = 0; j < i; j++) {
            res += letter;
        }
        res = letter.toUpperCase() + res;
        arr.push(res);
    }
    return arr.join('-');
}
console.log(accum('abcd'));

///////////////ADVANCED level Task 4

function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}

console.log(isIsogram("Dermatoglyphics"))

