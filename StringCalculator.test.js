const add = require('./StringCalculator');

it("should return zero on an empty string", () =>  {
    expect(add("")).toBe(0);
});

it("should return zero on an empty string", () =>  {
    expect(add("7")).toBe(7);
});