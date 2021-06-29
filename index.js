// Packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer"); 
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a brief description for your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide user instructions.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide contrubtion guideline instructions.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Provide test instructions for your project.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select the appropriate license for your project.',
        name: 'license',
        choices: [
                'Apache 2.0 License', 
                'BSD 2-clause License',
                'BSD 3-clause License',
                'GPL License 3.0',
                'MIT License',
                'Mozilla Public License 2.0',
                'None'  
            ],
    },
    {
        type: 'input',
        message: 'Provide your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Provide your email address.',
        name: 'email',
    },
];

// Function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Markdown generated.")
    })
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('README-example.md', response);
    })
}

// Function call to initialize app
init();
