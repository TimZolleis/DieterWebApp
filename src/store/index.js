import { createStore } from "vuex";
import FormData from "./modules/FormData";
import authStates from "@/store/modules/AuthStates";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    FormData,
    authStates,
  },
});
