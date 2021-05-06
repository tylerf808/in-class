const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt(
        [{
                type: 'input',
                message: 'What is your name?',
                name: 'nameinput',
            },
            {
                type: 'input',
                message: 'What is your location?',
                name: 'locationinput',
            },
            {
                type: 'input',
                message: 'Short bio about you: ',
                name: 'bioinput',
            },
            {
                type: 'input',
                message: 'What is your LinkedIn username?',
                name: 'linkedininput',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'githubinput',
            },
        ]
    )
    .then(function(response) {
        let result = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title></head><body><main><h1>${response.nameinput}</h1><p>${response.locationinput}</p><p>${response.bioinput}</p><p>${response.linkedininput}</p><p>${response.githubinput}</p>
        </main></body></html>`;
        fs.writeFile('index.html', result, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })