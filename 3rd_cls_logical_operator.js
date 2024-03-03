var prompt = require('prompt-sync')();
//or operator

// var name = prompt("Enter your name: ")

// if(name == "John" || "calvin" || "Paul"){
//     console.log("Welcome!", name)
// }else{
//     console.log("Sorry! you are not authorized!")
// }

//and operator
// var number = Number(prompt("Enter your number: "))
// if (number<40){
//     console.log("Your grade is F")
// }
// else if (number>=40 && number<50){
//     console.log("Your grade is E")
// }
// else if (number>=50 && number<60){
//     console.log("Your grade is D") 
// }

//not operator

// var num = Number(prompt("Enter your number: "))
// if(num!= 20){
//     console.log("It's not 20")
// }else{
//     console.log("It's 20")
// }
// var logic = true
// if(logic){
//     console.log("its true")
// }else{
//     console.log(logic)
// }

//loop

// var i = 2

// for (; i <=10; i = i + 3){
//     console.log(i);
// }

// var i = 2
// var sum = 0
// for (; i <=10; i = i + 2){
//     sum = sum + i
//      console.log(i);
//      console.log("Now the sum is: ", sum)
// } 
// console.log("The sum of the even number is: ", sum)

// for(var i = 100; i >1; i--){
//     console.log(i)
// }

//nested loop
// for(var i = 0; i <=10; i++){
//     console.log("A")
//     for(var j = 0;j <= 5;j++){
//         console.log(j)
//     }
// }

// for(var i = 1; i <=10; i++){
//     console.log("i from i", i)
//     for(var j = 1;j <= 5;j++){
//         console.log("I am from j block", i*j)
//         for(var k = 1; k<= 5; k++){
//             console.log("i am from k", k)
//         }
//     }
// }

// var num = Number(prompt("Enter a number between 1 to 10: "))

// for(; num<=100; num = num+2 ){
//     console.log(num)
// }

// 2+4+6+.......+2000
// var num1 = Number(prompt("Enter the first number of the series: "))
// var num2 = Number(prompt("Enter the last number of the series: "))
// var diff = Number(prompt("Enter the difference: "))
// var i = num1
// var sum = 0
// for (; i <=num2; i = i+diff){
//     sum = sum + i
//      console.log(i);
//      console.log("Now the sum is: ", sum)
// } 
// console.log("The sum of the series is: ", sum)
