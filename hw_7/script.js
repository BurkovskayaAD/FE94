///////////////////////

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(num => console.log(num));

function fibCons (arr) {
    arr.forEach(num => console.log(num));
}

fibCons(fibonacci);

//////////////////////////////

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

console.log(users.map((item, index) => `member ${index+1}: ${item}`));

console.log(users.map(function (item, index) {
    return `member ${index+1}: ${item}`;
}))

//////////////////////////////

const numbers = [7, -4, 32, -90, 54, 32, -21];
console.log(numbers.filter(num => {
    if(num > 0) {
        return true;
    } else {
        return false;
    }
}));

console.log(numbers.filter(function(num) {
    if(num > 0) {
        return true;
    } else {
        return false;
    }
}));

///////////////////////////////

console.log(fibonacci.reduce((sum, num) => sum + num));

console.log(fibonacci.reduce(function(sum, num) {
    return sum + num;
}));

////////////////////////////////

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log(numbers5.find((item) => {
    if(item % 2 == 0) {
        return item;
    }
}));

console.log(numbers5.find(function(num) {
    if(num % 2 == 0) {
        return num;
    }
}));

///ADVANCED level Task 1 👨‍🏫

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;

    this.possibleCredit = function () {
        let rank = 0;
        if(this.rate == "A") {
            rank = 12;
        } 
        if (this.rate == "B") {
            rank = 9;
        } 
        if (this.rate == "C") {
            rank =  6;
        } 
        if (this.rate == "D") {
            rank = 0;
        } 

        console.log("Сумма возможного кредита: " + rank * this.salary);
    }
}

let Andrew = new Student(300, "D", "Andrew");
let Viktor = new Student(700, "B", "Viktor");
let Pavel = new Student(900, "A", "Pavel");
let Katya = new Student(1500, "A", "Katya");
let Nastya = new Student(800, "C","Nastya");

Andrew.possibleCredit();
Viktor.possibleCredit();
Pavel.possibleCredit();
Katya.possibleCredit();
Nastya.possibleCredit();

//ADVANCED level Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

function comments(str) {
    str = str.replace(/A|a|E|e|I|i|O|o/g, "");
    console.log(str);
}

comments("This website is for losers LOL!");

//ADVANCED level Task 3 👨‍🏫 Нет истории, нет теории

function accum(str) {
    let arr = str.split("");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
    }

    str = arr.join("-");
    console.log(str);
}

accum("abcd");
accum("RqaEzty");
accum("cwAt")

//ADVANCED level Task 4 👨‍🏫 Изограммы

function isIsogram (str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        
        if(str.toLowerCase().indexOf(str[i]) === str.toLowerCase().lastIndexOf(str[i])) {
            count++;
        }
    }

    if (count == str.length) {
        return true;
    } else {
        return false
    }

}


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));