const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require("./lib/manager");
inquirer.prompt({
    // pass your questions in here
})
.then((answers) => {
    //use user feedback
})
.catch((error) => {
    if(error.isTtyError) {

    }else {
        //something else went wrong
    }
})