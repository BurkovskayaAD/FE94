//////////////////////////////////////

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(item => console.log(item));

console.log('');

fibonacci.forEach(function (item) {
    console.log(item)
});

console.log('');

//////////////////////////////////////

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const updatedUsersOne = users.map((item, index) => {
    return `member:${index + 1}: ${item}`
});
console.log(updatedUsersOne);

const updatedUsersTwo = users.map(function (item, index) {
    return `member:${index + 1}: ${item}`
});

console.log(updatedUsersTwo);
console.log('');

//////////////////////////////////////

const numbers = [7, -4, 32, -90, 54, 32, -21];

const filteredNumbersOne = numbers.filter((item) => {
    return item > 0;
});

console.log(filteredNumbersOne);

const filteredNumbersTwo = numbers.filter(function (item) {
    return item > 0;
});

console.log(filteredNumbersTwo);
console.log('');

//////////////////////////////////////

const fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumNumberOne = fibonacciNumbers.reduce((acc, item) => {
    return acc + item;
});
console.log(sumNumberOne);

const sumNumberTwo = fibonacciNumbers.reduce(function (acc, item) {
    return acc + item;
});

console.log(sumNumberTwo);
console.log('');

//////////////////////////////////////

const numbersFind = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const searchNumbersOne = numbersFind.find((item) => {
    return item % 2 === 0;
});

console.log(searchNumbersOne);

const searchNumbersTwo = numbersFind.find(function (item) {
    return item % 2 === 0;
});

console.log(searchNumbersTwo);
console.log('');

//////////////////////////////////////

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.calculateRate = function () {
        if (this.rate === 'A') {
            return salary * 12;
        } else if (this.rate === 'B') {
            return salary * 9;
        } else if (this.rate === 'C') {
            return salary * 6;
        } else if (this.rate === 'D') {
            return 0;
        }
    };
}

let studentOne = new Student('Artem', 2000, 'A');
let studentTwo = new Student('Kirill', 1700, 'B');
let studentThree = new Student('Katya', 1000, 'D');
let studentFour = new Student('Vitali', 2200, 'A');
let studentFive = new Student('Vlad', 1500, 'C');

const studentsArr = [studentOne, studentTwo, studentThree, studentFour, studentFive];

function totalCredit(arr) {
    let sumCredit = arr.reduce((accum, item)=>{
        return accum + item.calculateRate()
    },0)
    return sumCredit
}

console.log(`Общая сумма кредитов, которую можно выдать группе равна: ${totalCredit(studentsArr)}`);
console.log('');

//////////////////////////////////////

function changeStr (str) {
    str = str.replace(/[aeiou]/gi, '');
    return str;
}

console.log(changeStr('This website is for losers LOL!'));
console.log('');

//////////////////////////////////////

function conversionStr (str){
        let answer = []
        str.split("").forEach( (letter, index) => {
            let segment = ""
            segment += letter.toUpperCase()
            while (index > 0 ){
                segment += letter.toLowerCase()
                index -= 1
            }
            answer.push(segment)
        })
        return answer.join("-")
}

console.log(conversionStr('abcd'));
console.log('');

//////////////////////////////////////

function isIsogram(str) {
    if (str.isEmpty) {
        return true;
    } else {
        str = str.toLowerCase();
    }
    let array = str.split('');
    let sortedArr = array.slice().sort();

    for (let i = 0; i < array.length; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram('moOse'))
console.log(isIsogram('Dermatoglyphics'))

//////////////////////////////////////

