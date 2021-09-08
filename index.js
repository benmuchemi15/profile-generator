const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require("./lib/manager");

const newManager = () => {
   return inquirer.prompt({
    // pass your questions in here
    type: 'input',
    name:'name',
    question: 'Would you like to add a manager?',

})
.then((answers) => {
    //use user feedback
})

};

newManager()
.catch((error) => {
    if(error.isTtyError) {

    }else {
        //something else went wrong
    }
}) 