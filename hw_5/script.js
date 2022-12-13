//Task 1

let obj1 = {
    a: 10,
    b: 11
}

function delKeys(obj) {
    for(let key in obj) {
        delete obj[key];
    }
}

delKeys(obj1);
console.log(obj1);

//Task2

let obj2 = {
    a:"abc",
    b:"def"
}

let entKey = "a";

for(let key in obj2) {
    if (key == entKey) {
        console.log(true);
    } 
}

//Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log("Ключ объекта student: "+key);
}

for (let key in student) {
    console.log("Значение объекта student: "+student[key]);
}

//Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

for (let key in colors) {
    for (let key in colors['ru pum pu ru rum']) {

        if(colors['ru pum pu ru rum'][key] == 'красный' || colors['ru pum pu ru rum'][key] == 'синий') {
            console.log(colors['ru pum pu ru rum'][key]);
        }
    }
}

//Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

let sum = 0;
let count = 0;

for(let key in salaries) {
    sum += salaries[key];
    count++;
}

let average = sum / count;
console.log("Средняя зарплата равна: "+average);

//Task 6

let reg = {};

reg.login = prompt("Введите логин");
reg.password = prompt("Введите пароль");

console.log(reg);

let checkLog = prompt("Введите логин");
let checkPass = prompt("Введите пароль");

if (reg.login == checkLog && reg.password == checkPass) {
    alert ("Добро пожаловать!")
} else {
    alert ("Введите логин и пароль снова");
}

//ADVANCED level

//Task 1 👨‍🏫

let score = {
    0: "ноль",
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять"
}

let enterScore = prompt("Введите счёт");

console.log(`${score[enterScore.charAt(0)]} : ${score[enterScore.charAt(2)]}`)

//Task 2 🖥

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

student2 = student1;

if (student1 === student2) {
    console.log(true);
}