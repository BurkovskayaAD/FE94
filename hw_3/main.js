//////////////////////////////////////

let typeString = 'true';
let typeBoolean = false;
let typeNumber = 17;
let typeUndefined = undefined;
let typeNull = null;

console.log(typeof (typeString));
console.log(typeof (typeBoolean));
console.log(typeof (typeNumber));
console.log(typeof (typeUndefined));
console.log(typeof (typeNull));

//////////////////////////////////////

let height = 15;
let width = 20;

if (width > height){
    console.log(`Ширина больше высоты и равна: ${width}`);
}else if (height > width){
    console.log(`Высота больше ширины и равна: ${height}`);
}else {
    console.log(`Параметры равны ${width} и ${height}`);
}

//////////////////////////////////////

for (let i = 1; i<=20; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

//////////////////////////////////////

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

//////////////////////////////////////

let userRandomNumber = prompt('Введите любое число больше 3');
if (userRandomNumber % 3 === 0 && userRandomNumber % 5 === 0){
    console.log('FizBuz');
} else if (userRandomNumber % 3 === 0){
    console.log('Buz');
}else if (userRandomNumber % 5 === 0){
    console.log('Fiz');
} else {
    console.log('Число введено не верно')
}

//////////////////////////////////////

let userAge = prompt('Введите Ваш возраст');

if (userAge >= 16 && userAge < 18) {
    alert('Можешь выкурить сигаретку, только маме не говори ');
} else if (userAge >= 40) {
    alert('Деда тебе за таблетками');
} else if (userAge >= 18) {
    alert('Попей пивка');
} else if (userAge < 5) {
    alert('Ваш возраст слишком мал для напитков')
} else if (userAge < 18) {
    alert('Пей колу');
}

//////////////////////////////////////

let userRoute = prompt('В какую сторону света Вы бы хотели отправиться?');

switch (userRoute) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север': {
        console.log('на север пойдешь много денег найдешь');
        break;
    }
    case 'запад': {
        console.log('на запад пойдешь верного друга найдешь');
        break;
    }
    case 'восток': {
        console.log('на восток пойдешь разработчиком станешь');
        break;
    }
    default: {
        console.log('Попробуйте ещё раз ввести сторону света!');
    }
}

//////////////////////////////////////

let userName = 'пОлИнА нАбЕрЕжНаЯ';

let correctName = userName.split(' ').map(word => word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()).join(' ');

alert(`Привет ${correctName}!`)

//////////////////////////////////////

let latticeIcon = '';
for (let i = 1 ; i < 7; i++) {
    latticeIcon += '\n'
    for (let j = 0; j < i ; j++) {
        latticeIcon += `#`;
    }
}
console.log(latticeIcon)
