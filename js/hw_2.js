"use strict"

/////////////////Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

/////////////////Task 2

let second = 60,
    minute = 60,
    hour = 24,
    year = 365,
    myAge = 23,
    myAgeInSeconds = second * minute * hour * year * myAge;

console.log(myAgeInSeconds)

/////////////////Task 3

let count = 42;
let userName = '42';

console.log(String(count));
console.log(count.toString());
console.log(+count);
console.log(Number(count));

/////////////////Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(`${a}${b} ${c}`);

/////////////////Task 5

let one = "доступ",
    two = "морпех",
    three = "наледь",
    four = "попрек",
    five = "рубило",
    lengthWords =  one + two + three + four + five;    

console.log(lengthWords.length)

/////////////////Task 6

let num = 6,
    str = 'строка',
    other = false;

console.log(`Variable: num have type: ${typeof(num)}`)
console.log(`Variable: str have type: ${typeof(str)}`)
console.log(`Variable: other have type: ${typeof(other)}`)


/////////////////Task 7

let name = prompt('Ваше имя');
let age = +prompt('Ваш возраст');

console.log(`${name} ${age}`)

/////////////////



