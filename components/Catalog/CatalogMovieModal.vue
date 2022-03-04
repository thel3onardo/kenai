<template>
  <div class="fixed z-10 h-screen top-0 left-0 w-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div class="flex items-center px-8 w-3/4 h-3/4 bg-center bg-no-repeat bg-cover test" :style="{'background-image': `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}" v-click-out="test">
          <div class="h-3/4 p-3 w-1/4 relative z-20">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="h-full object-cover rounded-md poster__img">
          </div>
          <div class="flex flex-col px-10 w-3/4 text-center relative z-20">
              <h2 class="text-white text-semibold text-2xl font-bold">{{ movie.title }}</h2>
              <div class="py-5 px-3">
                  <p class="text-white text-md uppercase font-thin text-left">vote count:</p>
                  <div class="flex py-2">
                      <span class="material-icons text-yellow select-none" v-for="star in voteAverageRounded" :key="star" :num-labels="voteAverageRounded">start</span>
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
    },
    computed: {
        voteAverageRounded() {
            return Math.round(this.movie.vote_average);
        }
    },
    methods: {
        test() {
            console.log('oiii');
        }
    }
}
</script>
<style lang="sass" scoped>
    .test
        &:before
            content: '',
            width: 100%,
            height: 100%,
            position: absolute,
            left: 0
            z-index: 10
            background-color: rgba(0, 0, 0, .8)

    .poster__img
        border-radius: 20px
        position: relative

        &::before
            content: ''
            border-radius: 25px
            position: absolute,
            inset: -5px,
            z-index: -1
            background-color: red
</style>