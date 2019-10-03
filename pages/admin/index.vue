<template>
  <div>

    <div class="pt-20">
        <p class="text-3xl">PostList</p>
        <PostList type="all" isAdmin />
    </div>
  </div>
</template>



<script>
import PostList from '~/components/Post/PostList.vue'

export default {
  middleware: ['auth'],
  components: {
    PostList
  },
  data(){
    return {

    }
  },
  layout : 'admin'
}
</script>
