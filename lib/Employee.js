//create an employee class along with the constructor
class Employee {
  //call it with this.
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //call the get name function
  getName() {
    return this.name;
  }
  //call the getId function
  getId() {
    return this.id;
  }
  //call the getEmail function
  getEmail() {
    return this.email;
  }
  //call the emplloyee class
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
