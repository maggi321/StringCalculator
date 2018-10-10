const add = require('./StringCalculator');

it("should return zero on an empty string", () =>  {
    expect(add("")).toBe(0);
});

it("should return number only one number is in the string", () =>  {
    expect(add("7")).toBe(7);
});

it("should return sum of two given numbers", () =>  {
    expect(add("4,6")).toBe(10);
});

it("should sumerize multiple numbers", () =>  {
    expect(add("1,2,3")).toBe(6);
});