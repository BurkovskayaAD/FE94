console.log("Task 1");
const colors = ['red', 'green', 'blue'];
console.log(colors.length);
console.log("");


console.log("Task 2");
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
console.log(animals.at(-1));
console.log("");


console.log("Task 3");
const numbers = [5, 43, 63, 23, 90];
for (let key in numbers){
    delete numbers[key];
}
console.log(numbers);
let numbers2 = [5, 43, 63, 23, 90];
numbers2.splice(0, 5);
console.log(numbers2);
console.log("");


console.log("Task 4");
const students = ['Polina', 'Dasha', 'Masha'];
delete students[2];
students[2] = "Borya";
delete students[0];
students[0] = "Andrey";
console.log(students);
let students2 = ['Polina', 'Dasha', 'Masha'];
students2.pop();
students2.push("Borya");
students2.shift();
students2.unshift('Andrey');
console.log(students2);
console.log("");


console.log("Task 5");
const cats = ['Gachito', 'Tom', 'Batman'];
console.log(cats[0], cats[1], cats[2]);
for (let i = 0; i < cats.length; i++){
    console.log(cats[i]);
};
console.log(cats.join(","));
console.log("");


console.log("Task 6");
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));
console.log("");



console.log("Task 7");
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));



console.log('');
console.log("Advansed 1");
let palindrom = (word)=>{
    if (word === word.split("").reverse().join("")){
        return "это слово полиндром";
    } else {return "это не полиндром"};
};
console.log(palindrom("abba"));
console.log(palindrom("baba"));
console.log("");


console.log("Advansed 2");
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let count = 0;
let summ = 0;
for (let i of matrix){
    for (let j of i){
        count++;
        summ += j;
    }
};
console.log(summ/count);
console.log("");

console.log("Advansed 3");
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let mixedNumbersMinus =[];
let mixedNumbersPlus = [];
for (let i of mixedNumbers){
    if (i < 0){
        mixedNumbersMinus.push(i);
    } else (mixedNumbersPlus.push(i));
};
console.log(mixedNumbersMinus);
console.log(mixedNumbersPlus);
console.log("");


console.log("Advansed 4");
let randomMatrix = [];
for (let i = 0; i < 8; i++){
    randomMatrix.push(Math.round((Math.random()*90 - 50)));
};
console.log(randomMatrix);
let newRandomMatrix = randomMatrix.map((item)=> item**3);
console.log(newRandomMatrix);






