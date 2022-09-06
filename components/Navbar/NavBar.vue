<template>
  <div
    class="w-full flex items-center justify-between text-white px-4 py-6 bg-transparent"
  >
    <div class="px-4">
      <Nuxt-link to="/catalog" class="text-4xl font-bold gradient-color"
        >Kenai</Nuxt-link
      >
    </div>
    <!-- > medium devices navbar -->
    <div class="hidden md:flex">
      <nav-bar-search class="px-6" />
      <Nuxt-link to="/catalog" class="px-6">Início</Nuxt-link>
      <Nuxt-link to="/mylist" class="px-6">Minha lista</Nuxt-link>
      <nav-bar-notifications class="px-6" />
      <nav-bar-profile class="px-6" />
    </div>
    <!-- small devices navbar -->
    <div class="md:hidden pr-4 flex items-center">
      <nav-bar-search class="px-6" />
      <div class="cursor-pointer" @click="mobileMenuVisible = true">
        <span class="material-icons select-none">menu</span>
      </div>
    </div>
    <transition name="fade" appear>
      <div
        class="bg-gray-900 bg-opacity-75 w-full h-screen fixed top-0 left-0 z-10"
        v-if="mobileMenuVisible"
      ></div>
    </transition>
    <transition name="slideInLeft" appear>
      <div
        class="bg-gray-900 w-3/4 h-screen flex flex-col pl-5 py-8 fixed right-0 bottom-0 z-20"
        v-if="mobileMenuVisible"
      >
        <div class="self-end pb-5 px-8 cursor-pointer">
          <span
            class="material-icons select-none"
            @click="mobileMenuVisible = false"
            >close</span
          >
        </div>
        <ul>
          <li class="pb-8" v-for="link in mobileLinks" :key="link.label">
            <NuxtLink :to="link.to" class="flex items-center">
              <span class="material-icons pr-5">{{ link.icon }}</span>
              <h3 class="font-normal">{{ link.label }}</h3>
            </NuxtLink>
          </li>
        </ul>
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
      mobileLinks: [
        { to: '/', label: 'Home', icon: 'home' },
        { to: '/', label: 'My list', icon: 'format_list_bulleted' },
        { to: '/', label: 'Notifications', icon: 'notifications_none' },
        { to: '/', label: 'Account', icon: 'perm_identity' },
      ],
    }
  },
  components: { NavBarSearch, NavBarNotifications, NavBarProfile },
}
</script>
<style lang="scss" scoped>
.slideInLeft-enter-active,
.slideInLeft-leave-active {
  transition: transform 0.5s ease;
}
.slideInLeft-enter-to,
.slideInLeft-leave {
  transform: translateX(0);
}

.slideInLeft-enter,
.slideInLeft-leave-to {
  transform: translateX(500px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
