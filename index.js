const inquirer = requirer("inquirer");
const fs = requirer("fs");
// Import Classes and !html!(make html)
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for team
const team = [];
// Prompt for Engineer
const managerPromt = [
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
];
// Promt for Intern
const internPromt = [
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
];
// Promt for Manager
const engineerPromt = [
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
];