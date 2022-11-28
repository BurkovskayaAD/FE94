//NORMAL level
//Task 1 
let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);

//Task 2
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAgeInSeconds = (secondsInMinute*minutesInHour*hoursInDay*daysInYear*26);
console.log(myAgeInSeconds);
//or
//let myAge = 26;
//let myAgeInSeconds = (secondsInMinute*minutesInHour*hoursInDay*daysInYear*myAge);
//console.log(myAgeInSeconds);


//Task 3
let count = 42;
let userName = '42';
console.log(typeof(String(count)));
console.log(typeof(Number(userName)));
//or
console.log(typeof(''+count));
console.log(typeof(+userName));

//Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(String(a)+b+" "+c);

//Task 5
let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';
let lengthWords = (word1.length+word2.length+word3.length+word4.length+word5.length);
console.log(lengthWords);

//Task 6
let d = 50;
let f = '50';
let bool = true;
d = `Variable: %variable name% have type: %type variable%`;
f = `Variable: %variable name% have type: %type variable%`;
bool = `Variable: %variable name% have type: %type variable%`;
console.log(d);
console.log(f);
console.log(bool);

//Task 7
let userName1 = prompt ('Ваше имя?');
let userAge1 = prompt ('Ваш возраст?');
console.log(userName1);
console.log(userAge1);

//ADVANCED level
//Task 1 
let a1 = 4;
let b1 = 3;
a1=a1+b1;
b1=a1-b1;
a1=a1-b1;
console.log(a1);
console.log(b1);
