// Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);
//////////
// Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());
//////////
// Task 3
// 3.1
const numbers1 = [5, 43, 63, 23, 90];
numbers1.splice(0, 5);
console.log(numbers1);
// 3.2
const numbers2 = [5, 43, 63, 23, 90];
numbers2.length = 0;
console.log(numbers2);
//////////
// Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);
//////////
// Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}
//////////
// Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let oneNumbers = evenNumbers.concat(oddNumbers);
console.log(oneNumbers);
console.log(oneNumbers.indexOf(8));
//////////
// Task 7
const binary = [0, 0, 0, 0]
let strBinary = binary.join("1");
console.log(strBinary);
//////////
// Task 8
function palindrom (str){
    return str == str.split('').reverse().join('');
}
console.log(palindrom('радар'));
console.log(palindrom('топот'));
console.log(palindrom('потоп'));
console.log(palindrom('роза'));
//////////
// Task 9
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let count = 0;
let averageValue = 0;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        averageValue += matrix[i][j];
        count ++;
    }
}
console.log(averageValue/count);
//////////
// Task 9
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let plusNumbers = [];
let minusNumber = [];
for(let numbers of mixedNumbers){
    if(numbers >= 0){
        plusNumbers.push(numbers);
    } else {
        minusNumber.push(numbers);
    }
}
console.log(plusNumbers);
console.log(minusNumber);