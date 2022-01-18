import validateForm from "@/JS/Authentification/formActions/ValidateForm";

const state = {
  userState: "",
  loggedIn: false,
  error: [],
};

const getters = {
  getUserState: (state) => state.userState,
  getLoginState: (state) => state.loggedIn,
  getError: (state) => state.error,
};

const actions = {};

const mutations = {
  set_user_status(state, payload) {
    state.userState = payload;
  },
  set_action_state(state, payload) {
    state.actionState = payload;
  },
  set_error(state, payload) {
    state.error = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
