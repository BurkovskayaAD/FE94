//// task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);

//// task 2
let sec = 60;
let min = 60;
let hour = 24;
let days = 365;
let myAgeInSeconds = 22 * days * hour * min * sec;
console.log(myAgeInSeconds);

//// task 3
let count = 42;
let userName = '42';
let count_str = String(count);
let count_str2 = '' + count;
let userName_int = +userName;
let userName_int2 = Number(userName);

//// task 4
let a = 1
let b = 2
let c = "белых медведей"
console.log(`${a}${b} ${c}`)

//// task 5
let str1 = "доступ "
let str2 = "морпех"
let str3 = "наледь"
let str4 = "попрек"
let str5 = "рубило"
let lengthWords = str1.length + str2.length + str3.length + str4.length + str5.length;

//// task 6
let int = 3;
let str = "three";
let bool = true;
console.log(`Variable: int have type: ${typeof(int)}`)
console.log(`Variable: str have type: ${typeof(str)}`)
console.log(`Variable: bool have type: ${typeof(bool)}`)

//// task 7
let name = prompt("Введите имя");
let age = prompt("Введите возраст");
console.log(`Имя: ${name} Возраст: ${age}`)

//// task 8
let m = 4;
let k = 3;
m = m + k;
k = m - k;
m = m - k;