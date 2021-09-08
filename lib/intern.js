const Employee = require('../_test_/employee.test');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        this.role = "Intern";
    
    }
};

Engineer.prototype.school = function() {
    //Retrieve school
    return this.school;
};

Engineer.prototype.getRole = function() {
    //return intern
    return "Intern";
};

module.exports = Intern;