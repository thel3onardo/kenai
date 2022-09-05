<template>
    <transition name="teste" appear v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </transition>
</template>

<script>
export default {}
</script>

<style lang="css">
    .teste-enter-active {
        transition: all 1s ease;
    }

    .teste-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .teste-enter, .teste-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }
</style>
