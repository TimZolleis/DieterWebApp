<template>
  <div v-if="failed" class="grid place-items-center h-screen h-32">
    <div
      class="max-w-xl w-full space-y-2 bg-formbackround border-redbutton border rounded-2xl py-6 px-14"
    >
      <div>
        <img
          class="mx-auto h-44 w-auto cursor-pointer"
          src="@/assets/images/DD_App.png"
          @click="$router.push('/')"
          alt=""
        />
        <h2 class="mt-6 text-center text-3xl font-bold text-white">
          Verification
        </h2>
        <h2 class="text-center text-5xl font-bold text-redbutton">Failed</h2>
      </div>
      <div>
        <div
          class="space-y-12 rounded bg-redbutton bg-opacity-40 border border-redbutton mt-12"
        >
          <p v-for="error in errors" :key="error" class="text-white text-center px-4 py-3">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!failed" class="grid place-items-center h-screen h-32">
    <div
      class="max-w-xl w-full space-y-2 bg-formbackround border-green-500 border rounded-2xl py-6 px-14"
    >
      <div>
        <img
          class="mx-auto h-44 w-auto cursor-pointer"
          src="@/assets/images/DD_App.png"
          @click="$router.push('/')"
          alt=""
        />
        <h2 class="mt-6 text-center text-3xl font-bold text-white">
          Verification
        </h2>
        <h2 class="text-center text-5xl font-bold text-green-500">Successful!</h2>
        <p class="mt-2 text-center text-sm text-gray-600 mt-5">
          You may
          <a
            @click="this.$router.push('/login')"
            class="font-medium text-green-500 hover:underline"
          >
            login
          </a>
          now
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import axios from "axios";
import store from "@/store";
import { authError } from "@/JS/models/loadingStates";
export default {
  name: "Verify",
  data() {
    return {
      errors: [""],
      failed: false,
    };
  },
  created() {
    this.unwatch = store.watch(
      (state, getters) => getters.getUserState,
      (newValue) => {
        this.handleValue(newValue);
      }
    );
  },
  beforeUnmount() {
    this.unwatch();
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
          accountId: this.$route.query.id,
        },
      })
        .then()
        .catch((err) => {
          if(err.response.data.code.includes("ALREADY_VERIFIED")){
            this.failed = true;
            this.errors = ["Already verified!"]
          }
          else{
            this.failed = true;
            this.errors = ["Invalid ID!"]
          }
        });
    },
  },
};
</script>

<style scoped></style>
