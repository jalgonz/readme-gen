//Packages needed for this application
const fs = require("fs"); 
const inquirer = require("inquirer"); 
const generateMarkdown = require("./utils/generateMarkdown");

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
