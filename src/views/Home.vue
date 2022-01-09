<template>
  <div class="relative w-32 h-32">
    <div class="inset-y-0 left-0">
      <button
        class="bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        @click="$router.push('/login')"
      >
        Login
      </button>
      <button @click="$router.push('/register')">Register</button>
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
