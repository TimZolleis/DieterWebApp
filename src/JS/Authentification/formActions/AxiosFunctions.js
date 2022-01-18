import store from "@/store";
import axios from "axios";
import { error } from "autoprefixer/lib/utils";
import { data } from "autoprefixer";

export default new (class AxiosFunctions {
  async handleAction(user, route) {
    if (route.includes("register")) {
      await this.handleRegister(user);
    }
    if (route.includes("login")) {
      await this.handleLogin(user);
    }
  }

  async handleRegister(user) {
    store.commit("request");
    await axios({
      url: "https://api.devicedieter.de/register",
      data: user,
      method: "POST",
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        store.commit("set_user_state", "request_pending");
      })
      .catch((error) => {
        store.commit("set_user_state", "error");
        store.commit("set_error", "invalid");

        //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
      });
  }

  handleLogin(user) {
    console.log("(Axios) logging in");
    store.commit("request");
    return axios({
      url: "https://api.devicedieter.de/login",
      data: user,
      method: "POST",
    })
      .then((response) => {
        this.setData(response);
        store.commit("set_login_state", true);
        store.commit("set_user_state", "auth_success");
      })
      .catch((error) => {
        if (error.response.data.code.includes("INVALID_CREDENTIALS")) {
          store.commit("set_error", ["Fehlerhafte Zugangsdaten!"]);
        }
        store.commit("set_user_state", "error");
        //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
      });
  }
  setData(response) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("expirationDate", response.data.expirationDate);
  }
})();
