// Task 1
let x = 20;
let y = 58;
let z = 42;
console.log (x+y+z);
//////////
// Task 2
let s = 60;
let m = 60;
let h = 24;
let d = 365;
let myAgeInSeconds = (27*d*h*m*s);
console.log (myAgeInSeconds);
//////////
// Task 3
let count = 42;
let userName = '42';
console.log(typeof(count));
count = String(count);
console.log(typeof(count));
count = "" +count;
console.log(typeof(count));
console.log(typeof(userName));
userName = +userName;
console.log(typeof(userName));
userName = Number(userName);
console.log(typeof(userName));
//////////
// Task 4
let a = 1;
let b = 2;
let c = " белых медведей";
a = String(a);
console.log(a+b+c);
//////////
// Task 5
let e = 'доступ';
let f = 'морпех';
let g = 'наледь';
let i = 'попрек';
let j = 'рубило';
let lengthWords = (e+f+g+i+j);
console.log(lengthWords.length);
//////////
// Task 6
let n = 'Pavel';
console.log(`Variable: %${n}% have type: %${typeof(n)}%`);
let l = 27;
console.log(`Variable: %${l}% have type: %${typeof(l)}%`);
let k = undefined;
console.log(`Variable: %${k}% have type: %${typeof(k)}%`);
//////////
// Task 7
let p = prompt('Введите имя');
let q = prompt('Введите возраст');
console.log(p);
console.log(q);
//////////
// Task 8
let w = 4;
let r = 3;
[w, r] = [r, w];
console.log(w, r);