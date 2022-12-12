// Task 1
function getSum (a) {
    let sum = 0;
    for (let i = 0; i <= a; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(100));
//////////
// Task 2
function credit (sum) {
    let percent = 0.17;
    let oneYear = sum * percent;
    let overpayment = oneYear * 5;
    return overpayment
}
console.log(credit(1000));
//////////
// Task 3
function trimString (string, valueFrom, valueTo) {
    return string.slice(valueFrom, valueTo);
}
console.log(trimString('hello', 1, 4));
//////////
// Task 4
function getSumNumbers (number) {
    let b = 0;
    let str = String(number);
    for(i = 0; i < str.length; i++){
        b += Number(str[i]);
    }
    return b;
}
console.log(getSumNumbers(27));
//////////
// Task 5
function getSum (a, b) {
    let c = 0;
    for(i = a; i<= b; i++) {
        c += i;
        if(a == b) {
            console.log(a)
        }
    }
    return c;
}
console.log(getSum(0, 2));
//////////
// Task 6
function fooboo (bool, foo, boo){
    if(bool == true){
        console.log(foo());
    } else {
        console.log(boo());
    }
}
function foo(){
    return 'foo'
}
function boo(){
    return 'boo'
}
fooboo(false, foo, boo)
//////////
// Task 7
function triangle(a, b, c) {
    if(a < b+c && b < a+c && c < a+b){
        return true;
    } else {
        return false;
    }
}
console.log(triangle(10,15,20));