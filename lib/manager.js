const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email){
        this.role = 'Manager';
        this.name= name;
        this.id = id;
        this.email = email
    }
};

module.exports= Manager;