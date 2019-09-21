<template>
<div>
    <p class="text-white font-extrabold text-3xl md:text-5xl">Posts</p>
    <PostList type="all" />
</div>
</template>


<script>
import PostList from '~/components/Post/PostList.vue'

export default {
  components: {
    PostList
  },
  data(){
    return {

    }
  }
}
</script>
