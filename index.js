const inquirer = requirer("inquirer");
const fs = requirer("fs");
// Import Classes and !html!(make html)
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for team and id
const team = [];
const id = [];

// function to start questions
function starter() {
    // addTeam function
    function addTeam() {
      inquirer
        .then((userChoice) => {
          switch (userChoice.memberChoice) {
            case 'Manager':
              managerPrompt();
              break;
            case 'Engineer':
              engineerPrompt();
              break;
            case 'Intern':
              internPrompt();
              break;
            default:
              html(); 
          }
        });
    }
}
// Prompt for Engineer
function managerPrompt() {
    inquirer
        .prompt([
        {  
            name: "name",
            type: "input",
            message: "Enter Team Manager Name:",
        },
        {  
            name: "id",
            type: "input",
            message: "Enter Employee ID:",
        },
        {
            name: "email",
            type: "input",
            message: "Enter Manager email address:",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter office number:",
        },
        {
            name: "nextMember",
            type: "input",
            choices: ["Add Engineer", "Add Intern", "Team Complete!"],
            message: "What would you like to do next?",
        },
    ])
    .then((results) => {
        const manager = new Manager(
            results.name,
            results.id,
            results.email,
            results.officeNumber,
        );
        team.push(manager);
        id.push(results.id);
        addTeam();
    });
}
// Promt for Intern
function internPromt() {
    inquirer
        .prompt([
        {
            name: "name",
            type: "input",
            message: "Enter Intern Name:",
        },
        {
            name: "id",
            type: "input",
            message: "Enter Employee ID:",
        },
        {
            name: "email",
            type: "input",
            message: "Enter Intern email address:",
        },
        {
            name: "school",
            type: "input",
            message: "Enter Intern's Educational Institution:",
        },
        {
            name: "nextMember",
            type: "input",
            choices: ["Add Engineer", "Add Intern", "Team Complete!"],
            message: "What would you like to do next?",
        },
    ])
    .then((results) => {
        const intern = new Intern(
            results.name,
            results.id,
            results.email,
            results.school,
        );
        team.push(intern);
        id.push(results.id);
        addTeam();
    });
}
// Promt for Manager
function engineerPromt() {
    inquirer
        .prompt([
        {
            name: "name",
            type: "input",
            message: "Enter Engineer Name:",
        },
        {
            name: "id",
            type: "input",
            message: "Enter Employee ID:",
        },
        { 
            name: "email",
            type: "input",
            message: "Enter Engineer email address:",
        },
        {
            name: "github",
            type: "input",
            message: "Enter Engineer's Github Username:",
        },
        {
            name: "nextMember",
            type: "input",
            choices: ["Add Engineer", "Add Intern", "Team Complete!"],
            message: "What would you like to do next?",
        },
    ])
    .then((results) => {
        const engineer = new Engineer(
            results.name,
            results.id,
            results.email,
            results.github,
        );
        team.push(engineer);
        id.push(results.id);
        addTeam();
    });
}


starter();