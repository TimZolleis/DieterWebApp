export const state = {
  userStoreState: {},
};

const getters = {
  getUserData: (state) => state.userStoreState,
};

const actions = {};

const mutations = {
  set_user(state, payload) {
    state.userStoreState = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
