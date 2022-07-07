const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Josh", "1110000", "jsmith@gmail.com", "jsmith");

test("test if we can get the constructor values from the constructor", () => {
  expect(engineer.name).toBe("Josh");
  expect(engineer.id).toBe("1110000");
  expect(engineer.email).toBe("jsmith@gmail.com");
  expect(engineer.githubUser).toBe("jsmith");
});

test("test if we can get the name from getName", () => {
  expect(engineer.getName()).toBe("Josh");
});

test("test to see if we can get the id from getId", () => {
  expect(engineer.getId()).toBe("1110000");
});

test("test to see if we can get the email from getEmail", () => {
  expect(engineer.getEmail()).toBe("jsmith@gmail.com");
});
test("test to see if we can get the github user from getGithubUser", () => {
  expect(engineer.getGithubUser()).toBe("jsmith");
});
test("test to see if we can get the role from getRole", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
