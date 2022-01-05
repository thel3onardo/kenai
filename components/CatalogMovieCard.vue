<template>
  <div class="home__movie-card" :style="{'height': `${height}px`, 'width': `${width}px`}">
      <img :src="img_url" class="w-full h-full object-cover object-top img" v-once v-show="true">
      <div v-if="loading" class="skeleton"></div>
  </div>
</template>

<script>
export default {
    name: 'HomeMovieCard',
    data() {
        return {
            loading: true,
        }
    },
    created() {
        this.loading = false;
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
    },
}
</script>
<style scoped>
    .skeleton {
        background-color: gray;
        width: 100%;
        height: 100%;
    }
</style>