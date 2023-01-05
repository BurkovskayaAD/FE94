// Task 1
let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
function sorting(arr){
    let newArr = arr.sort((a, b) => a.length - b.length);
    return newArr;
}
console.log(sorting(arr));
//////////
// Task 2
let gimme = [2, 3, 1];
function index(arr){
    let newArr = arr.slice();
    if( arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]){
        newArr.sort((a, b) => a - b);
        return arr.indexOf(newArr[1]);
    }
}
console.log(index(gimme));
//////////
// Task 3
function integer(number){
    return Math.ceil(number / 5) * 5
}
console.log(integer(12));
//////////
// Task 4
function capitalLetter(word){
    let array = [];
    for (let i = 0; i < word.length; i++){
        if(word[i] == word[i].toUpperCase()){
            array.push(i);
        }
    }
    return array;
}
console.log(capitalLetter('CodEWaRs'));