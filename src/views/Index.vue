<template>
<div class="index">
  <Header></Header>
  <PostList></PostList>
</div>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import PostList from '../components/PostList.vue';
export default {
name: "Index",
  components: {PostList, Header}
}
</script>

<style lang="scss" scoped>
  .index{
    display:block ;
  }
</style>