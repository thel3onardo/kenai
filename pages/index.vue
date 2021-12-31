<template>
  <div class="min-w-screen min-h-screen bg-black py-5">
    <nav class="w-full flex justify-between px-5">
      <span class="text-4xl font-bold gradient-color">Kenai</span>
      <span class="text-white text-3xl font-extralight">{{ current_time }}</span>
    </nav>
    <main class="flex flex-col justify-center items-center main__container">
      <h2 class="text-6xl text-white pt-14 text-center lg:text-left">Bem-vindo de volta ao Kenai</h2>
      <h4 class="text-4xl text-white py-5">Quem está usando?</h4>
      <div class="flex flex-col md:flex-row py-5">
        <profile-item v-for="profile in profile_list" :key="profile.name" :pic="profile.pic" :name="profile.name"/>
      </div>
      <button class="bg-gray-900 text-white py-3 mb-3 md:mb-0 px-8 hover:opacity-60 flex items-center">
        Adicionar profile
        <span class="material-icons pl-2">add</span>  
      </button>
    </main>
  </div>
</template>

<script>
import ProfileItem from '~/components/ProfileItem.vue';

export default {
  name: 'IndexPage',
  data() {
    return {
      profile_list: [
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Maria' },
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Sofia' },
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Leonardo oliveira' },
      ],
      current_time: ''
    }
  },
  components: {
    ProfileItem
  },
  mounted() {
    let time = new Date();
    time = String(time).split(' ')[4].split(':');
    this.current_time = `${time[0]}:${time[1]}`;

    setInterval(() => {      
      this.current_time = `${time[0]}:${time[1]}`;
    }, 30000)
  }
}
</script>

<style>
.gradient-color {
  background: linear-gradient(260deg, #FF267A, #FFA634);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

</style>