const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the team manager's employee ID?",
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the team manager's email address?",
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the team manager's office number?",
    },
  ]);

  const generateHTML = (data) => {
    // Load the Handlebars template
    const template = fs.readFileSync(path.join(__dirname, 'templates', 'team-profile.hbs'), 'utf8');
    // Compile the template
    const compiledTemplate = Handlebars.compile(template);
    // Render the HTML using the compiled template and the user's data
    const html = compiledTemplate(data);
    // Write the HTML to a file
    fs.writeFileSync(path.join(__dirname, 'output', 'team-profile.html'), html);
  };