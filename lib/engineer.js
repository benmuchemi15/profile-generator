const Employee = require('./employee');
class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        this.role = "Engineer";
    
    }
};

Engineer.prototype.getGithub = function() {
    //Retrieve Github Username
    return this.github;
};

Engineer.prototype.getRole = function() {
    //ovveridden to return Engineer role
    return "Engineer";
};

module.exports = Engineer;