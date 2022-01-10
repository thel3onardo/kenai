<template>
  <div class="bg-gray-900 min-h-screen">
    <nav-bar :search_enabled="false"/>
    <form class="w-full px-8">
      <input type="text" placeholder="Search for a movie, TV show, etc" class="px-5 py-2 w-full bg-gray-400 rounded focus:outline-none search__input text-white">
    </form>
    <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 justify-items-center py-5">
      <catalog-movie-card :height="350" :width="250" :img_url="`https://image.tmdb.org/t/p/original/${search_item.poster_path}`" v-for="search_item in search_content" :key="search_item.id" :loading="false" @load="setLoadingToFalse"/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Spinner from '~/components/Loading.vue';

export default {
  data() {
    return {
      search_content: [],
    }
  },
  components: { 
    NavBar,
    Spinner,
  },
  async created() {
    const params = this.$route.params.query
    console.log(params);
    try {
      const response = (await this.$axios.get(`https://api.themoviedb.org/3/search/movie?query=${params}&api_key=732544339751a8291cc05e685efec0e9&language=en-US&page=1&include_adult=false`)).data.results;
      console.log(response);
      return this.search_content = response; 
    } 
    catch(err) {
      return console.log(err);
    }
    // return this.search_content = response.map((el) => el);
  },
  methods: {
    setLoadingToFalse(e) {
      return console.log(e);
    }
  }
  // async asyncData({ params, $axios }) {
  //   console.log(params);
  //   return;
    // const ids = (await $axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=732544339751a8291cc05e685efec0e9&language=en-US`)).data.genres;
    // console.log(ids);

    // const search_content = ids.find((el) => el.id == Number(params.id)) ?
    //   (await $axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=732544339751a8291cc05e685efec0e9&with_genres=${params.id}`)).data.results
    //   :
    //   (await $axios.get(`https://api.themoviedb.org/3/search/movie?api_key=732544339751a8291cc05e685efec0e9&query=${params.id}`))

    // return { search_content }
}
</script>