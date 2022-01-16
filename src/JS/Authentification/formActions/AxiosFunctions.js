import store from "@/store";
import axios from "axios";

export default class AxiosFunctions {
  handleLogin() {}
  static handleRegister(user) {
    return new Promise((resolve, reject) => {
      store.commit("request");
      axios({
        url: "https://api.devicedieter.de/register",
        data: user,
        method: "POST",
      })
        .then((response) => {
          store.commit("request_pending");
          resolve(response);
        })
        .catch((error) => {
          store.commit("request_error");
          reject(error);
          //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
        });
    });
  }

  static handleLogin(user) {
    return new Promise((resolve, reject) => {
      store.commit("request");
      axios({
        url: "https://api.devicedieter.de/login",
        data: user,
        method: "POST",
      })
        .then((response) => {
          store.commit("auth_success");
          resolve(response);
        })
        .catch((error) => {
          store.commit("auth_error");
          reject(error);
          //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
        });
    });
  }
}
