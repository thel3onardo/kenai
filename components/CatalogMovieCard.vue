<template>
  <div class="home__movie-card" :style="{'height': `${height}px`, 'width': `${width}px`}">
      <div v-if="loading" class="skeleton"></div>
    <img :src="img_url" class="w-full h-full object-cover object-top rounded" v-once v-else>
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
        loading: {
            type: Boolean,
            required: true,
        }
    },
}
</script>
<style scoped>
    .skeleton {
        display: inline-block;
        vertical-align: middle;
        background-color: #DDDBDD;
        width: 100%;
        height: 100%;
    }
</style>