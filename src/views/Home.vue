<template>
  <div class="grid place-items-center h-screen">
    <div class="max-w-max w-full space-x-20">
      <router-link
        class="bg-redbutton py-4 px-6 rounded-2xl font-bold text-2xl text-white"
        to="/login"
        >Login</router-link
      >
      <router-link
        class="bg-redbutton py-4 px-6 rounded-2xl font-bold text-2xl text-white"
        to="/register"
        >Register</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
