//Task 1
// let person = {
//     firstName: "Ekaterina",
//     lastName: "Belekalo"
// }
// console.log(person);
// delete person.firstName;
// delete person.lastName;
// console.log(person);

//Task 2
let person = {
    firstName: "Ekaterina",
    lastName: "Belekalo"
}
if ('firstName' in person) {
    console.log( 'true' );
    } else if ('lastName' in person) {
    console.log( 'true' );
    }

//Task 3
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let key in student) {
//     console.log(key);
//     console.log(student[key]); 
// }


//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum']. red + ' и ' + colors['ru pum pu ru rum']. blue);

//Task 5
let sum = 0;
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrew: 664,
    alexandra: 199
}
for (let keys in salaries) {
    sum += salaries[keys]/5;
}
console.log(sum)

//or
// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrew: 664,
//     alexandra: 199
// }
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let keys of Object.values(salaries)) {
//     sum += keys/5;
//     }
// return sum; 
// }
// console.log(sumSalaries(salaries)); 

//Task 6
//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.
let userName = prompt ('Введите логин');
let userPass = prompt ('Введите пароль');
let userData = {
    login: userName,
    pass: userPass 
};
//проверка
// for (let key in validator) {
//         console.log(key);
//         console.log(validator[key]); 
// }
//подтверждение
userName = prompt ('Подтвердите логин');
userPass = prompt ('Подтвердите пароль');
if (userName===userData.login && userPass===userData.pass){
    alert ('Добро пожаловать')
}

///Task 1 
//Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
const golComanda1={
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'черыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
};
const golComanda2={
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'черыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
};
function getGolComanda1(number){
return golComanda1[number]
};
function getGolComanda2(number){
return golComanda2[number]
};
console.log (getGolComanda1(2) +':'+ getGolComanda2(5))


//Task 2
let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};
student2 = student1;
//проверка
// for (let key in student2) {
//     console.log(key);
//     console.log(student2[key]); 
// }
console.log (student1===student2)