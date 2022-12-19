"use strict";

// NORMAL level
// Task 1 🖥
// Выведи все элементы массива в консоль с помощью метода forEach

//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow function

// ******** SOLVE *************************************************

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// //  1 СПОСОБ ,используя function declaration

fibonacci.forEach((el)=>console.log(el));

// //  2 СПОСОБ ,используя arrow function

// let eachElement=()=>{fibonacci.forEach((el)=>console.log(el));
// }
// eachElement();

// Task 2 🖥
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

// ******** SOLVE *************************************************

// ['member 1: Darya', 'member 2: Masha', ... etc]

// ******** SOLVE *************************************************

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// //  1 СПОСОБ ,используя function declaration

// let addMassive=users.map((el, index)=>`member ${index+1}:${el} `);
// console.log(addMassive);

// //  2 СПОСОБ ,используя arrow function

// let addMassive=()=>users.map((el, index)=>`member ${index+1}:${el} `);
// console.log(addMassive());

// Реализуйте решение двумя способами, используя function declaration & arrow function.

// Task 3 🖥
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

// ******** SOLVE *************************************************

//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// // Реализуйте решение двумя способами, используя function declaration & arrow function.
//  //  1 СПОСОБ ,используя function declaration

// //  let positiveNum=numbers.filter((el)=>el>0)
// //  console.log(positiveNum);

// // //  2 СПОСОБ ,используя arrow function
// let positiveNum=()=>numbers.filter((el)=>el>0)
// console.log(positiveNum());

// Task 4 🖥
// Используя метод reduce получите сумму всех чисел массива.

// ******** SOLVE *************************************************

// const fibonacci = [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ];

// Реализуйте решение двумя способами, используя function declaration & arrow function.
//    1 СПОСОБ ,используя function declaration

// const value=fibonacci.reduce((accum, value, index, array)=>accum +=value);
// console.log(value);

//  2 СПОСОБ ,используя arrow function
// const value=()=>fibonacci.reduce((accum, el)=> accum +=el);
// console.log(value());

// Task 5 🖥
// Используя метод find найдите в массиве первое четное число.

// ******** SOLVE *************************************************

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// // Реализуйте решение двумя способами, используя function declaration & arrow function.
// //    1 СПОСОБ ,используя function declaration

// let evenNumber = numbers.find((el) => el % 2 == 0);
// console.log(evenNumber);
// //  2 СПОСОБ ,используя arrow function

// // let evenNumber = () => numbers.find((el) => el % 2 === 0);
// // console.log(evenNumber());

// ADVANCED level
// Task 1 👨‍🏫
// Написать функцию конструктор Student

// В каждом объекте студента должны быть поля salary , rate , name
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

// ***** SOLVE **************

// function Student(salary, rate, name) {
//   this.salary = salary;
//   this.rate = rate;
//   this.name = name;

//   this.sum = function () {
//     rate =
//       rate == "A"
//         ? 12
//         : rate == "B"
//         ? 9
//         : rate == "C"
//         ? 6
//         : rate == "D"
//         ? 0
//         : "не положен кредит";

//     let sum = salary * rate;
//     console.log(sum);
//     return sum;
//   };
// }

// // На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы.

// let student1 = new Student(1000, "A", "Vital");
// let student2 = new Student(1000, "B", "Kirill");
// let student3 = new Student(1000, "C", "Andrei");
// let student4 = new Student(1000, "D", "Kate");
// let student5 = new Student(1000, "A", "Nastya");

// // console.log(student2.sum());

// // Создать массив students и поместить в него студентов.

// let students = [student1, student2, student3, student4, student5];

// // Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// let allCredit = 0;
// function getAverageSum(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     allCredit += arr[i].sum();
//   }
//   return allCredit;
// }

// console.log(getAverageSum(students));

// rate имеет 4 категории A B C D

// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

// Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этой задачи y не считается гласной.

// ******** SOLVE *************************************************

// let str = prompt("напиши строку");
// let withoutVocal ='';

// function regular(a) {
//   for (let i = 0; i <= a.length - 1; i++) {
//     let lowerStr = a.toLowerCase();
//     if (
//       !/a/.test(lowerStr[i]) &&
//       !/e/.test(lowerStr[i]) &&
//       !/i/.test(lowerStr[i]) &&
//       !/o/.test(lowerStr[i]) &&
//       !/u/.test(lowerStr[i])
//     ) {
//       withoutVocal +=a[i];
//       console.log(withoutVocal);
//     }
//   }
// }
// console.log(regular(str));

// Task 3 👨‍🏫 Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:

//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Параметр - это строка, которая включает только буквы от a..z и A..Z.

// ******** SOLVE *************************************************

// let accum = "abcd";

// let xTransf = [];

// function transformStr(str) {
//   let x = str.toUpperCase().split("");
//   for (let i = 0; i <= x.length - 1; i++) {
//     xTransf.push(x[i] + x[i].toLowerCase().repeat(i));
//     let shifr = xTransf.join("-");
//     console.log(shifr);
//   }
// }
// console.log(transformStr(accum));

// Task 4 👨‍🏫 Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case

// ******** SOLVE *************************************************

// function checkIsogramm(stroka) {
//    let str=stroka.toLowerCase()
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) return false;
//     obj[str[i]] = 1;
//     // console.log(obj);
//   }
//   return true;
// }

// console.log("abc", checkIsogramm("abc"));
// console.log("aAbc", checkIsogramm("aAbc"));
// console.log("abcda", checkIsogramm("abccda"));
