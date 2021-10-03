const inquirer = require('inquirer');
const validator = require('email-validator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generate-site.js')

const answerArray = [];

// specific questions for employee type
const specificQuestions = {
  Manager: {
    type: 'input',
    name: 'office',
    message: `Please enter the manager's office`,
    validate: officeInput => {
      if (!officeInput) {
        console.log('Please enter their office');
        return false;
      } else {
        return true;
      }
    }
  },
  Engineer: {
    type: 'input',
    name: 'github',
    message: `Please enter the engineer's github`,
    validate: githubInput => {
      if (!githubInput) {
        console.log('Please enter their GitHub username');
        return false;
      } else {
        return true;
      }
    }
  },
  Intern: {
    type: 'input',
    name: 'school',
    message: `Please enter the intern's school`,
    validate: schoolInput => {
      if (!schoolInput) {
        console.log('Please enter a school');
        return false;
      } else {
        return true;
      }
    }
  }
}

const finalQuestion = {
    type: 'list',
    name: 'nextChoice',
    message: 'Would you like to enter more team members or build the website?',
    choices: ['Engineer','Intern','Finish']
}

const promptQuestions = teamMember => {

  if (answerArray.length === 0) {
    console.log(`
  =======================================
  Welcome to the Team Profile Generator!!
  =======================================`)
  }

  // generic questions for all Employees
  const protoQuestions = [
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${teamMember}'s name`,
      validate: nameInput => {
        if (!nameInput) {
          console.log('Please enter their name');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `Please enter the ${teamMember}'s id`,
      validate: idInput => {
        if (!idInput) {
          console.log('Please enter their ID');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${teamMember}'s email`,
      validate: emailInput => {
        if (validator.validate(emailInput)) {
          return true;
        } else {
          console.log('Please enter a valid email');
          return false;
        }
      }
    }
  ]

  // add team member specific question and final question to the generic qustions
  protoQuestions.push(specificQuestions[teamMember]);
  protoQuestions.push(finalQuestion);

  // initiates inquirer prompt
  return inquirer
  // starts inquirer prompt using modified protoQuestions
    .prompt(protoQuestions)
    // passes resulting answers object
    .then(data => {
      // create object based on which employee is called and pushed to answer array
      if (teamMember === "Manager") {
        const newMember = new Manager(data.name, data.id, data.email, data.office);
        answerArray.push(newMember);
      } else if (teamMember === "Engineer") {
        const newMember = new Engineer(data.name, data.id, data.email, data.github);
        answerArray.push(newMember);
      } else {
        const newMember = new Intern(data.name, data.id, data.email, data.school);
        answerArray.push(newMember);
      }
      
      // if 'Finish' is chosen, returns data. Otherwise restarts questions
      if (data.nextChoice === 'Finish') {
        return answerArray;
      } else {
        return promptQuestions(data.nextChoice);
      }
    });
};

promptQuestions('Manager')
  .then(answers => {
    return generatePage(answers);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });