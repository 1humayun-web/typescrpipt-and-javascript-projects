import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

let input: any = await inquirer.prompt({
    name: "name",
    message: "Enter any paragraph to know its length. Thank you"
});

let str: string = input.name.trim(); // Remove leading and trailing spaces
let lengthWithoutSpaces: number = str.replace(/\s/g, "").length; // Count characters excluding spaces
log(lengthWithoutSpaces);
