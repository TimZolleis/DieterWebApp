import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {},
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: "https://api.somedomain.de/login",
        data: user,
        method: "POST",
      })
        .then((response) => {
          const token = response.data.token;
          const user = response.data.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", token, user);
          resolve(response);
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log(user);
          commit("auth_error");
          localStorage.removeItem("token");
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
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
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
