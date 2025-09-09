    // Get the numbers from command line arguments
    const num1 = parseFloat(process.argv[2]);
    const num2 = parseFloat(process.argv[3]);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please provide two valid numbers as command line arguments.");
    } else {
        // Calculate the sum
        const sum = num1 + num2;

        // Print the result
        console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    }