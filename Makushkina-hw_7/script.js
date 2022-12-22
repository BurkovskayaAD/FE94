/* 1 задание */

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci.forEach((elem) => {
  console.log(elem);
});

fibonacci.forEach(function (elem) {
  console.log(elem);
});

/* 2 задание */
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const members = users.map((elem, index) => {
  return "member " + (index + 1) + ": " + elem;
});

console.log(members);

const members1 = users.map(function (elem, index) {
  return "member " + (index + 1) + ": " + elem;
});

console.log(members1);

/* 3 задание */
const numbers = [7, -4, 32, -90, 54, 32, -21];

const something = numbers.filter(function (i) {
  return i >= 0;
});
console.log(something);

const anything = numbers.filter((i) => {
  return i >= 0;
});

console.log(anything);

/* 4 задание */
const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

const result = fibonacci2.reduce(function (sum, current) {
  return sum + current;
}, 0);

console.log(result);

const result2 = fibonacci2.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(result2);

/* 5 задание */
const numberz = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const like = numberz.find(function check(a) {
  return a % 2 == 0;
});
console.log(like);

const unlike = numberz.find((a) => {
  return a % 2 == 0;
});
console.log(unlike);

/* 6 задание */
function User(name, rate, salary) {
  this.name = name;
  this.rate = rate;
  this.salary = salary;
  this.credit = function () {
    if (this.rate == "A") console.log(this.salary * 12);
    if (this.rate == "B") console.log(this.salary * 9);
    if (this.rate == "C") console.log(this.salary * 6);
    if (this.rate == "D") console.log(0);
  };
}

let katya = new User("Katya", "D", 1500);

let anya = new User("Anya", "A", 3000);

let artem = new User("Artem", "B", 2780);

let vitalik = new User("Vitalik", "C", 1900);

let andrey = new User("Andrey", "B", 1300);

const students = [katya, anya, artem, vitalik, andrey];
/* и тут я застряла, не получается достать все суммой из массива, я неделю голову над этим ломала и в итоге ничего не получилось)  */

/* 7 задание */
let troll = (str) => str.replace(/[aeiouy]/gi, "");

console.log(troll("This website is for losers LOL!"));

/* 8 задание */
const accum = (str) =>
  str
    .split("")
    .map(
      (ch, i) =>
        (ch = ch.toLowerCase().repeat(i + 1)) &&
        ch.charAt(0).toUpperCase() + ch.slice(1)
    )
    .join("-");

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
