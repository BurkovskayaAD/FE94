let x = 20
let y = 58
let z = 42

console.log(x+y+z);

///////////////////////////////////////////////////////////////////////////////////////////////

const sec = 60;
const min = 60;
const hour = 24;
const year = 365;
const myAgeInSeconds = 22*year*hour*min*sec;
console.log(myAgeInSeconds);

//////////////////////////////////////////////////////////////////////////////////////////////

let count = 42;
let userName = "42";
let a = String(count);
let b = Number(userName);
let c = "" + count;
let d = +userName;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

////////////////////////////////////////////////////////////////////////////////////

let e = 1;
let f = 2;
let g = "белых медведей";
console.log(("" + e)+("" + f) +" "+g);

/////////////////////////////////////////////////////////////////////////////////////////////

const word1 = "доступ";
const word2 = "морпех";
const word3 = "наледь";
const word4 = "попрек";
const word5 = "рубило";

const lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log ("Длинна всех символов равна: " + lengthWords);

/////////////////////////////////////////////////////////////////////////////////////////////////////

const variable1 = 42;
const variable2 = "42";
const variable3 = true;

console.log(`Varieble: variable1 have type ${typeof(variable1)}`);
console.log(`Varieble: variable2 have type ${typeof(variable2)}`);
console.log(`Varieble: variable3 have type ${typeof(variable3)}`);

////////////////////////////////////////////////////////////////////////////////////////////

const getName = prompt ("Введите имя: ");
const getAge = prompt ("Введите возраст");
console.log ("Привет " + getName + ". Ваш возраст: " + getAge);

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Поменяйте значение переменных местами не создавая дополнительной переменной:

// ```javascript
//     let a = 4
//     let b = 3
// ```

let a1 = 4;
let a2 = 3;
console.log ("a1 = " + a1);
console.log ("a2 = " + a2);

a1 = a1 + a2;
a2 = a1 - a2;
a1 = a1 - a2;
console.log ("a1 = " + a1);
console.log ("a2 = " + a2);