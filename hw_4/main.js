//////////////////////////////////////

function getSum (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(100));
console.log(' ');

//////////////////////////////////////

const calculationCredit = function (sum, period, rate){
    let monthRate;
    let topPlate;
    let bottomPlate;
    let result;
    let calcAllPeriod;

    monthRate = (rate  / 12 ) / 100;
    topPlate = + (sum * monthRate);
    bottomPlate = + (1 - (1 / Math.pow(monthRate + 1, period )));
    result = +(topPlate / bottomPlate);
    calcAllPeriod = Math.floor((result * period) - sum);

    return calcAllPeriod;
};

console.log(`Переплата по кредиту ${calculationCredit(15000, 120, 17)} руб.`);
console.log(' ');

//////////////////////////////////////

function trimString (string, from, to){
    return string.slice(from,to);
}

console.log(trimString('Hello WorldHello', 1, 10));
console.log(' ');

//////////////////////////////////////

function getSumNumbers (num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    return sum;
}
console.log(getSumNumbers(2022));
console.log(' ');

////////////////////////////////////

function getSumNumber (firstNum, secondNum){
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++){
        sum += i;
        if (firstNum == secondNum){
            console.log(firstNum, 'Since both are same')
        }
    }
    return sum;
}

console.log(getSumNumber(1,2));
console.log(' ');

////////////////////////////////////

function foo () {
    console.log('My name function foo');
}

function boo () {
    console.log('My name function boo');
}

function fooboo (bool, foo, boo) {
    if (bool == true){
        return foo ();
    } else {
        return boo ();
    }
}

fooboo(true,foo,boo);
console.log(' ');

////////////////////////////////////

function buildTriangle (sideA, sideB, sideC) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA){
        return ('Треугольник можно построить со сторонами заданной длины')
    } else {
        return ('Треугольник нельзя построить со сторонами заданной длины')
    }
}

console.log(buildTriangle(10, 10, 10));
console.log(' ');

////////////////////////////////////

function cutChocolate (firstSlc, secondSlc){
    let quantity = 0;
    if (firstSlc > 0 && secondSlc > 0){
        quantity = firstSlc - 1 + (secondSlc - 1);
        console.log(`Вы можете разделить шоколад ${quantity} раз(а)`)
        return quantity;
    } else {
        return console.log(`Надломы не требуются, у Вас нет шоколада для разделения`)
    }
}

cutChocolate(6,6);
console.log(' ');

////////////////////////////////////

const taxPurchases = 1.05;
let balanceCard = +prompt('Какую сумму отобразить на Вашем счету?');
let mobilePrice = +prompt('Введите стоимость телефона');
let accessoryPrice = +prompt('Введите стоимость аксессуаров');

let priceWithTax = (mobilePrice + accessoryPrice) * taxPurchases;
priceWithTax = +priceWithTax.toFixed(2);


if (priceWithTax > balanceCard) {
    console.log(`На вашему счету не достаточной средств для покупки. Остаток: ${balanceCard}$ Сумма покупки с налогом: ${priceWithTax}$`);
} else {

    let resultCalc = calcBuyPhoneAndAccessory(balanceCard, mobilePrice, accessoryPrice)

    console.log(`На сумму ${balanceCard}$, Вы можете купить ${resultCalc.quantityMobile} телефона с аксессуарами`);
    console.log(`Сумма налога равна: ${resultCalc.quantityTax}$ `);
    console.log(`Сумма за аксессуары равна: ${resultCalc.quantityAccessory}$ `);
    console.log(`Остаток средств: ${resultCalc.quantityBalance}$`)
}

function calcBuyPhoneAndAccessory(balanceCard, mobilePrice, accessoryPrice) {
    let count = 0;
    let remainingBalance = 0;
    let countTax = 0;
    let countAccessory = 0;
    for (let i = priceWithTax; i <= balanceCard; i += priceWithTax) {
        count = count + 1;
        remainingBalance = balanceCard - i;
        countAccessory = accessoryPrice * count;
        countTax = (priceWithTax - mobilePrice - accessoryPrice) * count;
    }
    let resultObj = {
        quantityMobile: count,
        quantityAccessory: countAccessory,
        quantityTax: countTax,
        quantityBalance: remainingBalance
    };
    return resultObj;
}







