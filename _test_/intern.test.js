const { test, expect } = require('@jest/globals');
const Intern = require('../lib/intern');


test('gets an employee object name', () => {
    const intern = new Intern("Ben", 5, "benuser@gmail.com" );
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
})

test('gets role of employee', () => {
    const intern = new Intern("Ben", 5, "benuser@gmail.com");

    expect(intern.getRole()).toEqual("Intern");
}); 
