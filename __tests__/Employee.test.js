const Employee = require("../lib/Employee");
const employee = new Employee("nina", "1110000", "nsmith@gmail.com");

test("test to see if we can get the constructo values for the employee", () => {
  expect(employee.name).toBe("nina");
  expect(employee.id).toBe("1110000");
  expect(employee.email).toBe("nsmith@gmail.com");
});
test("test to see if we can get the name from getName()", () => {
  expect(employee.getName()).toBe("nina");
});

test("test to see if we can get the id from the getId()", () => {
  expect(employee.getId()).toBe("1110000");
});

test("test to see if we can get the email from getEmail()", () => {
  expect(employee.getEmail()).toBe("nsmith@gmail.com");
});

test("test if we can get the role from getRole()", () => {
  expect(employee.getRole()).toBe("Employee");
});
