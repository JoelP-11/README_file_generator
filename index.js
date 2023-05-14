// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
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
},
{
    type: 'input',
    name: 'questions',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'questions',
    message: 'What is your email?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers), err => {
            if (err) return console.error(err);

            console.log('README generated successfully');
        });
        console.log(generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
