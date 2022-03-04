<template>
  <div class="relative bg-gray-900 min-h-screen">
      <nav-bar/>
      <Nuxt />
  </div>
</template>
<script>
  import NavBar from '../components/Navbar/NavBar.vue';
  export default {
    components: {
      NavBar
    }
  }
</script>