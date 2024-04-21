#!/usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";

let day: any = await inquirer.prompt({
    name: "name",
    message: "Enter a day to know your schedule"

})
switch (day.name) {
    case "monday":
       log( chalk.yellow(("You have to complete your maths assignment")))
        break
    case "tuesday":
        log(chalk.yellow("You decided to meet your old friends"))
        break
    case "wednesday":
        log(chalk.yellow( ("you have to go at a wedding")))
        break
    case "thursday":
        log(chalk.yellow( ("you have a class at 5 p.m ")))
        break
    case "friday":
       log(chalk.yellow (("you have to go at your grandfathers grave")))
        break
    case "saturday":
        log(chalk.yellow(("you have to play football with your friend's at 4 p.m")))
        break
    case "sunday":
        log(chalk.yellow(("today you have to go at dinner with your family")))
        break
    default:
        log(chalk.yellow( ("invalid command")))




}