<template>
  <h1 class="text-redbutton">{{ hello }}</h1>
</template>

<script>
import VueRouter from "vue-router";
import axios from "axios";
export default {
  name: "Verify",
  data() {
    return {
      hello: "",
    };
  },
  mounted() {
    if (!this.$route.query.id) {
      this.$router.push("/register");
      alert(
        "You didnt provide a valid link! If you arent registered, go ahead!"
      );
    } else {
      this.sendId();
    }
  },
  methods: {
    sendId() {
      axios({
        method: "post",
        url: "https://api.devicedieter.de/verify",
        data: {
          userId: this.$route.query.id,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
