/////////////////////// 1
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

////////////////////// 2

let height = 15;
let width = 20;
if (width>height){
    console.log(`Наибольшее значение ${width}`);
} else if (height>width){
    console.log(`Наибольшее значение ${height}`)
}
////////////////////////////////////////// 3

for(i=1;i<20;i++){
    if(i%3==0){
        console.log(i);
    }
}

//////////////////////////////////////////// 4


let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen  && (apple || orange);
console.log(shouldGoToWork);

///////////////////////////////////////////////// 5
 
let x = +prompt("Введите число");
if(x%3==0 && x%5==0){
    alert('FizBuz');
} else if(x%5==0){
    alert('Buz');
} else if(x%3==0){
    alert('Fiz');
} else {
    alert('Попробуйте снова');
}

///////////////////////////////////////////////// 6

let age = +prompt('Введте ваш возраст')
if(age>18){
    alert("Попей пивка и выкури сигаретку")
} else if (age<18 && age>16){
    alert("Попей колы и выкури сигаретку")
} else if (age<16){
    alert('Попей колы')
}

//////////////////////////////////////// 7
let way = prompt('В какую сторону пойдете?')
switch (way){
    case 'юг': alert('на юг пойдешь счастье найдешь'); 
    break;
    case 'север': alert('на север пойдешь много денег найдешь'); 
    break;
    case 'запад': alert('на запад пойдешь верного друга найдешь'); 
    break;
    case 'восток': alert('на восток пойдешь разработчиком станешь'); 
    break;
    default: alert('Попробуйте ввести еще раз'); 
}

//////////////////////////////////////////////// 8
let name = prompt("Введите ваше имя и фамилию");
name=name.toLowerCase();
let u ='';
for(i=0;i<name.length;i++){
    if (name[i - 1] === " " || i === 0) {
        u += name[i].toUpperCase();
        } else {
        u += name[i];
        }
};
alert(`Привет, ${u}!`);



////////////////////////////// 9

let stairs = '';
for(i=0;i<=6;i++){
    stairs += '#';
    console.log(stairs)
}
