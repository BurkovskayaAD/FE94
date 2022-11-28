console.log("task 1");
    let x = 20;
    let y = 58;
    let z = 42;
    console.log(x + y + z);

    console.log("task 2")  ;  

    let sec = 60;
    let min = 60;
    let hour = 24;
    let year = 365;
    let myAgeInSeconds = 36*sec*min*hour*year;
    console.log(myAgeInSeconds +  " sec");

    console.log("task 3")  ; 
    
    let count = 42
    let userName = '42' 

    console.log(typeof(String(count)))  ; 
    console.log(typeof("" + count))  ; 
    console.log(typeof(Number(userName)))  ; 
    console.log(typeof(+userName))  ; 

    console.log("task 4")  ; 

    let a = 1
    let b = 2
    let c = "белых медведей"
    console.log("" + a + b + " " + c);
+
    console.log("task 5")  ;
    
    let dos = "доступ"; 
    let mor = "морпех"; 
    let nal = "наледь"; 
    let pop = "попрек"; 
    let rub = "рубило"; 
    let lengthWords = (dos + mor + nal + pop + rub).length;
    console.log(lengthWords);

    console.log("task 6")  ;

    let num = 1234;
    let str = "name";
    let obj = {myName: "vitali"};
    console.log(`Variable: num have type: ${typeof(num)}`);
    console.log(`Variable: str have type: ${typeof(str)}`);
    console.log(`Variable: obj have type: ${typeof(obj)}`);

    console.log("task 7")  ;

    let yourNane = prompt("enter name");
    let yourAge = prompt("enter age");
    console.log(`${yourNane} is ${yourAge} years old`);

    console.log("task 8")  ;

    let one = 4;
    let two = 3;
    console.log(one);
    console.log(two);

    one = one*two;
    two = one/two;
    one = one/two;

    console.log(one);
    console.log(two);