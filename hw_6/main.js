//////////////////////////////////////

const colors = ['red', 'green', 'blue'];

console.log(`Длинна массива равна: ${colors.length}`);
console.log('')

//////////////////////////////////////

const animals = ['monkey', 'dog', 'cat'];
const lastElem = animals[animals.length - 1];
console.log(lastElem);

console.log('');

//////////////////////////////////////

const numbersOne = [5, 43, 63, 23, 90];
const numbersTwo = [5, 43, 63, 23, 90];
numbersOne.length = 0;
console.log(numbersOne);

numbersTwo.splice(0, numbersTwo.length);
console.log(numbersTwo)

console.log('');

//////////////////////////////////////

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

console.log('');

//////////////////////////////////////

const cats = ['Gachito', 'Tom', 'Batman'];

cats.forEach((elem) =>{
    console.log(elem);
});

console.log('');

for (let i of cats){
    console.log(i);
}

console.log('');

//////////////////////////////////////

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const oddEvenNumbers = oddNumbers.concat(evenNumbers);

console.log(oddEvenNumbers);
console.log(oddEvenNumbers.indexOf(8));

console.log('');

//////////////////////////////////////


const binary = [0, 0, 0, 0];
const binarySrt = binary.join('1')
console.log(binarySrt);

console.log('');

//////////////////////////////////////

function checkPalindrome(userStr) {
    userStr = userStr.toLowerCase().replace(/\s/g, '');

    if (userStr === userStr.split('').reverse().join('')) {
        return console.log('Ваша строка палиндром!')
    }
    return console.log('Ваша строка не палиндром')
}

checkPalindrome('У лип Лёша нашёл пилу');
console.log('');

//////////////////////////////////////

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

const transformArray = matrix.join(',').split(',');

let averageValueArr = 0;
transformArray.forEach((elem, index,array)=>{
    averageValueArr += elem / array.length
});

console.log(`Cреднее значение чисел в массиве: ${averageValueArr}`);
console.log('');

//////////////////////////////////////

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const negativeArr = [];
const positiveArr = [];

mixedNumbers.forEach((elem)=>{
    if (elem >= 0){
        positiveArr.push(elem)
    }
    else {
        negativeArr.push(elem)
    }
})

positiveArr.sort((a, b) => {
    return a-b
});

negativeArr.sort((a, b) => {
    return b-a
});

console.log(mixedNumbers);
console.log(positiveArr);
console.log(negativeArr);
console.log('');

//////////////////////////////////////

const randomArray = [];
const cubingArray = [];

for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 50));
}
console.log(randomArray)

randomArray.forEach((elem)=>{
   cubingArray.push(elem **3);
});

console.log(cubingArray);

//////////////////////////////////////








