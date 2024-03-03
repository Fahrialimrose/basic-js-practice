// var car = {
//     brand: "Tesla",
//     price: 1000000,
//     country: "USA",
//     list: [2,3,4,5],
//     start: function(brand){
// return brand
//     }
// }
// console.log(car.brand)

// car.brand = "BMW"
// console.log(car.brand)
// console.log(car["country"])


// var calculator = {
//     add: function(a,b){
//         return a+b
//     },
//     subtract: function(a,b){
//         return a-b
//     },
//     multiply: function(a,b){
//         return a*b
//     },
//     divide: function(a,b){
//         return a/b
// }
// }

// var prompt = require("prompt-sync")();
// var num1 = Number(prompt("Enter the first number: "))
// var num2 = Number(prompt("Enter the second number: "))

// function processUserInput(num1,num2){
//     var sum = calculator.add(num1,num2)
//     var subtract = calculator.subtract(num1,num2)
//     var divident = calculator.divide(num1,num2)
//     var multiplied = calculator.multiply(num1,num2)
//     console.log("Sum is: ", sum, "\n", "Subtract is: ", subtract, "\n", "Divident is: ", divident, "\n", "Multiplication is: ", multiplied )
// }
// processUserInput(num1,num2)


// let person = {
//     name: "mahi",
//     age: 30,
//     greet: function(){
//         return "Hello, my name is " + this.name;
//     },
//     personAge: function(a,b){
//         var sum = a+b
//         console.log("Sum: ", sum)
//         return "Your age is " + this.age
//     }
// };
// person.name = "Fahri"
// console.log(person.greet())
// console.log(person.personAge(3,3))


// var ar1 = [[3,4],
//            [5,6]]
// var ar2 = ar1.flat()
// console.log(ar1)
// console.log(ar2)

// var numList = [2,3,4,5];
// function doublingNum1(num){
//     return num * 2;
// }
// var doubledNum = numList.map(doublingNum1);
// console.log(doubledNum);

//Assignments

var person = {
    name:"Fahri",
    age:24,
    occupation:"Student"
};
function printinfo(personObject){
        console.log("Name: ",personObject.name);
        console.log("Age: ",personObject.age);
        console.log("Occupation: ",personObject.occupation);
}
printinfo(person)
// Modify the value of a specific property (e.g., update age)
person.age = 25
console.log("After modifying a property:")
printinfo(person)
//Add a new property (e.g., hobbies).
function addNewProperty(personObject, propertyName, propertyValue) {
    personObject[propertyName]= propertyValue;
}
addNewProperty(person, "hobby", "Reading");
console.log("After adding a property:")
printinfo(person);

// var student = {
//     name: "Your Name",
//     age : 22, 
//     numbers: [89, 76, 56],
//     calculateAverage: function() {
//         var sum = 0;
//         for (var i = 0; i < this.numbers.length; i++) {
//             sum += this.numbers[i];
//         }
//         var avg = sum / this.numbers.length;
//         return avg;
//     }
// }
// console.log("Average: ", student.calculateAverage());