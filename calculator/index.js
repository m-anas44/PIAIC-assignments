import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(figlet.textSync("Calculator"));
let choice = "Yes";
while (choice === "Yes") {
    let input = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Any Number: "
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Any Number: "
        },
        {
            name: "operation",
            type: "list",
            message: "Select Option",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    switch (input.operation) {
        case '+':
            console.log(chalk.red(`Addition is: ${(input.num1) + (input.num2)}`));
            break;
        case '-':
            console.log(chalk.red('Subtraction is: ' + (input.num1 - input.num2) + ''));
            break;
        case '*':
            console.log(chalk.red('Multiplication is: ' + (input.num1 * input.num2) + ''));
            break;
        case '/':
            console.log(chalk.red('Divison is: ' + (input.num1 / input.num2) + ''));
            break;
    }
    let inputChoice = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Do Another Operation?",
            choices: ["Yes", "No"]
        }
    ]);
    choice = inputChoice.choice;
}
