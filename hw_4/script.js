"use strict";

// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

// ******************* SOLVE ********************************

// let sum = 0;
// function getSum(x) {
//   for (let i = 0; i <= x; i++){
//      sum += +i;
//   }
// }
// getSum(100);
// console.log(sum);

// #### Task 2 💻

// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

// ******************* SOLVE ********************************

// let percent=17;
// let years=5;
// let difference=0;
// function getSum (x) {
//   difference=x*years*17/100;
// }
// getSum(100)
// console.log(difference);

// #### Task 3 💻

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по


// ******************* SOLVE ********************************

// let str='';
// function trimString (str, a, b ){
// str=str.slice(a,b);
// return  console.log(str);
// }

// trimString ('Hello', 1, 4)

// #### Task 4 💻

// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// ******************* SOLVE ********************************

// let sum =0;
// function getSumNumbers (x){
// for (let i=0; i<=x.length-1; i++){
//   sum +=+x[i];
// }
// return console.log(sum);
// }
// getSumNumbers('2021');

// > Для 2021 это будет 5.

// #### Task 5 💻

// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

// ```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// ```

// ******************* SOLVE ********************************

// let sum=0;
// function getSum (a,b){
// for (let i=a; i<=b; i++)
// sum =sum +i;
// if (a==b){
//     return (console.log(a , 'Since both are same')
//     )
// }
// return sum
// }
// getSum(1,1)
// console.log(sum);

// #### Task 6 💻

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

// ******************* SOLVE ********************************

// let fn1=function foo(){
//     console.log('foo');
// }
// let fn2=function boo(){
//     console.log('boo');
// }

// function fooboo ( bool, fn1, fn2){
// if (bool==true){
//    return fn1();
// } else{
//     return fn2();
// }
// }
// fooboo (false, fn1, fn2)

// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

// ******************* SOLVE ********************************

// function triangle(a, b, c) {
//   if ((a == b == c) ||
//  (a + b > c && a + c > b && c + b > a)) {
//  console.log("true");
//   }
//   else {
//     console.log("false");
//   }
// }
// triangle(30, 10, 10);
// #### Task 2 👨‍🏫

// + Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

// + Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.

// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

// ******************* SOLVE ********************************

// let count = 0;
// function getSliceOfChokolate(x, y) {
//   if (n > 0 && m > 0) {
//     count = n - 1 + (m - 1);
//     return count;
//   }
// }
// getSliceOfChokolate(2, 4);
// console.log(count);

// #### Task 3 👨‍🏫

// + Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.

// + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.

// + Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.

// + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».

// + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.

// +  Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

// ******************* SOLVE ********************************


// const Tax = 20;
// const mobilePrice = 100;
// const accessoryPrice = 40;
// let money = +prompt(" Введите сумму счета");
// let sumForOne = (mobilePrice + accessoryPrice) * (1+ 0.01*Tax);
// let allSumma = 0;
// console.log(sumForOne);
// let i = 0;

// function getSum(money){
// for (i = money; i >= sumForOne; i--) {
//    i=money/sumForOne;
//    i=Math.floor(i);
//    allSumma=i*sumForOne
//   console.log(` ${i} -это количество телефонов (с аксессуарами для них) Вы можете купить `);
//   console.log(`${allSumma}- это вся сумма, которую Вы потратите`);
// }}

// getSum(money);


