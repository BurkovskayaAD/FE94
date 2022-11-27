//// task 1
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e));

//// task 2
let height = 15;
let width = 20;
if(height>width){
    console.log(height);
}else console.log(width);

//// task 3
for(let i = 1; i<20; i++){
    if(i%3==0){
        console.log(i);
    }
}

//// task 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
if ( key == true && documents == true && pen == true && (apple == true || orange == true)){
    console.log("Сумка готова")
}else console.log("Соберите сумку снова!")

//// task 5
let value = +prompt("Введите число");
if(value%5 == 0 && value%3 == 0){
    console.log("FizBuz")
}else if (value%3 == 0){
    console.log("Buz")
}else if (value%5 == 0){
    console.log("Fiz")
}

//// task 6
let age = prompt("Введите возраст")
if(age <= 18){
    alert("Пей колу")
    if(age>= 16 && age<=18) alert("Можешь выкурить сигаретку, только маме не говори");   
}else alert ("Попей пивка")

//// task 7

let side = prompt("Введите сторону света: \n1. Юг \n2. Север \n3. Запад \n4. Восток")
switch(side){
    case '1': alert("на юг пойдешь счастье найдешь"); break;
    case '2': alert("на север пойдешь много денег найдешь"); break;
    case '3': alert("на запад пойдешь верного друга найдешь"); break;
    case '4': alert("на восток пойдешь разработчиком станешь"); break;
    default: alert ("Введите корректное значение");
}

//// task 8
let s = "#";
let str=''
let n=prompt('vvod')
for(let i = 1; i<=n; i++){
    str+=s;
    console.log(str)
}

//// task 9
let joke = "пОлИнА нАбЕрЕжНаЯ"
joke = joke.toLowerCase();
function capitalize(joke) {
    return joke.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
alert(`Привет, ${capitalize(joke)}!`)