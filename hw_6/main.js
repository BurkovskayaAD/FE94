//////////////////////////// 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//////////////////////////// 2
console.log("");
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());


/////////////////////////////////3
console.log("");
let numbers = [5, 43, 63, 23, 90];
numbers.splice(0, 5);
console.log(numbers);


numbers = [5, 43, 63, 23, 90];
for(i=0;i<=5;i++){
    numbers.pop();
}
console.log(numbers);

numbers = [5, 43, 63, 23, 90];
numbers.length=0;
console.log(numbers);

//////////////////////////////////4
console.log("");
const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

///////////////////////////////////5
console.log("");
const cats = ['Gachito', 'Tom', 'Batman'];
for(let cat of cats){
    console.log(cat);
}
////////////////////////////////////6
console.log("");
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let q = evenNumbers.concat(oddNumbers);
console.log(q);
console.log(q.indexOf(8));

////////////////////////////////////7
console.log("");
const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

///////////////////////////////////////8
console.log("");
function palindrome(str) {
    return str.split('').reverse().join('') == str;
}
console.log(palindrome('шалаш'));
console.log(palindrome('рыба'));
console.log(palindrome('мем'));

//////////////////////////////////////////////9
console.log("");
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let sum = 0;
let count =0;
for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        sum += matrix[i][j];
        count++
    }
}
console.log(sum/count);
////////////////////////////////////////////10
console.log("");
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let negative = [];
let positive = [];
for(let number of mixedNumbers){
    if(number>=0){
        positive.push(number);
    } else {
        negative.push(number)
    }
}
console.log(negative);
console.log(positive);

///////////////////////////////////////////////11
console.log("");

function getRandomArray(len){
    let x = [];
    for(let i=0;i<len;i++){
        x[i]=Math.round(Math.random()*100)
    }
    return x;
};

let arr = getRandomArray(5);

function arrCube(arr){
    let x = [];
    for(let number of arr){
        x.push(number**3);
    }
    return x;
}

let arrCub = arrCube(arr);

console.log(arr);
console.log(arrCub); 