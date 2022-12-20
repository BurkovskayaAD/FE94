let arr1 = ["Telescopes", "Glasses", "Eyes", "Monocles","aaaaaaaaaaaaaaaaaaaaaaaa"];
function one(arr){
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < arr.length - 1 - j; i++){
            if(arr[i].length> arr[i + 1].length){
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
    return console.log(arr);
}
one(arr1)


////////////////////////////////////////////////////////////



function middleIndex(arr){
    let arrNew = arr.slice();
    if( arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]){
        arrNew.sort((a, b) => a - b);
        return arr.indexOf(arrNew[1]);
    }
}
let arr2 = [2,6,3];
console.log(middleIndex(arr2));


/////////////////////////////////////////////////////////////
function five(a){
    return Math.ceil(a/5)*5;
}
console.log(five(21));



//////////////////////////////////////////////////////////////

function word(a){
    let arr = [];
    for (let i = 0; i < a.length; i++){
        if(a[i] === a[i].toUpperCase()){
            arr.push(i);
        }
    }
    return arr;
}
console.log(word('CodEWaRs'))