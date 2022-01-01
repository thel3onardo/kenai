<template>
    <div class="bg-gray-900">
        <div class="home__bg-styles mx-auto" :style="{'background-image': `url('${header_data.background}')`}">
            <header class="relative flex items-center z-20 px-8 pb-52 pt-28">
                <home-header :title="header_data.title" :overview="header_data.overview" 
                :genre="header_data.genre" 
                :vote_counts="header_data.vote_counts"
                :vote_average="header_data.vote_average"/>
            </header>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'

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
            }
        }
    },
    components: {
        HomeHeader,
    },
    async fetch() {
        try {
            const response = (await this.$axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=732544339751a8291cc05e685efec0e9`)).data;

            const header_movie = response.results[this.generateRandomNumber(20)];

            console.log(header_movie);

            this.header_data.background = `https://image.tmdb.org/t/p/original${header_movie.backdrop_path}`;
            this.header_data.title = header_movie.title || header_movie.name;
            this.header_data.overview = header_movie.overview;
            this.header_data.genre = header_movie.genre_ids[0];
            this.header_data.vote_counts = header_movie.vote_count;
            this.header_data.vote_average = header_movie.vote_average;
            console.log(header_movie.vote_average);
        } catch(err) {
            return console.log(err)
        }
    },
    methods:{
        generateRandomNumber(max_num) {
            const value = Math.trunc(Math.random() * max_num);
            console.log(value);
            return value;
        }
    }
}
</script>