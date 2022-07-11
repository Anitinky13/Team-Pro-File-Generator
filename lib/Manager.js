const Employee = require("../lib/Employee.js");
// const Engineer = require("./lib/Engineer.js");
// const Intern = require("./lib/Intern.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
