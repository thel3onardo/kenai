<template>
    <transition name="mano">
        <div>
            <div class="home__movie-card relative" :style="{'height': `${height}px`, 'width': `${width}px`}" @mouseover="cardHovered = true" @mouseleave="cardHovered = false">
                <img :src="img_url" class="w-full h-full object-cover object-top rounded" v-once>
                <div class="bg-black bg-opacity-75 text-white w-full h-full absolute top-0 p-5 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <h2 class="font-semibold text-1xl text-center">{{ movie.title }}</h2>
                    <p class="pt-3 text-sm text-center line-clamp">{{ movie.overview }}</p>
                    <button class="bg-yellow text-black px-8 py-2 mt-4 rounded-md hover:bg-opacity-75" @click="modalOpened = true">See details</button>
                </div>
            </div>
            <catalog-movie-modal :movie="movie" v-if="modalOpened"/>
        </div>
    </transition>
</template>

<script>
import FadeTransition from '../transitions/FadeTransition.vue';
import CatalogMovieModal from '../Catalog/CatalogMovieModal.vue';

export default {
    name: 'HomeMovieCard',
    data() {
        return {
            loading: true,
            cardHovered: false,
            modalOpened: false,
        }
    },
    components: {
        FadeTransition,
        CatalogMovieModal
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
        },
        movie: {
            type: Object,
            required: true
        }
    },
}
</script>
<style scoped>
/* stylelint-disable */
.skeleton {
    display: inline-block;
    vertical-align: middle;
    background-color: #DDDBDD;
    width: 100%;
    height: 100%;
}

.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
</style>