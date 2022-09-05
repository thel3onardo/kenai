<template>
  <div
    class="fixed z-10 h-screen top-0 left-0 w-screen bg-black bg-opacity-95 flex items-center justify-center select-none"
  >
    <transition name="bounce-in" appear>
      <div
        class="modal-container flex items-center px-8 w-3/4 max-w-5xl h-3/4 bg-center bg-no-repeat bg-cover bg-modal rounded-2xl relative overflow-hidden"
        :style="{
          'background-image': `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        }"
        v-click-out.prevent="emitCloseModal"
      >
        <div class="h-3/4 max-h-96 w-1/4 p-3 relative z-20">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            class="h-full object-cover rounded-md poster__img"
          />
        </div>

        <div class="flex flex-col px-10 w-3/4 relative z-20">
          <h2 class="text-white text-semibold text-3xl font-bold">
            {{ movie.title }}
          </h2>
          <div class="py-5 pr-3">
            <p class="text-white text-md uppercase font-thin text-left">
              vote count:
            </p>
            <div class="flex py-2">
              <span
                class="material-icons text-yellow select-none"
                v-for="star in voteAverageRounded"
                :key="star"
                :num-labels="voteAverageRounded"
                >start</span
              >
            </div>
          </div>
          <h2 class="text-xl text-white font-semibold">Overview</h2>
          <p class="text-white py-2">{{ movie.overview }}</p>
        </div>

        <div class="absolute right-5 top-5" @click="emitCloseModal">
          <span
            class="material-icons text-white relative z-20 select-none cursor-pointer"
            >close</span
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CatalogMovieModal',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    return console.log(this.movie)
  },
  computed: {
    voteAverageRounded() {
      return Math.round(this.movie.vote_average)
    },
  },
  methods: {
    emitCloseModal(e) {
      if (e.target.nodeName === 'BUTTON') return
      this.$emit('closeModal')
    },
  },
}
</script>
<style lang="sass" scoped>
.modal-container
   max-height: 550px

.bg-modal
  box-shadow: 0px 0px 20px rgba(255, 163, 52, .1)

  &:before
      content: '',
      width: 100%,
      height: 100%,
      position: absolute
      left: 0
      z-index: 10
      background-color: rgba(#121214, .95)

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

.bounce-in-enter-active, .bounce-in-leave-active
  transition: transform .5s cubic-bezier(.2, 1, .2, 1)

.bounce-in-enter, .bounce-in-leave-to
  transform: scale(.5)

.fade-enter-active, .fade-leave-active
  transition: opacity .3s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
