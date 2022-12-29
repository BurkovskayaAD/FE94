// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function(element){
    console.log(element)
});

fibonacci.forEach((element) => console.log(element));

// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const usersNew = users.map(function(value, index){
    return `member ${index + 1}: ${value}`
});
console.log(usersNew);

let usersNew2 = users.map((value, index) => `member ${index + 1}: ${value}`);
console.log(usersNew2);

// Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];

let numbersNew = numbers.filter(function(value){
    return value >= 0
});
console.log(numbersNew);

let numbersNew1 = numbers.filter((value) => value >= 0);
console.log(numbersNew1);


// Task 4
const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

let fibonacciSum = fibonaci.reduce(function(accumulator, fibonaciValue){
    return accumulator + fibonaciValue
});
console.log(fibonacciSum);

let fibonacciSum1 = fibonaci.reduce((accumulator, fibonaciValue) => accumulator + fibonaciValue);
console.log(fibonacciSum1);


// Task 5
const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let getMaxEvenNumber = (numbers3.find(function(element){
    return element % 2 === 0;
}));
console.log(getMaxEvenNumber);

let getMaxEvenNumber1 = (numbers3.find((element) => element % 2 === 0));
console.log(getMaxEvenNumber1);


//Task 2 
let fixMessage = (str) => str.replace(/[aeiuo]/gi, '');
console.log(fixMessage('This website is for losers LOL!'));


//Task 3
const accum = (str) => str.split('').map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join('-');
console.log(accum ("abcd"));

//Task 4
function isIsogram(str) {
    let array = [];   
    for (let i = 0; i < str.length; i++) {
        let arrNew = str[i].toLowerCase();
        if (array.find((array) => array === arrNew)) {
        return false;
        }
    array.push(arrNew);
    }
    return true;
    }
console.log(isIsogram ("Dermatoglyphics"));

//Task 1
function Student(name, salary, rate) {
    this.name = name,
    this.salary = salary,
    this.rate = rate,
    this.summRate = () => {
        if (this.rate === "A"){
            let numberSalaries  = 12;
            return numberSalaries;
        } else if (this.rate === "B"){
            let numberSalaries  = 9;
            return numberSalaries;
        } else if (this.rate === "C"){
            let numberSalaries  = 6;
            return numberSalaries;
        } else if (this.rate === "D"){
            let numberSalaries  = 0;
            return numberSalaries;
        }
    }
    this.summCredit = () => {
        return (this.salary * numberSalaries);
}
}

let Katya = new Student("Katya", 2000, "A");
let Andrey = new Student("Andrey", 0, "D");
let Nastya = new Student("Nastya", 1000, "C");
let Kirill = new Student("Kirill", 0, "D");
let Pavel = new Student("Pavel", 1500, "B");

let students = [Katya, Andrey, Nastya, Kirill, Pavel];

let summCredit = (array) => {
    let summCreditStudents  = array.reduce((value, index) => value + index.salary*index.summRate(), 0);
    return (`Общая сумма кредита: ${summCreditStudents}`);
}
console.log(summCredit(students))