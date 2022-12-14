//1
let city = {
  name: "Minsk",
  population: 200000,
};
delete city.name;
delete city.population;
//2
let country = {
  one: "Belarus",
  two: "Russia",
  tree: "China",
};
console.log("one" in country);
console.log("four" in country);
//3
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (let key in student) console.log(key + ": " + student[key]);
//4
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};
console.log(colors["ru pum pu ru rum"]["red"]);
console.log(colors["ru pum pu ru rum"]["blue"]);
//5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
  result: function () {
    console.log(
      (this.andrey + this.sveta + this.anton + this.andrey2 + this.alexandra) /
        5
    );
  },
};
salaries.result();

function newSalare(salaries2) {
  let count = 0;
  let res = 0;
  for (let key in salaries2) {
    res = res + salaries2[key];
    count++;
  }
  return res / count;
}

let salaries2 = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  mihail: 664,
  alexandra: 199,
};
console.log(newSalare(salaries2));
//6
let data = {
  lg: prompt("Введите логин"),
  pass: prompt("Введите пароль"),
};
let lgTwo = prompt("Подтвердите логин");
let passTwo = prompt("Подтвердите пароль");
if (data.lg == lgTwo && data.pass == passTwo) {
  console.log("Добро пожаловать");
} else {
  console.log("Данные введены не верно");
}
//7
let football = {
  one: function (a) {
    if (a == 1) {
      return "один";
    } else if (a == 2) {
      return "два";
    } else if (a == 3) {
      return "три";
    } else if (a == 4) {
      return "четыре";
    } else if (a == 5) {
      return "пять";
    } else if (a == 6) {
      return "шесть";
    } else if (a == 7) {
      return "семь";
    } else if (a == 8) {
      return "восемь";
    } else if (a == 9) {
      return "девять";
    } else {
      return "Ошибка";
    }
  },
  two: function (b) {
    if (b == 1) {
      return "один";
    } else if (b == 2) {
      return "два";
    } else if (b == 3) {
      return "три";
    } else if (b == 4) {
      return "четыре";
    } else if (b == 5) {
      return "пять";
    } else if (b == 6) {
      return "шесть";
    } else if (b == 7) {
      return "семь";
    } else if (b == 8) {
      return "восемь";
    } else if (b == 9) {
      return "девять";
    } else {
      return "Ошибка";
    }
  },
};
console.log(football.one(4) + ":" + football.two(8));
