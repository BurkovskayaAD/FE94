const btnAlert = document.getElementById('btn-alert');

btnAlert.addEventListener('click', function() {
  alert('Ага, попался!')
});

////////////////////////

const btnReplace = document.getElementById('btn-replace');

btnReplace.addEventListener('click', function() {
  btnReplace.innerText = "button";
});

///////////////////////

const btnClone = document.getElementById('btn-clone');
const inputClone = document.getElementById('input-clone');

btnClone.addEventListener('click', function() {
  let clone = inputClone.cloneNode(true);
  inputClone.after(clone);
});

/////////////////////////

const btnEnable = document.getElementById('btn-enable');
const btnDisable = document.getElementById('btn-disable');
const textareaDisabl = document.getElementById('textarea-disabl');

btnDisable.addEventListener('click', function(event) {
  textareaDisabl.setAttribute("disabled", "disabled");
  event.preventDefault();
});
btnEnable.addEventListener('click', function(event) {
  textareaDisabl.removeAttribute("disabled", "disabled");
  event.preventDefault();
});

///////////////////////

const areaSquare = document.getElementById('square');
const output = document.getElementById('output');

areaSquare.addEventListener('mousemove', function(event) {
  output.innerText = `X: ${event.clientX}; Y: ${event.clientY};`
})

///////////////////////

const onlyNum = document.getElementById('only-num');

onlyNum.addEventListener('input', function(){
  let regex = /\D/g;
  this.value = this.value.replace(regex, '');
})

///////////////////////

const openClose = document.getElementById('open-close');

openClose.addEventListener('dblclick', function() {
  this.style.backgroundImage = "url(./open.png)"
})

/////////////////////////

const delegirovanie = document.getElementById('delegirovanie');

delegirovanie.addEventListener('click', function(event) {
  alert(event.target.tagName);
})

///////////////////////

const closeImg = document.getElementById('close-img');

closeImg.addEventListener('mouseover', function() {
  closeImg.setAttribute("src", "./open.png");
})

closeImg.addEventListener('mouseout', function() {
  closeImg.setAttribute("src", "./close.png");
})

///////////////////////////

let menu = document.getElementById('menu');
let list = document.getElementById('list');

menu.addEventListener('click', function() {
  list.classList.toggle('open');
})