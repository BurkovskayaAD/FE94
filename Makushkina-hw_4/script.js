/* 1 задание */
function getSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(10));

/* 2 задание */
function credit(s) {
  return (s / 100) * 17 * 5;
}
console.log(credit(20000));

/* 3 задание */
function trimString(stringg, from, to) {
  return (trimString = stringg.substring(from, to));
}
console.log(trimString("Katya Makushkina", 2, 10));

/* 4 задание */
function getSumNumbers(x) {
  x = String(x)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  return x;
}

console.log(getSumNumbers(45454));

/* 5 задание */
function getSum(a, b) {
  let c = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      c = c + i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      c = c + i;
    }
  }
  return c;
}

console.log(getSum(-1, 0));

/* 6  задание  */

function fooboo(a, foo, boo) {
  if (a === true) {
    return foo;
  } else {
    return boo;
  }
}
console.log(fooboo(true, "foo", "boo"));

/* 7 задание */
function triangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return console.log("This triangle exists!");
  } else {
    return console.log("This triangle doesnt exist!");
  }
}

triangle(10, 50, 50);

/* 8 задание */
let a = prompt("Enter chocolates width here:");
let b = prompt("Ener chocolates height here:");
function choco() {
  let nothing = 0;
  let result;
  if (a > 0 && b > 0) {
    result = a - 1 + --b * a;
    return result;
  } else {
    return nothing;
  }
}
console.log(choco());

/* 9 задание, и опять я не совсем поняла точную суть задачи, как все должно на практике выглядеть и куда и зачем вставлять циклы */

alert(
  "Привет! Мы поможем тебе купить телефоны и аксессуары к нему. Мы сами посчитаем, хватит ли у тебя денег на балансе на все, что ты захочешь купить!"
);
let phonesamout = prompt(
  "Мы продаем телефоны PineApple 15 в максимальной комплектации. Цена одного телефона - 1500 рублей. Сколько телефонов ты хотел бы приобрести? Учти, что тебе наверняка понадобятся аксессуары, плюс оплата налога (10%  от стоимости каждого телефона)."
);
let accesotiries = prompt(
  "Отлично! Теперь остались аксессуары. Мы продаем лучшие оригинальные карбоновые чехлы, цена - 25 рублей за единицу. Сколько чехлов ты хотел бы приобрести?"
);
let accout = prompt(
  "Мы посчитали, сколько будет стоить твой заказ. Введи пожалуйста баланс своего счета, и мы подскажем, хватит ли тебе денег! Возможно, останутся лишние и ты сможешь докупить телефоны или аксессуары."
);
let enough = "Ты вписался в свой баланс до копейки!";
let noutenought =
  "К сожалению, денег на покупку не хватает. Тебе не хватает " +
  (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25 - accout) +
  " рублей!";
let buymore =
  "У тебя хватило денег на покупки, еще осталось " +
  (accout - (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25)) +
  " на счете! Сможешь купить еще чехлы, а вот на еще один телефон уже не хватит.";
let buymorephone =
  "У тебя хватило денег на покупки, еще и осталась кругленькая сумма " +
  (accout - (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25)) +
  "! Можешь потратить ее на телефон!";
function shop() {
  if (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25 == accout) {
    return enough;
  }

  if (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25 > accout) {
    return noutenought;
  }

  if (
    accout - (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25) <
      1500 &&
    accout - (phonesamout * 1500 + phonesamout * 150 + accesotiries * 25) >= 25
  ) {
    return buymore;
  }

  if (
    phonesamout * 1500 + phonesamout * 150 + accesotiries * 25 <
    accout - phonesamout * 1500
  ) {
    return buymorephone;
  }
}

console.log(shop());
