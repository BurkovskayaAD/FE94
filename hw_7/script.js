// // 1

// const fibonacci = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ];

// // 1-1

// fibonacci.forEach((item) => console.log(item));

// // 1-2

// fibonacci.forEach(function (item) {
//   console.log(item);
// });

// // 2

// const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

// // 2-1

// let user = users.map((item, index) => `member ${index + 1}: ${item}`);
// console.log(user);

// // 2-2

// let user1 = users.map(function (item, index) {
//   console.log(`member ${index + 1}: ${item}`);
// });

// // 3

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// // 3-1

// let number = numbers.filter((item) => item > 0);
// console.log(number);

// // 3-2

// let number = numbers.filter(function (item) {
//   return item > 0;
// });
// console.log(number);

// // 4

// const fibonacci = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ];

// // 4-1

// let sum = fibonacci.reduce((accum, item) => accum + item);
// console.log(sum);

// // 4-2

// let sum = fibonacci.reduce(function (accum, item) {
//   return accum + item;
// });
// console.log(sum);

// // 5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// // 5-1

// let firstEvennumber = numbers.find((item) => item % 2 == 0);
// console.log(firstEvennumber);

// 5-2

// let firstEvennumber = numbers.find(function (item) {
//   return item % 2 == 0;
// });
// console.log(firstEvennumber);
