<template>
  <form
    class="flex items-center justify-end transition-all"
    @submit.prevent="search"
  >
    <span class="material-icons cursor-pointer mx-4">search</span>
    <input
      type="text"
      v-model="searchString"
      class="bg-transparent border-white border-b-2 focus:outline-none w-3/4"
    />
  </form>
</template>

<script>
export default {
  name: 'NavBarSearch',
  data() {
    return {
      inputIsVisible: false,
      searchString: null
    }
  },
  methods: {
    search() {
      if (!this.searchString) return;
      this.$router.push(`/search/${this.searchString.replaceAll(' ', '+')}`);
    },
  },
}
</script>