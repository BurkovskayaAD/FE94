//1
const colors = ["red", "green", "blue"];
console.log(colors.length);
//2
const animals = ["monkey", "dog", "cat"];
console.log(animals[2]);
//3
let numbers = [5, 43, 63, 23, 90];
for (let i = 0; i < numbers.length; i++) {
  numbers.splice(i, numbers[i]);
}
console.log(numbers);
//4
const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);
//5
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
//6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newArr = evenNumbers.concat(oddNumbers);
console.log(newArr);
console.log(newArr.indexOf(8));
//7
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));
//8
function pal() {
  let aPal = prompt("введите слово");
  let oneArr = aPal.split("");
  let twoArr = oneArr.concat();
  twoArr.reverse();
  let a = oneArr.join("");
  let b = twoArr.join("");
  if (a == b) {
    return "Ваше слово палиндром";
  } else {
    console.log(`Вы ввели слово ${aPal}`);
  }
}
console.log(pal());
