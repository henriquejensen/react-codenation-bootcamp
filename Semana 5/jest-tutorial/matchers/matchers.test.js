const { getName, multiply, getCity } = require("./matchers");

test("test toBe", () => {
  expect(getName("Henrique", "Jensen")).toBe("Henrique Jensen");
});

test("test toEqual", () => {
  expect(multiply(2, 10)).toEqual(20);
});

test("test toBeNull", () => {
  expect(getCity()).toBeNull();
});

test("test not", () => {
  expect(getCity("Sao Paulo")).not.toBeNull();
});
