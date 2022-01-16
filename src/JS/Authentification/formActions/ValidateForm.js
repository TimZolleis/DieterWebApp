import AxiosFunctions from "@/JS/Authentification/formActions/AxiosFunctions";

export default class validateForm {
  validate(user, route) {
    this.user = user;
    this.route = route;
    this.errors = [];
    if (route.includes("login")) {
      this.login();
      if (this.errors.length <= 0) {
        //initialize login via axios
        AxiosFunctions.handleLogin();
      }
    }
    if (route.includes("register")) {
      this.register();
      if (this.errors.length <= 0) {
        AxiosFunctions.handleRegister();
      }
    }
  }

  login() {
    if (!this.user.username) {
      this.errors.push("Please enter your username");
    }
    if (!this.user.password) {
      this.errors.push("Please enter your password");
    }
  }

  register() {
    if (!this.user.username) {
      this.errors.push("Please enter a username");
    }
    if (!this.user.email) {
      this.errors.push("Please enter an email");
    }
    if (!this.user.firstName) {
      this.errors.push("Please enter your first name");
    }
    if (!this.user.lastName) {
      this.errors.push("Please enter your last name");
    }
    if (!this.user.password) {
      this.errors.push("Please enter your password");
    }
    if (!this.user.passwordComparison) {
      this.errors.push("Please repeat your password");
    }
  }
  getErrors() {
    return this.errors;
  }
}
