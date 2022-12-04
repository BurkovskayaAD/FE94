//task 1
let a = "true";
let b = false;
let c = 17;
let d = undefined;
let f = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof f);

// task 2
let width=20;
let height=15;
if (width>height){
    console.log(`Наибольшее значение ${width}`);
}

//task 3
for(let i=1; i<=20; i++){
    if(i%3==0){
        console.log(i);
    }
}

//task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen  && (apple || orange);
console.log(shouldGoToWork);


//task 5
let j = +prompt ("Введите число");
if (j%3==0 && j%5==0){
    alert('FizBuz');
}else if(j%3==0) {
    alert('Buz');
}else if (j%5==0){
    alert('Fiz');
}else{
    alert('Попробуйте ввести другое число');
}

//task 6
let age = +prompt ('Введите возраст');
if (age>18){
    alert('Попей пивка');
}else {
    alert('Пей колу');
}if (age>=16 && age<=18 ){
    alert('Можешь выкурить сигаретку, только маме не говори');
}

//task 7
let sideWorld = prompt ('В какую сторону света хотели бы отправиться?');
switch (sideWorld){
    case 'юг': alert('на юг пойдешь счастье найдешь'); 
    break;
    case 'север': alert('на север пойдешь много денег найдешь'); 
    break;
    case 'запад': alert('на запад пойдешь верного друга найдешь'); 
    break;
    case 'восток': alert('на восток пойдешь разработчиком станешь'); 
    break;
    default: alert('Ошибка! Попробуйте ввести еще раз'); 
    break;
}

//ADVANCED level
//task 2
let r = '';
for (let i=1; i<=6; i++){
    for (let k=0; k<i; k++) {
        r += '# ';
    }
    r += '\n';
}
console.log (r);

//task 1
let str = 'пОлИнА нАбЕрЕжНаЯ';
res = '';
for (let i = 0; i < str.length; i++) {
    c=str[i];
    if (i == 0) {
        res += c.toUpperCase();
    } else if (i == 7) {
        res += c.toUpperCase();
    }else{
        res += c.toLowerCase();
    }
}
alert( `Привет, ${res}!`);
