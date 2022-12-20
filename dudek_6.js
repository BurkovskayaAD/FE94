// Task 1
const colors = ['red', 'green', 'blue']
console.log(colors.length)
// Task 2
const animals = ['monkey', 'dog', 'cat']
let a = animals.pop()
console.log(a)
// Task 3
const numbers = [5, 43, 63, 23, 90]
newArr = numbers.slice(0,0)
console.log(newArr)
const numbers = [5, 43, 63, 23, 90]
newArr = numbers.splice(0,0)
console.log(newArr)
// Task 4
const students = ['Polina', 'Dasha', 'Masha']
let a = students.pop()+students.shift()+students.push('Borya')+students.unshift('Andrey')
console.log(students)
// Task 5
const cats = ['Gachito', 'Tom', 'Batman']
console.log(cats)
// Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const arr=evenNumbers.concat(oddNumbers)
console.log(arr)
console.log(arr.indexOf(8))
//Task 7 
const binary = [0, 0, 0, 0]
let str = binary.join("1")
console.log(str)