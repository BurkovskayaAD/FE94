//Task 1
let sum=0;
function getSum (num){
    for (j=0; j<=num; j++) {
        sum+=j;
    }
    return sum;
}
console.log(getSum ());
//console.log(getSum (100));


//Task 2
let resOverpayment=0;
let n = 5;
let i = 17;
function overpayment (sumСredit){
resOverpayment=(n*12*sumСredit*(i/100/12*(Math.pow(1+i/100/12,n*12))/((Math.pow(1+i/100/12,n*12))-1)))-sumСredit;
return (`Переплата по кредиту: ${resOverpayment.toFixed(2)}`);
}
console.log(overpayment ());
// console.log (overpayment (2000));

//Task 3
function trimString (str, valueFrom, valueBy){
return str.substr(valueFrom, valueBy);
}
//console.log(trimString ());
console.log(trimString ('Функция – это определённый тип объектов, которые можно вызывать', 9, 30));

//Task 4 
let sum1 = 0;
function getSum1 (l){
    l = String(l);
    for (let k = 0; k < l.length; k++) {
    sum1 += Number(l[k]);
    }
    return sum1;
}
console.log(getSum1 ());
// console.log(getSum1 (2021));

// or через Math.floor
// let sum1 = 0;
// function getSum1 (value){
// while (value) {
//     sum1 += value % 10;
//     value = Math.floor(value / 10);
// }
// return sum1;
// }
// console.log(getSum1 ());
// console.log(getSum1 (2021));

//or
// let sum1 = 0;
// function getSum1 (value){
// while (value) {
//     let digit = value % 10;
//     sum1 += digit; 
//     value = (value - digit) / 10;
// }
// return sum1;
// }
//console.log(getSum1 ());
// //console.log(getSum1 (2021));

//Task 5
// sum1=0;
// sum2=0;
// function getSum (a,b){
//     if (a<b && Number.isInteger(a) && Number.isInteger(b)){
//         for(let i=a; i<=b; i++){
//         sum1+=i;
//         }
//         return sum1;}
//     else if (a==b && Number.isInteger(a) && Number.isInteger(b)){
//         return a;
//     }
//     else if (a>b && Number.isInteger(a) && Number.isInteger(b)) {
//         for(let i=a; i>=b; i--){
//         sum2+=i;
//         }
//         return sum2;}
//     else {
//         return ('Введите целое число');
//     }
// }
// console.log (getSum ());
// //console.log (getSum (1, 2));
// //console.log (getSum (1, 1));
// //console.log (getSum (1.2, 1));

// //Task 6
function fooboo (bool, foo, boo) {
    if (!!bool==true) {
    foo();
    } else {
    boo();
    }
    function foo () {
    console.log ('foo');
    }
    function boo () {
    console.log ('boo');
    }
}
fooboo ();


// //Task 1
function sum3 (a,b,c){
    if ((a+b>c) && (a+c>b) && (b+c>a)  && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a>0 && b>0 && c>0 ){
        return ('true');
    } else {
        return ('false'); 
    }
}
console.log(sum3 ());
// console.log(sum3 (4,3,3));
// console.log(sum3 (2,7,2));

// // Task 2
function chocolate (n,m) {
    if (n==0 || m==0 || n == 1 && m == 1){
    return 0;
    } else if (Number.isInteger(n)&& n>0 && Number.isInteger(m)&& m>0) {
    return (n-1)+n*(m-1);
    } else {
        return "Введите целые положительные числа";
    }
}
console.log (chocolate ());
//console.log (chocolate (3,1));

// Task 3
const taxRate = 0.2;
const pricePhone = 300;
const priceAccessories = 10;
let userBalance = prompt("Какой баланс вашего банковского счета ($)?");
let sumPurchases = 0;
function calculationTax (sumPurchases){
    return sumPurchases * taxRate;
}
function sumPurchasesInUsb (sumPurchases){
    return sumPurchases.toFixed(2) + '$';
}
for (; sumPurchases<userBalance ; ){
        sumPurchases += pricePhone + priceAccessories;
}
sumPurchases+=calculationTax (sumPurchases);
sumPurchases=sumPurchasesInUsb (sumPurchases);
console.log (`Полная стоимость покупки: ${sumPurchases}`);
if (sumPurchases > userBalance) {
    console.log("К сожалению, Вы не можете позволить себе покупку.");
} else { console.log("Вы можете позволить себе покупку." )
    }