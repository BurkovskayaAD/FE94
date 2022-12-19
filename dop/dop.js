//Task #1
// let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
//  console.log(arr);
//  function stringLengthSort(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(stringLengthSort(arr));

//Task #2
// let arr = [9, 15, 10];
// function tripletMiddleIndex(arr) {
//   let middleNumber = 0;
//   if (arr[0] > arr[1] && arr[0] < arr[2]) {
//   	middleNumber = arr[0];
//   } else if (arr[0] < arr[1] && arr[0] > arr[2]) {
//   	middleNumber = arr[1];
//   	} else middleNumber = arr[2];
//     return arr.indexOf(middleNumber);
// }
// console.log(tripletMiddleIndex(arr));

//Task #3
// let n = +prompt('Введите целое число:');
// while (n % 5) {
// 	n ++;
// }
// console.log(n);

//Task #4
// let str = prompt('Введите Вашу строку:');
// let arr = str.split('');
// let arr1 = [];
// arr.forEach((item, index, array) => {
// 	if (item === item.toUpperCase()) {
//   arr1.push(index);
//   }
// });
// console.log(arr);
// console.log(arr1);
