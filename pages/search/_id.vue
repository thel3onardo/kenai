<template>
  <div class="bg-gray-900 min-h-screen">
    <nav-bar :search_enabled="false"/>
    <form class="w-full px-8">
      <input type="text" class="px-5 py-2 w-full bg-gray-400 rounded focus:outline-none search__input text-white">
    </form>
    <div class="grid grid-rows-1 grid-cols-4 gap-y-10 justify-items-center" v-if="!$fetchState.pending">
      <catalog-movie-card :height="350" :width="250" :img_url="`https://image.tmdb.org/t/p/original/${search_item.poster_path}`" v-for="search_item in search_content" :key="search_item.id"/>
    </div>
    <spinner v-if="$fetchState.pending"/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Spinner from '~/components/Spinner.vue';

export default {
  data() {
    return {
      search_content: []
    }
  },
  components: { 
    NavBar,
    Spinner,
  },
  async fetch() {
    const param = this.$route.params.id;

    try {
      const response = (await this.$axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=732544339751a8291cc05e685efec0e9&with_genres=${param}`)).data.results;

      return this.search_content = response.map((el) => el);
    }
    catch(err) {
      return console.log(err);
    }
  },
}
</script>