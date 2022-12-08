'use strict'

//////////Task 1 

let human = {
    name: 'Alesia',
    surname: 'Bushkevich',
};

delete human.name;
delete human.surname;

console.log(human);

//////////Task 2

let country = {
    name: 'Belarus',
    population: 9.34,
};

console.log(['population'] in country);

//////////Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for(let key in student){
    console.log(`Ключ - ${key}`);
};

for(let key in student){
    console.log(`значение - ${student[key]}`);
};

//////////Task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(`${colors['ru pum pu ru rum']['red']} и ${colors['ru pum pu ru rum']['blue']}`);

//////////Task 5


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    anna: 664,
    alexandra: 199
};

function employeeSalary(obj){
    let sum = 0;
    let count = 0;

    for(let key in obj){
        sum += obj[key];
        count ++;
    }
    
    let result = sum / count;

    return result;
}

console.log(employeeSalary(salaries));

//////////Task 6

let login = prompt('Введите ваш логин');
let password = prompt('Введите ваш пароль');

let authorization = {
    login: login,
    password: password
};

function getAuthorization(obj){
    let a = prompt('Введите ваш логин');
    let b = prompt('Введите ваш пароль');

    if(a == obj.login && b == obj.password){
        console.log('Добро пожалоВать');
    } else {
        console.log('Неверные данные');
    };
}

getAuthorization(authorization);


////////////ADVANCED level Task 1

const scoreFirst = +prompt('Введите счёт первой команды');
const scoreSecond = +prompt('Введите счёт второй команды');

function getNumberString(score){
    const goal = {
        0: 'ноль',
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять'
    };

    if(goal[score]){
        return goal[score];
    } else{
        return null;
    }
}

console.log(getNumberString(scoreFirst) + ' : ' + getNumberString(scoreSecond));


////////////ADVANCED level Task 2

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

student1 = student2;

console.log(student1 == student2);

