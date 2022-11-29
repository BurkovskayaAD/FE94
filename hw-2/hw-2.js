let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);
////////////
let secondsInMinutes = 60;
let minutesInHours = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAge = 22 * daysInYear * hoursInDay * minutesInHours * secondsInMinutes;
console.log(myAge);
/////////////
let count = 42;
let userName = '42';

let qwer = ""+count;
console.log(typeof(qwer));
let wert = String(count);
console.log(typeof(wert));

let erty = +userName;
console.log(typeof(erty));
let rtyu = Number(userName);
console.log(typeof(rtyu));
//////////////
let a = 1;
let b = 2;
let c = " белых медведей";
console.log(""+ a +b +c);
///////////////
let as = "доступ";
let sd = "морпех";
let df = "наледь";
let fg = "попрек";
let gh = "рубило";
let lenghtWords = as.length +sd.length +df.length +fg.length +gh.length;
console.log(lenghtWords);
/////////////////
let typeOne = 1;
let typeTwo = "two";
let typeThree = true;
console.log('Variable: typeOne have type: ' + typeof(typeOne));
console.log('Variable: typeTwo have type: ' + typeof(typeTwo));
console.log('Variable: typeThree have type: ' + typeof(typeThree));
/////////////////
let name = prompt ("Введите ваше имя");
let age = prompt ("Введите ваш возраст");
console.log(name + " " +age);
////////////////