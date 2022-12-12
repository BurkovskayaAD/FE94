//////////
// Task 1
let taskOne = {
    name: 'Pavel',
    surname: 'Zenovich'
}
console.log(taskOne);
delete taskOne.name;
delete taskOne.surname;
console.log(taskOne);
//////////
// Task 2
let taskTwo = {
    name: 'Pavel',
    surname: 'Zenovich'
}
console.log('name' in taskTwo);
console.log('age' in taskTwo);
//////////
// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student){
    console.log(key);
}
for (let key in student){
    console.log(student[key]);
}
//////////
// Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors ['ru pum pu ru rum'] ['red']);
console.log(colors ['ru pum pu ru rum'] ['blue']);
//////////
// Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let averageSalary = 0;
for (let key in salaries){
    averageSalary += salaries[key]/5;
}
console.log(averageSalary);
//////////
// Task 6
let userProfile = {};
let userLogin = prompt ('Введите логин');
let userPassword = prompt ('Введите пароль');
userProfile.login = userLogin;
userProfile.password = userPassword;
let confirmLogin = prompt ('Подтвердите логин');
let confirmPassword = prompt ('Подтвердите пароль');
if (userProfile.login == confirmLogin && userProfile.password == confirmPassword){
    alert ('Добро пожаловать');
} else {
    alert ('Данные не совпадают, попробуйте еще');
}
//////////
// Task 7
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
function sumScore(a){
    return (`Результат матча ${score[a[0]]} : ${score[a[2]]}`);
}
console.log(sumScore("2:5"));