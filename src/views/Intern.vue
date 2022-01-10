<template>
  <h3>This site is secret!</h3>
  <button
    class="rounded-full bg-red-600 py-2 px-4 items-center justify-center"
    @click="logout"
  >
    Logut
  </button>
</template>

<script>
export default {
  name: "Intern",
  methods: {
    logout() {
      this.$store
        .dispatch("logout", {
        })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
