import inquirer from "inquirer";
import { log } from "console";
let input = await inquirer.prompt({
    name: "name",
    message: "Enter any paragraph to know its length. Thank you"
});
let str = input.name.trim(); // Remove leading and trailing spaces
let lengthWithoutSpaces = str.replace(/\s/g, "").length; // Count characters excluding spaces
log(lengthWithoutSpaces);
