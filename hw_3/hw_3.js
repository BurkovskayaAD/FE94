const a = "true";
const b = false;
const c = 17;
const d = undefined;
const e = null;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

//////////////////////////////////

let height = 15;
let width = 20;

if (height >= width) {
    console.log ("Наибольшее число: " + height);
} else {
    console.log ("Наибольшее число: " + width);
}

//////////////////////////////////

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("Число " + i + " кратно трём");
    }
}

//////////////////////////////////

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let sholdGoToWork = false;

if (key && documents && pen && (apple || orange)) {
    sholdGoToWork = true;
    console.log ("Можно идти на работу");
} else {
    console.log("Лучше всё ещё раз перепроверить");
}

///////////////////////////////////

let number = +prompt("Введите число");

if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizBuz");
} else if (number % 5 == 0) {
    console.log("Fiz");
} else if (number % 3 == 0) {
    console.log("Buz");
}

//////////////////////////////////

let age = +prompt("Введите свой возраст");
if (age >= 18) {
    console.log ("Попей пивка");
} else {
    console.log ("Пей колу");
}

if (age>=16 && age <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
}

/////////////////////////////////

let direction = prompt("Введите направление");

switch (direction) {
    case "юг":
        console.log("на юг пойдешь счастье найдешь");
        break;
    case "север":
        console.log("на север пойдешь много денег найдешь");
        break;
    case "запад":
        console.log("на запад пойдешь верного друга найдешь");
        break;
    case "восток":
        console.log("на восток пойдешь разработчиком станешь");
        break;
    default:
        console.log("Повторите сначала")
}

//////////////////////////////////

let name = prompt("Введите имя и фамилию");
let space = name.indexOf(" ");
alert("Привет, " + name[0].toUpperCase() + name.substring(1, space).toLowerCase() + " " + name[space+1].toUpperCase() + name.substring(space + 2).toLowerCase() + "!");

//////////////////////////////////

let hashTag = +prompt("Введите число");

for (let i = 1; i <= hashTag; i++) {
    console.log("#".repeat(i));
}