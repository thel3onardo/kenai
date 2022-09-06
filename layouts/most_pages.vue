<template>
  <div class="relative bg-gray-900 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <nav-bar />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import NavBar from '../components/Navbar/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>
