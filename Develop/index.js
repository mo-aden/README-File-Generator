// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//import the generateMrkDown fn
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description about the project explaining how your projects works",
  },
  {
    type: "input",
    name: "installation",
    message: "How does the user install all the application dependencies e.g. inquirer?",
  },
  {
    type: "input",
    name: "test",
    message: "How does the users run console log tests? (npm test)",
  },
  {
    type: "list",
    name: "license",
    message: "What is type of license does your project have? (use arrow keys for selecting) ",
    choices: ["MIT", "APACHE_2.0", "BSD_3--Clause", "NONE"],
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "fileName",
    message: "Enter the name of the README file to be generated?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(`Generating README file ...`);

    const readmeFileName = response.fileName;

    // writeToFile(response.fileName.md, generateMarkdown({ ...response }));
    writeToFile("readmeFileName.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
