const Employee = require('../_test_/employee.test');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        this.role = "Intern";
    
    }
};

Intern.prototype.school = function() {
    //Retrieve school
    return this.school;
};

Intern.prototype.getRole = function() {
    //return intern
    return "Intern";
};

module.exports = Intern;