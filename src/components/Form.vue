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
      class="rounded-xl bold border bg-redbutton bg-opacity-10 mx-auto border-redbutton text-center text-white py-1"
    >
      <ul v-for="error in errors" :key="error">
        {{
          error
        }}
      </ul>
    </div>
    <div class="py-6 drop-shadow-2xl">
      <button
        @click="handleSubmit()"
        class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-redbutton hover:bg-blue-500 hover:shadow-inner focus:bg-green-500"
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
      errors: [],
      borderColor2: "red",
      invalid: false,
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
    handleSubmit() {
      this.errors.splice(0);
      if (this.currentRouteName.includes("login")) {
        if (!this.UserData.username) {
          this.error = true;
          this.errors.push("Username required");
        }
        if (!this.UserData.password) {
          this.error = true;
          this.errors.push("Password required");
        }
        if (this.UserData.username && this.UserData.password) {
          let username = this.UserData.username;
          let password = this.UserData.password;
          this.$store
            .dispatch("login", { username, password })
            .then(() => this.$router.push("/"))
            .catch((err) => this.handleError(err));
        }
      } else if (this.currentRouteName.includes("register")) {
        if (!this.UserData.username) {
          this.error = true;
          this.errors.push("Username required");
        }
        if (!this.UserData.email) {
          this.error = true;
          this.errors.push("Email required");
        }
        if (!this.UserData.firstName) {
          this.error = true;
          this.errors.push("First name required");
        }
        if (!this.UserData.lastName) {
          this.error = true;
          this.errors.push("Last name required");
        }
        if (!this.UserData.password) {
          this.error = true;
          this.errors.push("Please enter a password");
        }
        if (!this.UserData.passwordComparison) {
          this.error = true;
          this.errors.push("Please repeat your password");
        }
        if (
          this.UserData.username &&
          this.UserData.email &&
          this.UserData.firstName &&
          this.UserData.lastName &&
          this.UserData.password &&
          this.UserData.passwordComparison
        ) {
          let username = this.UserData.username;
          let email = this.UserData.email;
          let firstName = this.UserData.firstName;
          let lastName = this.UserData.lastName;
          let password = this.UserData.password;
          if (this.UserData.password === this.UserData.passwordComparison) {
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
          } else {
            this.error = true;
            this.errors.push("Passwords do not match!");
          }
        }
      }
    },
  },
  props: {
    store: Function,
  },
};
</script>

<style scoped></style>
