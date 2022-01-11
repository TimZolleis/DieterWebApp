<template>
  <div class="grid place-items-center h-screen">
    <div class="max-w-xl w-full space-y-8 bg-boxcolor rounded-2xl py-6 px-14">
      <div class="">
        <img
          class="mx-auto h-44 w-auto cursor-pointer"
          src="@/assets/images/DD_App.png"
          @click="$router.push('/')"
          alt=""
        />
        <h2 class="mt-6 text-center text-3xl font-bold text-white">Login to</h2>
        <h2 class="text-center text-5xl font-bold text-redbutton">
          DeviceDieter
        </h2>
        <p class="mt-2 text-center text-sm text-formtext">
          You do not have an account?
          {{ " " }}
          <a
            @click="$router.push('/register')"
            href=""
            class="font-medium text-redbutton hover:bold underline"
          >
            Register to DeviceDieter
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
          :store="getFormData"
        >
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Value: [],
    };
  },
  name: "Login",
  computed: mapGetters(["getFormData"]),
  components: { Form },
};
</script>

<style scoped></style>
