// Task 1
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
//////////
// Task 2
let height = 15;
let width = 20;
if (height > width) {
    console.log(height);
} else {console.log(width) };
console.log(Math.max(height, width));
//////////
// Task 3
for (let i = 1; i <= 20; i++) {
    if (i%3 == 0) {
        console.log(i);
    }
}
//////////
// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = ((key && documents && pen) && (orange || orange));
console.log(shouldGoToWork);
//////////
// Task 5
let number = prompt('Введите число');
if (number % 5 == 0 && number % 3 == 0) {
    console.log('FizBuz');
} else if (number % 5 == 0) {
    console.log('Fiz');
} else if (number % 3 == 0) {
    console.log('Buz');
}
//////////
// Task 6
let age = prompt('Введите возраст');
if (age >= 18) {
    console.log('Попей пивка');
} else {
    console.log('Пей колу');
}
if (age >= 16 && age <= 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
}
//////////
// Task 7
let coordinates = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (coordinates) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('попробуйте еще раз');
}
//////////
// Task 9
let ladder = '';
for(i = 0; i <= 5; i++){
    ladder += '#';
    console.log(ladder)
}





