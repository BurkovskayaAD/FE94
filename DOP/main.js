'use strict'

const strSort = ["Telescopes", "Glasses", "Eyes", "Monocles"];
function bubbleSortStr(array){
    for(let n = 0; n < array.length; n++){
        for(let i = 0; i < array.length - 1 - n; i++){
            if(array[i] > array[i + 1]){
                const buff = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buff;
            }
        }
    }
    return array;
}

console.log(bubbleSortStr(strSort));

////////////////

const gimme = [2, 3, 1];
function getGimme(arr){
    const temp = arr.slice();
    for(let n = 0; n < temp.length; n++){
        for(let i = 0; i < temp.length - 1 - n; i++){
            if(temp[i] > temp[i + 1]){
                const buff = temp[i];
                temp[i] = temp[i + 1];
                temp[i + 1] = buff;
            }
        }
    }

    let index = temp[1];
    let res = arr.indexOf(index)
    return res
}

console.log(getGimme(gimme))

/////////////////

function multiple(num){
    return Math.ceil(num / 5) * 5
}

console.log(multiple(12))


////////////

const str = 'CodEWaRs';
function upperCase(word){
    let split = word.split('')
    let result = []
    split.forEach(item => {
        if(/[A-ZА-Я]/g.test(item)){
            result.push(split.indexOf(item))
        }
    })
    return result
}
console.log(upperCase(str))

//////////////////

