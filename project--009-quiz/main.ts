#!/usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";

async function runQuiz() {
    let marks: number = 0;
    let total_marks : number = 5
    let question_one = await inquirer.prompt({
        name: "name1",
        type: "list",
        message: "What is the capital of Pakistan?",
        choices: ['Lahore', 'Karachi', 'Islamabad']
    });

    if (question_one.name1 === 'Islamabad') {
        log('Your answer is right');
        marks += 1;
    } else {
        log('Your answer is wrong');
        marks += 0;
    }
    let question_two = await inquirer.prompt({
        name: "name1",
        type: "list",
        message: "What is the national sports of Pakistan?",
        choices: ['wrestling', 'hockey', 'cricket']
    });

    if (question_two.name1 === 'hockey') {
        log('Your answer is right');
        marks += 1;
    } else {
        log('Your answer is wrong');
        marks += 0;
    }
    let question_three = await inquirer.prompt({
        name: "name1",
        type: "list",
        message: "whi is the founder of pakistan?",
        choices: ['quaid-e-azam muhammad ali jinnah', 'allama iqbal', 'liaquat ali khan']
    });

    if (question_three.name1 === 'quaid-e-azam muhammad ali jinnah') {
        log('Your answer is right');
        marks += 1;
    } else {
        log('Your answer is wrong');
        marks += 0;
    }
    let question_four = await inquirer.prompt({
        name: "name1",
        type: "list",
        message: "who is the prime minister of pakistan?",
        choices: ['imran khan', 'asif ali zardari', 'shehbaz sharif']
    });

    if (question_four.name1 === 'shehbaz sharif') {
        log('Your answer is right');
        marks += 1;
    } else {
        log('Your answer is wrong');
        marks += 0;
    }
    let question_five = await inquirer.prompt({
        name: "name1",
        type: "list",
        message: "what is the full form of RAM",
        choices: ['random access memory', 'read accessible memory', 'random access multimedia']
    });

    if (question_five.name1 === 'random access memory') {
        log('Your answer is right');
        marks += 1;
    } else {
        log('Your answer is wrong');
        marks += 0;
    }

log(`you have obtained ${marks} out of ${total_marks} ~CONGRATULATIONS!`)
}

runQuiz(); 

