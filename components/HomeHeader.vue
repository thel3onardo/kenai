<template>
  <div class="flex flex-col w-2/4">
    <div class="py-3">
        <span class="text-yellow p-3 bg-gray-900">{{ genre }}</span>
    </div>
    <div class="flex py-3">
        <span class="material-icons text-yellow md-18" 
        v-for="star in vote_average_stars" 
        :key="star" 
        v-bind:num-labels="vote_average_stars">start</span>
        <span class="material-icons text-white md-18">groups</span>
        <span class="text-white text-bold 12dp">{{ vote_counts }} votes</span>
    </div>
    <h1 class="text-white text-5xl py-3">{{ title }}</h1>
    <p class="text-white w-3/4 py-3">{{ overview }}</p>
    <div class="py-4">
        <button class="bg-yellow text-dark px-12 py-2 rounded">Assistir agora</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    data() {
        return {
            vote_average_stars: this.calculateStarsAmount(this.vote_average),
        }
    },
    props: {
        genre: {
            type: Number,
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