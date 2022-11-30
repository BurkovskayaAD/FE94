// NORMAL level Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

// NORMAL level Task 2
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAgeInSeconds;
let myYearOfBirth = prompt('Введите год Вашего рождения:', 2000);
let currentYear = prompt('Введите текущий год:', 2022);
myYearOfBirth = +myYearOfBirth;
// checking the value and type of an argument myYearOfBirth
console.log(typeof(myYearOfBirth));
// console.log(myYearOfBirth);
myAgeInSeconds = (currentYear - myYearOfBirth)*daysInYear*hoursInDay*minutesInHour*secondsInMinute;
alert(`Ваш возраст в секундах составляет ${myAgeInSeconds} секунд!))`);
console.log(`Ваш возраст в секундах составляет ${myAgeInSeconds} секунд!))`);

// NORMAL level Task 3
let count = 42;
let userName_3 = '42';
//Variant #1
let countString = String(count);
let userNameNumber = Number(userName_3);
console.log('Вариант №1');
console.log(`Тип переменной count: ${typeof(countString)}`);
console.log(countString);
console.log(`Тип переменной userName: ${typeof(userNameNumber)}`);
console.log(userNameNumber);
//Variant #2
console.log('Вариант №2');
count = 42;
userName_3 = '42';
countString = '' + count;
userNameNumber = +userName_3;
console.log(`Тип переменной count: ${typeof(countString)}`);
console.log(countString);
console.log(`Тип переменной userName: ${typeof(userNameNumber)}`);
console.log(userNameNumber);

// NORMAL level Task 4
let a_4 = 1;
let b_4 = 2;
let c = "белых медведей";
console.log('' + a_4 + b_4 + ' ' + c);

// NORMAL level Task 5
let string_1 = "доступ";
let string_2 = "морпех";
let string_3 = "наледь";
let string_4 = "попрек";
let string_5 = "рубило";
let lengthWords;
lengthWords = string_1 + string_2 + string_3 + string_4 + string_5;
console.log(lengthWords.length);

// NORMAL level Task 6
let age = 35;
let name = 'John';
let genderMale = true;
console.log(`Variable: ${("age")} have type: ${typeof(age)}`);
console.log(`Variable: ${("name")} have type: ${typeof(name)}`);
console.log(`Variable: ${("genderMale")} have type: ${typeof(genderMale)}`);

// NORMAL level Task 7
let userName = prompt('Enter your name:');
let userAge = prompt('Enter your age:');
alert(`Your name is ${userName} and your are ${userAge} years old`);

// ADVANCE level Task 1
let a = 4;
let b = 3;
a += b;
b = a - b;
a -=  b;
console.log(a);
console.log(b);