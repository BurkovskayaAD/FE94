// NORMAL level Task 1
let obj = {
	name: "John",
  age: 22
}
console.log(obj);
delete obj.name;
delete obj.age;
console.log(obj);

// NORMAL level Task 2
let obj_2 = {
	name: "Carl",
  "eye color": "brown"
}
 console.log("eye color" in obj_2);

// NORMAL level Task 3
const student = {
	name: "John",
  age: 19,
  isHappy: true
}
for (let key in student) {
	console.log(key);
}
for (let key in student) {
	console.log(student[key]);
}

// NORMAL level Task 4
const colors = {
	'ru pum pu ru': {
  red: 'красный',
	green: 'зеленый',
	blue: 'синий'
  },
}
for (let key in colors["ru pum pu ru"]) {
	  if (key == "red" || key == "blue") {
  	console.log(colors["ru pum pu ru"][key]);
  	}
}

// NORMAL level Task 5
let salaries = {
	andrey: 500,
  sveta: 413,
  anton: 987,
  alexey: 664,
  alexandra: 199
}
let averageSalary = 0;
let count = 0;
for (let key in salaries) {
	averageSalary += salaries[key];
  count++;
}
console.log(averageSalary / count);

// NORMAL level Task 6
let userLogin = prompt('Введите логин для регистрации:');
let userPassword = prompt('Введите пароль для регистрации:');
let userData = {
	login: userLogin,
  password: userPassword
}
userLogin = prompt('Подтвердите введенный логин:');
userPassword = prompt('Подтвердите введенный пароль:');
if (userData.login === userLogin && userData.password === userPassword) {
	alert("Добро пожаловать!");
} else alert("Неверный логин или пароль!!!");

// ADVANCE level Task 1
let numberToWord = {
	0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять"
}
let gameScore = prompt('Введите счет матча в указанном формате:', "2:3");
console.log(`Счет матча ${numberToWord[+gameScore[0]]} : ${numberToWord[+gameScore[2]]}!!`);

 // ADVANCE level Task 2
 let student1 = {
 	name: 'Polina',
  age: 27,
 }
let student2 = {
 	name: 'Polina',
  age: 27,
 }
 let objectAreEqual = true;
 for (let key in student1) {
 if ((student1[key] !== student2[key])) {
  	objectAreEqual = false;
    break;
  }
}
objectAreEqual === true ? console.log('Объекты student1 и student2 равны.'): console.log('Объекты student1 и student2 НЕ равны!!!'); 
