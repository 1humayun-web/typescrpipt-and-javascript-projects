import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
let input1 = await inquirer.prompt({
    name: "name",
    type: "list",
    message: "Enter the currency you have ",
    choices: ["PKR", "DIRHAM", "DOLLAR($)", "INR", "TAKA"]
});
let input2 = await inquirer.prompt({
    name: "converter",
    type: "list",
    message: "Enter the currency you want to exchange your money in ",
    choices: ["PKR", "DIRHAM", "DOLLAR($)", "INR", "TAKA"]
});
let input3 = await inquirer.prompt({
    name: "money",
    type: "number",
    message: "Enter the amount of money you have  ",
});
if (input1.name === input2.converter) {
    console.log(input3.money);
}
else if (input1.name == "PKR") {
    if (input2.converter == "DIRHAM") {
        chalk.yellow(log(`YOU HAVE ${input3.money / 76} DIRHAM`));
    }
    else if (input2.converter == "DOLLAR($)") {
        chalk.yellow(log(`YOU HAVE ${input3.money / 278} DOLLAR($)`));
    }
    else if (input2.converter == "INR") {
        chalk.yellow(log(`YOU HAVE ${input3.money / 3} INR`));
    }
    else {
        chalk.yellow(log(`YOU HAVE ${input3.money / 2.5} TAKA`));
    }
}
else if (input1.name == "DIRHAM") {
    if (input2.converter === "PKR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 76} PKR`));
    }
    else if (input2.converter === "DOLLAR($)") {
        chalk.yellow(log(`YOU HAVE ${input3.money / 3.6} DOLLAR($)`));
    }
    else if (input2.converter === "INR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 23} INR`));
    }
    else {
        chalk.yellow(log(`YOU HAVE ${input3.money * 30} TAKA`));
    }
}
else if (input1.name == "DOLLAR($)") {
    if (input2.converter === "DIRHAM") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 3.6} DIRHAM`));
    }
    else if (input2.converter === "PKR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 278} PKR`));
    }
    else if (input2.converter === "INR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 3} INR`));
    }
    else {
        chalk.yellow(log(`YOU HAVE ${input3.money * 110} TAKA`));
    }
}
else if (input1.name == "INR") {
    if (input2.converter === "DIRHAM") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 0.44} DIRHAM`));
    }
    else if (input2.converter === "DOLLAR($)") {
        chalk.yellow(log(`YOU HAVE ${input3.money / 83} DOLLAR($)`));
    }
    else if (input2.converter === "PKR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 3} PKR`));
    }
    else {
        chalk.yellow(log(`YOU HAVE ${input3.money * 1.3} TAKA`));
    }
}
else {
    if (input2.converter === "DIRHAM") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 0.03} DIRHAM`));
    }
    else if (input2.converter === "DOLLAR($)") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 0.009} DOLLAR($)`));
    }
    else if (input2.converter === "INR") {
        chalk.yellow(log(`YOU HAVE ${input3.money * 0.758} INR`));
    }
    else {
        chalk.yellow(log(`YOU HAVE ${input3.money * 2.5} PKR`));
    }
}
