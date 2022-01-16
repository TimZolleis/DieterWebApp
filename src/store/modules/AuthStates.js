const state = {
  userState: "",
};

const getters = {
  getUserState: (state) => state.userStatus,
};

const actions = {};

const mutations = {
  set_user_status(state, payload) {
    state.userStatus = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
