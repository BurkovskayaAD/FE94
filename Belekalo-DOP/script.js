// Task 1
let str = ["Telescopes", "Glasses", "Eyes", "Monocles"];
let newStr = str.sort((a,b) => {
    return  a.length - b.length
})
console.log(newStr);


//Task 3
function getCeilNumber(num){
    if (num < 0 && num > -5){
        number = Math.ceil(num/5) * (-5);
    } else {
        number = Math.ceil(num/5) * 5;
    }
    return number
} 

console.log(getCeilNumber(-10))


//Task 4
function getIndex(word){
    let array = []
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
        array.push(i)
        }
    }
        return array
    }  

console.log(getIndex('CodEWaRs'))


// Task 2
let gimme = [5, 10, 14];
function getIndexTriplex(arr){
    let newArr = arr.slice();
    if( arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]){
        newArr.sort((a, b) => a - b);
        return arr.indexOf(newArr[1]);
    }
}
console.log(getIndexTriplex(gimme));
