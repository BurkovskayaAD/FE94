console.log("task 1");
    let a1 = 'true';
    let a2 = false;
    let a3 = 17;
    let a4 = undefined;
    let a5 = null;
    console.log(typeof(a1));
    console.log(typeof(a2));
    console.log(typeof(a3));
    console.log(typeof(a4));
    console.log(typeof(a5));
    console.log(" ");


    console.log("task 2")  ;  

    let height = 15;
    let width = 20;
    console.log(Math.max(height, width));
    if  ( height > width){
        console.log(height)
    } else {console.log(width)};
    
    console.log(" ");
    console.log("task 3")  ; 
    for (let i = 1; i < 20; i++) {
        if (i%3 === 0){
            console.log(i);
        }
    }
     
    
    console.log(" ");
    console.log("task 4")  ; 

    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;
    if((key && documents && pen) && (apple || orange)){
        console.log("OK");
    } else {console.log("not OK")}

    console.log(" ");
    console.log("task 5")  ;
    let numb = prompt("enter number");
    if(numb%3 === 0 && numb%5 === 0) {
        console.log("FizBuz");
    } else if (numb%5 === 0){
        console.log("Fiz");
    } else if (numb%3 === 0) {
        console.log("Buz");
    }

    console.log(" ");
    console.log("task 6")  ;

    let age = prompt("enter age");
    if (age >= 18){
        console.log("drink beer");
    } else {console.log("drink cola")};
    if (age <= 18 && age >= 16){
        console.log("Можешь выкурить сигаретку, только маме не говори");
    }

    console.log(" ");
    console.log("task 7")  ;

    let cardinal = prompt("в какую сторону света вы бы хотели отправиться");
    switch (cardinal){
        case "юг":
            console.log("на юг пойдешь счастье найдешь");
            break;
        case "север":
            console.log(" на север пойдешь много денег найдешь");
            break;
        case "запад":
            console.log("на запад пойдешь верного друга найдешь");
            break;
        case "восток":
            console.log("на восток пойдешь разработчиком станешь");
            break;
        default:
            console.log("попробуйте еще раз");
    }


    console.log(" ");
    console.log("task 8");
    let myName = 'пОлИнА нАбЕрЕжНаЯ';
    myName = myName.toLowerCase();
    let HiName = "";
    for (let j = 0; j < myName.length; j++) {
        if (j === 0 ||  myName[j - 1] === " ") {
            HiName += myName[j].toUpperCase();
        } else {
            HiName += myName[j];
        }
    }
    alert(`Привет, ${HiName}`);

    console.log(" ");
    console.log("task 9");
    let cristmas = prompt("enter height of three");
    let three = 1;
    let heightThree = "#";
    while (three <= cristmas){
        ++three;
        console.log(heightThree);
        heightThree += "#";

    };