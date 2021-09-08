const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

test('gets an employee object name', () => {
    const employee = new Employee("Bob", 5, "bob123@gmail.com" );
    //create test that checks if the name is string
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})