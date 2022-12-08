//////////////////////////////////////

const userInfo = {
    name: 'Alex',
    age: 34
};

delete userInfo.name;
delete userInfo.age;

console.log(userInfo);
console.log('');

//////////////////////////////////////

const passportData = {
    name: 'Denis',
    surname: 'Korablev',
    id: 'MP7772555',
    data: 1986,
    married: false
};

if ('name' in passportData){
    console.log('Такой ключ есть')
}else  {
    console.log('Данный ключ отсутствует');
}

console.log('');

//////////////////////////////////////

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for (let key in student){
    console.log(key);
}

console.log('');

for (let key in student){
    console.log(student[key]);
}

console.log('');

//////////////////////////////////////

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum']['red']);
console.log(colors['ru pum pu ru rum']['blue']);
console.log('');

//////////////////////////////////////

function calcAverageSalary (salaries){
    let sum = 0;
    let count = 0;
    for (let key in salaries){
        sum += salaries[key];
        count++;
    }
    return sum / count;
}

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    mihail: 664,
    alexandra: 199
}

console.log(calcAverageSalary(salaries));
console.log('');

//////////////////////////////////////

// let userLogin = prompt('Введите логин')
// let userPassword = prompt('Введите пароль')
//
// const userData = {
//     userLogin,
//     userPassword
// };
//
// let userLoginConfirm = prompt('Подтвердите введенный логин');
// let userPasswordConfirm  = prompt('Подтвердите введенный пароль');
//
// if (userData.userLogin == userLoginConfirm && userData.userPassword == userPasswordConfirm){
//     alert('Добро пожаловать в личный кабинет')
// } else {
//     alert('Не верный логин или пароль')
// }

//////////////////////////////////////

const scoreStringObj = {
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

function convertToString(score) {
    let arrStr = score.trim().replace(/\s+/g, '').split('')
    console.log(`Счет матча - ${scoreStringObj[arrStr[0]]} : ${scoreStringObj[arrStr[2]]}`);
}

convertToString('5 : 0');
console.log('');

//////////////////////////////////////

///Method 1
// student2 = student1;
// console.log(student1 === student2);

///Method 2
// let equalObj = JSON.stringify(student1) === JSON.stringify(student2);
// console.log(equalObj);

///Method 3
function isEqual(student1, student2) {
    const props1 = Object.getOwnPropertyNames(student1)
    const props2 = Object.getOwnPropertyNames(student2)

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];

        if (student1[prop] !== student2[prop]) {
            return false;
        }
    }
    return true;
}

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

console.log(isEqual(student1, student2));






