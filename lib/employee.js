class Employee {
    constructor(name,id,email) {
    this.name = name;
    this.id= id;
    this.email = email;
    }
}

Employee.prototype.getName = function() {
    // get name of employee
};

Employee.prototype.getId = function() {
    //write logic for getting the id of employee
};

Employee.prototype.getEmail = function() {
    //get email of employee
};
Employee.prototype.getRole = function() {

}

 module.exports = Employee;

