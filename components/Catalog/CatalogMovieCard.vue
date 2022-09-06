<template>
  <transition name="mano">
    <div>
      <div
        class="home__movie-card relative"
        :style="{ height: `${height}px`, width: `${width}px` }"
      >
        <nuxt-img
          :src="img_url"
          class="w-full h-full object-cover object-top rounded"
          :class="{ hidden: loading }"
          quality="20"
          @load="loading = false"
        />
        <div
          v-if="loading"
          class="absolute w-full h-full skeleton top-0 z-20"
        ></div>
        <div
          class="bg-black bg-opacity-75 text-white w-full h-full absolute top-0 p-5 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-100"
        >
          <h2 class="font-semibold text-1xl text-center">{{ movie.title }}</h2>
          <p class="pt-3 text-sm text-center line-clamp">
            {{ movie.overview }}
          </p>
          <button
            class="bg-yellow text-black px-8 py-2 mt-4 rounded-md hover:bg-opacity-75"
            @click="modalOpened = true"
          >
            See details
          </button>
        </div>
      </div>

      <catalog-movie-modal
        :movie="movie"
        v-if="modalOpened"
        @closeModal="modalOpened = false"
      />
    </div>
  </transition>
</template>

<script>
import FadeTransition from '../transitions/FadeTransition.vue'
import CatalogMovieModal from '../Catalog/CatalogMovieModal.vue'

export default {
  name: 'HomeMovieCard',
  data() {
    return {
      loading: true,
      cardHovered: false,
      modalOpened: false,
    }
  },
  components: {
    FadeTransition,
    CatalogMovieModal,
  },
  props: {
    img_url: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
/* stylelint-disable */
.skeleton {
  display: inline-block;
  overflow: hidden;
  background-color: rgb(168, 168, 168, 0.2);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#38383e, 0) 0,
      rgba(#38383e, 0.2) 20%,
      rgba(#38383e, 0.5) 60%,
      rgba(#38383e, 0)
    );
    animation: shimmer 3s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
