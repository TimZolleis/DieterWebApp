import store from "@/store";
import axios from "axios";
import { error } from "autoprefixer/lib/utils";
import { data } from "autoprefixer";
import {
  authError,
  authSuccess,
  invalid,
  pending,
} from "@/JS/models/loadingStates";
import UserStore from "@/store/modules/UserStore";
import ReadToken from "@/JS/Authentification/formActions/ReadToken";

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
    await axios({
      url: "https://api.devicedieter.de/register",
      data: user,
      method: "POST",
    })
      .then((response) => {
        store.commit("set_email", user.email);
        this.setData(response);
        store.commit("set_user_state", pending);
      })
      .catch((error) => {
        if (error.response.data.code.includes("USERNAME_TAKEN")) {
          store.commit("set_error", ["Benutzername vergeben!"]);
        }
        store.commit("set_user_state", authError);

        //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
      });
  }

  handleLogin(user) {
    return axios({
      url: "https://api.devicedieter.de/login",
      data: user,
      method: "POST",
    })
      .then((response) => {
        this.setData(response);
        ReadToken.parseToken();
        store.commit("set_user_state", authSuccess);
      })
      .catch((error) => {
        if (error.response.data.code.includes("INVALID_CREDENTIALS")) {
          store.commit("set_error", ["Fehlerhafte Zugangsdaten!"]);
        }
        store.commit("set_user_state", authError);
        //TODO: ERROR HANDLING BASED ON RESPONSE => ERRORHANDLING.JS
      });
  }
  setData(response) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("expirationDate", response.data.expirationDate);
  }
})();
