"use strict";

// let a= ("" + 1 + 0);// 10, тип "строка"

// let b= "" - 1 + 0;   // -1, тип "числа"

// let c =true+false;// 1, тип "булевый"


// let x =6/'3';// 2, тип "числа"

// let y ="2" * "3";// 6, тип "числа"
// let c= 4 + 5 + "px"// 45, тип "string"

// let c="$" + 4 + 5// $45, тип "string"

//let c= "4" - 2// 2, тип "числа"

// let c="4px" - 2// Nan

// "  -9  " + 5 //-9 5

// "  -9  " - 5 //-14

// null + 1// 1

// undefined + 1// nan

// " \t \n" - 2 // не знаю

// ### NORMAL level

// #### Task 1 💻

// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

// ****************************SOLVE************************************

// ```javascript
//     let x = 20
//     let y = 58
//     let z = 42

// let sum=x+y+z;
// console.log(sum);
// ```

// #### Task 2 💻

// Создайте переменные:

//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году

// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

// ****************************SOLVE************************************

// let secInMinute=60;
// let minutesInHour=60;
// let hoursInDay=24;
// let daysInYear=365;
// let myAge=38;
// let myAgeInSeconds=secInMinute*minutesInHour*hoursInDay*daysInYear*myAge;
// console.log(myAgeInSeconds);

// #### Task 3 💻

// ```javascript
//     let count = 42
//     let userName = '42'
// ```

// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

// ****************************SOLVE************************************

// let count = 42
//1.способ :
// count='42';
// 2.способ :
// count=count.toString();
// 3.способ :
// count=String(count) ;
// count=typeof(count);
// console.log(count);

// let userName = '42'
//1.способ :
// userName=+userName;
//2.способ :
// userName=Number(userName);
//3.способ :
// userName=parseInt(userName);

// userName=typeof(userName);
// console.log(userName);

// #### Task 4 💻
// Имеется три переменные:

// ```javascript

// ****************************SOLVE************************************

//   let a = 1;
//   let b = 2;
//   let c = "белых медведей";
// //   let stroka=''+a+b+' '+ c;
// // *********ИЛИ************
// //   let stroka=String(a)+b+' '+ c;
// // *********ИЛИ************
//   let stroka=`${a}${b} ${c}`;
//   console.log(stroka);

// ```

// Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.

// #### Task 5 💻

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

//     - доступ
//     - морпех
//     - наледь
//     - попрек
//     - рубило

// ****************************SOLVE************************************

// let world1 = "доступ";
// let world2 = "морпех";
// let world3 = "наледь";
// let world4 = "попрек";
// let world5 = "рубило";
// let lengthWords=world1+world2+world3+world4+world5;
// console.log(lengthWords.length);


// #### Task 6 💻

// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

//     `Variable: %variable name% have type: %type variable%`

// **************************** SOLVE ************************************

// let str='text'
// console.log(`${str}: variable 'str'  have type: ${typeof(str)}`);
// let num=15;
// console.log(`${num}: variable 'num'  have type: ${typeof(num)}`);
// let bool=true;
// console.log(`${bool}: variable 'bool'  have type: ${typeof(bool)}`);



// #### Task 7 💻

// Запросить у пользователя имя и возраст и вывести их в консоль.

// **************************** SOLVE ************************************
// let name=prompt('Введите свое имя');
// let age=prompt("Введите свой возраст");
// console.log(`Ваше имя: ${name} и возраст: ${age}`);


// ### ADVANCED level

// #### Task 1 👨‍🏫

// Поменяйте значение переменных местами не создавая дополнительной переменной:

// ```javascript
    // let a = 4;
    // let b = 3;
// **************************** SOLVE ************************************
// a=a*b;
// b=a/b;
// a=a/b;
// console.log(a);
// console.log(b);


// ```
