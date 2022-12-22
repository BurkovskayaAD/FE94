// Task 1 
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// 1
fibonacci.forEach((el)=>console.log(el));
// 2
let a=()=>{fibonacci.forEach((el)=>console.log(el))}
a()

// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// 1
let arr=users.map((el, index)=>`member ${index+1}:${el}`);
console.log(arr);
// 2 
let arr=()=>users.map((el, index)=>`member ${index+1}:${el}`);
console.log(arr());

// Task 3 
const numbers = [7, -4, 32, -90, 54, 32, -21]
// 1 
let plus=numbers.filter((el)=>el>0)
console.log(plus);
//2 
let plus=()=>numbers.filter((el)=>el>0)
console.log(plus())

// Task 4 
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,];
// 1
const sum=fibonacci.reduce((accum, sum, index, array)=>accum +=sum)
console.log(sum)
// 2 
const sum=()=>fibonacci.reduce((a, el)=> a +=el)
console.log(sum())

// Task 5 
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// 1
let first = numbers.find((el) => el % 2 == 0);
console.log(first)
// 2 
let first = () => numbers.find((el) => el % 2 === 0);
console.log(first())
