const Intern = require("../lib/Intern");
const intern = new Intern("Ana", "1110000", "asmith@gmail.com", "san antonio");

test("test if we can get the constructor values from the constructor", () => {
  expect(intern.name).toBe("Ana");
  expect(intern.id).toBe("1110000");
  expect(intern.email).toBe("asmith@gmail.com");
  expect(intern.school).toBe("san antonio");
});
test("test to see if we can get the name values from the getName", () => {
  expect(intern.getName()).toBe("Ana");
});
test("test to see if can get the id from the getId", () => {
  expect(intern.getId()).toBe("1110000");
});
test("test if we can get the email from the getEmail", () => {
  expect(intern.getEmail()).toBe("asmith@gmail.com");
});
test("test to see if we can get the role from the getRole", () => {
  expect(intern.getRole()).toBe("Intern");
});
