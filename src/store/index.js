import { createStore } from "vuex";
import FormData from "./modules/FormData";
import authStates from "@/store/modules/AuthStates";
import userStore from "@/store/modules/UserStore";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    FormData,
    userStore,
    authStates,
  },
});
