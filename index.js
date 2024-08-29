// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: ('What is the title of your project?'),
  },
  {
    type: 'input',
    name: 'description',
    message: ('Describe your project:'),
  },
  {
    type: 'input',
    name: 'installation',
    message: ('How do you install your project?'),
  },
  {
    type: 'input',
    name: 'use',
    message: ('How do you use this project?'),
  },
  {
    type: 'input',
    name: 'contributers',
    message: ('Please list all contributers here'),
  },
  {
    type: 'input',
    name: 'username',
    message: ('Please list the username of the git account that has your project(remember - )'),
  },
  {
    type: 'input',
    name: 'email',
    message: ('Please list the email of your git account'),
  },
  {
    type: 'input',
    name: 'repo',
    message: ('Please list the name of the git repo(remember - )'),
  },
  {
    type: 'input',
    name: 'tests',
    message: ('Please describe how to test your project'),
  },
  {
    type: 'list',
    message: ('What license do you want to use for this project?'),
    name: 'license',
    choices: ['Apache license', 'ISC', 'MIT', 'Mozilla Public', 'No license'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
async function init() {
    const data = await inquirer.prompt(questions);
    const filename = `temp-README.md`;
    writeToFile(filename, data)
}

// Function call to initialize app
init();

