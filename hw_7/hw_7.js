// NORMAL level Task 1
//Function declaration
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function getFibonacci(arr){
//    arr.forEach((item) => console.log(item));
// }
// getFibonacci(fibonacci);
//Arrow function
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// let getFibonacci = (arr) =>  arr.forEach((item) => console.log(item));
// getFibonacci(fibonacci);

// NORMAL level Task 2
//Function declaration
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// function getNewArray(arr){
//    let NewArr = arr.map((item, index) => ('member' + (index + 1) + ':' + item));
//    return NewArr;
// }
// console.log(getNewArray(users));
//Arrow function
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// let getNewArray = (arr) => NewArr = arr.map((item, index) => ('member' + (++index) + ':' + item));
// console.log(getNewArray(users));

// NORMAL level Task 3
//Function declaration
// const numbers = [7, -4, 32, -90, 54, 32, -21];
// function getPositiveArr(arr){
//    let newArray = arr.filter(item => item >= 0);
//    return newArray;
// }
// console.log(getPositiveArr(numbers));
//Arrow function
// const numbers = [7, -4, 32, -90, 54, 32, -21];
// let getPositiveArr = (arr) => newArray = arr.filter(item => item >= 0);
// console.log(getPositiveArr(numbers));

// NORMAL level Task 4
//Function declaration
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function getSummArray(arr){
// 	let Summ = arr.reduce((accumulator, item) => accumulator + item, 0);
// 	return Summ;
// }
// console.log(getSummArray(fibonacci));
//Arrow function
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// let getSummArray = (arr) => arr.reduce((accumulator, item) => accumulator + item, 0);
// console.log(getSummArray(fibonacci));

// NORMAL level Task 5
//Function declaration
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// function getEvenNumber(arr){
// 		let EvenNumber = arr.find((item) => item % 2 === 0);
// 		return EvenNumber;
// }
// console.log(getEvenNumber(numbers));
//Arrow function
// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// let getEvenNumber = (arr) => arr.find((item) => item % 2 === 0);
// console.log(getEvenNumber(numbers));

// ADVANCE level Task 1
// function Student(name, salary, rate) {
//   this.name = name,
//   this.salary = salary,
//   this.rate = rate,
//   this.summRate = () => "D|||||C||B||A".indexOf(this.rate);
//   this.summCredit = () => (this.salary * this.summRate());
// }
//  let Kirill = new Student('Kirill', 1000, "A");
//  let Vlad = new Student('Vlad', 900, "B");
//  let Vitali = new Student('Vitali', 1100, "C");
//  let Nastya = new Student('Nastya', 700, "D");
//  let Katya = new Student('Katya', 1300, "B");
//  let Artem = new Student('Artem', 800, "A");
//  let studentsFE94 = [Kirill, Vlad, Vitali, Nastya, Katya, Artem];
//  let totalSummCredit = (arr) => {
//  		let totalSumm = arr.reduce((accumulator, item) => accumulator + item.summCredit(), 0);
//     return console.log(`Возможная сумма кредитов всех студентов группы FE94 - ${totalSumm} рублей.`);
//  }
//  totalSummCredit(studentsFE94);

// ADVANCE level Task 2
// let stopTroll = (str) =>  str = str.replace(/[aeiou]/gi, '');
// console.log(stopTroll('This website is for losers LOL!'));

// ADVANCE level Task 3
// function strTransform(str) {
// 	let str1 = '';
// 	for (let i = 0; i < str.length; i++) {
// 		str1 = str1  + str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
// 	}
// 	str1 = str1.slice(0, -1);
//   return str1;
// }
// console.log(strTransform('abcd'));

// ADVANCE level Task 4
//  let isIsogram = (str) => {
//  str = str.toLowerCase();
//  for (let i = 0; i < str.length - 2; i++) {
//    if	(str.indexOf(str[i], (i + 1)) !== -1) {
//   	return false;
//   		}
//     }
//    return true;  
//  }
// console.log(isIsogram('DermatoGlyphics'));