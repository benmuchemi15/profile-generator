const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        this.role = "Engineer";
    
    }
};

Manager.prototype.officeNumber= function() {
    //Retrieve office number
    return this.officeNumber;
};

Manager.prototype.getRole = function() {
    //return Manager role
    return "Manager";
};

module.exports= Manager;