//TASK 1
function getSum(number) 
{
let a = 0;
for (i = 0; i <= number; i++) 
{
a = a + i
}
return a
}
console.log(getSum(30))
// TASK 2
function credit(a) 
{
let b =((a * 0.17 * 5))
return b
}
console.log(credit(1000));
// TASK 3
let trimString = function(str, a, b)
{
return str.slice(a, b)
}
console.log(trimString("aaaaaaaa", 1, 2))
// TASK 4 не работает
let getSumNumbers = function(a)
{
let sum = 0
for (let i = 0; i < String(a).length; i++)
{
sum += +String(a)[i]
}
return sum
}
console.log(getSumNumbers(2021))
  // TASK 5
function getSum(a, b)
{
    if (a==b){
    console.log(a);
    }
else {
let x = 0
for(i = a; i <= b; i++) 
{
x = x + i
}
return x
}}
console.log(getSum(1,1))
  // TASK 6
function fooboo(a, foo, boo) 
{
if (a === true) 
{
return foo
} else 
{
return boo;
}
}
console.log(fooboo(true, "foo", "boo"));