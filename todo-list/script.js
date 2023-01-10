let countAllDeal = 0;
let countCompletedDeal = 0;

const root = document.getElementById("root");
const container = document.createElement("div");
container.className = 'todo';
root.append(container);

const formOne = document.createElement("form");
formOne.className = 'todo-form-one'
formOne.innerHTML = '<button type="button" class="todo-form-one__button">Delete all</button><button type="button" class="todo-form-one__button">Delete last</button><input class="todo-form-one__input" type="text" placeholder="Enter todo..."><button type="button" class="todo-form-one__button">Add</button>'
container.append(formOne);
const btnDellAll = formOne.getElementsByClassName('todo-form-one__button')[0];
const btnDellLast = formOne.getElementsByClassName('todo-form-one__button')[1];
const input = formOne.getElementsByClassName('todo-form-one__input')[0];
const btnAdd = formOne.getElementsByClassName('todo-form-one__button')[2];

const countAll = document.createElement("div");
countAll.className = 'todo__counter-all';
countAll.textContent = 'All:0';
container.append(countAll);

const countCompleted = document.createElement("div");
countCompleted.className = 'todo__counter-completed';
countCompleted.textContent = 'Completed:0';
container.append(countCompleted);

const formTwo = document.createElement('form');
formTwo.className = 'todo-form-two';
formTwo.innerHTML = '<button type="button" class="todo-form-two__button">Show all</button><button type="button" class="todo-form-two__button">Show completed</button><input class="todo-form-two__search" type="text" placeholder="Search">';
container.append(formTwo);
const btnShowAll = formTwo.getElementsByClassName('todo-form-two__button')[0];
const btnShowCompleted = formTwo.getElementsByClassName('todo-form-two__button')[1];
const search = formTwo.getElementsByClassName('todo-form-two__search')[0];

btnAdd.addEventListener('click', add)
function add(){
        if (input.value === ""){return};
    countAllDeal++;
    countAll.textContent = `All:${countAllDeal}`;
    const affair = document.createElement("div");
    affair.className = ('todo-list');
    container.append(affair);
    const btnDone = document.createElement('button');
    btnDone.className = 'todo-list__done';
    affair.append(btnDone);
    const text = document.createElement('div');
    text.className = 'todo-list__content';
    text.textContent = `${input.value}`;
    affair.append(text);
    const btnDell = document.createElement('button');
    btnDell.className = 'todo-list__dell';
    affair.append(btnDell);
    const date = document.createElement("div");
    date.className = 'todo-list__date';
    date.textContent = new Date().getDate() + "." + +new Date().getMonth() +1  + "." + new Date().getFullYear();
    affair.append(date);
    input.value = '';
    
    btnDone.addEventListener('click',function(){
        btnDone.classList.toggle('todo-list__done-active');
        text.classList.toggle('todo-list__content-active');
        affair.classList.toggle('todo-list-active');
        if(btnDone.classList.contains('todo-list__done-active')){
            countCompletedDeal++;
        } else {
            countCompletedDeal--
        }
        countCompleted.innerText = `Completed:${countCompletedDeal}`
    })

    btnDell.addEventListener('click',function(){
        container.removeChild(affair);
        countAllDeal--;
        countAll.innerText = `All:${countAllDeal}`;
        if(btnDone.classList.contains('todo-list__done-active')){
            countCompletedDeal--;
            countCompleted.innerText = `Completed:${countCompletedDeal}`;
        }
    })
}

btnDellLast.addEventListener('click',function(){
    let elems = document.getElementsByClassName('todo-list')
    let elem = elems[elems.length - 1];
    container.removeChild(elem);
    countAllDeal--;
    countAll.innerText = `All:${countAllDeal}`;
    if(elem.classList.contains('todo-list-active')){
        countCompletedDeal--;
        countCompleted.innerText = `Completed:${countCompletedDeal}`;
    }
});

btnDellAll.addEventListener('click',function(){
    let elems = document.querySelectorAll('.todo-list');
    for(i = elems.length-1; i >= 0;i--){
        container.removeChild(elems[i]);
    }
    countAllDeal = 0;
    countCompletedDeal = 0;
    countAll.innerText = `All:${countAllDeal}`;
    countCompleted.innerText = `Completed:${countCompletedDeal}`;
});

btnShowCompleted.addEventListener('click',function(){
    let elems = document.querySelectorAll('.todo-list');
    for(i = elems.length-1; i >= 0;i--){
        if(!elems[i].classList.contains('todo-list-active')){
            elems[i].style.display = 'none'
        };
    }
});

btnShowAll.addEventListener('click',function(){
    let elems = document.querySelectorAll('.todo-list');
    for(i = elems.length-1; i >= 0;i--){
        if(elems[i].classList.contains('todo-list')){
            elems[i].style.display = 'flex'
        };
    }
});

search.addEventListener('input',function(){
    let elem = container.querySelectorAll(".todo-list__content");
    for (let item of elem){
        if (item.textContent.indexOf(search.value) === -1){
            item.parentNode.style.display = "none";
        } else {item.parentNode.style.display = "flex";};
    };
})
