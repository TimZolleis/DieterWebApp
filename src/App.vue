<template>
  <router-link to="/login"> </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  computed: {
    isLoggedin() {
      return this.$store.getters.isLoggedin;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/Authentification");
      });
    },
  },
};
</script>

<style></style>
