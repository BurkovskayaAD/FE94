/* Первое задание, первый вариант решения */
let x = 20;
let y = 58;
let z = 42;
let v = x + y + z;
console.log(v);
/* Первое задание, второй вариант решения */
let e = 20;
let t = 58;
let c = 42;
console.log(e + t + c);

/* Второе задание*/
let s = 60;
let m = 60;
let h = 24;
let d = 365;
let myAgeInSeconds = s * m * h * d * 24;
console.log(myAgeInSeconds);

/* Третье задание*/
let count = 42;
let userName = "42";
count = String(count);
userName = Number(userName);

/* Четвертое задание*/
let a = 1;
let b = 2;
let l = "белых медведей";
let result =
  String(a) + String(b) + l.replace("белых медведей", " белых медведей");
console.log(result);

/* Пятое задание*/
let first = "доступ";
let second = "морпех";
let third = "наледь";
let forth = "попрек";
let fifth = "рубило";
let lengthWords =
  first.length + second.length + third.length + forth.length + fifth.length;
console.log(lengthWords);

/* Шестое задание*/
let Katya = "name";
let young = 24;
let happiness = true;
console.log("Variable: " + "Katya" + " have type: " + typeof Katya);
console.log("Variable: " + "young" + " have type: " + typeof young);
console.log("Variable: " + "happiness" + " have type: " + typeof happiness);

/* Седьмое задание*/
let yourname = prompt("Enter your name:");
let yourage = prompt("Enter your age:");
console.log("Your name is " + yourname + " ," + " your age is " + yourage);

/* Восьмое задание */
let q = 4;
let r = 3;
r = [q, (q = r)][0];
console.log(q, r);
