class Employee {
    constructor(name,id,email) {
    this.name = name;
    this.id= id;
    this.email = email;
    }
};

// get name of employee
getName () {
    return this.name;
};


//write logic for getting the id of employee
getId() {
    return this.id;
};


//get email of employee

getEmail() {
    return this.email;
};

getRole() {
    return 'Employee';
};



 module.exports = Employee;

