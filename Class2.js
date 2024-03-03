
// 2nd class pre

var prompt = require('prompt-sync')();

// var name = prompt("enter your name:")
// var age = prompt("age: ")
// console.log("hello",name,"Welcome" , "\n"+ "your age is: ",age)

// 2nd class 
// conditional statement
// var prompt = require('prompt-sync')();
// var num1 = prompt("enter first number: ");
// var num2 = prompt("enter second number: ");
// var sum = Number(num1) + Number(num2)
// console.log("the sum of two numbers is: ", sum)

// var num = prompt("enter first number: ");
// var remainder = num % 2
// console.log("the result of divide of two number is: ", remainder)

//increment operator

// var a = 9
// var a = num1++
// console.log(a)
// console.log(num1)
// var num2 = num1
// num2--
// console.log(num2)

//conditional

// var a = 20
// var b = a>18
// console.log(b)
// if(b){
// console.log("hi! I am from conditional statement")

// }

// console.log("hi! i am from outside of conditional statements")


// var name = prompt("enter your name: ")

// if (name == "fahrial"){
//     console.log("Welcome " + name)
// }
// else if (name == "imrose"){
//     console.log("Welcome " + name)
// }
// else{
//     console.log("you are not fahrial. please contact with her")
// }

// var num = Number(prompt("enter a number: "));

// if (num%2 == 0){
//     num++
//     console.log("It's an even number. after increasing 1 its now: ", num)
// }
// else if (num%2 == 1) {
//console.log("Its an odd number")
// }

// assignment

// 

// var item1 = Number(prompt("Enter first item: "))
// var item2 = Number(prompt("Enter second item: "))
// var item3 = Number(prompt("Enter third item: "))
// var sum = item1 + item2 + item3

// if(sum>50){
//     discountedCost = sum - (sum * 0.10)
//     console.log("The final cost after discount is: ")
// }
// else (sum>100){
//     discountedCost = sum - (sum * 0.20)
//     console.log("The final cost after discount is: ")
// }


var math = Number(prompt("Enter the math score: "))
var english = Number(prompt("Enter the english score: "))
var science = Number(prompt("Enter the science score: "))
var avg = (math + english + science)/3
console.log("Final average score: ")

if(avg>60){
    console.log("Your grade is A")
}
else if(avg<60){
    console.log("Your grade is F")
}
