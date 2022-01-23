<template>
  <div class="flex items-center space-x-1 px-14 py-3">
    <span class="text-redbutton font-bold text-2xl">Dieter</span>
    <div class="px-14 items-center space-x-1 md:flex inline-block">
      <router-link
        to="/"
        class="py-4 px-2 text-gray-500 font-semibold hover:text-redbutton transform hover:scale-110"
      >
        Home
      </router-link>
      <router-link
        to="/devices"
        class="py-4 px-2 text-gray-500 font-semibold hover:text-redbutton transform hover:scale-110"
      >
        Devices
      </router-link>
      <a
        href="https://github.com/elektr0nisch/dieter"
        class="py-4 px-2 text-gray-500 font-semibold hover:text-redbutton hover:scale-110 transform"
      >
        About(Github)
      </a>
      <div
        class="items-center flex space-x-1 py-3 text-redbutton justify-center"
      >
        Test
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
