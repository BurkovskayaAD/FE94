//1
let one = "true";
let two = false;
let tree = 17;
let four = undefined;
let five = null;
console.log(`${typeof one}`);
console.log(`${typeof two}`);
console.log(`${typeof tree}`);
console.log(`${typeof four}`);
console.log(`${typeof five}`);
//2
let height = 15;
let width = 20;
if (height > width) {
  console.log(height);
} else if (height == width) {
  console.log("Числа равны");
} else {
  console.log(width);
}
//3
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
//4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);
//5
let number = prompt(`Введите число`);
if (number % 5 == 0 && number % 3 == 0) {
  console.log("FizBuz");
} else if (number % 3 == 0) {
  console.log("Buz");
} else if (number % 5 == 0) {
  console.log("Fiz");
}
//6
let old = prompt(`Введитt Ваш возраст`);
if (old >= 16 && old <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else if (old < 16) {
  console.log("Пей колу");
} else if (old <= 18) {
  console.log("Попей пивка");
}
//7
let compass = prompt(`В какую сторону света вы бы хотели отправиться?`);
switch (compass) {
  case "юг":
    alert("на юг пойдешь счастье найдешь");
    break;
  case "север":
    alert("на север пойдешь много денег найдешь");
    break;
  case "запад":
    alert("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    alert("на восток пойдешь разработчиком станешь");
    break;
}
//9
let res = "#";
while (res.length <= 6) {
  console.log(res + "\n");
  res += "#";
}
