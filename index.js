const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/render');
const questions = require('./questions')

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'index.html');

const team = [];

 async function main() {
    console.log('Please enter information for the team manager.');
    const managerAnswers = await inquirer.prompt([
      ...questions.filter((q) => q.name !== 'addAnother'),
    ]);
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    team.push(manager);
    let addAnother = true;
    while (addAnother) {
      const employeeAnswers = await inquirer.prompt(questions);
      let employee;
      switch (employeeAnswers.role) {
        case 'Manager':
          console.log('You have already added a manager. Please choose another role.');
          continue;
        case 'Engineer':
          employee = new Engineer(
            employeeAnswers.name,
            employeeAnswers.id,
            employeeAnswers.email,
            employeeAnswers.github
          );
          break;
        case 'Intern':
          employee = new Intern(
            employeeAnswers.name,
            employeeAnswers.id,
            employeeAnswers.email,
            employeeAnswers.school
          );
          break;
      }
      team.push(employee);
      addAnother = employeeAnswers.addAnother;
    }
    const html = render(team);
    fs.writeFileSync(outputPath, html);
    console.log(`Team profile generated at ${outputPath}.`);
  }

main();