///////////////////////////////////// 1
function getSum(a){
    let sum = 0
    for(i=0;i<=a;i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(100));

/////////////////////////////////////// 2

function credit(a){
    let difference=a*5*0.17;
    return difference;
}
console.log(credit(100))

/////////////////////////////////////// 3
function trimString(str,x,y){
    return console.log(str.slice(x,y));
}
trimString("JavaScript",0,4);

//////////////////////////////////////// 4

function getSumNumbers(a){
    let sum=0;
    a = ""+a;
    for(i=0;i<a.length;i++){
        sum += +a[i];
    };
    return console.log(sum);
}
getSumNumbers(2021)

////////////////////////////// 5


function getSum2(a,b){
    if(a==b){
        return console.log(a + ' They are same')
    } else { 
        let sum=0;
        for(i=a;i<=b;i++){
            sum = sum + i;
        }
        return console.log(sum)
    }
}
getSum2(-4,-4);
getSum2(2,3);

//////////////////////////////////////// 6
let fn1 =function foo(){
    console.log('foo');
}
let fn2 =function boo(){
    console.log('boo');
}
function fooboo(boolean,fn1,fn2){
    if(boolean==true){
        return fn1();
    } else {
        return fn2();
    }
}
fooboo(false,fn1,fn2)

///////////////////////////////// 7
function triangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
 console.log("true");
  }
  else {
    console.log("false");
  }
}
triangle(5, 5, 20);

/////////////////////////////////////// 8

function сhokolate(n, m) {
    let count = 0;
    if (n > 0 && m > 0) {
        count = (m-1)*n+(n-1)
        return console.log(count)
    } else{
        return console.log("Такой шоколадки не существует")
    }
}
сhokolate(2,3);

