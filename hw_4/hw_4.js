/////////// Task 1

let num = +prompt('Введите число');

function getSum(a){
    let sum = 0;
    for(let i = 0; i <= a; i++){
        sum += i
    }
    return sum
}
console.log(getSum(num))

// //////////// Task 2

let sumNum = +prompt('Введите сумму крудита');

function credit(a){
    let tallage = 0.17;
    let sum = a * tallage
    let result = sum * 5

    return result
}

console.log(credit(sumNum))

// //////////Task 3

let str = prompt('Ввеите строку')
let numFirst = +prompt('Введите число от');
let numLast = +prompt('Введите число до');

function trimString(a, b, c){
    return a.slice(b, c)
}

console.log(trimString(str, numFirst, numLast))

// /////////Task 4

let numbers = prompt('Введите число');

function getSumNumbers(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += Number(a[i]);
    }
    return sum
}
console.log(getSumNumbers(numbers));

// ///////////Task 5

let numOne = +prompt('Введите число');
let numTwo = +prompt('Введите число');

function getSum(a, b){
    let result = 0;
    if(a == b){
        return `${a} Since both are same`
    } else {
        for(let i = a; i <= b; i++){
            console.log(`${result} + ${i}`)
            result += i
        }
    } 
    return result
}

console.log(getSum(numOne, numTwo))

// ///////////Task 6

function fooboo(bool, foo, boo){
    if(bool){
        console.log(foo())
    } else{
        console.log(boo())
    }
}
function foo(){
    return 'foo'
}
function boo(){
    return 'boo'
}

fooboo(true, foo, boo)

// ///////////ADVANCED level Task 1

let triangleOne = +prompt('Введите число');
let triangleTwo = +prompt('Введите число');
let triangleThree = +prompt('Введите число');

function triangle(a, b, c) {
    if(a < b + c && b < a + c && c < a + b){
        return true
    } else {
        return false
    }
}

console.log(triangle(triangleOne, triangleTwo, triangleThree))

// ///////////ADVANCED level Task 2

let chocolateOne = +prompt('Введите число');
let chocolateTwo = +prompt('Введите число');

function chocolate(a, b){
    let sum = a * b - 1

    if(sum < 1 || typeof(a) !== 'number' || typeof(b) !== 'number'){
        return 0
    } else{
        return sum
    }
}

console.log(chocolate(chocolateOne, chocolateTwo))

// ///////////ADVANCED level Task 3

