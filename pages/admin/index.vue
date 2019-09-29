<template>
  <div>
    <p class="text-black font-extrabold text-3xl md:text-5xl">Admin</p>
    <button @click="newPostPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Nuovo Post
    </button>
    <div class="pt-20">
        <p class="text-3xl">PostList</p>
        <PostList type="all" isAdmin />
    </div>
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
  },
  methods : {
    newPostPage(){
      this.$router.push('/admin/post/new');
    }
  },
  layout : 'admin'
}
</script>
