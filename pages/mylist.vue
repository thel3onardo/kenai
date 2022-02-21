<template>
    <transition name="mano">
        <div class="px-8" style="height: calc(100vh - 88px);">
            <h1 class="text-white font-bold text-4xl pt-8">Your list</h1>
            <p class="text-gray-500 py-3">Check out your favorite movies and select one to watch</p>
            <div class="flex justify-center items-center pt-28">
                <p class="text-white">There's no favourite movies.</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    layout: 'most_pages',
    mounted() {
        console.log(window.localStorage.getItem('favouriteItems'));
    }
}
</script>

<style>
.mano-enter-active, .mano-leave-active {
    transition: opacity 2s;
}

.mano-enter, .mano-leave-to {
    opacity: 0;
}
</style>