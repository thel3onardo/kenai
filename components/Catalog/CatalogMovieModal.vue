<template>
  <div class="fixed z-10 h-screen top-0 left-0 w-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div class="flex items-center px-8 w-3/4 h-3/4 bg-opacity-75" :style="{'background-image': `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}">
          <div class="h-3/4 p-3 w-1/4">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="h-full object-cover rounded-md">
          </div>
          <div class="flex flex-col w-3/4 text-center">
              <h2 class="text-white text-semibold text-2xl font-bold">{{ movie.title }}</h2>
              <div class="py-5 px-3">
                  <p class="text-white text-md uppercase font-thin text-left">vote count:</p>
                  <div class="flex py-2">
                      <span class="material-icons text-yellow select-none" v-for="star in movie.vote_count" :key="star" :num-labels="movie.vote_count">start</span>
                  </div>
              </div>
              <h2 class="text-lg text-white font-semibold">Overview</h2>
              <p class="text-white py-2">{{ movie.overview }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CatalogMovieModal',
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        return console.log(this.movie);
    }
}
</script>