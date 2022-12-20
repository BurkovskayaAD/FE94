//1
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonacci.forEach(function (elem, index) {
  console.log(`${elem} имеет индекс ${index}`);
});
//2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
let usersTwo = users.map(function (el, index) {
  console.log(`member ${index + 1}: ${el}`);
});
let usersTree = users.map((el, index) => `member ${index + 1}: ${el}`);
console.log(usersTree);
//3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbersOne = numbers.filter(function (el) {
  return el > 0;
});
console.log(numbersOne);
let numbersTwo = numbers.filter((el) => el > 0);
console.log(numbersTwo);
//4
const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
let sumFib = fibonacci2.reduce(function (el, index) {
  return el + index;
});
console.log(sumFib);
let sumFibTwo = fibonacci2.reduce((el, index) => el + index);
console.log(sumFibTwo);
//5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let numbers2One = numbers2.find(function (el, index) {
  if (el % 2 == 0) {
    return el;
  }
});
console.log(numbers2One);
let numbers2Two = numbers2.find((el) => (el % 2 ? false : true));
console.log(numbers2Two);
//adv 2
let adv2 = (str) => str.replace(/e|u|i|o|a/gi, "");
console.log(adv2("This website is for losers LOL!"));
//adv 3
let art = (art) =>
  art
    .toUpperCase()
    .split("")
    .map((el, index) => (el = el + el.toLowerCase().repeat(index)))
    .joim("-");
console.log(art("cwAt"));
