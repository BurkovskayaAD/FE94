// 1

let obj1 = {
  name: "Ivan",
  surname: "Ivanov",
};
delete obj1.name;
delete obj1.surname;
console.log(obj1.name);

// 2

let obj2 = {
  name: "Ivan",
  surname: "Ivanov",
};

console.log("name" in obj2);

// 3

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}

// 4

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(
  colors["ru pum pu ru rum"].red + " и " + colors["ru pum pu ru rum"].blue
);

// 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199,
};
let averageSalary = 0;
let count = 0;
for (let key in salaries) {
  averageSalary += salaries[key];
  count += 1;
}
console.log(averageSalary / count);

6;

let userLogin = prompt("Введите логин");
let userPassword = prompt("Введите пароль");
let validator = {
  login: userLogin,
  password: userPassword,
};
userLogin = prompt("Подтведите логин");
userPassword = prompt("Подтвердите пароль");
if (validator.login === userLogin && validator.password === userPassword) {
  alert("Добро пожаловать");
}
