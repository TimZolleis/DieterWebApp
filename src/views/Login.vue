<template>
  <div class="grid place-items-center h-screen">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-44 w-auto cursor-pointer"
          src="@/assets/images/DD_App.png"
          @click="$router.push('/l')"
          alt=""
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to
          <div class="text-red-600 text-4xl">Devicedieter</div>
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a @click="$router.push('/register')" href="/register" class="font-medium text-red-600 hover:text-black underline">
            Register to DeviceDieter
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <Form :store="getFormData"> </Form>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  computed: mapGetters(["getFormData"]),
  components: { Form},
};
</script>

<style scoped></style>
