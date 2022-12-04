console.log("task 1");
let getSum = function(a){
    let b = 0;
    for (let i = 0; i <= a; i++){
        b += i;
    }
    return b;
}
console.log(getSum(100));
console.log("");

console.log("task 2");
let per = function name(sum) {
    let paymongth = sum*(0.17/12*(1 + 0.17/12)**(12*5))/((1 + 0.17/12)**(12*5) - 1);
    return paymongth*12*5 - sum;
}
console.log(per(100))
console.log("");

console.log("task 3");
let trimString = function(str, o, d){
    return str.slice(o, d);
}
console.log(trimString("jfjfddoodjfjfidoeidjdjfjjdjdkidkid", 5, 9));
console.log("");


console.log("");
console.log("task 4");
let getSumNumbers = function(numb){
    let summ = 0;
    for (let i = 0; i < String(numb).length; i++){
        summ += +String(numb)[i];
    }
    return summ;
};
console.log(getSumNumbers(2023));

console.log("");
console.log("task 5");
let getSum2 = function(a, c){
    let sum = 0;
    for ( let i = a; i <= c; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum2(-1, 2));

console.log("");
console.log("task 6");
let fooboo = function (a, foo, boo) {
    if (a === true){
        return foo;
    } else {
        return boo;
    }
}
console.log(fooboo(false, "foo", "boo"));

console.log("");
console.log("task 7");
let trufal = function(a, b, c){
    if (a + b > c && b + c > a && a + c > b){
        return true;
    } else {
        return false;
    }
}
console.log(trufal( 5, 5, 5));

console.log("");
console.log("task 8");
let chocolate = function(a, b){
    let razlom = a*b - 1;
    return (razlom >= 1) ? razlom : 0; 
}
console.log(chocolate(2, 1));

console.log("");
console.log("task 9");
let saldo = prompt("введите баланс ващего счета в $");
let endTask = function(){
    let phone = prompt("сколько стоит телефон который вы хотите купить в $?");
    let kiset = 10;
    let glass = 5;
    let charger = 15;
    let nalog = 0.2;
    let toKiset = prompt("хотите чехол? (yes/no)");
    let toGlass = prompt("может быть защитное стекло? (yes/no)");
    let toCharger = prompt("как насчет беспроводной зарядки? (yes/no)");
    if (toKiset === "yes"){
        phone = +phone + +kiset;
    };
    if (toGlass === "yes"){
        phone += +glass;
    };
    if (toCharger === "yes"){
        phone += +charger;
    };
    phone = (Math.round((phone*(1 + +nalog))*100))/100;
    alert(`цена вашего телефона с учетом аксессуаров и налогов составила ${phone}$`);
    if (saldo >= phone){
        alert("поздравлякм с покупкой");
        saldo -= phone;
        alert(`остаток вашего счета ${saldo}$`);
        endTask();
    } else {
        alert("извините, у вас недостаточно средств.");
    }
};
endTask();

