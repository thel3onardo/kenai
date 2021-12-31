<template>
  <div class="flex flex-col items-center px-14">
      <img :src="pic" class="rounded-full w-44 h-44">
      <span class="text-3xl text-gray-500 py-5">{{ name }}</span>
  </div>
</template>

<script>
export default {
    name: 'PerfilItem',
    props: {
        pic: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
}
</script>