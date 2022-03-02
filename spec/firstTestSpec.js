const helloWorld = require('../script.js');

describe("helloWorld", () => {
  it("returns hello world", () => {
    var actual = helloWorld();
    expect(actual).toBe("hello world");
  });
})