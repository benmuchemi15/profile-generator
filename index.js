const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require("./lib/manager");

const newManager = () => {
   return inquirer.prompt(
       {
    // pass your questions in here
    type: 'input',
    name:'name',
    question: 'Would you like to add a manager?',
       },
    
    {
    type: 'input',
    name:'id',
    question: 'What is the manager ID?',
    },
    {
    type: 'input',
    name:'email',
    question: 'What is the manager email?',
    }
};





newManager()
.then((answers) => {
    //use user feedback
})
.catch((error) => {
    if(error.isTtyError) {

    }else {
        //something else went wrong
    }
}) 