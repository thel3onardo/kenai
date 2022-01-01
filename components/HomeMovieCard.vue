<template>
  <div class="home__movie-card">
      <img :src="img_url" class="w-full h-full" v-once>
  </div>
</template>

<script>
export default {
    name: 'HomeMovieCard',
    props: {
        img_url: {
            type: String,
            required: true,
        }
    }
}
</script>