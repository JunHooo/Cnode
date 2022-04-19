<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "style/reset.css";
  .app{
    width: 100%;
    min-height: 100vh;
    background: #e1e1e1;
  }
</style>
