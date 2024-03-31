import inquirer from "inquirer";
let input1 = await inquirer.prompt({
    message: "Enter your first number here",
    name: "firstnumber",
    type: "number",
});
let input2 = await inquirer.prompt({
    message: "Enter your second number here",
    type: "number",
    name: "secondnumber",
});
let input3 = await inquirer.prompt({
    message: "Enter the operation you want to perform",
    name: "operation",
    type: "list",
    choices: ["+", "-", "*", "/"],
});
switch (input3.operation) {
    case "+":
        console.log(input1.firstnumber + input2.secondnumber);
        break;
    case "-":
        console.log(input1.firstnumber - input2.secondnumber);
        break;
    case "*":
        console.log(input1.firstnumber * input2.secondnumber);
        break;
    case "/":
        console.log(input1.firstnumber / input2.secondnumber);
        break;
    default:
        console.log("Invalid operation selected.");
}
