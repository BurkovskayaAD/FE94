/* 1 задание */
let passport = {
  name: "Katya",
  age: 24,
};
delete passport.name;
delete passport.age;

/* 2 задание */
let check = {
  bestfriend: "Misha",
  besfriendgender: "male",
};

console.log("bestfriend" in check);
console.log("bestfriendage" in check);

/* 3 задание */
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (let key in student) console.log(key);

console.log(Object.values(student));

/* 4 задание */
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

/* 5 задание */
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey1: 664,
  alexandra: 199,
};
let middle =
  (salaries.andrey +
    salaries.sveta +
    salaries.anton +
    salaries.andrey1 +
    salaries.alexandra) /
  5;
console.log(middle);

/* 6 задание */
let data = {
  name: prompt("Enter your name"),
  password: prompt("Enter your password"),
};
let checkname = prompt("Enter your name here again please");
let checkpass = prompt("Enter your password here again please");

if (checkname == data.name && checkpass == data.password) {
  alert("Ok");
}
if (checkname != data.name || checkpass != data.password) {
  alert("Not Ok, try again!");
}

/* 7 задание */

let counting = {
  football: function (a) {
    if (a == 1) {
      return "One";
    }
    if (a == 2) {
      return "Two";
    }
    if (a == 3) {
      return "Three";
    }
    if (a == 4) {
      return "Four";
    }
    if (a == 5) {
      return "Five";
    }
    if (a == 6) {
      return "Six";
    }
    if (a == 7) {
      return "Seven";
    }
    if (a == 8) {
      return "Eight";
    }
    if (a == 9) {
      return "Nine";
    } else {
      return "Wrong Number! Must be 9 or less.";
    }
  },
  foot: function (b) {
    if (b == 1) {
      return "One";
    }
    if (b == 2) {
      return "Two";
    }
    if (b == 3) {
      return "Three";
    }
    if (b == 4) {
      return "Four";
    }
    if (b == 5) {
      return "Five";
    }
    if (b == 6) {
      return "Six";
    }
    if (b == 7) {
      return "Seven";
    }
    if (b == 8) {
      return "Eight";
    }
    if (b == 9) {
      return "Nine";
    } else {
      return "Wrong Number! Must be 9 or less.";
    }
  },
};
console.log(counting.football(10) + " : " + counting.foot(4));

/* 8 задание */
let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));
