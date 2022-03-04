<template>
  <div class="flex flex-col w-full md:w-3/4 lg:w-2/4">
    <div class="py-4 flex flex-wrap">
        <Nuxt-link :to="`/search/?genre=${genre.id}`" class="text-yellow text-sm px-3 py-2 mr-3 mt-3 font-medium bg-gray-900 hover:cursor-pointer" v-for="genre in genres_names" :key="genre">{{ genre.name }}</Nuxt-link>
    </div>
    <div class="flex py-3">
        <span class="material-icons text-yellow md-18 home__header__star-icon" 
        v-for="star in vote_average_stars" 
        :key="star" 
        v-bind:num-labels="vote_average_stars">start</span>
        <span class="material-icons text-white md-18">groups</span>
        <span class="text-white text-bold 12dp">{{ vote_counts }} votes</span>
    </div>
    <h1 class="text-white text-5xl py-3">{{ title }}</h1>
    <p class="text-white w-full md:w-3/4 py-3">{{ overview }}</p>
    <div class="py-4">
        <button class="bg-yellow text-dark px-12 py-2 rounded hover:opacity-70">Assistir agora</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    data() {
        return {
            vote_average_stars: this.calculateStarsAmount(this.vote_average),
            genres_names: [],
        }
    },
    async created () {
        try {
            const genres_from_api = (await this.$axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=732544339751a8291cc05e685efec0e9&language=en-US`)).data.genres;

            this.genre.forEach((genre_id) => {
                const genre_found = genres_from_api.find((el) => el.id === genre_id);
                
                if (genre_found) return this.genres_names.push(genre_found);
                return;
            });

            console.log(this.genres_names)
        } 
        catch(err) {
            return console.log(err);
        }
    },
    props: {
        genre: {
            type: Array,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        vote_counts: {
            type: Number,
            required: true,
        },
        vote_average: {
            type: Number,
            required: true,
        }
    },
    methods: {
        calculateStarsAmount(vote_average) {
            if (vote_average > 0 && vote_average <= 2) {
                return this.vote_average_stars = 1;
            } else if (vote_average > 2 && vote_average <= 4) {
                return this.vote_average_stars = 2;
            } else if (vote_average > 4 && vote_average <= 6) {
                return this.vote_average_stars = 3;
            } else if (vote_average > 6 && vote_average <= 8) {
                return this.vote_average_stars = 4;
            } else if (vote_average > 8 && vote_average <= 10) {
                return this.vote_average_stars = 5;
            }
        }
    }
}
</script>