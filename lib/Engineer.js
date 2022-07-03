class Engineer {
  constructor(name, id, email, githubUser) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.githubUser = githubUser;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
