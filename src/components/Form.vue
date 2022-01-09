<template>
  <div>
    <div v-for="FormData in store" :key="FormData.id">
      <div class="">
        <div class="py-0.5">
          <label for="{{FormData.id}}" class="sr-only">{{
            FormData.placeholder
          }}</label>
          <input
            id="{{FormData.id}}"
            name="email"
            :type="FormData.type"
            autocomplete="{{FormData.type}}"
            required=""
            class="appearance-none rounded-none relative block w-full px-3 p py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-red-500 focus:z-100 sm:text-sm"
            :placeholder="FormData.placeholder"
          />
        </div>
      </div>
    </div>
    <div class="py-6 drop-shadow-2xl">
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Form",
  props: {
    store: Function,
  },
};
</script>

<style scoped></style>
