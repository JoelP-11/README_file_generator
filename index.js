// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your app'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Tell us about your app: '
},
{
    type: 'list',
    name: 'license',
    message: 'What license does this repo have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        fs.writeFile('README.md', generateMarkdown(answers), err => {
            if (err) return console.error(err);

            console.log('README generated successfully');
        });
        console.log(generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
