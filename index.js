const inquirer = require('inquirer');

const specificQuestions = {
  manager: {
    type: 'input',
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

const promptQuestions = (teamMember) => {

  const protoQuestions = [
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${teamMember}'s name`
    },
    {
      type: 'input',
      name: 'id',
      message: `Please enter the ${teamMember}'s id`
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${teamMember}'s email`
    }
  ]

  protoQuestions.push(specificQuestions[teamMember]);
  return inquirer.prompt(protoQuestions);

  // return inquirer.prompt(protoQuestions.push(specificQuestions[teamMember]));
};

promptQuestions('manager');
  // .then(data => {
  //   console.log(data);
  // });