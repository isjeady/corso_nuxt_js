<template>
  <div>
    <p class="text-white font-extrabold text-3xl md:text-5xl">Home</p>
    <PostList type="last" />
  </div>
</template>

<script>
import PostList from '~/components/Post/PostList.vue'

export default {
  //middleware : 'firstMiddleware',
  components: {
    PostList
  }
}
</script>


