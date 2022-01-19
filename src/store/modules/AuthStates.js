import validateForm from "@/JS/Authentification/formActions/ValidateForm";

const state = {
  userState: "",
  loggedIn: false,
  errors: [],
  email: "",
};

const getters = {
  getUserState: (state) => state.userState,
  getError: (state) => state.errors,
  getEmail: (state) => state.email,
};

const actions = {};

const mutations = {
  set_user_state(state, payload) {
    state.userState = payload;
  },
  set_login_state(state, payload) {
    state.loggedIn = payload;
  },
  set_error(state, payload) {
    state.errors = payload;
  },
  set_email(state, payload) {
    state.email = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
