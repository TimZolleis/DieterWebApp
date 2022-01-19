import { createStore } from "vuex";
import FormData from "./modules/FormData";
import authStates from "@/store/modules/AuthStates";
import userStore from "@/store/modules/UserStore";
import state from "@/store/modules/UserStore";
import createPersistedState from "vuex-persistedstate";

const userState = createPersistedState({
  paths: ["userStoreState"],
});

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    FormData,
    userStore,
    authStates,
    state,
  },
  plugins: [createPersistedState()],
});
