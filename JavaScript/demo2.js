const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Enter a number: ", (answer) => {
    let num = parseInt(answer);

    if(num < 0){
        console.log("You entered a negative number.");
    }else if(num == 0){
        console.log("You entered zero.");
    }else{
        console.log("You entered a positive number.");
    }
    rl.close();
});