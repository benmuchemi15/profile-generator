const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/engineer');

test("gets new engineer ", () => {
const engineer = new Engineer("Ben", 5, "benuser@gmail.com")
expect(engineer.name).toEqual(expect.any(String));
expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.email).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const engineer = new Engineer("Ben", 5, "benuser@gmail.com");

    expect(engineer.getRole()).toEqual("Engineer");
})