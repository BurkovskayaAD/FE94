console.log("task 1");
let task1 = {
    name: "Vitali",
    age: 36
};
delete task1.name;
console.log(task1);
console.log("");

console.log("task 2");
let task2 = {
    name: "Vitali",
    age: 36,
    city: "Minsk"
};
console.log("name" in task2);
console.log("country" in task2);
console.log("");

console.log("task 3");
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student){
    console.log(key);
};
for (let key in student){
    console.log(student[key]);
};
console.log("");

console.log("task 4");
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum']["red"] + " and " + colors['ru pum pu ru rum'].blue);
console.log("");


console.log("Task 5");
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
};
let zp = 0;
let people = 0;
let middleZp = function(){
    for (let key in salaries){  
        people += 1;
        zp += salaries[key];
    }
    return console.log(zp/people);
}
middleZp();
console.log("");


console.log("Task 6");
let login = prompt("enter login");
let pass = prompt("enter password");
let obj6 = {};
obj6.login = login;
obj6.password = pass;
let newlogin = prompt("enter login again");
let newpass = prompt("enter password again");
if (obj6.login === newlogin && obj6.password === newpass){
    alert("welcome");
} else {alert("bue bue")};
console.log('');

console.log("Task 7");
let score = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "for",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eigth",
    "9": "nine"
}
let convert = function(a) {
    alert("game Score " + score[a[0]] + " : " + score[a[2]]);
    console.log("game Score " + score[a[0]] + " : " + score[a[2]]);
};
convert("2:3");
console.log("");


console.log("Task 7");
let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

let compare = function(s1, s2) {
    let a = 0;
    let b = 0;
    for (let key in s1) {
        if (s1[key] != s2[key]) {
            a = 1;
        }
    }
    for (let key in s2) {
        if (s2[key] != s1[key]) {
            b = 1;
        }
    }
    if (a != 1 && b != 1){
        alert("объекты равны");
    } else {console.log("объекты не равны")}
    
};
compare(student1, student2);


