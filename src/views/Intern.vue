<template>
  <h3 class="text-redbutton">Hello {{ user.firstName }}</h3>
  >
</template>

<script>
import store from "@/store";

export default {
  name: "Intern",
  computed: {
    user() {
      return this.$store.getters.getUserData;
    },
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout", {})
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
