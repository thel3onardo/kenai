<template>
    <div class="bg-gray-900 relative">
        <div class="home__bg-styles w-full absolute z-10" :style="{'background-image': `url('${header_data.background}')`}" style="height: 900px"></div>
        <header class="relative flex items-center z-20 pb-48 pt-36 px-8">
            <home-header :title="header_data.title" :overview="header_data.overview" 
            :genre="header_data.genre" 
            :vote_counts="header_data.vote_counts"
            :vote_average="header_data.vote_average"/>
        </header>
        <section class="flex flex-col relative z-20 px-8">
            <h2 class="text-white text-2xl">Populares</h2>
            <div class="flex flex-row">
                <!-- <home-movie-card :img_url="`https://image.tmdb.org/t/p/original/${popular_movie.poster_path}`" v-for="popular_movie in popular_movies" :key="popular_movie.id"/> -->
                <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- Render original HTML in server, render Swiper in browser (client) -->
                        <p>oi</p>

                    </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import HomeMovieCard from '../components/HomeMovieCard.vue'
import { directive } from 'vue-awesome-swiper'

export default {
    name: 'HomePage',
    data() {
        return {
            header_data: {
                background: '',
                title: '',
                overview: '',
                genre: '',
                vote_counts: 0,
                vote_average: 0,
            },
            popular_movies: []
        }
    },
    components: {
        HomeHeader,
        HomeMovieCard
    },
    async fetch() {
        await this.getHeaderMovieData();
        await this.getPopularMovies();
    },
    directives: {
        swiper: directive
    },
    methods:{
        generateRandomNumber(max_num) {
            return Math.trunc(Math.random() * max_num);
        },
        async getPopularMovies() {
            try {
                const movies = (await this.$axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=732544339751a8291cc05e685efec0e9`)).data.results;

                for (let x = 0; x < 4; x++) {
                    this.popular_movies.push(movies[x]);
                }
                return;
            } catch(err) {
                return console.log(err);
            }
        },
        async getHeaderMovieData() {
            try {
                const response = (await this.$axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=732544339751a8291cc05e685efec0e9`)).data;

                const header_movie = response.results[this.generateRandomNumber(20)];

                this.header_data.background = `https://image.tmdb.org/t/p/original${header_movie.backdrop_path}`;
                this.header_data.title = header_movie.title || header_movie.name;
                this.header_data.overview = header_movie.overview;
                this.header_data.genre = header_movie.genre_ids[0];
                this.header_data.vote_counts = header_movie.vote_count;
                this.header_data.vote_average = header_movie.vote_average;

                return;
            } catch(err) {
                return console.log(err)
            }
        }
    }
}
</script>