// task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length-1]);

//task 3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

//task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(students.length-1, 1, 'Borya');
students.splice(0, 1, 'Andrew');
console.log(students);

//task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i<cats.length; i++){
    console.log(cats[i]);
}

//task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let array = evenNumbers.concat(oddNumbers);
console.log(array);
console.log(array.indexOf(8));

//task 7
const binary = [0, 0, 0, 0]
console.log(binary.join('1'))

//task 8
// let words = ['репер', 'топот', 'прога']
// for(value of words){
//     if(value == value.reverse()){
//         console.log(value)
//     }
// }

//task 9
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let mas_1 = [];
let mas_2 = [];
let j = 0;
let k = 0;
for(let i = 0; i < mixedNumbers.length; i++){
    if(mixedNumbers[i] >= 0){
        mas_1[k] = mixedNumbers[i];
        k++;
    }else{
        mas_2[j] = mixedNumbers[i]; 
        j++;
    }
}
for(value of mixedNumbers){
    if(value >= 0){
        mas_1.push(value)
    }else mas_2.push(value)
}
console.log(mas_1)
console.log(mas_2)

//task 10
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let matrix_sum = []
let sum = 0;
for(let i = 0; i<matrix.length; i++){
    let len = matrix[i].length;
    for(let j = 0; j< len; j++){
        sum+=matrix[i][j]/len;
    }
    matrix_sum[i] = sum;
    sum = 0;
}
for(value of matrix_sum){
    sum+=value/matrix_sum.length;
}
console.log(sum)

//task 11
let len = 5;
let arr=[];
let arr_new=[];
let i = 0;
function getRandomArray(len){
    for(let i = 0; i < len - 1; i++){
        arr[i] = Math.floor(Math.random()*100);
    }
    return  arr;
}
for(value of getRandomArray(len)){
    arr_new[i] = value ** 3;
    i++;
}
console.log(arr)
console.log(arr_new)