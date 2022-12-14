console.log("Task 1");
let stringSort = function(arr){
    let newArr = arr.sort((a, b)=> a.length - b.length)
    return newArr;
}

console.log(stringSort(["Telescopes", "Glasses", "Eyes", "Monocles"]));

console.log("");
console.log("Task 2");
let triplex = function(arr){ 
    let arrNew = arr.concat();
    if( arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]){
        arrNew.sort((a, b) => a - b);
        return arr.indexOf(arrNew[1]);
    }
}
console.log(triplex([11, 15, 13]))

console.log("");
console.log("Task 3");
let five = function(num){
    return Math.ceil(num/5)*5;
}

console.log(five(11))




console.log("");
console.log("Task 4");
let wordReg = function(word){
    let arr = [];
    for (let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            arr.push(i);
        }
    }
    return arr;
}
console.log(wordReg('CodEWaRs'))