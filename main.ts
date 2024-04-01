import { log } from "console";
import inquirer from "inquirer";

let day: any = await inquirer.prompt({
    name: "name",
    message: "Enter a day to know your schedule"

})
switch (day.name) {
    case "monday":
        log("You have to complete your maths assignment")
        break
    case "tuesday":
        log("You decided to meet your old friends")
        break
    case "wednesday":
        log("you have to go at a wedding")
        break
    case "thursday":
        log("you have a class at 5 p.m ")
        break
    case "friday":
        log("you have to go at your grandfathers grave")
        break
    case "saturday":
        log("you have to play football with your friend's at 4 p.m")
        break
    case "sunday":
        log("today you have to go at dinner with your family")
        break
    default:
        log("invalid command")




}