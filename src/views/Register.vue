<template>
  <div class="grid place-items-center h-screen h-32" v-if="!registered">
    <div class="max-w-xl w-full space-y-2 bg-boxcolor rounded-2xl py-6 px-14">
      <div>
        <img
          class="mx-auto h-44 w-auto cursor-pointer"
          src="@/assets/images/DD_App.png"
          @click="$router.push('/')"
          alt=""
        />
        <h2 class="mt-6 text-center text-3xl font-bold text-white">
          Register to
        </h2>
        <h2 class="text-center text-5xl font-bold text-redbutton">Dieter</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Already registered?
          <a
            @click="$router.push('/Authentification')"
            class="font-medium text-redbutton hover:underline cursor-pointer"
          >
            Login to Dieter
          </a>
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <Form
          @registered="registerSuccess"
          @failed="handleError"
          @ready="
            (UserData) => {
              Value.push(UserData);
            }
          "
          :store="getRegisterData"
          :buttontext="'Register'"
        ></Form>
      </div>
    </div>
  </div>
  <div v-if="registered" class="grid place-items-center h-screen h-32">
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
          Thank you for
        </h2>
        <h2 class="text-center text-5xl font-bold text-green-500">
          Signing up!
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 mt-5">
          After verifying you can
          <a
            @click="$router.push('/Authentification')"
            class="font-medium text-green-500 hover:underline"
          >
            Login to Dieter
          </a>
        </p>
      </div>
      <div>
        <div
          class="space-y-12 rounded bg-green-500 bg-opacity-40 border border-green-500 mt-12"
        >
          <p class="text-white text-center px-4 py-3">
            Verification pending! A verifcation link was sent to
            <u>{{ email }}</u>
          </p>
        </div>
      </div>
    </div>
  </div>
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
          Your registration
        </h2>
        <h2 class="text-center text-5xl font-bold text-redbutton">Failed</h2>
        <p class="mt-2 text-center text-sm text-gray-600 mt-5">
          You may try
          <a
            @click="$router.push('/register')"
            class="font-medium text-redbutton hover:underline"
          >
            again
          </a>
          or check why it happened
        </p>
      </div>
      <div>
        <div
          class="space-y-12 rounded bg-redbutton bg-opacity-40 border border-redbutton mt-12"
        >
          <p class="text-white text-center px-4 py-3">Aus Gründen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import { mapGetters } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      registered: false,
      failed: false,
      email: "tim@zolleis.net",
      Value: [],
    };
  },
  computed: mapGetters(["getRegisterData"]),
  methods: {
    registerSuccess(email) {
      this.registered = true;
      this.email = email;
    },
    handleError(err) {
      this.failed = true;
      console.log(err);
    },
  },
  components: {
    Form,
  },
};
</script>

<style scoped></style>
