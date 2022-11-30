// 1

let a = 10;
let b = 7;
let c;
let d = null;
console.log(10 > 7);
console.log(10 < 7);
console.log((a += b));
console.log(c);
console.log(d);

// 2

let height = 15;
let width = 20;
console.log(Math.max(height, width));

// 3

for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);
// 5

let number = prompt("Введите число");
if (number % 3 === 0 && number % 5 === 0) {
  console.log(`FizBuz`);
} else if (number % 3 === 0) {
  console.log(`Buz`);
} else if (number % 5 === 0) {
  console.log(`Fiz`);
}

// 6

let userAge = prompt("Сколько вам лет");

if (userAge < 16) {
  console.log("Пей колу");
} else if (userAge <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else if (userAge > 18) {
  console.log("Попей пивка и можешь выкурить сигаретку");
}

// 7

let siteoftheWorld = prompt("В какую сторону света вы хотелибы отправиться?");

switch (siteoftheWorld) {
  case "юг":
    alert("на юг пойдешь счастье найдешь");
    break;
  case "север ":
    alert("на север пойдешь много денег найдешь");
    break;
  case "запад":
    alert("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    alert("на восток пойдешь разработчиком станешь");
    break;
  default:
    alert("Не верные данные, попробуйте еще раз");
}
// 8
