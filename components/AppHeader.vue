/**
* 王文俊
* 2024年07月23日
*/
<template>
  <h1>AppHeader</h1>
  <ul class="header">
    <li>
      <NuxtLink to="/">index</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/login">login</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/cardList">cardList</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">about</NuxtLink>
    </li>
  </ul>

</template>

<script setup>

// }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    list-style: none;
  }
}

h2 {
  color: $globalColor;
}
</style>