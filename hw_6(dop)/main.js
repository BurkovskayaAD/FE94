//////////////////////////////////////

const unsortedArr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
const sortedArr = [...unsortedArr];

function sortArr(arr) {
    arr.sort((a, b) =>{
       return  a.length - b.length
    });
    return arr;
}

console.log(unsortedArr);
console.log(sortArr(sortedArr));
console.log('');

//////////////////////////////////////

const someTriplet = [3, 1, 2];
function getTriplet(arr){
    const checkNumber = arr.slice();
    for(let k = 0; k < checkNumber.length; k++){
        for(let i = 0; i < checkNumber.length - 1 - k; i++){
            if(checkNumber[i] > checkNumber[i + 1]){
                const newItem = checkNumber[i];
                checkNumber[i] = checkNumber[i + 1];
                checkNumber[i + 1] = newItem;
            }
        }
    }

    let newIndex = checkNumber[1];
    let resultIndex = arr.indexOf(newIndex)
    return resultIndex;
}

console.log(getTriplet(someTriplet));
console.log('');

//////////////////////////////////////

function roundToMultiple (num, multiple){
    return Math.ceil(num / multiple) * multiple;
}

console.log(roundToMultiple(3, 5));
console.log('');


//////////////////////////////////////

function getMeYouString(word) {
    const indexArr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            indexArr.push(i);
        }
    }
    return indexArr;
}

console.log(getMeYouString('CodEWaRs'));


//////////////////////////////////////


