const Employee = require('../_test_/employee.test');

class Intern extends Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
    }
};

module.exports = Intern;