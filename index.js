const inquirer = require("inquirer");
const fs = require("fs");
// Import Classes and !html!(make html)
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const src = require('./src/htmlTemplate');
 
const team = [];

function start() {
    managerPrompt();
    // Prompt for Engineer
    function managerPrompt() {
        inquirer
            .prompt([{
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
                    name: "getRole",
                    type: "list",
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
                if (results.getRole === "Add Engineer") {
                    engineerPrompt();
                }
                if (results.getRole === "Add Intern") {
                    internPrompt();
                } else {
                    return;
                }
            });
    }
    // Promt for Intern
    function internPrompt() {
        inquirer
            .prompt([{
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
                    name: "getRole",
                    type: "list",
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
                if (results.getRole === "Add Engineer") {
                    engineerPrompt();
                }
                if (results.getRole === "Add Intern") {
                    internPrompt();
                } else {
                    return;
                }
            });
            
    }
    // Promt for Manager
    function engineerPrompt() {
        inquirer
            .prompt([{
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
                    name: "getRole",
                    type: "list",
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
                if (results.getRole === "Add Engineer") {
                    engineerPrompt();
                }
                if (results.getRole === "Add Intern") {
                    internPrompt();
                } else {
                    return;
                }
            });
    }
}



//write html in dist folder
fs.writeFileSync('./dist/html-profiles.html', src(team), "utf-8");

// call question function
start();