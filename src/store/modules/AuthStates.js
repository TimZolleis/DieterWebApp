const state = {
  userState: "",
  actionState: "idle",
  error: [],
};

const getters = {
  getUserState: (state) => state.userStatus,
  getActionState: (state) => state.actionState,
  getError: (state) => state.error,
};

const actions = {};

const mutations = {
  set_user_status(state, payload) {
    state.userStatus = payload;
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
