const state = {
  user: {},
};

const getters = {
  getUserData: (state) => state.user,
};

const actions = {};

const mutations = {
  set_user(state, payload) {
    state.user = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
