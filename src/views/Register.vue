<template>
  <div class="grid place-items-center h-screen h-32">
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
            @click="$router.push('/login')"
            class="font-medium text-redbutton hover:underline"
          >
            Login to Dieter
          </a>
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <Form
          @ready="
            (UserData) => {
              Value.push(UserData);
            }
          "
          :store="getRegisterData"
        ></Form>
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
      Value: [],
    };
  },
  computed: mapGetters(["getRegisterData"]),
  components: {
    Form,
  },
};
</script>

<style scoped></style>
