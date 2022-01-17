import store from "@/store";
import axios from "axios";
import { error } from "autoprefixer/lib/utils";

export default new (class AxiosFunctions {
  handleAction(user, route) {
    if (route.includes("register")) {
      this.handleRegister(user);
    }
    if (route.includes("login")) {
      this.handleLogin(user);
    }
  }

  handleRegister(user) {
    return new Promise((resolve, reject) => {
      store.commit("request");
      axios({
        url: "https://api.devicedieter.de/register",
        data: user,
        method: "POST",
      })
        .then((response) => {
          console.log(response.data.token);
          console.log(response.data.message);
          store.commit("set_user_status", "request_pending");
          resolve(response);
        })
        .catch((error) => {
          store.commit("set_user_status", "error");
          store.commit("set_error", "invalid");
          reject(error);
          //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
        });
    });
  }

  handleLogin(user) {
    return new Promise((resolve, reject) => {
      store.commit("request");
      axios({
        url: "https://api.devicedieter.de/login",
        data: user,
        method: "POST",
      })
        .then((response) => {
          this.setData(response);
          console.log("Login 1");
          store.commit("set_user_status", "auth_success");
          resolve(response);
        })
        .catch((error) => {
          store.commit("set_user_status", "error");
          store.commit("set_error", "invalid");
          reject(error);
          //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
        });
    });
  }
  setData(response) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("expirationDate", response.data.expirationDate);
  }
})();
