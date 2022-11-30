/* 1 задание */
let a = "true";
let b = false;
let c = 17;
let e = undefined;
let u = null;
console.log(typeof a, typeof b, typeof c, typeof e, typeof u);

/* 2 задание */
let height = 15;
let width = 20;
console.log(Math.max(height, width));

/* 3 задание */
for (let i = 1; i < 20; i++)
  if (i % 3 == 0) {
    console.log(i);
  }

/* 4 задание -  я его не сделала, так как не поняла суть задачи:( */
/* 5 задание */
let anything = prompt("Enter any number here");
if (anything % 5 == 0) {
  console.log("Fiz");
}
if (anything % 3 == 0) {
  console.log("Buz");
}
if (anything % 5 == 0 && anything % 3 == 0) {
  console.log("FizBuz");
}

/* 6 задание */
let yourage = prompt("Enter your age here");
if (yourage < 18) {
  alert("Пей колу!");
}
if (yourage >= 18) {
  alert("Попей пивка!");
}
if (yourage <= 18 && yourage >= 16) {
  alert("Можешь выкурить сигаретку, только маме не говори!");
}
if ((yourage = 16)) {
  alert('Заводи ребенка и участвуй в "Беременна в 16!"');
}

/* 7 задание */
let side = prompt("В какую сторону света ты бы хотел отправиться?");
switch (side) {
  case "юг":
    alert("на юг пойдешь счастье найдешь");
    break;
  case "север":
    alert("на север пойдешь много денег найдешь");
    break;
  case "запад":
    alert("на запад пойдешь верного друга найдешь");
    break;
  case "восток ":
    alert("на восток пойдешь разработчиком станешь");
    break;
  default:
    alert("Вы ввели неверные данные, попробуйте еще раз!");
}
/* 8 задание */
let smallbig = prompt("Введи свое имя бро");
alert("Привет, " + smallbig.toLowerCase());

/* 9 задание */
let i = 0;
let kek = "#";
while (i < 5) {
  console.log(kek);
  kek = kek + "#";
  i++;
}
