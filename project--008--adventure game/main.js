import inquirer from 'inquirer';
const log = console.log;
log("WELCOME TO ZOMBIE LAND");
log("--------------------------------------------------------");
log("THANKS FOR PLAYING");
let your_health = 50;
let enemy_health = 50;
let health_potion = 3;
let input2 = await inquirer.prompt({
    name: "name2",
    type: 'list',
    message: "Choose The Weapon You Want To Fight With",
    choices: ['SWORD', 'MACHETE', 'KNIFE']
});
log(`you choose ${input2.name2} to fight with`);
const playGame = async () => {
    while (your_health >= 0 && enemy_health >= 0) {
        const input1 = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What do you want to do?',
            choices: ['Attack', 'Drink Health Potion', 'Run']
        });
        if (input1.action === 'Attack') {
            let health_drop = Math.ceil(10 + Math.random() * 10);
            let our_health_drop = Math.ceil(Math.random() * 10);
            log(`You Attacked The Zombies and gave him ${health_drop} damage.`);
            log(`You have received ${our_health_drop} damage.`);
            your_health -= our_health_drop;
            enemy_health -= health_drop;
            log(`Your Health: ${your_health}\nEnemy Health: ${enemy_health}`);
            if (your_health <= 5) {
                log(`You don't have enough health to continue. Game Over!`);
                break;
            }
            else if (your_health >= 30 && enemy_health < 20) {
                let masterzombiehealth = 75;
                let newhealthpotions = 6;
                log("you defeated the zombies and you have been rewarded health potions you now have " + newhealthpotions + "health potions");
                let input3 = await inquirer.prompt({
                    name: 'name3',
                    type: "list",
                    message: "YOU BEAT THE ZOMBIES AND UNLOCKED THE FIGHT WITH MASTER ZOMBIE",
                    choices: ['YES', 'NO']
                });
                if (input3.name3 == 'YES') {
                    let input2 = await inquirer.prompt({
                        name: "name2",
                        type: 'list',
                        message: "Choose The Weapon You Want To Fight With",
                        choices: ['SWORD', 'MACHETE', 'KNIFE']
                    });
                    let input4 = await inquirer.prompt({
                        name: 'name4',
                        type: 'list',
                        message: 'choose what you want to do',
                        choices: ['Attack', 'Drink Health potions', 'Run']
                    });
                    if (input4.name4 == 'Attack') {
                        let masterhealth_drop = Math.ceil(10 + Math.random() * 10);
                        let our_health_drop = Math.ceil(Math.random() * 10);
                        log(`You Attacked The Master Zombie and gave him ${masterhealth_drop} damage.`);
                        log(`You have received ${our_health_drop} damage.`);
                        your_health -= our_health_drop;
                        masterzombiehealth -= health_drop;
                        log(`Your Health: ${your_health}\nEnemy Health: ${masterzombiehealth}`);
                        if (your_health <= 5) {
                            log(`You don't have enough health to continue. Game Over!`);
                            break;
                        }
                    }
                    else if (input4.name4 == 'Drink Health Potion') {
                        if (newhealthpotions > 0) {
                            log(`Your Health increased. Your New Health Is ${your_health + 10}`);
                            your_health += 10;
                            newhealthpotions -= 1;
                        }
                        else {
                            log("You don't have any health potions left.");
                        }
                    }
                    else {
                        log('YOU RUN FROM THE BATTLEFIELD ! YOU LOSE . GAME OVER');
                        break;
                    }
                }
                else {
                    log('YOU RUN FROM THE BATTLEFIELD ! YOU LOSE . GAME OVER');
                    break;
                }
            }
        }
        else if (input1.action === 'Drink Health Potion') {
            if (health_potion > 0) {
                log(`Your Health increased. Your New Health Is ${your_health + 10}`);
                your_health += 10;
                health_potion -= 1;
            }
            else {
                log("You don't have any health potions left.");
            }
        }
        else {
            log('You ran away from the zombie. Game Over!');
            break;
        }
    }
};
playGame();
