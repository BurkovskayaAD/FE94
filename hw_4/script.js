//1
function getSum(number) {
  let count = 0;
  for (i = 0; i <= number; i++) {
    count = count + i;
  }
  return count;
}
console.log(getSum(100));
//2
function credit(sumcredit) {
  let p =
    (sumcredit * ((0.17 / 12) * (1 + 0.17 / 12) ** 60)) /
    ((1 + 0.17 / 12) ** 60 - 1);
  return p * 60 - sumcredit;
}
console.log(credit(5000));
//3
function string(str, one, two) {
  return str.slice(one, two);
}
console.log(string("qwertyuiopasdfghjkl", 2, 6));
//4 не работает
function getSumNumbers(numFour) {
  let n = 0;
  for (i = 0; i <= String(numFour).length; i++) {
    n = n + +String(numFour)[i];
  }
  return n;
}
console.log(getSumNumbers(2021));
//5
function getSum(a, b) {
  let x = 0;
  for (i = a; i <= b; i++) {
    x = x + i;
  }
  return x;
}
console.log(getSum(-1, 2));
//6
function fooboo(bull, foo, boo) {
  if (bull === true) {
    return foo;
  } else {
    return boo;
  }
}
console.log(fooboo(true, "Artem", "No Artem"));
//7
function triangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(triangle(2, 3, 4));
//8
function ck(a, b) {
  let raz = a * b - 1;
  if (raz >= 0) {
    return raz;
  } else {
    return 0;
  }
}
console.log(ck(2, -3));
