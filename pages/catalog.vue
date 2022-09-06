<template>
  <div class="bg-gray-900 relative">
    <div
      class="catalog__bg-styles w-full absolute left-0 z-10"
      :style="{ 'background-image': `url('${header_data.background}')` }"
      style="height: 900px"
    ></div>
    <div class="max-w-7xl mx-auto relative">
      <nav-bar class="absolute z-50" />
      <template v-if="!$fetchState.pending">
        <header class="relative flex items-center z-20 pb-48 pt-36 px-8">
          <catalog-header
            :title="header_data.title"
            :overview="header_data.overview"
            :genre="header_data.genre"
            :vote_counts="header_data.vote_counts"
            :vote_average="header_data.vote_average"
          />
        </header>
        <section class="flex flex-col relative z-20 px-8">
          <h2 class="text-white text-3xl mb-10 catalog__section-title">
            Populares
          </h2>
          <div
            v-swiper:mySwiper="swiperOption"
            class="w-full flex"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide flex justify-center"
                v-for="popular_movie in popular_movies"
                :key="popular_movie.id"
              >
                <catalog-movie-card
                  :img_url="`https://image.tmdb.org/t/p/original/${popular_movie.poster_path}`"
                  :height="440"
                  :width="300"
                  :movie="popular_movie"
                />
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </section>
        <section class="flex flex-col relative z-20 px-8 py-14">
          <h2 class="text-white text-3xl mb-10 catalog__section-title">
            Animações
          </h2>
          <div
            v-swiper:mySwiper2="swiperOption"
            class="w-full flex"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide flex justify-center"
                v-for="action_movie in action_movies"
                :key="action_movie.id"
              >
                <catalog-movie-card
                  :img_url="`https://image.tmdb.org/t/p/original${action_movie.poster_path}`"
                  :height="440"
                  :width="300"
                  :movie="action_movie"
                />
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script>
import CatalogHeader from '../components/Catalog/CatalogHeader.vue'
import CatalogMovieCard from '../components/Catalog/CatalogMovieCard.vue'
import NavBar from '~/components/Navbar/NavBar.vue'
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'CatalogPage',
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: false,
        speed: 800,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1366: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
        },
      },
      header_data: {
        background: '',
        title: '',
        overview: '',
        genre: '',
        vote_counts: 0,
        vote_average: 0,
      },
      popular_movies: [],
      action_movies: [],
    }
  },
  components: {
    CatalogHeader,
    CatalogMovieCard,
    NavBar,
  },
  async fetch() {
    await this.getHeaderMovieData()
    await this.getAPIData(
      'https://api.themoviedb.org/3/trending/all/week?api_key=732544339751a8291cc05e685efec0e9',
      15,
      this.popular_movies
    )
    await this.getAPIData(
      'https://api.themoviedb.org/3/discover/movie?api_key=732544339751a8291cc05e685efec0e9&with_genres=16',
      15,
      this.action_movies
    )
  },
  fetchOnServer: false,
  directives: {
    swiper: directive,
  },
  methods: {
    generateRandomNumber(max_num) {
      return Math.trunc(Math.random() * max_num)
    },
    async getAPIData(url, max_results, variable) {
      try {
        const response = (await this.$axios.get(`${url}`)).data.results

        for (let x = 0; x <= max_results; x++) {
          variable.push(response[x])
        }
        return
      } catch (err) {
        return console.log(err)
      }
    },
    async getHeaderMovieData() {
      try {
        const response = (
          await this.$axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=732544339751a8291cc05e685efec0e9`
          )
        ).data

        const header_movie = response.results[this.generateRandomNumber(20)]

        this.header_data.background = `https://image.tmdb.org/t/p/original${header_movie.backdrop_path}`
        this.header_data.title = header_movie.title || header_movie.name
        this.header_data.overview = header_movie.overview
        this.header_data.genre = header_movie.genre_ids
        this.header_data.vote_counts = header_movie.vote_count
        this.header_data.vote_average = header_movie.vote_average

        return
      } catch (err) {
        return console.log(err)
      }
    },
  },
}
</script>
