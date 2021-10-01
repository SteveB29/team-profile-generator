const inquirer = require('inquirer');

const specificQuestions = {
  manager: {
    type: 'number',
    name: 'office',
    message: `Please enter the manager's office`
  },
  engineer: {
    type: 'input',
    name: 'github',
    message: `Please enter the engineer's github`
  },
  intern: {
    type: 'input',
    name: 'school',
    message: `Please enter the intern's school`
  }
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

  // initiates inqurer prompt and returns data
  return inquirer.prompt(protoQuestions);

};

promptQuestions('intern')
  .then(data => {
    console.log(data);
  });