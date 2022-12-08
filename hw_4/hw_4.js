// 1
function getSum(number) {
  let count = 0;
  for (i = 0; i <= number; i++) {
    count += i;
  }
  return count;
}
console.log(getSum(100));

// 2

function sumCredit(a) {
  let b = a * 5 * 0.17;
  b = Math.round(b);
  return b;
}
console.log(sumCredit(500));

// 3
function trimString(str, a, b) {
  return str.slice(a, b);
}
console.log(trimString("Hello World", -6, 11));

// 4
function getSumNumbers(number) {
  let figures = "" + number;
  let sum = 0;

  for (let i = 0; i < figures.length; i++) {
    sum += +figures[i];
  }
  return sum;
}

console.log(getSumNumbers(2121));

// 5

let getSum1 = function (a, d) {
  let sum = 0;
  for (let i = a; i <= d; i++) {
    sum += i;
  }
  return sum;
};
console.log(getSum1(1, 2));

// 6

function fooboo(foob, foo, boo) {
  if (foob === true) {
    return foo;
  } else {
    return boo;
  }
}
console.log(fooboo(false, "foo", "boo"));
