console.log("Task 1");
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function(item){console.log(item)});
fibonacci.forEach(item => console.log(item));

console.log("");
console.log("Task 2");
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
let users1 = users.map(function(item, index, arr){return `member ${index + 1}: ${item}`});
console.log(users1);
let users2 = users.map((item, index) => `member ${index + 1}: ${item}`);
console.log(users2);


console.log("");
console.log("Task 3");
const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbers1 = numbers.filter(function(item){return item >= 0});
console.log(numbers1);
let numbers2 = numbers.filter(item => item >= 0);
console.log(numbers2);


console.log("");
console.log("Task 4");
const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
let fibonacci1 = fibonaci.reduce(function(acum, item){return acum + item});
console.log(fibonacci1);
let fibonacci2 = fibonaci.reduce((acum, item) => acum + item);
console.log(fibonacci2);

console.log("");
console.log("Task 5");
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(number.find(function(item){return item %2 ? false : true }));
console.log(number.find(item => item % 2 === 0));


console.log("");
console.log("Advanced 1");
function Student(name, salary, rate) {
    this.name = name,
    this.salary = salary,
    this.rate = rate,
    this.summRate = () =>{
        if (this.rate === "A"){
            return 12;
        }
        if (this.rate === "B"){
            return 9;
        }
        if (this.rate === "C"){
            return 6;
        }
        if (this.rate === "D"){
            return 0;
        }
    },
    this.credit = function(){
        console.log(`Mаксимальная сумма кредита для ${this.name}: ` + this.salary*this.summRate());
    }
}

let Alex = new Student("Alex", 1200, "A");
let Vlad = new Student("Vlad", 0, "D");
let Kiril = new Student("Kiril", 1500, "A");
let Vitaliy = new Student("Vitali", 300, "C");
let Artem = new Student("Artem", 1800, "A");
let Nastya = new Student("Nastya", 1000, "B");
Alex.credit();
Vlad.credit();
Kiril.credit();
Vitaliy.credit();
Artem.credit();
Nastya.credit();

let students = [Alex, Vlad,Kiril, Vitaliy, Artem, Nastya];
let summCredit = (arr) => {
    let allPeple = arr.reduce((acum, item) => acum + item.salary*item.summRate(), 0);
    return (`Сумма возможных кредитов для всех сотрудников равна: ${allPeple}`);
}
console.log(summCredit(students));



console.log("");
console.log("Advanced 2");
let trolli = (str) => str.replace(/e|E|U|u|I|i|O|o|A|a/g, "");
console.log(trolli("This website is for losers LOL!"));


console.log("");
console.log("Advanced 3");
const accum = str => str.toUpperCase().split('').map((item, index) => item = item + item.toLowerCase().repeat(index)).join("-");
console.log(accum("RqaEzty"));



console.log("");
console.log("Advanced 4");
let isIsogram = (str) => {
    for (let i =0; i < str.length;  i++){
        if (str.toUpperCase().indexOf(str.toUpperCase()[i]) !== str.toUpperCase().lastIndexOf(str.toUpperCase()[i])){
            return "false";
        }
    }
    return "true";
};
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram(""));
console.log(isIsogram("moOse"));

console.log("");
console.log("Task 4-2");
let isIsogram2 = (str) => str.length == new Set(str.toUpperCase()).size;
console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2(""));
console.log(isIsogram2("moOse"));

console.log("");
console.log("Task 4-3");
let isIsogram3 = (str) => str.length === str.toUpperCase().split("").filter((item, index, arr) => arr.indexOf(item)=== index);
console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram2(""));
console.log(isIsogram2("moOse"));
