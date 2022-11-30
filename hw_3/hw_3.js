"use strict"

///////////Task 1

let a = 'true',
    b = false,
    c = 17,
    d = undefined,
    e = null;

console.log(typeof(a))    
console.log(typeof(b)) 
console.log(typeof(c)) 
console.log(typeof(d)) 
console.log(typeof(e)) 

///////////Task 2

let height = 15;
let width = 20;

if(height > width){
    console.log(`наименьшее число ${height}`)
} else {
    console.log(`наибольшее число ${width}`)
}

///////////Task 3

for(let i = 1; i <= 20; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}

//////////Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (key && documents && pen) && (apple || orange);

console.log(shouldGoToWork);

/////////////////////////Task 5

let num = +prompt('Введите число')

if(num % 3 == 0 && num % 5 == 0){
    console.log('FizBuz');
} else if(num % 5 == 0){
    console.log('Fiz');
} else if(num % 3 == 0){
    console.log('Buz');
} else{
    console.log('error');
}

////////////////Task 6

let age = +prompt('Сколько вам лет?');

if(age >= 18){
    console.log('Попей пивка')
} else if(age < 18){
    console.log('Пей колу')
    if(age >= 16 && age < 18){
        console.log('Можешь выкурить сигаретку, только маме не говори')
    }
}

/////////////////Task 7

let south = 'юг',
    north = 'север',
    west = 'запад',
    east = 'восток',
    world = prompt('В какую сторону света вы бы хотели отправиться?')

switch (world) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;       
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;    
    default:
        console.log('попробуйте ещё раз');       
}

//////////////ADVANCED level Task 1

let name = prompt('Введите ваше имя');

alert(`Привет, ${name.toLowerCase()}!`)

//////////////ADVANCED level Task 2

let result = '';
const length = 7;

for(let i = 1; i < length; i++){
    for(let j = 0; j < i; j++){
        result += '#'
    }
    result += '\n'
}

console.log(result)

//// or

let v = '#';
let p = ''

for(let i = 0; i < 6; i++){
    console.log(p += v)
}
