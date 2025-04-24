const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (userInput) => {
    try {
        if (isNaN(userInput)) {
            throw new Error("Invalid input");
        }
        let number = parseInt(userInput);
        console.log("You entered: ", number);
        console.log("The type of the number is: ", typeof(number));

        let str = String(number);
        console.log("The string representation of the number is: ", str);
        console.log("The type of the string representation is: ", typeof(str));
    } catch (error) {
        console.log("An error occurred: ", error.message);
    } finally {
        rl.close(); // Close the interface
    }
});