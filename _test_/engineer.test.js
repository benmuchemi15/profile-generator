const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/engineer');

test("gets new engineer ", () => {
const engineer = new Engineer("Mark", 4, "mark12@gmail.com")
expect(engineer.name).toEqual(expect.any(String));
expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.email).toEqual(expect.any(String));
});