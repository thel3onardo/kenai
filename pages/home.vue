<template>
    <div class="home__bg-styles" :style="{ 'background-image': `url('${background}')` }">
        <header>a</header>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            background: ''
        }
    },
    async fetch() {
        try {
            const response = (await this.$axios.get(`https://api.themoviedb.org/3/movie/550?api_key=732544339751a8291cc05e685efec0e9`)).data;

            this.background = `https://image.tmdb.org/t/p/original${response.backdrop_path}`;
            console.log(this.background);
        } catch(err) {
            return console.log(err)
        }
    }
}
</script>