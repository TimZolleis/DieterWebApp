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
    <p v-if="invalid" class="text-redbutton">Invalid credentials!</p>
    <div class="py-6 drop-shadow-2xl">
      <button
        @click="handleSubmit()"
        class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-redbutton hover:bg-redbutton hover:shadow-inner focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <label v-if="!loading">Sign in</label>
        <label v-if="loading">Loading...</label>
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Form",
  computed: {
    authError() {
      return store.state.auth_error();
    },
    currentRouteName() {
      return this.$route.name.toLowerCase();
    },
  },
  data() {
    return {
      borderColor2: "red",
      invalid: false,
      loading: false,
      UserData: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      let text = this.currentRouteName;
      if (text.includes("login")) {
        let username = this.UserData.username;
        let password = this.UserData.password;
        this.$store
          .dispatch("login", { username, password })
          .then(() => this.$router.push("/"))
          .catch((err) => this.handleError(err));
      } else if (text.includes("register")) {
        console.log(text);
        let username = this.UserData.username;
        let email = this.UserData.email;
        let firstName = this.UserData.firstName;
        let lastName = this.UserData.lastName;
        let password = this.UserData.password;
        this.$store
          .dispatch("register", {
            username,
            email,
            firstName,
            lastName,
            password,
          })
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      }
    },
  },
  props: {
    store: Function,
  },
};
</script>

<style scoped></style>
