

const input = parseFloat(process.argv[2]);


if (isNaN(input) || input < 0) {
    console.log("Please provide a valid non-negative number as input.");
}   else {
    console.log(`The salary is: ${input}`);
}
