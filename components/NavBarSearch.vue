<template>
  <form class="flex items-center" @mouseover="changeInputVisibility" @mouseout="a">
    <span class="material-icons cursor-pointer mx-4">search</span>
    <input type="text" ref="search" class="bg-transparent border-white border-b-2 w-3/4 focus:outline-none" v-show="inputIsVisible" @focus="inputFocused = !inputFocused">
  </form>
</template>

<script>
export default {
    name: 'NavBarSearch',
    data() {
      return {
        inputIsVisible: false,
        inputFocused: false,
      }
    },
    methods: {
      changeInputVisibility() {
        this.inputIsVisible = true;
        this.$refs.search.focus();
        return;
      },
      a() {
        if (!this.inputFocused) {
          return this.inputIsVisible = false;
        };
        return;
      }
    }
}
</script>