<template>
  <div class="w-full flex items-center justify-between text-white px-4 py-6 bg-transparent">
      <div class="px-4">
          <Nuxt-link to="/catalog" class="text-4xl font-bold gradient-color">Kenai</Nuxt-link>
      </div>
      <div class="hidden sm:flex">
          <nav-bar-search class="px-6" v-if="search_enabled"/>
          <Nuxt-link to="/catalog" class="px-6">Início</Nuxt-link>
          <Nuxt-link to="/search/wqdkqwdikwk" class="px-6">Minha lista</Nuxt-link>
          <nav-bar-notifications class="px-6"/>
          <nav-bar-profile class="px-6"/>
      </div>
      <div class="block sm:hidden pr-4" @click="mobileMenuVisible = true">
        <span class="material-icons">menu</span>
      </div>
      <transition name="fade" appear>
      <div class="h-screen w-full fixed top-0 left-0 bg-gray-900 bg-opacity-75 flex justify-end" v-if="mobileMenuVisible">
        <transition name="slideInLeft" appear>
        <div class="bg-gray-900 w-3/4 flex flex-col px-5 py-8">
          <div class="self-end pb-5">
            <span class="material-icons" style="font-size: 2rem" @click="mobileMenuVisible = false">close</span>
          </div>
          <ul>
            <li class="pb-8">
              <NuxtLink to="/" class="flex items-center">
                <span class="material-icons pr-5">home</span>
                <h3 class="font-normal">Home</h3>
              </NuxtLink>
            </li>
            <li class="pb-8">
              <NuxtLink to="/" class="flex items-center w-full">
                <span class="material-icons pr-5">format_list_bulleted</span>
                <h3 class="font-normal">My List</h3>
              </NuxtLink>
            </li>
            <li class="pb-8">
              <NuxtLink to="/" class="flex items-center">
                <span class="material-icons pr-5">notifications_none</span>
                <h3 class="font-normal">Notifications</h3>
              </NuxtLink>
            </li>
            <li class="pb-8">
              <NuxtLink to="/" class="flex items-center">
                <span class="material-icons pr-5">perm_identity</span>
                <h3 class="font-normal">Account</h3>
              </NuxtLink>
            </li>
          </ul>
        </div>
        </transition>
      </div>
      </transition>
  </div>
</template>

<script>
import NavBarNotifications from './NavBarNotifications.vue'
import NavBarProfile from './NavBarProfile.vue'
import NavBarSearch from './NavBarSearch.vue'

export default {
  data() {
    return {
      mobileMenuVisible: false,
    }
  },
  props: {
    search_enabled: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  components: { NavBarSearch, NavBarNotifications, NavBarProfile },
}
</script>
<style lang="scss" scoped>
.slideInLeft-enter-active, .slideInLeft-leave-active {
    transition: transform 1s ease;
}
.slideInLeft-enter, .slideInLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(200px);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>