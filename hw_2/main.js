let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//////////////////////////////////////

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let DaysInYear = 365;
let myAgeInSeconds = 34*secondsInMinute*minutesInHour*hoursInDay*DaysInYear;

console.log('My age in seconds:' + ' ' + myAgeInSeconds);

//////////////////////////////////////

let count = 42;
let userName = '42';

console.log(typeof (String (count)));
console.log(typeof ('' + count));
console.log(typeof (Number(userName)));
console.log(typeof (+userName));

//////////////////////////////////////

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(String(a) + String(b) + ' ' + c);

//////////////////////////////////////

let wordFirst = 'доступ';
let wordSecond = 'морпех';
let wordThird = 'наледь';
let wordFourth = 'попрек';
let wordFifth = 'рубило';
let lengthWords = (wordFirst + wordSecond + wordThird + wordFourth + wordFifth).length;
console.log(lengthWords);

//////////////////////////////////////

let varString = 'some text';
let varNumber = 10;
let varBoolean = true;

console.log(`Variable varString have type: ${typeof (varString)}`);
console.log(`Variable varNumber have type: ${typeof (varNumber)}`);
console.log(`Variable varBoolean have type: ${typeof (varBoolean)}`);

//////////////////////////////////////

let usersName = prompt('Введите свое имя');
let usersAge = prompt('Введите свой возраст');
console.log(`Имя пользователя ${usersName},
Возраст пользователя ${usersAge}.`);

//////////////////////////////////////

let firstNumber = 4;
let secondNumber = 3;

firstNumber = firstNumber * secondNumber;
secondNumber = firstNumber / secondNumber;
firstNumber = firstNumber / secondNumber;

console.log(`First Number ${firstNumber}`);
console.log(`Second Number ${secondNumber}`);