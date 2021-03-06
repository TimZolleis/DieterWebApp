import store from "@/store";
import { authError, valid } from "@/JS/models/loadingStates";

export default new (class validateForm {
  validate(user, route) {
    this.user = user;
    this.ready = false;
    this.route = route;
    this.errors = [];
    if (route.includes("login")) {
      this.login();
      if (this.ready) {
        store.commit("set_user_state", valid);
      } else {
        store.commit("set_user_state", authError);
        store.commit("set_error", this.errors);
      }
    } else if (route.includes("register")) {
      this.register();
      if (this.errors.length > 0) {
        store.commit("set_user_state", authError);
        store.commit("set_error", this.errors);
      }
    }
  }

  login() {
    if (!this.user.username) {
      this.errors.push("Please enter your username");
    }
    if (!this.user.password) {
      this.errors.push("Please enter your password");
    } else this.ready = true;
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
})();
