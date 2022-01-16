import { createStore } from "vuex";
import FormData from "./modules/FormData";
import Auth from "./modules/Auth";
import authStates from "@/store/modules/AuthStates";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    FormData,
    Auth,
    authStates,
  },
});
