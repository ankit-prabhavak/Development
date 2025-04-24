function Greet(){
    console.log("To Kaise hain Aap Log!!")
}
Greet();

function Hello(name){
    console.log("My name is ",name,". I love JavaScript!");
}
Hello("Ankit");


function summer(a, b){
    return a+b;
}

let answer = summer(4, 5);
console.log("Sum of the numbers is : ",answer);


function Area(length, breadth){
    return length*breadth;
}

let area = Area(10, 20);
console.log("The area of the rectangle:", area);


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number1: ", (input1) => {
    let num1 = parseInt(input1); // Parse the first input

    rl.question("Enter number2: ", (input2) => {
        let num2 = parseInt(input2); // Parse the second input

        let antina = Area(num1, num2); // Call the Area function with both inputs
        console.log("The area is:", antina);

        rl.close(); // Close the interface after both inputs are processed
    });
});

