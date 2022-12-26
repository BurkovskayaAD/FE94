//1
let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
console.log(
  arr.sort(function (a, b) {
    return a.length - b.length;
  })
);
//2
let arrTwo = [7, 1, 4];
let arrTwoNew = function () {
  let arrTwoN = arrTwo.concat();
  arrTwoN.sort(function (a, b) {
    return a - b;
  });
  return arrTwo.indexOf(arrTwoN[1]);
};
console.log(arrTwoNew(arrTwo));
//3
let tree = function (a) {
  return Math.ceil(a / 5) * 5;
};
console.log(tree(21));
//4
let four = function (text) {
  let arrFour = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      arrFour.push(i);
    }
  }
  return arrFour;
};
console.log(four("CodEWaRs"));
