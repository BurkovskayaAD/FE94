function getSum (par) {
    let sum = 0;
    for(let i = 0; i <= par; i++) {
        sum+=i;
    }
    return sum;
}

console.log(getSum(100));

/////////////////////////////////////////////

function credit (sum) {
    let dif =  sum*0.17*5;
    return dif;
}

console.log(credit(1000));

//////////////////////////////////////////////

function trimString(str, from, to) {
    console.log(str.substring(from, to));
}

trimString("Hello world", 2, 8);

//////////////////////////////////////////////

function getSumNumbers(num) {
    num = String(num);
    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum = sum + +num[i];
    }

    return sum;
}

console.log(getSumNumbers(2021));

////////////////////////////////////////////////

function getSum (a, b) {
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
    } else if (a === b) {
        sum = a;
    } else {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    }

    return sum;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));

///////////////////////////////////////////////////

function fooboo (bool, fun1, fun2) {
    if (bool == true) {
        return fun1;
    } else {
        return fun2;
    }
}

function foo () {
    return "foo"
}

function boo () {
    return "boo"
}

console.log(fooboo(true, foo(), boo()));

/////////////////////////////////////////////////////////

function realTriangle (a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

console.log(realTriangle(3, 6, 5));