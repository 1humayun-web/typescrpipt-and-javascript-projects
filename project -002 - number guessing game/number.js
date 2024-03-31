import { log } from "console";
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
let guess = await inquirer.prompt({
    name: "name ",
    type: "number",
    message: "pleaseguess the number from 1 - 6"
});
if (guess.name == randomnumber) {
    log("you guessed the right number");
}
else {
    log("you guessed the wrong number");
}
