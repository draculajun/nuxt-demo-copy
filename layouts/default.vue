/**
* 王文俊
* 2024年07月23日
*/
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
})
</script>

<style scoped lang="scss">

</style>