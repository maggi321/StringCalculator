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

it("should sumerize multiple numbers", () =>  {
    expect(add("1,2,3,4,5")).toBe(15);
});

it("should sumerize multiple numbers with a new line in string", () =>  {
    expect(add("1\n2,3")).toBe(6);
});

it("should sumerize multiple numbers with a new line in string", () =>  {
    expect(add("1\n2\n3")).toBe(6);
});

it("negative number not allowed", () => {
    function trysum(){
        add("-1,2");
    }
    expect(trysum).toThrowError("Negatives not allowed: -1");
});

it("negative number not allowed", () => {
    function trysum(){
        add("-1,-2");
    }
    expect(trysum).toThrowError("Negatives not allowed: -1,-2");
});

it("negative number not allowed", () => {
    function trysum(){
        add("2,-4,3,-5");
    }
    expect(trysum).toThrowError("Negatives not allowed: -4,-5");
});

it("should ignore numbers bigger then 1000", () =>  {
    expect(add("1001,2")).toBe(2);
});

it("should ignore numbers bigger then 1000", () =>  {
    expect(add("1001,1002")).toBe(0);
});

it("should sumerize numbers with other delimiter", () =>  {
    expect(add("//;\n1;2")).toBe(3);
});

it("should sumerize numbers with other delimiter", () =>  {
    expect(add("//{milli}\n2{milli}3")).toBe(5);
});

it("should sumerize numbers with other delimiter", () =>  {
    expect(add("//test\n2test3test4")).toBe(9);
});