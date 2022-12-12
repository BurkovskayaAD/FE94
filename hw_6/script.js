"use strict";

// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

//     const colors = ['red', 'green', 'blue']
// *************** SOLVE ***************************************
// console.log(colors.length);
// // Выведите в консоль его длину.

// // #### Task 2 🖥

// // Дан массив:

// *************** SOLVE ***************************************

// const animals = ["monkey", "dog", "cat"];
// let last = animals.pop();
// console.log(last);
// // *************или***************
// console.log(animals[animals.length - 1]);
// Выведите в консоль его последний элемент вне зависимости от его длинны.

// #### Task 3 🖥

// Дан массив:

// *************** SOLVE ***************************************
// const numbers = [5, 43, 63, 23, 90];
// // console.log(numbers.splice(0, 0));
// // ********** или *********
// console.log(numbers.slice(0,0));

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

// #### Task 4 🖥

// Дан массив:

// const students = ["Polina", "Dasha", "Masha"];
// // *************** SOLVE ***************************************
// students.pop();
// students.push("Borya");
// students.shift();
// students.unshift("Andrey");
// console.log(students);
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

// #### Task 5 🖥

// Дан массив:

// const cats = ["Gachito", "Tom", "Batman"];
// // *************** SOLVE ***************************************
// // Выведите в консоль все элементы массива.
// for (let key of cats) {
//   console.log(key);
// }

// #### Task 6 🖥

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// // *************** SOLVE ***************************************
// const joinArray=evenNumbers.concat(oddNumbers)
// console.log(joinArray);
// console.log(joinArray.indexOf(8));
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

// #### Task 7 🖥

// Дан массив:

// const binary = [0, 0, 0, 0];
// // // *************** SOLVE ***************************************
// console.log(binary.join('1'));
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// *************** SOLVE ***************************************
//********** */ 1способ ****************

let ifPolindrom = "мадамq";
let arr=ifPolindrom.split('');
console.log(arr);
let reverseArr=arr.reverse();
console.log(reverseArr);
let newStr=reverseArr.join('');
console.log(ifPolindrom);
console.log(newStr);

if(ifPolindrom==newStr){
    console.log('It is a "Polindrom"! ');
}else{
        console.log('It is not a "Polindrom"! ');
    }

// ********** 2 способ через функцию *******************
// let arr = ifPolindrom.split("");//строку перевожу в массив
// console.log(arr);
// let newArr=[];
// let str='';

// function checkPol(obj) {
// for (let i=obj.length; i>=0; i--){
// newArr.push (obj[i]);// пушу в новый массив обратный порядок заданного массива
// str=newArr.join('');// новый обратный массив перевожу в строку 
// console.log(str);
// }
// if(obj==str){
//     console.log('It is a "Polindrom"! ');
// }else{
//     console.log('It is not a "Polindrom"! ');
// }
// }
// checkPol(ifPolindrom);

// #### Task 2 👨‍🏫

// const matrix = [
//   [12, 98, 78, 65, 23],
//   [54, 76, 98, 43, 65],
//   [13, 324, 65, 312],
//   [9092, 22, 45, 90000],
// ];
// // *************** SOLVE ***************************************
// let newArr = matrix.join(",").split(",");
// console.log(newArr);

// let average = 0;
// for (let i = 0; i < newArr.length; i++) {
//   average += +newArr[i] / newArr.length;
// }
// console.log(average);

// > Выведите в консоль среднее значение чисел в многомерном массиве.

// #### Task 3 👨‍🏫

// Дан массив:
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

// const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
// // *************** SOLVE ***************************************

// let plusArr = [];
// let minusArr = [];
// for (let key of mixedNumbers) {
//   if (key >= 0) {
//     plusArr.push(key);
//   } else {
//     minusArr.push(key);
//   }
// }
// console.log(plusArr);
// console.log(minusArr);

// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

// *************** SOLVE ***************************************
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);

// let kubArr = [];
// for (let key of arr) {
//   key = key ** 3;
//   kubArr.push(key);
// }
// console.log(kubArr);
