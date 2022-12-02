// NORMAL level Task 1
let x = 'true';
let y = false;
let z = 17;
let w = undefined;
let v = null;
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
console.log(typeof(w));
console.log(typeof(v));

// NORMAL level Task 2
let height = 15;
let width = 20;
if (height > width) {
  console.log(`Largest number is height ${height}`);
} else if (height<width) {
  console.log(`Largest number is width ${width}`);
} else {
  console.log(`The numbers height and width are equal`);
}

// NORMAL level Task 3
let endOfRange = 20;
for (let i = 0; i <= endOfRange; i++) {
  if (i%3 == 0) {
  console.log(i);
	}
}

// NORMAL level Task 4
let key = true;
let documents = true;
let pen = true;
let apple = true;
let orange = false;
let shouldGoToWork = '';
if (key && documents && pen && (apple || orange)) {
  shouldGoToWork = 'You can go to work))!';
} else if (!(key && documents && pen)) {
  shouldGoToWork = 'You forgot to take something. Check the pen, documents and key!';
}
if (!(apple || orange)) {
  shouldGoToWork += ' You forgot to take food!';
}
console.log(shouldGoToWork);

// NORMAL level Task 5
let userNumber = +prompt('Enter the number:');
if ((userNumber % 5 == 0) && (userNumber % 3 == 0)) {
  console.log(`FizBuz`);
} else if (userNumber % 3 == 0) {
  console.log(`Buz`);
} else if (userNumber % 5 == 0) {
  console.log(`Fiz`);
}

// NORMAL level Task 6
let userAge = +prompt('Enter your age:');
if (userAge > 18) {
  console.log(`Попей пивка`);}
if (userAge < 18) {
  console.log(`Пей колу`);}
if ((userAge >= 16) && (userAge <= 18)) {
  console.log(`Можешь выкурить сигаретку, только маме не говори`);}

  // NORMAL level Task 7
  let userDirection = prompt('Введите сторону света:');
  let userMessage;
  switch(userDirection) {
  case 'юг': 
  userMessage = 'На юг пойдешь счастье найдешь';
   break;
	case 'север': 
   userMessage = 'На север пойдешь много денег найдешь';
   break; 
	case 'запад': 
   userMessage = 'На запад пойдешь верного друга найдешь';
   break;  
	case 'восток': 
   userMessage = 'На запад пойдешь разработчиком станешь';
   break; 
	default:
	 userMessage = 'Неверные данные - попробуйте еще раз';
   break; 
}
console.log(userMessage);

// ADVANCE level Task 1
let userNameUncorrect = 'пОлИнА нАбЕрЕжНаЯ';
let userNameCorrect = "";
userNameCorrect += userNameUncorrect[0].toUpperCase();
for (let i = 1; i < userNameUncorrect.length; i++) {
	if (userNameUncorrect[i-1] == ' ') {
    userNameCorrect += userNameUncorrect[i].toUpperCase();}
    else userNameCorrect += userNameUncorrect[i].toLowerCase();
} 
alert (`Привет, ${userNameCorrect}!`)

// ADVANCE level Task 2
let stairsString = '';
for (let i = 0; i <= 5; i++) {
	console.log(stairsString += "#");
}