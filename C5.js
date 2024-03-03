// function
// function greet(){
//     console.log("Hello! welcome")
// }
// greet()

// var grt1 = greet
// grt1()

//passing parameters

// function greet(name){
//     console.log("Hello! welcome", name)
// }

// greet("john")
// greet ("paul")
// greet ("mahi")

// var prompt = require("prompt-sync")();

// var num1 = Number(prompt("Enter the first number: "))
// var num2 = Number(prompt("Enter the second number: "))

// function add(num1, num2){
//     var a = num1
//     var b = num2
//     var c = a + b
//     return c
// }

// var addition = add(num1,num2)
// var add2 = add(7,8)
// console.log("The addition of two numbers is: ", addition)

//default parameters

// function greet(name="Guest"){
//     console.log("Welcome", name)
// }

// greet("John")

//local/global scope

// var num1 = 8
// var number2 = 9 

// function multiply(a, b){
// var num1 = a
// var num2 = b 
// return num1*num2 * number2

// }

// console.log(multiply(4,8))
// console.log("global scope", num1,number2)

//method chaining
// function add (a,b){
//     return a+b
// }

// function subtract (a,b){
//     return a-b
// }

// function multiply(a,b){
//     return a*b
// }
// function calculate(num1, num2){

//     var adval = add (num1, num2)
//     var subval = subtract(num1,num2)
//     var multiplyval = multiply(num1, num2)

//     console.log("the add value is: ", adval)
//     console.log("the subtract value is: ", subval)
//     console.log("the multiply value is: ", multiplyval)

// }
// calculate(4,6)

//callback function
var numb = [1,2,3]
var sqnumb = numb.map(function(num){
    return num*num
})
console.log("The original array: ", numb)
console.log("The squared array: ", sqnumb)