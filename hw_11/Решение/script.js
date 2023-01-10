// const area = document.getElementById('area');
// const button = document.getElementById('button');

// button.addEventListener('click', function() {
//     localStorage.removeItem('area');
//     area.value='';
// })

// area.value = localStorage.getItem('area');

// area.addEventListener('input', function() {
//     localStorage.setItem('area', area.value)
// })




// находим инпут и фокусируемся на нем
let input = document.getElementById('task')
input.focus()

let addButton = document.getElementById('add')
let clearButton = document.getElementById('clear')
let list = document.getElementById('list')

// если в localStorage имеются данные
if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        // получаем шаблон - элемент списка
        let template = `${localStorage.getItem(key)}`
        // помещаем задачу в список
        list.insertAdjacentHTML('afterbegin', template)
    }
}


addButton.addEventListener('click', function() {
    let text = input.value
    // формируем шаблон, запись и идентификация значений по ключам осуществляется через атрибут "data-id"
    let template = `<li data-id="${++localStorage.length}"><p>${text}</p></li>`
    // добавляем шаблон - задачу в список
    list.insertAdjacentHTML('afterbegin', template)
    // записываем данные в localStorage
    localStorage.setItem(`${++localStorage.length}`, template)
    // сбрасываем значение инпута
    input.value = ''
})


clearButton.addEventListener('click', function() {
    localStorage.clear()
    // удаляем задачи из списка
    document.querySelectorAll('li').forEach(item => list.removeChild(item))
    input.focus()
})