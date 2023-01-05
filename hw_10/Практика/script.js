const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    console.log("I`m click");
})






// let selectedDel;

const main = document.getElementById('main');
console.log(main);

main.addEventListener('click', function(event) {
  let target = event.target; // где был клик?
  console.log(target);  
  highlight(target); // подсветить del
});

function highlight(del) {
  // if (selectedDel) { // убрать существующую подсветку, если есть
  //   selectedDel.classList.remove('highlight');
  // }
  // selectedDel = del;
  del.classList.add('highlight'); // подсветить новый td
}




// document.addEventListener('keydown', function(event) {
//   alert("Попался!");
//   alert(event.type);
//   alert(event.currentTarget);
//   // alert(event.target);
// })



document.getElementById('my-checkbox').addEventListener(
  'click', function(event) {
    event.preventDefault();
  }
);




let arr = [];
let button = document.getElementById("add");
console.log(arr)
let arrInHtml = document.getElementById('arr');

button.addEventListener('click', function(event) {
  let input = document.getElementById('add-input').value;
  arr.push(input);
  event.preventDefault();
  console.log(arr)
  arrInHtml.innerHTML = arr;
})

