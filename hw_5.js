// Task 1
let a = {
    name: 'Andrei',
    age: '23'
}
console.log(a);
delete a.name;
delete a.age;
console.log(a);

// Task 2
let a = {
    name: 'Andrei',
    age: '23'
}
console.log('name' in a);
console.log('age' in a);

// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student)
{
    console.log(key);
}
for (let key in student)
{
    console.log(student[key]);
}

// Task 4
const colors = {
    'ru pum pu ru rum': 
    {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
}
console.log(colors ['ru pum pu ru rum'] ['red'])
console.log(colors ['ru pum pu ru rum'] ['blue'])


// Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let average = 0;
for (let key in salaries)
{
    average += salaries[key]/5;
}
console.log(average);

// Task 6
let User = {}
let Login = prompt ('Введите логин')
let Password = prompt ('Введите пароль')
User.login = Login
User.password = Password
let confirmLogin = prompt ('Подтвердите логин')
let confirmPassword = prompt ('Подтвердите пароль')
if (User.login == confirmLogin && User.password == confirmPassword)
{
    console.log ('Добро пожалоВать')
} else {
    console.log ('Попробуйте еще')
}