//// TASK 1
let a = 'true'
let b = false
let c = 17
let d = undefined
let e = null
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e))
//// TASK 2
let height = 15
let width = 20
if(height>width)
{
console.log(height)
}
else console.log(width)
//// TASK  3
let i = 1
for(i; i<20; i++)
{
    if(i%3==0)
    {
        console.log(i);
    }
}
//// TASK  4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork)
//// TASK  5
let a = +prompt("Введите число")
if(a%5 == 0 && a%3 == 0)
{
    console.log("FizBuz")

}else if (a%3 == 0)
{
    console.log("Buz")
}
else if (value%5 == 0
    ){
    console.log("Fiz")
}
//// TASK  6
let a = prompt(`Введитt Ваш возраст`)
if (a >= 16 && a <= 18)
{
console.log("Пей колу, можешь выкурить сигаретку, только маме не говори")
} 
else if (a < 16) 
{
console.log("Пей колу")

} else if (a >= 18) 
{
console.log("Попей пивка")
}
//// TASK 7
let a = prompt(`Куда путь держим?`)
switch (a) 
{
case "юг":
    console.log("на юг пойдешь счастье найдешь")
    break;
case "север":
    console.log("на север пойдешь много денег найдешь")
    break;
case "запад":
    console.log("на запад пойдешь верного друга найдешь")
    break
case "восток":
    aconsole.log("на восток пойдешь разработчиком станешь")
    break;
default:
    console.log("попробуйте еще раз")
}

