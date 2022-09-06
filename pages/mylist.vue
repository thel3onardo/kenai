<template>
  <div class="px-8" style="height: calc(100vh - 88px)">
    <h1 class="text-white font-bold text-4xl pt-8">Your list</h1>
    <p class="text-gray-500 py-3">
      Check out your favorite movies and select one to watch
    </p>
    <div class="flex justify-center items-center pt-32" v-if="!myList">
      <p class="text-white">You have no favourite movies yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'most_pages',
  data() {
    return {
      myList: null,
    }
  },
  mounted() {
    this.list = this.$store.state.myList
  },
}
</script>
