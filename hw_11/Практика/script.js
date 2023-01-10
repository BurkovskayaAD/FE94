//запись данных в хранилище

localStorage.colorPink = 'pink';
localStorage['colorRed'] = 'red';
localStorage.setItem('colorBlue', 'deepskyblue'); //!!рекомендуется использовать этот способ

// //получение данных из хранилища

console.log(localStorage['colorRed']);
console.log(localStorage.getItem('colorBlue')); //!!рекомендуется использовать этот способ

// //перебор ключей

// способ 1
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    console.log(`${key}: ${localStorage.getItem(key)}`)
}

// способ 2
let keys = Object.keys(localStorage)
for (let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`)
}

//данные в хранилище имеют строковый формат, поэтому с записью объектов возникают некоторые 
//трудности, которые легко решаются с помощью тандема JSON.stringify() — JSON.parse():

localStorage.user = {
    name: 'Harry'
}
console.log(localStorage.user) // [object Object]

localStorage.user = JSON.stringify({
    name: 'Harry'
})
let user = JSON.parse(localStorage.user)
console.log(user.name) // Harry

// //удаление данных из хранилища

localStorage.removeItem('colorPink');
console.log(localStorage['colorPink']);

// localStorage.clear();

//пример использования

// находим форму и инпуты для ввода логина и пароля
let form = document.querySelector('form')
let login = document.querySelector('input')
let password = document.querySelector('input + input')

// если localStorage не пустой
// получаем из него необходимые данные
// и присваиваем их инпутам
if (localStorage.length != 0) {
    login.value = localStorage.login
    password.value = localStorage.password
}

// вешаем на форму обработчик события "submit"
form.addEventListener('submit', () => {
    // записываем введенные пользователем данные в localStorage
    localStorage.login = login.value
    localStorage.password = password.value
    
    // если пользователем введены hello и world в качестве логина и пароля, соответственно
    // используем древний метод для вывода сообщения "welcome" на страницу
    if (login.value == 'hello' && password.value == 'world') {
        document.write('welcome')
    }
})

// localStorage.clea