<template>
  <div class="home__movie-card" :style="{'height': `${height}px`, 'width': `${width}px`}">
      <img :src="img_url" class="w-full h-full object-cover object-top" v-once>
  </div>
</template>

<script>
export default {
    name: 'HomeMovieCard',
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
        }
    }
}
</script>