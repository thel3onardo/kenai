<template>
  <div class="flex flex-col items-center px-14 border-1">
      <Nuxt-link to="/home">
        <div class="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center relative z-20 group" @mouseover="iconSettingsVisible = true" @mouseleave="iconSettingsVisible = false">
            <img :src="pic" class="group-hover:opacity-50 transition cursor-pointer">
            <transition name="fade" appear>
                <span class="material-icons text-white absolute z-10 cursor-pointer hidden" style="font-size: 4.5rem" v-if="iconSettingsVisible">settings</span>
            </transition>
        </div>
      </Nuxt-link>
      <span class="text-2xl text-gray-500 py-5 capitalize">{{ name }}</span>
  </div>
</template>

<script>
export default {
    name: 'PerfilItem',
    data() {
        return {
            iconSettingsVisible: false,
        }
    },
    props: {
        pic: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
}
</script>