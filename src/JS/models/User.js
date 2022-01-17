export default class User {
  constructor(user) {
    this.username = user.sub;
    this.accountId = user.accountId;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.organisations = user.organisations;
    this.role = user.admin();
    this.email = user.email;
  }
  getUsername() {
    return this.username;
  }
  getAccountId() {
    return this.accountId;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getOrganisations() {
    return this.username;
  }
  getRole() {
    return this.role;
  }
  getEmail() {
    return this.email;
  }
}
