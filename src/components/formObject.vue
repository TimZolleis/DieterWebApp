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
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import AxiosFunctions from "@/JS/Authentification/formActions/AxiosFunctions";

export default {
  name: "Form",

  computed: mapState(["userState"]),
  currentRouteName() {
    return this.$route.name.toLowerCase();
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "set_user_status") {
        if (store.getters.getUserState === "loading") {
          this.loading = true;
          ValidateForm.validate(this.UserData, this.$route.name.toLowerCase());
        }
        if (store.getters.getUserState === "validated") {
          delete this.UserData["passwordComparison"];
          AxiosFunctions.handleAction(
            this.UserData,
            this.$route.name.toLowerCase()
          );
        }
        if (store.getters.getUserState === "request_pending") {
          this.$emit("registered", this.UserData.email);
        }
        if (store.getters.getUserState === "auth_success") {
          this.$router.push("/");
        }
        if (store.getters.getUserState === "error") {
          if (store.getters.getError === "invalid") {
            this.errors = store.state.error;
          }
          this.error = true;
        }
      }
    });
  },
  beforeUnmount() {
    this.unsubscribe();
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
    buttonClick() {
      store.commit("set_user_status", "loading");
    },
  },
  props: {
    store: Array,
    buttontext: String,
  },
};
</script>

<style scoped></style>
