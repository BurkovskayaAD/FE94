// NORMAL level Task 1
let userNumber = +prompt('Введите число:');
function getSum (userNumber) {
	let totalSum = 0;
	for (let i = 0; i <= userNumber; i++) {
  totalSum += i;
	}
  	return totalSum; 
}
 console.log(getSum(userNumber));

 // NORMAL level Task 2
let sumOfCredit = +prompt('Введите требуемую сумму кредита в рублях:');
function repaymentSum (sumOfCredit) {
  let overSum = sumOfCredit * 0.17 * 5;
  overSum = +overSum.toFixed(2);
    return overSum; 
}
 console.log(`Сумма переплаты по кредиту в размере ${sumOfCredit} составит ${repaymentSum (sumOfCredit)} рублей за 5 лет.`);

 // NORMAL level Task 3
  let userString = prompt('Введите любую строку:');
 let startOfTrim = +prompt('Введите начало диапазона:');
 let endOfTrim = +prompt('Введите конец диапазона:');
 function trimString (userString, startOfTrim, endOfTrim) {
 	 let subString = userString.slice(startOfTrim, endOfTrim);
   return subString;
 }
 console.log(trimString (userString, startOfTrim, endOfTrim));

// NORMAL level Task 4
let userNumber4 = prompt('Введите число:');
function getSumNumbers(userNumber4) {
	let userSum = 0;
	for (let i = 0; i < userNumber4.length; i++) {
  userSum += Number(userNumber4[i]);
  }
  return userSum;
}
console.log(getSumNumbers(userNumber4));

// NORMAL level Task 5
let startNumber = +prompt('Введите число 1:');
let endNumber = +prompt('Введите число 2:');
//Проверка если startNumber > endNumber
if (startNumber > endNumber) {
	startNumber += endNumber;
	endNumber = startNumber - endNumber;
	startNumber -=  endNumber;
}
function getSum(startNumber, endNumber){
 let sumBetween = 0;

 for (let i = startNumber; i <= endNumber; i++) {
  sumBetween += i;
 }
 return sumBetween;
}
console.log(getSum(startNumber, endNumber));

// NORMAL level Task 6
let userBoolean = prompt('Введите значение true/false:');
function foo() {
  	return console.log('foo'); 
}
function boo() {
  	return console.log('boo'); 
}
function fooboo(userBoolean, foo, boo) {
	if (userBoolean == 'true') foo()
  else boo()
}
fooboo(userBoolean, foo, boo);

// ADVANCE level Task 1
let aSide = +prompt('Введите значение стороны треугольника a:');
let bSide = +prompt('Введите значение стороны треугольника b:');
let cSide = +prompt('Введите значение стороны треугольника c:');
function trueTriangle(aSide, bSide, cSide) {
	let triangle;
	if (((aSide + bSide) > cSide) && ((bSide + cSide) > aSide) &&
  	 ((cSide + aSide) > bSide)) {
     	triangle = true;
     } else triangle = false;
     return triangle;
}
console.log(trueTriangle(aSide, bSide, cSide));

// ADVANCE level Task 2
let nStick = +prompt('Введите размер плитки шоколада n:');
let mStick = +prompt('Введите размер плитки шоколада m:');
function breakChocolate(nStick, mStick) {
	let minBreakNumber = (nStick * mStick) - 1;
	return minBreakNumber;
}
console.log(breakChocolate(nStick, mStick));


// ADVANCE level Task 3
const taxAmount = 1.2;
let readyToBuy = prompt('Добрый день! Желаете сделать покупку?:', 'да/нет');
if (readyToBuy == 'да') {
  let accountBalance = +prompt('Введите баланс Вашего счета:');
  let currentBalance = accountBalance;
   while (currentBalance >= 0) {
   if (currentBalance == 0) {
   	alert('Баланс Вашего счета составляет 0 рублей!');
    break;
   }
    let phonePrice = +prompt('Введите стоимость телефона:');
    let accessoriesPrice = +prompt('Введите стоимость аксессуаров:');
    let totalBuySumm = (phonePrice + accessoriesPrice) * taxAmount;
    totalBuySumm = +totalBuySumm.toFixed(2);
    let buyConfirmation = prompt(`Сумма Вашей покупки c учетом налога 20% составит  ${totalBuySumm} рублей, хотите купить?:`,'да/нет');
    if ((buyConfirmation == 'да') && (totalBuySumm <= currentBalance)) {
    	currentBalance = currentBalance - totalBuySumm;
      currentBalance = +currentBalance.toFixed(2);
      alert('Поздравляем с покупкой!');
    } else alert(`Недостаточно средств на счете для оплаты данного заказа!!! Баланс Вашего счета составляет ${currentBalance} рублей.`);
    let readyToBuyAgain = prompt(`Баланс Вашего счета составляет ${currentBalance} рублей.Желаете сделать другую покупку?:`,'да/нет');
            if (readyToBuyAgain !== 'да') {
				   break;  
    } else if (readyToBuyAgain == 'да') {
      phonePrice = 0;
      accessoriesPrice = 0;
      totalBuySumm = 0;
      buyConfirmation = ''
      readyToBuyAgain = '';
   	}
  }
	alert('Спасибо, что посетили наш интернет-магазин! Ждем Вас снова!');
}
