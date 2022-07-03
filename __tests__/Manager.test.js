const Manager = require("../lib/Manager");
const manager = new Manager("Josie", "1110000", "jsmith@gmail.com", "111");

test("test to see if we can get the constructor values from the constructor", () => {
  expect(manager.name).toBe("Josie");
  expect(manager.id).toBe("1110000");
  expect(manager.email).toBe("jsmith@gmail.com");
  expect(manager.officeNumber).toBe("111");
});

test("test to see if we can get the name from getName()", () => {
  expect(manager.getName()).toBe("Josie");
});
test("test to see if can get the id from the getId()", () => {
  expect(manager.getId()).toBe("1110000");
});

test("test if we can get the email from getEmail()", () => {
  expect(manager.getEmail()).toBe("jsmith@gmail.com");
});
test("test to see if we get the officeNumber from getOfficeNumber()", () => {
  expect(manager.getOfficeNumber()).toBe("111");
});
test("test to see if we can get the role from the getRole()", () => {
  expect(manager.getRole()).toBe("Manager");
});
