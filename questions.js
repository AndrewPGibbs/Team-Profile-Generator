const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
      validate: (value) => {
        if (value.trim()) {
          return true;
        } else {
          return 'Please enter a name.';
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
      validate: (value) => {
        if (/^\d+$/.test(value)) {
          return true;
        } else {
          return 'Please enter a number.';
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email?",
      validate: (value) => {
        if (/^.+@.+\..+$/.test(value)) {
          return true;
        } else {
          return 'Please enter a valid email address.';
        }
      },
    },
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role?",
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
      when: (answers) => answers.role === 'Manager',
      validate: (value) => {
        if (/^\d+$/.test(value)) {
          return true;
        } else {
          return 'Please enter a number.';
        }
      },
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
      when: (answers) => answers.role === 'Engineer',
      validate: (value) => {
        if (value.trim()) {
          return true;
        } else {
          return 'Please enter a username.';
        }
      },
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
      when: (answers) => answers.role === 'Intern',
      validate: (value) => {
        if (value.trim()) {
          return true;
        } else {
          return 'Please enter a school name.';
        }
      },
    },
    {
      type: 'confirm',
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      default: true,
    },
  ];