const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'method',
        }
    ])
    .then((response) => {
        const text = response.name + '\n' + response.languages + '\n' + response.method;
        fs.writeFile('log.txt', text, function() {});
    })