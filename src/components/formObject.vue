<template>
  <div>
    <div v-for="FormData in store" :key="FormData.id">
      <div class="">
        <div class="py-2">
          <label for="{{FormData.id}}" class="sr-only">{{
            FormData.placeholder
          }}</label>
          <input
            id="{{FormData.id}}"
            name="email"
            :type="FormData.type"
            autocomplete="{{FormData.type}}"
            class="rounded-2xl relative block w-full px-3 p py-3.5 placeholder-formtext text-white bg-formbackround focus:outline-none border-redbutton border-opacity-0 border-2 focus:border-opacity-100"
            :placeholder="FormData.placeholder"
            v-model="UserData[FormData.id]"
          />
        </div>
      </div>
    </div>
    <div
      v-if="error"
      class="rounded-xl text-sm bold border text-center bg-redbutton bg-opacity-10 mx-auto border-redbutton px-4 text-white py-1"
    >
      <ul v-for="error in errors" :key="error">
        <li>{{ error }}</li>
      </ul>
    </div>
    <div class="py-6 hover:scale-125">
      <button
        @click="buttonClick"
        class="group transform transition duration-500 hover:scale-105 relative hover:bg-green-500 w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-redbutton focus:bg-green-500"
      >
        <label v-if="!loading">{{ buttontext }}</label>
        <label v-if="loading" :aria-disabled="loading">Loading...</label>
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import ValidateForm from "@/JS/Authentification/formActions/ValidateForm";
import AxiosFunctions from "@/JS/Authentification/formActions/AxiosFunctions";
import { loading, success, valid } from "@/JS/models/loadingStates";
import { mapState } from "vuex";

export default {
  name: "Form",

  computed: mapState(["userState"]),
  created() {
    this.unwatch = store.watch(
      (state, getters) => getters.getUserState,
      (newValue, oldValue) => {
        this.handleValue(newValue);
      }
    );
  },
  beforeUnmount() {
    this.unwatch();
  },
  currentRouteName() {
    return this.$route.name.toLowerCase();
  },
  data() {
    return {
      errors: [],
      error: false,
      loading: false,
      UserData: {
        username: null,
        email: null,
        firstName: null,
        lastName: null,
        password: null,
        passwordComparison: null,
      },
    };
  },
  methods: {
    handleValue(val) {
      if (val === "loading") {
        this.loading = true;
        console.log("loading");
        ValidateForm.validate(this.UserData, this.$route.name.toLowerCase());
        console.log(store.getters.getError);
      }
      if (val === "error") {
        this.loading = false;
        this.error = true;
        this.errors = store.getters.getError;
      }
      if (val === valid) {
        AxiosFunctions.handleAction(
          this.UserData,
          this.$route.name.toLowerCase()
        );
        console.log("valid");
      }
    },
    buttonClick() {
      store.commit("set_user_state", "loading");
    },
  },
  props: {
    store: Array,
    buttontext: String,
  },
};
</script>

<style scoped></style>
