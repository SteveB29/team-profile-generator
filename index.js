const inquirer = require('inquirer');

const answerArray = [];

const specificQuestions = {
  Manager: {
    type: 'number',
    name: 'managerOffice',
    message: `Please enter the manager's office`
  },
  Engineer: {
    type: 'input',
    name: 'engineerGithub',
    message: `Please enter the engineer's github`
  },
  Intern: {
    type: 'input',
    name: 'internSchool',
    message: `Please enter the intern's school`
  }
}

const finalQuestion = {
    type: 'list',
    name: 'nextChoice',
    message: 'Would you like to enter more team members or build the website?',
    choices: ['Engineer','Intern','Finish']
}

// use default parameters to set blank array?
const promptQuestions = (teamMember) => {

  const protoQuestions = [
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${teamMember}'s name`
    },
    {
      type: 'number',
      name: 'id',
      message: `Please enter the ${teamMember}'s id`
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${teamMember}'s email`
    }
  ]

  // add team member specific question to the generic qustions
  protoQuestions.push(specificQuestions[teamMember]);
  protoQuestions.push(finalQuestion);

  // initiates inqurer prompt and cycles while still entering team members, then console logs data
  inquirer.prompt(protoQuestions)
    .then(data => {
      answerArray.push(data);
      if (data.nextChoice === 'Finish') {
        console.log(answerArray);
      } else {
        promptQuestions(data.nextChoice);
      }
    });

};

promptQuestions('Manager');