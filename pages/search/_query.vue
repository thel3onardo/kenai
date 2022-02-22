<template>
  <div class="bg-gray-900 min-h-screen">
    <nav-bar :search_enabled="false"/>
    <form class="w-full px-8" @submit.prevent="searchContent">
      <input type="text" v-model="searchInput" placeholder="Search for a movie, TV show, etc" class="px-5 py-2 w-full bg-gray-400 rounded focus:outline-none search__input text-white">
    </form>
    <div class="w-full flex justify-center py-52" v-if="$fetchState.pending">
      <spinner/>
    </div>
    <div v-if="catalogContent.length === 0" class="w-full flex justify-center py-52">
      <h1 class="text-white">Nenhum resultado encontrado</h1>
    </div>
    <div class="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 justify-items-center py-5" v-if="!$fetchState.pending">
      <catalog-movie-card :height="350" :width="250" :img_url="`https://image.tmdb.org/t/p/original/${search_item.poster_path}`" :movie="search_item" v-for="search_item in catalogContent" :key="search_item.id" :loading="false" @load="setLoadingToFalse"/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/Navbar/NavBar.vue';
import Spinner from '~/components/Spinner.vue';

export default {
  data() {
    return {
      catalogContent: [],
      searchInput: '',
      loading: false,
    }
  },
  components: { 
    NavBar,
    Spinner,
  },
  async fetch() {
    if (this.$route.query.s) {
      this.getDataFromAPI('s', this.$route.query.s)
    } else if (this.$route.query.genre) {
      this.getDataFromAPI('genre', this.$route.query.genre)
    }
  },
  fetchOnServer: false,
  methods: {
    async getDataFromAPI(query_type, query_data) {
      const url = (query_type === 's') 
        ? `https://api.themoviedb.org/3/search/movie?query=${query_data}&api_key=732544339751a8291cc05e685efec0e9&language=en-US&page=1&include_adult=false`
        : `https://api.themoviedb.org/3/discover/movie?api_key=732544339751a8291cc05e685efec0e9&with_genres=${query_data}`

      try {
        console.log('trying')
        const res = await this.$axios.get(`${url}`);
        
        if (res.status === 200) {
          this.catalogContent = res.data.results;
        }
      } catch (err) {
        console.error(err);
      }
    },
    searchContent() {
      if (this.$route.params.query === this.searchInput) return;
      
      return this.$router.replace(this.searchInput);
    }
  }
}
</script>