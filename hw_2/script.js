//1
let x = 20;
let y = 58;
let z = 42;
let result = x + y + z;
console.log(result);
//2
let secondMin = 60;
let minHour = 60;
let hourDay = 24;
let dayYear = 365;
let myAge = secondMin * minHour * hourDay * dayYear;
console.log(myAge);
//3
let count = 42;
let userName = "42";
console.log(String(count));
console.log(`${count}`);
console.log(+count);
console.log(parseInt(count));
//4
let a = 1;
let b = 2;
let c = "белых медведей";
let d = `${a}` + `${b}` + " " + c;
console.log(d);
//5
let one = "доступ";
let two = "морпех";
let tree = "наледь";
let four = "попрек";
let five = "рубило";
let lengthWords = one + two + tree + four + five;
console.log(lengthWords.length);
//6
let city = "Artem";
let age = 24;
let tr = true;
console.log(`Variable ${city} have type ${typeof city}`);
console.log(`Variable ${age} have type ${typeof age}`);
console.log(`Variable ${tr} have type ${typeof tr}`);
//7
let profName = prompt("Введите Ваше имя...");
let profAge = prompt("Введите Ваш возраст...");
alert(`Вас зовут ${profName}, вам ${profAge}`);
//8
let p = 4;
let o = 3;
p = p + o;
o = p - o;
p = p - o;
console.log(p);
console.log(o);
