<template>
  <div>
    Username: {{ UserData.username }} Password: {{ UserData.password }}
    <div v-for="FormData in store" :key="FormData.id">
      <div class="">
        <div class="py-0.5">
          <label for="{{FormData.id}}" class="sr-only">{{
            FormData.placeholder
          }}</label>
          <input
            id="{{FormData.id}}"
            name="email"
            :type="FormData.type"
            autocomplete="{{FormData.type}}"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 p py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-red-500 focus:z-100 sm:text-sm"
            :placeholder="FormData.placeholder"
            v-model="UserData[FormData.id]"
          />
        </div>
      </div>
    </div>
    <div class="py-6 drop-shadow-2xl">
      <button
        @click="handleSubmit()"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  computed: {
    currentRouteName() {
      return this.$route.name.toLowerCase();
    },
  },
  data() {
    return {
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
      console.log(text);
      if (text.includes("login")) {
        let username = this.UserData.username;
        let password = this.UserData.password;
        this.$store
          .dispatch("login", { username, password })
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      } else if (text.includes("Register")) {
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
