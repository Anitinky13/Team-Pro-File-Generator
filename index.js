const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/generateTeam.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/generateTeam.js");

const employees = [];
// create questions for manager, adding engineer or intern,
//run all question, ush info to employees[]
//write HTML
function createTeam(employees) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Do you want to add another team member?",
        choices: ["engineer", "intern", "no"],
      },
    ])
    .then((userChoice) => {
      console.log("", userChoice);
      switch (userChoice.choice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam(employees);
      }
    });
}
function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email of the manager?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the office number of the manager?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
      );
      employees.push(manager);

      engineerQuestions();
    });
}
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Id of the engineer?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Github username of the engineer?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email of the engineer?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      );
      employees.push(engineer);

      internQuestions(employees);
    });
  //     ])
  // }
  function internQuestions(employees) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the ID of the intern?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the email of the intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the school the intern attended?",
        },
      ])
      .then(() => {
        createTeam(employees);
      });
  }
}
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return; // When the profile has been created
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

function buildTeam(employees) {
  console.log("test");
  const data = generateTeam(employees);
  fs.writeFileSync("./dist/index.html", data);
}

managerQuestions();
