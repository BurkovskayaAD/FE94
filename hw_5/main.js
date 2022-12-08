/////////////////////////////////////1
let obj1 ={
    key1: "key1",
    key2: "key2"
};
delete obj1.key1;
delete obj1.key2;
console.log(obj1)
///////////////////////////////////////2
let obj2 ={
    key1: "key11",
    key2: "key22"
};
console.log("key1" in obj2);
console.log("cat" in obj2);

////////////////////////////////////////3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student){
    console.log(key)
}
for(let key in student){
    console.log(student[key])
}

////////////////////////////////////////4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"]["blue"])
console.log(colors['ru pum pu ru rum'].red)

///////////////////////////////////////// 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199
}

let averageSalary = 0;
for(let key in salaries){
    averageSalary += salaries[key]/5
}
console.log(Math.round(averageSalary))

/////////////////////////////////// 6
let account ={};
let login = prompt('Введите логин');
let password = prompt('Введите пароль');
account.log=login;
account.pass=password;
let confirmLog = prompt('Подтвердите логин');
let confirmPass = prompt('Подтвердите пароль');
if(account.log == confirmLog && account.pass == confirmPass){
    alert("Добро пожаловать")
} else {
    alert('Вы неверно ввели данные')
}


/////////////////////////////////// 7

let score = {
    0: "ноль",
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять"
}

function finalScore(sc){
    return console.log(`Результат матча: ${score[sc[0]]} : ${score[sc[2]]}`)
}
finalScore("5:3")
////////////////////////////////////// 8

let student1 = {
    age: 27,
    name: 'Polina',
}

let student2 = {
    name: 'Polina',
    age: 27,
}
function compare(obj1,obj2){
    let bool = 0;
    for(let key in student1,student2){
       bool+=(student1[key]==student2[key]);
    };
    let obj1Leng= Object.getOwnPropertyNames(obj1);
    let obj2Leng= Object.getOwnPropertyNames(obj2);
    if(bool<obj1Leng.length || bool<obj2Leng.length){
        return console.log(false)
    } else {
        return console.log(true)
    }
}
compare(student1,student2)

