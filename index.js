const inquirer = require('inquirer');

const answerArray = [];

const specificQuestions = {
  Manager: {
    type: 'input',
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

  // add team member specific question to the generic qustions
  protoQuestions.push(specificQuestions[teamMember]);

  // initiates inqurer prompt and cycles while still entering team members, then console logs data
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
        // checks if final answer is finish, if not restarts prompt
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