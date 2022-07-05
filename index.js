const fs = require("fs");
const inquirer = require("inquirer");
//const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const generateMarkdown = require("./src/generateMarkdown");

//const DIST_DIR = path.resolve(__dirname);
//const distPath = path.join(DIST_DIR, "index.html");
//const render = require("./src/generate-site.js");
const idArray = [];
const employees = [];

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: " What is the name of the Manager?",
      },
      {
        type: "input",
        name: " managerId",
        message: "What is the id of the Manager?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Managers Email Address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the Managers office number?",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      employees.push(manager);
      engineerPrompt();
    });
}

function generateTeamMembers(employees) {
  inquirer
    .prompt([
      {
        type: " list",
        name: "choices",
        message: "Would you like to add another team member?",
        choices: ["engineer", "intern", "no"],
      },
    ])
    .then((userChoice) => {
      console.log("", userChoice.choices);
      switch (userChoice.choices) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Manager":
          addManager();
          break;
        default:
          console.log(employees);
          buildTeam(employees);
      }
    });
}

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is Engineers name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineers Id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineers Email Address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineers GitHub username?",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      employees.push(engineer);
      idArray.push(engineer.id);
      generateTeamMembers();
    });
}
function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the Intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Id of the Intern?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the Interns email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the name of the school the intern attended?",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      employees.push(intern);
      idArray.push(intern.id);
      generateTeamMembers();
    });

  function buildTeam(employees) {
    console.log("test");
    console.log(employees);

    fs.writeFileSync("./dist/index.html", generateMarkdown(employees), "utf8");
  }
}
managerPrompt();
