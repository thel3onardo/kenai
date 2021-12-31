<template>
  <div class="w-screen h-screen bg-black py-5">
    <nav class="w-full flex justify-between px-5">
      <span class="text-4xl font-bold gradient-color">Kenai</span>
      <span class="text-white text-3xl font-extralight">{{ current_time }}</span>
    </nav>
    <main class="flex flex-col justify-center items-center">
      <h2 class="text-6xl text-white pt-14">Bem-vindo de volta ao Kenai</h2>
      <h4 class="text-4xl text-white py-5">Quem está usando?</h4>
      <div class="flex py-5">
        <perfil-item v-for="perfil in perfil_list" :key="perfil.name" :pic="perfil.pic" :name="perfil.name"/>
      </div>
      <button class="bg-gray-900 text-white py-3 px-8">Adicionar perfil</button>
    </main>
  </div>
</template>

<script>
import PerfilItem from '~/components/PerfilItem.vue';

export default {
  name: 'IndexPage',
  data() {
    return {
      perfil_list: [
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Maria' },
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Sofia' },
        { pic: 'https://exploringbits.com/wp-content/uploads/2021/11/anime-girl-pfp-2.jpg', name: 'Leonardo' },
      ],
      current_time: ''
    }
  },
  components: {
    PerfilItem
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