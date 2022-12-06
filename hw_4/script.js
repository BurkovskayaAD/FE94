//task 1
let a = +prompt("Введите конечное число:");
let sum = 0;
function getSum(a){
    for(let i = 0; i <= a; i++){
        sum+=i;
    }
    return sum;
}
alert(`Сумма чисел: ${getSum(a)}`);

//task 2
let credit = +prompt("Введите сумму кредита");
function creditka(credit){
    const percent = 17;
    const year = 5;
    let sum = 0;
    sum = credit * percent / 100 * 5;
    return sum;
}
alert(`Сумма переплаты равна: ${creditka(credit)}`);

//task 3
let str = prompt("Введите строку:");
let start = prompt("Введите значение от:");
let end = prompt("Введите значение по:");
function trimString(str, start, end){
    return str.slice(start, end);
}
trimString(str, start, end);

//task 4
let num = prompt("Введите число:");
function getSumNumbers(num){
    let sum = 0;
    for(let i = 0; i<num.length; i++){
        sum += Number(num[i]);
    }
    return sum;
}
alert(`Сумма цифр равна : ${getSumNumbers(num)}`);

//task 5
let a;
let b;
function getSum(a,b){
    let sum = 0;
    if(a == b) return a;
    else {
        for(let i = a; i <= b; i++){
            sum+=i;
        }
        return sum;
    }
}
console.log(getSum(1,1))

//task 6
let bool;
function foo(){
    console.log("foo")
}
function boo(){
    console.log("boo")
}
function fooboo(bool, foo, boo){
    if(bool ==true) return foo();
    else return boo();
}
fooboo(true, foo, boo)

//task 7
function triangle(a, b, c){
    if(a + b > c || a + c > b || b + c > a){
        return "Треугольник построится"
    }else return "Треугольник отменяется"
}
triangle(2,3,7)

//task 8
let n = +prompt("Введите квадратики:"),
    m = +prompt("Введите полосочки:");
function choco(n, m){
    if(n > 0 && m > 0){
        if (n == m == 1){
            return alert("Один квадратик не ломаем!");
        }else return alert(`Ломаем шоколадку ${n * m - 1} раз`);
    }else return alert("Шоколада нет")
}
choco(n,m)

//task 9 не смотреть))))))
const bank_account = +prompt("Введите баланс вашего счета!")
const nds = 20;
let sum = 0;
function summa(){
    let price;
    let phone = prompt("Выберите телефон: \n1. Iphone 11 64gb \n2. Iphone 11 128gb \n3. Iphone 12 Pro Max 254gb \n4. Iphone 13 Pro 256gb");
    let phone_cost;
    switch(phone){
        case '1': return phone_cost = 600; break;
        case '2': return phone_cost = 800; break;
        case '3': return phone_cost = 1500; break;
        case '4': return phone_cost = 1200; break;
    }
    let accessories = prompt("Выберите аксессуары: \n1. AirPods Pro \n2. AirPods 2.0 \n3. Адаптер \n4. Безпроводная зарядка");
    let accessories_cost;
    switch(accessories){
        case '1': return accessories_cost = 300; break;
        case '2': return accessories_cost = 200; break;
        case '3': return accessories_cost = 50; break;
        case '4': return accessories_cost = 450; break;
    }
    price = phone_cost+accessories_cost;
    return price;
}
function NDS(summa){
    tax = summa() * nds / 100;
    return tax;
}
function oplata(bank_account, summa, NDS){
    if(bank_account > 0){
        for(let i = summa(); i < bank_account; i+=summa()){
            summa();
            NDS(summa);
            bank_account = bank_account - price - tax;
            console.log(bank_account)
        }
        return("fsjdsnjn")
    }
}