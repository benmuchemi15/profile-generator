const inquirer = require("inquirer");
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