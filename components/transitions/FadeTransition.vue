<template>
    <transition name="fade" appear>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeTransition'
}
</script>

<style lang="sass" scoped>
    .fade-enter-active, .fade-leave-active
        transition: .5s ease
    
    .fade-enter, .fade-leave-to
        opacity: 0
</style>