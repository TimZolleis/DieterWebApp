import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {},
  userStatus: "",
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "https://api.devicedieter.de/login",
        data: user,
        method: "POST",
      })
        .then((response) => {
          const token = response.data.token;
          const user = response.data.user;
          const expirationDate = response.data.expirationDate;
          // let setUser = new SetUser();
          // setUser.setData(token);
          localStorage.setItem("token", token);
          localStorage.setItem("expirationDate", expirationDate);
          console.log(localStorage.getItem("token"));
          axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", token, user, expirationDate);
          resolve(response);
        })
        .catch((error) => {
          commit("auth_error");
          localStorage.removeItem("token");
          reject(error);
        });
    });
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "https://api.devicedieter.de/register",
        data: user,
        method: "POST",
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          commit("auth_error");
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  },
};

const mutations = {
  request(state, payload) {},
  request_pending(state) {
    state.status = "pending";
  },
  request_error(state) {
    state.status = "reqerror";
  },
  auth_success(state, token, user, expiration) {
    state.status = "success";
    state.token = token;
    state.user = user;
    state.expirationDate = expiration;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
