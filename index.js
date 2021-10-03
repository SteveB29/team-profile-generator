const inquirer = require('inquirer');
const validator = require('email-validator');

const answerArray = [];

const specificQuestions = {
  Manager: {
    type: 'input',
    name: 'managerOffice',
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
    name: 'engineerGithub',
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
    name: 'internSchool',
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

const promptQuestions = (teamMember) => {

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

  // add team member specific question to the generic qustions
  protoQuestions.push(specificQuestions[teamMember]);

  // initiates inquirer prompt
  inquirer
    .prompt(protoQuestions)
    // pushes data to answer array
    .then(data => {
      answerArray.push(data);
    })
    // creates new prompt asking to add more or finish
    .then( () => {
      inquirer
        .prompt(finalQuestion)
        // checks if answer is finish, if not restarts prompt with Engineer/Intern choice
        .then(data =>{
          if (data.nextChoice === 'Finish') {
            console.log(answerArray);
          } else {
            promptQuestions(data.nextChoice);
          }
        })
    })

};

promptQuestions('Manager');