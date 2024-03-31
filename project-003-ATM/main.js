import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
const balance = 10000;
const pin = 12345;
const account_holder = "Humayun qamer";
let input = await inquirer.prompt({
    name: "name",
    type: "list",
    choices: ["withdraw cash", "check account information", "add cash"],
    message: chalk.green("please select any one of the option"),
});
if (input.name === "withdraw cash") {
    let input = await inquirer.prompt({
        name: "name",
        type: "number",
        message: chalk.green("Enter your pin number"),
    });
    if (input.name === pin) {
        let input = await inquirer.prompt({
            name: "pin",
            type: "number",
            message: chalk.green("Enter the amount you want to withdraw"),
        });
        if (input.pin <= balance) {
            log(chalk.yellow(`Amount withdrawn successfully .Your current account balance is ${balance - input.pin}`));
        }
        else {
            log(chalk.yellow(`NOT SUFFECIENT FUNDS . Your current account balance is ${balance}`));
        }
    }
}
else if (input.name === "check account information") {
    let input = await inquirer.prompt({
        name: "name",
        type: "number",
        message: chalk.green("Enter your pin number"),
    });
    if (input.name === pin) {
        log(chalk.yellow(`This account belongs to ${account_holder}\nAvaialable funds ${balance}\npin(${pin}`));
    }
    else {
        log("sorry ! enter current pin number");
    }
}
else {
    let input = await inquirer.prompt({
        name: "add",
        type: "number",
        message: chalk.green("Enter the amount you want to add in your account"),
    });
    if (input.add >= 100000) {
        log(chalk.yellow("sorry ! cannot add funds greater than 1 lakh directly from atm contact bank for further details"));
    }
    else {
        log(chalk.yellow(`The amount is succesfully added in your account .Your updated account balance is ${balance + input.add}`));
    }
}
