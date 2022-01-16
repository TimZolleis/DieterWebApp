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
        @click="handleSubmit()"
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
    handleSubmit2() {
      //set button to load status
      this.loading = true;
      //initialize form validation
      let validation = new ValidateForm();
      //validate current user data based on current route
      validation.validate(this.UserData, this.currentRouteName);
      //get potential errors
      if (validation.getErrors().length > 0) {
        this.errors = validation.getErrors();
      }
    },
    handleSubmit() {
      this.loading = true;
      this.errors.splice(0);
      if (this.currentRouteName.includes("login")) {
        if (!this.UserData.username) {
          this.error = true;
          this.errors.push("Username required");
          this.loading = false;
        }
        if (!this.UserData.password) {
          this.error = true;
          this.errors.push("Password required");
          this.loading = false;
        }
        if (this.UserData.username && this.UserData.password) {
          let username = this.UserData.username;
          let password = this.UserData.password;
          this.loading = true;
          this.$store
            .dispatch("login", { username, password })
            .then(() => this.$router.push("/"))
            .catch((err) => this.handleError(err));
        }
      } else if (this.currentRouteName.includes("register")) {
        if (!this.UserData.username) {
          this.error = true;
          this.errors.push("Username required");
          this.loading = false;
        }
        if (!this.UserData.email) {
          this.error = true;
          this.errors.push("Email required");
          this.loading = false;
        }
        if (!this.UserData.firstName) {
          this.error = true;
          this.errors.push("First name required");
          this.loading = false;
        }
        if (!this.UserData.lastName) {
          this.error = true;
          this.errors.push("Last name required");
          this.loading = false;
        }
        if (!this.UserData.password) {
          this.error = true;
          this.errors.push("Please enter a password");
          this.loading = false;
        }
        if (!this.UserData.passwordComparison) {
          this.error = true;
          this.errors.push("Please repeat your password");
          this.loading = false;
        }
        if (
          this.UserData.username &&
          this.UserData.email &&
          this.UserData.firstName &&
          this.UserData.lastName &&
          this.UserData.password &&
          this.UserData.passwordComparison
        ) {
          this.loading = true;
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
              .then(() => this.$emit("registered", email))
              .catch((err) => console.log(err));
          } else {
            this.error = true;
            this.loading = false;
            this.errors.push("Passwords do not match!");
          }
        }
      }
    },
    handleError(err) {
      err.response.data;
      console.log(err);
      this.$emit("failed", err);
    },
  },
  props: {
    store: Function,
    buttontext: String,
  },
};
</script>

<style scoped></style>
