<template>
  <div class="w-full flex items-center justify-between text-white px-4 py-6">
      <div>
          <span class="text-4xl font-bold gradient-color">Kenai</span>
      </div>
      <div class="flex">
          <nav-bar-search class="px-6"/>
          <Nuxt-link to="/home" class="px-6">Início</Nuxt-link>
          <Nuxt-link to="/home" class="px-6">Minha lista</Nuxt-link>
          <nav-bar-notifications class="px-6"/>
          <nav-bar-profile class="px-6"/>
      </div>
  </div>
</template>

<script>
import NavBarNotifications from './NavBarNotifications.vue'
import NavBarProfile from './NavBarProfile.vue'
import NavBarSearch from './NavBarSearch.vue'

export default {
  components: { NavBarSearch, NavBarNotifications, NavBarProfile },

}
</script>