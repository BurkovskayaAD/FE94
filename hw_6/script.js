// //Task 1
const colors = ['red', 'green', 'blue']
console.log(colors.length);

// //Task 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]);

//Task 3
const numbers = [5, 43, 63, 23, 90];
// 1 способ
delete numbers[0]; 
delete numbers[1]; 
delete numbers[2]; 
delete numbers[3]; 
delete numbers[4]; 
console.log (numbers);
// 2 способ
let numbersNew = numbers.splice(0,5);
console.log (numbers);
// 3 способ
for(let i = 0; i < numbers.lenght; i++) {
    numbers.shift();
}
console.log(numbers);

//Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
// 1 способ
console.log (cats[0]);
console.log (cats[1]);
console.log (cats[2]);
// 2 способ
for(let i = 0; i < cats.length; i++){
    console.log(cats[i])
};

//Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
console.log(students);

students.shift();
students.unshift('Andrey');
console.log(students);

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
// 1 способ
const newNumbers = [...evenNumbers, ...oddNumbers];
console.log(newNumbers);
console.log(newNumbers.indexOf(8));
// 2 способ
const newNumbers1 = evenNumbers.concat(oddNumbers);
console.log(newNumbers1);
console.log(newNumbers1.indexOf(8));
// 3 способ
const newNumbers2 = [].concat(evenNumbers, oddNumbers);
console.log(newNumbers2);
console.log(newNumbers2.indexOf(8));
// 4 способ
evenNumbers.push(...oddNumbers);
console.log(newNumbers);
console.log(newNumbers.indexOf(8));


//Task 7
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));


// //Task 1
// function palindrom (str) {
//     return str == str.split('').reverse().join('');
// }
// console.log(palindrom('9999'));
//or
function palindrom(str) {
    str = String(str);
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if(str[i] != str[j])
        return "Cтрока не является палиндром";
    }
    return "Cтрока является палиндром";
}
console.log(palindrom("9999"));


//Task 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
function getSum(matrix) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
        count++;
        sum += matrix[i][j];
        }
    }
    return sum / count;
}
console.log(getSum(matrix));

// //Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let mixedNumbers1 =[];
let mixedNumbers2=[];
for (let i=0; i<mixedNumbers.length; i++){
    if (mixedNumbers[i]>=0){
    mixedNumbers1.push(mixedNumbers[i]);
    } else {
    mixedNumbers2.push(mixedNumbers[i]);
    }
}
console.log (mixedNumbers1);
console.log (mixedNumbers2);

// //Task 4
let arr = [];
function getRandomArray(len) {
    for(let i = 0; i < len; i++) {
        arr[i] = Math.floor(Math.random()*100 - 10);
    }
return arr;
}
console.log(getRandomArray(5));

let getCube = arr.map((i) => {
    return i**3;
});
console.log(getCube);