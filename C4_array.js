
// Padma, Meghna, Jamuna

// var ar1 = ["Padma", "Meghna", "Jamuna"]
// console.log(ar1)

// var ar1 = []
// ar1[0] = "Padma"
// ar1[1] = "Karnaphuli"
// ar1[2] = "Titas"
// ar1[3] = "Ichamoti"
// // console.log(ar1)
// // console.log(ar1[1])
// ar1[4] = "Buriganga"
// // method
// console.log(ar1.length)

// // sort
// var riverlist = ["Padma", "Meghna", "Jamuna"]
// // var numlist = [3,1,4,2,6,5]
// console.log(riverlist)
// // console.log("Sorted array is: ", numlist.sort())
// var sortedRiver = riverlist.sort
// console.log("Sorted array is: ", riverlist.sort())

//looping of array

// var riverlist = ["Padma", "Meghna", "Ichamoti", "Buriganga", "Sangu", "Jamuna"]
// var len = riverlist.length
// console.log("the length of the array is: ", len)
// for(var i = 0; i < len; i ++){
//     console.log(riverlist[i])
// }
// console.log("I am outside of the loop")

//uses of loop for array elements

// var ar = [1,2,3,4,5,6]
// var ar2 = []
// console.log("i am b4 increment", ar)
// for (i=0; i <ar.length; i++){
//     ar2[i] = ar[i] + 1}
//     console.log(ar2)

//by push method

// var ar = [1,2,3,4,5,6]
// var ar2 = []
// console.log("i am before push", ar)
// for (i=0; i <ar.length; i = i+2){
//     ar2.push(ar[i])
// }
//     console.log(ar2)

// var ar = [1,2,3,4,5,6]
// console.log("i am before push", ar)
// for (i=0; i <ar.length; i = i+2){
//     ar.push(ar[i]+2)
// }
//     console.log(ar)

//     var riverlist = ["a", "b","e"]
//     console.log(riverlist)
//     riverlist.push("y")
//     console.log(riverlist)

//subtracting element

// var riverlist = ["a", "b","e", "y"]
//     console.log(riverlist)
//     riverlist.pop()
//      console.log(riverlist)
//     riverlist.pop()
//     console.log(riverlist)

// //sorting user input in array
// prompt = require("prompt-sync")();

// ar = []
// // console.log("i am b4 pushing", ar)
// for (var i = 0; i< 5; i++){
//     var a = Number(prompt("Enter "+ i + "th number: "))
//     ar.push(a)
// }
// console.log("Unsorted: ", ar)
// ar.sort();
// console.log("Sorted: ", ar)

//// sorting user input in array
// var number =[7]
// var input = require("prompt-sync")();
// for ( var i = 0; i < 4; i++){
// var userinput = Number(input("Enter a number: "))
//     if( userinput == number){
//         console.log("Congrats! it's matched in your", i+1, "th attempt")
//     }
//     else{
//         console.log("Better luck next time!")
//     }
// }

//two d array
// var twoDAr = [[1,2], 
//              [5,3], 
//              [7,4]]
// console.log(twoDAr[1][0])
// for (var i = 0; i < twoDAr.length; i++){
//     for(var j = 0; j <2;j++){
//         console.log(twoDAr[i][j])
//     }
// }

// var twoDAr = [[2, 7, 89, 6],
  
//               [90,45,3, 7],
  
//               [78,56,4, 2]]
// var oneDAr = []
// for (var i = 0; i < twoDAr.length; i++){
//         for(var j = 0; j <4;j++){
//             oneDAr.push(twoDAr[i][j]);
//         }
//     }
// console.log("The final 1D array: ", oneDAr)


// var twoDAr = [ [1, 2, 3],

//                [4, 5, 6],

//                [7, 8, 9] ]
// console.log("Original: ", twoDAr)
// for (var i = 0; i< twoDAr.length; i++){
//     for (var j = 0; j< twoDAr.length; j++){
//         twoDAr[i][j] = twoDAr[i][j]+1
//     }
// }
// console.log("Increased: ", twoDAr)

prompt = require("prompt-sync")();

result = []
for (var i = 0; i< 5; i++){
    var a = Number(prompt("Enter "+ i + "th number: "));
    if (a%2 == 0){
        result.push("Even")
 }
 else {
    result.push("Odd")
 }
}
console.log("The array: ", result)